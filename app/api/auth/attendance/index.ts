import type { NextApiRequest, NextApiResponse } from 'next';
import { AttendanceRecord } from '@/types';

// In-memory store (replace with database in production)
const attendanceRecords: AttendanceRecord[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { userId, filter } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }

    let filteredRecords = attendanceRecords.filter((record) => record.userId === userId);

    // Apply filter (daily, weekly, monthly)
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    if (filter === 'daily') {
      filteredRecords = filteredRecords.filter((record) => record.date === todayStr);
    } else if (filter === 'weekly') {
      const oneWeekAgo = new Date(today);
      oneWeekAgo.setDate(today.getDate() - 7);
      const oneWeekAgoStr = oneWeekAgo.toISOString().split('T')[0];
      filteredRecords = filteredRecords.filter(
        (record) => record.date >= oneWeekAgoStr && record.date <= todayStr
      );
    } else if (filter === 'monthly') {
      const oneMonthAgo = new Date(today);
      oneMonthAgo.setMonth(today.getMonth() - 1);
      const oneMonthAgoStr = oneMonthAgo.toISOString().split('T')[0];
      filteredRecords = filteredRecords.filter(
        (record) => record.date >= oneMonthAgoStr && record.date <= todayStr
      );
    }

    return res.status(200).json(filteredRecords);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}