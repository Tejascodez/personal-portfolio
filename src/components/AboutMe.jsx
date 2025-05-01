import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker, FaCode, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch, SiLeetcode, SiHackerrank } from "react-icons/si";
import profile from '../assets/profile.png';

// About Me Section with Photo Gallery, DSA Platforms, and Animated Skills - Black & White Theme
const AboutMe = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const skillsControls = useAnimation();
  const dsaControls = useAnimation();
  const skillsRef = useRef(null);
  const dsaRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const isDsaInView = useInView(dsaRef, { once: false, amount: 0.3 });
  
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
  ];
  
  // Tech colors mapping - maintain colored headings
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
    hackerrank: "text-green-500"
  };
  
  // DSA platform profiles
  const dsaPlatforms = [
    { 
      name: "LeetCode", 
      icon: <SiLeetcode className={techColors.leetcode} />,
      username: "tejas_patil",
      stats: "beginner",
      url: "https://leetcode.com/tejastp834",
    },
    { 
      name: "HackerRank", 
      icon: <SiHackerrank className={techColors.hackerrank} />,
      username: "tejas_patil",
      stats: "5-star problem solver",
      ranking: "Gold Badge in Problem Solving",
      url: "https://hackerrank.com/tejastp834",
    },
  ];
  
  // Skill categories
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  
  // Skill sets organized by category
  const skillCategories = {
    frontend: [
      { name: "React.js", icon: <FaReact className={techColors.react} /> },
      { name: "Next.js", icon: <SiNextdotjs className={techColors.next} /> },
      { name: "JavaScript", icon: <FaJs className={techColors.javascript} /> },
      { name: "TypeScript", icon: <SiTypescript className={techColors.typescript} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className={techColors.tailwind} /> },
      { name: "Bootstrap", icon: <SiBootstrap className={techColors.bootstrap} /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className={techColors.node} /> },
      { name: "Express.js", icon: <SiExpress className={techColors.express} /> },
      { name: "MongoDB", icon: <SiMongodb className={techColors.mongodb} /> },
      { name: "MySQL", icon: <SiMysql className={techColors.mysql} /> },
      { name: "Java", icon: <FaJava className={techColors.java} /> },
    ],
    tools: [
      { name: "Git & GitHub", icon: <FaGitAlt className={techColors.git} /> },
      { name: "Docker", icon: <FaDocker className={techColors.docker} /> },
      { name: "Postman", icon: <SiPostman className={techColors.postman} /> },
      { name: "Hopscotch", icon: <SiHoppscotch className="text-gray-800 dark:text-white text-lg" /> },
    ]
  };
  
  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [photos.length]);
  
  // Animate skills when in view
  useEffect(() => {
    if (isSkillsInView) {
      skillsControls.start("visible");
    }
    if (isDsaInView) {
      dsaControls.start("visible");
    }
  }, [isSkillsInView, isDsaInView, skillsControls, dsaControls, selectedCategory]);
  
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            About Me
          </h2>
          <div className="w-16 md:w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Photo Gallery - Improved for mobile responsiveness */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 mx-auto lg:mx-0"
          >
            <div className="relative w-full aspect-square sm:aspect-auto sm:h-96 rounded-2xl overflow-hidden shadow-xl shadow-gray-300 dark:shadow-gray-800 border border-gray-200 dark:border-gray-800">
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
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center bg-gray-100 dark:bg-gray-800"
                    style={{
                      objectFit: "contain",
                      padding: "1rem"
                    }}
                  />
                </motion.div>
              ))}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhoto(index)}
                    className={`w-3 h-3 rounded-full ${
                      activePhoto === index ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-700"
                    } transition-all duration-300`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-3/5 mt-8 lg:mt-0"
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Full-Stack Developer with a Passion for Innovation
            </h3>

            <p className={`mb-4 md:mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              I'm a dedicated full-stack developer with expertise in creating dynamic, responsive web applications. With a strong foundation in both frontend and backend technologies, I pride myself on delivering clean, efficient code and intuitive user experiences.
            </p>

            <p className={`mb-4 md:mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              My journey in technology started with a curiosity about how things work, which evolved into a passion for building digital solutions that solve real-world problems. I'm constantly learning and adapting to new technologies, keeping my skills sharp and relevant.
            </p>

            <p className={`mb-4 md:mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects. I believe in the power of technology to transform lives and am excited about the future of web development.
            </p>
          </motion.div>
        </div>
        
        {/* DSA and Skills Container */}
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* DSA Platforms Section */}
          <motion.div
            ref={dsaRef}
            initial="hidden"
            animate={dsaControls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <FaCode className="text-xl md:text-2xl text-black dark:text-white mr-3" />
                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                  Competitive Programming
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 md:mb-8">
                I enjoy solving algorithmic challenges and participating in competitive programming contests. Here are my profiles on various coding platforms:
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {dsaPlatforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 mr-4 group-hover:scale-110 transition-all duration-300">
                        {platform.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          {platform.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          @{platform.username}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          {platform.stats}
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">
                          {platform.ranking}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-300"
                >
                  <span>View my coding achievements</span>
                  <FaChartLine className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            ref={skillsRef}
            initial="hidden"
            animate={skillsControls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-3/5"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-black dark:text-white">
                My Skills Set💫
              </h3>
              
              {/* Category Tabs - Improved for mobile */}
              <div className="flex flex-wrap justify-center mb-6 md:mb-8 gap-2 md:gap-0">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Skills Grid with Colored Icons - Improved for mobile */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {skillCategories[selectedCategory].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="text-3xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <p className="text-sm md:text-base text-center text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 text-center">
                <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 text-sm md:text-base text-gray-800 dark:text-gray-200">
                  <span className="text-black dark:text-white font-semibold">+2 years</span> of experience with most technologies
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;