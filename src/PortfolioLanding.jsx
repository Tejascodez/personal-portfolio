import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight, Home, Briefcase, User, Code, Mail, Play, Sun, Moon } from "lucide-react";
import { FaReact, FaNodeJs, FaJava, FaJs, FaGitAlt, FaDocker, FaBrain, FaSitemap, FaCubes } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiPostman, SiGraphql, SiPostgresql, SiSpringboot, SiRedis, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import profileImg  from "./assets/pic3.png";
import cdaImg      from "./assets/codementorai.png";
import cafe from './assets/cafe.png'
import imgtrexImg  from "./assets/Imgtrex.png";
import portfolioImg from "./assets/portfolio.png";
import excaliImg from "./assets/excali.png";
import freelanceImg from "./assets/freelance1.png";
import demopic1Img from "./assets/demopic1.png";
import dempic8Img  from "./assets/demo8.png";

/* ══════════════════════════════════════════════
   THEME
══════════════════════════════════════════════ */
const DARK = {
  wrap:"#0d0d0d", bg2:"#141414", text:"#ffffff", muted:"#888888",
  border:"rgba(255,255,255,0.07)", card:"rgba(255,255,255,0.025)",
  input:"rgba(255,255,255,0.05)", inputBorder:"rgba(255,255,255,0.09)",
  nav:"rgba(13,13,13,0.9)", navBorder:"rgba(255,255,255,0.08)",
  hoverRow:"rgba(255,255,255,0.025)", tagBorder:"rgba(255,255,255,0.08)",
  tagColor:"#666", arrowBorder:"rgba(255,255,255,0.09)", arrowColor:"#555",
  formBg:"rgba(255,255,255,0.025)", formBorder:"rgba(255,255,255,0.07)",
  sidebarBg:"#0f0f0f",
};
const LIGHT = {
  wrap:"#f5f5f5", bg2:"#ebebeb", text:"#111111", muted:"#666666",
  border:"rgba(0,0,0,0.08)", card:"rgba(0,0,0,0.03)",
  input:"rgba(0,0,0,0.05)", inputBorder:"rgba(0,0,0,0.12)",
  nav:"rgba(248,248,248,0.92)", navBorder:"rgba(0,0,0,0.1)",
  hoverRow:"rgba(0,0,0,0.025)", tagBorder:"rgba(0,0,0,0.1)",
  tagColor:"#888", arrowBorder:"rgba(0,0,0,0.1)", arrowColor:"#888",
  formBg:"rgba(0,0,0,0.02)", formBorder:"rgba(0,0,0,0.08)",
  sidebarBg:"#eeeeee",
};

const ThemeCtx = createContext({ isDark:true, toggle:()=>{}, t:DARK, activeTab:"home", setActiveTab:()=>{} });
const useTheme = () => useContext(ThemeCtx);

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const projectsData = [
  { id:5, title:"AI MCQ Generator",      desc:"Generates MCQs from video inputs using LLMs and speech-to-text.",         thumb:dempic8Img,   tags:["TypeScript","LLama","Whisper API"], github:"https://github.com/Tejascodez/video-mcq-ai.git" },
  { id:1, title:"CodeMentor AI",        desc:"AI-powered coding platform with real-time feedback and code execution.", thumb:cdaImg,       tags:["Node.js","MongoDB","Gemini API"], github:"https://github.com/Dcode36/code_mentor_ai", demo:"https://code-mentor-ai.vercel.app/" },
  { id:8, title:"AI Chat-BOT",          desc:"An AI-powered chatbot that delivers intelligent, real-time conversations using natural language processing.",         thumb:"",   tags:["TypeScript","LLama","Whisper API"], github:"https://github.com/Tejascodez/AI-ChatBOT.git" },
  { id:2, title:"Imgtrex AI Generator", desc:"Text-to-image generator using open-source HuggingFace models.",          thumb:imgtrexImg,   tags:["Node.js","Express","HuggingFace"], github:"https://github.com/Tejascodez/Imgtrex.git" },
  { id:3, title:"Excali Clone",          desc:"Collaborative browser-based drawing app with real-time diagramming.",     thumb:excaliImg, tags:["React","Node.js","Canvas API"], github:"https://github.com/Tejascodez/canvas-draw-app.git", demo:"https://canvas-draw-app-zeta.vercel.app/" },
  { id:4, title:"King Logistics",        desc:"Custom logistics website with booking and tracking system. Freelance.",   thumb:freelanceImg, tags:["React","CSS","Node.js"], demo:"https://heroic-longma-efd468.netlify.app/" },
  { id:6, title:"TBlog Spot",            desc:"RESTful blog platform with authentication, post management, comments.",   thumb:demopic1Img,  tags:["Node.js","Express","MongoDB"], github:"https://github.com/Tejascodez/tblog-spot.git" },
  { id:7, title:"TVV Cafe",               desc:"A modern self-service café ordering kiosk inspired by McDonald's digital ordering experience.",   thumb:cafe,  tags:["Node.js","Express","MongoDB"], github:"https://github.com/Tejascodez/TVV-Cafe.git" },
  
];

