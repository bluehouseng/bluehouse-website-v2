"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import CYF_1039_1 from "@/public/images/CYF_1039_1.jpg";
import Bluehouse2 from "@/public/images/bluehouse-logo.png";

// Import images from the tech-tea folder
import techTea1 from "@/public/images/tech-tea/CYF_2904.jpg";
import techTea2 from "@/public/images/tech-tea/CYF_2909.jpg";
import techTea3 from "@/public/images/tech-tea/CYF_2913.jpg";
import techTea4 from "@/public/images/tech-tea/CYF_2918.jpg";
import techTea5 from "@/public/images/tech-tea/CYF_2920.jpg";
import techTea6 from "@/public/images/tech-tea/CYF_2911.jpg";
import techTea7 from "@/public/images/tech-tea/CYF_2915.jpg";
import techTea8 from "@/public/images/tech-tea/CYF_3037.jpg";
import techTea9 from "@/public/images/tech-tea/CYF_2916.jpg";
import techTea10 from "@/public/images/tech-tea/CYF_2912.jpg";

// Program Data
const techTeaData = [
  { src: techTea1, alt: "GRAPHIC DESIGN PROGRAM", text: "Learn Adobe Photoshop, Illustrator, and design principles through real-world projects." },
  { src: techTea2, alt: "FRONT-END DEVELOPMENT", text: "Interactive courses, workshops, and hands-on projects to master HTML, CSS, and JavaScript." },
  { src: techTea3, alt: "DATA SCIENCE PROGRAM", text: "Learn data analysis, visualization, machine learning, and predictive modeling." },
  { src: techTea4, alt: "UI/UX PROGRAM", text: "Master design principles, prototyping, usability testing, and user-centered experiences." },
  { src: techTea5, alt: "DATA ANALYSIS PROGRAM", text: "Gain expertise in statistical tools, visualization, and real-world dataset analysis." },
  { src: techTea6, alt: "DIGITAL MARKETING PROGRAM", text: "Cover SEO, social media, email marketing, and analytics for impactful campaigns." },
  { src: techTea7, alt: "BLOCKCHAIN DEVELOPMENT PROGRAM", text: "Learn blockchain architecture, smart contracts, and Solidity programming." },
  { src: techTea8, alt: "BACKEND DEVELOPMENT PROGRAM", text: "Develop scalable server-side applications with databases and APIs." },
  { src: techTea9, alt: "PYTHON PROGRAM", text: "Comprehensive Python training for web development, data analysis, and automation." },
  { src: techTea10, alt: "VIDEO EDITING PROGRAM", text: "Master video editing techniques using Adobe Premiere Pro and After Effects." },
];

// Counter Component
interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end]);

  return <span ref={counterRef}>{count}+</span>;
};

// Hero Component
export default function Hero() {
  const [selectedProgramIndex, setSelectedProgramIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedProgramIndex(selectedProgramIndex === index ? null : index);
  };

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <Image src={CYF_1039_1} alt="Inspiring opportunities" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Attract and inspire future students by showcasing opportunities for growth.
          </h1>

          {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-10">
            Learn More
          </button> */}

          <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
            <div
              className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay={450}
            >
              <Link
                href="https://www.bluelearn.africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              >
                <span className="relative inline-flex items-center">
                  Click to join
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </Link>
              <a
                href="https://forms.gle/14znUV5fWGwrWFG58"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
              >
                Join Our Programs
              </a>
            </div>

          <div className="flex space-x-4 mt-10">
            <Link href="https://www.bluelearn.africa/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Learn More
            </Link>
            <Link href="https://forms.gle/14znUV5fWGwrWFG58" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
              Join Our Programs
            </Link>

          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="bg-white py-16 text-center">
        <h2 className="text-4xl font-bold">Empowering the Next Generation in Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Hands-on Learning</h3>
            <p>Real-world projects, hackathons, and coding challenges.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Mentorship & Networking</h3>
            <p>Connect with industry leaders and gain tech career insights.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Internship Opportunities</h3>
            <p>Access internships and job placements in tech.</p>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-20 text-5xl font-bold text-center">Programs Overview</h2>
          {techTeaData.map((program, index) => (
            <div key={index} className="border-b border-gray-300">
              <button className="w-full text-left text-2xl font-semibold text-blue-600 hover:underline focus:outline-none" onClick={() => handleToggle(index)}>
                {program.alt}
              </button>
              {selectedProgramIndex === index && (
                <div className="mt-4 flex flex-col md:flex-row items-center gap-6">
                  <Image src={program.src} alt={program.alt} layout="fill" objectFit="cover" className="rounded-sm shadow-lg" />
                  <p className="text-gray-700 text-lg">{program.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <PageIllustration />
    </section>
  );
}
