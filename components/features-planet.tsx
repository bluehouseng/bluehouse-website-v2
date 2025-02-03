"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stripes from "@/public/images/stripes-dark.svg";

const EventGallery = () => {
  const [activeTab, setActiveTab] = useState<
    "training" | "summerTraining" | "techfest2024"
  >("training");

  const eventImages: {
    training: { src: string; text: string }[];
    summerTraining: { src: string; text: string }[];
    techfest2024: { src: string; text: string }[];
  } = {
    training: [
      { src: "/images/summertraining/training2.jpg", text: "Training 1" },
      { src: "/images/summertraining/training9.jpg", text: "Training 2" },
      { src: "/images/summertraining/training3.jpg", text: "Training 3" },
      { src: "/images/summertraining/training13.jpg", text: "Training 2" },
      { src: "/images/summertraining/training8.jpg", text: "Training 3" },
      { src: "/images/summertraining/training1.jpg", text: "Training 2" },
      
    ],
    summerTraining: [
      { src: "/images/summertraining/training10.jpg", text: "Summer Camp 1" },
      { src: "/images/summertraining/training5.jpg", text: "Summer Camp 2" },
      { src: "/images/summertraining/training7.jpg", text: "Summer Camp 3" },
      { src: "/images/summertraining/training3.jpg", text: "Summer Camp 4" },
      { src: "/images/summertraining/training4.jpg", text: "Summer Camp 2" },
      { src: "/images/summertraining/training8.jpg", text: "Summer Camp 3" },
    ],
    techfest2024: [
      { src: "/images/jtf/jtf-17.jpg", text: "Registration Table" },
      { src: "/images/jtf/jtf-26.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-56.jpg", text: "Tech Event 3" },
      { src: "/images/jtf/jtf-44.jpg", text: "Tech Event 1" },
      { src: "/images/jtf/jtf-40.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-51.jpg", text: "Tech Event 3" },
    ],
  };

  const handleTabClick = (
    tab: "training" | "summerTraining" | "techfest2024"
  ) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4 mt-32 overflow-x-hidden ">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Achievements at a Glance
        </h2>
      </div>
      <div className="">
        <div className="flex justify-center mb-6">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image className="max-w-none" src={Stripes} alt="Stripes" />
          </div>
          {["training", "summerTraining", "techfest2024"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                handleTabClick(
                  tab as "training" | "summerTraining" | "techfest2024"
                )
              }
              className={`px-4 py-2 mx-2 text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow-md text-gray-700"
              } rounded-lg hover:bg-blue-400 hover:text-white`}
            >
              {tab === "training" && "Training"}
              {tab === "summerTraining" && "Summer Training"}
              {tab === "techfest2024" && "TechFest 2024"}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 4 }}
        >
         
          <div className="mb-8 text-center mx-4 sm:mx-16 md:mx-32 lg:mx-64  ">
  {activeTab === "training" && (
    <p className="text-sm text-gray-700">
      We proudly celebrate our successful training programs,
      equipping individuals with essential skills and fostering
      career growth. Our initiatives have provided invaluable
      learning experiences, preparing students for job placements 
      and entrepreneurial success in the ever-evolving tech
      landscape.
    </p>
  )}
  {activeTab === "summerTraining" && (
    <p className="text-sm text-gray-700">
      One of our proudest achievements was organizing and leading a
      Tech Summer Training, designed to inspire and educate young 
      minds. We created a program blending coding, robotics, and app
      design with engaging activities that sparked curiosity and
      creativity. It empowered participants to embrace technology
      while building critical skills and lasting confidence.
    </p>
  )}
  {activeTab === "techfest2024" && (
    <p className="text-sm text-gray-700">
      TechFest 2024 was an extraordinary milestone, drawing over 800
      attendees to celebrate innovation, collaboration, and
      groundbreaking technology. Our team orchestrated a dynamic
      event showcasing cutting-edge advancements, inspiring 
      discussions, and powerful networking opportunities. This
      remarkable gathering united visionaries and industry leaders,
      igniting ideas and fostering connections that will shape the 
      future of technology and drive transformative progress.
    </p>
  )}
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
            {eventImages[activeTab].map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg w-full h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 1 }}
              >
                <Image
                  src={image.src}
                  alt={image.text}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-lg">{image.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventGallery;






