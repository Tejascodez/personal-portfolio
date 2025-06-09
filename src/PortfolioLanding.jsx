import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Home, Code, Menu, User, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";


const PortfolioLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const introText = "  Passionate Web Developer | MERN Stack Enthusiast ";

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
      {/* Desktop Navbar */}
      <nav className={`hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[700px] px-8 py-4 rounded-full border
        ${isDarkMode ? 'bg-black/80 border-gray-700' : 'bg-white/80 border-gray-300'}
        backdrop-blur-md items-center justify-center space-x-8 shadow-xl`}>
        
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

      {/* Mobile/Tablet Navbar */}
      <nav className={`lg:hidden fixed top-4 left-4 right-4 z-50 px-4 py-3 rounded-2xl border
        ${isDarkMode ? 'bg-black/80 border-gray-700' : 'bg-white/80 border-gray-300'}
        backdrop-blur-md shadow-xl`}>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isDarkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition`}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              {navItems.slice(0, 2).map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className={`${item.color || (isDarkMode ? 'text-white' : 'text-black')} hover:opacity-80 transition`}
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {socialItems.slice(0, 2).map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition`}
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            ))}
            
            <button 
              onClick={toggleDarkMode} 
              className={`${isDarkMode ? 'text-white' : 'text-black'} hover:opacity-80 transition`}
            >
              {isDarkMode ? <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" /> : <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
          >
            <div className="grid grid-cols-2 gap-3">
              {[...navItems, ...socialItems].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition
                    ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-black'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Header Content */}
      <header className="container mx-auto flex flex-col items-center justify-center text-center pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Spotlight */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] pointer-events-none">
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
          className="mb-3 sm:mb-4"
        >
          <span className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-body text-indigo-600 dark:text-indigo-400">
            👋 <span className="hidden sm:inline">Hey there! </span><span className="text-yellow-200">I'm</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-extrabold leading-tight mb-3 sm:mb-4"
        >
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
            TEJAS PATIL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`font-body font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 lg:mb-16 max-w-xs sm:max-w-md lg:max-w-2xl px-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
        >
          {typedText}
        </motion.p>
 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center sm:flex-row gap-3 sm:gap-4 mt-10 mb-6 sm:mb-8 w-full max-w-sm sm:max-w-none"
        >
          <a
            href="https://drive.google.com/.../view"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-semibold text-gray-800 transition-all duration-300
              before:content-[''] before:absolute before:-z-10 before:inset-0 before:rounded-xl before:p-[2px] 
              before:bg-gradient-to-r before:from-cyan-400 before:via-pink-500 before:to-red-500
              bg-white hover:shadow-lg hover:shadow-pink-500/20 text-sm sm:text-base"
          >
            View Resume🧾
          </a>

          <a
            href="mailto:tejastp834@gmail.com"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-semibold text-gray-800 transition-all duration-300
              before:content-[''] before:absolute before:-z-10 before:inset-0 before:rounded-xl before:p-[2px] 
              before:bg-gradient-to-r before:from-cyan-400 before:via-pink-500 before:to-red-500
              bg-white hover:shadow-lg hover:shadow-pink-500/20 text-sm sm:text-base"
          >
            Let's Connect🤝
          </a>
        </motion.div>
      </header>

      <AboutMe />
      <Projects />
    </div>
  );
};

export default PortfolioLanding;