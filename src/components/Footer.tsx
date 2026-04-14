import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  return (
    <footer className="border-t-3 border-current">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                SPOTIFY
              </a>
              <a
                href="https://music.apple.com/pl/artist/tw%C3%B3jsamuel/1692947466"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                APPLE MUSIC
              </a>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/twojsamuel/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.tiktok.com/@twojsamuel"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                TIKTOK
              </a>
              <Link
                href="/artysta"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                {tNav("artist")}
              </Link>
              <Link
                href="/artysta#kontakt"
                className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                {t("contact")}
              </Link>
            </div>
          </div>
          <div className="font-mono text-sm uppercase tracking-widest">
            <span className="opacity-70">2026 </span>
            <Link href="/artysta" className="transition-opacity hover:opacity-70">
              TWÓJSAMUEL
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
