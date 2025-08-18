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

      {/* Filter Buttons */}
      <div className="flex justify-between mb-6 bg-gray-100 rounded-xl p-1">
        {(['daily', 'weekly', 'monthly'] as const).map((type) => (
          <Button
            key={type}
            text={type.charAt(0).toUpperCase() + type.slice(1)}
            onClick={() => onFilterChange(type)}
            className={`flex-1 py-2 mx-1 rounded-lg transition-all duration-200 ${
              filter === type 
                ? 'bg-white shadow-sm text-blue-600 font-medium' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          />
        ))}
      </div>

      {/* Records Display */}
      {records.length === 0 ? (
        <div className="flex flex-col items-center py-8">
          <span className="text-4xl mb-2">📅</span>
          <p className="text-gray-500 text-center">
            No attendance records found for {filter} view
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record, index) => {
            // Use a combination of date and index for key if _id is not available
            const recordKey = record._id || `${record.date}-${index}`;
            
            return (
              <div key={recordKey} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <span>📅</span>
                  </div>
                  <h3 className="text-gray-800 font-semibold text-lg">
                    {formatDate(record.date)}
                  </h3>
                </div>

                <div className="space-y-3 pl-12">
                  {/* Check-In Row */}
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      record.checkInTime && record.checkInTime !== '--:--' 
                        ? 'bg-green-500' 
                        : 'bg-gray-300'
                    }`}></div>
                    <span className="text-gray-600 flex-1">Check-In</span>
                    <span className={`font-medium ${
                      record.checkInTime && record.checkInTime !== '--:--'
                        ? 'text-gray-800'
                        : 'text-gray-400'
                    }`}>
                      {record.checkInTime || '--:--'}
                    </span>
                  </div>

                  {/* Check-Out Row */}
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      record.checkOutTime && record.checkOutTime !== '--:--' 
                        ? 'bg-red-500' 
                        : 'bg-gray-300'
                    }`}></div>
                    <span className="text-gray-600 flex-1">Check-Out</span>
                    <span className={`font-medium ${
                      record.checkOutTime && record.checkOutTime !== '--:--'
                        ? 'text-gray-800'
                        : 'text-gray-400'
                    }`}>
                      {record.checkOutTime || '--:--'}
                    </span>
                  </div>
                </div>

                {/* Completion Status */}
                {record.checkInTime && 
                 record.checkInTime !== '--:--' && 
                 record.checkOutTime && 
                 record.checkOutTime !== '--:--' && (
                  <div className="mt-3 flex items-center pl-12">
                    <span className="text-green-500">✓</span>
                    <span className="text-green-600 text-sm ml-2 font-medium">Completed</span>
                  </div>
                )}

                {/* Partial Completion Status */}
                {record.checkInTime && 
                 record.checkInTime !== '--:--' && 
                 (!record.checkOutTime || record.checkOutTime === '--:--') && (
                  <div className="mt-3 flex items-center pl-12">
                    <span className="text-yellow-500">⏳</span>
                    <span className="text-yellow-600 text-sm ml-2 font-medium">In Progress</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};