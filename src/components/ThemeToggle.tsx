"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border-3 border-current px-4 py-2 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
      aria-label={theme === "dark" ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
    >
      {theme === "dark" ? "JASNY" : "CIEMNY"}
    </button>
  );
}
