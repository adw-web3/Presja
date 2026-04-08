import { SongList } from "@/components/SongList";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      {/* Hero */}
      <header className="mb-16 border-b-3 border-current pb-16">
        <h1 className="mb-4 font-mono text-6xl font-bold uppercase tracking-widest md:text-8xl">
          PRESJA
        </h1>
        <p className="font-mono text-xl uppercase tracking-widest opacity-70">
          TWÓJSAMUEL — 2026
        </p>
      </header>

      {/* Album Concept */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          O ALBUMIE
        </h2>
        <div className="space-y-4 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            Album opowiada o napięciach, które towarzyszą codziennemu życiu
            współczesnych ludzi. Każdy utwór przedstawia inną formę presji, z
            którą zmaga się Kasia, bohaterka całego albumu. Problemy w każdym
            utworze mogą wydawać się drobne na pierwszy rzut oka, jednak
            wszystkie razem tworzą emocjonalny ciężar, który wpływa na
            poczucie własnej wartości.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Celem albumu jest pokazanie, że nawet z pozoru podstawowe problemy,
            które pozostają nierozwiązane, potrafią stworzyć w nas napięcie,
            odciskające się na każdym dniu. Zamiast cieszyć się życiem, stale
            zastanawiamy się, czy dobrze stosujemy się do niewidzialnych zasad
            wykreowanych przez społeczeństwo.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Postać kobiety w całym albumie ma na celu pokazanie pełnego
            spektrum problemów, które nie mają przypisanych zaimków, a ich
            paliwem napędowym często jest wizja niemożliwego do osiągnięcia
            celu, jaki sobie wyznaczamy.
          </p>
          <p className="font-mono text-sm leading-relaxed">
            Przez takie myślenie każdy dzień może zamienić się w szereg pytań o
            to, czy jesteśmy wystarczający, a każda chwila spoczynku zamienia
            się w koszmar, w którym ktoś nas właśnie wyprzedza.
          </p>
        </div>
      </section>

      {/* Action buttons */}
      <section className="mb-16 flex flex-wrap gap-4">
        <a
          href="#struktura"
          className="inline-block border-3 border-current px-6 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
        >
          O STRUKTURZE UTWORÓW ↓
        </a>
        <a
          href="https://drive.google.com/drive/folders/1f7YsJ7YY3Bg4lVL4cOhpVvn61DoxdGLt?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-3 border-current bg-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest text-background transition-colors hover:bg-background hover:text-foreground"
        >
          POBIERZ ALBUM HI-RES
        </a>
      </section>

      {/* Song List */}
      <section className="mb-16">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          PRESJA
        </h2>
        <SongList />
      </section>

      {/* Song Structure */}
      <section id="struktura" className="scroll-mt-8">
        <h2 className="mb-8 font-mono text-2xl font-bold uppercase tracking-widest">
          STRUKTURA UTWORÓW
        </h2>
        <div className="mb-8 border-3 border-current p-6">
          <p className="font-mono text-sm leading-relaxed">
            Każdy utwór składa się z trzech pór dnia. Na początku mamy poranek,
            który jest pierwszą materializacją presji. Tutaj pojawiają się
            najbardziej podstawowe myśli i problemy, które automatycznie
            przychodzą do głowy, bez namysłu. Druga część to popołudnie — w tym
            czasie pojawia się najwięcej pytań związanych z sensem negatywnych
            uczuć głównej bohaterki. Pod wieczór musi zostać podjęta decyzja.
            Bohaterka albo wyrywa się z więzów presji, albo nie radzi sobie,
            ponieważ za głęboko weszła ona w jej codzienne życie.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">I</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              PORANEK
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Poranek to moment pierwszego zetknięcia się z presją. Pojawia się
              ona jeszcze zanim bohaterka w pełni „wejdzie" w dzień. Myśli są
              szybkie, automatyczne i często nieuświadomione. To krótkie impulsy,
              na pozór niewinne, ale od razu ustawiają ton całego dnia. Problemy
              mają tu swoją najprostszą formę. Są jeszcze nienazwane, ale już
              obecne i odczuwalne. To etap, w którym presja już zaczyna być
              widoczna, a Kasia przyjmuje ją niemal bezrefleksyjnie.
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">II</span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              POPOŁUDNIE
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Popołudnie to rozwinięcie napięcia. Presja staje się bardziej
              wyraźna i zaczyna wpływać na sposób myślenia bohaterki. To moment
              największej intensywności emocji — pojawia się natłok pytań,
              wątpliwości i prób zrozumienia własnych uczuć. Kasia zaczyna
              analizować to, co się z nią dzieje, ale jednocześnie jest coraz
              bardziej zmęczona problemem. W tej części presja ujawnia się także
              w konkretnych sytuacjach, przez które bohaterka zaczyna dostrzegać
              jej realny wpływ na swoje życie.
            </p>
          </div>
          <div className="border-3 border-current p-6">
            <span className="mb-2 block font-mono text-4xl font-bold">
              III
            </span>
            <h3 className="mb-2 font-mono text-sm font-bold uppercase tracking-widest">
              WIECZÓR
            </h3>
            <p className="font-mono text-sm leading-relaxed opacity-70">
              Wieczór to moment konfrontacji i decyzji. Po całym dniu napięcia
              bohaterka musi zmierzyć się z tym, co narosło. To etap najbardziej
              refleksyjny. Kasia staje przed wyborem, czy spróbować wyrwać się
              spod wpływu presji, czy poddać się jej, ponieważ jest już zbyt
              silna i zakorzeniona w głowie Kasi. To także moment podsumowania
              dnia, w którym napięcie albo znajduje ujście, albo zostaje
              przeniesione dalej, pogłębiając stan bohaterki.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
