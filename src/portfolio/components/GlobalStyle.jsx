import { useTheme } from "../theme";

export default function GlobalStyle() {
  const { isDark, theme } = useTheme();

  return (
    <style>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap");

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, body, #root { margin: 0; min-height: 100%; }
        body {
          font-family: "Outfit", sans-serif;
          background: ${theme.page};
          color: ${theme.text};
        }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        ::selection {
          background: ${isDark ? "rgba(255,122,47,0.24)" : "rgba(239,108,36,0.18)"};
        }
      `}
    </style>
  );
}
