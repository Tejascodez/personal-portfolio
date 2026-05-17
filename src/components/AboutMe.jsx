import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker, FaCode, FaChevronDown } from "react-icons/fa";
import {
  SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript,
  SiTailwindcss, SiBootstrap, SiPostman, SiGraphql, SiPostgresql,
  SiLeetcode, SiHackerrank, SiCodeforces, SiGeeksforgeeks,
  SiCodecov, SiRocket,
  SiSpringboot, SiHibernate, SiRedis, SiApachekafka
} from "react-icons/si";
import profile from '../assets/profile.jpg';

/* ────────────────────────────────────────────────
   Styles — inherit CSS vars from PortfolioLanding
──────────────────────────────────────────────── */
const SectionStyles = () => (
  <style>{`
    /* ── Section layout ── */
    .ab-section {
      padding: 96px 0;
      border-top: 1px solid var(--border);
      position: relative;
      width: 100%;
    }

    /* ── Centered Container ── */
    .ab-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* ── Section tag header row ── */
    .ab-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 80px;
    }
    .ab-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 11px;
      letter-spacing: .22em; text-transform: uppercase;
      color: var(--orange);
    }
    .ab-header-rule { flex:1; height:1px; background:var(--border); }
    .ab-section-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 300; font-size: 11px;
      letter-spacing: .15em; color: var(--muted);
    }

    /* ── Two-column grid ── */
    .ab-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px; /* Increased for better spacing */
      align-items: start;
    }
    @media (max-width: 860px) {
      .ab-grid { grid-template-columns: 1fr; gap: 56px; }
    }

    /* ── Photo frame ── */
    .ab-photo-wrap {
      position: relative;
      display: inline-block;
    }
    .ab-photo-frame {
      width: 400px; height: 300px; /* Increased image size */
      overflow: hidden;
      border: 1px solid var(--border);
      position: relative;
    }
    .ab-photo-frame img {
      width: 100%; height: 100%;
      object-fit: cover; display: block;
    }
    .ab-photo-wrap::before,
    .ab-photo-wrap::after {
      content: '';
      position: absolute;
      width: 18px; height: 18px;
      border-color: var(--orange);
      border-style: solid;
    }
    .ab-photo-wrap::before {
      top: -6px; left: -6px;
      border-width: 2px 0 0 2px;
    }
    .ab-photo-wrap::after {
      bottom: -6px; right: -6px;
      border-width: 0 2px 2px 0;
    }

    .ab-status {
      position: absolute;
      bottom: -10px; right: -10px;
      width: 28px; height: 28px;
      background: #1a1a1a;
      border: 1px solid var(--border);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }
    .ab-status-dot {
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #22c55e;
      animation: pulse-green 2s ease-in-out infinite;
    }
    @keyframes pulse-green {
      0%,100% { opacity:1; transform:scale(1); }
      50% { opacity:.6; transform:scale(1.25); }
    }

    /* ── Name + role block ── */
    .ab-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900; font-size: clamp(36px,5vw,56px);
      line-height: .9; letter-spacing: -.01em; text-transform: uppercase;
      color: var(--text); margin-bottom: 12px;
    }
    .ab-role {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 400; font-size: 14px;
      letter-spacing: .18em; text-transform: uppercase;
      color: var(--orange); margin-bottom: 32px;
    }
    .ab-bio {
      font-family: 'Barlow', sans-serif;
      font-weight: 300; font-size: 15px; line-height: 1.8;
      color: var(--muted); max-width: 420px; margin-bottom: 32px;
    }

    /* ── Profiles Dropdown ── */
    .ab-profiles-wrap {
      position: relative;
      display: inline-block;
      margin-bottom: 36px;
      z-index: 20;
    }
    .ab-profiles-btn {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 12px;
      letter-spacing: .15em; text-transform: uppercase;
      display: flex; align-items: center; gap: 10px;
      padding: 12px 20px; border: 1px solid var(--border);
      color: var(--text); background: transparent;
      cursor: pointer; transition: border-color .2s, color .2s;
    }
    .ab-profiles-btn:hover {
      border-color: var(--orange); color: var(--orange);
    }
    .ab-profiles-dropdown {
      position: absolute;
      top: 100%; left: 0;
      margin-top: 8px;
      background: var(--bg);
      border: 1px solid var(--border);
      padding: 8px 0;
      min-width: 200px;
      opacity: 0; visibility: hidden;
      transform: translateY(10px);
      transition: all .2s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    .ab-profiles-wrap:hover .ab-profiles-dropdown {
      opacity: 1; visibility: visible;
      transform: translateY(0);
    }
    .ab-profile-link {
      display: flex; align-items: center; gap: 12px;
      padding: 10px 20px;
      text-decoration: none;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 12px;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--muted);
      transition: color .2s, background .2s;
    }
    .ab-profile-link:hover {
      color: var(--orange);
      background: rgba(255,255,255,0.03);
    }

    /* ── Interest tags ── */
    .ab-interests { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 36px; }
    .ab-interest-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 11px;
      letter-spacing: .14em; text-transform: uppercase;
      padding: 6px 14px; border: 1px solid var(--border);
      color: var(--muted); background: transparent;
      transition: border-color .18s, color .18s;
      cursor: default;
    }
    .ab-interest-tag:hover { border-color: var(--orange); color: var(--orange); }

    /* ── Mini stat row ── */
    .ab-stats { display: flex; gap: 36px; flex-wrap: wrap; }
    .ab-stat-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900; font-size: 36px; line-height:1;
      color: var(--text);
    }
    .ab-stat-lbl {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 400; font-size: 11px;
      letter-spacing: .15em; text-transform: uppercase;
      color: var(--muted); margin-top: 6px;
    }
    .ab-stat-divider { width:1px; background: var(--border); align-self: stretch; }

    /* ── Skills side heading ── */
    .ab-skills-heading {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900; font-size: clamp(28px,4vw,44px);
      line-height: .92; letter-spacing: -.01em; text-transform: uppercase;
      color: var(--text); margin-bottom: 6px;
    }
    .ab-skills-sub {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 400; font-size: 13px;
      letter-spacing: .16em; text-transform: uppercase;
      color: var(--muted); margin-bottom: 40px;
    }

    /* ── Skill card grid ── */
    .ab-skills-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
    @media (max-width: 600px) {
      .ab-skills-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
    }

    .ab-skill-card {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 16px 8px 14px;
      border: 1px solid var(--border);
      background: transparent;
      cursor: default;
      transition: border-color .18s, background .18s;
      position: relative; overflow: hidden;
    }
    .ab-skill-card::before {
      content: '';
      position: absolute; inset: 0;
      background: var(--orange);
      transform: scaleY(0); transform-origin: bottom;
      transition: transform .22s ease;
      opacity: .07;
      z-index: 0;
    }
    .ab-skill-card:hover::before { transform: scaleY(1); }
    .ab-skill-card:hover { border-color: var(--orange); }

    .ab-skill-icon {
      font-size: 26px; margin-bottom: 10px;
      position: relative; z-index: 1;
      transition: transform .2s;
    }
    .ab-skill-card:hover .ab-skill-icon { transform: translateY(-3px); }

    .ab-skill-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700; font-size: 10px;
      letter-spacing: .1em; text-transform: uppercase;
      color: var(--muted); text-align: center;
      line-height: 1.2; position: relative; z-index: 1;
      transition: color .18s;
    }
    .ab-skill-card:hover .ab-skill-name { color: var(--orange); }

    /* ── Horizontal rule ── */
    .ab-rule { height:1px; background:var(--border); margin: 40px 0; }

    /* ══════════════════════════════════════════
       EXPERIENCE LADDER
    ══════════════════════════════════════════ */
    .exp-section {
      margin-top: 80px;
      padding-top: 56px;
      border-top: 1px solid var(--border);
    }

    .exp-heading-row {
      display: flex;
      align-items: baseline;
      gap: 16px;
      margin-bottom: 56px;
    }
    .exp-heading {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: clamp(32px, 5vw, 52px);
      line-height: .9;
      letter-spacing: -.01em;
      text-transform: uppercase;
      color: var(--text);
    }
    .exp-heading-accent { color: var(--orange); }
    .exp-count {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 300;
      font-size: 13px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /* ── Timeline track ── */
    .exp-timeline {
      position: relative;
      padding-left: 40px;
    }

    /* vertical line */
    .exp-timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      bottom: 0;
      width: 1px;
      background: var(--border);
    }

    /* ── Single entry ── */
    .exp-entry {
      position: relative;
      padding-bottom: 56px;
    }
    .exp-entry:last-child {
      padding-bottom: 0;
    }

    /* node dot on the line */
    .exp-node {
      position: absolute;
      left: -40px;
      top: 8px;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--orange);
      border: 2px solid var(--bg);
      box-shadow: 0 0 0 1px var(--orange);
      z-index: 2;
    }

    /* active / current entry — pulsing node */
    .exp-node.active {
      background: var(--orange);
      animation: node-pulse 2.2s ease-in-out infinite;
    }
    @keyframes node-pulse {
      0%,100% { box-shadow: 0 0 0 1px var(--orange); }
      50%      { box-shadow: 0 0 0 5px rgba(241,90,36,0.18); }
    }

    /* connector segment between nodes — filled up to current */
    .exp-connector {
      position: absolute;
      left: -36px;
      top: 17px;
      width: 1px;
      height: calc(100% - 8px);
      background: linear-gradient(to bottom, var(--orange) 0%, var(--border) 100%);
      opacity: 0.4;
    }
    .exp-entry:last-child .exp-connector { display: none; }

    /* meta: date badge */
    .exp-date {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 12px;
    }
    .exp-date-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--orange);
      flex-shrink: 0;
    }

    /* company name */
    .exp-company {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: clamp(20px, 3vw, 28px);
      line-height: 1;
      letter-spacing: -.01em;
      text-transform: uppercase;
      color: var(--text);
      margin-bottom: 6px;
    }

    /* role title */
    .exp-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 400;
      font-size: 13px;
      letter-spacing: .16em;
      text-transform: uppercase;
      color: var(--orange);
      margin-bottom: 18px;
    }

    /* description bullets */
    .exp-bullets {
      list-style: none;
      padding: 0; margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .exp-bullets li {
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.7;
      color: var(--muted);
      padding-left: 18px;
      position: relative;
    }
    .exp-bullets li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 10px;
      width: 6px;
      height: 1px;
      background: var(--orange);
      opacity: 0.6;
    }

    /* tag chips on each entry */
    .exp-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 20px;
    }
    .exp-tag {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: .12em;
      text-transform: uppercase;
      padding: 4px 10px;
      border: 1px solid var(--border);
      color: var(--muted);
      transition: border-color .18s, color .18s;
      cursor: default;
    }
    .exp-tag:hover { border-color: var(--orange); color: var(--orange); }

    /* current badge */
    .exp-badge-current {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: .16em;
      text-transform: uppercase;
      padding: 4px 10px;
      background: rgba(241,90,36,0.10);
      border: 1px solid rgba(241,90,36,0.35);
      color: var(--orange);
      margin-left: 12px;
      vertical-align: middle;
    }
    .exp-badge-current-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--orange);
      animation: pulse-green 1.8s ease-in-out infinite;
    }
      .quote{
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 1px;
}
  `}</style>
);

