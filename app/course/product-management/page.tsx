
'use client';

import { useState } from 'react';
import {
  FaBars,
  FaBullhorn,
  FaChartLine,
  FaChevronDown,
  FaChevronRight,
  FaCode,
  FaCommentAlt,
  FaDatabase,
  FaDiscord,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaPaintBrush,
  FaPencilRuler,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
  FaTasks,
  FaTimes,
  FaUsers,
  FaUsersCog,
} from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const productManagementCourse = {
  title: 'Product Management',
  description: 'Guide the vision, strategy, and roadmap of successful products',
  modules: [
    {
      title: 'Introduction to Product Management',
      description: 'Understanding the role and responsibilities of a Product Manager',
      topics: ['What is Product Management?', 'The Product Lifecycle', 'Key Skills for PMs'],
    },
    {
      title: 'Product Discovery and Research',
      description: 'Identifying user needs and market opportunities',
      topics: ['User Research Methods', 'Market Analysis', 'Competitive Analysis'],
    },
    {
      title: 'Product Strategy and Roadmapping',
      description: 'Defining the product vision and planning its evolution',
      topics: ['Defining Product Vision', 'Setting Objectives and Key Results (OKRs)', 'Building a Product Roadmap'],
    },
    {
      title: 'Product Design and Development',
      description: 'Collaborating with design and engineering teams',
      topics: ['User Stories and Prioritization', 'Agile Methodologies', 'Working with UX/UI Designers'],
    },
    {
      title: 'Product Launch and Growth',
      description: 'Bringing products to market and scaling their adoption',
      topics: ['Go-to-Market Strategies', 'Product Marketing Basics', 'Measuring Success and Iteration'],
    },
  ],
};

export default function ProductManagementPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('product-management');

  const toggleCourse = (course: string) => {
    setExpandedCourse(expandedCourse === course ? null : course);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white flex-shrink-0 transition-all duration-300 h-full ${
          sidebarCollapsed ? 'w-20' : 'w-52'
        }`}
      >
        <div className="h-full flex flex-col border-r border-gray-200">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            {!sidebarCollapsed && (
              <h1 className="text-xl font-bold">Tech Career Bootcamp</h1>
            )}
            <button
              onClick={toggleSidebar}
              className="text-gray-700 hover:text-gray-500 p-1 rounded-md"
            >
              {sidebarCollapsed ? <FaBars /> : <FaTimes />}
            </button>
          </div>

          {/* Scrollable Navigation Area */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <div
              className={`text-gray-500 text-xs uppercase mb-2 ${
                sidebarCollapsed ? 'hidden' : 'block'
              }`}
            >
              HOME
            </div>
            <Link
              href="/dashboard"
              className="flex items-center py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaHome
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-yellow-500`}
              />
              {!sidebarCollapsed && 'Dashboard'}
            </Link>
            <Link
              href="#"
              className="flex items-center py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaGraduationCap
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-blue-500`}
              />
              {!sidebarCollapsed && 'Certifications'}
            </Link>
            <Link
              href="#"
              className="flex items-center py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaProjectDiagram
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-green-500`}
              />
              {!sidebarCollapsed && 'My Projects'}
            </Link>

            <div
              className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${
                sidebarCollapsed ? 'hidden' : 'block'
              }`}
            >
              TECH SPECIALIZATIONS
            </div>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'frontend-development'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('frontend-development');
              }}
            >
              <FaCode
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-green-600`}
              />
              {!sidebarCollapsed && 'Frontend Development'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'backend-development'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('backend-development');
              }}
            >
              <FaServer
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-blue-600`}
              />
              {!sidebarCollapsed && 'Backend Development'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'data-science' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('data-science');
              }}
            >
              <FaChartLine
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-purple-600`}
              />
              {!sidebarCollapsed && 'Data Science'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'cybersecurity' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('cybersecurity');
              }}
            >
              <FaShieldAlt
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-red-600`}
              />
              {!sidebarCollapsed && 'Cybersecurity'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'product-management'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('product-management');
              }}
            >
              <FaTasks
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-indigo-600`}
              />
              {!sidebarCollapsed && 'Product Management'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'digital-marketing'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('digital-marketing');
              }}
            >
              <FaBullhorn
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-pink-600`}
              />
              {!sidebarCollapsed && 'Digital Marketing'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'developer-relations'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('developer-relations');
              }}
            >
              <FaUsers
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-teal-600`}
              />
              {!sidebarCollapsed && 'Developer Relations'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'technical-writing'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('technical-writing');
              }}
            >
              <FaFileAlt
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-orange-600`}
              />
              {!sidebarCollapsed && 'Technical Writing'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'ui-ux-design' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('ui-ux-design');
              }}
            >
              <FaPencilRuler
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-amber-600`}
              />
              {!sidebarCollapsed && 'UI/UX Design'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'community-management'
                  ? 'bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('community-management');
              }}
            >
              <FaUsersCog
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-emerald-600`}
              />
              {!sidebarCollapsed && 'Community Management'}
            </Link>
            <Link
              href="#"
              className={`flex items-center py-2 px-3 rounded ${
                activeMenu === 'data-analysis' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu('data-analysis');
              }}
            >
              <FaDatabase
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-yellow-600`}
              />
              {!sidebarCollapsed && 'Data Analysis'}
            </Link>

            <div
              className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${
                sidebarCollapsed ? 'hidden' : 'block'
              }`}
            >
              COMMUNITY
            </div>
            <Link
              href="#"
              className="flex items-center py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaDiscord
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-indigo-500`}
              />
              {!sidebarCollapsed && 'Discord Community'}
            </Link>

            <div
              className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${
                sidebarCollapsed ? 'hidden' : 'block'
              }`}
            >
              SUPPORT
            </div>
            <Link
              href="#"
              className="flex items-center py-2 px-3 rounded hover:bg-gray-100"
            >
              <FaCommentAlt
                className={`${
                  sidebarCollapsed ? 'mx-auto' : 'mr-3'
                } text-blue-500`}
              />
              {!sidebarCollapsed && 'Feedback & Help'}
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        


         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                   
         <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {productManagementCourse.title}
        </h1>
        <p className="text-gray-600 mb-8">{productManagementCourse.description}</p>
        
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
           
                         {/* Enhanced Start Course Button */}
                         <motion.div 
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5 }}
                           className="flex justify-center my-8"
                         >
                           <Link 
                             href="#course-modules"
                             scroll={false}
                             className="px-16 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                           >
                             Start course
                           </Link>
                         </motion.div>
                       </div>
                     </div>

        <div className="space-y-6">
          {productManagementCourse.modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <div
                className="p-6 border-b border-gray-100 cursor-pointer flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleCourse(module.title)}
              >
                <div>
                  <h2 className="font-bold text-xl mb-1 text-gray-800">
                    {module.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{module.description}</p>
                </div>
                <FaChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expandedCourse === module.title ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCourse === module.title ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0">
                  <ul className="space-y-3">
                    {module.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="border-b border-dashed border-gray-100 pb-2 last:border-0"
                      >
                        <Link
                          href="#"
                          className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                          <FaChevronRight className="w-3 h-3 mr-2" />
                          {topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Related Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-700 mb-2">
                Product Management Frameworks
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Explore different frameworks used in product management
              </p>
              <Link
                href="#"
                className="text-blue-600 text-sm font-medium flex items-center"
              >
                Explore <FaChevronRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-700 mb-2">
                Product Management Communities
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Connect with other product managers and enthusiasts
              </p>
              <Link
                href="#"
                className="text-blue-600 text-sm font-medium flex items-center"
              >
                Explore <FaChevronRight className="ml-1 w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}