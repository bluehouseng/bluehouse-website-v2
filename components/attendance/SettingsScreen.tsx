import React, { useState } from 'react';
import { UserProfile } from '../../app/attendance/types';
import Button from '../buttons';

interface SettingsScreenProps {
  userProfile: UserProfile;
  onClose: () => void;
}

export const SettingsScreen = ({ userProfile, onClose }: SettingsScreenProps) => {
  const [name, setName] = useState(userProfile.name);
  const [stack, setStack] = useState(userProfile.stack);
  const [image, setImage] = useState(userProfile.image || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Here you would typically call an API to update the profile
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 p-5 z-50 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Edit Profile</h1>
        <Button
          text=""
          onClick={onClose}
          icon="✕"
          className="text-gray-500 hover:text-gray-700"
        />
      </div>

      <div className="flex flex-col items-center mb-4">
        <label className="cursor-pointer">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <Button
          text="Change Photo"
          onClick={() => {}}
          className="text-blue-500 mt-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 bg-white"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Your Stack</label>
        <input
          type="text"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 bg-white"
        />
      </div>

      <Button
        text={isLoading ? 'Saving...' : 'Save Changes'}
        onClick={handleSave}
        disabled={isLoading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg"
      />
    </div>
  );
};