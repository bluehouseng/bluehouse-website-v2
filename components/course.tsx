"use client";

// import { useState, useEffect } from 'react';
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



export default function course() {
  

  return (
    <section className="relative">
      <div className="relative h-screen w-full">
       
      </div>
    </section>
  );
}