# Kurosoft Tech

Corporate/startup landing page for Kurosoft Tech -- an emerging six-person software development team based in Nigeria. Built as a professional digital presence for client acquisition, startup applications, and portfolio presentation.

**Status:** Kurosoft Tech is an early-stage software development team/startup and is not currently registered as a limited company. Nothing on this site claims otherwise.

## Overview

This is a single-page React application covering: Hero, About, Services, Featured Products, Technology stack, Team, Vision/Mission, a call-to-action, a Contact form, and a Footer. All content that can change over time (services, projects, team members, technologies, social links) lives in structured data/config files rather than being hardcoded into components, so the site can be updated without touching component code.

## Technologies

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (via the `@tailwindcss/vite` plugin -- no `tailwind.config.js` needed)
- lucide-react (icons) -- note: brand/logo icons (GitHub, LinkedIn, Facebook) were removed from lucide-react in recent versions, so those three use small inline SVGs instead (see `src/components/Footer.tsx` and `src/sections/Products.tsx`)
- react-router-dom (installed, not yet used -- see "Future routes" below)
- Oxlint (linter, chosen by the Vite scaffold in place of the originally-planned ESLint+Prettier)

## Project structure

    src/
      components/     Reusable UI pieces (Navbar, Footer)
      sections/       Page sections composed in App.tsx (Hero, About, Services, Products, Technology, Team, Vision, Contact)
      data/           Structured content: services.ts, projects.ts, technologies.ts, team.ts
      config/         site.ts -- company info, URLs, social links, feature flags
      assets/         Images (currently unused -- product screenshots are still placeholders)

## Installation

```powershell
git clone <repo-url>
cd Kurosoft-Tech
npm install
```

## Development

```powershell
npm run dev
```

Opens the dev server at `http://localhost:5173`.

## Production build

```powershell
npm run build
```

Runs a TypeScript type-check (`tsc -b`) followed by the Vite production build. Output goes to `dist/`.

To preview the production build locally:

```powershell
npm run preview
```

## Environment variables

None required at this time. `src/config/site.ts` holds all configurable values as plain constants (not environment variables), since this is a static frontend with no backend calls yet. If a real contact-form backend or analytics service is added later, its keys should be moved to a `.env` file and referenced via `import.meta.env`, and documented here.

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. No environment variables are currently required.
5. Once deployed, update `siteUrl` in `src/config/site.ts` AND the Open Graph/canonical URLs in `index.html` to match the real production domain (these are currently both set to the placeholder `https://kurosoft-tech.vercel.app/` -- they are not automatically kept in sync since `index.html` cannot import TypeScript).

## How to add a project

Edit `src/data/projects.ts` and add a new object to the `projects` array following the existing `Project` interface (title, category, description, technologies, demoUrl, githubUrl, status). Do not add placeholder/fake projects -- only real, working software.

## How to update team members

Edit `src/data/team.ts`. The founder entry is real; the other five entries are intentionally generic ("Software Developer", `name: null`) per the site's no-invented-details policy. Replace `name: null` with a real name and add a `bio` once real profiles are available -- do not invent names, photos, or titles.

## How to update social links

Edit `socialLinks` in `src/config/site.ts`. A link automatically hides itself in the Footer if its value is still `"#"` or an empty string, so there is no need to remove markup manually -- just fill in the real URL.

## How to configure the contact form

The form in `src/sections/Contact.tsx` currently does not send anywhere -- `CONTACT_FORM_ENDPOINT` in `src/config/site.ts` is empty, and the form shows "Contact form submission is currently being configured" instead of pretending to submit. To wire up real submissions:

1. Set up a backend endpoint or a form service (e.g. Formspree, Resend).
2. Set `CONTACT_FORM_ENDPOINT` in `src/config/site.ts` to that URL.
3. Update the `handleSubmit` function in `Contact.tsx` to actually POST the form data to `CONTACT_FORM_ENDPOINT` (currently it only sets `submitted` to `true` as a placeholder -- see the `TODO` comment in that function).

## Future routes

`react-router-dom` is installed but not yet used -- the site is currently a single scrolling landing page per the original spec. Optional future routes (`/products`, `/services`, `/about`, `/contact`) can be added later without restructuring the existing sections, since each section is already its own component.

## Known limitations

- Product screenshots are dashed placeholder boxes, not real images -- add real screenshots to `src/assets/` and update `src/sections/Products.tsx` when available.
- Linter is Oxlint (Vite's current default), not the originally-planned ESLint + Prettier -- functionally equivalent for this project's needs, but flagging the deviation from the original spec.
- No automated tests yet.