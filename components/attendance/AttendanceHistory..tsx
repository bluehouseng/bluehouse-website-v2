import React from 'react';
import { AttendanceRecord } from '../../app/attendance/types';
import Button from '../buttons';

interface AttendanceHistoryProps {
  records: AttendanceRecord[];
  filter: 'daily' | 'weekly' | 'monthly';
  onFilterChange: (filter: 'daily' | 'weekly' | 'monthly') => void;
  formatDate: (dateString: string) => string;
}

export const AttendanceHistory = ({
  records,
  filter,
  onFilterChange,
  formatDate,
}: AttendanceHistoryProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Attendance History</h2>

      <div className="flex justify-between mb-6 bg-gray-100 rounded-xl p-1">
        {(['daily', 'weekly', 'monthly'] as const).map((type) => (
          <Button
            key={type}
            text={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => onFilterChange(type)}
            className={`flex-1 py-2 rounded-lg ${
              filter === type ? 'bg-white shadow-sm' : ''
            } ${filter === type ? 'text-blue-500' : 'text-gray-600'}`}
          />
        ))}
      </div>

      {records.length === 0 ? (
        <div className="flex flex-col items-center py-8">
          <span className="text-4xl mb-2">📅</span>
          <p className="text-gray-500">No attendance records found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <div key={record._id} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <span>📅</span>
                </div>
                <h3 className="text-gray-800 font-semibold text-lg">
                  {formatDate(record.date)}
                </h3>
              </div>

              <div className="space-y-3 pl-12">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 flex-1">Check-In</span>
                  <span className="text-gray-800 font-medium">{record.checkInTime}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span className="text-gray-600 flex-1">Check-Out</span>
                  <span className="text-gray-800 font-medium">{record.checkOutTime}</span>
                </div>
              </div>

              {record.checkInTime && record.checkOutTime && (
                <div className="mt-3 flex items-center pl-12">
                  <span className="text-green-500">✓</span>
                  <span className="text-green-600 text-sm ml-2">Completed</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};