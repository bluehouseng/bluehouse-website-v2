"use client";

import { useState, useEffect, useCallback } from "react";
import { SplashScreen } from "@/components/attendance/SplashScreen";
import { DeviceRegistrationModal } from "@/components/attendance/DeviceRegistrationModal";
import { OutsideOfficeScreen } from "@/components/attendance/OutsideOfficeScreen";
import { MainScreen } from "@/components/attendance/MainScreen";
import { UserProfile } from "./types";
import { getUserProfile, setUserProfile, clearUserProfile } from "../../lib/auth";
import { 
  checkOfficeLocation, 
  checkLocationPermission, 
  requestLocationPermission,
  watchOfficeLocation 
} from "../../lib/location";

type AppState = 'loading' | 'registration' | 'outside-office' | 'main';

interface LocationState {
  isInOffice: boolean;
  location?: GeolocationPosition;
  error?: string;
}

export default function AttendancePage() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [locationState, setLocationState] = useState<LocationState>({
    isInOffice: false,
    location: undefined,
    error: undefined
  });
  const [watchId, setWatchId] = useState<number | null>(null);
  const [isCheckingLocation, setIsCheckingLocation] = useState<boolean>(false);

  // Memoized location check function
  const checkLocation = useCallback(async (showLoading = true) => {
    if (showLoading) setIsCheckingLocation(true);
    
    try {
      // Check if we have location permission first
      const hasPermission = await checkLocationPermission();
      
      if (!hasPermission) {
        // Try to request permission
        const permissionGranted = await requestLocationPermission();
        if (!permissionGranted) {
          setLocationState({
            isInOffice: false,
            error: 'Location permission is required to verify your office presence'
          });
          return;
        }
      }

      // Get current location and check if in office
      const locationResult = await checkOfficeLocation();
      setLocationState({
        isInOffice: locationResult.isInOffice,
        location: locationResult.location,
        error: locationResult.error
      });

      // Update app state based on location
      if (userProfile) {
        setAppState(locationResult.isInOffice ? 'main' : 'outside-office');
      }

    } catch (error) {
      console.error("Location check error:", error);
      setLocationState({
        isInOffice: false,
        error: error instanceof Error ? error.message : "Failed to verify location"
      });
      
      if (userProfile) {
        setAppState('outside-office');
      }
    } finally {
      if (showLoading) setIsCheckingLocation(false);
    }
  }, [userProfile]);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check for existing user profile
        const profile = await getUserProfile();
        
        if (profile) {
          setUserProfileState(profile);
          // Check location for existing user
          await checkLocation(false);
        } else {
          setAppState('registration');
        }
      } catch (error) {
        console.error("Initialization error:", error);
        setLocationState({
          isInOffice: false,
          error: "Failed to initialize app"
        });
        setAppState('registration');
      } finally {
        setAppState(prev => prev === 'loading' ? 'registration' : prev);
      }
    };

    initializeApp();
  }, [checkLocation]);

  // Set up location watching when user is logged in and in office
  useEffect(() => {
    if (userProfile && appState === 'main' && !watchId) {
      const id = watchOfficeLocation((result) => {
        setLocationState({
          isInOffice: result.isInOffice,
          location: result.location,
          error: result.error
        });

        // If user moves out of office while in main screen, update state
        if (!result.isInOffice) {
          setAppState('outside-office');
        }
      });

      if (id !== null) {
        setWatchId(id);
      }
    }

    // Cleanup watch when component unmounts or user logs out
    return () => {
      if (watchId !== null) {
        navigator.geolocation?.clearWatch(watchId);
        setWatchId(null);
      }
    };
  }, [userProfile, appState, watchId]);

  // Handle registration completion
  const handleRegistrationComplete = async (profile: UserProfile) => {
    try {
      await setUserProfile(profile);
      setUserProfileState(profile);
      setAppState('loading');
      
      // Check location after registration
      await checkLocation();
    } catch (error) {
      console.error("Registration completion error:", error);
      setLocationState({
        isInOffice: false,
        error: "Failed to complete registration"
      });
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      // Clear location watch
      if (watchId !== null) {
        navigator.geolocation?.clearWatch(watchId);
        setWatchId(null);
      }

      // Clear user data
      await clearUserProfile();
      setUserProfileState(null);
      setLocationState({
        isInOffice: false,
        location: undefined,
        error: undefined
      });
      setAppState('registration');
    } catch (error) {
      console.error("Logout error:", error);
      // Force logout even if there's an error
      setUserProfileState(null);
      setAppState('registration');
    }
  };

  // Handle location retry
  const handleRetryLocation = async () => {
    await checkLocation();
  };

  // Render based on app state
  if (appState === 'loading' || isCheckingLocation) {
    return <SplashScreen />;
  }

  if (appState === 'registration') {
    return (
      <>
        <SplashScreen />
        <DeviceRegistrationModal 
          isOpen={true} 
          onRegister={handleRegistrationComplete} 
        />
      </>
    );
  }

  if (!userProfile) {
    return <SplashScreen />;
  }

  if (appState === 'outside-office') {
    return (
      <OutsideOfficeScreen 
        locationError={locationState.error} 
        onRetry={handleRetryLocation}
        isRetrying={isCheckingLocation}
      />
    );
  }

  if (appState === 'main') {
    return (
      <MainScreen 
        userProfile={userProfile} 
        isInOffice={locationState.isInOffice} 
        locationError={locationState.error} 
        location={locationState.location} 
        onLogout={handleLogout}
      />
    );
  }

  // Fallback
  return <SplashScreen />;
}