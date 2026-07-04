# Otomate Marketing Website

Studio-quality marketing site for [Otomate](https://otomate.biz) — AI-powered business automation for SMBs.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS v3
- Three.js (@react-three/fiber + @react-three/drei)
- GSAP + ScrollTrigger
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

This project is configured for zero-config Vercel deployment.

1. Import the repository in [Vercel](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. No environment variables required for the marketing site
4. Node.js 20.x is used (see `.nvmrc`)

Vercel runs `npm ci` then `npm run build`. The build has been verified clean with `npm ci && npm run build`.

```bash
# Optional: local production preview
npm run build && npm start
```


## Project Structure

```
app/
  components/
    layout/     # Navbar, Footer
    sections/   # Page sections
    three/      # Three.js scenes
    ui/         # Reusable UI primitives
lib/
  constants.ts  # All copy and data
  utils.ts      # Utilities
```

## Features

- Light/dark theme toggle (light default)
- GSAP scroll-driven animations
- Three.js hero particle scene + CTA orb
- Fully responsive (375px → 1280px+)
- SEO metadata via next/metadata API