const experienceData = [
  { company:"Cognizant Technology Solutions", role:"Programmer Analyst Trainee", date:"July 2025 — Present", current:true,  desc:"Enterprise-scale full-stack development focusing on Java, Spring Boot, and cloud-based microservices architecture.", tags:["Java","Spring Boot","Microservices","Cloud"] },
  { company:"IGap Technologies",              role:"Web Developer Intern",        date:"2024",               current:false, desc:"Built full-stack features using React and Node.js. Implemented RESTful APIs with MongoDB. Agile sprints and code reviews.", tags:["React","Node.js","MongoDB","REST API"] },
];

const toolsData = [
  { name:"DSA",            icon:<FaBrain />,      color:"#F15A24" },{ name:"Java",         icon:<FaJava />,       color:"#E76F00" },
  { name:"System Design",  icon:<FaSitemap />,    color:"#7C3AED" },{ name:"Microservices",icon:<FaCubes />,      color:"#0EA5E9" },
  { name:"React",          icon:<FaReact />,      color:"#61DAFB" },{ name:"Next.js",      icon:<SiNextdotjs />,  color:"#888" },
  { name:"TypeScript",     icon:<SiTypescript />, color:"#3178C6" },{ name:"JavaScript",   icon:<FaJs />,         color:"#F7DF1E" },
  { name:"Node.js",        icon:<FaNodeJs />,     color:"#68A063" },{ name:"Express",      icon:<SiExpress />,    color:"#aaa" },
  { name:"MongoDB",        icon:<SiMongodb />,    color:"#47A248" },{ name:"PostgreSQL",   icon:<SiPostgresql />, color:"#336791" },
  { name:"Spring Boot",    icon:<SiSpringboot />, color:"#6DB33F" },{ name:"Redis",        icon:<SiRedis />,      color:"#DC382D" },
  { name:"Tailwind",       icon:<SiTailwindcss />,color:"#38BDF8" },{ name:"GraphQL",      icon:<SiGraphql />,    color:"#E10098" },
  { name:"Docker",         icon:<FaDocker />,     color:"#2496ED" },{ name:"Git",          icon:<FaGitAlt />,     color:"#F05032" },
  { name:"Postman",        icon:<SiPostman />,    color:"#FF6C37" },
];


