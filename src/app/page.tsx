import { SongList } from "@/components/SongList";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <header className="mb-16 border-b-3 border-current pb-16">
        <h1 className="mb-4 font-mono text-6xl font-bold uppercase tracking-widest md:text-8xl">
          PRESJA
        </h1>
        <p className="font-mono text-xl uppercase tracking-widest opacity-70">
          TWÓJSAMUEL — 2025
        </p>
      </header>

      {/* Album Concept */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          O ALBUMIE
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border-3 border-current p-6">
            <p className="font-mono text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Album
              &quot;Presja&quot; to podróż przez różne formy presji, z którymi mierzymy się
              na co dzień. Od presji czasu, przez finansową, aż po społeczną —
              każdy utwór odkrywa inny aspekt tego wszechobecnego uczucia.
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <p className="mb-4 font-mono text-sm uppercase tracking-widest opacity-70">
              STRUKTURA UTWORÓW
            </p>
            <p className="font-mono text-sm leading-relaxed">
              Każdy utwór składa się z trzech zwrotek, które prowadzą słuchacza
              przez kolejne etapy doświadczania presji — od pierwszego kontaktu,
              przez próby radzenia sobie, aż po surową prawdę.
            </p>
          </div>
        </div>
      </section>

      {/* Song Structure Explanation */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          STRUKTURA KAŻDEGO UTWORU
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">I</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              WPROWADZENIE
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Pierwsza zwrotka wprowadza w konkretny rodzaj presji. Opisuje
              moment, gdy presja zaczyna się materializować i wkraczać w nasze
              życie.
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">II</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              FASADA
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Druga zwrotka opisuje, jak udajemy że radzimy sobie z presją.
              Maska, którą zakładamy dla innych — próby normalizacji i
              przetrwania.
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">III</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              PRAWDA
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Trzecia zwrotka to surowa prawda. Jak naprawdę czujemy się pod
              presją, gdy nikt nie patrzy. Bez filtrów i udawania.
            </p>
          </div>
        </div>
      </section>

      {/* Song List */}
      <section>
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          UTWORY
        </h2>
        <SongList />
      </section>
    </div>
  );
}
