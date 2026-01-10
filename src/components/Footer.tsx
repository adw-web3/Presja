import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-3 border-current">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-mono text-sm uppercase tracking-widest">
            <span className="opacity-70">&copy; 2025</span>{" "}
            <Link href="/artysta" className="transition-opacity hover:opacity-70">
              TWÓJSAMUEL
            </Link>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              SPOTIFY
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              APPLE MUSIC
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