/* ══════════════════════════════════════════════
   GLOBAL STYLES
══════════════════════════════════════════════ */
const GlobalStyles = ({ isDark }) => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    html, body { height:100%; overflow:hidden; }
    body { cursor:none; font-family:'Outfit',sans-serif; }
    input, textarea, select { cursor:text !important; }
    a, button { cursor:none; }
    @media(hover:none){ body{cursor:auto;} .pf-cursor{display:none!important} a,button{cursor:pointer!important} }

    .pf-wrap {
      width:100vw; height:100vh; overflow:hidden; display:flex; flex-direction:column;
      background:${isDark?DARK.wrap:LIGHT.wrap}; color:${isDark?DARK.text:LIGHT.text};
      font-family:'Outfit',sans-serif; transition:background .3s,color .3s;
    }

    .right-panel::-webkit-scrollbar { width:3px; }
    .right-panel::-webkit-scrollbar-track { background:transparent; }
    .right-panel::-webkit-scrollbar-thumb { background:#F15A24; border-radius:2px; }

    .sidebar-scroll::-webkit-scrollbar { width:2px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background:${isDark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.1)"}; }

    @keyframes ping-dot { 0%{transform:scale(1);opacity:.8} 70%{transform:scale(2.2);opacity:0} 100%{transform:scale(0);opacity:0} }

    .tag { font-size:9px; color:${isDark?DARK.tagColor:LIGHT.tagColor}; text-transform:uppercase; letter-spacing:.08em; padding:3px 8px; border:1px solid ${isDark?DARK.tagBorder:LIGHT.tagBorder}; border-radius:5px; }

    @media(max-width:840px){
      .sidebar { display:none!important; }
      .right-panel { padding:28px 20px 24px!important; }
      .feat-grid { grid-template-columns:1fr!important; }
      .contact-2col { grid-template-columns:1fr!important; }
      .fp-btns { display:none!important; }
    }
  `}</style>
);

/* ══════════════════════════════════════════════
   CURSOR
══════════════════════════════════════════════ */
const CustomCursor = () => {
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const [hov, setHov] = useState(false);
  const x = useSpring(mx,{damping:28,stiffness:450});
  const y = useSpring(my,{damping:28,stiffness:450});
  useEffect(()=>{
    const move = e=>{ mx.set(e.clientX); my.set(e.clientY); };
    const over = e=>{ const isInput=["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName); setHov(!isInput&&!!e.target.closest("a,button,[data-cursor]")); };
    window.addEventListener("mousemove",move);
    window.addEventListener("mousemove",over);
    return()=>{ window.removeEventListener("mousemove",move); window.removeEventListener("mousemove",over); };
  },[mx,my]);
  return (
    <motion.div className="pf-cursor" style={{ position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:99999,x,y,translateX:"-50%",translateY:"-50%" }} animate={{ width:hov?36:11,height:hov?36:11 }} transition={{ duration:.16,ease:"easeOut" }}>
      <div style={{ width:"100%",height:"100%",borderRadius:"50%",background:hov?"transparent":"#F15A24",border:hov?"2px solid #F15A24":"none",transition:"all .16s" }}/>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   FLOATING NAV
══════════════════════════════════════════════ */
const FloatingNav = () => {
  const { isDark, toggle, t, activeTab, setActiveTab } = useTheme();
  const tabs = [
    { id:"home",     Icon:Home,     label:"Home" },
    { id:"projects", Icon:Briefcase,label:"Projects" },
    { id:"about",    Icon:User,     label:"About" },
    { id:"tools",    Icon:Code,     label:"Tools" },
  ];
  return (
    <div style={{ position:"fixed",top:18,left:0,right:0,display:"flex",justifyContent:"center",zIndex:9998,pointerEvents:"none" }}>
      <motion.nav initial={{ y:-60,opacity:0 }} animate={{ y:0,opacity:1 }} transition={{ delay:.3,duration:.6,ease:[.22,1,.36,1] }}
        style={{ pointerEvents:"auto",background:t.nav,backdropFilter:"blur(20px)",border:`1px solid ${t.navBorder}`,borderRadius:100,padding:"10px 20px",display:"flex",alignItems:"center",gap:4,boxShadow:`0 8px 28px rgba(0,0,0,${isDark?.35:.1})` }}
      >
        {tabs.map(({ id, Icon, label })=>(
          <button key={id} onClick={()=>setActiveTab(id)} title={label}
            style={{ position:"relative",background:activeTab===id?"rgba(241,90,36,0.12)":"transparent",border:"none",padding:"7px 10px",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",color:activeTab===id?"#F15A24":t.arrowColor,transition:"color .2s,background .2s,transform .2s",fontFamily:"'Outfit',sans-serif" }}
            onMouseEnter={e=>{ if(activeTab!==id){ e.currentTarget.style.color="#F15A24"; e.currentTarget.style.transform="translateY(-2px)"; }}}
            onMouseLeave={e=>{ if(activeTab!==id){ e.currentTarget.style.color=t.arrowColor; e.currentTarget.style.transform="translateY(0)"; }}}
          >
            <Icon size={15} strokeWidth={activeTab===id?2.2:1.7}/>
            {activeTab===id && (
              <motion.div layoutId="nav-dot" style={{ position:"absolute",bottom:2,left:"50%",width:3,height:3,borderRadius:"50%",background:"#F15A24",translateX:"-50%" }} transition={{ type:"spring",stiffness:500,damping:30 }}/>
            )}
          </button>
        ))}
        <div style={{ width:1,height:14,background:t.border,margin:"0 4px" }}/>
        <button onClick={toggle} title={isDark?"Light mode":"Dark mode"}
          style={{ background:"none",border:"none",color:t.arrowColor,padding:"7px 8px",display:"flex",alignItems:"center",transition:"color .2s,transform .2s",fontFamily:"'Outfit',sans-serif" }}
          onMouseEnter={e=>{ e.currentTarget.style.color="#F15A24"; e.currentTarget.style.transform="rotate(18deg)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.color=t.arrowColor; e.currentTarget.style.transform="rotate(0)"; }}
        >
          {isDark ? <Sun size={15} strokeWidth={1.7}/> : <Moon size={15} strokeWidth={1.7}/>}
        </button>
      </motion.nav>
    </div>
  );
};

/* ══════════════════════════════════════════════
   LEFT SIDEBAR
══════════════════════════════════════════════ */
const ProfileSidebar = () => {
  const { isDark, t } = useTheme();
  const socials = [
    { Icon:Github,   href:"https://github.com/Tejascodez",         label:"GitHub" },
    { Icon:Twitter,  href:"https://twitter.com/tejastp834",        label:"Twitter" },
    { Icon:Linkedin, href:"https://www.linkedin.com/in/tejasp834", label:"LinkedIn" },
  ];
  const profiles = [
    { Icon:SiLeetcode,      name:"LeetCode",      url:"https://leetcode.com/u/tejastp834/",               color:"#FFA116" },
    { Icon:SiGeeksforgeeks, name:"GeeksforGeeks", url:"https://www.geeksforgeeks.org/profile/tejast6ngg", color:"#2F8D46" },
  ];
  const interests = ["💻 Coding","💪 Fitness","🎌 Anime","📚 Learning"];
  const stats = [{ num:"10+",label:"Projects" },{ num:"1+",label:"Years Of Experience" },{ num:"∞",label:"Curiosity" }];

  return (
    <div style={{ height:"100%",overflow:"hidden",display:"flex",flexDirection:"column",padding:"16px 14px",gap:0 }}>

      {/* Portrait — fixed height so it never overflows */}
      <div style={{ position:"relative",width:"100%",height:160,borderRadius:16,overflow:"hidden",flexShrink:0,background:isDark?"#1a1a1a":"#ddd" }}>
        <img src={profileImg} alt="Tejas Patil" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block" }}/>
        <div style={{ position:"absolute",top:8,right:8,width:24,height:24,borderRadius:"50%",background:"#F15A24",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 8px rgba(241,90,36,0.5)" }}>
          <Code size={11} color="white" strokeWidth={2.2}/>
        </div>
        <div style={{ position:"absolute",bottom:8,left:8,display:"inline-flex",alignItems:"center",gap:4,background:"rgba(13,13,13,0.72)",backdropFilter:"blur(8px)",borderRadius:100,padding:"3px 8px",fontSize:9,color:"#fff",fontWeight:600,border:"1px solid rgba(255,255,255,0.12)" }}>
          <span style={{ position:"relative",width:5,height:5,display:"inline-flex",flexShrink:0 }}>
            <span style={{ position:"absolute",inset:0,borderRadius:"50%",background:"#4ade80",opacity:.7,animation:"ping-dot 1.8s ease-out infinite" }}/>
            <span style={{ position:"absolute",inset:0,borderRadius:"50%",background:"#4ade80" }}/>
          </span>
          Available
        </div>
      </div>

      {/* Name & role */}
      <div style={{ padding:"10px 2px 0",flex:1,display:"flex",flexDirection:"column",minHeight:0 }}>
        <div style={{ fontWeight:800,fontSize:16,letterSpacing:"-.3px",color:t.text,marginBottom:1 }}>Tejas Patil</div>
        <div style={{ fontSize:10,color:"#F15A24",fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",marginBottom:8 }}>Full-Stack Developer</div>

        {/* Stats */}
        <div style={{ display:"flex",gap:0,marginBottom:10,borderRadius:8,overflow:"hidden",border:`1px solid ${t.border}`,flexShrink:0 }}>
          {stats.map((s,i)=>(
            <div key={i} style={{ flex:1,padding:"7px 4px",textAlign:"center",borderRight:i<2?`1px solid ${t.border}`:"none",background:t.card }}>
              <div style={{ fontWeight:900,fontSize:15,color:"#F15A24",lineHeight:1 }}>{s.num}</div>
              <div style={{ fontSize:8,color:t.muted,textTransform:"uppercase",letterSpacing:".1em",marginTop:2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div style={{ display:"flex",gap:5,marginBottom:8,flexShrink:0 }}>
          {socials.map(({ Icon, href, label },i)=>(
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" title={label}
              style={{ flex:1,height:28,borderRadius:8,background:t.card,border:`1px solid ${t.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.muted,textDecoration:"none",transition:"all .18s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="#F15A24"; e.currentTarget.style.color="#fff"; e.currentTarget.style.borderColor="#F15A24"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background=t.card; e.currentTarget.style.color=t.muted; e.currentTarget.style.borderColor=t.border; e.currentTarget.style.transform="translateY(0)"; }}
            ><Icon size={12}/></a>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display:"flex",gap:5,marginBottom:10,flexShrink:0 }}>
          <a href="https://drive.google.com/file/d/1QMv9QgcMzWEvL8Up_4RG8PH811d20p3X/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{ flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"7px 6px",borderRadius:100,background:"#F15A24",color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none",transition:"opacity .2s" }}
            onMouseEnter={e=>e.currentTarget.style.opacity=".82"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}
          >Resume <ArrowUpRight size={11}/></a>
        </div>

        <div style={{ height:1,background:t.border,margin:"0 0 10px",flexShrink:0 }}/>

        {/* Interests */}
        <div style={{ marginBottom:10,flexShrink:0 }}>
          <div style={{ fontSize:8,color:t.muted,textTransform:"uppercase",letterSpacing:".15em",fontWeight:700,marginBottom:6 }}>Interests</div>
          <div style={{ display:"flex",flexWrap:"wrap",gap:4 }}>
            {interests.map((tag,i)=><span key={i} style={{ fontSize:9,color:t.muted,padding:"3px 8px",border:`1px solid ${t.border}`,borderRadius:100,background:t.card }}>{tag}</span>)}
          </div>
        </div>

        {/* Coding profiles */}
        <div style={{ flexShrink:0,marginBottom:10 }}>
          <div style={{ fontSize:8,color:t.muted,textTransform:"uppercase",letterSpacing:".15em",fontWeight:700,marginBottom:6 }}>Coding Profiles</div>
          {profiles.map(({ Icon, name, url, color },i)=>(
            <a key={i} href={url} target="_blank" rel="noopener noreferrer"
              style={{ display:"flex",alignItems:"center",gap:8,padding:"6px 8px",marginBottom:3,borderRadius:8,border:`1px solid ${t.border}`,textDecoration:"none",color:t.muted,fontSize:10,fontWeight:500,transition:"all .18s",background:t.card }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=color; e.currentTarget.style.color=color; e.currentTarget.style.background=color+"12"; }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.color=t.muted; e.currentTarget.style.background=t.card; }}
            >
              <Icon size={12} style={{ color,flexShrink:0 }}/>{name}<ArrowUpRight size={9} style={{ marginLeft:"auto" }}/>
            </a>
          ))}
        </div>

        {/* Currently */}
        <div style={{ flexShrink:0 }}>
          <div style={{ fontSize:8,color:t.muted,textTransform:"uppercase",letterSpacing:".15em",fontWeight:700,marginBottom:6 }}>Currently</div>
          {[
            { emoji:"📍", text:"Kolhapur, India" },
            { emoji:"💼", text:"Programmer Analyst @Cognizant" },
            { emoji:"📚", text:"Grinding Problem Solving" },
          ].map(({ emoji, text },i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:8,padding:"6px 8px",marginBottom:3,borderRadius:8,border:`1px solid ${t.border}`,color:t.muted,fontSize:10,fontWeight:500,background:t.card }}>
              <span style={{ fontSize:11,flexShrink:0 }}>{emoji}</span>
              <span style={{ overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   SHARED TAB HELPERS
══════════════════════════════════════════════ */
const TabWrap = ({ children }) => (
  <motion.div initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-10 }}
    transition={{ duration:.3,ease:[.22,1,.36,1] }} style={{ paddingBottom:8 }}>
    {children}
  </motion.div>
);

const EyeBrow = ({ text, color="#F15A24" }) => (
  <div style={{ fontSize:10,color,fontWeight:700,textTransform:"uppercase",letterSpacing:".18em",marginBottom:12 }}>{text}</div>
);

const SplitHeading = ({ line1, line2 }) => {
  const { t } = useTheme();
  const s = { fontFamily:"'Outfit',sans-serif",fontWeight:900,fontSize:"clamp(32px,3.8vw,58px)",lineHeight:.9,letterSpacing:"-.03em",textTransform:"uppercase",display:"block" };
  return (
    <div style={{ marginBottom:28 }}>
      <span style={{ ...s,color:t.text }}>{line1}</span>
      <span style={{ ...s,color:"transparent",WebkitTextStroke:`1.5px ${t.text}`,opacity:.13 }}>{line2}</span>
    </div>
  );
};

const ArrowLink = ({ href, onClick, size=36 }) => {
  const { t } = useTheme();
  const shared = {
    width:size,height:size,borderRadius:"50%",border:`1px solid ${t.arrowBorder}`,
    display:"flex",alignItems:"center",justifyContent:"center",color:t.arrowColor,
    flexShrink:0,transition:"border-color .18s,color .18s,transform .18s",
  };
  const hover = e=>{ e.currentTarget.style.borderColor="#F15A24"; e.currentTarget.style.color="#F15A24"; e.currentTarget.style.transform="translate(3px,-3px)"; };
  const leave = e=>{ e.currentTarget.style.borderColor=t.arrowBorder; e.currentTarget.style.color=t.arrowColor; e.currentTarget.style.transform="translate(0,0)"; };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ ...shared,textDecoration:"none" }} onMouseEnter={hover} onMouseLeave={leave}><ArrowUpRight size={13}/></a>
    : <button onClick={onClick} style={{ ...shared,background:"none",fontFamily:"'Outfit',sans-serif" }} onMouseEnter={hover} onMouseLeave={leave}><ArrowUpRight size={13}/></button>;
};

