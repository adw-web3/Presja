import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSongBySlug, songs } from "@/data/songs";
import { LyricsSection } from "@/components/LyricsSection";
import { StreamingLinks } from "@/components/StreamingLinks";
import { DownloadButton } from "@/components/DownloadButton";
import { routing } from "@/i18n/routing";

interface SongPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    songs.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({ params }: SongPageProps) {
  const { locale, slug } = await params;
  const song = getSongBySlug(slug);
  const t = await getTranslations({ locale, namespace: "Metadata.song" });
  if (!song) return { title: t("notFound") };

  const story = locale === "en" && song.storyEn ? song.storyEn : song.story;
  return {
    title: t("title", { title: song.title }),
    description: story,
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const song = getSongBySlug(slug);

  if (!song) {
    notFound();
  }

  const t = await getTranslations("Song");
  const story = locale === "en" && song.storyEn ? song.storyEn : song.story;
  const currentIndex = songs.findIndex((s) => s.slug === slug);
  const prevSong = currentIndex > 0 ? songs[currentIndex - 1] : null;
  const nextSong =
    currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null;

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
        <span className="mb-2 block font-mono text-6xl font-bold opacity-30">
          {String(song.id).padStart(2, "0")}
        </span>
        <h1 className="mb-2 font-mono text-4xl font-bold uppercase tracking-widest md:text-6xl">
          {song.title}
        </h1>
        {song.featuring && (
          <p className="font-mono text-xl uppercase tracking-widest opacity-70">
            feat. {song.featuring}
          </p>
        )}
      </header>

      {/* Story */}
      <section className="mb-12">
        <h2 className="mb-4 font-mono text-xl font-bold uppercase tracking-widest">
          {t("story")}
        </h2>
        <div className="border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">{story}</p>
        </div>
      </section>

      {/* Actions */}
      <section className="mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <DownloadButton url={song.downloadUrl} />
          <StreamingLinks links={song.streamingLinks} />
        </div>
      </section>

      {/* Lyrics */}
      <section className="mb-12">
        <h2 className="mb-8 font-mono text-xl font-bold uppercase tracking-widest">
          {t("lyrics")}
        </h2>
        <LyricsSection lyrics={song.lyrics} />
      </section>

      {/* Navigation */}
      <nav className="flex items-center justify-between border-t-3 border-current pt-8">
        {prevSong ? (
          <Link
            href={`/presja/${prevSong.slug}`}
            className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
          >
            ← {prevSong.title}
          </Link>
        ) : (
          <span />
        )}
        {nextSong ? (
          <Link
            href={`/presja/${nextSong.slug}`}
            className="font-mono text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
          >
            {nextSong.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
