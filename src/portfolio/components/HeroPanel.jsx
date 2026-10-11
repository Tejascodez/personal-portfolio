import { Briefcase, Code } from "lucide-react";
import { profile } from "../data";
import { useTheme } from "../theme";
import SectionTitle from "./SectionTitle";

export default function HeroPanel() {
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
            className="hero-title"
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
            className="hero-title"
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
          className="hero-intro"
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
          className="hero-feature-grid"
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
