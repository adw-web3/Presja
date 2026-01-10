export interface Song {
  id: number;
  title: string;
  slug: string;
  featuring?: string;
  story: string;
  lyrics: {
    stanza1: string;
    stanza2: string;
    stanza3: string;
  };
  streamingLinks: {
    spotify?: string;
    appleMusic?: string;
    tidal?: string;
    youtube?: string;
  };
  downloadUrl?: string;
}

export const songs: Song[] = [
  {
    id: 1,
    title: "Preludium",
    slug: "preludium",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że wszystko jest w porządku\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Czasu",
    slug: "czasu",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja czasu to codzienna walka z zegarem, który nieustannie odmierza chwile naszego życia.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję czasu\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że nadążamy\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji czasu",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Finansowa",
    slug: "finansowa",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja finansowa definiuje współczesne życie, gdzie pieniądze stają się miarą sukcesu.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję finansową\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że nas stać\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji finansowej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Rodziny",
    slug: "rodziny",
    featuring: "wrona",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja rodziny to oczekiwania bliskich, które czasem ciążą bardziej niż cokolwiek innego.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję rodziny\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie idealnego syna/córki\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji rodzinnej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Pracy",
    slug: "pracy",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja pracy to nieustanna pogoń za wynikami, awansem i uznaniem.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję pracy\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie zaangażowanego pracownika\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji zawodowej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Szkoły",
    slug: "szkoly",
    featuring: "wrona",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja szkoły to system który kształtuje nas od najmłodszych lat.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję szkoły\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie pilnego ucznia\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji edukacyjnej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 7,
    title: "Interludium",
    slug: "interludium",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Moment wytchnienia pomiędzy falami presji.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nCisza przed burzą\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nPróba złapania oddechu\nMoment refleksji",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia w ciszy\nKrótki oddech przed kolejną falą",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 8,
    title: "Społeczna",
    slug: "spoleczna",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja społeczna to niewidzialne oczekiwania otoczenia.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję społeczną\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że pasujemy\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji społecznej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 9,
    title: "Aplikacji",
    slug: "aplikacji",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja aplikacji to cyfrowe więzienie które sami sobie budujemy.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję cyfrową\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że kontrolujemy technologię\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji cyfrowej",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 10,
    title: "Podróży",
    slug: "podrozy",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja podróży to przymus zwiedzania świata dla zdjęć.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję podróżowania\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie szczęśliwego podróżnika\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji podróży",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 11,
    title: "Pasji",
    slug: "pasji",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja pasji to obowiązek posiadania hobby które definiuje naszą wartość.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję pasji\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że mamy pasję\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji pasji",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 12,
    title: "Zdrowego życia",
    slug: "zdrowego-zycia",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja zdrowego życia to obsesja na punkcie ciała i diety.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję zdrowego życia\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie fit influencera\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji zdrowia",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 13,
    title: "Migracji",
    slug: "migracji",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presja migracji to ciężar opuszczenia domu w poszukiwaniu lepszego życia.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nWprowadzenie w presję migracji\nSłowa opisujące początek",
      stanza2: "Tekst drugiej zwrotki...\nUdawanie że wszystko jest lepiej\nPróba radzenia sobie z tym wszystkim",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia gdy nikt nie patrzy\nSurowa rzeczywistość presji migracji",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
  {
    id: 14,
    title: "To ostatnie ludium",
    slug: "to-ostatnie-ludium",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ostatnie słowa o presji, podsumowanie wszystkiego co było wcześniej.",
    lyrics: {
      stanza1: "Tekst pierwszej zwrotki...\nOstatnie wprowadzenie\nSłowa opisujące koniec",
      stanza2: "Tekst drugiej zwrotki...\nOstatnia próba udawania\nKoniec maskarady",
      stanza3: "Tekst trzeciej zwrotki...\nPrawdziwe uczucia na koniec\nSurowa rzeczywistość wszystkich presji",
    },
    streamingLinks: {
      spotify: "#",
      appleMusic: "#",
      tidal: "#",
      youtube: "#",
    },
    downloadUrl: "#",
  },
];

export function getSongBySlug(slug: string): Song | undefined {
  return songs.find((song) => song.slug === slug);
}

export function getAllSongSlugs(): string[] {
  return songs.map((song) => song.slug);
}
