// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { SplashScreen } from "@/components/attendance/SplashScreen";
// import { DeviceRegistrationModal } from "@/components/attendance/DeviceRegistrationModal";
// import { OutsideOfficeScreen } from "@/components/attendance/OutsideOfficeScreen";
// import { MainScreen } from "@/components/attendance/MainScreen";
// import { UserProfile } from "./types";
// import {
//   getUserProfile,
//   setUserProfile,
//   clearUserProfile,
// } from "../../lib/auth";
// import {
//   checkOfficeLocation,
//   checkLocationPermission,
//   requestLocationPermission,
//   watchOfficeLocation,
// } from "../../lib/location";

// type AppState = "loading" | "registration" | "outside-office" | "main";

// interface LocationState {
//   isInOffice: boolean;
//   location?: GeolocationPosition;
//   error?: string;
// }

// export default function AttendancePage() {
//   const [appState, setAppState] = useState<AppState>("loading");
//   const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
//   const [locationState, setLocationState] = useState<LocationState>({
//     isInOffice: false,
//     location: undefined,
//     error: undefined,
//   });
//   const [watchId, setWatchId] = useState<number | null>(null);
//   const [isCheckingLocation, setIsCheckingLocation] = useState<boolean>(false);

//   /**
//    * Check location with permission handling
//    */
//   const checkLocation = useCallback(
//     async (showLoading = true) => {
//       if (showLoading) setIsCheckingLocation(true);

//       try {
//         // Check for location permission
//         let hasPermission = await checkLocationPermission();
//         if (!hasPermission) {
//           hasPermission = await requestLocationPermission();
//           if (!hasPermission) {
//             setLocationState((prev) => ({
//               ...prev,
//               isInOffice: false,
//               error: "Location permission is required to verify your office presence",
//             }));
//             return;
//           }
//         }

//         // Verify office location
//         const locationResult = await checkOfficeLocation();
//         setLocationState((prev) => ({
//           ...prev,
//           ...locationResult,
//         }));

//         if (userProfile) {
//           setAppState(locationResult.isInOffice ? "main" : "outside-office");
//         }
//       } catch (error) {
//         console.error("Location check error:", error);
//         setLocationState((prev) => ({
//           ...prev,
//           isInOffice: false,
//           error:
//             error instanceof Error
//               ? error.message
//               : "Failed to verify location",
//         }));

//         if (userProfile) {
//           setAppState("outside-office");
//         }
//       } finally {
//         if (showLoading) setIsCheckingLocation(false);
//       }
//     },
//     [userProfile]
//   );

//   /**
//    * Initialize app on mount
//    */
//   useEffect(() => {
//     let isMounted = true;

//     const initializeApp = async () => {
//       try {
//         const profile = await getUserProfile();
//         if (!isMounted) return;

//         if (profile) {
//           setUserProfileState(profile);
//           setAppState("loading");
//           await checkLocation(false);
//         } else {
//           setAppState("registration");
//         }
//       } catch (error) {
//         console.error("Initialization error:", error);
//         if (isMounted) {
//           setLocationState({
//             isInOffice: false,
//             error: "Failed to initialize app",
//           });
//           setAppState("registration");
//         }
//       }
//     };

//     initializeApp();

//     return () => {
//       isMounted = false;
//     };
//   }, [checkLocation]);

//   /**
//    * Watch office location when user is active in main screen
//    */
//   useEffect(() => {
//     if (!userProfile) return;
//     if (appState !== "main") return;
//     if (watchId) return; // prevent duplicate watchers

//     const id = watchOfficeLocation((result) => {
//       setLocationState((prev) => ({
//         ...prev,
//         ...result,
//       }));

//       if (!result.isInOffice) {
//         setAppState("outside-office");
//       }
//     });

//     if (id !== null) setWatchId(id);

//     return () => {
//       if (id !== null) {
//         navigator.geolocation?.clearWatch(id);
//         setWatchId(null);
//       }
//     };
//   }, [userProfile, appState, watchId]);

//   /**
//    * Handle registration completion
//    */
//   const handleRegistrationComplete = async (profile: UserProfile) => {
//     try {
//       await setUserProfile(profile);
//       setUserProfileState(profile);
//       setAppState("loading");

