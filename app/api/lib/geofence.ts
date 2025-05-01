const OFFICE_LOCATION = {
    latitude: 37.7749, // Example: San Francisco coordinates
    longitude: -122.4194,
  };
  const GEOFENCE_RADIUS = 100; // meters
  
  // Haversine formula to calculate distance between two points (in meters)
  const getDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371e3; // Earth's radius in meters
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };
  
  export const isWithinGeofence = (latitude: number, longitude: number): boolean => {
    const distance = getDistance(
      latitude,
      longitude,
      OFFICE_LOCATION.latitude,
      OFFICE_LOCATION.longitude
    );
    return distance <= GEOFENCE_RADIUS;
  };