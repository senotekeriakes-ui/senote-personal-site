# senote-personal-site

Personal website and digital garden for Senote Keriakes — dentist, builder, traveller.

Built with **Astro**, **Tailwind CSS**, and **TypeScript**. Zero client-side frameworks. Deployed on **Vercel**.

## Local development

```bash
npm install
npm run dev     # → http://localhost:4321
npm run build   # production build → ./dist/
```

## Fonts

The site uses **NeueBit Bold** as a custom pixel display font for headings. Place your font files in `public/fonts/`:

- `NeueBit-Bold.woff2`
- `NeueBit-Bold.woff`
- `NeueBit-Bold.ttf`
- `NeueBit-Bold.otf`

Inter and JetBrains Mono are loaded from Google Fonts.

## Structure

- `src/components/` — Astro components (TopBar, NowBox, Rooms, etc.)
- `src/data/` — TypeScript data files that feed the components
- `src/pages/` — Astro pages (index, travels)
- `src/assets/` — Build-time assets (world map SVG)
- `public/` — Static files served as-is (fonts, favicon)

## Design

Warm paper-toned palette with a pixel-font accent. Single column, 720px max-width, mobile-first responsive. No analytics, no tracking.

See `CLAUDE.md` for full design system details and architectural decisions.
