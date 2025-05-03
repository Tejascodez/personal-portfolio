import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker, FaCode, FaStar, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch, SiLeetcode, SiHackerrank, SiUdemy, SiLogitech, SiTechcrunch } from "react-icons/si";
import profile from '../assets/profile.png';

// Enhanced About Me Section with Photo Gallery, DSA Platforms, and Animated Skills
const AboutMe = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const skillsControls = useAnimation();
  const dsaControls = useAnimation();
  const bioControls = useAnimation();
  const skillsRef = useRef(null);
  const dsaRef = useRef(null);
  const bioRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.2 });
  const isDsaInView = useInView(dsaRef, { once: false, amount: 0.2 });
  const isBioInView = useInView(bioRef, { once: false, amount: 0.3 });
  
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
  
  // Sample photos - replace with your actual photo imports
  const photos = [
    { src: profile, alt: "Working on a project" },
    // Add more photos when available
  ];
  
  // Tech colors mapping with enhanced color palette
  const techColors = {
    react: "text-blue-500",
    next: "text-black dark:text-white",
    node: "text-green-500",
    express: "text-gray-500", 
    mongodb: "text-green-600",
    mysql: "text-blue-600",
    typescript: "text-blue-700",
    javascript: "text-yellow-500",
    tailwind: "text-teal-500",
    bootstrap: "text-purple-600",
    java: "text-red-500",
    git: "text-orange-600",
    docker: "text-blue-600",
    postman: "text-orange-500",
    leetcode: "text-orange-400",
    hackerrank: "text-green-500",
    freecodecamp: "text-blue-400",
    coursera: "text-blue-600",
    udemy: "text-purple-500"
  };
  
  // DSA platform profiles with enhanced details
  const dsaPlatforms = [
    { 
      name: "LeetCode", 
      icon: <SiLeetcode className={`text-2xl ${techColors.leetcode}`} />,
      username: "tejas_patil",
      stats: "Beginner (Currently learning)",
      description: "Building problem-solving skills with algorithmic challenges",
      url: "https://leetcode.com/tejastp834",
    },
    { 
      name: "HackerRank", 
      icon: <SiHackerrank className={`text-2xl ${techColors.hackerrank}`} />,
      username: "tejas_patil",
      stats: "5-star in JAVA",
      description: "Competitive coding and algorithm challenges",
      ranking: "Gold Badge in Problem Solving",
      url: "https://hackerrank.com/tejastp834",
    },
  ];
  
  // Skill categories
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  
  // Function to get platform icon
  const getPlatformIcon = (platform) => {
    switch(platform.toLowerCase()) {
      case 'hackerrank':
        return <SiHackerrank className={`text-2xl ${techColors.hackerrank}`} />;
      case 'IGapTech':
        return <SiLogitech className={`text-2xl ${techColors.react}`} />;
      case 'udemy':
        return <SiUdemy className={`text-2xl ${techColors.udemy}`} />;
      default:
        return <SiTechcrunch className={`text-2xl ${techColors.next}`} />;
    }
  };
  
  // Skill sets organized by category with proficiency levels
  const skillCategories = {
    frontend: [
      { name: "React.js", icon: <FaReact className={techColors.react} />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className={techColors.next} />, level: 85 },
      { name: "JavaScript", icon: <FaJs className={techColors.javascript} />, level: 95 },
      { name: "TypeScript", icon: <SiTypescript className={techColors.typescript} />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className={techColors.tailwind} />, level: 90 },
      { name: "Bootstrap", icon: <SiBootstrap className={techColors.bootstrap} />, level: 85 },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className={techColors.node} />, level: 88 },
      { name: "Express.js", icon: <SiExpress className={techColors.express} />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb className={techColors.mongodb} />, level: 80 },
      { name: "MySQL", icon: <SiMysql className={techColors.mysql} />, level: 75 },
      { name: "Java", icon: <FaJava className={techColors.java} />, level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", icon: <FaGitAlt className={techColors.git} />, level: 92 },
      { name: "Docker", icon: <FaDocker className={techColors.docker} />, level: 78 },
      { name: "Postman", icon: <SiPostman className={techColors.postman} />, level: 88 },
      { name: "Hopscotch", icon: <SiHoppscotch className="text-gray-800 dark:text-white text-lg" />, level: 70 },
    ],
    certifications: [
      {
        title: "SQL Intermediate",
        platform: "Hackerrank",
        link: "https://www.hackerrank.com/certificates/iframe/bf3043c10f14",
        date: "April 2025",
        skills: ["SQL"]
      },
      {
        title: "Core Java",
        platform: "Udemy",
        link: "https://drive.google.com/file/d/1c8KlW8pq-9jA-vXryIRDxBIBElvwHAYe/view?usp=drive_link",
        date: "May 2025",
        skills: ["JAVA", "OOPS", "Data Structures"]
      },
      {
        title: "Web Developer Intern",
        platform: "Intrainz",
        link: "https://drive.google.com/file/d/184OLR3u1OuHkuyAf9a-r6PZf4q1kA0Ev/view?usp=drive_link",
        date: "July 2024 - Aug 2024",
        skills: ["Frontend Development"]
      },
      {
        title: "Web Development with React",
        platform: "IGapTech",
        link: "https://drive.google.com/file/d/1UX4kobUquXDh1NlfXFjJdl39oxBZ68Q4/view?usp=drive_link",
        date: "Dec 2023 - Jan 2024",
        skills: ["HTML", "CSS","Javascript", "Mock API", "React"]
      },
      {
        title: "30-40WPM Certified Typer",
        platform: "MSCE, Pune",
        link: "https://drive.google.com/file/d/1wwyA3_Y27XjY9Y35-o7iIHM4ns00QTTU/view?usp=drive_link",
        date: "May 2020",
        skills: ["Typing", "MS Word", "MS Excel"]
      }
    ],
  };
  
  // Bio highlights
  const bioHighlights = [
    "Full-stack development with React & Node.js",
    "Responsive UI/UX design",
    "RESTful API architecture",
    "Database design & optimization",
    "Problem solving & algorithms"
  ];
  
  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [photos.length]);
  
  // Animate sections when in view
  useEffect(() => {
    if (isSkillsInView) {
      skillsControls.start("visible");
    }
    if (isDsaInView) {
      dsaControls.start("visible");
    }
    if (isBioInView) {
      bioControls.start("visible");
    }
  }, [isSkillsInView, isDsaInView, isBioInView, skillsControls, dsaControls, bioControls, selectedCategory]);
  
  // Render certification items
  const renderCertificationItems = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group-hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 mr-3 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                    {getPlatformIcon(cert.platform)}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {cert.platform}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {cert.date}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3">
                {cert.title}
              </h4>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 flex justify-end">
                <span className="text-sm text-blue-600 dark:text-blue-400 flex items-center group-hover:underline">
                  View Certificate 
                  <FaExternalLinkAlt className="ml-1 text-xs" />
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    );
  };
  
  // Render regular skill items
  const renderSkillItems = (category) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillCategories[category].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
              {skill.icon}
            </div>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              {skill.name}
            </p>
            
            {/* Skill proficiency bar */}
            <div className="mt-3 w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              ></motion.div>
            </div>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
              {skill.level}%
            </p>
          </motion.div>
        ))}
      </div>
    );
  };

  <style jsx>{`
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: ${isDarkMode ? '#1F2937' : '#F3F4F6'};
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: ${isDarkMode ? '#4B5563' : '#CBD5E1'};
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: ${isDarkMode ? '#6B7280' : '#94A3B8'};
    }
  `}</style>
  
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full translate-x-1/2 translate-y-1/2 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'} tracking-tight`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          {/* Photo Gallery with enhanced styling */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 mx-auto lg:mx-0"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-blue-900/10 border border-gray-200 dark:border-gray-800 group perspective">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activePhoto === index ? 1 : 0,
                    scale: activePhoto === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="w-full h-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
                    <img 
                      src={photo.src}
                      alt={photo.alt}
                      className="max-w-full max-h-full object-contain object-center rounded-2xl transition-all duration-500 group-hover:scale-[1.02] filter contrast-[1.02] saturate-[1.05]"
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Photo navigation dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhoto(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activePhoto === index 
                        ? "bg-blue-500 scale-125" 
                        : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 -translate-y-1/2 translate-x-1/2 rounded-full blur-xl"></div>
            </div>
          </motion.div>
          
          {/* About Text with enhanced styling */}
          <motion.div 
            ref={bioRef}
            initial="hidden"
            animate={bioControls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="lg:w-3/5 mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Animated accent bar */}
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden md:block"
              ></motion.div>
              
              <div className="md:pl-8">
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'} tracking-tight`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Full-Stack Developer
                  </span>{" "}
                  with a Passion for Innovation
                </h3>

                <p className={`mb-6 leading-relaxed text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm a dedicated full-stack developer with expertise in creating dynamic, responsive web applications. With a strong foundation in both frontend and backend technologies, I pride myself on delivering clean, efficient code and intuitive user experiences.
                </p>

                {/* Skills highlight section */}
                <div className="mb-8">
                  <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Core Expertise:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {bioHighlights.map((highlight, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you'll find me working out since  <span className="text-yellow-300 
text-shadow: yellow-500;">I'm a fitness freak</span>, watching anime, and of course, exploring new technologies—because I'm a continuous learner.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* DSA and Skills Container */}
        <div className="mt-8 md:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* DSA Platforms Section with enhanced design */}
          <motion.div
            ref={dsaRef}
            initial="hidden"
            animate={dsaControls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="w-full lg:w-2/5"
          >
            <div className="backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 mr-3">
                  <FaCode className="text-2xl md:text-3xl text-blue-500" />
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Competitive Programming
                </h3>
              </div>
              <div className="space-y-6">
                {dsaPlatforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-5 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg group-hover:shadow-blue-500/5"
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 mr-5 group-hover:scale-110 transition-all duration-300 shadow-md">
                        {platform.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className={`text-xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {platform.name}
                          </h4>
                          <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                        </div>
                        <p className={`text-sm font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          @{platform.username}
                        </p>
                        <p className={`text-sm font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          {platform.stats}
                        </p>
                        {platform.description && (
                          <p className={`text-sm mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {platform.description}
                          </p>
                        )}
                        {platform.ranking && (
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-2">
                            {platform.ranking}
                          </p>
                        )}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Skills Section with matching design to the left section */}
          <motion.div
            ref={skillsRef}
            initial="hidden"
            animate={skillsControls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <div className="backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8 justify-center">
             
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  My Skills Set🌟
                </h3>

              </div>
              
              {/* Category Tabs - Enhanced with matching style */}
              <div className="flex flex-wrap justify-center mb-8 gap-2">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-500 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105"
                        : "bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Skills/Certifications content with fixed height and overflow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`${selectedCategory === "certifications" ? "h-80 overflow-y-auto pr-2 custom-scrollbar" : ""}`}
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: isDarkMode ? '#4B5563 #1F2937' : '#CBD5E1 #F3F4F6'
                  }}
                >
                  {selectedCategory === "certifications" 
                    ? renderCertificationItems() 
                    : renderSkillItems(selectedCategory)
                  }
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 


