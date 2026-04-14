"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("Theme");

  return (
    <button
      onClick={toggleTheme}
      className="border-3 border-current px-4 py-2 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
      aria-label={theme === "dark" ? t("toLight") : t("toDark")}
    >
      {theme === "dark" ? t("light") : t("dark")}
    </button>
  );
}
