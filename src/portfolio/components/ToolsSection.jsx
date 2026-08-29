import { toolsData } from "../data";
import { useTheme } from "../theme";
import SectionTitle from "./SectionTitle";

export default function ToolsSection() {
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