//       await checkLocation();
//     } catch (error) {
//       console.error("Registration completion error:", error);
//       setLocationState((prev) => ({
//         ...prev,
//         isInOffice: false,
//         error: "Failed to complete registration",
//       }));
//     }
//   };

//   /**
//    * Handle logout
//    */
//   const handleLogout = async () => {
//     try {
//       if (watchId !== null) {
//         navigator.geolocation?.clearWatch(watchId);
//         setWatchId(null);
//       }

//       await clearUserProfile();
//       setUserProfileState(null);
//       setLocationState({
//         isInOffice: false,
//         location: undefined,
//         error: undefined,
//       });
//       setAppState("registration");
//     } catch (error) {
//       console.error("Logout error:", error);
//       setUserProfileState(null);
//       setAppState("registration");
//     }
//   };

//   /**
//    * Handle retry location
//    */
//   const handleRetryLocation = async () => {
//     await checkLocation();
//   };

//   /**
//    * Render by app state
//    */
//   if (appState === "loading" || isCheckingLocation) {
//     return <SplashScreen />;
//   }

//   if (appState === "registration") {
//     return (
//       <DeviceRegistrationModal
//         isOpen={true}
//         onRegister={handleRegistrationComplete}
//       />
//     );
//   }

//   if (!userProfile) {
//     return <SplashScreen />;
//   }

//   if (appState === "outside-office") {
//     return (
//       <OutsideOfficeScreen
//         locationError={locationState.error}
//         onRetry={handleRetryLocation}
//         isRetrying={isCheckingLocation}
//       />
//     );
//   }

//   if (appState === "main") {
//     return (
//       <MainScreen
//         userProfile={userProfile}
//         isInOffice={locationState.isInOffice}
//         locationError={locationState.error}
//         location={locationState.location}
//         onLogout={handleLogout}
//       />
//     );
//   }

//   return <SplashScreen />;
// }







"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MapPin, User, Clock, CheckCircle, XCircle, Camera, Loader2, Building2, Wifi, AlertCircle } from 'lucide-react';

// Types
interface UserProfile {
  id: string;
  name: string;
  stack: string;
  image?: string;
  email: string;
}

interface AttendanceRecord {
  _id: string;
  name: string;
  email: string;
  stack: string;
  checkInTime?: string;
  checkOutTime?: string;
  createdAt?: string;
}

interface LocationState {
  isInOffice: boolean;
  distance: number | null;
  accuracy: number | null;
  lastUpdate: Date | null;
  error: string | null;
  isLoading: boolean;
}

// API Configuration
const API_BASE_URL = 'https://bluehouseng.com/api';

// Office Configuration
const OFFICE_CONFIG = {
  latitude: 9.8845,
  longitude: 8.8766,
  radius: 100, // meters
  name: "BlueHouse Office"
};

// Enhanced Button Component
const Button = ({ text, onClick, disabled = false, className = '', icon: Icon, loading = false }) => (
  <button 
    onClick={onClick} 
    disabled={disabled || loading} 
    className={`flex items-center justify-center gap-2 transition-all duration-300 transform ${className} ${
      disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
    }`}
  >
    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : Icon && <Icon className="w-5 h-5" />}
    <span className="font-medium">{text}</span>
  </button>
);

// Professional Header Component
const Header = () => (
  <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full translate-y-1/2"></div>
    </div>
    
    {/* Content */}
    <div className="relative z-10 px-6 py-8">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
          <Building2 className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Smart Attendance</h1>
          <p className="text-blue-100 text-sm font-medium">Location-Based Check-in System</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-blue-100 text-sm">
        <Wifi className="w-4 h-4" />
        <span>Real-time Location Tracking</span>
      </div>
    </div>
  </div>
);

