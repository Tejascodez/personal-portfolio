import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaPlay, FaTimes } from "react-icons/fa";
import { Github, Globe, Video } from 'lucide-react';

// Assets
import img from '../assets/portfolio.png';
import img1 from "../assets/souled.png";
import img2 from '../assets/disney.png';
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo4 from "../assets/demo4.mp4";
import demopic4 from "../assets/demo4.png";
import demo3 from "../assets/demo3.mp4";
import demopic3 from "../assets/demopic3.png";
import demopic1 from "../assets/demopic1.png";
import demopic2 from "../assets/demopic2.png";
import freelance from "../assets/freelance1.png";
import cda from  "../assets/codementorai.png";
import imgtrex from '../assets/Imgtrex.png';
import imgtrexDemo from '../assets/ImgtrexDemo.mp4';
import dempic8 from '../assets/demo8.png';
import excali from '../assets/excali.png';

/* ────────────────────────────────────────────────
   Styles — inherit CSS vars from PortfolioLanding
   (--bg, --text, --muted, --border, --orange)
──────────────────────────────────────────────── */
const ProjectStyles = () => (
  <style>{`
    /* ── Section layout ── */
    .pj-section {
      padding: 96px 0;
      border-top: 1px solid var(--border);
      position: relative;
      width: 100%;
    }

    /* ── Section tag header row ── */
    .pj-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 56px;
    }
    .pj-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 11px;
      letter-spacing: .22em; text-transform: uppercase;
      color: var(--orange);
    }
    .pj-header-rule { flex:1; height:1px; background:var(--border); }
    .pj-section-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 300; font-size: 11px;
      letter-spacing: .15em; color: var(--muted);
    }

    /* ── Tabs ── */
    .pj-tabs {
      display: flex;
      justify-content: center;
      gap: 32px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    .pj-tab {
      background: transparent; border: none;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 14px;
      letter-spacing: .15em; text-transform: uppercase;
      color: var(--muted); cursor: pointer;
      padding-bottom: 6px;
      border-bottom: 2px solid transparent;
      transition: color .2s, border-color .2s;
    }
    .pj-tab:hover { color: var(--orange); }
    .pj-tab.active {
      color: var(--text);
      border-bottom-color: var(--orange);
    }

    /* ── Responsive Grid ── */
    .pj-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 32px;
    }

    /* ── Project Card ── */
    .pj-card {
      border: 1px solid var(--border);
      display: flex; flex-direction: column;
      background: transparent;
      transition: border-color .3s, transform .3s;
      position: relative;
    }
    .pj-card:hover { border-color: var(--orange); transform: translateY(-4px); }

    /* Image & Preview Overlay */
    .pj-card-img-wrap {
      position: relative; width: 100%;
      aspect-ratio: 16/9; overflow: hidden;
      border-bottom: 1px solid var(--border);
      background: #111;
    }
    .pj-card-img {
      width: 100%; height: 100%;
      object-fit: cover; opacity: 0.85;
      transition: transform .5s, opacity .3s;
    }
    .pj-card:hover .pj-card-img { transform: scale(1.05); opacity: 0.4; }

    .pj-card-overlay {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center; gap: 16px;
      opacity: 0; transition: opacity .3s;
      backdrop-filter: blur(3px);
    }
    .pj-card:hover .pj-card-overlay { opacity: 1; }

    .pj-overlay-btn {
      width: 44px; height: 44px;
      border-radius: 50%; background: var(--orange);
      color: #fff; border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      text-decoration: none; transform: translateY(10px);
      transition: transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background .2s, color .2s;
    }
    .pj-card:hover .pj-overlay-btn { transform: translateY(0); }
    .pj-overlay-btn:hover { background: #fff; color: var(--orange); transform: translateY(-2px) scale(1.05); }

    /* Card Body */
    .pj-card-body {
      padding: 24px; display: flex; flex-direction: column; flex: 1;
    }
    .pj-card-client {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
      font-size: 10px; letter-spacing: .15em; text-transform: uppercase;
      color: var(--orange); margin-bottom: 6px;
    }
    .pj-card-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
      font-size: 22px; line-height: 1.1; text-transform: uppercase;
      color: var(--text); margin-bottom: 12px;
    }
    .pj-card-desc {
      font-family: 'Barlow', sans-serif; font-weight: 300;
      font-size: 14px; line-height: 1.6; color: var(--muted);
      margin-bottom: 24px; flex: 1;
    }

    /* Tech Stack Pills */
    .pj-card-tech { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
    .pj-card-tech span {
      font-family: 'Barlow Condensed', sans-serif; font-size: 10px;
      letter-spacing: .1em; text-transform: uppercase;
      padding: 4px 10px; border: 1px solid var(--border); color: var(--muted);
    }

    /* Card Footer Links (Text versions) */
    .pj-card-footer {
      display: flex; gap: 16px; border-top: 1px solid var(--border); padding-top: 16px;
    }
    .pj-link {
      display: flex; align-items: center; gap: 6px;
      font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
      font-size: 11px; letter-spacing: .15em; text-transform: uppercase;
      color: var(--text); text-decoration: none; cursor: pointer;
      background: none; border: none; padding: 0; transition: color .2s;
    }
    .pj-link:hover { color: var(--orange); }

    /* ── Modal ── */
    .pj-modal-backdrop {
      position: fixed; inset: 0; background: rgba(0,0,0,0.85);
      backdrop-filter: blur(4px); z-index: 100;
      display: flex; align-items: center; justify-content: center; padding: 24px;
    }
    .pj-modal {
      width: 100%; max-width: 900px; background: var(--bg);
      border: 1px solid var(--border); display: flex; flex-direction: column;
    }
    .pj-modal-header {
      padding: 16px 24px; border-bottom: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
    }
    .pj-modal-title {
      font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
      font-size: 16px; letter-spacing: .1em; text-transform: uppercase; color: var(--text);
    }
    .pj-modal-close {
      background: transparent; border: none; color: var(--muted);
      cursor: pointer; transition: color .2s;
    }
    .pj-modal-close:hover { color: var(--orange); }
    .pj-modal-body {
      position: relative; width: 100%; aspect-ratio: 16/9; background: #000;
    }
    .pj-modal-video { width: 100%; height: 100%; outline: none; }
  `}</style>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [videoModal, setVideoModal] = useState({ isOpen: false, video: null, title: null });
  
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && videoModal.isOpen) {
        setVideoModal({ isOpen: false, video: null, title: null });
      }
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [videoModal.isOpen]);
  
  // Data arrays 
  const frontendProjects = [
    {
      id: "fe-1",
      title: "CodeMentor AI",
      description: "Platform where users can improve their problem-solving skills with the help of AI feedback and code execution.",
      technologies: ["Node.js", "Express", "MongoDB", "Clerk", "Gemini API"],
      image: cda,
      github: "https://github.com/Dcode36/code_mentor_ai",
      demo: "https://code-mentor-ai.vercel.app/"
    },
    {
      id: "fe-2",
      title: "Modern E-commerce",
      description: "A fully responsive e-commerce website with dynamic product filtering, cart functionality, and user authentication.",
      technologies: ["React", "CSS", "Firebase"],
      image: img1,
      github: "https://github.com/Tejascodez/soul-clone.git",
      demo: "https://resplendent-capybara-9fb345.netlify.app/"
    },
    {
      id: "fe-3",
      title: "Disney+ Clone",
      description: "Interactive clone application with enhanced UI of Disney+ and customizable dynamic alerts.",
      technologies: ["React.js", "JavaScript", "Firebase"],
      image: img2,
      github: "https://github.com/Tejascodez/disney-clone.git",
      demo: "https://adorable-malasada-34094b.netlify.app/"
    },
    {
      id: "fe-4",
      title: "Portfolio Website",
      description: "A creative portfolio website showcasing projects and skills with smooth animations and interactive elements.",
      technologies: ["React", "Framer Motion", "Animation"],
      image: img,
      github: "https://github.com/Tejascodez/porfoilio.git",
      demo: "https://tejas-portofolio.netlify.app/"
    }
  ];
  
  const backendProjects = [
    {
      id: "be-1",
      title: "AI MCQ Generator",
      description: "Generates multiple-choice questions from video inputs using LLMs and speech-to-text processing.",
      technologies: ["TypeScript", "LLama", "Node.js", "Whisper API"],
      image: dempic8,
      github: "https://github.com/Tejascodez/video-mcq-ai.git"
    },
    {
      id: "be-2",
      title: "Imgtrex AI Generator",
      description: "Generates images based on text prompts utilizing open-source models with a user-friendly UI.",
      technologies: ["Node.js", "Express", "MongoDB", "HuggingFace"],
      image: imgtrex,
      github: "https://github.com/Tejascodez/Imgtrex.git",
      demoVideo: imgtrexDemo
    },
    {
      id: "be-3",
      title: "TBlog Spot",
      description: "RESTful API for a blog platform with user authentication, post management, and comment functionality.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: demopic1,
      github: "https://github.com/Tejascodez/tblog-spot.git",
      demoVideo: demo2
    },
    {
      id: "be-4",
      title: "Ebook Store Backend",
      description: "Backend architecture handling ebook rentals and purchases, including role-based access control.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: demopic2,
      github: "https://github.com/Tejascodez/Realm.git",
      demoVideo: demo1
    },
    {
      id: "be-5",
      title: "E-commerce API",
      description: "Scalable backend for an e-commerce platform with product catalog, order processing, and payment integration.",
      technologies: ["Node.js", "Express", "Clerk"],
      image: demopic3,
      github: "https://github.com/Tejascodez/E-com.git",
      demoVideo: demo3
    },
    {
      id: "be-6",
      title: "UI Frontend Library",
      description: "A library of reusable UI components built strictly for performance and smooth micro-interactions.",
      technologies: ["TypeScript", "Shadcn", "Tailwind CSS"],
      image: demopic4,
      github: "https://github.com/Tejascodez/ui-library.git",
      demoVideo: demo4
    }
  ];
  
  const freelanceProjects = [
    {
      id: "fl-1",
      title: "King Logistics",
      client: "King Logistics & Solutions",
      description: "Custom-built responsive website for a local Logistics service featuring a booking and tracking system.",
      technologies: ["React", "CSS", "Node.js"],
      image: freelance,
      demo: "https://heroic-longma-efd468.netlify.app/",
      completedDate: "March 2025"
    }
  ];
  
  // Select active data
  const getCurrentProjects = () => {
    switch(activeTab) {
      case "frontend": return frontendProjects;
      case "backend": return backendProjects;
      case "freelance": return freelanceProjects;
      default: return frontendProjects;
    }
  };

  return (
    <section id="projects" className="pj-section" ref={ref}>
      <ProjectStyles />

      <div className="pf-container">
        {/* ── Header row ── */}
        <div className="pj-header">
          <span className="pj-tag">Selected Works</span>
          <div className="pj-header-rule" />
          <span className="pj-section-num">03</span>
        </div>

        {/* ── Tabs ── */}
        <div className="pj-tabs">
          <button 
            className={`pj-tab ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => setActiveTab("frontend")}
          >Frontend</button>
          <button 
            className={`pj-tab ${activeTab === "backend" ? "active" : ""}`}
            onClick={() => setActiveTab("backend")}
          >Full Stack / Backend</button>
          <button 
            className={`pj-tab ${activeTab === "freelance" ? "active" : ""}`}
            onClick={() => setActiveTab("freelance")}
          >Freelance</button>
        </div>

        {/* ── Projects Grid ── */}
        <motion.div 
          layout
          className="pj-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {getCurrentProjects().map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="pj-card"
              >
                {/* Image & Overlay Previews */}
                <div className="pj-card-img-wrap">
                  <img src={project.image} alt={project.title} className="pj-card-img" />
                  
                  <div className="pj-card-overlay">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="pj-overlay-btn" title="Live Website">
                        <Globe size={18} />
                      </a>
                    )}
                    {project.demoVideo && (
                      <button 
                        onClick={() => setVideoModal({ isOpen: true, video: project.demoVideo, title: project.title })}
                        className="pj-overlay-btn" title="Watch Demo Video"
                      >
                        <FaPlay size={14} style={{ marginLeft: '2px' }} />
                      </button>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="pj-overlay-btn" title="Source Code">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Info */}
                <div className="pj-card-body">
                  {project.client && <div className="pj-card-client">Client: {project.client}</div>}
                  <h3 className="pj-card-title">{project.title}</h3>
                  <p className="pj-card-desc">{project.description}</p>
                  
                  <div className="pj-card-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>

                  {/* Text Links Footer */}
                  <div className="pj-card-footer">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="pj-link">
                        <Github size={13} /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="pj-link">
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </a>
                    )}
                    {project.demoVideo && (
                      <button onClick={() => setVideoModal({ isOpen: true, video: project.demoVideo, title: project.title })} className="pj-link">
                        <Video size={13} /> Watch Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {videoModal.isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pj-modal-backdrop"
            onClick={() => setVideoModal({ isOpen: false, video: null, title: null })}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="pj-modal"
              onClick={e => e.stopPropagation()}
            >
              <div className="pj-modal-header">
                <span className="pj-modal-title">{videoModal.title} — Preview</span>
                <button 
                  className="pj-modal-close"
                  onClick={() => setVideoModal({ isOpen: false, video: null, title: null })}
                >
                  <FaTimes size={18} />
                </button>
              </div>
              <div className="pj-modal-body">
                <video src={videoModal.video} className="pj-modal-video" controls autoPlay />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;