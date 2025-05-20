
'use client'

import { useState } from 'react'
import { 
  FaHome, FaGraduationCap, FaProjectDiagram, 
  FaDiscord, FaCommentAlt, FaCode, FaServer, 
  FaChartLine, FaShieldAlt, FaTasks, FaBullhorn,
  FaUsers, FaFileAlt, FaPencilRuler, FaUsersCog,
  FaDatabase, FaChevronDown, FaChevronRight,
  FaBars, FaTimes,
  FaPaintBrush
} from 'react-icons/fa'

export default function TechBootcamp() {
  const [activeMenu, setActiveMenu] = useState('frontend-development')
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleCourse = (course: string) => {
    setExpandedCourse(expandedCourse === course ? null : course)
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const courses = {
    'frontend-development': {
      title: 'Frontend Development',
      description: 'Build interactive user interfaces',
      modules: [
        {
          path: '/course/frontend-development/subtopic/html', 
          title: 'HTML & CSS Fundamentals',
          description: 'Core web development technologies',
          topics: [
            { name: 'HTML5 Semantics', path: '/course/frontend-development/subtopic/html' },
            { name: 'CSS Flexbox/Grid', path: '/course/frontend-development/subtopic/css' },
            { name: 'Responsive Design', path: '/course/frontend-development/subtopic/responsive' }
          ]
        },
        {
          path: '/course/frontend-development/subtopic/javascript', 
          title: 'JavaScript Mastery',
          description: 'The language of the web',
          topics: [
            { name:  'ES6+ Features', path: '/course/frontend-development/subtopic/javascript' },
            { name:  'DOM Manipulation', path: '/course/frontend-development/subtopic/dom' },
            { name:  'Async Programming', path: '/course/frontend-development/subtopic/async' },
          ]
        },
        {
          title: 'React Framework',
          description: 'Modern frontend development',
          topics: ['Components & Props', 'State Management', 'Hooks']
        }
      ]
    },
    'backend-development': {
      title: 'Backend Development',
      description: 'Server-side application logic',
      modules: [
        {
          title: 'Node.js Fundamentals',
          description: 'JavaScript runtime environment',
          topics: ['Event Loop', 'Modules System', 'NPM Ecosystem']
        },
        {
          title: 'Database Integration',
          description: 'Working with data stores',
          topics: ['SQL Basics', 'MongoDB', 'ORM/ODM']
        },
        {
          title: 'API Development',
          description: 'Building robust interfaces',
          topics: ['REST Principles', 'GraphQL', 'Authentication']
        }
      ]
    },
    'data-science': {
      title: 'Data Science',
      description: 'Extract insights from data',
      modules: [
        {
          title: 'Python for Data Science',
          description: 'Core programming skills',
          topics: ['NumPy', 'Pandas', 'Matplotlib']
        },
        {
          title: 'Machine Learning',
          description: 'Predictive modeling',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation']
        },
        {
          title: 'Data Visualization',
          description: 'Communicating insights',
          topics: ['Seaborn', 'Plotly', 'Dashboarding']
        }
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      description: 'Protect systems and data',
      modules: [
        {
          title: 'Security Fundamentals',
          description: 'Core security concepts',
          topics: ['CIA Triad', 'Threat Modeling', 'Risk Assessment']
        },
        {
          title: 'Network Security',
          description: 'Protecting infrastructure',
          topics: ['Firewalls', 'VPNs', 'Intrusion Detection']
        },
        {
          title: 'Ethical Hacking',
          description: 'Offensive security',
          topics: ['Penetration Testing', 'Vulnerability Scanning', 'OWASP Top 10']
        }
      ]
    },
    'product-management': {
      title: 'Product Management',
      description: 'Lead product development',
      modules: [
        {
          title: 'Product Strategy',
          description: 'Vision and roadmap',
          topics: ['Market Research', 'Competitive Analysis', 'Product Metrics']
        },
        {
          title: 'Agile Methodologies',
          description: 'Development frameworks',
          topics: ['Scrum', 'Kanban', 'User Stories']
        },
        {
          title: 'Stakeholder Management',
          description: 'Working with teams',
          topics: ['Prioritization', 'Communication', 'Roadmapping']
        }
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Online promotion strategies',
      modules: [
        {
          title: 'SEO & Content Marketing',
          description: 'Organic growth',
          topics: ['Keyword Research', 'On-Page SEO', 'Content Strategy']
        },
        {
          title: 'Social Media Marketing',
          description: 'Engagement strategies',
          topics: ['Platform Algorithms', 'Community Building', 'Influencer Marketing']
        },
        {
          title: 'Paid Advertising',
          description: 'Performance marketing',
          topics: ['Google Ads', 'Facebook Ads', 'Conversion Tracking']
        }
      ]
    },
    'developer-relations': {
      title: 'Developer Relations',
      description: 'Bridge between company and developers',
      modules: [
        {
          title: 'Community Building',
          description: 'Growing developer communities',
          topics: ['Forum Moderation', 'Event Planning', 'Advocacy Programs']
        },
        {
          title: 'Technical Content',
          description: 'Educational materials',
          topics: ['Documentation', 'Tutorials', 'Sample Code']
        },
        {
          title: 'Developer Experience',
          description: 'Improving SDKs/APIs',
          topics: ['Onboarding Flows', 'Error Messages', 'Tooling']
        }
      ]
    },
    'technical-writing': {
      title: 'Technical Writing',
      description: 'Communicate complex information',
      modules: [
        {
          title: 'Documentation',
          description: 'Creating reference materials',
          topics: ['API Docs', 'User Guides', 'Style Guides']
        },
        {
          title: 'Tutorials',
          description: 'Step-by-step learning',
          topics: ['Audience Analysis', 'Learning Paths', 'Code Samples']
        },
        {
          title: 'Information Architecture',
          description: 'Organizing content',
          topics: ['Taxonomy', 'Search Optimization', 'Content Reuse']
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'Create user-centered interfaces',
      modules: [
        {
          title: 'User Research',
          description: 'Understanding needs',
          topics: ['Personas', 'User Journeys', 'Usability Testing']
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'Design process',
          topics: ['Figma/Sketch', 'Low/High Fidelity', 'Design Systems']
        },
        {
          title: 'Interaction Design',
          description: 'Creating flows',
          topics: ['Microinteractions', 'Accessibility', 'Animation']
        }
      ]
    },
    'community-management': {
      title: 'Community Management',
      description: 'Build and nurture communities',
      modules: [
        {
          title: 'Community Strategy',
          description: 'Planning and goals',
          topics: ['Mission Statements', 'Growth Tactics', 'Moderation']
        },
        {
          title: 'Engagement Techniques',
          description: 'Fostering participation',
          topics: ['Gamification', 'Content Calendar', 'AMA Sessions']
        },
        {
          title: 'Metrics & Analytics',
          description: 'Measuring success',
          topics: ['Engagement Rates', 'Sentiment Analysis', 'ROI']
        }
      ]
    },
    'data-analysis': {
      title: 'Data Analysis',
      description: 'Make data-driven decisions',
      modules: [
        {
          title: 'Data Wrangling',
          description: 'Cleaning and preparation',
          topics: ['Data Cleaning', 'Transformation', 'Feature Engineering']
        },
        {
          title: 'Statistical Analysis',
          description: 'Understanding patterns',
          topics: ['Descriptive Stats', 'Hypothesis Testing', 'Correlation']
        },
        {
          title: 'Business Intelligence',
          description: 'Reporting insights',
          topics: ['Dashboarding', 'KPIs', 'Data Storytelling']
        }
      ]
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed Sidebar */}
      <aside className={`bg-white flex-shrink-0 transition-all duration-300 fixed h-full ${sidebarCollapsed ? 'w-20' : 'w-52'}`}>
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

          {/* Scrollable Navigation Area */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
            <div className={`text-gray-500 text-xs uppercase mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>HOME</div>
            <a href="dashboard" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaHome className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-yellow-500`} />
              {!sidebarCollapsed && "Dashboard"}
            </a>
            <a href="#" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaGraduationCap className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-500`} />
              {!sidebarCollapsed && "Certifications"}
            </a>
            <a href="#" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaProjectDiagram className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-500`} />
              {!sidebarCollapsed && "My Projects"}
            </a>
            
            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>TECH SPECIALIZATIONS</div>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'frontend-development' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('frontend-development') }}
            >
              <FaCode className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-600`} />
              {!sidebarCollapsed && "Frontend Development"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'backend-development' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('backend-development') }}
            >
              <FaServer className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-600`} />
              {!sidebarCollapsed && "Backend Development"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'data-science' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('data-science') }}
            >
              <FaChartLine className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-purple-600`} />
              {!sidebarCollapsed && "Data Science"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'cybersecurity' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('cybersecurity') }}
            >
              <FaShieldAlt className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-red-600`} />
              {!sidebarCollapsed && "Cybersecurity"}
            </a>
             <a 
                          href="#"
                          className={`flex items-center py-2 px-3 rounded ${activeMenu === 'frontend-development' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                          onClick={(e) => { e.preventDefault(); setActiveMenu('frontend-development') }}
                        >
                          <FaPaintBrush  className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-green-600`} />
                          {!sidebarCollapsed && "Graphics Design"}
                        </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'product-management' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('product-management') }}
            >
              <FaTasks className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-indigo-600`} />
              {!sidebarCollapsed && "Product Management"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'digital-marketing' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('digital-marketing') }}
            >
              <FaBullhorn className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-pink-600`} />
              {!sidebarCollapsed && "Digital Marketing"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'developer-relations' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('developer-relations') }}
            >
              <FaUsers className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-teal-600`} />
              {!sidebarCollapsed && "Developer Relations"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'technical-writing' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('technical-writing') }}
            >
              <FaFileAlt className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-orange-600`} />
              {!sidebarCollapsed && "Technical Writing"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'ui-ux-design' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('ui-ux-design') }}
            >
              <FaPencilRuler className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-amber-600`} />
              {!sidebarCollapsed && "UI/UX Design"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'community-management' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('community-management') }}
            >
              <FaUsersCog className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-emerald-600`} />
              {!sidebarCollapsed && "Community Management"}
            </a>
            <a 
              href="#" 
              className={`flex items-center py-2 px-3 rounded ${activeMenu === 'data-analysis' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={(e) => { e.preventDefault(); setActiveMenu('data-analysis') }}
            >
              <FaDatabase className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-yellow-600`} />
              {!sidebarCollapsed && "Data Analysis"}
            </a>
            
            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>COMMUNITY</div>
            <a href="#" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaDiscord className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-indigo-500`} />
              {!sidebarCollapsed && "Discord Community"}
            </a>
            
            <div className={`text-gray-500 text-xs uppercase mt-6 mb-2 ${sidebarCollapsed ? 'hidden' : 'block'}`}>SUPPORT</div>
            <a href="#" className="flex items-center py-2 px-3 rounded hover:bg-gray-100">
              <FaCommentAlt className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} text-blue-500`} />
              {!sidebarCollapsed && "Feedback & Help"}
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content with padding to account for fixed sidebar */}
      <main className={`flex-1 min-w-0 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-52'}`}>
        {/* Mobile Toggle Button */}
        <div className="md:hidden p-4">
          <button 
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FaBars />
          </button>
        </div>

        {/* Page Content */}
        <div className="p-8">
          {activeMenu && (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {courses[activeMenu as keyof typeof courses].title}
              </h1>
              <p className="text-gray-600 mb-8">{courses[activeMenu as keyof typeof courses].description}</p>
              
              <div className="space-y-6">
                {courses[activeMenu as keyof typeof courses].modules.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
                    <div 
                      className="p-6 border-b border-gray-100 cursor-pointer flex justify-between items-center hover:bg-gray-50"
                      onClick={() => toggleCourse(module.title)}
                    >
                      <div>
                        <h2 className="font-bold text-xl mb-1 text-gray-800">{module.title}</h2>
                        <p className="text-gray-500 text-sm">{module.description}</p>
                      </div>
                      <FaChevronDown 
                        className={`w-4 h-4 transition-transform ${expandedCourse === module.title ? 'rotate-180' : ''}`}
                      />
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCourse === module.title ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="p-6 pt-0">
                      <ul className="space-y-3">
  {module.topics.map((topic, idx) => (
    <li key={idx} className="border-b border-dashed border-gray-100 pb-2 last:border-0">
      <a 
        href={topic.path} 
        className="text-blue-600 hover:text-blue-800 flex items-center"
        onClick={(e) => {
          // You might want to handle navigation here if using client-side routing
          // e.preventDefault();
          // router.push(topic.path);
        }}
      >
        <FaChevronRight className="w-3 h-3 mr-2" />
        {topic.name}
      </a>
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
                <h2 className="text-xl font-bold text-gray-800 mb-4">Related Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-700 mb-2">Recommended Books</h3>
                    <p className="text-gray-500 text-sm mb-3">Curated reading list for {courses[activeMenu as keyof typeof courses].title}</p>
                    <a href="#" className="text-blue-600 text-sm font-medium flex items-center">
                      Explore <FaChevronRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-700 mb-2">Community Projects</h3>
                    <p className="text-gray-500 text-sm mb-3">Real-world examples from our community</p>
                    <a href="#" className="text-blue-600 text-sm font-medium flex items-center">
                      Explore <FaChevronRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}