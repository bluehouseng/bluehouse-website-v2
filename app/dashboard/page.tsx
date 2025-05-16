"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars, FaHome, FaBook, FaGraduationCap, FaUser,
  FaDiscord, FaCog, FaCode, FaServer, FaChartLine, FaDatabase,
  FaShieldAlt, FaPaintBrush, FaBullhorn, FaTasks, FaUsers,
  FaFileAlt, FaUsersCog, FaPencilRuler, FaHandSparkles, FaTimes, FaProjectDiagram, FaCommentAlt
} from "react-icons/fa";

import Backend from "@/public/images/backend.jpeg";
import Frontend from "@/public/images/frontend.jpeg";
import Datascience from "@/public/images/datascience.jpg";
import DataAnalysis from "@/public/images/dataAnalysis.jpeg";
import Cybersecurity from "@/public/images/Cybersecurity.jpg";
import GraphicDesign from "@/public/images/GraphicsDesign.jpg";
import DigitalMarketing from "@/public/images/DigitalMarketing.jpg";
import ProductManagement from "@/public/images/ProductManagement.jpg";
import DeveloperRelations from "@/public/images/DeveloperRelations.png";
import TechnicalWriting from "@/public/images/TechnicalWriting.jpg";
import UIUX from "@/public/images/UIUX.jpg";
import CommunityManagement from "@/public/images/CommunityManagement.jpg";

interface Course {
  title: string;
  icon: React.ReactNode;
  image: any;
  description: string;
  link: string;
}

const courses: Course[] = [
  { title: "Frontend Development", icon: <FaCode />, image: Frontend, description: "Build interactive and visually stunning websites...", link: "/course/frontend-development" },
  { title: "Backend Development", icon: <FaServer />, image: Backend, description: "Learn to design, build, and manage the server-side...", link: "/course/backend-devlopment" },
  { title: "Data Science", icon: <FaChartLine />, image: Datascience, description: "Analyze complex datasets and develop models...", link: "/course/data-science" },
  { title: "Data Analysis", icon: <FaDatabase />, image: DataAnalysis, description: "Transformation of raw data into actionable insights...", link: "/course/data-analysis" },
  { title: "Graphic Design", icon: <FaPaintBrush />, image: GraphicDesign, description: "Create amazing visuals with endless creativity...", link: "/course/graphic-design" },
  { title: "Cybersecurity", icon: <FaShieldAlt />, image: Cybersecurity, description: "Protect systems and data from cyber threats...", link: "/course/cyber-security" },
  { title: "Product Management", icon: <FaTasks />, image: ProductManagement, description: "Lead product development from concept to launch...", link: "/course/product-management" },
  { title: "Digital Marketing", icon: <FaBullhorn />, image: DigitalMarketing, description: "Master SEO and other online marketing strategies...", link: "/course/digital-marketing" },
  { title: "Developer Relations", icon: <FaUsers />, image: DeveloperRelations, description: "Build and nurture relationships with dev communities...", link: "/course/developer-relations" },
  { title: "Technical Writing", icon: <FaFileAlt />, image: TechnicalWriting, description: "Create engaging and effective technical documentation...", link: "/course/technical-writing" },
  { title: "UI/UX Design", icon: <FaPencilRuler />, image: UIUX, description: "Create seamless and visually engaging experiences...", link: "/course/ui-ux" },
  { title: "Community Management", icon: <FaUsersCog />, image: CommunityManagement, description: "Build vibrant and engaging online communities...", link: "/course/community-management" },
];

