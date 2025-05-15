import React from 'react';
import { UserProfile } from '../../app/attendance/types';
import Image from 'next/image';

interface ProfileCardProps {
  userProfile: UserProfile;
  location?: GeolocationPosition | null;
}

export const ProfileCard = ({ userProfile, location }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-5 mx-auto shadow-md flex items-center mb-6">
      <div className="relative w-16 h-16 rounded-full border-2 border-blue-500 mr-4 overflow-hidden">
        {userProfile.image ? (
          <Image
            src={userProfile.image}
            alt={userProfile.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{userProfile.name}</h2>
        <p className="text-sm text-gray-500">{userProfile.stack}</p>
        {location && (
          <>
            <p className="text-sm text-gray-500">
              Lat: {location.coords.latitude.toFixed(4)}
            </p>
            <p className="text-sm text-gray-500">
              Long: {location.coords.longitude.toFixed(4)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};