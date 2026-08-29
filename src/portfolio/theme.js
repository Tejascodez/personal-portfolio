import { createContext, useContext } from "react";

export const THEME = {
  dark: {
    page: "#14100e",
    surface: "#1b1512",
    card: "#f4efe8",
    softCard: "#201916",
    border: "rgba(255,255,255,0.08)",
    text: "#fffaf4",
    muted: "#b2a79d",
    mutedStrong: "#7f746a",
    accent: "#ff7a2f",
    accentSoft: "#2f1f17",
    lime: "#d8ff3e",
    shadow: "0 30px 80px rgba(0,0,0,0.28)",
  },
  light: {
    page: "#f4eee7",
    surface: "#fff9f2",
    card: "#ffffff",
    softCard: "#efe5db",
    border: "rgba(20,16,14,0.10)",
    text: "#17110f",
    muted: "#695f57",
    mutedStrong: "#91857c",
    accent: "#ef6c24",
    accentSoft: "#ffe5d2",
    lime: "#c8ff42",
    shadow: "0 26px 70px rgba(36,24,18,0.12)",
  },
};

export const ThemeCtx = createContext(null);

export function useTheme() {
  return useContext(ThemeCtx);
}
