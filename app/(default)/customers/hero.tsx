"use client";
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import PageIllustration from "@/components/page-illustration";
import Image from 'next/image';
import CYF_1039_1 from '@/public/images/CYF_1039_1.jpg';
import Bluehouse2 from "@/public/images/bluehouse-logo.png";
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

const techTeaData = [
  { src: techTea1, alt: 'GRAPHIC DESIGN PROGRAM', text: "Our Graphic Design program empowers creative minds to craft stunning visuals and impactful designs. Learn essential tools like Adobe Photoshop and Illustrator, master design principles, and work on real-world projects. With expert mentorship, you'll develop the skills to create compelling branding, digital art, and visual content for any platform." },
  { src: techTea2, alt: 'FRONT-END DEVELOPMENT', text: 'We train learners by offering interactive courses, workshops, mentorship, hands-on projects, certifications, and real-world problem-solving opportunities, fostering practical skills.' },
  { src: techTea3, alt: 'DATA SCIENCE PROGRAM', text: 'Our Data Science training program equips learners with the skills to harness data for impactful insights. From data analysis and visualization to machine learning and predictive modeling, participants gain hands-on experience with cutting-edge tools and techniques. Join us to master data-driven decision-making and thrive in today’s data-centric world.' },
  { src: techTea4, alt: 'UI/UX PROGRAM', text: 'Our UI/UX training program empowers aspiring designers with the skills to create intuitive, user-centered digital experiences. Through hands-on projects, expert mentorship, and industry-standard tools, participants learn design principles, prototyping, and usability testing. Join us to master UI/UX design and transform ideas into impactful, user-friendly solutions for today’s digital world.' },
  { src: techTea5, alt: 'DATA ANALYSIS PROGRAM', text: "Our Data Analysis program trains individuals to transform raw data into meaningful insights. Participants gain hands-on experience with statistical tools, data visualization, and real-world datasets. With expert guidance, you'll master techniques to analyze trends, solve problems, and drive data-informed decisions, preparing you for success in a data-driven world." },
  { src: techTea6, alt: 'DIGITAL MARKETING PROGRAM', text: "Our Digital Marketing program empowers learners to master the art of online engagement. Covering SEO, social media, email marketing, and analytics, participants gain practical skills to create impactful campaigns. With expert mentorship and real-world projects, you'll learn to drive brand growth, increase conversions, and excel in the digital landscape." },
  { src: techTea7, alt: 'BLOCKCHAIN DEVELOPMENT PROGRAM', text: 'Our Blockchain Development program equips participants with the skills to build secure, decentralized applications. Learn blockchain architecture, smart contracts, and cryptocurrency technologies through hands-on projects and expert-led sessions. Gain practical experience with tools like Solidity and Hyperledger, preparing you to innovate and lead in the fast-evolving blockchain industry' },
  { src: techTea8, alt: 'BACKEND DEVELOPMENT PROGRAM', text: 'Our Backend Development program focuses on building robust, scalable server-side applications. Participants gain hands-on experience with programming languages, databases, APIs, and frameworks. Learn to design secure architectures and optimize performance under expert guidance. Join us to master backend technologies and power the core functionality of modern digital solutions.' },
  { src: techTea9, alt: 'PYTHON PROGRAM', text: 'Our Python program offers comprehensive training in one of the world’s most versatile programming languages. From foundational concepts to advanced applications like web development, data analysis, and automation, participants gain hands-on experience through real-world projects. Master Python with expert guidance and unlock endless opportunities in tech and beyond.' },
  { src: techTea10, alt: 'VIDEO EDITING PROGRAM', text: "Our Video Editing program equips participants with the skills to create professional-quality content. Learn editing techniques, motion graphics, and storytelling using industry-standard tools like Adobe Premiere Pro and After Effects. Through hands-on projects and expert guidance, you'll master the art of video production and bring creative visions to life." },
];


interface CounterProps {
  end: number;
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
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

          return () => clearInterval(timer);
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

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % techTeaData.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <div className="relative h-screen w-full">
        <Image src={CYF_1039_1} alt="Description of image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          {/* <Image
            className="box-content rounded-full border-gray-50 w-36"
            src={Bluehouse2}
            width={32}
            height={32}
            alt="Bluehouse logo"
          /> */}
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4 mb-10">
            Attract and inspire future students by showcasing opportunities for growth.
          </h1>

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
              <Link
                href="https://forms.gle/14znUV5fWGwrWFG58"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
              >
                Join Our Programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center flex-wrap">
            <div className="bg-slate-400 shadow-2xl text-white py-5 p-6 font-extrabold ">
              <p className="font-bold">SOME NUMBERS</p>
              <p className="font-bold text-3xl">What We did so far</p>
            </div>
            <div className="flex justify-center items-center space-x-12 shadow-2xl text-gray-800 py-5 p-6 font-semibold">
              <div>
                <p className="text-3xl font-bold">
                  <Counter end={1000} />
                </p>
                <p className="text-[15px]">Total Number of students</p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  <Counter end={500} />
                </p>
                <p className="text-[15px]">Graduated Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold">
                  <Counter end={400} />
                </p>
                <p className="text-[15px]">Certificates issued</p>
              </div>
            </div>
          </div>

          <h2 className="mt-12 text-4xl font-bold">Empowering the Next Generation in Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Hands-on Learning</h3>
              <p>Engage in real-world tech projects, hackathons, and coding challenges to build your expertise.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Mentorship & Networking</h3>
              <p>Connect with industry leaders and gain insights into cutting-edge technology trends and careers.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-2">Internship Opportunities</h3>
              <p>Get access to exclusive internships and job placements at top tech companies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-20 mt-20 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl text-center flex justify-center">
            Programs Overview
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <div className="relative h-96 w-full md:w-1/2">
              <Image
                src={techTeaData[currentImageIndex].src}
                alt={techTeaData[currentImageIndex].alt}
                layout="fill"
                objectFit="cover"
                className="rounded-sm shadow-lg transition-opacity duration-1000 ease-in-out"
              />
            </div>
            <div className="w-full md:w-1/2 ml-20">
              <h3 className="text-4xl font-bold mb-10">{techTeaData[currentImageIndex].alt}</h3>
              <p className="text-gray-700 text-xl">{techTeaData[currentImageIndex].text}</p>
            </div>
          </div>
        </div>
      </div>

      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
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