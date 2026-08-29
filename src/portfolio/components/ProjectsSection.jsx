import { ArrowUpRight, Github, projectsData } from "../data";
import { iconLinkStyle, tagStyle } from "../styles";
import { useTheme } from "../theme";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection() {
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
