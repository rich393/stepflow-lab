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
├── index.html            # Entry point (SEO meta tags, fonts, JSON-LD, links to CSS)
├── index.css             # Tailwind directives + custom styles (scrollbar, etc.)
├── index.tsx             # React root render (hydrates prerendered HTML or fresh render)
├── App.tsx               # Main app component (path-based routing, exports navigate())
├── entry-server.tsx      # SSR entry point for prerendering (used at build time only)
├── types.ts              # Shared TypeScript types
├── tailwind.config.ts    # Tailwind theme (brand colors, animations, fonts)
├── postcss.config.js     # PostCSS config for Tailwind
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies and scripts
├── scripts/
│   └── prerender.mjs     # Post-build script: renders routes to static HTML
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
npm run build      # Production build → dist/ (includes SSR build + prerender)
npm run preview    # Preview production build locally
```

### Build Pipeline

The `npm run build` command runs three steps in sequence:

1. `vite build` — client-side bundle → `dist/`
2. `vite build --ssr entry-server.tsx --outDir dist/server` — SSR bundle for prerendering
3. `node scripts/prerender.mjs` — renders `/`, `/privacy`, `/terms` to static HTML, injects page-specific meta tags, then cleans up the server build

The result is fully prerendered static HTML in `dist/` that Vercel serves directly. The client-side JS hydrates on top of the prerendered content.

### Routing

The site uses path-based routing (not hash-based):
- `/` — homepage
- `/privacy` — privacy policy
- `/terms` — terms of use

Client-side navigation uses `navigate()` exported from `App.tsx` (calls `history.pushState`). The prerender script generates `dist/index.html`, `dist/privacy/index.html`, and `dist/terms/index.html` so Vercel serves each as a static file.

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

- **Prerendering:** All pages are prerendered to static HTML at build time for immediate crawler visibility (no JS execution required)
- **Google Search Console:** Verified and active for `https://www.stepflowlab.com` — sitemap submitted, indexing requested
- Meta description, Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width`, `og:image:height`, `og:site_name`, `og:locale`), and Twitter card tags are in `index.html`
- JSON-LD structured data for `ProfessionalService` schema is in `index.html` (includes `@id`, `contactPoint`, `image`, `priceRange`)
- `robots.txt` and `sitemap.xml` (with `<lastmod>` dates) are in `public/`
- OG image is at `public/og-image.png`
- Privacy and Terms pages get page-specific `<title>`, `<meta description>`, and `<link rel="canonical">` injected by the prerender script

## Mobile Responsiveness

The site is fully responsive across phone, tablet, and desktop. All mobile-specific styles use Tailwind responsive prefixes so the desktop experience is untouched.

### Breakpoint Strategy

Uses default Tailwind breakpoints:
- **Base** (< 640px) — phones (iPhone SE, iPhone 14 Pro, etc.)
- **`sm:` 640px** — large phones / small tablets
- **`md:` 768px** — tablets (iPad). Navigation links + CTA button appear in navbar
- **`lg:` 1024px** — desktops. Full HeroAnimation SVG appears, mobile orb hides

### Key Patterns

- **Navbar:** Hamburger menu (`md:hidden`) with AnimatePresence dropdown on mobile. CTA button hidden below `md:`. Logo scales down on phones (`w-8 h-8 md:w-10 md:h-10`).
- **Hero:** `min-h-[85vh] lg:min-h-screen`. Heading scales `text-5xl md:text-7xl lg:text-8xl`. Animated gradient orb (`flex lg:hidden`) replaces the full HeroAnimation on mobile.
- **Button glow:** Idle breathing animation (scale/opacity pulse) runs always so touch devices see glow life without hover. Hover variant takes over on desktop.
- **SocialProof carousel:** Dynamic `itemWidth` via resize hook (220px phone / 280px tablet / 350px desktop). Icons and text scale with `sm:` prefixes.
- **Background blobs:** Scaled down on mobile (e.g., `w-[300px] md:w-[500px]`).
- **CTA section:** Glow blob, padding, and heading sizes all use responsive prefixes.

### Testing Mobile Changes

Use Chrome DevTools device toolbar (Cmd+Option+I then Cmd+Shift+M) with iPhone SE (375px) and iPhone 14 Pro (393px). Always verify desktop (1280px+) is unchanged. Test on real iOS Safari when possible for blur/backdrop-blur rendering.

## Notes

- Tailwind is processed at build time via PostCSS — CSS output contains only used classes.
- Framer Motion handles all animations. Prefer `motion` components over CSS animations for consistency.
- Use Opus-4.5 for everything while building.
