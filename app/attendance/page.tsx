"use client";

import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/attendance/SplashScreen";
import { DeviceRegistrationModal } from "@/components/attendance/DeviceRegistrationModal";
import { OutsideOfficeScreen } from "@/components/attendance/OutsideOfficeScreen";
import { MainScreen } from "@/components/attendance/MainScreen";
import { UserProfile } from "./types";
import { getUserProfile, setUserProfile, clearUserProfile } from "../../lib/auth";
import { checkIsInOffice } from "../../lib/location";

export default function AttendancePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showRegistration, setShowRegistration] = useState<boolean>(false);
  const [userProfile, setUserProfileState] = useState<UserProfile | null>(null);
  const [isInOffice, setIsInOffice] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<GeolocationPosition | undefined>(undefined);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const profile = await getUserProfile();
        if (profile) setUserProfileState(profile);
        else setShowRegistration(true);

        const locationResult = await checkIsInOffice();
        setIsInOffice(locationResult.isInOffice);
        setLocationError(locationResult.error || undefined);
        setLocation(locationResult.location || undefined);
      } catch (error) {
        console.error("Initialization error:", error);
        setLocationError("Failed to initialize app");
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  const handleRegistrationComplete = (profile: UserProfile) => {
    setUserProfileState(profile);
    setShowRegistration(false);
    checkLocation();
  };

  const checkLocation = async () => {
    setIsLoading(true);
    try {
      const locationResult = await checkIsInOffice();
      setIsInOffice(locationResult.isInOffice);
      setLocationError(locationResult.error || undefined);
      setLocation(locationResult.location || undefined);
    } catch (error) {
      console.error("Location check error:", error);
      setLocationError("Failed to verify location");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await clearUserProfile();
    setUserProfileState(null);
    setShowRegistration(true);
  };

  if (isLoading) return <SplashScreen />;

  if (showRegistration) {
    return (
      <>
        <SplashScreen />
        <DeviceRegistrationModal isOpen={showRegistration} onRegister={handleRegistrationComplete} />
      </>
    );
  }

  if (!userProfile) return <SplashScreen />;

  if (!isInOffice) {
    return <OutsideOfficeScreen locationError={locationError} onRetry={checkLocation} />;
  }

  return <MainScreen userProfile={userProfile} isInOffice={isInOffice} locationError={locationError} location={location} onLogout={handleLogout} />;
}
