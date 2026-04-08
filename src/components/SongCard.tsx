"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import type { Song } from "@/data/songs";

interface SongCardProps {
  song: Song;
}

export function SongCard({ song }: SongCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  return (
    <div className="border-3 border-current">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-foreground hover:text-background md:px-6"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-2xl font-bold">
            {String(song.id).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-mono text-lg font-bold uppercase tracking-widest">
              {song.title}
            </h3>
            {song.featuring && (
              <span className="font-mono text-sm uppercase opacity-70">
                feat. {song.featuring}
              </span>
            )}
          </div>
        </div>
        <span
          className="font-mono text-2xl transition-transform duration-300"
          style={{ transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isExpanded ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="border-t-3 border-current px-4 py-6 md:px-6">
          <p className="mb-6 font-mono text-sm leading-relaxed opacity-80">
            {song.story}
          </p>
          <Link
            href={`/presja/${song.slug}`}
            className="inline-block border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            ZOBACZ WIĘCEJ →
          </Link>
        </div>
      </div>
    </div>
  );
}
