import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiHoppscotch } from "react-icons/si";
import profile from "./assets/profile.png";
import contact from "./assets/contact.png";
import { motion } from "framer-motion";
import logo from "./assets/Tlgo.png";
import { projects } from "./ProjectData";


const PortfolioLanding = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const introText = "Full-Stack Developer & Tech Innovator";


  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-lg" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-lg" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-lg" /> },
    { name: "Express.js", icon: <SiExpress className="text-black dark:text-white text-lg" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-lg" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-lg" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-lg" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-lg" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-lg" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-lg" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600 text-lg" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-lg" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-lg" /> },
    { name: "Hopscotch", icon: <SiHoppscotch className="text-purple-400 text-lg" /> }
  ];
  
  const handleDownload = () => {
    const resumeUrl = './assets/Tejas_Patil_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Tejas_Patil_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
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

  return (

    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      <motion.div
      initial={{ opacity: 0, y: 50 }} // Start position (invisible, moved down)
      animate={{ opacity: 1, y: 0 }} // End position (visible, normal position)
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      className="container mx-auto p-6"
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
  <div className="container mx-auto flex justify-between items-center p-6 max-w-7xl">
    {/* Logo on the left */}
    <a href="/">
      <h1 className="text-2xl font-bold flex items-center">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-8 h-8 sm:w-10 sm:h-10 mr-2" // Reduced for mobile, normal for larger screens
        />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          EJAS
        </span>
      </h1>
    </a>

    {/* Navigation options on the right */}
    <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">  
      <a href="#about" className="text-white hover:text-purple-400 transition-colors">
        About
      </a>
      <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors">
        Projects
      </a>
      <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors">
        Contact
      </a>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-purple-400 transition-colors"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-400" />
        ) : (
          <MoonIcon className="h-6 w-6 text-purple-400" />
        )}
      </button>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <header className="container mx-auto text-center py-20 px-6 m-0 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
  {/* Left Side - Text Content */}
  <div className="md:w-2/3 text-center md:text-left ml-[-10px] md:ml-[-30px]">
    <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
      isDarkMode 
        ? "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        : "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
    }`}>
      {typedText}
      <span className="animate-pulse">|</span>
    </h2>
    <p className={`text-lg mb-6 ${
  isDarkMode 
    ? "text-gray-300 glow-text-light" 
    : "text-gray-700"
}`}>
  I'm a full-stack developer from <span className="font-semibold text-purple-600 dark:text-purple-400">Kolhapur</span>, passionate about  
  <span className="font-semibold text-purple-600 dark:text-purple-400"> building web applications, AI, and problem-solving.</span>  
</p>

<div className="flex flex-wrap justify-center md:justify-start gap-4">
  <a href="#projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
    View Projects
  </a>
  <a href="#contact" className="px-6 py-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
    Contact Me
  </a>
 
</div>

  </div>

  {/* Right Side - Profile Image */}
  <div className="w-48 h-48 md:w-70 md:h-70 flex-shrink-0">
    <img 
      src={profile} 
      alt="Tejas Patil" 
      className="w-full h-full object-fit rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-600"
    />
  </div>
</header>


      {/* About Me Section */}
{/* About Me Section */}
<section id="about" className="py-20 px-6">
  <div className="container mx-auto max-w-5xl">
    
    {/* Section Heading */}
    <h2 className={`text-4xl font-bold mb-10 text-center ${
      isDarkMode ? "text-white glow-text" : "text-gray-900"
    }`}>
      ABOUT ME
    </h2>

    {/* Content Wrapper */}
    <div className="w-full">
      
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h4 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? "text-white glow-text" : "text-gray-900"
        }`}>
          TEJAS PATIL
        </h4>
        <p className={`text-lg mb-6 ${
  isDarkMode ? "text-gray-300 glow-text-light" : "text-gray-700"
}`}>
  I'm a full-stack developer from <span className="font-semibold text-purple-600 dark:text-purple-400">Kolhapur, India</span>, passionate about  
  <span className="font-semibold text-purple-600 dark:text-purple-400"> React, Node.js, and modern web technologies.</span>  
  I completed my degree from <span className="font-semibold text-purple-600 dark:text-purple-400">Sanjay Ghodawat University</span> with a **7.45 CGPA**.  
  I have a deep interest in <span className="font-semibold text-purple-600 dark:text-purple-400">AI, problem-solving, and DevOps</span>.  
  Besides coding, I'm passionate about <span className="font-semibold text-purple-600 dark:text-purple-400">fitness</span> and love working on innovative projects to enhance my skills.
</p>

        {/* Skills Section */}
        <h4 className={`text-2xl font-bold mb-4 ${
          isDarkMode ? "text-white glow-text" : "text-gray-700"
        }`}>
         MY SKILLS
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-lg shadow-md 
   dark:border-gray-700">
  {skills.map((skill, index) => (
    <div 
      key={index} 
      className={`px-4 py-3 rounded-lg text-center text-sm font-medium shadow-sm 
        flex items-center justify-center gap-2 ${isDarkMode ? "bg-gray-100 dark:bg-gray-700 dark:text-gray-300" : "bg-gray-100 dark:bg-gray-300  dark:text-gray-800"}
        border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-100 transition-colors`}
   
    >
      {skill.icon}
      {skill.name}
    </div>
  ))}
</div>


        {/* Download Resume Button */}
        <div className="mt-8 flex justify-center md:justify-start">
  <button
    onClick={handleDownload}
    className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white transition duration-300 ease-out bg-purple-600 rounded-lg shadow-md overflow-hidden group"
  >
    {/* Gradient Background */}
    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-90 transition-all duration-300 group-hover:opacity-100"></span>

    {/* Bottom Hover Effect */}
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ease-out bg-pink-500 group-hover:h-full rounded-b-lg"></span>

    {/* Button Text */}
    <span className="relative z-10 group-hover:text-white">
      Download Resume
    </span>
  </button>
</div>

      </div>
    </div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 text-center">
      <h2 className={`text-4xl font-bold mb-12 text-center ${
        isDarkMode ? "text-white glow-text" : "text-gray-900"
      }`}>Projects</h2>


      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["frontend", "full-stack"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedCategory === category ? "bg-purple-600" : "bg-gray-700"
            } transition duration-300`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects
          .filter((project) => project.category === selectedCategory)
          .map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg m-2 hover:bg-purple-700 transition"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-gray-600 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-xs text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>

    <section id="contact" className="py-20 px-6">
  <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
    {/* Image on Left Side */}
    <div className="hidden md:block">
      <img 
        src={contact} 
        alt="Contact" 
        className="rounded-lg shadow-lg w-full h-auto object-cover dark:border dark:border-gray-600 dark:shadow-xl/40"
      />
    </div>
    
    {/* Form on Right Side */}
    <div>
      <h2 className={`text-4xl font-bold mb-12 text-center ${
        isDarkMode ? "text-white glow-text" : "text-gray-900"
      }`}>LET'S CONNECT🤝</h2>
      
      <form className="space-y-6">
  <input 
    type="text" 
    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-colors" 
    placeholder="Name"
  />
  <input 
    type="email" 
    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-colors" 
    placeholder="Email" 
  />
  <textarea 
    className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-colors h-32" 
    placeholder="Message"
  ></textarea>
  
  <button 
    className="max-w-max px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white dark:text-gray-100 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold"
  >
    GO 🚀
  </button>
</form>


      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors text-2xl">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/flex_tejas" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors text-2xl">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors text-2xl">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors text-2xl">
          <FaTwitter />
        </a>
      </div>
    </div>
  </div>
</section>
</motion.div>
    </div>
    
  );
};

export default PortfolioLanding;