import { Code } from "lucide-react";
import { profile, profileImg } from "../data";
import { useTheme } from "../theme";

export default function ProfileCard() {
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
          borderTop: "1px solid rgba(21,17,15,0.10)",
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
