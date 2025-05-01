// src/projectsData.js
import cafe from './assets/cafe.png'; 
import disneyclone from './assets/disney.png';
import simon from './assets/simon.png';
import soulclone from './assets/souled.png'
import gemini from './assets/gemini.png'
import portfolio from './assets/portfolio.png'
import ecom from './assets/firstecom.png'
export const projects = [
  {
    category: "frontend",
    name: "Portfolio",
    description: "A portfolio website made using react.",
    technologies: ["React", "node.js" , "nodemailer" , "UI/UX"],
    githubLink: "https://github.com/username/personal-tracking-system",
    demoLink: "https://adorable-malasada-34094b.netlify.app/",
    image: portfolio ,
    features: ["playing games", "having fun", "memory game"]
  },


    {
      category: "frontend",
      name: "Cafe Kisoke Machine",
      description: "A idea derived from the machines present in cafes, this machine is designed to make coffee, tea, and hot chocolate.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      githubLink: "https://github.com/Tejascodez/TVV-Cafe.git",
      demoLink: "https://gilded-gnome-7bfb02.netlify.app/",
      image: cafe,
      features: ["to make orders", " to track orders", " to make payments"]
    },
    {
      category: "full-stack",
      name: "AI Coding Platform",
      description: "An interactive coding challenge platform with AI-powered mentorship.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      githubLink: "https://github.com/username/ai-coding-platform",
      demoLink: "https://ai-coding-platform.vercel.app",
      image: "/images/ai-platform.png",
      features: ["AI code analysis", "Interactive challenges", "Performance tracking"]
    },
    {
      category: "frontend",
      name: "Disney Clone",
      description: "A  frontend project which i made during learning phase, this project is a clone of disney+ website.",
      technologies: ["React", "Firebase"],
      githubLink: "https://github.com/Tejascodez/disney-clone.git",
      demoLink: "https://adorable-malasada-34094b.netlify.app/",
      image: disneyclone ,
      features: ["Goal tracking", "Visualization tools", "Progress analytics"]
    },
 
    {
      category: "frontend",
      name: "Souled Store Clone",
      description: "A clone of souled store website.This is project is made using react.",
      technologies: ["React"],
      githubLink: "https://github.com/Tejascodez/soul-clone.git",
      demoLink: "https://resplendent-capybara-9fb345.netlify.app/",
      image: soulclone ,
      features: ["soul-store clone", "clone website", "demo website"]
    },
    {
      category: "frontend",
      name: "Gemini Clone",
      description: "A Gemini Clone using api of Gemini.",
      technologies: ["React", "Gemini API"],
      githubLink: "https://github.com/username/personal-tracking-system",
      demoLink: "gemini-clone-ten-kappa.vercel.app",
      image: gemini ,
      features: ["Gemini clone", "chat-app", "messaging app"]
    },
    {
      category: "frontend",
      name: "Simon Game",
      description: "A Simple simon game which i made during my learning phase.",
      technologies: ["html", "css" , "javascript"],
      githubLink: "https://github.com/username/personal-tracking-system",
      demoLink: "https://adorable-malasada-34094b.netlify.app/",
      image: simon ,
      features: ["playing games", "having fun", "memory game"]
    },
    {
      category: "frontend",
      name: "First Ecome Website",
      description: "This is my first ecom website using react that i made during internship.It was a internship project.",
      technologies: ["React", "Node.js","axios", "MockAPI"],
      githubLink: "https://github.com/username/freight-management",
      demoLink: "https://freight-management-demo.vercel.app",
      image: ecom,
      features: ["to make orders", " to track orders", " to make payments"]
    },

    {
      category: "full-stack",
      name: "Air Bnb Clone",
      description: "Air bnb clone which i made during my learning peroid.I used mern stack with mapbox api with user freindly ui design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Mapbox API"],
      githubLink: "https://github.com/username/ai-coding-platform",
      demoLink: "https://ai-coding-platform.vercel.app",
      image: "/images/ai-platform.png",
      features: ["AI code analysis", "Interactive challenges", "Performance tracking"]
    },
    
  ];