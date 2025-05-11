// Projects Section with Frontend, Backend, and Freelance Tabs
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { FaGithub, FaReact, FaExternalLinkAlt, FaCode, FaPlay, FaTimes } from "react-icons/fa";
import img from '../assets/portfolio.png';
import img1 from "../assets/souled.png";
import img2 from '../assets/disney.png';
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo4 from "../assets/demo4.mp4";
import demopic4 from "../assets/demo4.png";
import demo3 from "../assets/demo3.mp4";
import demopic3 from "../assets/demopic3.png";
import demopic1 from "../assets/demopic1.png";
import demopic2 from "../assets/demopic2.png";
import freelance from "../assets/freelance1.png";
import cda from  "../assets/codementorai.png";
import imgtrex from '../assets/Imgtrex.png';
import imgtrexDemo from '../assets/ImgtrexDemo.mp4';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [videoModal, setVideoModal] = useState({ isOpen: false, video: null, title: null });
  
  // Update dark mode state when the document class changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Create a MutationObserver to watch for class changes on documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && videoModal.isOpen) {
        setVideoModal({ isOpen: false, video: null, title: null });
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [videoModal.isOpen]);
  
  // Frontend Projects
  const frontendProjects = [
    {
      id: 4,
      title: "CodeMentor AI",
      description: "CodeMentor AI is a platform where user can improve their problem solving skills with the help of AI",
      technologies: ["Node.js", "Express", "MongoDB","Clerk Auth", "JudgeO api", "Gemini API"],
      image: cda,
      github: "https://github.com/Dcode36/code_mentor_ai",
      demo: "https://code-mentor-ai.vercel.app/",
    },
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A fully responsive e-commerce website with dynamic product filtering, cart functionality, and user authentication.",
      technologies: ["React", "CSS", "Firebase"],
      image: img1,
      github: "https://github.com/Tejascodez/soul-clone.git",
      demo: "https://resplendent-capybara-9fb345.netlify.app/"
    },
    {
      id: 2,
      title: "Disney + Clone",
      description: "Interactive clone application with enhance ui of disney +  and customizable alerts.",
      technologies: ["React.js", "javascript", "firebase api", "firebase"],
      image: img2,
      github: "https://github.com/Tejascodez/disney-clone.git",
      demo: "https://adorable-malasada-34094b.netlify.app/"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A creative portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      technologies: ["React", "CSS", "Framer Motion", "javascript" , "animation"],
      image: img,
      github: "https://github.com/Tejascodez/porfoilio.git",
      demo: "https://tejas-portofolio.netlify.app/"
    },
 ,
  ];
  
  // Backend Projects
  const backendProjects = [


    {
      id: 5,
      title: "Imgtrex AI Image Generator",
      description: "Imgtrex generates the images based on the prompt with user freindly ui.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "HuggingFace API"],
      image: imgtrex,
      github: "https://github.com/Tejascodez/tblog-spot.git",
      demoVideo: imgtrexDemo,
    },
    {
      id: 6,
      title: "TBlog Spot",
      description: "RESTful API for a blog platform with user authentication, post management, and comment functionality.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: demopic1,
      github: "https://github.com/Tejascodez/tblog-spot.git",
      demoVideo: demo2,
    },
    {
      id: 6,
      title: "Ebook Store Rent/buy",
      description: "Backend for a task management application with user roles, task assignments, and real-time notifications.",
      technologies: ["Node.js", "Express", "Mongodb", "JWT"],
      image: demopic2,
      github: "https://github.com/Tejascodez/Realm.git",
      demoVideo: demo1,
    },
    {
      id: 7,
      title: "E-commerce API",
      description: "Scalable backend for an e-commerce platform with product catalog, order processing, and payment integration.",
      technologies: ["Node js", "Express", "MongoDB", "Clerk", "tailwind CSS"],
      image: demopic3,
      github: "https://github.com/Tejascodez/E-com.git",
      demoVideo: demo3,
    },
    {
      id: 8,
      title: "Ui Frontend Library",
      description: "A library of reusable UI components built with React, Tailwind CSS, and Framer Motion.",
      technologies: ["typscript", "Shadcn", "Alcenity UI", "Taintwind CSS"],
      image: demopic4,
      github: "https://github.com/Tejascodez/ui-library.git",
      demoVideo: demo4,
    }
  ];
  
  // Freelance Projects
  const freelanceProjects = [
    {
      id: 9,
      title: "KING LOGISTICS INFO WEBSITE",
      description: "Custom-built responsive website for a local Logistics services to showcase there services.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: freelance,
      liveLink: "https://heroic-longma-efd468.netlify.app/",
      completedDate: "March 2025",
      client: "Fine Dining LLC",
      testimonial: "Tejas delivered a stunning website that exceeded our expectations. The reservation system has increased our bookings by 40%."
    },
  ];
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, activeTab]);

  // Function to open video modal
  const openVideoModal = (video, title) => {
    setVideoModal({ isOpen: true, video, title });
  };
  
  return (
    <section id="projects" className={`py-24 relative ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Background gradient */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-gradient-to-b from-transparent to-gray-900/30' 
        : 'bg-gradient-to-b from-transparent to-gray-200/50'} pointer-events-none`}></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'black'}`}>
            <span className="relative inline-block">
              My Projects✨
              <motion.span
  className="block w-24 h-1 mx-auto mt-4  rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
  animate={{
    backgroundPosition: ['0% 50%', '100% 50%'],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'linear',
  }}
/>
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my latest projects showcasing my skills in frontend, backend development, and client work.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 
              ${activeTab === "frontend"
                ? isDarkMode 
                  ? "bg-white text-black shadow-lg" 
                  : "bg-gray-800 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-900 text-white border border-gray-800 hover:bg-gray-800"
                  : "bg-gray-200 black border border-gray-300 hover:bg-gray-300"
              } rounded-l-full`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 
              ${activeTab === "backend"
                ? isDarkMode 
                  ? "bg-white text-black shadow-lg" 
                  : "bg-gray-800 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-900 text-white border border-gray-800 hover:bg-gray-800"
                  : "bg-gray-200 black border border-gray-300 hover:bg-gray-300"
              } border-l-0 border-r-0`}
          >
            Full Stack 
          </button>
          <button
            onClick={() => setActiveTab("freelance")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 
              ${activeTab === "freelance"
                ? isDarkMode 
                  ? "bg-white text-black shadow-lg" 
                  : "bg-gray-800 text-white shadow-lg"
                : isDarkMode
                  ? "bg-gray-900 text-white border border-gray-800 hover:bg-gray-800"
                  : "bg-gray-200 black border border-gray-300 hover:bg-gray-300"
              } rounded-r-full`}
          >
            Freelance
          </button>
        </div>
        
        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Projects */}
          {activeTab === "frontend" && frontendProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl
                ${isDarkMode 
                  ? 'bg-gray-900 border-gray-800 hover:border-white hover:shadow-white/5' 
                  : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-gray-200'}`}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center
                        ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center
                        ${isDarkMode ? 'bg-black text-white border border-white' : 'bg-white black border border-gray-800'}`}
                    >
                      <FaReact className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 group-hover:text-gray-500 transition-colors duration-300
                  ${isDarkMode ? 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' : 'black'}`}>
                  {project.title}
                </h3>

                <p className={`mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm 
                        ${isDarkMode 
                          ? 'bg-gray-800 text-gray-300 border black' 
                          : 'bg-gray-200 text-gray-700 border border-gray-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Backend Projects */}
          {activeTab === "backend" && backendProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl
                ${isDarkMode 
                  ? 'bg-gray-900 border-gray-800 hover:border-white hover:shadow-white/5' 
                  : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-gray-200'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Video preview overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openVideoModal(project.demoVideo, project.title)}
                    className={`px-4 py-2 rounded-lg flex items-center font-medium transition-transform duration-300 hover:scale-110
                      ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                  >
                    <FaPlay className="mr-2" /> Watch Demo
                  </button>
                </div>
                
                <div className="absolute bottom-4 right-4 z-10">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center opacity-0 group-hover:opacity-100
                      ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300
                  ${isDarkMode 
                    ? 'text-white group-hover:text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' 
                    : 'black group-hover:text-gray-600'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm 
                        ${isDarkMode 
                          ? 'bg-gray-800 text-gray-300 border black' 
                          : 'bg-gray-200 text-gray-700 border border-gray-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Freelance Projects */}
          {activeTab === "freelance" && freelanceProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl
                ${isDarkMode 
                  ? 'bg-gray-900 border-gray-800 hover:border-white hover:shadow-white/5' 
                  : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-gray-200'}`}
            >
              <div className="relative">
                <div className={`absolute top-2 right-2 z-10 text-xs px-3 py-1 rounded-full font-medium
                  ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
                  Client Project
                </div>
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center
                        ${isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Site
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-xl font-bold transition-colors duration-300
                    ${isDarkMode 
                      ? 'text-white group-hover:text-gray-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]' 
                      : 'black group-hover:text-gray-600'}`}>
                    {project.title}
                  </h3>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    {project.completedDate}
                  </span>
                </div>
                <p className={`mb-3 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className={`font-medium text-sm mb-1 ${isDarkMode ? 'text-white' : 'black'}`}>
                    Client:
                  </div>
                  <div className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {project.client}
                  </div>
                </div>
                
                <div className={`mb-4 border rounded-lg p-3 italic text-sm
                  ${isDarkMode 
                    ? 'bg-gray-800 black text-gray-300' 
                    : 'bg-gray-100 border-gray-200 text-gray-700'}`}>
                  "{project.testimonial}"
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-sm 
                        ${isDarkMode 
                          ? 'bg-gray-800 text-gray-300 border black' 
                          : 'bg-gray-200 text-gray-700 border border-gray-300'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setVideoModal({ isOpen: false, video: null, title: null })}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className={`relative max-w-4xl w-full rounded-xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`p-4 flex justify-between items-center border-b ${isDarkMode ? 'black' : 'border-gray-200'}`}>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'black'}`}>
                  {videoModal.title} - Demo Preview
                </h3>
                <button 
                  onClick={() => setVideoModal({ isOpen: false, video: null, title: null })}
                  className={`p-2 rounded-full hover:bg-opacity-10 transition-colors
                    ${isDarkMode ? 'hover:bg-white text-white' : 'hover:bg-gray-800 black'}`}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <video 
                  src={videoModal.video} 
                  className="absolute top-0 left-0 w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                />
              </div>
              <div className={`p-4 flex justify-end ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <button 
                  onClick={() => setVideoModal({ isOpen: false, video: null, title: null })}
                  className={`px-4 py-2 rounded-lg font-medium
                    ${isDarkMode 
                      ? 'bg-gray-800 text-white hover:bg-gray-700' 
                      : 'bg-gray-200 black hover:bg-gray-300'}`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;