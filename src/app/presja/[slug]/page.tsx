import { notFound } from "next/navigation";
import Link from "next/link";
import { getSongBySlug, getAllSongSlugs, songs } from "@/data/songs";
import { LyricsSection } from "@/components/LyricsSection";
import { StreamingLinks } from "@/components/StreamingLinks";
import { DownloadButton } from "@/components/DownloadButton";

interface SongPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSongSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);
  if (!song) return { title: "Utwór nie znaleziony" };

  return {
    title: `${song.title} | PRESJA — TwójSamuel`,
    description: song.story,
  };
}

export default async function SongPage({ params }: SongPageProps) {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) {
    notFound();
  }

  const currentIndex = songs.findIndex((s) => s.slug === slug);
  const prevSong = currentIndex > 0 ? songs[currentIndex - 1] : null;
  const nextSong = currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-block font-mono text-sm uppercase tracking-widest opacity-70 transition-opacity hover:opacity-100"
      >
        ← POWRÓT DO LISTY
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
          HISTORIA
        </h2>
        <div className="border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">{song.story}</p>
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
          TEKST
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
