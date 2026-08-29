import { useTheme } from "../theme";

export default function SectionTitle({ eyebrow, title, description }) {
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
