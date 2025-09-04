
import React, { memo } from 'react';
import { AttendanceRecord } from '../../app/attendance/types';
import Button from '../buttons';

interface AttendanceHistoryProps {
  records: AttendanceRecord[];
  filter: 'daily' | 'weekly' | 'monthly';
  onFilterChange: (filter: 'daily' | 'weekly' | 'monthly') => void;
  formatDate: (dateString: string) => string;
}

// ✅ Memoized CheckIn/CheckOut row
const CheckRow = memo(({ label, time, activeColor }: { label: string; time?: string; activeColor: string }) => {
  const isActive = time && time !== '--:--';
  return (
    <div className="flex items-center">
      <div className={`w-2 h-2 rounded-full mr-3 ${isActive ? activeColor : 'bg-gray-300'}`} />
      <span className="text-gray-600 flex-1">{label}</span>
      <span className={`font-medium ${isActive ? 'text-gray-800' : 'text-gray-400'}`}>
        {time || '--:--'}
      </span>
    </div>
  );
});
CheckRow.displayName = 'CheckRow';

// ✅ Memoized record card
const AttendanceCard = memo(({ record, formatDate }: { record: AttendanceRecord; formatDate: (date: string) => string }) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
      <div className="flex items-center mb-3">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">📅</div>
        <h3 className="text-gray-800 font-semibold text-lg">{formatDate(record.date)}</h3>
      </div>

      <div className="space-y-3 pl-12">
        <CheckRow label="Check-In" time={record.checkInTime} activeColor="bg-green-500" />
        <CheckRow label="Check-Out" time={record.checkOutTime} activeColor="bg-red-500" />
      </div>

      {/* Status */}
      {record.checkInTime && record.checkInTime !== '--:--' && record.checkOutTime && record.checkOutTime !== '--:--' && (
        <div className="mt-3 flex items-center pl-12">
          <span className="text-green-500">✓</span>
          <span className="text-green-600 text-sm ml-2 font-medium">Completed</span>
        </div>
      )}

      {record.checkInTime && record.checkInTime !== '--:--' && (!record.checkOutTime || record.checkOutTime === '--:--') && (
        <div className="mt-3 flex items-center pl-12">
          <span className="text-yellow-500">⏳</span>
          <span className="text-yellow-600 text-sm ml-2 font-medium">In Progress</span>
        </div>
      )}
    </div>
  );
});
AttendanceCard.displayName = 'AttendanceCard';

export const AttendanceHistory = ({ records, filter, onFilterChange, formatDate }: AttendanceHistoryProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Attendance History</h2>

      {/* Filter Buttons */}
      <div className="flex justify-between mb-6 bg-gray-100 rounded-xl p-1">
        {(['daily', 'weekly', 'monthly'] as const).map((type) => (
          <Button
            key={type}
            text={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => onFilterChange(type)}
            className={`flex-1 py-2 mx-1 rounded-lg transition-all duration-200 ${
              filter === type ? 'bg-white shadow-sm text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-800'
            }`}
          />
        ))}
      </div>

      {/* Records */}
      {records.length === 0 ? (
        <div className="flex flex-col items-center py-8">
          <span className="text-4xl mb-2">📅</span>
          <p className="text-gray-500 text-center">No attendance records found for {filter} view</p>
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record, index) => (
            <AttendanceCard
              key={record._id || `${record.date}-${index}`}
              record={record}
              formatDate={formatDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};
