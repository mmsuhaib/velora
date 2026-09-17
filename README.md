# VELORA

Marketing site and admin shell for VELORA, a premium furniture, upholstery,
curtain, and shade solutions studio. This is a **scaffold**: the public site
and admin UI are fully designed and functional against mock data, but there
is no live database, authentication, file uploads, or working CRUD yet.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- GSAP + ScrollTrigger for scroll reveals and the mobile menu transition
- Prisma schema (`prisma/schema.prisma`) — not connected to a database yet
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the public site, and
[http://localhost:3000/admin/login](http://localhost:3000/admin/login) for
the admin shell (the login form redirects without checking credentials).

## Structure

- `app/(site)/` — public marketing pages (home, about, services, projects,
  gallery, contact), wrapped in `app/(site)/layout.tsx` (navbar + footer).
- `app/admin/` — admin shell. `app/admin/login/` is standalone;
  `app/admin/(dashboard)/` wraps the overview, services, projects, gallery,
  and inquiries list views in the sidebar/header chrome.
- `components/` — `ui/` (Button, Input, DataTable, Modal, Toast, …),
  `layout/` (Navbar, Footer, MobileMenu), `sections/` (Hero, ServiceShowcase,
  ContactForm, …), `animations/` (GSAP wrappers), `gallery/`, `projects/`,
  `admin/`.
- `lib/mock-data/` — typed mock content (services, projects, gallery,
  quote requests, contact messages, site copy). Swap these reads for real
  Prisma queries later without changing the shapes.
- `lib/db/prisma.ts` — Prisma client singleton, not queried anywhere yet.
- `prisma/schema.prisma` + `prisma.config.ts` — data model and CLI config
  for when a real MySQL database is provisioned. Run
  `npx prisma migrate dev --name init` once `DATABASE_URL` in `.env` points
  at a real instance.

## Not wired up yet

Real auth, database queries, file uploads, working CRUD in the admin,
and SEO metadata are intentionally out of scope for this phase — see the
component and page comments for where they'll plug in.
