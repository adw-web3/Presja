interface LyricsSectionProps {
  lyrics: {
    stanza1: string;
    stanza2: string;
    stanza3: string;
  };
}

export function LyricsSection({ lyrics }: LyricsSectionProps) {
  const stanzas = [
    {
      number: "I",
      title: "WPROWADZENIE W PRESJĘ",
      text: lyrics.stanza1,
    },
    {
      number: "II",
      title: "UDAWANIE I RADZENIE SOBIE",
      text: lyrics.stanza2,
    },
    {
      number: "III",
      title: "PRAWDZIWE UCZUCIA",
      text: lyrics.stanza3,
    },
  ];

  return (
    <div className="space-y-8">
      {stanzas.map((stanza) => (
        <div key={stanza.number} className="border-3 border-current p-6">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-3xl font-bold">{stanza.number}</span>
            <h4 className="font-mono text-sm uppercase tracking-widest opacity-70">
              {stanza.title}
            </h4>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">
            {stanza.text}
          </pre>
        </div>
      ))}
    </div>
  );
}
