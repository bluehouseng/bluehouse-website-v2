import type { NextApiRequest, NextApiResponse } from 'next';
import { isWithinGeofence } from '@/app/api/lib/geofence';
import { AttendanceRecord } from '@/types';

// In-memory store (replace with database in production)
const attendanceRecords: AttendanceRecord[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { userId, date, time, latitude, longitude } = req.body;

    if (!userId || !date || !time || latitude == null || longitude == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isWithinGeofence(latitude, longitude)) {
      return res.status(403).json({ error: 'You are outside the office geofence' });
    }

    const record = attendanceRecords.find(
      (r) => r.userId === userId && r.date === date
    );

    if (!record) {
      return res.status(400).json({ error: 'No check-in record found for today' });
    }

    if (record.checkInTime && !record.checkOutTime) {
      record.checkOutTime = time;
      record.checkOutLocation = { latitude, longitude };
    } else if (record.checkOutTime) {
      return res.status(400).json({ error: 'Already checked out for today' });
    } else {
      return res.status(400).json({ error: 'No check-in record found' });
    }

    return res.status(200).json(record);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}