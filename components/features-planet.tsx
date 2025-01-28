"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stripes from "@/public/images/stripes-dark.svg";

const EventGallery = () => {
  const [activeTab, setActiveTab] = useState<
    "techfest2024" | "summerTraining" | "partnership"
  >("techfest2024");

  const eventImages: {
    techfest2024: { src: string; text: string }[];
    summerTraining: { src: string; text: string }[];
    partnership: { src: string; text: string }[];
  } = {
    techfest2024: [
      { src: "/images/jtf/jtf-17.jpg", text: "Registration Table" },
      { src: "/images/jtf/jtf-26.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-56.jpg", text: "Tech Event 3" },
      { src: "/images/jtf/jtf-44.jpg", text: "Tech Event 1" },
      { src: "/images/jtf/jtf-40.jpg", text: "Tech Event 2" },
      { src: "/images/jtf/jtf-51.jpg", text: "Tech Event 3" },
    ],
    summerTraining: [
      { src: "/images/summertraining/training10.jpg", text: "Summer Camp 1" },
      { src: "/images/summertraining/training5.jpg", text: "Summer Camp 2" },
      { src: "/images/summertraining/training7.jpg", text: "Summer Camp 3" },
      { src: "/images/summertraining/training3.jpg", text: "Summer Camp 4" },
      { src: "/images/summertraining/training4.jpg", text: "Summer Camp 2" },
      { src: "/images/summertraining/training8.jpg", text: "Summer Camp 3" },
    ],
    partnership: [
      { src: "/images/partner1.jpg", text: "Partnership 1" },
      { src: "/images/partner2.jpg", text: "Partnership 2" },
      { src: "/images/partner3.jpg", text: "Partnership 3" },
    ],
  };

  const handleTabClick = (
    tab: "techfest2024" | "summerTraining" | "partnership"
  ) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4 mt-32">
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
          {["techfest2024", "summerTraining", "partnership"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                handleTabClick(
                  tab as "techfest2024" | "summerTraining" | "partnership"
                )
              }
              className={`px-4 py-2 mx-2 text-sm font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white shadow-md text-gray-700"
              } rounded-lg hover:bg-blue-400 hover:text-white`}
            >
              {tab === "techfest2024" && "TechFest 2024"}
              {tab === "summerTraining" && "Summer Training"}
              {tab === "partnership" && "Partnership"}
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
          <div className="mb-8 text-center">
            {activeTab === "techfest2024" && (
              <p className="text-sm text-gray-700">
                TechFest 2024 was an extraordinary milestone, drawing over 800
                attendees to celebrate innovation, <br />
                collaboration, and groundbreaking technology. Our team
                orchestrated a dynamic event showcasing <br />
                cutting-edge advancements, inspiring discussions, and powerful
                networking opportunities. <br />
                This remarkable gathering united visionaries and industry leaders,
                igniting ideas and fostering <br />
                connections that will shape the future of technology and drive
                transformative progress.
              </p>
            )}
            {activeTab === "summerTraining" && (
              <p className="text-sm text-gray-700">
                One of our proudest achievements was organizing and leading a Tech
                Summer Training, designed to <br /> inspire and educate young
                minds. We created a program blending coding, robotics, and app
                design <br /> with engaging activities that sparked curiosity and
                creativity. It empowered participants to embrace <br />
                technology while building critical skills and lasting confidence.
              </p>
            )}
            {activeTab === "partnership" && (
              <p className="text-sm text-gray-700">
                We proudly celebrate our successful partnerships, especially with
                TechSynergy, which have been pivotal
                <br /> in driving growth, innovation, and community impact. This
                collaboration has provided invaluable opportunities <br /> for our
                students, offering internships with leading companies in the
                United Kingdom and remote
                <br />
                job placements with UK-based organizations. Together, we’re
                empowering the next <br />
                generation to thrive in a globally connected, tech-driven
                workforce.
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
                transition={{ duration: 1, delay: index * 1}}
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
















