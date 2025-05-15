import { UserProfile } from '../app/attendance/types';

export const getUserProfile = async (): Promise<UserProfile | null> => {
  if (typeof window === 'undefined') return null;
  const profile = localStorage.getItem('userProfile');
  return profile ? JSON.parse(profile) : null;
};

export const setUserProfile = async (profile: UserProfile) => {
  localStorage.setItem('userProfile', JSON.stringify(profile));
};

export const clearUserProfile = async () => {
  localStorage.removeItem('userProfile');
};

export const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};