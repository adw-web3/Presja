interface DownloadButtonProps {
  url?: string;
}

export function DownloadButton({ url }: DownloadButtonProps) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
    >
      POBIERZ HI-RES
    </a>
  );
}