/* ── All skills ── */
const allSkills = [
  { name: "React",       icon: <FaReact       style={{ color:"#61DAFB" }} /> },
  { name: "Next.js",     icon: <SiNextdotjs   style={{ color:"currentColor" }} /> },
  { name: "JavaScript",  icon: <FaJs          style={{ color:"#F7DF1E" }} /> },
  { name: "TypeScript",  icon: <SiTypescript  style={{ color:"#3178C6" }} /> },
  { name: "Tailwind",    icon: <SiTailwindcss style={{ color:"#38BDF8" }} /> },
  { name: "Node.js",     icon: <FaNodeJs      style={{ color:"#68A063" }} /> },
  { name: "Express",     icon: <SiExpress     style={{ color:"currentColor" }} /> },
  { name: "GraphQL",     icon: <SiGraphql     style={{ color:"#E10098" }} /> },
  { name: "MongoDB",     icon: <SiMongodb     style={{ color:"#47A248" }} /> },
  { name: "PostgreSQL",  icon: <SiPostgresql  style={{ color:"#336791" }} /> },
  { name: "MySQL",       icon: <SiMysql       style={{ color:"#4479A1" }} /> },
  { name: "Java",        icon: <FaJava        style={{ color:"#E76F00" }} /> },
  { name: "Spring Boot", icon: <SiSpringboot  style={{ color:"#6DB33F" }} /> },
  { name: "Hibernate",   icon: <SiHibernate   style={{ color:"#59666C" }} /> },
  { name: "Redis",       icon: <SiRedis       style={{ color:"#DC382D" }} /> },
  { name: "Kafka",       icon: <SiApachekafka style={{ color:"#231F20" }} /> },
  { name: "Git",         icon: <FaGitAlt      style={{ color:"#F05032" }} /> },
  { name: "Docker",      icon: <FaDocker      style={{ color:"#2496ED" }} /> },
  { name: "Bootstrap",   icon: <SiBootstrap   style={{ color:"#7952B3" }} /> },
  { name: "Postman",     icon: <SiPostman     style={{ color:"#FF6C37" }} /> },
];

