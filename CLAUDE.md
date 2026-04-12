# CLAUDE.md — senote-personal-site

> Living context file. Read this first at the start of every session.

## Project overview

Personal website and digital garden for **Senote Keriakes** — a dentist in Melbourne building dental tech (Apollonia, DentalScribe). Built as a static site with Astro, Tailwind CSS, and TypeScript. No client-side frameworks. Deployed on Vercel via GitHub.

**Tech stack:** Astro 6 · Tailwind CSS 4 · TypeScript (strict) · Vercel

## Design system

### Color tokens (CSS custom properties via `@theme`)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-paper` | `#faf6ef` | Page background |
| `--color-paper-soft` | `#f3ede0` | Card backgrounds (NowBox, hover states) |
| `--color-paper-shade` | `#ebe3d1` | Shadows, unvisited map countries |
| `--color-ink` | `#2a2520` | Primary text |
| `--color-ink-soft` | `#5a5048` | Secondary text |
| `--color-ink-faint` | `#8a7f72` | Tertiary text, chrome labels |
| `--color-moss` | `#6b8158` | Accent green — arrows, visited countries, links on hover |
| `--color-berry` | `#c44a3d` | Accent red — lived countries, seedling status |
| `--color-line` | `rgba(42,37,32,0.15)` | Borders |
| `--color-line-soft` | `rgba(42,37,32,0.08)` | Subtle borders |

All tokens are registered with Tailwind's `@theme` directive, so use `bg-paper`, `text-ink-soft`, `border-line`, etc.

### Typography

- **Body:** Inter (Google Fonts), 16px base, line-height 1.65
- **Headings (h1–h3):** NeueBit Bold (custom), uppercase, `-webkit-font-smoothing: none`, `image-rendering: pixelated`
- **UI chrome:** JetBrains Mono (Google Fonts), ~0.65rem, uppercase, letterspaced (class: `.font-chrome`)

### Layout

- Single column, `max-width: 720px`, centered
- Mobile-first responsive — 2-col Rooms grid collapses to 1-col under 640px (Tailwind `sm:` breakpoint)
- Padding: `px-5` horizontal

## File structure

```
senote-personal-site/
├── public/
│   ├── fonts/          ← NeueBit Bold (woff2/woff/ttf/otf) — user must provide
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── world-map.svg     ← MapSVG world map, inlined at build time
│   ├── components/
│   │   ├── TopBar.astro       ← Header with wordmark + nav + location
│   │   ├── NowBox.astro       ← Pinned "what I'm up to" card
│   │   ├── Rooms.astro        ← 2-col grid of topic cards
│   │   ├── Ventures.astro     ← Apollonia + DentalScribe cards
│   │   ├── Notes.astro        ← Reverse-chrono writing list
│   │   ├── TravelsMap.astro   ← World map with visited/lived countries
│   │   └── Colophon.astro     ← Footer with credits
│   ├── data/
│   │   ├── visited-countries.ts  ← Country codes, names, types + helpers
│   │   ├── now.ts                ← "Now" bullet items
│   │   ├── notes.ts              ← Writing entries
│   │   └── rooms.ts              ← Room definitions
│   ├── layouts/
│   │   └── Base.astro         ← HTML shell, fonts, meta
│   ├── pages/
│   │   ├── index.astro        ← Homepage: all sections composed
│   │   └── travels.astro      ← Standalone travels page
│   └── styles/
│       └── global.css         ← Design tokens, @font-face, base styles
├── astro.config.mjs
├── CLAUDE.md                  ← This file
├── README.md
└── package.json
```

## Component inventory

| Component | Data source | Description |
|-----------|-------------|-------------|
| `TopBar` | — | Wordmark "SENOTE'S GARDEN", nav links, "Melbourne · AU" |
| `NowBox` | `data/now.ts` | Pinned card with 📌 emoji, bullet list of current activities |
| `Rooms` | `data/rooms.ts` | 2-col grid of 6 room cards with emoji, status tags, descriptions |
| `Ventures` | inline | Two venture cards (Apollonia=beta, DentalScribe=live) with pulsing dots |
| `Notes` | `data/notes.ts` | Reverse-chrono list with date column, title link, metadata |
| `TravelsMap` | `data/visited-countries.ts` + `assets/world-map.svg` | Inlined SVG map, JS-applied classes, tooltip, legend, stats, country chips |
| `Colophon` | — | Footer credits (fonts, inspiration), "SENOTE KERIAKES" sign-off |

## Content sources

| Data file | Feeds | Format |
|-----------|-------|--------|
| `data/now.ts` | NowBox | Array of `{ text }` items + date string |
| `data/rooms.ts` | Rooms | Array of `{ emoji, name, slug, status, description }` |
| `data/notes.ts` | Notes | Array of `{ title, slug, date, status, readTime }` + `formatNoteDate()` |
| `data/visited-countries.ts` | TravelsMap | Object keyed by ISO alpha-2 codes + helper functions |

## Design decisions & rationale

- **Astro over Next.js:** Personal site needs zero client JS by default. Astro ships no JS unless you opt in.
- **Tailwind 4 via `@theme`:** Design tokens defined in CSS, extended into Tailwind utility classes. No separate `tailwind.config.mjs` needed for colors.
- **World map SVG inlined at build time:** Downloaded from MapSVG (CC Public Domain), stored in `src/assets/`, imported with `?raw`. Avoids CORS and runtime fetch issues.
- **Vanilla JS for map interactivity:** Only JS on the page — applies `.visited`/`.lived` classes and handles tooltip positioning. No framework needed.
- **No analytics:** Clean, no tracking. Can add Vercel Analytics later if desired.
- **NeueBit with smoothing disabled:** `-webkit-font-smoothing: none` keeps the pixel aesthetic crisp. This is intentional.

## Known quirks / gotchas

- **NeueBit font files not included in repo.** User must place `.woff2`, `.woff`, `.ttf`, `.otf` files in `public/fonts/`. Build will warn about unresolved font URLs but still succeed.
- **World map SVG is ~1.2MB.** It's inlined into the HTML at build time, so it adds to page weight. Consider optimizing the SVG paths if performance budget is tight.
- **MapSVG uses ISO alpha-2 as `id` attributes.** Hong Kong = `HK`, Macau = `MO`. Some territories may not have paths in the SVG.
- **Tailwind 4 uses `@theme` not `theme.extend`.** Colors are declared in `global.css`, not in a config file.

## Deployment info

- **GitHub repo:** `senote-personal-site` (public)
- **Vercel project:** auto-detected as Astro
- **Custom domain:** not yet configured
- **Deploy:** push to `main` → Vercel auto-deploys

## Changelog

- **2026-04-12:** Initial build — scaffolded Astro project, built all 7 components, 2 pages, design system, world map with 25 countries. First deploy.

## TODO / ideas

- [ ] Add NeueBit font files to `public/fonts/`
- [ ] Add individual room pages (`/rooms/clinical`, etc.)
- [ ] Add individual note/post pages with MDX
- [ ] Add Open Graph / social meta tags
- [ ] Add RSS feed
- [ ] Optimize world map SVG (strip unnecessary attributes, compress paths)
- [ ] Add dark mode toggle
- [ ] Add a `/uses` page
- [ ] Add photo gallery to travels
- [ ] Consider Vercel Analytics
