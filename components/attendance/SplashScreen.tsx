import Image from 'next/image';
import logo from "../../public/images/bluehouse-logo.png"

export const SplashScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white">
    <Image
      src={logo}
      alt="Bluehouse Technologies"
      width={150}
      height={150}
      className="object-contain"
    />
    <p className="mt-4 text-lg font-semibold text-gray-800">
      Welcome to Bluehouse Technologies
    </p>
  </div>
);