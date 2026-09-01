# Vanshaj Gaur — AI Implementation Engineer Portfolio

Personal portfolio for **Vanshaj Gaur**, AI Implementation Engineer in the AI Labs
team at [Axestrack](https://www.axestrack.com/), Jaipur.

> **Status: design complete, content partially placeholder.**
> The layout, theming and interactions are production-ready. Some copy is still
> waiting on Vanshaj — see **[CONTENT-TODO.md](CONTENT-TODO.md)** for the exact
> list of fields to fill before launch.

## Features

- **Dual navigation model** — a single-scroll home page, plus a standalone route
  for every section (`/about`, `/projects`, …) so sections can be linked directly
- **Contact form** — Nodemailer over Gmail SMTP, with server-side validation,
  HTML escaping, and an explicit 503 when SMTP is not configured
- **SEO** — per-route metadata, JSON-LD `@graph` (Person / WebSite / ProfilePage /
  ItemList), generated OG and Twitter images, sitemap, robots, and web manifest
- **Light / dark themes** via `data-theme`, with a View Transitions crossfade
- **Section flags** — every section can be hidden from the home page, nav, footer
  and sitemap by flipping one boolean in `content/sections.ts`
- **Graceful degradation** — unset GitHub / resume / WhatsApp values are omitted
  from the UI rather than rendered as dead links
- **Accessibility** — skip link, focus-visible rings throughout, `aria-expanded`
  on every disclosure, and full `prefers-reduced-motion` support
- Responsive from 320px up

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router) · React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 + CSS custom properties |
| Animation | Framer Motion |
| Email | Nodemailer |
| Deployment | Vercel |

## Project Structure

```text
app/           App Router — routes, API handler, SEO/metadata files
  (site)/      Public portfolio pages
  api/contact/ Contact form route handler
components/
  sections/    One component per portfolio section
  ui/          Shared primitives (Card, Badge, Button, …)
content/       All copy and data, typed against types/
lib/           Profile data, motion tokens, SEO schema, formatting
types/         Shared domain types
```

Content is fully separated from presentation: every section component reads from
a typed module in `content/`, so updating the site means editing data, not JSX.
`lib/site.ts` is the single source of truth for name, role, location and links.

## Run Locally

```bash
npm install
npm run dev
```

Create a `.env.local` — see [.env.example](.env.example). Only the contact form
needs secrets; the site renders fully without them.

```bash
npm run build      # production build
npm run typecheck  # tsc --noEmit
```

## Hiding a section

Set `enabled: false` on any entry in `content/sections.ts`. That removes it from
the home page, the top nav, the footer columns and the sitemap in one edit —
useful for sections whose content is not ready yet.
