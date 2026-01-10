import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TwójSamuel | PRESJA",
  description: "Poznaj TwójSamuela — artystę stojącego za albumem PRESJA.",
};

export default function ArtistPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-block font-mono text-sm uppercase tracking-widest opacity-70 transition-opacity hover:opacity-100"
      >
        ← POWRÓT
      </Link>

      {/* Header */}
      <header className="mb-12 border-b-3 border-current pb-12">
        <h1 className="font-mono text-4xl font-bold uppercase tracking-widest md:text-6xl">
          TWÓJSAMUEL
        </h1>
      </header>

      {/* Photo placeholder */}
      <section className="mb-12">
        <div className="flex aspect-square items-center justify-center border-3 border-current md:aspect-video">
          <span className="font-mono text-sm uppercase tracking-widest opacity-50">
            ZDJĘCIE ARTYSTY
          </span>
        </div>
      </section>

      {/* Bio */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          BIOGRAFIA
        </h2>
        <div className="space-y-4 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          SŁUCHAJ
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            SPOTIFY
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            APPLE MUSIC
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            TIDAL
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            YOUTUBE MUSIC
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            SOUNDCLOUD
          </a>
        </div>
      </section>

      {/* Social Links */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          OBSERWUJ
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            INSTAGRAM
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            TIKTOK
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            TWITTER / X
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            FACEBOOK
          </a>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          KONTAKT
        </h2>
        <div className="border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            <span className="opacity-70">BOOKING:</span>{" "}
            <a href="mailto:booking@twojsamuel.pl" className="underline">
              booking@twojsamuel.pl
            </a>
          </p>
          <p className="font-mono text-sm leading-relaxed">
            <span className="opacity-70">MANAGEMENT:</span>{" "}
            <a href="mailto:management@twojsamuel.pl" className="underline">
              management@twojsamuel.pl
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
