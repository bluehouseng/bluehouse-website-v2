import { OFFICE_LOCATION, GEOFENCE_RADIUS, calculateDistance } from '../app/attendance/types';

// Type definitions for better type safety
interface LocationResult {
  isInOffice: boolean;
  location?: GeolocationPosition;
  error?: string;
}

interface IPLocationData {
  latitude: number;
  longitude: number;
  // Add other properties if needed
  city?: string;
  country?: string;
  ip?: string;
}

export const checkLocationPermission = async (): Promise<boolean> => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by your browser');
  }

  try {
    const result = await navigator.permissions.query({ name: 'geolocation' });
    return result.state === 'granted';
  } catch (error) {
    // Fallback for browsers that don't support permissions API
    return true; // Assume permission will be requested when needed
  }
};

export const getLocationFallback = async (): Promise<{ lat: number; lng: number }> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: IPLocationData = await response.json();
    
    if (!data.latitude || !data.longitude) {
      throw new Error('Invalid location data from IP service');
    }
    
    return { 
      lat: data.latitude, 
      lng: data.longitude 
    };
  } catch (error) {
    console.error('IP location fallback failed:', error);
    throw new Error('Failed to get location from IP service');
  }
};

export const getCurrentLocation = async (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("Geolocation not supported"));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      async (error) => {
        console.warn("GPS failed, falling back to IP location:", error);
        try {
          const ipLocation = await getLocationFallback();
          
          // Create a proper GeolocationCoordinates object
          const fallbackCoords: GeolocationCoordinates = {
            latitude: ipLocation.lat,
            longitude: ipLocation.lng,
            accuracy: 5000, // Estimated accuracy for IP-based location
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            speed: null,
            toJSON: function() {
              return {
                latitude: this.latitude,
                longitude: this.longitude,
                accuracy: this.accuracy,
                altitude: this.altitude,
                altitudeAccuracy: this.altitudeAccuracy,
                heading: this.heading,
                speed: this.speed
              };
            }
          };

          const fallbackPosition: GeolocationPosition = {
            coords: fallbackCoords,
            timestamp: Date.now(),
            toJSON: function() {
              return {
                coords: this.coords.toJSON(),
                timestamp: this.timestamp
              };
            }
          };
          
          resolve(fallbackPosition);
        } catch (fallbackError) {
          reject(fallbackError);
        }
      },
      { 
        enableHighAccuracy: true, 
        timeout: 8000,
        maximumAge: 300000 // Cache location for 5 minutes
      }
    );
  });
};

export const checkOfficeLocation = async (): Promise<LocationResult> => {
  try {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      return {
        isInOffice: false,
        error: 'Geolocation is not supported by your browser'
      };
    }

    // Get current location
    const location = await getCurrentLocation();
    
    if (!location) {
      return {
        isInOffice: false,
        error: 'Failed to get current location'
      };
    }

    const { latitude, longitude } = location.coords;

    // Validate coordinates
    if (typeof latitude !== 'number' || typeof longitude !== 'number' || 
        isNaN(latitude) || isNaN(longitude)) {
      return {
        isInOffice: false,
        error: 'Invalid location coordinates received'
      };
    }

    // Calculate distance to office
    const distance = calculateDistance(
      latitude,
      longitude,
      OFFICE_LOCATION.latitude,
      OFFICE_LOCATION.longitude
    );

    const isInOffice = distance <= GEOFENCE_RADIUS;

    return {
      isInOffice,
      location,
      error: !isInOffice ? 
        `You must be within ${GEOFENCE_RADIUS}m of the office (currently ${Math.round(distance)}m away)` : 
        undefined
    };

  } catch (error) {
    console.error('Error checking office location:', error);
    return {
      isInOffice: false,
      error: error instanceof Error ? error.message : 'Failed to verify location'
    };
  }
};

// Utility function to request location permission explicitly
export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: false,
        timeout: 5000
      });
    });
    return true;
  } catch (error) {
    console.warn('Location permission denied:', error);
    return false;
  }
};

// Optional: Function to watch location changes (for continuous monitoring)
export const watchOfficeLocation = (
  callback: (result: LocationResult) => void,
  options?: PositionOptions
): number | null => {
  if (!navigator.geolocation) {
    callback({
      isInOffice: false,
      error: 'Geolocation is not supported by your browser'
    });
    return null;
  }

  return navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const distance = calculateDistance(
        latitude,
        longitude,
        OFFICE_LOCATION.latitude,
        OFFICE_LOCATION.longitude
      );

      const isInOffice = distance <= GEOFENCE_RADIUS;

      callback({
        isInOffice,
        location: position,
        error: !isInOffice ? 
          `You must be within ${GEOFENCE_RADIUS}m of the office (currently ${Math.round(distance)}m away)` : 
          undefined
      });
    },
    (error) => {
      console.error('Location watch error:', error);
      callback({
        isInOffice: false,
        error: 'Failed to monitor location'
      });
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000, // Cache for 1 minute
      ...options
    }
  );
};