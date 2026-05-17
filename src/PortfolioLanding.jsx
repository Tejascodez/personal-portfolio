import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Menu, Github, Twitter, Linkedin, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

// IMPORT YOUR IMAGE HERE (Adjust the path based on where this file is located)
import profile from './assets/profile.png';

/* ── Fonts + global styles injected once ── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;700;800;900&family=Barlow:wght@300;400;500&display=swap');

    :root {
      --orange: #F15A24;
    }

    .pf-dark  { --bg:#090909; --text:#FFFFFF; --muted:#606060; --border:rgba(255,255,255,0.07); }
    .pf-light { --bg:#F0EDEA; --text:#0A0A0A; --muted:#777777; --border:rgba(0,0,0,0.10); }

    .pf-wrap { background:var(--bg); color:var(--text); min-height:100vh; transition:background .3s,color .3s; position:relative; }

    /* noise overlay */
    .pf-wrap::before {
      content:''; position:fixed; inset:0; pointer-events:none; z-index:9998; opacity:.032;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    }

    /* ── Layout Container ── */
    .pf-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
      width: 100%;
      box-sizing: border-box;
      position: relative;
    }

    /* ── Hero Split Layout ── */
    .pf-hero-layout {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      width: 100%;
      position: relative;
      z-index: 2;
    }

    .pf-hero-text {
      flex: 1;
      max-width: 620px;
    }

    .pf-hero-image-wrapper {
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-left: -80px;
      z-index: 3;
    }

    .pf-hero-pic {
      width: 100%;
      max-width: 480px;
      height: auto;
      object-fit: contain;
      position: relative;
      z-index: 2;
      -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%), linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
      -webkit-mask-composite: destination-in;
      mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%), linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
      mask-composite: intersect;
    }

    /* ── NEW: Image animations ── */
    @keyframes floatImg {
      0%,100% { transform: translateY(0px); }
      50%      { transform: translateY(-10px); }
    }
    @keyframes spinRing {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes spinRingRev {
      from { transform: rotate(0deg); }
      to   { transform: rotate(-360deg); }
    }
    @keyframes pulseGlow {
      0%,100% { opacity: 0.18; transform: scale(1) translateX(-50%); }
      50%      { opacity: 0.30; transform: scale(1.07) translateX(-50%); }
    }
    @keyframes tagBob1 {
      0%,100% { transform: translateY(0px) rotate(-2deg); }
      50%      { transform: translateY(-6px) rotate(-2deg); }
    }
    @keyframes tagBob2 {
      0%,100% { transform: translateY(0px) rotate(2deg); }
      50%      { transform: translateY(-8px) rotate(2deg); }
    }
    @keyframes tagBob3 {
      0%,100% { transform: translateY(0px) rotate(-1deg); }
      50%      { transform: translateY(-5px) rotate(-1deg); }
    }
    @keyframes dotPing {
      0%     { transform: scale(1); opacity: 0.8; }
      70%    { transform: scale(2.6); opacity: 0; }
      100%   { transform: scale(1); opacity: 0; }
    }

    .hero-img-float  { animation: floatImg 4.5s ease-in-out infinite; }
    .hero-glow-pulse { animation: pulseGlow 4s ease-in-out infinite; }
    .ring-spin       { animation: spinRing 20s linear infinite; }
    .ring-spin-rev   { animation: spinRingRev 28s linear infinite; }
    .tag-bob-1       { animation: tagBob1 4s ease-in-out infinite; }
    .tag-bob-2       { animation: tagBob2 5.2s ease-in-out 0.4s infinite; }
    .tag-bob-3       { animation: tagBob3 3.8s ease-in-out 0.8s infinite; }

    /* ── Floating tag chip ── */
    .hero-tag {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      background: var(--bg);
      border: 1px solid var(--border);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--text);
      white-space: nowrap;
      z-index: 10;
      pointer-events: none;
      backdrop-filter: blur(8px);
    }

    /* ── Corner accents ── */
    .hero-corner {
      position: absolute;
      width: 20px;
      height: 20px;
      border-color: var(--orange);
      border-style: solid;
      opacity: 0.65;
      z-index: 3;
      pointer-events: none;
    }
    .hero-corner.tl { top: 0;   left: 0;  border-width: 2px 0 0 2px; }
    .hero-corner.tr { top: 0;   right: 0; border-width: 2px 2px 0 0; }
    .hero-corner.bl { bottom: 8%; left: 0;  border-width: 0 0 2px 2px; }
    .hero-corner.br { bottom: 8%; right: 0; border-width: 0 2px 2px 0; }

    /* ── Orbit ring wrapper ── */
    .hero-orbit {
      position: absolute;
      inset: -10%;
      pointer-events: none;
      z-index: 1;
    }

    /* ── Responsive adjustments ── */
    @media (max-width: 860px) {
      .pf-container { padding: 0 24px; }
      .pf-hero-stats { display: none !important; }
      .pf-hero-scroll { display: none !important; }

      .pf-hero-layout {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
      }
      .pf-hero-image-wrapper {
        justify-content: center;
        width: 100%;
        margin-left: 0;
        margin-top: 16px;
      }
      .pf-hero-pic {
        max-width: 320px;
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);
        -webkit-mask-composite: unset;
        mask-composite: unset;
      }
      .hero-tag { display: none !important; }
      .hero-orbit { display: none !important; }
    }

    /* ── Marquee ── */
    @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .mq-track { display:flex; width:max-content; animation:mq 20s linear infinite; }
    .mq-track:hover { animation-play-state:paused; }

    /* ── Hero name ── */
    .pf-name {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:900; line-height:.88; letter-spacing:-.01em;
      text-transform:uppercase; color:var(--text);
      font-size:clamp(72px,13vw,176px);
    }

    /* ── Mono nav label ── */
    .pf-nav-lbl {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:11px; letter-spacing:.2em; text-transform:uppercase;
    }

    /* ── CTA ── */
    .pf-btn {
      font-family:'Barlow Condensed',sans-serif;
      font-weight:700; font-size:12px; letter-spacing:.2em; text-transform:uppercase;
      display:inline-flex; align-items:center; gap:8px;
      padding:13px 26px; border:1px solid var(--border);
      background:transparent; color:var(--text); cursor:pointer; text-decoration:none;
      transition:background .18s,color .18s,border-color .18s;
    }
    .pf-btn:hover { background:var(--orange); color:#fff; border-color:var(--orange); }
    .pf-btn.primary { background:var(--orange); color:#fff; border-color:var(--orange); }
    .pf-btn.primary:hover { background:transparent; color:var(--text); border-color:var(--border); }

    /* ── Stack pill ── */
    .pf-pill {
      font-family:'Barlow Condensed',sans-serif; font-size:11px;
      letter-spacing:.1em; text-transform:uppercase;
      padding:5px 12px; border:1px solid var(--border); color:var(--muted);
      transition:border-color .2s,color .2s;
    }
    .pf-pill:hover { border-color:var(--orange); color:var(--orange); }

    /* ── Blink cursor ── */
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .blink { animation:blink 1s step-end infinite; }

    /* ── Scroll bob ── */
    @keyframes bob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
    .bob { animation:bob 2s ease-in-out infinite; }

    /* ── Nav link hover ── */
    .pf-navlink { color:var(--muted); transition:color .15s; text-decoration:none; }
    .pf-navlink:hover { color:var(--orange); }

    /* background grid */
    .pf-grid {
      position:absolute; inset:0; pointer-events:none;
      background-image:
        linear-gradient(var(--border) 1px,transparent 1px),
        linear-gradient(90deg,var(--border) 1px,transparent 1px);
      background-size:80px 80px;
    }
  `}</style>
);

/* ── Top marquee bar ── */
const TopBar = () => {
  const words = ["AVAILABLE FOR WORK","MERN STACK","FULL STACK DEV","TEJAS PATIL","REACT · NODE · MONGO","OPEN SOURCE"];
  const doubled = [...words, ...words];
  return (
    <div style={{ borderBottom:"1px solid var(--border)", overflow:"hidden" }}>
      <div className="mq-track" style={{ padding:"9px 0" }}>
        {doubled.map((w,i) => (
          <React.Fragment key={i}>
            <span className="pf-nav-lbl" style={{ color:"var(--orange)", whiteSpace:"nowrap", padding:"0 28px" }}>{w}</span>
            <span style={{ color:"var(--orange)", opacity:.5, fontSize:9 }}>✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/* ── Navbar ── */
const Navbar = ({ isDark, toggleDark, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { label:"Home", href:"#home" },
    { label:"Projects", href:"#projects" },
    { label:"About", href:"#about" },
  ];
  const socials = [
    { Icon: Github, href:"https://github.com/Tejascodez" },
    { Icon: Twitter, href:"https://twitter.com/tejastp834" },
    { Icon: Linkedin, href:"https://www.linkedin.com/in/tejasp834" },
  ];
  return (
    <nav style={{
      position:"sticky", top:0, zIndex:50,
      borderBottom:"1px solid var(--border)",
      background:"var(--bg)",
    }}>
      <div className="pf-container" style={{
        display:"flex", alignItems:"center", justifyContent:"space-between", height:54
      }}>
        <a href="#home" style={{ textDecoration:"none" }}>
          <span style={{ fontFamily:"'Barlow Condensed',sans-serif", fontWeight:900, fontSize:22, letterSpacing:".05em", textTransform:"uppercase", color:"var(--text)" }}>
            TP<span style={{ color:"var(--orange)" }}>.</span>
          </span>
        </a>

        {/* desktop links */}
        <div style={{ display:"flex", gap:28 }} className="pf-desktop">
          {navItems.map((n,i) => (
            <a key={i} href={n.href} className="pf-navlink pf-nav-lbl">{n.label}</a>
          ))}
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:18 }}>
          <div style={{ display:"flex", gap:16 }} className="pf-desktop">
            {socials.map(({Icon,href},i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                className="pf-navlink" style={{ display:"flex" }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div style={{ width:1, height:16, background:"var(--border)" }} className="pf-desktop" />
          <button onClick={toggleDark} style={{ background:"none",border:"none",cursor:"pointer",color:"var(--muted)",display:"flex",padding:0 }}>
            {isDark
              ? <SunIcon style={{ width:16,height:16,color:"#FFCC00" }} />
              : <MoonIcon style={{ width:16,height:16 }} />}
          </button>
          <button onClick={() => setMobileOpen(o => !o)} style={{ background:"none",border:"none",cursor:"pointer",color:"var(--text)",display:"none",padding:0 }} className="pf-mobile-btn">
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .pf-desktop{display:none!important}
          .pf-mobile-btn{display:flex!important}
        }
      `}</style>
    </nav>
  );
};

