import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('Data Science');

  const skills = {
    'Data Science': [
      { name: 'Machine Learning', level: 90 },
      { name: 'Data Visualization', level: 95 },
      { name: 'Statistical Analysis', level: 80 }
    ],
    'Data Analysis': [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 90 },
      { name: 'SQL', level: 85 }
    ],

  };

  const experience = [
    {company : "Najot Ta'\lim corporation",
    duration : "15.12.2024 - 22.01.2025",
    job: "Data Analyst",
    duty: "Building business dashboards"
    }
  ]

  const projects = [
    {
      name: 'Predictive Analytics Platform',
      description: 'Advanced machine learning model for business forecasting',
      technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas']
    },
    {
      name: 'Kitob Chatbot 🤖',
      description: 'Kitob Chatbot is an interactive AI-powered application that allows users to engage with PDF books through question-answering, test generation, and summary extraction.',
      technologies: ['Python', 'Streamlit','LangChain', 'OpenAI GPT Models', 'FAISS Vector Store',' PyPDF2'],
      link: "https://chatbot1-pddetvez8akeg4odshlmke.streamlit.app/"
    }
  ];

  const certificates = [
    {
      name: 'Data Science',
      platform: 'Najot Ta\'lim',
      date: '2024',
      skills: ['Python', 'Streamlit', 'SQL', 'Machine Learning', 'Power BI', 'Statistics and Probability', 'Excel'],
      images: './images/photo_2025-01-28_23-09-35.jpg'
    },
   
  ];

  // Function to open certificate in new tab
  const onOpenCertificate = (cert) => {
    window.open(cert.images, '_blank');
  };

  const currentSkills = skills[activeSection] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-purple-900 text-white overflow-hidden relative">
      {/* ... previous sections remain the same ... */}
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 transform skew-y-12"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Data Science | Data Analysis 
          </p>
        </header>

        {/* Skills section */}
        <section className="mb-16">
          <div className="flex justify-center mb-8 space-x-4">
            {Object.keys(skills).map((category) => (
              <button 
                key={category}
                onClick={() => setActiveSection(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeSection === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {currentSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.name}
                className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{cert.name}</h3>
                  <span className="text-sm text-gray-400">{cert.date}</span>
                </div>
                <p className="text-purple-300 mb-4">{cert.platform}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => onOpenCertificate(cert)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>View Certificate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {project.name}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="ml-1">Visit Project</span>
                  </a>
                )}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Experience */}
<section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-lg border border-blue-500/20 hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold text-blue-400">{exp.job}</h3>
                <p className="text-purple-300 mb-2">{exp.company}</p>
                <p className="text-gray-300 mb-4">{exp.duration}</p>
                <p className="text-gray-400">{exp.duty}</p>
              </div>
            ))}
          </div>
        </section>
      

        {/* Contact section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Contact Me
          </h2>
          <div className="bg-gray-800/60 backdrop-blur-lg p-8 rounded-lg border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-gray-300 mb-2">📧 uktambekamonov0@gmail.com</p>
                <p className="text-gray-300">📱 +998 (33) 711-90-10</p>
              </div>
              <div className="flex space-x-6 justify-center">
                {[
                  { name: 'GitHub', link: 'https://github.com/UktambekA' },
                  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/o-ktambek-amonov-47398b2b2' },
                  { name: 'Telegram', link: 'https://t.me/AUktambek' },
                  { name: 'Medium', link: 'https://uktambekamonov0.medium.com/'}
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.link} 
                    className="text-xl text-blue-400 hover:text-purple-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;



// npm run dev