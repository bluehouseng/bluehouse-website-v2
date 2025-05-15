import React from 'react';

interface LocationStatusProps {
  isInOffice: boolean;
  locationError?: string;
}

export const LocationStatus = ({ isInOffice, locationError }: LocationStatusProps) => {
  return (
    <div className="flex items-center my-6">
      <span className={`text-xl mr-2 ${isInOffice ? 'text-green-500' : 'text-red-500'}`}>
        {isInOffice ? '📍' : '❌'}
      </span>
      <span className={`text-sm ${isInOffice ? 'text-green-600' : 'text-red-600'}`}>
        {isInOffice
          ? 'You are in the office'
          : locationError || 'You are outside the office'}
      </span>
    </div>
  );
};