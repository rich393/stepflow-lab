# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

This workspace is exclusively for editing and deploying the **Stepflow Lab** website — an AI business solutions landing page deployed to Vercel.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS 3 (build-time via PostCSS)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel

## Project Structure

```
stepflow-lab/
├── index.html            # Entry point (SEO meta tags, fonts, links to CSS)
├── index.css             # Tailwind directives + custom styles (scrollbar, etc.)
├── index.tsx             # React root render
├── App.tsx               # Main app component
├── types.ts              # Shared TypeScript types
├── tailwind.config.ts    # Tailwind theme (brand colors, animations, fonts)
├── postcss.config.js     # PostCSS config for Tailwind
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── components/           # Page sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HeroAnimation.tsx
│   ├── Background.tsx
│   ├── ValueProps.tsx
│   ├── SocialProof.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── Logo.tsx
│   ├── PrivacyPolicy.tsx
│   ├── Terms.tsx
│   └── ui/               # Reusable UI primitives
│       ├── Button.tsx
│       └── Card.tsx
├── public/               # Static assets
│   ├── logo.svg
│   ├── Stepflow-logo-favicon96.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── og-image.png
│   └── About Us Rich Image BW 300 width.png
└── .gitignore
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server on localhost:3000
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Deployment (Vercel)

Vercel auto-detects Vite projects. Configuration:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

No environment variables are required for the current site.

## Operating Principles

1. **Read before editing** — always read a file before modifying it.
2. **Keep it simple** — this is a landing page. Don't over-engineer. Avoid unnecessary abstractions.
3. **Preserve the design system** — brand colors and Tailwind config live in `tailwind.config.ts`. Keep them consistent.
4. **Test the build** — run `npm run build` after making changes to catch errors before deployment.
5. **Component convention** — each major page section is its own component in `components/`. Reusable UI primitives go in `components/ui/`.

## Brand Colors

Defined in `tailwind.config.ts`:

```
dark:      #021f31  (background)
primary:   #65e766  (main green)
secondary: #4dc37a
tertiary:  #217e6d
accent:    #8fff95  (glow highlights)
```

## SEO

- Meta description, Open Graph, and Twitter card tags are in `index.html`
- JSON-LD structured data for `ProfessionalService` schema is in `index.html`
- `robots.txt` and `sitemap.xml` are in `public/`
- OG image is at `public/og-image.png`

## Notes

- Tailwind is processed at build time via PostCSS — CSS output contains only used classes.
- Framer Motion handles all animations. Prefer `motion` components over CSS animations for consistency.
- Use Opus-4.5 for everything while building.
