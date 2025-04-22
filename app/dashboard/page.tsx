
"use client";
import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt,
  FaPaintBrush, FaBullhorn, FaTasks, FaUsers, FaFileAlt,
  FaUsersCog, FaPencilRuler, FaBars, FaHome, FaBook,
  FaGraduationCap, FaUser, FaHandSparkles, FaCog
} from "react-icons/fa";

// Images
import Backend from "@/public/images/backend.jpeg";
import Frontend from "@/public/images/frontend.jpeg";
import Datascience from "@/public/images/datascience.jpg";
import DataAnalysis from "@/public/images/dataAnalysis.jpeg";
import Cybersecurity from "@/public/images/Cybersecurity.jpg";
import GraphicsDesign from "@/public/images/GraphicsDesign.jpg";
import DigitalMarketing from "@/public/images/DigitalMarketing.jpg";
import ProductManagement from "@/public/images/ProductManagement.jpg";
import DeveloperRelations from "@/public/images/DeveloperRelations.png";
import TechnicalWriting from "@/public/images/TechnicalWriting.jpg";
import UIUX from "@/public/images/UIUX.jpg";
import CommunityManagement from "@/public/images/CommunityManagement.jpg";

// Type definitions
interface Course {
  title: string;
  icon: ReactNode;
  image: StaticImageData;
  description: string;
  link: string;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  sidebarOpen: boolean;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
}

interface CourseCardProps {
  course: Course;
}

const courses: Course[] = [
  // {
  //   title: "Frontend Development",
  //   icon: <FaCode />,
  //   image: Frontend,
  //   description: "Build interactive and visually stunning websites...",
  //   link: "/courses/frontend"
  // },

  {
    title: "Frontend Development",
    icon: <FaCode />,
    image: Frontend,
    description: "Build interactive and visually stunning websites...",
    link: "/course/courses" 
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    image: Backend,
    description: "Learn to design, build, and manage the server-side...",
    link: "/courses/backend"
  },
  {
    title: "Data Science",
    icon: <FaChartLine />,
    image: Datascience,
    description: "Analyze complex datasets and develop models...",
    link: "/courses/data-science"
  },
  {
    title: "Data Analysis",
    icon: <FaDatabase />,
    image: DataAnalysis,
    description: "Transform raw data into actionable insights...",
    link: "/courses/data-analysis"
  },
  {
    title: "Graphics Design",
    icon: <FaPaintBrush />,
    image: GraphicsDesign,
    description: "Unleash your creativity and design stunning visuals...",
    link: "/courses/graphics-design"
  },
  {
    title: "Cybersecurity",
    icon: <FaShieldAlt />,
    image: Cybersecurity,
    description: "Protect systems and data from cyber threats...",
    link: "/courses/cybersecurity"
  },
  {
    title: "Product Management",
    icon: <FaTasks />,
    image: ProductManagement,
    description: "Lead product development from concept to launch...",
    link: "/courses/product-management"
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    image: DigitalMarketing,
    description: "Master online marketing strategies like SEO...",
    link: "/courses/digital-marketing"
  },
  {
    title: "Developer Relations",
    icon: <FaUsers />,
    image: DeveloperRelations,
    description: "Build and nurture relationships with developer communities...",
    link: "/courses/dev-relations"
  },
  {
    title: "Technical Writing",
    icon: <FaFileAlt />,
    image: TechnicalWriting,
    description: "Craft compelling technical documentation...",
    link: "/courses/technical-writing"
  },
  {
    title: "UIUX",
    icon: <FaPencilRuler />,
    image: UIUX,
    description: "Create seamless and visually engaging user experiences...",
    link: "/courses/ui-ux"
  },
  {
    title: "Community Management",
    icon: <FaUsersCog />,
    image: CommunityManagement,
    description: "Foster engaged online communities using Discord, Slack...",
    link: "/courses/community-management"
  }
];

