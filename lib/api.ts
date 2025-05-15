import { UserProfile } from '@/app/attendance/types';
import axios from 'axios';

const API_BASE_URL = 'https://www.bluehouseng.com/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUserProfile = async (email: string) => {
  const response = await apiClient.get(`/user?email=${email}`);
  return response.data;
};

export const updateAttendance = async (userData: {
  email: string;
  name: string;
  stack: string;
  checkInTime?: Date;
  checkOutTime?: Date;
}) => {
  const response = await apiClient.post('/user', userData);
  return response.data;
};

export const updateUserProfile = async (userId: string, profileData: Partial<UserProfile>) => {
  const response = await apiClient.post(`/users/${userId}`, profileData);
  return response.data;
};