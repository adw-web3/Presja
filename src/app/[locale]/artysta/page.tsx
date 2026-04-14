import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.artist" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Artist");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-block font-mono text-sm uppercase tracking-widest opacity-70 transition-opacity hover:opacity-100"
      >
        {t("back")}
      </Link>

      {/* Header */}
      <header className="mb-12 border-b-3 border-current pb-12">
        <h1 className="font-mono text-4xl font-bold uppercase tracking-widest md:text-6xl">
          TWÓJSAMUEL
        </h1>
      </header>

      {/* Photo */}
      <section className="mb-12">
        <div className="border-3 border-current">
          <Image
            src="/zdjecie-artysty.PNG"
            alt="TwójSamuel"
            width={896}
            height={896}
            className="w-full"
            priority
          />
        </div>
      </section>

      {/* Bio */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          {t("bio.heading")}
        </h2>
        <div className="space-y-4 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">{t("bio.p1")}</p>
          <p className="font-mono text-sm leading-relaxed">{t("bio.p2")}</p>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          {t("listen")}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://open.spotify.com/artist/3geIvmq6KlhGzEWFR8MoZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            SPOTIFY
          </a>
          <a
            href="https://music.apple.com/pl/artist/tw%C3%B3jsamuel/1692947466"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            APPLE MUSIC
          </a>
          <a
            href="https://music.youtube.com/channel/UCCbQkSIBkSpG4qubx8uk4lQ"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            YOUTUBE MUSIC
          </a>
          <a
            href="https://tidal.com/artist/39798811"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            TIDAL
          </a>
          <a
            href="https://www.deezer.com/pl/artist/215949845"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            DEEZER
          </a>
          <a
            href="https://soundcloud.com/twojsamuel-music"
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
          {t("follow")}
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/twojsamuel/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.tiktok.com/@twojsamuel"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            TIKTOK
          </a>
          <a
            href="https://www.youtube.com/@twojsamuel1744"
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
          >
            YOUTUBE
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          {t("contact.heading")}
        </h2>
        <div className="border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            <span className="opacity-70">{t("contact.management")}</span>{" "}
            <a href="mailto:faustyna@twojapresja.pl" className="underline">
              faustyna@twojapresja.pl
            </a>
          </p>
          <p className="font-mono text-sm leading-relaxed">
            <span className="opacity-70">{t("contact.artist")}</span>{" "}
            <a href="mailto:samuel@twojapresja.pl" className="underline">
              samuel@twojapresja.pl
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