// Enhanced Profile Card
const ProfileCard = ({ userProfile }) => (
  <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 backdrop-blur-sm">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center overflow-hidden shadow-inner">
          {userProfile.image ? (
            <img 
              src={userProfile.image} 
              alt={userProfile.name} 
              className="w-full h-full rounded-2xl object-cover" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center" style={{display: userProfile.image ? 'none' : 'flex'}}>
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="flex-1 min-w-0">
        <h2 className="font-bold text-gray-900 text-lg truncate">{userProfile.name}</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
            {userProfile.stack}
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-1 truncate">{userProfile.email}</p>
      </div>
    </div>
  </div>
);

// Enhanced Location Status with better error handling
const LocationStatus = ({ locationState }) => {
  const { isInOffice, distance, accuracy, error, isLoading, lastUpdate } = locationState;
  
  const getStatusIcon = () => {
    if (isLoading) return <Loader2 className="w-5 h-5 animate-spin text-blue-500" />;
    if (error) return <AlertCircle className="w-5 h-5 text-red-500" />;
    if (isInOffice) return <CheckCircle className="w-5 h-5 text-green-500" />;
    return <XCircle className="w-5 h-5 text-orange-500" />;
  };

  const getStatusText = () => {
    if (isLoading) return "Detecting location...";
    if (error) return error;
    if (isInOffice) return "You're at the office";
    return distance ? `${distance}m from office` : "Outside office area";
  };

  const getStatusColor = () => {
    if (error) return "text-red-600 bg-red-50 border-red-200";
    if (isInOffice) return "text-green-600 bg-green-50 border-green-200";
    return "text-orange-600 bg-orange-50 border-orange-200";
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-xl">
            <MapPin className="w-5 h-5 text-gray-600" />
          </div>
          <span className="font-semibold text-gray-900">Location Status</span>
        </div>
        {getStatusIcon()}
      </div>
      
      <div className={`px-3 py-2 rounded-xl border ${getStatusColor()}`}>
        <div className="font-medium text-sm">
          {getStatusText()}
        </div>
        
        {!error && !isLoading && (
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>Office: {OFFICE_CONFIG.name}</span>
            {accuracy && <span>±{accuracy}m accuracy</span>}
          </div>
        )}
        
        {lastUpdate && !isLoading && (
          <div className="text-xs text-gray-400 mt-1">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </div>
        )}
      </div>

      {error && (
        <div className="mt-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-blue-700 text-sm font-medium mb-2">Enable Location Access</p>
          <ol className="text-blue-600 text-xs space-y-1 list-decimal list-inside">
            <li>Click the location icon in your browser's address bar</li>
            <li>Select "Allow" for location access</li>
            <li>Refresh the page if needed</li>
          </ol>
        </div>
      )}
    </div>
  );
};

// Enhanced Check Button
const CheckButton = ({ isInOffice, status, onCheck, isLoading, locationState }) => {
  const config = useMemo(() => {
    if (status.hasCheckedOut) {
      return { 
        text: '✅ Day Complete', 
        disabled: true, 
        className: 'bg-gray-100 text-gray-500 cursor-not-allowed border-2 border-gray-200',
        icon: CheckCircle 
      };
    }
    
    if (status.hasCheckedIn) {
      return { 
        text: 'Check Out', 
        disabled: !isInOffice, 
        className: isInOffice 
          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-200 border-2 border-red-300' 
          : 'bg-red-200 text-red-400 cursor-not-allowed border-2 border-red-300',
        icon: XCircle
      };
    }
    
    return { 
      text: 'Check In', 
      disabled: !isInOffice,
      className: isInOffice 
        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-200 border-2 border-green-300' 
        : 'bg-green-200 text-green-400 cursor-not-allowed border-2 border-green-300',
      icon: CheckCircle
    };
  }, [isInOffice, status]);

  return (
    <div>
      <Button
        text={config.text}
        onClick={onCheck}
        disabled={config.disabled}
        loading={isLoading}
        icon={config.icon}
        className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 ${config.className}`}
      />
      
      {!isInOffice && !locationState.error && (
        <p className="text-center text-gray-500 text-sm mt-3 px-4">
          📍 Move closer to {OFFICE_CONFIG.name} to enable check-in
        </p>
      )}
    </div>
  );
};

// Professional Location Service
class LocationService {
  private static instance: LocationService;
  private watchId: number | null = null;
  private callbacks: ((state: LocationState) => void)[] = [];
  private currentState: LocationState = {
    isInOffice: false,
    distance: null,
    accuracy: null,
    lastUpdate: null,
    error: null,
    isLoading: true
  };

  static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  subscribe(callback: (state: LocationState) => void) {
    this.callbacks.push(callback);
    callback(this.currentState); // Send current state immediately
    return () => {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    };
  }

  private updateState(updates: Partial<LocationState>) {
    this.currentState = { ...this.currentState, ...updates };
    this.callbacks.forEach(callback => callback(this.currentState));
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371000; // Earth's radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  private handleLocationSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude, accuracy } = position.coords;
    const distance = Math.round(
      this.calculateDistance(latitude, longitude, OFFICE_CONFIG.latitude, OFFICE_CONFIG.longitude)
    );
    const isInOffice = distance <= OFFICE_CONFIG.radius;

    this.updateState({
      isInOffice,
      distance,
      accuracy: Math.round(accuracy),
      lastUpdate: new Date(),
      error: null,
      isLoading: false
    });
  };

  private handleLocationError = (error: GeolocationPositionError) => {
    let errorMessage = 'Location access required';
    
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = 'Location access denied - Please enable location permissions';
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = 'Location unavailable - Check GPS settings';
        break;
      case error.TIMEOUT:
        errorMessage = 'Location timeout - Trying again...';
        break;
    }

    this.updateState({
      isInOffice: false,
      distance: null,
      error: errorMessage,
      isLoading: false
    });

    // Retry after timeout errors
    if (error.code === error.TIMEOUT) {
      setTimeout(() => this.startTracking(), 5000);
    }
  };

  startTracking() {
    if (!navigator.geolocation) {
      this.updateState({
        error: 'Geolocation not supported by this browser',
        isLoading: false
      });
      return;
    }

    // Clear any existing watch
    this.stopTracking();

    this.updateState({ isLoading: true, error: null });

    // Get initial position with high accuracy
    navigator.geolocation.getCurrentPosition(
      this.handleLocationSuccess,
      this.handleLocationError,
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 30000
      }
    );

    // Start continuous watching
    this.watchId = navigator.geolocation.watchPosition(
      this.handleLocationSuccess,
      this.handleLocationError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }

  stopTracking() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }

  requestPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        () => resolve(true),
        () => resolve(false),
        { timeout: 5000 }
      );
    });
  }
}

// Enhanced Attendance Item
const AttendanceItem = ({ record }) => {
  const checkInDate = new Date(record.checkInTime || record.createdAt);
  const date = checkInDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  
  const checkIn = record.checkInTime 
    ? new Date(record.checkInTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
    : '--:--';
  
  const checkOut = record.checkOutTime 
    ? new Date(record.checkOutTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
    : '--:--';
  
  const isComplete = checkIn !== '--:--' && checkOut !== '--:--';
  
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="font-semibold text-gray-800">{date}</div>
        {isComplete && (
          <div className="flex items-center gap-1 text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full border border-green-200">
            <CheckCircle className="w-3 h-3" />
            Complete
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">Check In:</span>
          <span className="font-mono text-green-600 font-medium">{checkIn}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">Check Out:</span>
          <span className="font-mono text-red-600 font-medium">{checkOut}</span>
        </div>
      </div>
    </div>
  );
};

// Enhanced Registration Modal
const DeviceRegistrationModal = ({ isOpen, onRegister }) => {
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [email, setEmail] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith('image/')) {
      setFile(selected);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(selected);
    }
  };

  const handleRegister = async () => {
    if (!name.trim() || !stack.trim() || !email.trim()) {
      alert("Please fill all required fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const userData = {
        id: Date.now().toString(),
        name: name.trim(),
        stack: stack.trim(),
        email: email.trim().toLowerCase(),
        image: imagePreview,
      };

      localStorage.setItem('userProfile', JSON.stringify(userData));
      onRegister(userData);
    } catch (error) {
      console.error("Registration error:", error);
      alert("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Aboard!</h2>
          <p className="text-gray-600">Set up your profile to start tracking attendance</p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <label className="cursor-pointer group">
            <div className="relative">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="w-24 h-24 rounded-2xl object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300 shadow-lg"
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300 shadow-lg">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                <Camera className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <span className="text-sm text-gray-500 mt-3 font-medium">Add Profile Photo</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Role</label>
            <input
              type="text"
              placeholder="e.g., Frontend Developer, Product Manager"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your.email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
        </div>

        <Button
          text="Complete Setup"
          onClick={handleRegister}
          loading={isLoading}
          icon={CheckCircle}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl mt-8 shadow-lg"
        />
      </div>
    </div>
  );
};

// Enhanced Splash Screen
const SplashScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center z-50">
    <div className="text-center">
      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
        <Building2 className="w-12 h-12 text-blue-600" />
      </div>
      <h1 className="text-white text-4xl font-bold mb-4">Smart Attendance</h1>
      <p className="text-blue-100 text-lg mb-6">Initializing your workspace...</p>
      <div className="flex items-center justify-center gap-2">
        <Loader2 className="w-6 h-6 animate-spin text-white" />
        <span className="text-blue-100">Setting up location services</span>
      </div>
    </div>
  </div>
);

// Main App Component
export default function EnhancedAttendanceApp() {
  const [userProfile, setUserProfile] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState({
    hasCheckedIn: false,
    hasCheckedOut: false
  });
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState('daily');
  const [isLoading, setIsLoading] = useState(false);
  const [locationState, setLocationState] = useState<LocationState>({
    isInOffice: false,
    distance: null,
    accuracy: null,
    lastUpdate: null,
    error: null,
    isLoading: true
  });
  const [showRegistration, setShowRegistration] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const locationService = LocationService.getInstance();

  // Initialize location tracking
  useEffect(() => {
    if (!userProfile) return;
    
    const unsubscribe = locationService.subscribe(setLocationState);
    locationService.startTracking();
    
    return () => {
      unsubscribe();
      locationService.stopTracking();
    };
  }, [userProfile]);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        const savedUser = localStorage.getItem('userProfile');
        
        if (savedUser) {
          const userData = JSON.parse(savedUser);
          setUserProfile(userData);
          await fetchAttendanceHistory(userData.email);
        } else {
          setShowRegistration(true);
        }
      } catch (error) {
        console.error('Initialization error:', error);
        setShowRegistration(true);
      }
      
      setTimeout(() => setShowSplash(false), 2500);
    };
    
    initializeApp();
  }, []);

  // Fetch attendance history
  const fetchAttendanceHistory = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/attendance?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      
      if (data.success && data.history) {
        setRecords(data.history);
        
        const today = new Date().toDateString();
        const todayRecord = data.history.find(r => {
          const recordDate = new Date(r.checkInTime || r.createdAt).toDateString();
          return recordDate === today;
        });
        
        if (todayRecord) {
          setAttendanceStatus({
            hasCheckedIn: !!todayRecord.checkInTime,
            hasCheckedOut: !!todayRecord.checkOutTime
          });
        }
      }
    } catch (error) {
      console.error('Error fetching attendance:', error);
    }
  };

  // Enhanced check in/out handler
  const handleCheck = useCallback(async () => {
    if (!locationState.isInOffice || !userProfile || isLoading) return;
    
    setIsLoading(true);
    
    try {
      const now = new Date().toISOString();
      const today = new Date().toDateString();
      
      const todayRecord = records.find(r => {
        const recordDate = new Date(r.checkInTime || r.createdAt).toDateString();
        return recordDate === today;
      });
      
      let apiData;
      
      if (!attendanceStatus.hasCheckedIn) {
        apiData = {
          name: userProfile.name,
          email: userProfile.email,
          stack: userProfile.stack,
          checkInTime: now
        };
        setAttendanceStatus({ hasCheckedIn: true, hasCheckedOut: false });
      } else if (!attendanceStatus.hasCheckedOut) {
        apiData = {
          name: userProfile.name,
          email: userProfile.email,
          stack: userProfile.stack,
          checkInTime: todayRecord?.checkInTime || now,
          checkOutTime: now
        };
        setAttendanceStatus({ hasCheckedIn: true, hasCheckedOut: true });
      }
      
      const response = await fetch(`${API_BASE_URL}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(apiData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        await fetchAttendanceHistory(userProfile.email);
      } else {
        throw new Error(result.message || 'Failed to update attendance');
      }
      
    } catch (error) {
      console.error('Check in/out error:', error);
      alert('Failed to update attendance. Please try again.');
      
      setAttendanceStatus(prev => ({
        hasCheckedIn: prev.hasCheckedIn && attendanceStatus.hasCheckedIn,
        hasCheckedOut: false
      }));
    } finally {
      setIsLoading(false);
    }
  }, [locationState.isInOffice, userProfile, records, attendanceStatus, isLoading]);

  // Filter records
  const filteredRecords = useMemo(() => {
    const now = new Date();
    return records.filter(record => {
      const recordDate = new Date(record.checkInTime || record.createdAt);
      
      switch(filter) {
        case 'daily':
          return recordDate.toDateString() === now.toDateString();
        case 'weekly':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return recordDate >= weekAgo;
        case 'monthly':
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return recordDate >= monthAgo;
        default:
          return true;
      }
    }).sort((a, b) => new Date(b.checkInTime || b.createdAt) - new Date(a.checkInTime || a.createdAt));
  }, [records, filter]);

  const statusMessage = useMemo(() => {
    if (attendanceStatus.hasCheckedOut) return 'Excellent work today! 🎉';
    if (attendanceStatus.hasCheckedIn) return 'Ready to finish up? 👋';
    return 'Ready to start your productive day? ⚡';
  }, [attendanceStatus]);

  const handleRegister = (profile) => {
    setUserProfile(profile);
    setShowRegistration(false);
    fetchAttendanceHistory(profile.email);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  if (showRegistration) {
    return <DeviceRegistrationModal isOpen={showRegistration} onRegister={handleRegister} />;
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50">
      {/* Professional Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-md mx-auto p-4 -mt-4 relative z-10">
        <ProfileCard userProfile={userProfile} />
        
        <LocationStatus locationState={locationState} />

        {/* Enhanced Status Section */}
        <div className="bg-white rounded-2xl p-6 mb-4 shadow-lg border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="font-bold text-xl mb-2 text-gray-900">{statusMessage}</h2>
            <p className="text-gray-600 text-sm">
              {attendanceStatus.hasCheckedOut 
                ? 'Thanks for your hard work today! See you tomorrow.' 
                : attendanceStatus.hasCheckedIn 
                  ? 'Remember to check out when you leave the office'
                  : 'Ensure you\'re within the office area to check in'
              }
            </p>
          </div>
          
          <CheckButton 
            isInOffice={locationState.isInOffice}
            status={attendanceStatus}
            onCheck={handleCheck}
            isLoading={isLoading}
            locationState={locationState}
          />
        </div>

        {/* Enhanced History Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-50 rounded-xl">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <h2 className="font-bold text-xl text-gray-900">Attendance History</h2>
          </div>
          
          {/* Enhanced Filter buttons */}
          <div className="flex bg-gray-100 rounded-2xl p-1.5 mb-6">
            {[
              { key: 'daily', label: 'Today', icon: '📅' },
              { key: 'weekly', label: 'Week', icon: '📊' },
              { key: 'monthly', label: 'Month', icon: '📈' }
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm rounded-xl transition-all duration-300 font-semibold ${
                  filter === key 
                    ? 'bg-white shadow-lg text-blue-600 transform scale-105 border border-blue-100' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Records with enhanced empty state */}
          <div className="space-y-4">
            {filteredRecords.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-700 mb-2">No Records Found</h3>
                <p className="text-sm">Your attendance records for this period will appear here</p>
                {filter === 'daily' && (
                  <p className="text-xs text-blue-600 mt-2">Start by checking in when you arrive at the office</p>
                )}
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>{filteredRecords.length} record{filteredRecords.length !== 1 ? 's' : ''}</span>
                  <span className="text-xs">
                    {filter === 'daily' ? 'Today' : 
                     filter === 'weekly' ? 'Last 7 days' : 'Last 30 days'}
                  </span>
                </div>
                {filteredRecords.map(record => (
                  <AttendanceItem key={record._id} record={record} />
                ))}
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pb-8">
          <p className="text-gray-400 text-sm">
            🔒 Secure • 📍 Location-Based • ⚡ Real-time
          </p>
        </div>
      </div>
    </div>
  );
}