/* ══════════════════════════════════════════════
   HOME TAB
══════════════════════════════════════════════ */
const HomeTab = () => {
  const { t, setActiveTab } = useTheme();
  return (
    <TabWrap>
      <EyeBrow text="Portfolio · 2025"/>
      <SplitHeading line1="Software" line2="Developer"/>
      <p style={{ fontSize:13,color:t.muted,lineHeight:1.78,maxWidth:520,marginBottom:28 }}>
        Passionate about building modern, scalable applications with clean architecture and impactful user experiences.
        Joining <span style={{ color:"#F15A24",fontWeight:600 }}>Cognizant</span> as Programmer Analyst Trainee.
      </p>

      {/* Feature cards */}
      <div className="feat-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:32 }}>
        {[
          { bg:"#F15A24", emoji:"🚀", title:"Available for Work",   desc:"Open to SDE-1 roles, full-stack projects, and freelance opportunities.", href:"mailto:tejastp834@gmail.com", dark:true },
          { bg:"#CCFF00", emoji:"⚡", title:"10+ Projects Shipped", desc:"From AI platforms to logistics — building production-grade applications.",  href:null, dark:false, onClick:()=>setActiveTab("projects") },
        ].map((card,i)=>(
          <motion.div key={i} whileHover={{ y:-4 }} style={{ background:card.bg,borderRadius:18,padding:"22px 22px 56px",position:"relative",overflow:"hidden",cursor:"default" }}>
            <div style={{ position:"absolute",right:-12,bottom:-12,width:120,height:120,borderRadius:"50%",border:`1.5px solid ${card.dark?"rgba(255,255,255,0.15)":"rgba(0,0,0,0.1)"}`,pointerEvents:"none" }}/>
            <div style={{ position:"absolute",right:20,bottom:-20,width:80,height:80,borderRadius:"50%",border:`1.5px solid ${card.dark?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.07)"}`,pointerEvents:"none" }}/>
            <div style={{ fontSize:22,marginBottom:9 }}>{card.emoji}</div>
            <div style={{ fontSize:15,fontWeight:800,color:card.dark?"#fff":"#0d0d0d",marginBottom:5,letterSpacing:"-.2px" }}>{card.title}</div>
            <div style={{ fontSize:12,color:card.dark?"rgba(255,255,255,0.8)":"rgba(13,13,13,0.68)",lineHeight:1.58 }}>{card.desc}</div>
            <a href={card.href||"#"} onClick={card.onClick?e=>{e.preventDefault();card.onClick();}:undefined}
              style={{ position:"absolute",bottom:16,right:16,width:34,height:34,borderRadius:"50%",background:card.dark?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.12)",display:"flex",alignItems:"center",justifyContent:"center",color:card.dark?"#fff":"#0d0d0d",textDecoration:"none",transition:"transform .18s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translate(3px,-3px)"} onMouseLeave={e=>e.currentTarget.style.transform="translate(0,0)"}
            ><ArrowUpRight size={14}/></a>
          </motion.div>
        ))}
      </div>

      {/* Dev thoughts */}
      <EyeBrow text="Latest Writing" color={t.muted}/>
      <div style={{ padding:"18px 14px",border:`1px solid ${t.border}`,borderRadius:12,background:t.card }}>
        <div style={{ fontSize:13,color:t.muted,fontStyle:"italic" }}>Uploading soon</div>
      </div>
    </TabWrap>
  );
};

/* ══════════════════════════════════════════════
   PROJECTS TAB
══════════════════════════════════════════════ */
const ProjectsTab = () => {
  const { t } = useTheme();
  return (
    <TabWrap>
      <EyeBrow text="Selected Work"/>
      <SplitHeading line1="Recent" line2="Projects"/>
      <div>
        {projectsData.map((p,i)=>(
          <motion.div key={p.id} initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }} transition={{ delay:i*.06 }}
            style={{ display:"grid",gridTemplateColumns:"76px 1fr auto",gap:16,alignItems:"center",padding:"14px 10px",borderBottom:`1px solid ${t.border}`,borderRadius:8,transition:"background .18s" }}
            onMouseEnter={e=>e.currentTarget.style.background=t.hoverRow} onMouseLeave={e=>e.currentTarget.style.background="transparent"}
          >
            <div style={{ width:76,height:52,borderRadius:9,overflow:"hidden",flexShrink:0,background:t.bg2 }}>
              <img src={p.thumb} alt={p.title} style={{ width:"100%",height:"100%",objectFit:"cover" }}/>
            </div>
            <div>
              <div style={{ fontWeight:700,fontSize:14,color:t.text,marginBottom:3 }}>{p.title}</div>
              <div style={{ fontSize:11,color:t.muted,lineHeight:1.5,marginBottom:7 }}>{p.desc}</div>
              <div style={{ display:"flex",gap:4,flexWrap:"wrap" }}>
                {p.tags.map((tag,j)=><span key={j} className="tag">{tag}</span>)}
              </div>
            </div>
            <ArrowLink href={p.demo||p.github}/>
          </motion.div>
        ))}
      </div>
    </TabWrap>
  );
};

