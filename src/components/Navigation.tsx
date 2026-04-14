import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navigation() {
  return (
    <nav className="border-b-3 border-current">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="font-mono text-2xl font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
        >
          PRESJA
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