/* ── Coding Profiles ── */
const codingProfiles = [
  { name: "LeetCode",      icon: <SiLeetcode size={16} />,     url: "https://leetcode.com/u/tejastp834/" },
  { name: "GeeksforGeeks", icon: <SiGeeksforgeeks size={16} />, url: "https://www.geeksforgeeks.org/profile/tejast6ngg?tab=activity" },
  { name: "Neetcode",      icon: <SiRocket size={16} />,       url: "https://neetcode.io/profile" },
];

const interests = ["💪 Fitness", "🎌 Anime", "📚 Learning", "💻 Coding"];

const stats = [
  { num: "10+", lbl: "Personal Projects\nShipped" },
  { num: "1+",  lbl: "Years\nExp." },
  { num: "∞",   lbl: "Curiosity\nLevel" },
];

/* ── Experience data ── */
const experiences = [
  {
    company: "Cognizant Technology Solutions",
    title: "Programmer Analyst Trainee",
    date: "July 2025 — Present",
    current: true,
    bullets: [
      "Joining as Programmer Analyst Trainee in the engineering division.",
      "Will work on enterprise-scale full-stack application development.",
      "Focusing on Java, Spring Boot, and cloud-based microservices.",
    ],
    tags: ["Java", "Spring Boot", "Microservices", "Cloud"],
  },
  {
    company: "IGap Technologies",
    title: "Web Developer Intern",
    date: "2024",
    current: false,
    bullets: [
      "Built and maintained full-stack web features using React and Node.js.",
      "Implemented CRUD operations and RESTful APIs connected to MongoDB.",
      "Learned React component architecture, hooks, and state management.",
      "Collaborated with the team on agile sprints and code reviews.",
    ],
    tags: ["React", "Node.js", "MongoDB", "REST API", "CRUD"],
  },
];

