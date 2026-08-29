import {
  ArrowUpRight,
  Briefcase,
  Code,
  Github,
  Home,
  Linkedin,
  Twitter,
  User,
} from "lucide-react";
import {
  FaBrain,
  FaCubes,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSitemap,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiExpress,
  SiGeeksforgeeks,
  SiGraphql,
  SiLeetcode,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import cafeImg from "../assets/cafe.png";
import cdaImg from "../assets/codementorai.png";
import demopic1Img from "../assets/demopic1.png";
import demopic8Img from "../assets/demo8.png";
import excaliImg from "../assets/excali.png";
import freelanceImg from "../assets/freelance1.png";
import imgtrexImg from "../assets/Imgtrex.png";
import profileImg from "../assets/pic3.png";

export { ArrowUpRight, Briefcase, Code, Github, profileImg };

export const projectsData = [
  {
    title: "MCQ Generator",
    desc: "Generates MCQs from video inputs using LLMs and speech-to-text.",
    thumb: demopic8Img,
    tags: ["TypeScript", "LLama", "Whisper API"],
    github: "https://github.com/Tejascodez/video-mcq-ai.git",
  },
  {
    title: "CodeMentor",
    desc: "AI-powered coding platform with real-time feedback and code execution.",
    thumb: cdaImg,
    tags: ["Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Dcode36/code_mentor_ai",
    demo: "https://code-mentor-ai.vercel.app",
  },
  {
    title: "Chat-BOT",
    desc: "AI-powered chatbot that delivers intelligent real-time conversations using natural language processing.",
    thumb: cdaImg,
    tags: ["TypeScript", "LLama", "Whisper API"],
    github: "https://github.com/Tejascodez/AI-ChatBOT.git",
  },
  {
    title: "Imgtrex Generator",
    desc: "Text-to-image generator using open-source HuggingFace models.",
    thumb: imgtrexImg,
    tags: ["Node.js", "Express", "HuggingFace"],
    github: "https://github.com/Tejascodez/Imgtrex.git",
  },
  {
    title: "Excali Clone",
    desc: "Collaborative browser-based drawing app with real-time diagramming.",
    thumb: excaliImg,
    tags: ["React", "Node.js", "Canvas API"],
    github: "https://github.com/Tejascodez/canvas-draw-app.git",
    demo: "https://canvas-draw-app-zeta.vercel.app",
  },
  {
    title: "King Logistics",
    desc: "Custom logistics website with booking and tracking system. Freelance.",
    thumb: freelanceImg,
    tags: ["React", "CSS", "Node.js"],
    demo: "https://heroic-longma-efd468.netlify.app",
  },
  {
    title: "TBlog Spot",
    desc: "RESTful blog platform with authentication, post management, and comments.",
    thumb: demopic1Img,
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tejascodez/tblog-spot.git",
  },
  {
    title: "TVV Cafe",
    desc: "Modern self-service cafe ordering kiosk inspired by McDonald's digital ordering experience.",
    thumb: cafeImg,
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tejascodez/TVV-Cafe.git",
  },
];

export const experienceData = [
  {
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst Trainee",
    date: "July 2025 - Present",
    current: true,
    desc: "Enterprise-scale full-stack development focusing on Java, Spring Boot, and cloud-based microservices architecture.",
    tags: ["Java", "Spring Boot", "Microservices", "Cloud"],
  },
  {
    company: "IGap Technologies",
    role: "Web Developer Intern",
    date: "2024",
    current: false,
    desc: "Built full-stack features using React and Node.js. Implemented RESTful APIs with MongoDB. Worked through agile sprints and code reviews.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
  },
];

export const toolsData = [
  { name: "DSA", icon: FaBrain, color: "#F15A24" },
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "System Design", icon: FaSitemap, color: "#7C3AED" },
  { name: "Microservices", icon: FaCubes, color: "#0EA5E9" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#A8A8A8" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
  { name: "Express", icon: SiExpress, color: "#A8A8A8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export const profile = {
  name: "Tejas Patil",
  role: "Full-Stack Developer",
  availability: "Available",
  intro:
    "Building practical full-stack products with a strong focus on scalable backend systems, polished frontend experiences, and AI-assisted workflows.",
  shortBio:
    "A software engineer focused on shipping useful products, learning fast, and combining system design with modern web development.",
  stats: [
    { value: "10+", label: "Projects Built" },
    { value: "1+", label: "Years Experience" },
    { value: "∞", label: "Curiosity Level" },
  ],
  socials: [
    { icon: Github, label: "GitHub", href: "https://github.com/Tejascodez" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/tejastp834" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tejasp834",
    },
  ],
  codingProfiles: [
    {
      icon: MdEmail,
      label: "Email",
      href: "mailto:tejastp834@gmail.com",
      color: "#EA4335",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      href: "https://leetcode.com/tejastp834",
      color: "#FFA116",
    },
    {
      icon: SiGeeksforgeeks,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/tejast6ngg/",
      color: "#2F8D46",
    },
  ],
};

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "about", label: "About", icon: User },
  { id: "tools", label: "Tools", icon: Code },
];
