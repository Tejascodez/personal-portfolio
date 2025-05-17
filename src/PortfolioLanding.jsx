import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch } from "react-icons/si";
import { motion } from "framer-motion";
import logo from "./assets/Tlgo.png";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import ParticleBackground from "./components/ParticlesBackground";
import CodeAnimation from "./components/CodingAnimation";

const PortfolioLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const introText = "Full-Stack Developer";

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Tejascodez' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/tejastp834' },
    { icon: FaTwitter, url: 'https://twitter.com/tejastp834' },
    { icon: FaWhatsapp, url: 'https://wa.me/9021956896' }
  ];

  useEffect(() => {
    // Set initial theme based on user preference
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
    if (userPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= introText.length) {
        setTypedText(introText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Define dynamic tech colors
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
    postman: "text-orange-500"
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark:bg-black' : 'bg-white'}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

      >
        {/* Enhanced Navbar */}
        <nav
  className={`w-full sticky top-0 z-50 backdrop-blur-sm border-b ${
    isDarkMode ? 'bg-black/90 border-gray-800' : 'bg-white/90 border-gray-200'
  }`}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
    <a href="/">
      <h1 className="text-2xl font-bold flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
        />
        <span className={isDarkMode ? 'text-white' : 'text-black'}>
          EJAS
        </span>
      </h1>
    </a>

    <div className="flex items-center space-x-4">
      <div className="hidden md:flex space-x-6">
        <a
          href="#about"
          className={`${
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-black'
          } transition-all duration-300 font-medium`}
        >
          About
        </a>
        <a
          href="#projects"
          className={`${
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-black'
          } transition-all duration-300 font-medium`}
        >
          Projects
        </a>
        <a
          href="/"
          className={`${
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-black'
          } transition-all duration-300 font-medium`}
        >
          Contact
        </a>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full transition-all duration-300 border ${
          isDarkMode
            ? 'bg-gray-800 hover:bg-gray-700 border-gray-700 hover:border-gray-600'
            : 'bg-gray-100 hover:bg-gray-200 border-gray-200 hover:border-gray-300'
        }`}
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-white" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-700" />
        )}
      </button>
    </div>
  </div>
</nav>

        <ParticleBackground />

        {/* Enhanced Hero Section with Code Animation */}
        <header className="container mx-auto text-center py-20 px-6 m-0 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex-1 text-left z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
<h1 className="text-4xl md:text-6xl font-bold mb-4">
  <span className={`block ${isDarkMode ? 'text-white' : 'text-black'} font-serifFancy`}>
    Hello, I'm
  </span>
  <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient font-fancy">
    TEJAS PATIL
  </span>
</h1>


              <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                {typedText}
              </p>
            </motion.div>

            

            {/* Tech stack with colorful headings */}
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className={`font-medium ${techColors.react}`}>"A fit body, a calm mind, a house full of love" These things cannot be bought — they must be earned.</span>
        
            </motion.div>

            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
<a
  href="https://drive.google.com/file/d/1QMv9QgcMzWEvL8Up_4RG8PH811d20p3X/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:bg-indigo-600 hover:shadow-indigo-400 hover:text-white"
>
  View Resume
</a>


<a 
  href="mailto:tejastp834@gmail.com"
  className={`border-2 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-600' : 'border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-800'} font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm transform hover:shadow-lg hover:shadow-indigo-400`}
>
  Let's Connect
</a>

            </motion.div>
            <motion.div 
  className="flex gap-6 mt-12"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  {socialLinks.map((social, index) => {
    // Determine the color based on the icon component
    let iconColor;
    const IconComponent = social.icon;

    if (IconComponent.displayName === 'FaGithub') {
      iconColor = isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-800 hover:text-black';
    } else if (IconComponent.displayName === 'FaLinkedin') {
      iconColor = isDarkMode ? 'text-blue-600 hover:text-blue-500' : 'text-blue-800 hover:text-blue-600';
    } else if (IconComponent.displayName === 'FaTwitter') {
      iconColor = isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-500';
    } else {
      iconColor = isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black';
    }

    return (
      <a 
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconColor} transition-all duration-300 hover:-translate-y-1`}
      >
        <IconComponent className="h-8 w-8" />
      </a>
    );
  })}
</motion.div>


          </div>

          {/* Code Animation Component */}
          <motion.div 
            className="flex-1 flex justify-center items-center z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <CodeAnimation />
              
              {/* Glow effect with black/white theme */}
              <div className={`absolute inset-0 -z-10 rounded-lg blur-xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`}></div>
            </div>
          </motion.div>
        </header>

        <AboutMe />
        
        <Projects />
      </motion.div>
    </div>
  );
};

export default PortfolioLanding;