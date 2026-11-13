# Manisha Bhardwaj — Senior Data Analyst Portfolio

Personal portfolio for **Manisha Bhardwaj**, Senior Data Analyst and Data Science & Analytics Lead at Axestrack, Jaipur.

The site preserves the reference portfolio’s presentation layer and interactions while adapting the profile content from the supplied resume and professional profile.

## Features

- **Dual navigation model** — a single-scroll home page plus a standalone route for each enabled section.
- **Contact form** — Nodemailer over Gmail SMTP, with server-side validation and an explicit 503 when SMTP is not configured.
- **SEO** — per-route metadata, JSON-LD, generated Open Graph and Twitter images, sitemap, robots and web manifest.
- **Light / dark themes** via `data-theme`, with a View Transitions crossfade.
- **Section flags** — sections can be hidden from the home page, navigation, footer and sitemap in `content/sections.ts`.
- **Graceful degradation** — missing GitHub, resume and WhatsApp values are omitted rather than rendered as dead links.
- **Accessibility** — skip link, focus-visible rings, disclosure states and reduced-motion support.
- Responsive from 320px up.

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
content/       All profile copy and data, typed against types/
lib/           Profile data, motion tokens, SEO schema, formatting
types/         Shared domain types
```

Content is separated from presentation, so profile updates are primarily made in `content/` and `lib/site.ts`.

## Run Locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local`, set the actual site URL, and configure Gmail SMTP credentials if the contact form should send email.

```bash
npm run build
npm run typecheck
```

## Publishing checklist

See [CONTENT-TODO.md](CONTENT-TODO.md) for source notes and remaining deployment configuration. In particular, set `NEXT_PUBLIC_SITE_URL` to the real portfolio domain before deployment.
