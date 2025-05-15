import React from 'react';
import Button from '../buttons';
import { AttendanceStatus } from '@/app/attendance/types';

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
  const getButtonState = () => {
    if (hasCheckedOut) {
      return {
        text: 'Attendance Completed',
        disabled: true,
        className: 'bg-gray-400 text-white',
      };
    }
    if (hasCheckedIn) {
      return {
        text: 'Check Out',
        disabled: !isInOffice || isLoading,
        className: 'bg-red-500 hover:bg-red-600 text-white',
      };
    }
    return {
      text: 'Check In',
      disabled: !isInOffice || isLoading,
      className: 'bg-green-500 hover:bg-green-600 text-white',
    };
  };

  const buttonState = getButtonState();

  return (
    <Button
      text={buttonState.text}
      onClick={onClick}
      disabled={buttonState.disabled}
      className={`w-full py-3 rounded-lg ${buttonState.className}`}
    />
  );
};