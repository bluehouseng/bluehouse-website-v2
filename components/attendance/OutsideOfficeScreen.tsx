import React, { useState, useEffect } from 'react';
import Button from '../buttons';

interface OutsideOfficeScreenProps {
  locationError?: string;
  onRetry: () => void;
}

export const OutsideOfficeScreen = ({ locationError, onRetry }: OutsideOfficeScreenProps) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <span className="text-6xl text-red-500 mb-4">📍</span>
      <h1 className="text-xl font-bold text-gray-800 text-center">
        You are outside the office
      </h1>
      <p className="text-sm text-gray-600 mt-2 text-center">
        {locationError || 'You must be within the office premises to access this feature.'}
      </p>
      
      {userLocation && (
        <p className="text-sm text-gray-600 mt-2 text-center">
          Your location: Lat {userLocation.lat.toFixed(4)}, Long {userLocation.lng.toFixed(4)}
        </p>
      )}

      <Button
        text="Retry Location Check"
        onClick={onRetry}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg"
      />
    </div>
  );
};