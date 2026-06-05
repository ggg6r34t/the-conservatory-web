# The Conservatory — Marketing Site

Public marketing website for [The Conservatory](https://theconservatory.garden) mobile app.

## Stack

- Next.js App Router (static pages)
- TypeScript
- Tailwind CSS v4 with linen-light design tokens in `app/globals.css`
- Noto Serif + Manrope via `next/font/google`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
npx tsc --noEmit
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Marketing home |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/support` | Support & contact |

## Design source

Visual and legal content are ported from the sibling repo `../the-conservatory`. See [docs/mobile-source-map.md](./docs/mobile-source-map.md).

## Environment

Copy `.env.example` to `.env.local` and set store URLs when listings are live:

- `NEXT_PUBLIC_APP_STORE_URL`
- `NEXT_PUBLIC_PLAY_STORE_URL`

Until then, store buttons link to `#download` on the home page.

## Hero media

- Poster: `public/images/hero-poster.webp` (fallback PNG in `lib/narrative-content.ts`)
- Film: `public/videos/a-premium-cinematic-hero-video-of-the-conservatory.mp4` (optional `.webm` — see `public/videos/README.md`)

## Deploy

Configured for Vercel at `theconservatory.garden`. Set production domain in Vercel project settings; `SITE_URL` in `lib/site.ts` should match.
