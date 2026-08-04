import React, { createContext, useContext, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Code,
  Github,
  Home,
  Linkedin,
  Moon,
  Sun,
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
import profileImg from "./assets/pic3.png";
import cdaImg from "./assets/codementorai.png";
import cafeImg from "./assets/cafe.png";
import imgtrexImg from "./assets/Imgtrex.png";
import excaliImg from "./assets/excali.png";
import freelanceImg from "./assets/freelance1.png";
import demopic1Img from "./assets/demopic1.png";
import demopic8Img from "./assets/demo8.png";
import { MdEmail } from "react-icons/md";

const THEME = {
  dark: {
    page: "#14100e",
    surface: "#1b1512",
    card: "#f4efe8",
    softCard: "#201916",
    border: "rgba(255,255,255,0.08)",
    text: "#fffaf4",
    muted: "#b2a79d",
    mutedStrong: "#7f746a",
    accent: "#ff7a2f",
    accentSoft: "#2f1f17",
    lime: "#d8ff3e",
    shadow: "0 30px 80px rgba(0,0,0,0.28)",
  },
  light: {
    page: "#f4eee7",
    surface: "#fff9f2",
    card: "#ffffff",
    softCard: "#efe5db",
    border: "rgba(20,16,14,0.10)",
    text: "#17110f",
    muted: "#695f57",
    mutedStrong: "#91857c",
    accent: "#ef6c24",
    accentSoft: "#ffe5d2",
    lime: "#c8ff42",
    shadow: "0 26px 70px rgba(36,24,18,0.12)",
  },
};

const ThemeCtx = createContext(null);

const projectsData = [
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

const experienceData = [
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

const toolsData = [
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

const profile = {
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

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "about", label: "About", icon: User },
  { id: "tools", label: "Tools", icon: Code },
];

function useTheme() {
  return useContext(ThemeCtx);
}

function GlobalStyle() {
  const { isDark, theme } = useTheme();

  return (
    <style>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, body, #root { margin: 0; min-height: 100%; }
        body {
          font-family: "Outfit", sans-serif;
          background: ${theme.page};
          color: ${theme.text};
        }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        ::selection {
          background: ${isDark ? "rgba(255,122,47,0.24)" : "rgba(239,108,36,0.18)"};
        }
      `}
    </style>
  );
}

function FloatingNav() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <div
      style={{
        position: "sticky",
        top: 20,
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        marginBottom: 28,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          borderRadius: 999,
          border: `1px solid ${theme.border}`,
          background: isDark ? "rgba(24,19,16,0.84)" : "rgba(255,249,242,0.88)",
          backdropFilter: "blur(16px)",
          boxShadow: theme.shadow,
        }}
      >
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              width: 42,
              height: 42,
              display: "grid",
              placeItems: "center",
              borderRadius: 14,
              color: theme.muted,
              background: "transparent",
              transition: "0.2s ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = theme.accentSoft;
              event.currentTarget.style.color = theme.accent;
              event.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "transparent";
              event.currentTarget.style.color = theme.muted;
              event.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label={label}
            title={label}
          >
            <Icon size={18} strokeWidth={2} />
          </a>
        ))}
        <div
          style={{
            width: 1,
            height: 24,
            background: theme.border,
            marginInline: 2,
          }}
        />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
          style={{
            width: 42,
            height: 42,
            display: "grid",
            placeItems: "center",
            borderRadius: 14,
            border: "none",
            background: "transparent",
            color: theme.muted,
          }}
        >
          {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>
      </nav>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  const { theme } = useTheme();

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          borderRadius: 999,
          border: `1px solid ${theme.border}`,
          color: theme.accent,
          fontSize: 12,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(2rem, 5vw, 3.4rem)",
          lineHeight: 0.94,
          letterSpacing: "-0.05em",
        }}
      >
        {title}
      </h2>
      {description ? (
        <p
          style={{
            margin: "14px 0 0",
            maxWidth: 720,
            color: theme.muted,
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ProfileCard() {
  const { theme, isDark } = useTheme();

  return (
    <aside
      style={{
        position: "relative",
        background: theme.card,
        color: isDark ? "#15110f" : theme.text,
        borderRadius: 34,
        padding: 24,
        boxShadow: theme.shadow,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -34,
          left: -28,
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: `4px dashed ${theme.accent}`,
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "relative",
          width: "100%",
          borderRadius: 28,
          overflow: "hidden",
          background: "#ff5f12",
          aspectRatio: "1 / 1.15",
          marginBottom: 22,
        }}
      >
        <img
          src={profileImg}
          alt={profile.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 3vw, 3rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.06em",
          }}
        >
          {profile.name}
        </h3>
        <p
          style={{
            margin: "12px 0 0",
            color: "#5f5650",
            fontSize: 16,
            lineHeight: 1.7,
          }}
        >
          {profile.shortBio}
        </p>
      </div>

      <div
        style={{
          marginTop: 24,
          marginBottom: 22,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: theme.accent,
            color: "#fff",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 14px 32px rgba(255,122,47,0.35)",
          }}
        >
          <Code size={24} strokeWidth={2.4} />
        </div>
      </div>

      <div
        style={{
          borderTop: `1px solid rgba(21,17,15,0.10)`,
          paddingTop: 18,
          display: "flex",
          gap: 12,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[...profile.socials, ...profile.codingProfiles].map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              title={item.label}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                background: "rgba(21,17,15,0.05)",
                color: item.color || "#17110f",
                border: "1px solid rgba(21,17,15,0.08)",
                transition: "transform 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-3px)";
                event.currentTarget.style.background = "rgba(21,17,15,0.10)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.background = "rgba(21,17,15,0.05)";
              }}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

function HeroPanel() {
  const { theme, isDark } = useTheme();

  return (
    <section id="home">
      <SectionTitle eyebrow="Portfolio" title="Tejasss" />

      <div
        style={{
          display: "grid",
          gap: 28,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(3.8rem, 10vw, 7.8rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.08em",
              textTransform: "uppercase",
            }}
          >
            Software
          </h1>
          <div
            style={{
              fontSize: "clamp(3.8rem, 10vw, 7.8rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.08em",
              textTransform: "uppercase",
              fontWeight: 900,
              color: isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.16)",
            }}
          >
            Engineer
          </div>
        </div>

        <p
          style={{
            margin: 0,
            maxWidth: 700,
            color: theme.muted,
            fontSize: 18,
            lineHeight: 1.8,
          }}
        >
          {profile.intro}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 18,
          }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontSize: "clamp(3rem, 7vw, 4.8rem)",
                  fontWeight: 900,
                  lineHeight: 0.92,
                  letterSpacing: "-0.06em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  marginTop: 8,
                  color: theme.mutedStrong,
                  fontSize: 14,
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 20,
          }}
        >
          <div
            style={{
              minHeight: 220,
              borderRadius: 28,
              padding: 24,
              background: theme.accent,
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(255,255,255,0.16), transparent 36%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 60%)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.24)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 34,
                }}
              >
                <Briefcase size={22} strokeWidth={2.2} />
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                  marginBottom: 12,
                }}
              >
                Dynamic products,
                <br />
                practical systems.
              </div>
              <div style={{ maxWidth: 360, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                From full-stack apps to AI experiments and real-world client work, the focus stays on useful, production-minded execution.
              </div>
            </div>
          </div>

          <div
            style={{
              minHeight: 220,
              borderRadius: 28,
              padding: 24,
              background: theme.lime,
              color: "#18130f",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.25,
                background:
                  "linear-gradient(115deg, transparent 10%, rgba(24,19,15,0.16) 12%, transparent 14%, transparent 24%, rgba(24,19,15,0.16) 26%, transparent 28%)",
                backgroundSize: "220px 220px",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 18,
                  border: "1px solid rgba(24,19,15,0.14)",
                  display: "grid",
                  placeItems: "center",
                  marginBottom: 34,
                }}
              >
                <Code size={22} strokeWidth={2.2} />
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  marginBottom: 12,
                }}
              >
                React, Node.js,
                <br />
                Java, System Design.
              </div>
              <div style={{ maxWidth: 320, lineHeight: 1.7, color: "rgba(24,19,15,0.74)" }}>
                Strong interest in scalable architecture, backend engineering, and sharp frontend delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { theme } = useTheme();

  return (
    <section id="projects" style={{ marginTop: 72 }}>
      <SectionTitle
        eyebrow="Selected Work"
        title="Projects that mix product thinking with engineering."
        description="A mix of AI experiments, full-stack products, and freelance builds using the same portfolio data already in your page."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {projectsData.map((project) => (
          <article
            key={project.title}
            style={{
              borderRadius: 28,
              overflow: "hidden",
              border: `1px solid ${theme.border}`,
              background: theme.softCard,
              boxShadow: theme.shadow,
            }}
          >
            <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
              <img
                src={project.thumb}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div style={{ padding: 22 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 24,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {project.title}
                </h3>
                <div style={{ display: "flex", gap: 8 }}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      style={iconLinkStyle(theme)}
                    >
                      <Github size={16} />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} demo`}
                      style={iconLinkStyle(theme)}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : null}
                </div>
              </div>
              <p
                style={{
                  margin: 0,
                  color: theme.muted,
                  lineHeight: 1.7,
                  minHeight: 82,
                }}
              >
                {project.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 18,
                }}
              >
                {project.tags.map((tag) => (
                  <span key={tag} style={tagStyle(theme)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      style={{
        marginTop: 72,
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 22,
      }}
    >
      <div
        style={{
          borderRadius: 30,
          border: `1px solid ${theme.border}`,
          background: theme.softCard,
          padding: 28,
          boxShadow: theme.shadow,
        }}
      >
        <SectionTitle
          eyebrow="Experience"
          title="Professional work shaped by product delivery."
          description="Your existing experience entries are preserved and re-presented in a more structured editorial block."
        />

        <div style={{ display: "grid", gap: 18 }}>
          {experienceData.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              style={{
                padding: 20,
                borderRadius: 24,
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${theme.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.04em" }}>
                    {item.role}
                  </div>
                  <div style={{ color: theme.accent, fontWeight: 600 }}>{item.company}</div>
                </div>
                <div style={{ textAlign: "right", color: theme.muted }}>
                  <div>{item.date}</div>
                  {item.current ? (
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: 8,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: theme.accentSoft,
                        color: theme.accent,
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Current
                    </span>
                  ) : null}
                </div>
              </div>
              <p style={{ margin: "0 0 16px", color: theme.muted, lineHeight: 1.7 }}>{item.desc}</p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {item.tags.map((tag) => (
                  <span key={tag} style={tagStyle(theme)}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: 22,
        }}
      >
        <div
          style={{
            borderRadius: 30,
            border: `1px solid ${theme.border}`,
            background: theme.softCard,
            padding: 28,
            boxShadow: theme.shadow,
          }}
        >
          <SectionTitle eyebrow="About" title={profile.role} />
          <p style={{ margin: 0, color: theme.muted, lineHeight: 1.8 }}>{profile.shortBio}</p>
          <div
            style={{
              marginTop: 18,
              padding: 18,
              borderRadius: 22,
              background: theme.accentSoft,
              color: theme.text,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Current focus</div>
            <div style={{ color: theme.muted, lineHeight: 1.7 }}>
              Java, Spring Boot, microservices, React interfaces, and practical AI product workflows.
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: 30,
            border: `1px solid ${theme.border}`,
            background: theme.softCard,
            padding: 28,
            boxShadow: theme.shadow,
          }}
        >
          <SectionTitle eyebrow="Connect" title="Find me online" />
          <div style={{ display: "grid", gap: 12 }}>
            {profile.socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={profileRowStyle(theme)}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    <span style={profileBadgeStyle(theme)}>
                      <Icon size={17} />
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
            {profile.codingProfiles.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={profileRowStyle(theme)}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    <span style={{ ...profileBadgeStyle(theme), color: item.color }}>
                      <Icon size={17} />
                    </span>
                    {item.label}
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const { theme } = useTheme();

  return (
    <section id="tools" style={{ marginTop: 72, marginBottom: 60 }}>
      <SectionTitle
        eyebrow="Toolbox"
        title="Skills and technologies used across the work."
        description="Your existing stack is kept as-is and reorganized into a compact grid with stronger visual contrast."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16,
        }}
      >
        {toolsData.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.name}
              style={{
                borderRadius: 24,
                border: `1px solid ${theme.border}`,
                background: theme.softCard,
                padding: "20px 18px",
                minHeight: 120,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: theme.shadow,
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 16,
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(255,255,255,0.04)",
                  color: tool.color,
                }}
              >
                <Icon size={24} />
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em" }}>{tool.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function iconLinkStyle(theme) {
  return {
    width: 36,
    height: 36,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    color: theme.text,
    border: `1px solid ${theme.border}`,
    background: "rgba(255,255,255,0.02)",
  };
}

function tagStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 10px",
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    color: theme.muted,
    fontSize: 12,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  };
}

function profileRowStyle(theme) {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 18,
    border: `1px solid ${theme.border}`,
    color: theme.text,
    background: "rgba(255,255,255,0.02)",
  };
}

function profileBadgeStyle(theme) {
  return {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    border: `1px solid ${theme.border}`,
    color: theme.accent,
  };
}

export default function PortfolioLanding() {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(
    () => ({
      isDark,
      theme: isDark ? THEME.dark : THEME.light,
      toggleTheme: () => setIsDark((current) => !current),
    }),
    [isDark]
  );

  const { theme } = value;

  return (
    <ThemeCtx.Provider value={value}>
      <GlobalStyle />
      <div
        style={{
          minHeight: "100vh",
          background: `radial-gradient(circle at top left, ${isDark ? "rgba(255,122,47,0.11)" : "rgba(239,108,36,0.09)"}, transparent 28%), ${theme.page}`,
          color: theme.text,
        }}
      >
        <div
          style={{
            maxWidth: 1380,
            margin: "0 auto",
            padding: "20px 18px 40px",
          }}
        >
          <FloatingNav />

          <main
            style={{
              display: "grid",
              gridTemplateColumns: "380px minmax(0, 1fr)",
              gap: 26,
              alignItems: "start",
            }}
          >
            <div style={{ position: "sticky", top: 112 }}>
              <ProfileCard />
            </div>

            <div>
              <HeroPanel />
              <ProjectsSection />
              <AboutSection />
              <ToolsSection />
            </div>
          </main>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 1100px) {
            main {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 860px) {
            #about {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 760px) {
            main {
              gap: 20px !important;
            }

            section {
              scroll-margin-top: 100px;
            }
          }

          @media (max-width: 680px) {
            #home > div > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 540px) {
            body {
              overflow-x: hidden;
            }
          }
        `}
      </style>
    </ThemeCtx.Provider>
  );
}