function SidebarItem({ icon, text, active = false, sidebarOpen }: SidebarItemProps) {
  return (
    <div className={`flex items-center p-3 mx-3 my-1 rounded-lg cursor-pointer ${active ? "border-2" : "hover:border-2"}`}>
      <div className="text-lg">{icon}</div>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (

    <div>
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
      <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
    </div>
    
  );
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={course.link}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <div className="relative h-80">
          <Image src={course.image} alt={course.title} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="text-blue-600 mr-2">{course.icon}</div>
            <h4 className="font-semibold text-lg">{course.title}</h4>
          </div>
          <p className="text-gray-600 text-sm mb-4">{course.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">12 modules</span>
            {/* <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              See More
            </button> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Main Dashboard Component
export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-48" : "w-20"} bg-white transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">LearnHub</h1>
          ) : (
            <div className="w-8 h-8 rounded-lg"></div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 rounded-lg hover:border-2">
            <FaBars />
          </button>
        </div>
        <nav className="mt-8">
          <SidebarItem icon={<FaHome />} text="Dashboard" active={true} sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FaBook />} text="Courses" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FaBook />} text="Discord" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FaGraduationCap />} text="My Learning" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FaUser />} text="Profile" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FaCog />} text="Settings" sidebarOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <div className="mb-8 text-4xl font-bold p-6 bg-white rounded-lg shadow-sm flex items-center space-x-2 text-gray-800">
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

          {/* Courses Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Available Courses</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Filter</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Sort</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}



















// "use client"
// import { useState } from 'react';
// import { 
//   FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, 
//   FaBullhorn, FaTasks, FaUsers, FaFileAlt, 
//   FaUsersCog, FaPencilRuler, FaGraduationCap, FaHome, 
//   FaProjectDiagram, FaDiscord, FaCommentAlt, FaJs 
// } from 'react-icons/fa';
// import Image from 'next/image';

// // Import all the images
// import Backend from "@/public/images/backend.jpeg";
// import Frontend from "@/public/images/frontend.jpeg";
// import Datascience from "@/public/images/datascience.jpg";
// import DataAnalysis from "@/public/images/dataAnalysis.jpeg";
// import Cybersecurity from "@/public/images/Cybersecurity.jpg";
// import GraphicsDesign from "@/public/images/GraphicsDesign.jpg";
// import DigitalMarketing from "@/public/images/DigitalMarketing.jpg";
// import ProductManagement from "@/public/images/ProductManagement.jpg";
// import DeveloperRelations from "@/public/images/DeveloperRelations.png";
// import TechnicalWriting from "@/public/images/TechnicalWriting.jpg";
// import UIUX from "@/public/images/UIUX.jpg";
// import CommunityManagement from "@/public/images/CommunityManagement.jpg";

// type Specialization = {
//   id: string;
//   title: string;
//   icon: React.ComponentType<{ className?: string }>;
//   color: string;
//   content: string[];
//   duration: string;
//   iconColor?: string;
//   image: any; // Add image property
// };

// export default function TechBootcamp() {
//   const [showAllSpecializations, setShowAllSpecializations] = useState(false);

//   const specializations: Specialization[] = [
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       icon: FaCode,
//       color: 'blue',
//       iconColor: 'text-blue-600',
//       content: [
//         'HTML5, CSS3, JavaScript (ES6+)',
//         'React, Vue, or Angular frameworks',
//         'Responsive design principles',
//         'State management and APIs'
//       ],
//       duration: '10 weeks • 15 projects',
//       image: Frontend
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       icon: FaServer,
//       color: 'green',
//       iconColor: 'text-green-600',
//       content: [
//         'Node.js, Python, or Java',
//         'RESTful API design',
//         'Database architecture',
//         'Authentication & security'
//       ],
//       duration: '12 weeks • 10 projects',
//       image: Backend
//     },
//     {
//       id: 'dataScience',
//       title: 'Data Science',
//       icon: FaChartLine,
//       color: 'purple',
//       iconColor: 'text-purple-600',
//       content: [
//         'Python for data analysis',
//         'Machine learning fundamentals',
//         'Data visualization techniques',
//         'Statistical modeling'
//       ],
//       duration: '14 weeks • 8 projects',
//       image: Datascience
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity',
//       icon: FaShieldAlt,
//       color: 'red',
//       iconColor: 'text-red-600',
//       content: [
//         'Network security principles',
//         'Ethical hacking techniques',
//         'Cryptography fundamentals',
//         'Risk assessment & mitigation'
//       ],
//       duration: '16 weeks • 12 labs',
//       image: Cybersecurity
//     },
//     {
//       id: 'productManagement',
//       title: 'Product Management',
//       icon: FaTasks,
//       color: 'indigo',
//       iconColor: 'text-indigo-600',
//       content: [
//         'Agile methodologies',
//         'Product roadmapping',
//         'User story creation',
//         'Stakeholder management'
//       ],
//       duration: '8 weeks • 5 case studies',
//       image: ProductManagement
//     },
//     {
//       id: 'digitalMarketing',
//       title: 'Digital Marketing',
//       icon: FaBullhorn,
//       color: 'pink',
//       iconColor: 'text-pink-600',
//       content: [
//         'SEO best practices',
//         'Social media strategy',
//         'Content marketing',
//         'Analytics & reporting'
//       ],
//       duration: '6 weeks • 4 campaigns',
//       image: DigitalMarketing
//     },
//     {
//       id: 'devRelations',
//       title: 'Developer Relations',
//       icon: FaUsers,
//       color: 'teal',
//       iconColor: 'text-teal-600',
//       content: [
//         'Technical advocacy',
//         'Community building',
//         'Developer education',
//         'Open source contribution'
//       ],
//       duration: '8 weeks • 3 programs',
//       image: DeveloperRelations
//     },
//     {
//       id: 'technicalWriting',
//       title: 'Technical Writing',
//       icon: FaFileAlt,
//       color: 'orange',
//       iconColor: 'text-orange-600',
//       content: [
//         'Documentation best practices',
//         'API documentation',
//         'Technical blogging',
//         'Style guides'
//       ],
//       duration: '6 weeks • 5 writing samples',
//       image: TechnicalWriting
//     },
//     {
//       id: 'uiUxDesign',
//       title: 'UI/UX Design',
//       icon: FaPencilRuler,
//       color: 'amber',
//       iconColor: 'text-amber-600',
//       content: [
//         'User research methods',
//         'Wireframing & prototyping',
//         'Interaction design',
//         'Usability testing'
//       ],
//       duration: '10 weeks • 6 design projects',
//       image: UIUX
//     },
//     {
//       id: 'communityManagement',
//       title: 'Community Management',
//       icon: FaUsersCog,
//       color: 'emerald',
//       iconColor: 'text-emerald-600',
//       content: [
//         'Community engagement',
//         'Moderation strategies',
//         'Event planning',
//         'Growth hacking'
//       ],
//       duration: '6 weeks • 3 community initiatives',
//       image: CommunityManagement
//     },
//     {
//       id: 'dataAnalysis',
//       title: 'Data Analysis',
//       icon: FaDatabase,
//       color: 'yellow',
//       iconColor: 'text-yellow-600',
//       content: [
//         'SQL fundamentals',
//         'Data cleaning techniques',
//         'Exploratory data analysis',
//         'Dashboard creation'
//       ],
//       duration: '8 weeks • 5 analysis projects',
//       image: DataAnalysis
//     }
//   ];

//   const displayedSpecializations = showAllSpecializations 
//     ? specializations 
//     : specializations.slice(0, 4);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar - unchanged from your original code */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <h1 className="text-xl font-bold text-blue-600">Tech Career Bootcamp</h1>
//           <p className="text-sm text-gray-500 mt-1">Choose your specialization</p>
//         </div>

//         <nav className="mt-6">
//           <div className="px-6 py-3">
//             <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HOME</h2>
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
//                 <FaHome className="mr-3 text-gray-500" />
//                 Dashboard
//               </a>
//             </div>
//           </div>

//           <div className="px-6 py-3">
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaGraduationCap className="mr-3 text-gray-500" />
//                 Certifications
//               </a>
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaProjectDiagram className="mr-3 text-gray-500" />
//                 My Projects
//               </a>
//             </div>
//           </div>

//           <div className="px-6 py-3">
//             <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">TECH SPECIALIZATIONS</h2>
//             <div className="mt-2 space-y-1">
//               {specializations.map(spec => (
//                 <a 
//                   key={spec.id} 
//                   href="#" 
//                   className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
//                 >
//                   <spec.icon className={`mr-3 ${spec.iconColor}`} />
//                   {spec.title}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="px-6 py-3">
//             <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">COMMUNITY</h2>
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaDiscord className="mr-3 text-gray-500" />
//                 Discord Community
//               </a>
//             </div>
//           </div>

//           <div className="px-6 py-3">
//             <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SUPPORT</h2>
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaCommentAlt className="mr-3 text-gray-500" />
//                 Feedback & Help
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech Career Accelerator</h1>
          
//           <div className="flex items-center mb-6">
//             <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
//               8-12 weeks per specialization
//             </span>
//           </div>

//           <p className="text-lg text-gray-700 mb-8">
//             Launch your tech career with our intensive bootcamps. Build job-ready skills through hands-on projects and personalized mentorship from industry professionals.
//           </p>

//           <p className="text-lg text-gray-700 mb-8">
//             Each specialization combines fundamental concepts with real-world applications, culminating in a professional portfolio project that demonstrates your expertise to employers.
//           </p>

//           <div className="mb-10">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">WHAT YOU&apos;LL ACHIEVE</h2>
//             <div className="flex flex-wrap gap-4">
//               <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
//                 Job-Ready Skills
//               </span>
//               <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
//                 Professional Portfolio
//               </span>
//               <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
//                 Industry Certification
//               </span>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
//                 1:1 Career Coaching
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Specialization Roadmaps - Updated with images */}
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialization Roadmaps</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {displayedSpecializations.map(spec => (
//               <div 
//                 key={spec.id}
//                 className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <div className="h-72 relative">
//                   <Image 
//                     src={spec.image} 
//                     alt={spec.title}
//                     fill
//                     className="object-cover h-48"
                    
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className={`bg-${spec.color}-100 p-2 rounded-full mr-3`}>
//                       <spec.icon className={`text-${spec.color}-600 text-lg`} />
//                     </div>
//                     <h3 className="text-xl font-semibold">{spec.title}</h3>
//                   </div>
//                   <ul className="space-y-2 text-gray-600 mb-4">
//                     {spec.content.slice(0, 3).map((item, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className={`text-${spec.color}-500 mr-2`}>•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                     {spec.content.length > 3 && (
//                       <li className="text-gray-500">+ {spec.content.length - 3} more topics</li>
//                     )}
//                   </ul>
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
//                     <span className="text-sm text-gray-500">{spec.duration}</span>
//                     <button className={`text-${spec.color}-600 hover:text-${spec.color}-800 font-medium`}>
//                       Explore →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 text-center">
//             <button 
//               onClick={() => setShowAllSpecializations(!showAllSpecializations)}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               {showAllSpecializations ? 'Show Less' : 'View All Specializations'} 
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client"
// import { useState } from 'react';
// import { 
//   FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, 
//   FaBullhorn, FaTasks, FaUsers, FaFileAlt, 
//   FaUsersCog, FaPencilRuler, FaGraduationCap, FaHome, 
//   FaProjectDiagram, FaDiscord, FaCommentAlt, FaJs,
//   FaChevronLeft, FaChevronRight
// } from 'react-icons/fa';
// import Image from 'next/image';

// // Import all the images
// import Backend from "@/public/images/backend.jpeg";
// import Frontend from "@/public/images/frontend.jpeg";
// import Datascience from "@/public/images/datascience.jpg";
// import DataAnalysis from "@/public/images/dataAnalysis.jpeg";
// import Cybersecurity from "@/public/images/Cybersecurity.jpg";
// import GraphicsDesign from "@/public/images/GraphicsDesign.jpg";
// import DigitalMarketing from "@/public/images/DigitalMarketing.jpg";
// import ProductManagement from "@/public/images/ProductManagement.jpg";
// import DeveloperRelations from "@/public/images/DeveloperRelations.png";
// import TechnicalWriting from "@/public/images/TechnicalWriting.jpg";
// import UIUX from "@/public/images/UIUX.jpg";
// import CommunityManagement from "@/public/images/CommunityManagement.jpg";

// type Specialization = {
//   id: string;
//   title: string;
//   icon: React.ComponentType<{ className?: string }>;
//   color: string;
//   content: string[];
//   duration: string;
//   iconColor?: string;
//   image: any;
// };

// export default function TechBootcamp() {
//   const [showAllSpecializations, setShowAllSpecializations] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const specializations: Specialization[] = [
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       icon: FaCode,
//       color: 'blue',
//       iconColor: 'text-blue-600',
//       content: [
//         'HTML5, CSS3, JavaScript (ES6+)',
//         'React, Vue, or Angular frameworks',
//         'Responsive design principles',
//         'State management and APIs'
//       ],
//       duration: '10 weeks • 15 projects',
//       image: Frontend
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       icon: FaServer,
//       color: 'green',
//       iconColor: 'text-green-600',
//       content: [
//         'Node.js, Python, or Java',
//         'RESTful API design',
//         'Database architecture',
//         'Authentication & security'
//       ],
//       duration: '12 weeks • 10 projects',
//       image: Backend
//     },
//     {
//       id: 'dataScience',
//       title: 'Data Science',
//       icon: FaChartLine,
//       color: 'purple',
//       iconColor: 'text-purple-600',
//       content: [
//         'Python for data analysis',
//         'Machine learning fundamentals',
//         'Data visualization techniques',
//         'Statistical modeling'
//       ],
//       duration: '14 weeks • 8 projects',
//       image: Datascience
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity',
//       icon: FaShieldAlt,
//       color: 'red',
//       iconColor: 'text-red-600',
//       content: [
//         'Network security principles',
//         'Ethical hacking techniques',
//         'Cryptography fundamentals',
//         'Risk assessment & mitigation'
//       ],
//       duration: '16 weeks • 12 labs',
//       image: Cybersecurity
//     },
//     {
//       id: 'productManagement',
//       title: 'Product Management',
//       icon: FaTasks,
//       color: 'indigo',
//       iconColor: 'text-indigo-600',
//       content: [
//         'Agile methodologies',
//         'Product roadmapping',
//         'User story creation',
//         'Stakeholder management'
//       ],
//       duration: '8 weeks • 5 case studies',
//       image: ProductManagement
//     },
//     {
//       id: 'digitalMarketing',
//       title: 'Digital Marketing',
//       icon: FaBullhorn,
//       color: 'pink',
//       iconColor: 'text-pink-600',
//       content: [
//         'SEO best practices',
//         'Social media strategy',
//         'Content marketing',
//         'Analytics & reporting'
//       ],
//       duration: '6 weeks • 4 campaigns',
//       image: DigitalMarketing
//     },
//     {
//       id: 'devRelations',
//       title: 'Developer Relations',
//       icon: FaUsers,
//       color: 'teal',
//       iconColor: 'text-teal-600',
//       content: [
//         'Technical advocacy',
//         'Community building',
//         'Developer education',
//         'Open source contribution'
//       ],
//       duration: '8 weeks • 3 programs',
//       image: DeveloperRelations
//     },
//     {
//       id: 'technicalWriting',
//       title: 'Technical Writing',
//       icon: FaFileAlt,
//       color: 'orange',
//       iconColor: 'text-orange-600',
//       content: [
//         'Documentation best practices',
//         'API documentation',
//         'Technical blogging',
//         'Style guides'
//       ],
//       duration: '6 weeks • 5 writing samples',
//       image: TechnicalWriting
//     },
//     {
//       id: 'uiUxDesign',
//       title: 'UI/UX Design',
//       icon: FaPencilRuler,
//       color: 'amber',
//       iconColor: 'text-amber-600',
//       content: [
//         'User research methods',
//         'Wireframing & prototyping',
//         'Interaction design',
//         'Usability testing'
//       ],
//       duration: '10 weeks • 6 design projects',
//       image: UIUX
//     },
//     {
//       id: 'communityManagement',
//       title: 'Community Management',
//       icon: FaUsersCog,
//       color: 'emerald',
//       iconColor: 'text-emerald-600',
//       content: [
//         'Community engagement',
//         'Moderation strategies',
//         'Event planning',
//         'Growth hacking'
//       ],
//       duration: '6 weeks • 3 community initiatives',
//       image: CommunityManagement
//     },
//     {
//       id: 'dataAnalysis',
//       title: 'Data Analysis',
//       icon: FaDatabase,
//       color: 'yellow',
//       iconColor: 'text-yellow-600',
//       content: [
//         'SQL fundamentals',
//         'Data cleaning techniques',
//         'Exploratory data analysis',
//         'Dashboard creation'
//       ],
//       duration: '8 weeks • 5 analysis projects',
//       image: DataAnalysis
//     }
//   ];

//   const displayedSpecializations = showAllSpecializations 
//     ? specializations 
//     : specializations.slice(0, 4);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Collapsible Sidebar */}
//       <div className={`bg-white shadow-md transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
//         <div className="p-4 flex justify-between items-center">
//           {!sidebarCollapsed && (
//             <h1 className="text-xl font-bold text-blue-600">Tech Career Bootcamp</h1>
//           )}
//           <button 
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="p-2 rounded-md hover:bg-gray-100"
//           >
//             {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </button>
//         </div>

//         <nav className="mt-6">
//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HOME</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
//                 <FaHome className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Dashboard"}
//               </a>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaGraduationCap className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Certifications"}
//               </a>
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaProjectDiagram className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "My Projects"}
//               </a>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">TECH SPECIALIZATIONS</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               {specializations.map(spec => (
//                 <a 
//                   key={spec.id} 
//                   href="#" 
//                   className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
//                 >
//                   <spec.icon className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} ${spec.iconColor}`} />
//                   {!sidebarCollapsed && spec.title}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">COMMUNITY</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaDiscord className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Discord Community"}
//               </a>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SUPPORT</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaCommentAlt className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Feedback & Help"}
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech Career Accelerator</h1>
          
//           <div className="flex items-center mb-6">
//             <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
//               8-12 weeks per specialization
//             </span>
//           </div>

//           <p className="text-lg text-gray-700 mb-8">
//             Launch your tech career with our intensive bootcamps. Build job-ready skills through hands-on projects and personalized mentorship from industry professionals.
//           </p>

//           <p className="text-lg text-gray-700 mb-8">
//             Each specialization combines fundamental concepts with real-world applications, culminating in a professional portfolio project that demonstrates your expertise to employers.
//           </p>

//           <div className="mb-10">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">WHAT YOU&apos;LL ACHIEVE</h2>
//             <div className="flex flex-wrap gap-4">
//               <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
//                 Job-Ready Skills
//               </span>
//               <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
//                 Professional Portfolio
//               </span>
//               <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
//                 Industry Certification
//               </span>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
//                 1:1 Career Coaching
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Specialization Roadmaps - Content removed from cards */}
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialization Roadmaps</h2>
          
//           <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
//             {displayedSpecializations.map(spec => (
//               <div 
//                 key={spec.id}
//                 className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <div className="h-72 relative">
//                   <Image 
//                     src={spec.image} 
//                     alt={spec.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className={`bg-${spec.color}-100 rounded-full mr-3`}>
//                       <spec.icon className={`text-${spec.color}-600 text-lg`} />
//                     </div>
//                     <h3 className="text-xl font-semibold">{spec.title}</h3>
//                   </div>
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
//                     <span className="text-sm text-gray-500">{spec.duration}</span>
//                     <button className={`text-${spec.color}-600 hover:text-${spec.color}-800 font-medium`}>
//                       Explore →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 text-center">
//             <button 
//               onClick={() => setShowAllSpecializations(!showAllSpecializations)}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               {showAllSpecializations ? 'Show Less' : 'View All Specializations'} 
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// "use client"
// import { useState } from 'react';
// import { 
//   FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, 
//   FaBullhorn, FaTasks, FaUsers, FaFileAlt, 
//   FaUsersCog, FaPencilRuler, FaGraduationCap, FaHome, 
//   FaProjectDiagram, FaDiscord, FaCommentAlt, FaJs,
//   FaChevronLeft, FaChevronRight, FaChevronRight as FaExploreArrow
// } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';


// import Backend from "@/public/images/backend.jpeg";
// import Frontend from "@/public/images/frontend.jpeg";
// import Datascience from "@/public/images/datascience.jpg";
// import DataAnalysis from "@/public/images/dataAnalysis.jpeg";
// import Cybersecurity from "@/public/images/Cybersecurity.jpg";
// import ProductManagement from "@/public/images/ProductManagement.jpg";
// import DigitalMarketing from "@/public/images/DigitalMarketing.jpg";
// import DeveloperRelations from "@/public/images/DeveloperRelations.png";
// import TechnicalWriting from "@/public/images/TechnicalWriting.jpg";
// import UIUX from "@/public/images/UIUX.jpg";
// import CommunityManagement from "@/public/images/CommunityManagement.jpg";

// type Specialization = {
//   id: string;
//   title: string;
//   icon: React.ComponentType<{ className?: string }>;
//   color: string;
//   duration: string;
//   iconColor?: string;
//   image: any;
// };

// export default function TechBootcamp() {
//   const [showAllSpecializations, setShowAllSpecializations] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const specializations: Specialization[] = [
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       icon: FaCode,
//       color: 'blue',
//       iconColor: 'text-blue-600',
//       duration: '10 weeks • 15 projects',
//       image: Frontend
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       icon: FaServer,
//       color: 'green',
//       iconColor: 'text-green-600',
//       duration: '12 weeks • 10 projects',
//       image: Backend
//     },
//     {
//       id: 'data-science',
//       title: 'Data Science',
//       icon: FaChartLine,
//       color: 'purple',
//       iconColor: 'text-purple-600',
//       duration: '14 weeks • 8 projects',
//       image: Datascience
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity',
//       icon: FaShieldAlt,
//       color: 'red',
//       iconColor: 'text-red-600',
//       duration: '16 weeks • 12 labs',
//       image: Cybersecurity
//     },
//     {
//       id: 'product-management',
//       title: 'Product Management',
//       icon: FaTasks,
//       color: 'indigo',
//       iconColor: 'text-indigo-600',
//       duration: '8 weeks • 5 case studies',
//       image: ProductManagement
//     },
//     {
//       id: 'digital-marketing',
//       title: 'Digital Marketing',
//       icon: FaBullhorn,
//       color: 'pink',
//       iconColor: 'text-pink-600',
//       duration: '6 weeks • 4 campaigns',
//       image: DigitalMarketing
//     },
//     {
//       id: 'developer-relations',
//       title: 'Developer Relations',
//       icon: FaUsers,
//       color: 'teal',
//       iconColor: 'text-teal-600',
//       duration: '8 weeks • 3 programs',
//       image: DeveloperRelations
//     },
//     {
//       id: 'technical-writing',
//       title: 'Technical Writing',
//       icon: FaFileAlt,
//       color: 'orange',
//       iconColor: 'text-orange-600',
//       duration: '6 weeks • 5 writing samples',
//       image: TechnicalWriting
//     },
//     {
//       id: 'ui-ux-design',
//       title: 'UI/UX Design',
//       icon: FaPencilRuler,
//       color: 'amber',
//       iconColor: 'text-amber-600',
//       duration: '10 weeks • 6 design projects',
//       image: UIUX
//     },
//     {
//       id: 'community-management',
//       title: 'Community Management',
//       icon: FaUsersCog,
//       color: 'emerald',
//       iconColor: 'text-emerald-600',
//       duration: '6 weeks • 3 community initiatives',
//       image: CommunityManagement
//     },
//     {
//       id: 'data-analysis',
//       title: 'Data Analysis',
//       icon: FaDatabase,
//       color: 'yellow',
//       iconColor: 'text-yellow-600',
//       duration: '8 weeks • 5 analysis projects',
//       image: DataAnalysis
//     }
//   ];

//   const displayedSpecializations = showAllSpecializations 
//     ? specializations 
//     : specializations.slice(0, 4);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Collapsible Sidebar */}
//       <div className={`bg-white shadow-md transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
//         <div className="p-4 flex justify-between items-center">
//           {!sidebarCollapsed && (
//             <h1 className="text-xl font-bold text-blue-600">Tech Career Bootcamp</h1>
//           )}
//           <button 
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="p-2 rounded-md hover:bg-gray-100"
//           >
//             {sidebarCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//           </button>
//         </div>

//         <nav className="mt-6">
//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HOME</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
//                 <FaHome className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Dashboard"}
//               </Link>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             <div className="mt-2 space-y-1">
//               <Link href="/certifications" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaGraduationCap className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Certifications"}
//               </Link>
//               <Link href="/projects" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaProjectDiagram className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "My Projects"}
//               </Link>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">TECH SPECIALIZATIONS</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               {specializations.map(spec => (
//                 <Link 
//                   key={spec.id} 
//                   href={`/courses/${spec.id}`}
//                   className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
//                 >
//                   <spec.icon className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} ${spec.iconColor}`} />
//                   {!sidebarCollapsed && spec.title}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">COMMUNITY</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <Link href="/community" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaDiscord className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Discord Community"}
//               </Link>
//             </div>
//           </div>

//           <div className="px-4 py-3">
//             {!sidebarCollapsed && (
//               <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SUPPORT</h2>
//             )}
//             <div className="mt-2 space-y-1">
//               <Link href="/support" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
//                 <FaCommentAlt className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-gray-500`} />
//                 {!sidebarCollapsed && "Feedback & Help"}
//               </Link>
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <div className="bg-white rounded-lg shadow-md p-8 mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Tech Career Accelerator</h1>
          
//           <div className="flex items-center mb-6">
//             <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-4">
//               8-12 weeks per specialization
//             </span>
//           </div>

//           <p className="text-lg text-gray-700 mb-8">
//             Launch your tech career with our intensive bootcamps. Build job-ready skills through hands-on projects and personalized mentorship from industry professionals.
//           </p>

//           <p className="text-lg text-gray-700 mb-8">
//             Each specialization combines fundamental concepts with real-world applications, culminating in a professional portfolio project that demonstrates your expertise to employers.
//           </p>

//           <div className="mb-10">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">WHAT YOU&apos;LL ACHIEVE</h2>
//             <div className="flex flex-wrap gap-4">
//               <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
//                 Job-Ready Skills
//               </span>
//               <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
//                 Professional Portfolio
//               </span>
//               <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium">
//                 Industry Certification
//               </span>
//               <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
//                 1:1 Career Coaching
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Specialization Roadmaps with Links */}
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialization Roadmaps</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {displayedSpecializations.map(spec => (
//               <div 
//                 key={spec.id}
//                 className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow "
//               >
//                 {/* Image Link */}
//                 <Link href={`/courses/${spec.id}`} className="block">
                
//                   <div className="h-80 relative">
//   <Image
//     src={spec.image}
//     alt={spec.title}
//     width={600}  
//     height={400} 
//     className="object-cover"
//     priority
//   />
// </div>

//                 </Link>

//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className={`bg-${spec.color}-100 p-2 rounded-full mr-3`}>
//                       <spec.icon className={`text-${spec.color}-600 text-lg`} />
//                     </div>
//                     <h3 className="text-xl font-semibold">{spec.title}</h3>
//                   </div>
                  
//                   <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
//                     <span className="text-sm text-gray-500">{spec.duration}</span>
                    
//                     {/* Explore Button Link */}
//                     <Link 
//                       href={`/courses/${spec.id}`}
//                       className={`text-${spec.color}-600 hover:text-${spec.color}-800 font-medium flex items-center group`}
//                     >
//                       Explore 
//                       <FaExploreArrow className="ml-1 transition-transform group-hover:translate-x-1" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 text-center">
//             <button 
//               onClick={() => setShowAllSpecializations(!showAllSpecializations)}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               {showAllSpecializations ? 'Show Less' : 'View All Specializations'} 
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




