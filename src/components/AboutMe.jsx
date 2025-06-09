import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch, SiGraphql, SiPostgresql } from "react-icons/si";
import pic2 from '../assets/pic2.png'

const AboutMe = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const skillsControls = useAnimation();
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.2 });
  
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
  
  // Sample photos - using placeholder for demo
  const photos = [
    { src: pic2, alt: "Profile photo 1" },

  ];
  
  // Tech colors mapping
  const techColors = {
    react: "text-blue-500",
    next: "text-gray-900 dark:text-white",
    node: "text-green-500",
    express: "text-gray-600 dark:text-gray-400", 
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
  };
  
  // All skills combined into one array
  const allSkills = [
    { name: "React.js", icon: <FaReact className={techColors.react} /> },
    { name: "Next.js", icon: <SiNextdotjs className={techColors.next} /> },
    { name: "JavaScript", icon: <FaJs className={techColors.javascript} /> },
    { name: "TypeScript", icon: <SiTypescript className={techColors.typescript} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className={techColors.tailwind} /> },
    { name: "Bootstrap", icon: <SiBootstrap className={techColors.bootstrap} /> },
    { name: "Node.js", icon: <FaNodeJs className={techColors.node} /> },
    { name: "Express.js", icon: <SiExpress className={techColors.express} /> },
    { name: "GraphQL", icon: <SiGraphql className={techColors.graphql} /> },
    { name: "MongoDB", icon: <SiMongodb className={techColors.mongodb} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className={techColors.postgresql} /> },
    { name: "MySQL", icon: <SiMysql className={techColors.mysql} /> },
    { name: "Java", icon: <FaJava className={techColors.java} /> },
    { name: "Git & GitHub", icon: <FaGitAlt className={techColors.git} /> },
    { name: "Docker", icon: <FaDocker className={techColors.docker} /> },
    { name: "Postman", icon: <SiPostman className={techColors.postman} /> },
  ];
  
  // Auto-advance gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [photos.length]);
  
  // Animate skills when in view
  useEffect(() => {
    if (isSkillsInView) {
      skillsControls.start("visible");
    }
  }, [isSkillsInView, skillsControls]);

  return (
    <section 
      id="about" 
      className={`mx-auto text-center py-20 px-6 m-0 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden `}
    >

      
      {/* Left Side - Profile & Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative z-10"
      >
        {/* Profile Image - Changed to Square */}
        <div className="flex relative mt-10 mb-5 mx-25 ">
          <div className="w-60 h-56 rounded-xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              {photos.map((photo, index) => (
                <motion.img
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${
                    activePhoto === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                  initial={index === 0 ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: activePhoto === index ? 1 : 0 }}
                />
              ))}
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
      
          {/* <div className="w-110  h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto md:mx-0 mb-6 rounded-full"></div> */}
       <h3 className="text-2xl md:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
  Full-Stack Developer
</h3>

          
          <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-md`}>
            Passionate about creating innovative web solutions with clean code and exceptional user experiences. I bring ideas to life through modern technologies and creative problem-solving.
          </p>
   
          {/* Interests */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            {['💪 Fitness', '🎌 Anime', '📚 Learning', '💻 Coding'].map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Right Side - Skills */}
      <motion.div 
        ref={skillsRef}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full md:w-1/2 relative z-10"
      >
        <motion.div
          initial="hidden"
          animate={skillsControls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 }
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Technologies that I use!
          </h3>
          
          {/* Skills Grid - Centered */}
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {allSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg transition-all duration-300 group cursor-pointer w-full max-w-[80px]`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {skill.icon}
                </div>
                <p className={`text-xs font-medium text-center leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-blue-500 transition-colors duration-300`}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
          
  
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;