/* ── Mobile drawer ── */
const MobileDrawer = ({ isOpen, setOpen }) => {
  const items = [
    { label:"Home", href:"#home" },
    { label:"Projects", href:"#projects" },
    { label:"About", href:"#about" },
    { label:"GitHub", href:"https://github.com/Tejascodez" },
    { label:"Twitter", href:"https://twitter.com/tejastp834" },
    { label:"LinkedIn", href:"https://www.linkedin.com/in/tejasp834" },
  ];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity:0,y:-6 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-6 }}
          style={{
            position:"fixed", top:108, left:0, right:0, zIndex:49,
            background:"var(--bg)", borderBottom:"1px solid var(--border)",
            padding:"16px 32px 28px"
          }}>
          {items.map((item,i) => (
            <a key={i} href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              style={{
                display:"block", padding:"13px 0", borderBottom:"1px solid var(--border)",
                textDecoration:"none", fontFamily:"'Barlow Condensed',sans-serif",
                fontWeight:900, fontSize:32, letterSpacing:".02em", textTransform:"uppercase",
                color:"var(--text)", transition:"color .15s"
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}
            >{item.label}</a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ── Ping dot component ── */
const PingDot = () => (
  <span style={{ position:"relative", width:8, height:8, flexShrink:0 }}>
    <span style={{
      position:"absolute", inset:0, borderRadius:"50%",
      background:"var(--orange)", opacity:0.75,
      animation:"dotPing 1.8s ease-out infinite",
    }} />
    <span style={{
      position:"absolute", inset:0, borderRadius:"50%",
      background:"var(--orange)",
    }} />
    <style>{`
      @keyframes dotPing {
        0%   { transform:scale(1); opacity:0.8; }
        70%  { transform:scale(2.6); opacity:0; }
        100% { transform:scale(1); opacity:0; }
      }
    `}</style>
  </span>
);

/* ── Hero section ── */
const Hero = () => {
  const [typed, setTyped] = useState('');
  const intro = "Software Developer . Backend Developer . Full - Stack Developer";
  useEffect(() => {
    let i = 0; setTyped('');
    const id = setInterval(() => {
      i++; setTyped(intro.slice(0, i));
      if (i >= intro.length) clearInterval(id);
    }, 52);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" style={{
      position:"relative", height:"calc(100vh - 108px)",
      overflow:"hidden", width:"100%"
    }}>
      {/* subtle grid */}
      <div className="pf-grid" />

      <div className="pf-container" style={{
        height:"100%", display:"flex", flexDirection:"column",
        justifyContent:"center", paddingBottom:56
      }}>

        {/* stats top-right */}
        <div className="pf-hero-stats" style={{
          position:"absolute", right:32, top:36, zIndex:3,
          display:"flex", flexDirection:"column", gap:3, textAlign:"right"
        }}>
          {["10+ Projects Shipped","Looking for SDE roles","Open to Freelance"].map((s,i) => (
            <span key={i} style={{
              fontFamily:"'Barlow Condensed',sans-serif", fontWeight:400,
              fontSize:13, letterSpacing:".04em", color:"var(--muted)"
            }}>{s}</span>
          ))}
        </div>

        {/* ── Split Layout ── */}
        <div className="pf-hero-layout">

          {/* LEFT: Text */}
          <div className="pf-hero-text">
            <motion.div initial={{ opacity:0,y:44 }} animate={{ opacity:1,y:0 }} transition={{ duration:.75, ease:[.22,1,.36,1] }}>
              <div className="pf-name">Tejas</div>
              <div className="pf-name">Patil<span style={{ color:"var(--orange)" }}>.</span></div>
            </motion.div>

            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ delay:.4,duration:.65 }}
              style={{ transformOrigin:"left", height:1, background:"var(--border)", margin:"30px 0 24px", maxWidth:660 }} />

            <motion.div initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:.55,duration:.5 }}
              style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:24 }}>
              <p style={{
                fontFamily:"'Barlow Condensed',sans-serif", fontWeight:400,
                fontSize:17, letterSpacing:".04em", color:"var(--muted)", maxWidth:440
              }}>
                {typed}
                <span className="blink" style={{ display:"inline-block",width:2,height:14,background:"var(--orange)",marginLeft:3,verticalAlign:"middle" }} />
              </p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <a href="https://drive.google.com/file/d/1QMv9QgcMzWEvL8Up_4RG8PH811d20p3X/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer" className="pf-btn primary">
                  View Resume <ArrowUpRight size={13} />
                </a>
                <a href="mailto:tejastp834@gmail.com" className="pf-btn">
                  Let's Connect
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.75 }}
              style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:26 }}>
              {["React","Node.js","MongoDB","Express","TypeScript","Next.js"].map((t,i) => (
                <span key={i} className="pf-pill">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Enhanced Profile Image */}
          <motion.div
            className="pf-hero-image-wrapper"
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.8, delay:0.3, ease:[0.22,1,0.36,1] }}
            style={{ position:"relative" }}
          >
            {/* ── Orange glow blob behind photo ── */}
            <div
              className="hero-glow-pulse"
              style={{
                position:"absolute",
                bottom:"5%",
                left:"50%",
                transform:"translateX(-50%)",
                width:"72%",
                height:"52%",
                borderRadius:"50%",
                background:"radial-gradient(ellipse, rgba(241,90,36,0.22) 0%, transparent 70%)",
                filter:"blur(32px)",
                pointerEvents:"none",
                zIndex:0,
              }}
            />

            {/* ── Outer orbit ring ── */}
            <div className="hero-orbit ring-spin" style={{ opacity:0.22 }}>
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width:"100%", height:"100%" }}>
                <ellipse cx="200" cy="200" rx="188" ry="188"
                  stroke="#F15A24" strokeWidth="0.8" strokeDasharray="6 14" />
                <circle cx="200" cy="12" r="4.5" fill="#F15A24" opacity="0.9" />
                <circle cx="388" cy="200" r="3" fill="#F15A24" opacity="0.5" />
                <circle cx="200" cy="388" r="2.5" fill="#F15A24" opacity="0.35" />
              </svg>
            </div>

            {/* ── Inner orbit ring (reverse) ── */}
            <div className="hero-orbit ring-spin-rev" style={{ inset:"6%", opacity:0.13 }}>
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width:"100%", height:"100%" }}>
                <ellipse cx="200" cy="200" rx="176" ry="176"
                  stroke="#F15A24" strokeWidth="0.5" strokeDasharray="3 22" />
              </svg>
            </div>

            {/* ── Floating image with corner accents ── */}
            <div className="hero-img-float" style={{ position:"relative", zIndex:2 }}>
              <div className="hero-corner tl" />
              <div className="hero-corner tr" />
              <div className="hero-corner bl" />
              <div className="hero-corner br" />
              <img src={profile} alt="Tejas Patil" className="pf-hero-pic" />
            </div>

            {/* ── Floating Tag 1: Available for Work ── */}
            <motion.div
              className="hero-tag tag-bob-1"
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:1.0, duration:0.6, ease:[0.22,1,0.36,1] }}
              style={{ top:"14%", left:"-5%" }}
            >
              <PingDot />
              Available for Work
            </motion.div>

            {/* ── Floating Tag 2: Stack pills ── */}
            <motion.div
              className="hero-tag tag-bob-2"
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:1.2, duration:0.6, ease:[0.22,1,0.36,1] }}
              style={{
                bottom:"28%", left:"-8%",
                flexDirection:"column", alignItems:"flex-start", gap:6,
                padding:"10px 14px",
              }}
            >
              <span style={{
                fontFamily:"'Barlow Condensed',sans-serif",
                fontSize:9, letterSpacing:".2em", color:"var(--muted)", fontWeight:700
              }}>STACK</span>
              <div style={{ display:"flex", gap:6 }}>
                {["JAVA","MERN","AWS"].map((s,i) => (
                  <span key={i} style={{
                    padding:"3px 8px",
                    border:"1px solid rgba(241,90,36,0.4)",
                    color:"var(--orange)",
                    fontSize:10,
                    fontFamily:"'Barlow Condensed',sans-serif",
                    fontWeight:700,
                    letterSpacing:".1em",
                    textTransform:"uppercase",
                  }}>{s}</span>
                ))}
              </div>
            </motion.div>

            {/* ── Floating Tag 3: Projects count ── */}
            <motion.div
              className="hero-tag tag-bob-3"
              initial={{ opacity:0, x:20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ delay:1.4, duration:0.6, ease:[0.22,1,0.36,1] }}
              style={{
                top:"22%", right:"-4%",
                flexDirection:"column", alignItems:"flex-start", gap:2,
                padding:"10px 16px",
              }}
            >
              <span style={{
                fontFamily:"'Barlow Condensed',sans-serif",
                fontWeight:900, fontSize:30, lineHeight:1, color:"var(--orange)",
              }}>
                10<span style={{ fontSize:18 }}>+</span>
              </span>
              <span style={{
                fontFamily:"'Barlow Condensed',sans-serif",
                fontSize:9, letterSpacing:".15em", color:"var(--muted)", fontWeight:700
              }}>PROJECTS SHIPPED</span>
            </motion.div>

          </motion.div>
          {/* end RIGHT */}

        </div>

        {/* scroll indicator */}
        <div className="bob pf-hero-scroll" style={{
          position:"absolute", bottom:24, right:32, zIndex:3,
          display:"flex", flexDirection:"column", alignItems:"center", gap:8
        }}>
          <span style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontSize:10,
            letterSpacing:".22em", textTransform:"uppercase", color:"var(--muted)",
            writingMode:"vertical-rl"
          }}>Scroll</span>
          <div style={{ width:1, height:36, background:"var(--border)" }} />
          <div style={{ width:6, height:6, borderRadius:"50%", background:"var(--orange)" }} />
        </div>

      </div>
    </section>
  );
};

/* ── Root ── */
const PortfolioLanding = () => {
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const pref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(pref);
    document.documentElement.classList.toggle('dark', pref);
  }, []);

  const toggleDark = () => {
    setIsDark(prev => {
      document.documentElement.classList.toggle('dark', !prev);
      return !prev;
    });
  };

  return (
    <div className={`pf-wrap ${isDark ? 'pf-dark' : 'pf-light'}`}>
      <GlobalStyles />
      <TopBar />
      <Navbar isDark={isDark} toggleDark={toggleDark} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileDrawer isOpen={mobileOpen} setOpen={setMobileOpen} />
      <Hero />

      <div className="pf-container">
        <div style={{ height:1, background:"var(--border)", width:"100%" }} />
      </div>

      <div style={{ position:"relative", zIndex:1 }}>
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
};

export default PortfolioLanding;