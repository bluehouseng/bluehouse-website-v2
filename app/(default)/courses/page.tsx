import Image from 'next/image';
import { FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, FaPaintBrush, FaBullhorn, FaTasks, FaUsers, FaFileAlt } from 'react-icons/fa';
import Backend from '@/public/images/backend.jpeg';
import Frontend from '@/public/images/frontend.jpeg';
import Datascience from '@/public/images/datascience.jpg';
import Techcoursesbg from '@/public/images/techbg.jpg';
import DataAnalysis from '@/public/images/dataAnalysis.jpeg';
import Cybersecurity from '@/public/images/Cybersecurity.jpg';
import GraphicsDesign from '@/public/images/GraphicsDesign.jpg';
import DigitalMarketing from '@/public/images/DigitalMarketing.jpg';
import ProductManagement from '@/public/images/ProductManagement.jpg';
import DeveloperRelations from '@/public/images/DeveloperRelations.png';
import TechnicalWriting from '@/public/images/TechnicalWriting.jpg';

const courses = [
  { title: 'Frontend Development', icon: <FaCode />, image: Frontend, description: 'Build interactive and visually stunning websites with modern tools and frameworks like React and Vue.' },
  { title: 'Backend Development', icon: <FaServer />, image: Backend, description: 'Learn to design, build, and manage the server-side of web applications using technologies like Node.js and Django.' },
  { title: 'Data Science', icon: <FaChartLine />, image: Datascience, description: 'Analyze complex datasets, uncover insights, and develop predictive models using Python and machine learning.' },
  { title: 'Data Analysis', icon: <FaDatabase />, image: DataAnalysis, description: 'Transform raw data into actionable insights using tools like Excel, Python, and SQL to make data-driven decisions.' },
  { title: 'Graphics Design', icon: <FaPaintBrush />, image: GraphicsDesign, description: 'Unleash your creativity and design stunning visuals with Adobe tools, focusing on digital and print media.' },
  { title: 'Cybersecurity', icon: <FaShieldAlt />, image: Cybersecurity, description: 'Protect systems and data from cyber threats by mastering techniques in network security, ethical hacking, and risk management.' },
  { title: 'Product Management', icon: <FaTasks />, image: ProductManagement, description: 'Lead product development from concept to launch, balancing user needs, business goals, and technical requirements.' },
  { title: 'Digital Marketing', icon: <FaBullhorn />, image: DigitalMarketing, description: 'Master online marketing strategies such as SEO, content marketing, and social media campaigns to drive traffic and engagement.' },
  { title: 'Developer Relations', icon: <FaUsers />, image: DeveloperRelations, description: 'Build and nurture relationships with developer communities, advocating for products and fostering a thriving ecosystem.' },
  { title: 'Technical Writing', icon: <FaFileAlt />, image: TechnicalWriting, description: 'Create clear, concise documentation for complex systems, helping users and developers understand the technologies at play.' },
];

export default function CoursesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] bg-black">
        <Image
          src={Techcoursesbg}
          alt="Courses"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Courses</h1>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-center text-3xl font-semibold mb-8">Innovate the Web</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our expert-led courses help you master the latest technologies in software development, data science, cybersecurity, and digital innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={course.image} alt={course.title} width={400} height={250} className="w-full" />
              <div className="flex flex-col items-center p-6 text-center">
                <div className="text-4xl text-blue-600 mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Section */}
      <div className="bg-gray-200 py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Empowering the Future of Technology</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Join thousands of innovators and tech leaders in shaping the digital landscape of tomorrow.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
          Explore Courses
        </button>
      </div>
    </div>
  );
}
