import { useState, useEffect } from 'react';
import { UserProfile, AttendanceRecord, AttendanceStatus } from '../../app/attendance/types';
import { apiClient } from '@/lib/api';
import { format, parseISO } from 'date-fns';
import { CheckInOutButton } from './CheckInOutButton';
import { ProfileCard } from './ProfileCard';
import { LocationStatus } from './LocationStatus';
import { AttendanceHistory } from './AttendanceHistory.';
import { SettingsScreen } from './SettingsScreen';

interface MainScreenProps {
  userProfile: UserProfile;
  isInOffice: boolean;
  locationError?: string;
  location?: GeolocationPosition;
  onLogout: () => void;
}

export const MainScreen = ({
  userProfile,
  isInOffice,
  locationError,
  location,
  onLogout,
}: MainScreenProps) => {
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatus>({
    hasCheckedIn: false,
    hasCheckedOut: false,
  });
  const [attendanceHistory, setAttendanceHistory] = useState<AttendanceRecord[]>([]);
  const [filter, setFilter] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAttendanceHistory = async () => {
      try {
        const response = await apiClient.get(`/user?email=${userProfile.email}`);
        const history = response.data?.history || [];
        
        const sortedHistory = [...history]
          .reverse()
          .map((record: AttendanceRecord) => ({
            ...record,
            checkInTime: record.checkInTime ? formatTime(record.checkInTime) : '--:--',
            checkOutTime: record.checkOutTime ? formatTime(record.checkOutTime) : '--:--',
          }));

        setAttendanceHistory(sortedHistory);

        if (sortedHistory.length > 0) {
          const latestRecord = sortedHistory[0];
          const today = new Date().toDateString();
          const recordDate = new Date(latestRecord.date).toDateString();

          if (today === recordDate) {
            setAttendanceStatus({
              hasCheckedIn: !!latestRecord.checkInTime && latestRecord.checkInTime !== '--:--',
              hasCheckedOut: !!latestRecord.checkOutTime && latestRecord.checkOutTime !== '--:--',
            });
          }
        }
      } catch (error) {
        console.error('Error fetching attendance history:', error);
      }
    };

    fetchAttendanceHistory();
  }, [userProfile.email]);

  const handleCheckInOut = async () => {
    setIsLoading(true);
    try {
      const currentTime = new Date();
      const response = await apiClient.get(`/user?email=${userProfile.email}`);
      const history = response.data?.history?.reverse() || [];
      const latestItem = history[0];

      if (!latestItem) {
        // First time user
        await apiClient.post('/user', {
          email: userProfile.email,
          name: userProfile.name,
          stack: userProfile.stack,
          checkInTime: currentTime,
        });
        setAttendanceStatus({ hasCheckedIn: true, hasCheckedOut: false });
        return;
      }

      const isToday = new Date(latestItem.checkInTime).toDateString() === currentTime.toDateString();

      const payload = {
        email: userProfile.email,
        name: userProfile.name,
        stack: userProfile.stack,
        checkInTime: !isToday ? currentTime : latestItem.checkInTime,
        checkOutTime: !latestItem.checkInTime ? null : currentTime,
      };

      await apiClient.post('/user', payload);
      setAttendanceStatus({
        hasCheckedIn: true,
        hasCheckedOut: !!latestItem.checkInTime,
      });
    } catch (error) {
      console.error('Error updating attendance:', error);
      alert('Failed to update attendance');
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (isoString: string) => {
    return format(parseISO(isoString), 'h:mm a');
  };

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), 'EEEE, MMMM d, yyyy');
  };

  const filterAttendanceRecords = (records: AttendanceRecord[], filterType: 'daily' | 'weekly' | 'monthly') => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (filterType) {
      case 'daily':
        return records.filter((record) => {
          const recordDate = new Date(record.date);
          return recordDate.toDateString() === today.toDateString();
        });

      case 'weekly':
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        
        return records.filter((record) => {
          const recordDate = new Date(record.date);
          return recordDate >= weekStart && recordDate <= weekEnd;
        });

      case 'monthly':
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        
        return records.filter((record) => {
          const recordDate = new Date(record.date);
          return recordDate >= monthStart && recordDate <= monthEnd;
        });

      default:
        return records;
    }
  };

  const filteredRecords = filterAttendanceRecords(attendanceHistory, filter);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40 flex items-center px-6">
        <div className="w-full flex justify-between items-center">
          <div>
            <h1 className="text-white text-3xl font-bold">Welcome Back!</h1>
            <p className="text-white text-sm mt-1">
              Your daily attendance starts here ✨
            </p>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => setShowSettings(true)} className="text-white">
              ⚙️
            </button>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 -mt-16">
        <ProfileCard userProfile={userProfile} location={location} />

        <LocationStatus isInOffice={isInOffice} locationError={locationError} />

        <div className="bg-white rounded-2xl p-6 my-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {attendanceStatus.hasCheckedIn
              ? attendanceStatus.hasCheckedOut
                ? 'Attendance completed for today!'
                : 'Ready to check out?'
              : 'Ready to check in?'}
          </h2>

          <CheckInOutButton
            isInOffice={isInOffice}
            isLoading={isLoading}
            hasCheckedIn={attendanceStatus.hasCheckedIn}
            hasCheckedOut={attendanceStatus.hasCheckedOut}
            onClick={handleCheckInOut}
          />
        </div>

        <AttendanceHistory
          records={filteredRecords}
          filter={filter}
          onFilterChange={setFilter}
          formatDate={formatDate}
        />
      </div>

      {showSettings && (
        <SettingsScreen
          userProfile={userProfile}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
};