// Projects Section with Frontend, Backend, and Freelance Tabs
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGithub, FaReact, FaExternalLinkAlt, FaCode } from "react-icons/fa";
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
import imgtrex from '../assets/Imgtrex.png';
import imgtrexDemo from '../assets/ImgtrexDemo.mp4';

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isDarkMode, setIsDarkMode] = useState(true);
    
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
  
  // Frontend Projects
  const frontendProjects = [
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
    }
  ];
  
  // Backend Projects
  const backendProjects = [
    {
      id: 4,
      title: "Imgtrex AI Image Generator",
      description: "Imgtrex generates the images based on the prompt with user freindly ui.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "HuggingFace API"],
      image: imgtrex,
      github: "https://github.com/Tejascodez/tblog-spot.git",
      demoVideo: imgtrexDemo,
    },
    {
      id: 5,
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
      id: 8,
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
  
  const [hoveredProject, setHoveredProject] = useState(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls, activeTab]);
  
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
       <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
  <span>
    My Projects✨
  </span>
</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in frontend, backend development, and client work.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-white text-black shadow-lg"
                : "bg-black text-white border border-gray-800 hover:bg-gray-900"
            } ${activeTab === "frontend" ? "" : ""} 
            ${activeTab === "freelance" || activeTab === "backend" ? "rounded-l-none" : "rounded-l-full-none"}`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 ${
              activeTab === "backend"
                ? "bg-white text-black shadow-lg"
                : "bg-black text-white border border-gray-800 hover:bg-gray-900"
            } ${activeTab === "backend" ? "" : ""} 
            ${activeTab === "frontend" || activeTab === "freelance" ? "rounded-none" : ""}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("freelance")}
            className={`px-6 py-3 md:px-8 text-lg font-medium transition-all duration-300 ${
              activeTab === "freelance"
                ? "bg-white text-black shadow-lg"
                : "bg-black text-white border border-gray-800 hover:bg-gray-900"
            } ${activeTab === "freelance" ? "" : ""} 
            ${activeTab === "frontend" || activeTab === "backend" ? "rounded-r-full" : "rounded-r-full rounded-l-none"}`}
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
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Frontend Projects */}
          {activeTab === "frontend" && frontendProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
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
                      className="bg-white text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white border border-white font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <FaReact className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
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
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-56 overflow-hidden relative">
                {hoveredProject === project.id ? (
                  <div className="w-full h-full relative">
                    <video 
                      key={`video-${project.id}`}
                      src={project.demoVideo} 
                      autoPlay 
                      muted 
                      loop 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-2 left-2 bg-white text-black text-xs px-2 py-1 rounded-md">
                      Demo Preview
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
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
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-white/5"
            >
              <div className="relative">
                <div className="absolute top-2 right-2 z-10 bg-white text-black text-xs px-3 py-1 rounded-full font-medium">
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
                      className="bg-white text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Site
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 text-sm">{project.completedDate}</span>
                </div>
                <p className="text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-white font-medium text-sm mb-1">Client:</div>
                  <div className="text-gray-400">{project.client}</div>
                </div>
                
                <div className="mb-4 bg-gray-800 border border-gray-700 rounded-lg p-3 italic text-gray-300 text-sm">
                  "{project.testimonial}"
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
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
    </section>
  );
};

export default Projects;