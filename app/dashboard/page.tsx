"use client"
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import { 
  FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, 
  FaPaintBrush, FaBullhorn, FaTasks, FaUsers, FaFileAlt, 
  FaUsersCog, FaPencilRuler, FaBars, FaHome, FaBook, 
  FaGraduationCap, FaUser, FaCog 
} from 'react-icons/fa';
import { StaticImageData } from 'next/image';


import Backend from '@/public/images/backend.jpeg';
import Frontend from '@/public/images/frontend.jpeg';
import Datascience from '@/public/images/datascience.jpg';
import DataAnalysis from '@/public/images/dataAnalysis.jpeg';
import Cybersecurity from '@/public/images/Cybersecurity.jpg';
import GraphicsDesign from '@/public/images/GraphicsDesign.jpg';
import DigitalMarketing from '@/public/images/DigitalMarketing.jpg';
import ProductManagement from '@/public/images/ProductManagement.jpg';
import DeveloperRelations from '@/public/images/DeveloperRelations.png';
import TechnicalWriting from '@/public/images/TechnicalWriting.jpg';
import UIUX from '@/public/images/UIUX.jpg';
import CommunityManagement from '@/public/images/CommunityManagement.jpg';

// Type definitions
interface Course {
  title: string;
  icon: ReactNode;
  image: StaticImageData;
  description: string;
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
  { title: 'Frontend Development', icon: <FaCode />, image: Frontend, description: 'Build interactive and visually stunning websites with modern tools and frameworks like React and Vue.' },
  { title: 'Backend Development', icon: <FaServer />, image: Backend, description: 'Learn to design, build, and manage the server-side of web applications using technologies like Node.js and Django.' },
  { title: 'Data Science', icon: <FaChartLine />, image: Datascience, description: 'Analyze complex datasets, uncover insights, and develop predictive models using Python and machine learning.' },
  { title: 'Data Analysis', icon: <FaDatabase />, image: DataAnalysis, description: 'Transform raw data into actionable insights using tools like Excel, Python, and SQL to make data-driven decisions.' },
  { title: 'Graphics Design', icon: <FaPaintBrush />, image: GraphicsDesign, description: 'Unleash your creativity and design stunning visuals with Adobe tools, focusing on digital and print media.' },
  { title: 'Cybersecurity', icon: <FaShieldAlt />, image: Cybersecurity, description: 'Protect systems and data from cyber threats by mastering techniques in network security, ethical hacking, and risk management.' },
  { title: 'Product Management', icon: <FaTasks />, image: ProductManagement, description: 'Lead product development from concept to launch, balancing user needs, business goals, and technical requirements.' },
  { title: 'Digital Marketing', icon: <FaBullhorn />, image: DigitalMarketing, description: 'Master online marketing strategies such as SEO, content marketing, and social media campaigns to drive traffic and engagement.' },
  { title: 'Developer Relations', icon: <FaUsers />, image: DeveloperRelations, description: 'Build and nurture relationships with developer communities, advocating for products and fostering a thriving ecosystem.' },
  { title: 'Technical Writing', icon: <FaFileAlt />, image: TechnicalWriting, description: 'Craft compelling and well-structured technical documentation using modern tools and frameworks like Markdown, Docusaurus, and MkDocs.' },
  { title: 'UIUX', icon: <FaPencilRuler/>, image: UIUX, description: 'Create seamless and visually engaging user experiences with modern design tools like Figma, Adobe XD, and Framer, ensuring both aesthetics and functionality.' },
  { title: 'Community Management', icon: <FaUsersCog/>, image: CommunityManagement, description: 'Foster engaged and thriving online communities using modern tools and platforms like Discord, Slack, and Discourse.' },
];


function SidebarItem({ icon, text, active = false, sidebarOpen }: SidebarItemProps) {
  return (
    <div className={`flex items-center p-3 mx-3 my-1 rounded-lg cursor-pointer ${active ? 'border-2' : 'hover:border-2'}`}>
      <div className="text-lg">{icon}</div>
      {sidebarOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
      <div className={`p-3 rounded-full ${color}`}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40">
        <Image 
          src={course.image} 
          alt={course.title} 
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="text-blue-600 mr-2">{course.icon}</div>
          <h4 className="font-semibold text-lg">{course.title}</h4>
        </div>
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">12 modules</span>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Dashboard Component
export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-48' : 'w-20'} bg-white  transition-all duration-300 ease-in-out`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold">LearnHub</h1>
          ) : (
            <div className="w-8 h-8  rounded-lg"></div>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-lg hover:border-2"
          >
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
        {/* Top Navigation */}
        {/* <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Courses Dashboard</h2>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
              <FaUser />
            </div>
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Courses" value={courses.length} icon={<FaBook />} color="bg-blue-100 text-blue-800" />
            <StatCard title="Active Learners" value="1,240" icon={<FaUsers />} color="bg-green-100 text-green-800" />
            <StatCard title="Completion Rate" value="87%" icon={<FaChartLine />} color="bg-purple-100 text-purple-800" />
          </div> */}

          {/* Courses Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Available Courses</h3>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Filter
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Sort
                </button>
              </div>
            </div>

            {/* Courses Grid */}
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