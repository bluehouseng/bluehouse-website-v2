import React, { useMemo } from 'react';
import Button from '../buttons';

interface CheckInOutButtonProps {
  isInOffice: boolean;
  isLoading: boolean;
  hasCheckedIn: boolean;
  hasCheckedOut: boolean;
  onClick: () => void;
}

export const CheckInOutButton = ({
  isInOffice,
  isLoading,
  hasCheckedIn,
  hasCheckedOut,
  onClick,
}: CheckInOutButtonProps) => {
  const buttonState = useMemo(() => {
    if (hasCheckedOut) {
      return {
        text: 'Attendance Completed',
        disabled: true,
        className: 'bg-gray-400 text-white cursor-not-allowed',
      };
    }
    if (hasCheckedIn) {
      return {
        text: 'Check Out',
        disabled: !isInOffice || isLoading,
        className: !isInOffice || isLoading
          ? 'bg-red-300 text-white cursor-not-allowed'
          : 'bg-red-500 hover:bg-red-600 text-white',
      };
    }
    return {
      text: 'Check In',
      disabled: !isInOffice || isLoading,
      className: !isInOffice || isLoading
        ? 'bg-green-300 text-white cursor-not-allowed'
        : 'bg-green-500 hover:bg-green-600 text-white',
    };
  }, [isInOffice, isLoading, hasCheckedIn, hasCheckedOut]);

  return (
    <Button
      text={buttonState.text}
      onClick={onClick}
      disabled={buttonState.disabled}
      className={`w-full py-3 rounded-lg transition-colors duration-200 ${buttonState.className}`}
    />
  );
};
