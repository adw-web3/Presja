interface StreamingLinksProps {
  links: {
    spotify?: string;
    appleMusic?: string;
    tidal?: string;
    youtube?: string;
  };
}

export function StreamingLinks({ links }: StreamingLinksProps) {
  const platforms = [
    { key: "spotify", label: "SPOTIFY", url: links.spotify },
    { key: "appleMusic", label: "APPLE MUSIC", url: links.appleMusic },
    { key: "tidal", label: "TIDAL", url: links.tidal },
    { key: "youtube", label: "YOUTUBE", url: links.youtube },
  ].filter((p) => p.url);

  if (platforms.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {platforms.map((platform) => (
        <a
          key={platform.key}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-3 border-current px-4 py-2 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          {platform.label}
        </a>
      ))}
    </div>
  );
}
