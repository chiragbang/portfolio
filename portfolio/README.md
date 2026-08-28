# Chirag Bang — Portfolio

A modern, premium personal portfolio for a Full Stack Engineer. Built with a
strong focus on taste, performance, accessibility, and clean architecture.

![Built with Next.js & Tailwind](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)

## ✨ Tech stack

- **Next.js 14** (App Router, TypeScript, strict mode)
- **Tailwind CSS** with a custom token-based theme (CSS variables → Tailwind)
- **Framer Motion** for scroll reveals, the hero entrance, magnetic buttons
- **Radix UI** primitives (Dialog/Sheet, Tooltip) in shadcn/ui style
- **lucide-react** icons
- **next-themes** — dark/light with system detection and no flash of wrong theme
- **next/font** — self-hosted Inter, Space Grotesk (display) & JetBrains Mono (no CLS)

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npm run typecheck# tsc --noEmit
```

Requires Node 18.17+ (developed on Node 20/24).

## 📝 Where to edit content

**Everything lives in one typed file:** [`data/content.ts`](./data/content.ts).

Update your name, tagline, bio, skills, experience, projects, education, social
links, email/phone, and resume path there — no need to touch any component.

| What                        | Where in `data/content.ts` |
| --------------------------- | -------------------------- |
| Name / title / tagline      | `site`                     |
| Social links                | `socials`                  |
| Bio + animated stats        | `about`                    |
| Skills (grouped)            | `skillGroups`              |
| Work history (timeline)     | `experiences`              |
| Project cards               | `projects`                 |
| Education                   | `education`                |
| Nav items                   | `navItems`                 |

## 🖼️ Where to drop files

See [`public/README.md`](./public/README.md). In short:

- **`public/resume.pdf`** — your resume (the Hero "Resume" button links here).
- **`public/profile.jpg`** — optional photo for the About section (a branded
  "CB" monogram placeholder is shown if you skip it; see the `TODO` in
  `components/sections/about.tsx`).

Favicon, Apple touch icon, and the Open Graph / Twitter image are **generated
automatically** at build time from your brand colors — see `app/icon.tsx`,
`app/apple-icon.tsx`, and `app/opengraph-image.tsx`. No image files needed.

## 🎨 Theming

Design tokens are CSS variables in [`app/globals.css`](./app/globals.css)
(`:root` for light, `.dark` for dark) and wired into Tailwind via
[`tailwind.config.ts`](./tailwind.config.ts). Change a few HSL values there to
re-skin the whole site. Dark mode is the default; system preference is respected.

Accent palette: indigo `#6366F1` → violet `#8B5CF6`, with cyan `#22D3EE` as the
signal color for active states and underlines.

## ♿ Accessibility & performance

- Semantic landmarks, skip-to-content link, visible focus rings, aria labels on
  icon buttons, keyboard-navigable nav and theme toggle.
- All non-essential motion is gated behind `prefers-reduced-motion`.
- Self-hosted fonts via `next/font` (no layout shift), fully static output,
  lazy reveals below the fold.
- SEO: metadata, Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`,
  web manifest, and JSON-LD `Person` structured data.

## 🌐 Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects
   Next.js; no configuration needed.
3. Click **Deploy**.

After deploying, set your real domain in `site.url` (in `data/content.ts`) so
SEO, the sitemap, and OG tags use absolute URLs.

> You can also deploy to **Netlify** (`@netlify/plugin-nextjs`) — both are
> listed in the Skills section.

## 📁 Project structure

```
app/
  layout.tsx            fonts, theme provider, metadata, JSON-LD
  page.tsx              composes all sections
  globals.css           CSS variables + Tailwind layers
  icon.tsx              generated favicon
  apple-icon.tsx        generated Apple touch icon
  opengraph-image.tsx   generated OG / Twitter image
  manifest.ts           web app manifest
  sitemap.ts / robots.ts
components/
  navbar.tsx, footer.tsx
  theme-provider.tsx
  sections/             Hero, About, Skills, Experience, Projects, Education, Contact
  ui/                   button, card, badge, tooltip, sheet (shadcn-style) +
                        theme-toggle, section-heading, animated-counter,
                        magnetic, reveal, social-icons, background, cursor-glow
data/
  content.ts            ← all content, strongly typed
lib/
  utils.ts (cn), motion.ts (Framer Motion variants)
public/                 resume.pdf, profile.jpg (you add these)
```

---

Built with Next.js & Tailwind. © 2026 Chirag Bang.
