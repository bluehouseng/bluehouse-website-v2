"use client";

import { useState, useEffect } from 'react';
import PageIllustration from "@/components/page-illustration";
import Image from 'next/image';
import CYF_1039_1 from '@/public/images/CYF_1039_1.jpg';
// Import images from the tech-tea folder
import techTea1 from '@/public/images/tech-tea/CYF_2904.jpg';
import techTea2 from '@/public/images/tech-tea/CYF_2909.jpg';
import techTea3 from '@/public/images/tech-tea/CYF_2913.jpg';
import techTea4 from '@/public/images/tech-tea/CYF_2918.jpg';
import techTea5 from '@/public/images/tech-tea/CYF_2920.jpg';
import techTea6 from '@/public/images/tech-tea/CYF_2911.jpg';
import techTea7 from '@/public/images/tech-tea/CYF_2915.jpg';
import techTea8 from '@/public/images/tech-tea/CYF_3037.jpg';
import techTea9 from '@/public/images/tech-tea/CYF_2916.jpg';
import techTea10 from '@/public/images/tech-tea/CYF_2912.jpg';

// Create an array of image objects with corresponding text
const techTeaData = [
  { src: techTea1, 
    alt: 'Tech Tea Image 1',
     text: 'Description for Tech Tea Image 1' },
  { src: techTea2, alt:'FRONT-END DEVELOPMENT',
     text: 'We train learners by offering interactive courses, workshops, mentorship, hands-on projects, certifications, and real-world problem-solving opportunities, fostering practical skills.' },
  { src: techTea3, alt: 'Tech Tea Image 3', text: 'Description for Tech Tea Image 3' },
  { src: techTea4, alt: 'Tech Tea Image 4', text: 'Description for Tech Tea Image 4' },
  { src: techTea5, alt: 'Tech Tea Image 5', text: 'Description for Tech Tea Image 5' },
  { src: techTea6, alt: 'Tech Tea Image 6', text: 'Description for Tech Tea Image 6' },
  { src: techTea7, alt: 'Tech Tea Image 7', text: 'Description for Tech Tea Image 7' },
  { src: techTea8, alt: 'Tech Tea Image 8', text: 'Description for Tech Tea Image 8' },
  { src: techTea9, alt: 'Tech Tea Image 9', text: 'Description for Tech Tea Image 9' },
  { src: techTea10, alt: 'Tech Tea Image 10', text: 'Description for Tech Tea Image 10' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % techTeaData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-screen w-full">
        <Image src={CYF_1039_1} alt="Description of image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Attract and inspire future students by showcasing opportunities for growth.
          </h1>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-10">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl text-center flex justify-center">
            Welcome to Our Community
          </h2>
          <h2 className="text-2xl md:text-2xl font-bold text-center px-4 mt-9">Programs Overview</h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <div className="relative h-96 w-full md:w-1/2">
              <Image
                src={techTeaData[currentImageIndex].src}
                alt={techTeaData[currentImageIndex].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition-opacity duration-1000 ease-in-out"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{techTeaData[currentImageIndex].alt}</h3>
              <p className="text-gray-700">{techTeaData[currentImageIndex].text}</p>
            </div>
          </div>
        </div>
      </div>

      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main content */}
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-10 text-center">
            <h1 className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl">
              Our wall of love
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-700">
                Read and listen to what our customers are saying about Bluehouse.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Share Your Testimonial{" "}
                    <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}