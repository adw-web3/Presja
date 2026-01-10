# PRESJA

Oficjalna strona albumu **PRESJA** artysty **TwójSamuel**.

## O projekcie

Strona prezentuje album "Presja" — kolekcję 14 utworów eksplorujących różne formy presji, z którymi mierzymy się na co dzień.

### Struktura utworów

Każdy utwór składa się z trzech zwrotek:
1. **Wprowadzenie** — pierwszy kontakt z konkretnym rodzajem presji
2. **Fasada** — jak udajemy, że radzimy sobie z presją
3. **Prawda** — surowe uczucia gdy nikt nie patrzy

## Funkcje

- Lista utworów z możliwością rozwinięcia podglądu
- Indywidualne strony dla każdego utworu z tekstami i historią
- Pobieranie plików audio w wysokiej jakości
- Linki do platform streamingowych
- Strona artysty z biografią i linkami społecznościowymi
- Przełącznik motywu (jasny/ciemny)
- Brutalistyczny design (tylko czarny i biały)

## Technologie

- Next.js 15
- TypeScript
- Tailwind CSS

## Uruchomienie

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## Struktura

```
src/
├── app/
│   ├── page.tsx              # Strona główna
│   ├── presja/[slug]/        # Strony utworów
│   └── artysta/              # Strona artysty
├── components/               # Komponenty UI
└── data/
    └── songs.ts              # Dane utworów (placeholder)
```

## Do uzupełnienia

- [ ] Prawdziwe teksty utworów
- [ ] Historie utworów
- [ ] Pliki audio
- [ ] Linki do platform streamingowych
- [ ] Zdjęcie artysty
- [ ] Biografia artysty
- [ ] Linki społecznościowe
