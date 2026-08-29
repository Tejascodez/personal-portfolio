import { ArrowUpRight } from "lucide-react";
import { experienceData, profile } from "../data";
import { profileBadgeStyle, profileRowStyle, tagStyle } from "../styles";
import { useTheme } from "../theme";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
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
