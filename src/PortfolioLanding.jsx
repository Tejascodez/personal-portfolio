import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Home, Code, Menu, User, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import logo from "./assets/Tlgo.png";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import profile from "./assets/profile.jpg";

const PortfolioLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const introText = "A Full-Stack Developer || Software Engineer";

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(userPrefersDark);
    document.documentElement.classList.toggle('dark', userPrefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTypedText(introText.slice(0, i));
      i <= introText.length ? i++ : clearInterval(id);
    }, 100);
    return () => clearInterval(id);
  }, []);

  const navItems = [
    { icon: Home, label: "Home", href: "#home", color: "text-yellow-400" },
    { icon: Code, label: "Projects", href: "#projects" },
    { icon: User, label: "About", href: "#about" },
  ];

  const socialItems = [
    { icon: Github, label: "GitHub", href: "https://github.com/Tejascodez" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/tejastp834" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tejasp834" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark:bg-black' : 'bg-white'}`}>
      {/* Improved Navbar */}
<nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[700px] px-8 py-4 rounded-full border
  ${isDarkMode ? 'bg-black/80 border-gray-700' : 'bg-white/80 border-gray-300'}
  backdrop-blur-md flex items-center justify-center space-x-8 shadow-xl`}>

        
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            <a 
              href={item.href} 
              className={`${item.color || (isDarkMode ? 'text-white' : 'text-black')} hover:opacity-80 transition`}
            >
              <item.icon className="h-7 w-7" />
            </a>
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-md text-sm font-medium
              ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} 
              opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap`}>
              {item.label}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                ${isDarkMode ? 'border-l-transparent border-r-transparent border-b-gray-800' : 'border-l-transparent border-r-transparent border-b-gray-100'}`} />
            </div>
          </div>
        ))}

        <div className={`h-8 w-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />

        {socialItems.map((item, index) => (
          <div key={index} className="relative group">
            <a 
              href={item.href} 
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition`}
            >
              <item.icon className="h-7 w-7" />
            </a>
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-md text-sm font-medium
              ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} 
              opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap`}>
              {item.label}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
                ${isDarkMode ? 'border-l-transparent border-r-transparent border-b-gray-800' : 'border-l-transparent border-r-transparent border-b-gray-100'}`} />
            </div>
          </div>
        ))}

        <div className={`h-8 w-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} />

        <div className="relative group">
          <button 
            onClick={toggleDarkMode} 
            className={`${isDarkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition`}
          >
            {isDarkMode ? <SunIcon className="h-7 w-7" /> : <MoonIcon className="h-7 w-7" />}
          </button>
          <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-md text-sm font-medium
            ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} 
            opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap`}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 
              ${isDarkMode ? 'border-l-transparent border-r-transparent border-b-gray-800' : 'border-l-transparent border-r-transparent border-b-gray-100'}`} />
          </div>
        </div>
      </nav>

      {/* Rest of your content */}
      <header className="container mx-auto flex flex-col items-center justify-center text-center pt-40 pb-24 px-6 max-w-4xl relative z-10">
        {/* Spotlight */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] pointer-events-none">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full rounded-full bg-white opacity-[0.1] dark:opacity-[0.15] blur-[100px]"></div>
              <div className="absolute w-1/2 h-1/2 rounded-full bg-white opacity-[0.2] dark:opacity-[0.25] blur-[80px]"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xl sm:text-5xl font-body text-indigo-600 dark:text-indigo-400">
            👋 Hey there! <span className="text-yellow-200">I'm</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-8xl">
            TEJAS PATIL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
className={`font-body font-bold text-xl sm:text-2xl mb-16 max-w-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}

        >
          {typedText}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <a
            href="https://drive.google.com/.../view"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-gray-800 transition-all duration-300
              before:content-[''] before:absolute before:-z-10 before:inset-0 before:rounded-xl before:p-[2px] 
              before:bg-gradient-to-r before:from-cyan-400 before:via-pink-500 before:to-red-500
              bg-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            View Resume
          </a>

          <a
            href="mailto:tejastp834@gmail.com"
            className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-gray-800 transition-all duration-300
              before:content-[''] before:absolute before:-z-10 before:inset-0 before:rounded-xl before:p-[2px] 
              before:bg-gradient-to-r before:from-cyan-400 before:via-pink-500 before:to-red-500
              bg-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            Let's Connect
          </a>
        </motion.div>

     
      </header>

      <AboutMe />
      <Projects />
    </div>
  );
};

export default PortfolioLanding;