const CourseCard = ({ course }: { course: Course }) => (
  <Link href={course.link} className="block">
    <div className="bg-white rounded-lg shadow-md  border hover:shadow-lg transition duration-300">
      <div className="relative h-80 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          className="rounded-t-lg p-1"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2 text-blue-600">
          {course.icon}
          <h3 className="ml-2 text-lg font-semibold">{course.title}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
        <span className="text-xs text-gray-500">12 modules</span>
      </div>
    </div>
  </Link>
);

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white flex-shrink-0 transition-all duration-300 ${sidebarCollapsed ? 'w-24' : 'w-62'}`}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            {!sidebarCollapsed && <h1 className="text-xl font-bold">Tech Career Bootcamp</h1>}
            <button
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-gray-500 p-1 rounded-md"
            >
              {sidebarCollapsed ? <FaBars /> : <FaTimes />}
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div className={`text-gray-500 text-xs uppercase mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>HOME</div>
            <Link href="/dashboard" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              {/* <FaHome className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'}  text-yellow-500`} /> */}
              <FaHome
                size={30}
                className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-yellow-500`}
              />

              {!sidebarCollapsed && "Dashboard"}
            </Link>
            <Link href="/certifications" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaGraduationCap
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-500`} />
              {!sidebarCollapsed && "Certifications"}
            </Link>
            <Link href="/projects" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaProjectDiagram
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-500`} />
              {!sidebarCollapsed && "My Projects"}
            </Link>

            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>TECH SPECIALIZATIONS</div>
            <Link
              href="/course/frontend-development"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'frontend-development' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('frontend-development')}
            >
              <FaCode
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-600`} />
              {!sidebarCollapsed && "Frontend Development"}
            </Link>
            <Link
              href="/course/backend-development"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'backend-development' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('backend-development')}
            >
              <FaServer
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-600`} />
              {!sidebarCollapsed && "Backend Development"}
            </Link>
            <Link
              href="/course/data-science"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'data-science' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('data-science')}
            >
              <FaChartLine
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-purple-600`} />
              {!sidebarCollapsed && "Data Science"}
            </Link>
            <Link
              href="/course/cyber-security"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'cybersecurity' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('cybersecurity')}
            >
              <FaShieldAlt
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-red-600`} />
              {!sidebarCollapsed && "Cybersecurity"}
            </Link>
            <Link
              href="/course/graphic-design"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'graphic-design' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('graphic-design')}
            >
              <FaPaintBrush
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-600`} />
              {!sidebarCollapsed && "Graphics Design"}
            </Link>
            <Link
              href="/course/product-management"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'product-management' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('product-management')}
            >
              <FaTasks
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-indigo-600`} />
              {!sidebarCollapsed && "Product Management"}
            </Link>
            <Link
              href="/course/digital-marketing"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'digital-marketing' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('digital-marketing')}
            >
              <FaBullhorn
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-pink-600`} />
              {!sidebarCollapsed && "Digital Marketing"}
            </Link>
            <Link
              href="/course/developer-relations"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'developer-relations' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('developer-relations')}
            >
              <FaUsers
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-teal-600`} />
              {!sidebarCollapsed && "Developer Relations"}
            </Link>
            <Link
              href="/course/technical-writing"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'technical-writing' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('technical-writing')}
            >
              <FaFileAlt
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-orange-600`} />
              {!sidebarCollapsed && "Technical Writing"}
            </Link>
            <Link
              href="/course/ui-ux"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'ui-ux-design' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('ui-ux-design')}
            >
              <FaPencilRuler
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-amber-600`} />
              {!sidebarCollapsed && "UI/UX Design"}
            </Link>
            <Link
              href="/course/community-management"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'community-management' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('community-management')}
            >
              <FaUsersCog
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-emerald-600`} />
              {!sidebarCollapsed && "Community Management"}
            </Link>
            <Link
              href="/course/data-analysis"
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'data-analysis' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveMenu('data-analysis')}
            >
              <FaDatabase
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-yellow-600`} />
              {!sidebarCollapsed && "Data Analysis"}
            </Link>

            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>COMMUNITY</div>
            <Link href="/community" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaDiscord
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-indigo-500`} />
              {!sidebarCollapsed && "Discord Community"}
            </Link>

            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>SUPPORT</div>
            <Link href="/support" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaCommentAlt
              size={30}
              className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-500`} />
              {!sidebarCollapsed && "Feedback & Help"}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-3 text-2xl font-semibold mb-6">
          <h1>Welcome</h1>
          <FaHandSparkles className="text-yellow-500" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech Career Accelerator</h1>

          <div className="flex items-center mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
              8-12 weeks per specialization
            </span>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Launch your tech career with our intensive bootcamps. Build job-ready skills through hands-on projects and personalized mentorship from industry professionals.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Each specialization combines fundamental concepts with real-world applications, culminating in a professional portfolio project that demonstrates your expertise to employers.
          </p>

          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">WHAT YOU&apos;LL ACHIEVE</h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
                Job-Ready Skills
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                Professional Portfolio
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
                Industry Certification
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                1:1 Career Coaching
              </span>
            </div>
          </div>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Available Specializations</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}











