import { OFFICE_LOCATION, GEOFENCE_RADIUS, calculateDistance } from '../app/attendance/types';

export const checkLocationPermission = async () => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by your browser');
  }

  return new Promise<boolean>((resolve) => {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      resolve(result.state === 'granted');
    });
  });
};

export const getCurrentLocation = async (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  });
};

export const checkIsInOffice = async (): Promise<{
  isInOffice: boolean;
  location?: GeolocationPosition;
  error?: string;
}> => {
  try {
    const hasPermission = await checkLocationPermission();
    if (!hasPermission) {
      return {
        isInOffice: false,
        error: 'Location permission is required to use this app',
      };
    }

    const location = await getCurrentLocation();
    const { latitude, longitude } = location.coords;

    const distance = calculateDistance(
      latitude,
      longitude,
      OFFICE_LOCATION.latitude,
      OFFICE_LOCATION.longitude
    );

    return {
      isInOffice: distance <= GEOFENCE_RADIUS,
      location,
      error: distance > GEOFENCE_RADIUS ? `You must be within ${GEOFENCE_RADIUS}m of the office` : undefined,
    };
  } catch (error) {
    console.error('Error checking location:', error);
    return {
      isInOffice: false,
      error: 'Failed to verify location',
    };
  }
};