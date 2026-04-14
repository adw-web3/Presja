import { getTranslations, setRequestLocale } from "next-intl/server";
import { SongList } from "@/components/SongList";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      {/* Hero */}
      <header className="mb-16 border-b-3 border-current pb-16">
        <h1 className="mb-4 font-mono text-6xl font-bold uppercase tracking-widest md:text-8xl">
          PRESJA
        </h1>
        <p className="font-mono text-xl uppercase tracking-widest opacity-70">
          {t("hero.subtitle")}
        </p>
      </header>

      {/* Album Concept */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          {t("about.heading")}
        </h2>
        <div className="space-y-4 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">{t("about.p1")}</p>
          <p className="font-mono text-sm leading-relaxed">{t("about.p2")}</p>
          <p className="font-mono text-sm leading-relaxed">{t("about.p3")}</p>
          <p className="font-mono text-sm leading-relaxed">{t("about.p4")}</p>
        </div>
      </section>

      {/* Action buttons */}
      <section className="mb-16 flex flex-wrap gap-4">
        <a
          href="#struktura"
          className="inline-block border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          {t("cta.structure")}
        </a>
        <a
          href="https://drive.google.com/drive/folders/1f7YsJ7YY3Bg4lVL4cOhpVvn61DoxdGLt?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
        >
          {t("cta.download")}
        </a>
      </section>

      {/* Song List */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          {t("songs.heading")}
        </h2>
        <SongList />
      </section>

      {/* Song Structure */}
      <section id="struktura" className="scroll-mt-8">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          {t("structure.heading")}
        </h2>
        <div className="mb-8 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            {t("structure.intro")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">I</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              {t("structure.morning.heading")}
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              {t("structure.morning.body")}
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">II</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              {t("structure.afternoon.heading")}
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              {t("structure.afternoon.body")}
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">III</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              {t("structure.evening.heading")}
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              {t("structure.evening.body")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