/* ══════════════════════════════════════════════
   ABOUT TAB
══════════════════════════════════════════════ */
const AboutTab = () => {
  const { t } = useTheme();
  return (
    <TabWrap>
      <EyeBrow text="Work History"/>
      <SplitHeading line1="Experience" line2="&amp; Career"/>
      <div>
        {experienceData.map((exp,i)=>(
          <motion.div key={i} initial={{ opacity:0,y:22 }} animate={{ opacity:1,y:0 }} transition={{ delay:i*.1 }}
            style={{ padding:"24px 0",borderBottom:`1px solid ${t.border}` }}
          >
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:20 }}>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ display:"inline-flex",alignItems:"center",gap:6,fontSize:10,color:"#F15A24",textTransform:"uppercase",letterSpacing:".12em",marginBottom:8,fontWeight:700 }}>
                  {exp.current && <span style={{ width:5,height:5,borderRadius:"50%",background:"#F15A24",flexShrink:0 }}/>}
                  {exp.date}
                  {exp.current && <span style={{ background:"rgba(241,90,36,0.1)",border:"1px solid rgba(241,90,36,0.28)",padding:"2px 7px",borderRadius:100,fontSize:9 }}>Current</span>}
                </div>
                <div style={{ fontWeight:800,fontSize:18,color:t.text,marginBottom:3,letterSpacing:"-.3px" }}>{exp.company}</div>
                <div style={{ fontSize:11,color:"#F15A24",textTransform:"uppercase",letterSpacing:".1em",marginBottom:10,fontWeight:600 }}>{exp.role}</div>
                <p style={{ fontSize:12,color:t.muted,lineHeight:1.72,marginBottom:12 }}>{exp.desc}</p>
                <div style={{ display:"flex",gap:5,flexWrap:"wrap" }}>
                  {exp.tags.map((tag,j)=><span key={j} className="tag">{tag}</span>)}
                </div>
              </div>
              <ArrowLink href={null} onClick={null}/>
            </div>
          </motion.div>
        ))}
      </div>
    </TabWrap>
  );
};