/* ── Component ── */
const AboutMe = () => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });

  const expRef    = useRef(null);
  const expInView = useInView(expRef, { once: true, amount: 0.15 });

  const leftVariants = {
    hidden:  { opacity:0, x:-40 },
    visible: { opacity:1, x:0, transition:{ duration:.7, ease:[.22,1,.36,1] } },
  };
  const rightVariants = {
    hidden:  { opacity:0, x:40 },
    visible: { opacity:1, x:0, transition:{ duration:.7, ease:[.22,1,.36,1], delay:.15 } },
  };
  const skillVariant = (i) => ({
    hidden:  { opacity:0, y:16 },
    visible: { opacity:1, y:0, transition:{ duration:.4, delay: i * 0.04 } },
  });

  return (
    <section id="about" className="ab-section" ref={ref}>
      <SectionStyles />

      <div className="ab-container">

        {/* ── Header row ── */}
        <div className="ab-header">
          <span className="ab-tag">About</span>
          <div className="ab-header-rule" />
          <span className="ab-section-num">02</span>
        </div>

        <div className="ab-grid">

          {/* ══ LEFT — profile + bio ══ */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display:"flex", flexDirection:"column", gap:0 }}
          >
            {/* photo */}
            <div style={{ marginBottom: 40 }}>
              <div className="ab-photo-wrap">
                <div className="ab-photo-frame">
                  <img src={profile} alt="Tejas Patil" />
                </div>
                <div className="ab-status">
                  <div className="ab-status-dot" />
                </div>
              </div>
            </div>

            {/* name + role */}
       <div className="ab-name quote">
  "Building ideas into reality<span style={{ color:"var(--orange)" }}>.</span>"
