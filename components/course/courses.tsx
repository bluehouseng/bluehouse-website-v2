import { 
    FaCode, FaServer, FaChartLine, FaDatabase, FaShieldAlt, 
    FaBullhorn, FaTasks, FaUsers, FaFileAlt, 
    FaUsersCog, FaPencilRuler, FaGraduationCap, FaHome, 
    FaProjectDiagram, FaDiscord, FaCommentAlt, FaJs 
  } from 'react-icons/fa';
  
  export default function TechBootcamp() {
    return (
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-6">
            <h1 className="text-xl font-bold text-blue-600">Tech Career Bootcamp</h1>
            <p className="text-sm text-gray-500 mt-1">Choose your specialization</p>
          </div>
  
          <nav className="mt-6">
            <div className="px-6 py-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">HOME</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-100">
                  <FaHome className="mr-3 text-gray-500" />
                  Dashboard
                </a>
              </div>
            </div>
  
            <div className="px-6 py-3">
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaGraduationCap className="mr-3 text-gray-500" />
                  Certifications
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaProjectDiagram className="mr-3 text-gray-500" />
                  My Projects
                </a>
              </div>
            </div>
  
            <div className="px-6 py-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">TECH SPECIALIZATIONS</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaCode className="mr-3 text-blue-500" />
                  Frontend Development
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaServer className="mr-3 text-green-500" />
                  Backend Development
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaChartLine className="mr-3 text-purple-500" />
                  Data Science
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaDatabase className="mr-3 text-yellow-500" />
                  Data Analysis
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaShieldAlt className="mr-3 text-red-500" />
                  Cybersecurity
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaTasks className="mr-3 text-indigo-500" />
                  Product Management
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaBullhorn className="mr-3 text-pink-500" />
                  Digital Marketing
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaUsers className="mr-3 text-teal-500" />
                  Developer Relations
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaFileAlt className="mr-3 text-orange-500" />
                  Technical Writing
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaPencilRuler className="mr-3 text-amber-500" />
                  UI/UX Design
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaUsersCog className="mr-3 text-emerald-500" />
                  Community Management
                </a>
              </div>
            </div>
  
            <div className="px-6 py-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">COMMUNITY</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaDiscord className="mr-3 text-gray-500" />
                  Discord Community
                </a>
              </div>
            </div>
  
            <div className="px-6 py-3">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SUPPORT</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <FaCommentAlt className="mr-3 text-gray-500" />
                  Feedback & Help
                </a>
              </div>
            </div>
          </nav>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-8">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">WHAT YOU'LL ACHIEVE</h2>
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
  
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <FaJs className="text-yellow-500 mr-2 text-xl" />
                <h3 className="text-lg font-medium text-gray-900">JavaScript Fundamentals</h3>
                <span className="ml-2 text-sm text-gray-500">recommended prerequisite</span>
              </div>
            </div>
          </div>
  
          {/* Popular Specializations */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialization Roadmaps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Development */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaCode className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>HTML5, CSS3, JavaScript (ES6+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>React, Vue, or Angular frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Responsive design principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>State management and APIs</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-500">10 weeks • 15 projects</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Explore →
                  </button>
                </div>
              </div>
  
              {/* Backend Development */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaServer className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Node.js, Python, or Java</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>RESTful API design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Database architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Authentication & security</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-500">12 weeks • 10 projects</span>
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    Explore →
                  </button>
                </div>
              </div>
  
              {/* Data Science */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <FaChartLine className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Data Science</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Python for data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Machine learning fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Data visualization techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Statistical modeling</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-500">14 weeks • 8 projects</span>
                  <button className="text-purple-600 hover:text-purple-800 font-medium">
                    Explore →
                  </button>
                </div>
              </div>
  
              {/* Cybersecurity */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-red-300 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-red-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold">Cybersecurity</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Network security principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Ethical hacking techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Cryptography fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Risk assessment & mitigation</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-500">16 weeks • 12 labs</span>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
  
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View All Specializations
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }