"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const other = locale === "pl" ? "en" : "pl";

  return (
    <Link
      href={pathname}
      locale={other}
      className="border-3 border-current px-4 py-2 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
      aria-label={other === "en" ? "Switch to English" : "Przełącz na polski"}
    >
      {other.toUpperCase()}
    </Link>
  );
}
