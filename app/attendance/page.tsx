"use client";

import { useState, useEffect, useCallback } from "react";
import { SplashScreen } from "@/components/attendance/SplashScreen";
import { DeviceRegistrationModal } from "@/components/attendance/DeviceRegistrationModal";
import { OutsideOfficeScreen } from "@/components/attendance/OutsideOfficeScreen";
import { MainScreen } from "@/components/attendance/MainScreen";
import { UserProfile } from "./types";
import {
  getUserProfile,
  setUserProfile,
  clearUserProfile,
} from "../../lib/auth";
import {
  checkOfficeLocation,
  checkLocationPermission,
  requestLocationPermission,
  watchOfficeLocation,
} from "../../lib/location";

type AppState = "loading" | "registration" | "outside-office" | "main";

interface LocationState {
  isInOffice: boolean;
  location?: GeolocationPosition;
  error?: string;
}

export default function AttendancePage() {
  const [appState, setAppState] = useState<AppState>("loading");
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [locationState, setLocationState] = useState<LocationState>({
    isInOffice: false,
    location: undefined,
    error: undefined,
  });
  const [watchId, setWatchId] = useState<number | null>(null);
  const [isCheckingLocation, setIsCheckingLocation] = useState<boolean>(false);

  /**
   * Check location with permission handling
   */
  const checkLocation = useCallback(
    async (showLoading = true) => {
      if (showLoading) setIsCheckingLocation(true);

      try {
        // Check for location permission
        let hasPermission = await checkLocationPermission();
        if (!hasPermission) {
          hasPermission = await requestLocationPermission();
          if (!hasPermission) {
            setLocationState((prev) => ({
              ...prev,
              isInOffice: false,
              error: "Location permission is required to verify your office presence",
            }));
            return;
          }
        }

        // Verify office location
        const locationResult = await checkOfficeLocation();
        setLocationState((prev) => ({
          ...prev,
          ...locationResult,
        }));

        if (userProfile) {
          setAppState(locationResult.isInOffice ? "main" : "outside-office");
        }
      } catch (error) {
        console.error("Location check error:", error);
        setLocationState((prev) => ({
          ...prev,
          isInOffice: false,
          error:
            error instanceof Error
              ? error.message
              : "Failed to verify location",
        }));

        if (userProfile) {
          setAppState("outside-office");
        }
      } finally {
        if (showLoading) setIsCheckingLocation(false);
      }
    },
    [userProfile]
  );

  /**
   * Initialize app on mount
   */
  useEffect(() => {
    let isMounted = true;

    const initializeApp = async () => {
      try {
        const profile = await getUserProfile();
        if (!isMounted) return;

        if (profile) {
          setUserProfileState(profile);
          setAppState("loading");
          await checkLocation(false);
        } else {
          setAppState("registration");
        }
      } catch (error) {
        console.error("Initialization error:", error);
        if (isMounted) {
          setLocationState({
            isInOffice: false,
            error: "Failed to initialize app",
          });
          setAppState("registration");
        }
      }
    };

    initializeApp();

    return () => {
      isMounted = false;
    };
  }, [checkLocation]);

  /**
   * Watch office location when user is active in main screen
   */
  useEffect(() => {
    if (!userProfile) return;
    if (appState !== "main") return;
    if (watchId) return; // prevent duplicate watchers

    const id = watchOfficeLocation((result) => {
      setLocationState((prev) => ({
        ...prev,
        ...result,
      }));

      if (!result.isInOffice) {
        setAppState("outside-office");
      }
    });

    if (id !== null) setWatchId(id);

    return () => {
      if (id !== null) {
        navigator.geolocation?.clearWatch(id);
        setWatchId(null);
      }
    };
  }, [userProfile, appState, watchId]);

  /**
   * Handle registration completion
   */
  const handleRegistrationComplete = async (profile: UserProfile) => {
    try {
      await setUserProfile(profile);
      setUserProfileState(profile);
      setAppState("loading");

      await checkLocation();
    } catch (error) {
      console.error("Registration completion error:", error);
      setLocationState((prev) => ({
        ...prev,
        isInOffice: false,
        error: "Failed to complete registration",
      }));
    }
  };

  /**
   * Handle logout
   */
  const handleLogout = async () => {
    try {
      if (watchId !== null) {
        navigator.geolocation?.clearWatch(watchId);
        setWatchId(null);
      }

      await clearUserProfile();
      setUserProfileState(null);
      setLocationState({
        isInOffice: false,
        location: undefined,
        error: undefined,
      });
      setAppState("registration");
    } catch (error) {
      console.error("Logout error:", error);
      setUserProfileState(null);
      setAppState("registration");
    }
  };

  /**
   * Handle retry location
   */
  const handleRetryLocation = async () => {
    await checkLocation();
  };

  /**
   * Render by app state
   */
  if (appState === "loading" || isCheckingLocation) {
    return <SplashScreen />;
  }

  if (appState === "registration") {
    return (
      <DeviceRegistrationModal
        isOpen={true}
        onRegister={handleRegistrationComplete}
      />
    );
  }

  if (!userProfile) {
    return <SplashScreen />;
  }

  if (appState === "outside-office") {
    return (
      <OutsideOfficeScreen
        locationError={locationState.error}
        onRetry={handleRetryLocation}
        isRetrying={isCheckingLocation}
      />
    );
  }

  if (appState === "main") {
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

  return <SplashScreen />;
}
