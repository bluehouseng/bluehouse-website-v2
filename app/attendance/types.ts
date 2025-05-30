export interface UserProfile {
  id: string;
  name: string;
  stack: string;
  image?: string;
  email: string;
}

export interface AttendanceRecord {
  _id: string;
  date: string;
  checkInTime?: string;
  checkOutTime?: string;
}

export type OfficeLocation = {
  latitude: number;
  longitude: number;
};

export const OFFICE_LOCATION: OfficeLocation = {
  // latitude: 6.5244,
  // longitude:  3.3792,
  latitude: 9.8845,
  longitude: 8.8766,
};

export const GEOFENCE_RADIUS = 100; // meters

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

export type AttendanceStatus = {
  hasCheckedIn: boolean;
  hasCheckedOut: boolean;
};
