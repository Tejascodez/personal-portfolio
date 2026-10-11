import { useMemo, useState } from "react";
import AboutSection from "./portfolio/components/AboutSection";
import FloatingNav from "./portfolio/components/FloatingNav";
import GlobalStyle from "./portfolio/components/GlobalStyle";
import HeroPanel from "./portfolio/components/HeroPanel";
import ProfileCard from "./portfolio/components/ProfileCard";
import ProjectsSection from "./portfolio/components/ProjectsSection";
import ToolsSection from "./portfolio/components/ToolsSection";
import { THEME, ThemeCtx } from "./portfolio/theme";

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
          className="portfolio-shell"
          style={{
            maxWidth: 1380,
            margin: "0 auto",
            padding: "20px 18px 40px",
          }}
        >
          <FloatingNav />

          <main
            className="portfolio-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "380px minmax(0, 1fr)",
              gap: 26,
              alignItems: "start",
            }}
          >
            <div className="portfolio-profile" style={{ position: "sticky", top: 112 }}>
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
            .portfolio-layout {
              grid-template-columns: 1fr !important;
            }

            .portfolio-profile {
              position: static !important;
              width: min(100%, 480px);
              margin: 0 auto;
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

          @media (max-width: 760px) {
            .hero-feature-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 600px) {
            .portfolio-shell {
              padding: 12px 14px 28px !important;
            }
            .portfolio-layout {
              gap: 24px !important;
            }
            .hero-title {
              font-size: clamp(2.7rem, 12vw, 4.2rem) !important;
              overflow-wrap: anywhere;
            }
            .hero-intro {
              font-size: 16px !important;
            }
            .hero-feature-grid > div {
              padding: 20px !important;
            }
            #about > div {
              padding: 20px !important;
            }
            #about > div:nth-child(2) > div {
              padding: 20px !important;
            }
            #projects article > div:last-child {
              padding: 18px !important;
            }
          }
        `}
      </style>
    </ThemeCtx.Provider>
  );
}
