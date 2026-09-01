# Content checklist — before launch

LinkedIn blocks automated access (every request to
`linkedin.com/in/vanshaj-gaur-57169b202` returns HTTP 999), so this site was
built from what could be corroborated publicly plus clearly-marked placeholders.
**Nothing invented has been presented as fact.** This file lists exactly what is
real, what is a placeholder, and where to change each one.

---

## 1. What is verified

| Fact | Value | Source |
| --- | --- | --- |
| Name | Vanshaj Gaur | LinkedIn profile |
| Current title | AI Implementation Engineer | LinkedIn page title (search index) |
| Team & employer | AI Labs, Axestrack | Axestrack org listing on The Org |
| Location | Jaipur, Rajasthan, India | Axestrack HQ |
| LinkedIn URL | `linkedin.com/in/vanshaj-gaur-57169b202` | given |
| Employer domain | Digital logistics — fleet, yard and transport management; recognised in the Gartner Market Guide for Fleet Telematics | axestrack.com |

Everything above is used as-is across the site.

---

## 2. Placeholders to replace

Ordered by how much each one matters.

### 🔴 Blocking — the site should not go live with these

| # | What | File | Notes |
| --- | --- | --- | --- |
| 1 | **Email address** | `lib/site.ts` → `SITE.email` | Currently `vanshajgaur@example.com`. `example.com` is a reserved documentation domain, so it is inert rather than pointing at a stranger's inbox. |
| 2 | **Projects** | `content/projects.ts` | Three template entries. Replace with real work, or cut to however many are genuinely strong. Optional `imageUrl` (1200×750 in `/public/projects/`), `liveUrl`, `githubUrl` — each hides itself if absent. |
| 3 | **Certifications** | `content/certifications.ts` | Four template entries. If Vanshaj has none worth listing, set `enabled: false` on `certifications` in `content/sections.ts`. |
| 4 | **Leadership** | `content/leadership.ts` | Three template entries. Same escape hatch: set `enabled: false` on `leadership`. |
| 5 | **Axestrack start date** | `content/experience.ts` → `periodNote` | Replace `periodNote` with `startDate: 'YYYY-MM'` and the card shows a real date range. |

### 🟡 Should be confirmed

| # | What | File | Notes |
| --- | --- | --- | --- |
| 6 | **Responsibility bullets** | `content/experience.ts` | Written as role-scope statements, not achievement claims, so nothing is fabricated — but they should be rewritten in Vanshaj's words with real numbers. |
| 7 | **Skills list** | `content/skills.ts` | A starter set inferred from the role and employer domain, **not** from his LinkedIn skills. Cut what he does not use; the `tier` value (`core` / `production` / `working`) is what recruiters actually read. |
| 8 | **About copy** | `components/sections/About.tsx` | Three paragraphs describing the role and domain. Accurate as written, but worth a voice pass. |
| 9 | **Hero copy** | `content/hero.ts` | `HERO_CAPABILITIES` (the typing animation) and `HERO_DESCRIPTION`. |
| 10 | **Roles he is open to** | `lib/site.ts` → `SITE.openToRoles` | Feeds the footer, contact section, FAQ and JSON-LD. Confirm he wants any "open to work" signal at all while employed. |
| 11 | **FAQ answers** | `content/faqs.ts` | Especially the response-time and availability claims. |
| 12 | **About trait cards** | `content/about.ts` → `ABOUT_TRAITS` | Four positioning statements. |

### 🟢 Optional — hidden until supplied

These are already handled gracefully: leave them unset and the UI simply omits
them. No dead links ship.

| # | What | File | Effect if left empty |
| --- | --- | --- | --- |
| 13 | **GitHub** | `lib/site.ts` → `SITE.socials.github` | GitHub link is dropped from hero, contact and footer |
| 14 | **Resume URL** | `lib/site.ts` → `SITE.resumeUrl` | "View Resume" button and footer link are hidden |
| 15 | **WhatsApp number** | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` | Floating WhatsApp button and contact row are hidden |
| 16 | **Education** | `lib/site.ts` → `ALMA_MATER` | Omitted from JSON-LD `alumniOf` |
| 17 | **Domain** | `.env.local` → `NEXT_PUBLIC_SITE_URL` | Falls back to the placeholder `vanshajgaur.com` |

---

## 3. Deliberately not built

- **Research / publications** — no papers by Vanshaj could be found. Section removed.
- **Blog & case studies** — no source material. Routes not built.
- **AI chatbot, analytics tracker, admin dashboard** — present in the reference
  project, excluded here by decision. The design system supports adding them back.

---

## 4. One unverified lead worth checking

Search snippets repeatedly surfaced a **"Product Implementation Executive"** title
with "3 years" of experience in Jaipur alongside Vanshaj's name. This could not be
confirmed from any fetchable page and may belong to a different person, so it was
**not** put on the site. If it is his earlier role, add it as a second entry in
`content/experience.ts` — a commented template is already in the file.