/* ══════════════════════════════════════════════
   TOOLS TAB
══════════════════════════════════════════════ */
const ToolsTab = () => {
  const { t } = useTheme();
  return (
    <TabWrap>
      <EyeBrow text="Stack &amp; Tooling" color="#CCFF00"/>
      <SplitHeading line1="Premium" line2="Tools"/>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12 }}>
        {toolsData.map((tool,i)=>(
          <motion.div key={i} initial={{ opacity:0,y:12 }} animate={{ opacity:1,y:0 }} transition={{ delay:i*.035 }} whileHover={{ y:-4 }}
            style={{ display:"flex",alignItems:"center",gap:14,padding:"16px 18px",background:t.card,border:`1px solid ${t.border}`,borderRadius:14,transition:"border-color .18s,background .18s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=tool.color+"66"; e.currentTarget.style.background=tool.color+"10"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor=t.border; e.currentTarget.style.background=t.card; }}
          >
            <div style={{ width:42,height:42,borderRadius:10,background:t.border,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,color:tool.color }}>{tool.icon}</div>
            <span style={{ fontSize:14,color:t.text,fontWeight:600,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </TabWrap>
  );
};


/* ══════════════════════════════════════════════
   FLOATING CORNER BUTTONS
══════════════════════════════════════════════ */
const FloatingButtons = () => {
  const { setActiveTab } = useTheme();
  return (
    <>
      <motion.div className="fp-btns" initial={{ opacity:0,x:-16 }} animate={{ opacity:1,x:0 }} transition={{ delay:1.1 }} style={{ position:"fixed",bottom:20,left:20,zIndex:900 }}>
        <button onClick={()=>setActiveTab("projects")}
          style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:100,background:"rgba(241,90,36,0.1)",border:"1px solid rgba(241,90,36,0.3)",color:"#F15A24",fontSize:11,fontWeight:600,backdropFilter:"blur(10px)",fontFamily:"'Outfit',sans-serif",transition:"background .18s" }}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(241,90,36,0.2)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(241,90,36,0.1)"}
        ><Play size={9} fill="currentColor"/> Projects</button>
      </motion.div>
      <motion.div className="fp-btns" initial={{ opacity:0,x:16 }} animate={{ opacity:1,x:0 }} transition={{ delay:1.1 }} style={{ position:"fixed",bottom:20,right:20,zIndex:900,display:"flex",flexDirection:"column",gap:6 }}>
        <a href="https://drive.google.com/file/d/1QMv9QgcMzWEvL8Up_4RG8PH811d20p3X/view?usp=sharing" target="_blank" rel="noopener noreferrer"
          style={{ display:"inline-flex",alignItems:"center",gap:5,padding:"8px 14px",borderRadius:100,background:"#F15A24",color:"#fff",fontSize:11,fontWeight:600,textDecoration:"none",boxShadow:"0 4px 12px rgba(241,90,36,0.32)",transition:"opacity .18s,transform .18s" }}
          onMouseEnter={e=>{ e.currentTarget.style.opacity=".82"; e.currentTarget.style.transform="translateY(-2px)"; }} onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}
        >Resume <ArrowUpRight size={10}/></a>
        <a href="mailto:tejastp834@gmail.com"
          style={{ display:"inline-flex",alignItems:"center",gap:5,padding:"8px 14px",borderRadius:100,background:"#CCFF00",color:"#0d0d0d",fontSize:11,fontWeight:700,textDecoration:"none",boxShadow:"0 4px 12px rgba(204,255,0,0.2)",transition:"opacity .18s,transform .18s" }}
          onMouseEnter={e=>{ e.currentTarget.style.opacity=".82"; e.currentTarget.style.transform="translateY(-2px)"; }} onMouseLeave={e=>{ e.currentTarget.style.opacity="1"; e.currentTarget.style.transform="translateY(0)"; }}
        >Hire Me <ArrowUpRight size={10}/></a>
      </motion.div>
    </>
  );
};

/* ══════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════ */
const Footer = () => {
  const { t } = useTheme();
  return (
    <div style={{ flexShrink:0,borderTop:`1px solid ${t.border}`,padding:"8px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8 }}>
      <div style={{ fontSize:10,color:t.muted }}>© 2025 <span style={{ color:"#F15A24",fontWeight:600 }}>Tejas Patil</span> · Built with React &amp; Framer Motion</div>
      <div style={{ display:"flex",gap:12,fontSize:10 }}>
        <a href="https://github.com/Tejascodez" target="_blank" rel="noopener noreferrer" style={{ color:"#CCFF00",textDecoration:"none",fontWeight:600 }}>GitHub</a>
        <a href="https://www.linkedin.com/in/tejasp834" target="_blank" rel="noopener noreferrer" style={{ color:"#F15A24",textDecoration:"none",fontWeight:600 }}>LinkedIn</a>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   ROOT
══════════════════════════════════════════════ */
const TABS = {
  home:     <HomeTab/>,
  projects: <ProjectsTab/>,
  about:    <AboutTab/>,
  tools:    <ToolsTab/>,
};

export default function PortfolioLanding() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const t = isDark ? DARK : LIGHT;

  useEffect(()=>{
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  },[]);

  return (
    <ThemeCtx.Provider value={{ isDark, toggle:()=>setIsDark(d=>!d), t, activeTab, setActiveTab }}>
      <div className="pf-wrap">
        <GlobalStyles isDark={isDark}/>
        <CustomCursor/>
        <FloatingNav/>

        {/* ── Two-column layout (below fixed nav) ── */}
        <div style={{ display:"flex",flex:1,height:"calc(100vh - 62px)",marginTop:62,overflow:"hidden",padding:"0 28px 20px" }}>

          {/* LEFT SIDEBAR */}
          <aside className="sidebar" style={{ width:260,flexShrink:0,height:"100%",border:`1px solid ${t.border}`,borderRadius:16,background:t.sidebarBg,transition:"background .3s,border-color .3s",overflow:"hidden",marginRight:12 }}>
            <ProfileSidebar/>
          </aside>

          {/* RIGHT PANEL */}
          <div style={{ flex:1,height:"100%",display:"flex",flexDirection:"column",overflow:"hidden",border:`1px solid ${t.border}`,borderRadius:16 }}>
            <div className="right-panel" style={{ flex:1,overflowY:"auto",padding:"40px 48px" }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity:0,y:14 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-8 }} transition={{ duration:.28,ease:[.22,1,.36,1] }}>
                  {TABS[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
            <Footer/>
          </div>
        </div>

        <FloatingButtons/>
      </div>
    </ThemeCtx.Provider>
  );
}