</div>
            <div className="ab-role">Full-Stack Developer</div>

            {/* bio */}
            <p className="ab-bio">
              Software Developer and aspiring SDE passionate about building modern, scalable applications with clean architecture and impactful user experiences. Continuously exploring DevOps, cloud infrastructure, and deployment technologies to become a well-rounded engineer.
            </p>

            {/* Coding Profiles Hover Dropdown */}
            <div className="ab-profiles-wrap">
              <button className="ab-profiles-btn">
                <FaCode size={16} style={{ color:"var(--orange)" }} />
                My Profiles
                <FaChevronDown size={10} style={{ marginLeft: 4 }} />
              </button>
              <div className="ab-profiles-dropdown">
                {codingProfiles.map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="ab-profile-link">
                    {p.icon} {p.name}
                  </a>
                ))}
              </div>
            </div>

            {/* interests */}
            <div className="ab-interests">
              {interests.map((tag, i) => (
                <motion.span key={i} className="ab-interest-tag"
                  initial={{ opacity:0, y:8 }}
                  animate={inView ? { opacity:1, y:0 } : { opacity:0, y:8 }}
                  transition={{ delay: .3 + i * .07 }}>
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* mini stats */}
            <div className="ab-stats">
              {stats.map((s, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="ab-stat-divider" />}
                  <div>
                    <div className="ab-stat-num">{s.num}</div>
                    <div className="ab-stat-lbl" style={{ whiteSpace:"pre-line" }}>{s.lbl}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* ══ RIGHT — skills ══ */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="ab-skills-heading">Technologies<br />I Use<span style={{ color:"var(--orange)" }}>.</span></div>
            <div className="ab-skills-sub">Stack &amp; Tooling</div>

            <div className="ab-rule" />

            <div className="ab-skills-grid">
              {allSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="ab-skill-card"
                  variants={skillVariant(i)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ scale:1.03 }}
                  transition={{ type:"spring", stiffness:300, damping:22 }}
                >
                  <div className="ab-skill-icon">{skill.icon}</div>
                  <div className="ab-skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>

            <div className="ab-rule" />
            <p style={{
              fontFamily:"'Barlow Condensed',sans-serif", fontWeight:300,
              fontSize:13, letterSpacing:".08em", color:"var(--muted)", lineHeight:1.6
            }}>
              Always learning. Currently exploring edge runtimes,
              distributed systems &amp; AI-assisted tooling.
            </p>
          </motion.div>

        </div>

        {/* ══════════════════════════════════════════
            EXPERIENCE LADDER — full width below grid
        ══════════════════════════════════════════ */}
        <div className="exp-section" ref={expRef}>

          {/* heading */}
          <div className="exp-heading-row">
            <div className="exp-heading">
              Experience<span className="exp-heading-accent">.</span>
            </div>
            <span className="exp-count">{experiences.length} roles</span>
          </div>

          {/* timeline */}
          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="exp-entry"
                initial={{ opacity: 0, x: -24 }}
                animate={expInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                transition={{ duration: 0.6, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* timeline node */}
                <div className={`exp-node${exp.current ? " active" : ""}`} />

                {/* connector segment */}
                <div className="exp-connector" />

                {/* date */}
                <div className="exp-date">
                  <span className="exp-date-dot" />
                  {exp.date}
                  {exp.current && (
                    <span className="exp-badge-current">
                      <span className="exp-badge-current-dot" />
                      Current
                    </span>
                  )}
                </div>

                {/* company */}
                <div className="exp-company">{exp.company}</div>

                {/* title */}
                <div className="exp-title">{exp.title}</div>

                {/* bullets */}
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={expInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: i * 0.18 + j * 0.07 + 0.2 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* tech tags */}
                <div className="exp-tags">
                  {exp.tags.map((tag, k) => (
                    <motion.span
                      key={k}
                      className="exp-tag"
                      initial={{ opacity: 0, y: 6 }}
                      animate={expInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                      transition={{ duration: 0.3, delay: i * 0.18 + k * 0.05 + 0.35 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>
        {/* end experience section */}

      </div>
    </section>
  );
};

export default AboutMe;