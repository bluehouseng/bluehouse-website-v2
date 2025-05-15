import { useState } from 'react';
import { UserProfile } from '@/app/attendance/types';
import { setUserProfile, generateId } from '../../lib/auth';

interface DeviceRegistrationModalProps {
  isOpen: boolean;
  onRegister: (profile: UserProfile) => void;
}

export const DeviceRegistrationModal = ({
  isOpen,
  onRegister,
}: DeviceRegistrationModalProps) => {
  const [name, setName] = useState('');
  const [stack, setStack] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = async () => {
    if (!name || !stack || !email) {
      alert('Please fill all required fields (Name, Stack, Email)');
      return;
    }

    setIsLoading(true);
    try {
      const userData: UserProfile = {
        id: generateId(),
        name,
        stack,
        email,
        image: image || undefined,
      };
      await setUserProfile(userData);
      onRegister(userData);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Failed to register device');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Device Registration</h2>
        <p className="text-gray-600 mb-4 text-center">
          Register your device to use the attendance system.
        </p>

        <div className="flex flex-col items-center mb-4">
          <label className="cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-blue-500 text-4xl">👤</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-500 mt-1">Add Photo (Optional)</span>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-3"
          required
        />
        <input
          type="text"
          placeholder="Your Stack (e.g., Frontend, Backend)"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-3"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          required
        />

        <button
          onClick={handleRegister}
          disabled={isLoading}
          className={`w-full bg-blue-500 text-white font-semibold py-3 rounded-lg ${
            isLoading ? 'opacity-50' : ''
          }`}
        >
          {isLoading ? 'Registering...' : 'Register Device'}
        </button>
      </div>
    </div>
  );
};