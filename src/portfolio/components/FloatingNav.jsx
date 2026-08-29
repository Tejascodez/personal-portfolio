import { Moon, Sun } from "lucide-react";
import { navItems } from "../data";
import { useTheme } from "../theme";

export default function FloatingNav() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <div
      style={{
        position: "sticky",
        top: 20,
        zIndex: 20,
        display: "flex",
        justifyContent: "center",
        marginBottom: 28,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          borderRadius: 999,
          border: `1px solid ${theme.border}`,
          background: isDark ? "rgba(24,19,16,0.84)" : "rgba(255,249,242,0.88)",
          backdropFilter: "blur(16px)",
          boxShadow: theme.shadow,
        }}
      >
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              width: 42,
              height: 42,
              display: "grid",
              placeItems: "center",
              borderRadius: 14,
              color: theme.muted,
              background: "transparent",
              transition: "0.2s ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = theme.accentSoft;
              event.currentTarget.style.color = theme.accent;
              event.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "transparent";
              event.currentTarget.style.color = theme.muted;
              event.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label={label}
            title={label}
          >
            <Icon size={18} strokeWidth={2} />
          </a>
        ))}
        <div
          style={{
            width: 1,
            height: 24,
            background: theme.border,
            marginInline: 2,
          }}
        />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
          style={{
            width: 42,
            height: 42,
            display: "grid",
            placeItems: "center",
            borderRadius: 14,
            border: "none",
            background: "transparent",
            color: theme.muted,
          }}
        >
          {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>
      </nav>
    </div>
  );
}
