interface LyricsSectionProps {
  lyrics: string;
}

export function LyricsSection({ lyrics }: LyricsSectionProps) {
  return (
    <div className="border-3 border-current p-6">
      <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
        {lyrics}
      </pre>
    </div>
  );
}
