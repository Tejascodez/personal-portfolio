import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch, SiLeetcode, SiHackerrank, SiUdemy, SiLogitech, SiTechcrunch, SiGraphql, SiPostgresql } from "react-icons/si";
import profile from '../assets/profile.png';

const AboutMe = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const skillsControls = useAnimation();
  const bioControls = useAnimation();
  const skillsRef = useRef(null);
  const bioRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.2 });
  const isBioInView = useInView(bioRef, { once: false, amount: 0.3 });
  
  // Update dark mode state
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
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
  
  // Sample photos
  const photos = [
    { src: profile, alt: "Working on a project" },
  ];
  
  // Tech colors mapping
  const techColors = {
    react: "text-blue-500",
    next: "text-black-500 bg-white",
    node: "text-green-500",
    express: "text-gray-500", 
    mongodb: "text-green-600",
    mysql: "text-blue-600",
    postgresql: "text-blue-700",
    graphql: "text-pink-500",
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
    udemy: "text-purple-500"
  };
  
  // DSA platform profiles - converted to button format
  const dsaPlatforms = [
    { 
      name: "LeetCode", 
      icon: <SiLeetcode className={`text-sm ${techColors.leetcode}`} />,
      username: "tejas_patil",
      stats: "Beginner",
      url: "https://leetcode.com/tejastp834",
    },
    { 
      name: "HackerRank", 
      icon: <SiHackerrank className={`text-sm ${techColors.hackerrank}`} />,
      username: "tejas_patil",
      stats: "5-star Java",
      url: "https://hackerrank.com/tejastp834",
    },
  ];
  
  // Function to get platform icon
  const getPlatformIcon = (platform) => {
    switch(platform.toLowerCase()) {
      case 'hackerrank':
        return <SiHackerrank className={`text-lg ${techColors.hackerrank}`} />;
      case 'igaptech':
        return <SiLogitech className={`text-lg ${techColors.react}`} />;
      case 'udemy':
        return <SiUdemy className={`text-lg ${techColors.udemy}`} />;
      default:
        return <SiTechcrunch className={`text-lg ${techColors.next}`} />;
    }
  };
  
  // All skills combined into one array
  const allSkills = [
    // Frontend
    { name: "React.js", icon: <FaReact className={techColors.react} /> },
    { name: "Next.js", icon: <SiNextdotjs className={techColors.next} /> },
    { name: "JavaScript", icon: <FaJs className={techColors.javascript} /> },
    { name: "TypeScript", icon: <SiTypescript className={techColors.typescript} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className={techColors.tailwind} /> },
    { name: "Bootstrap", icon: <SiBootstrap className={techColors.bootstrap} /> },
    // Backend
    { name: "Node.js", icon: <FaNodeJs className={techColors.node} /> },
    { name: "Express.js", icon: <SiExpress className={techColors.express} /> },
    { name: "GraphQL", icon: <SiGraphql className={techColors.graphql} /> },
    { name: "MongoDB", icon: <SiMongodb className={techColors.mongodb} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className={techColors.postgresql} /> },
    { name: "MySQL", icon: <SiMysql className={techColors.mysql} /> },
    { name: "Java", icon: <FaJava className={techColors.java} /> },
    // Tools
    { name: "Git & GitHub", icon: <FaGitAlt className={techColors.git} /> },
    { name: "Docker", icon: <FaDocker className={techColors.docker} /> },
    { name: "Postman", icon: <SiPostman className={techColors.postman} /> },
    { name: "Hopscotch", icon: <SiHoppscotch className="text-black-500 bg-white" /> },
  ];
  
  // Certifications (commented out for now)
  /*
  const certifications = [
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
  ];
  */
  
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
    if (isBioInView) {
      bioControls.start("visible");
    }
  }, [isSkillsInView, isBioInView, skillsControls, bioControls]);

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
        
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Photo Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full sm:w-3/4 md:w-3/5 lg:w-2/5 mx-auto lg:mx-0"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-auto sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
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
                      className="max-w-full max-h-full object-contain object-center rounded-2xl transition-all duration-500 group-hover:scale-[1.02]"
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
            </div>
          </motion.div>
          
          {/* About Text */}
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
                  When I'm not coding, you'll find me working out since I'm a fitness freak, watching anime, and of course, exploring new technologies—because I'm a continuous learner.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsControls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              My Skills Set 🌟
            </h3>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <p className={`text-sm font-medium text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-blue-500 transition-colors duration-300`}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* DSA Platform Buttons - Compact Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-12"
        >
          <div className="text-center mb-6">
            <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Competitive Programming
            </h4>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              {dsaPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md hover:scale-105 group min-w-[200px]"
                >
                  <div className="flex items-center flex-1 space-x-3">
                    <div className="p-2 rounded bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-all duration-300">
                      {platform.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'} truncate`}>
                        {platform.name}
                      </h5>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} truncate`}>
                        {platform.stats}
                      </p>
                    </div>
                    <FaExternalLinkAlt className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;