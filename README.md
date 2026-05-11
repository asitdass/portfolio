# Asit Rohan Dass — Portfolio

A cinematic, fully animated portfolio website built with modern web technologies.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP
- **3D**: Three.js / React Three Fiber
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Base UI components
│   ├── sections/           # Page sections (Hero, About, Skills, etc.)
│   ├── three/              # 3D components (React Three Fiber)
│   └── animations/         # Reusable animation wrappers
├── lib/                    # Utilities, constants, data
├── hooks/                  # Custom React hooks
└── styles/                 # Global styles
```

## Customization

All portfolio content is centralized in `src/lib/data.ts`. Update this file to change personal info, skills, experience, and projects without touching components.

## Deployment

Deploy to Vercel:

```bash
npm run build
```

The project is optimized for Vercel deployment out of the box.

## Font Setup

Place `CabinetGrotesk-Variable.woff2` in `public/fonts/` for the heading font. The site falls back to system sans-serif if not present.
