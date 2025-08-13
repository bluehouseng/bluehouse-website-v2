import React, { useState, useEffect } from 'react';
import Button from '../buttons';
import { getCurrentLocation } from '../../lib/location';

interface OutsideOfficeScreenProps {
  locationError?: string;
  onRetry: () => void | Promise<void>;
  isRetrying?: boolean;
}

export const OutsideOfficeScreen = ({ 
  locationError, 
  onRetry, 
  isRetrying = false 
}: OutsideOfficeScreenProps) => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState<boolean>(true);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        setIsLoadingLocation(true);
        const position = await getCurrentLocation();
        
        if (position) {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        }
      } catch (error) {
        console.error('Error getting location:', error);
        // Don't set location if there's an error - component will still show without coordinates
      } finally {
        setIsLoadingLocation(false);
      }
    };

    getUserLocation();
  }, []); // Only run once on mount

  const handleRetryClick = async () => {
    try {
      await onRetry();
    } catch (error) {
      console.error('Retry failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <span className="text-6xl text-red-500 mb-4">📍</span>
      <h1 className="text-xl font-bold text-gray-800 text-center">
        You are outside the office
      </h1>
      
      <p className="text-sm text-gray-600 mt-2 text-center max-w-md">
        {locationError || 'You must be within the office premises to access this feature.'}
      </p>
      
      {isLoadingLocation ? (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Getting your location...
        </p>
      ) : userLocation ? (
        <p className="text-sm text-gray-600 mt-2 text-center">
          Your location: Lat {userLocation.lat.toFixed(4)}, Long {userLocation.lng.toFixed(4)}
        </p>
      ) : (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Unable to determine your exact location
        </p>
      )}

      <Button
        text={isRetrying ? "Checking Location..." : "Retry Location Check"}
        onClick={handleRetryClick}
        disabled={isRetrying}
        className={`mt-6 py-3 px-6 rounded-lg text-white transition-colors ${
          isRetrying 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
        }`}
      />
      
      {isRetrying && (
        <div className="mt-2 flex items-center space-x-2">
          <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
          <span className="text-sm text-gray-600">Verifying your location...</span>
        </div>
      )}
    </div>
  );
};