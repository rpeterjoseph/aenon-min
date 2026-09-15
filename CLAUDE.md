# Aenon Ministries and Trust — Website

Marketing/donation site for an NGO based in Hyderabad, India (est. 1989). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4.

## Commands

```
npm run dev      # start dev server
npm run build
npm run start
npm run lint      # ESLint (flat config, eslint-config-next)
```

No test suite exists in this repo.

## Structure

- `src/app/` — App Router pages: `/`, `/about`, `/work` (+ `/work/[slug]`), `/stories` (+ `/stories/[slug]`), `/contact`, `/donate`, `/maintenance`
- `src/components/` — `nav.tsx`, `footer.tsx`, `icons.tsx` (hand-rolled inline SVG icons + `IconByName` lookup used by data-driven pages)
- `src/data/` — the entire content layer lives here as typed TS arrays:
  - `programs.ts` — `Program[]`, looked up via `getProgramBySlug`/`getAllProgramSlugs`, rendered by `/work` and `/work/[slug]`
  - `stories.ts` — `Story[]`, same pattern for `/stories`
  - There is no CMS or database. `@sanity/client` is a dependency in `package.json` but is not used anywhere in `src/` — treat it as unused/aspirational, not wired up.
- `src/middleware.ts` — sitewide maintenance gate. `MAINTENANCE_MODE` is a hardcoded boolean; when true, everything except `/maintenance` and static assets is rewritten to `/maintenance`, unless the request carries `?preview=<PREVIEW_SECRET>` (sets a 5-minute bypass cookie) or already has that cookie. Check this file's current `MAINTENANCE_MODE` value before assuming the live site is reachable.
- `src/app/maintenance/layout.tsx` overrides the root layout to hide the normal `Nav`/`Footer` on that page.

## Content editing

Program and story content (copy, stats, slugs) is edited directly in `src/data/programs.ts` / `src/data/stories.ts` — there's no admin UI. Detail pages use `generateStaticParams` from `getAllProgramSlugs`/`getAllStorySlugs`, so a new slug there is enough to generate a new route at build time.

## Forms

`contact-form.tsx` and `donate-form.tsx` (both under their respective `app/` route folders) are `"use client"` components that only manage local UI state (`useState`) on submit — there is no API route, email service, or payment gateway wired up. Don't assume form submissions currently go anywhere.

## Styling

- Tailwind utility classes written directly in JSX; no CSS modules or styled-components.
- Design tokens (colors, fonts) are declared in `src/app/globals.css` via `@theme inline`: navy/red palette (`navy`, `navy-deep`, `navy-mid`, `red`, `red-light`, `red-pale`, `off`, `light`, `muted`, `border`) and three fonts loaded via `next/font/google` in `layout.tsx` (EB Garamond → `font-garamond`, DM Mono → `font-mono-dm`, Mulish → `font-mulish`, the body default).
- Two custom breakpoints, `nav-desktop` and `footer-desktop`, both `min-width: 900px`, defined via `@custom-variant` in `globals.css` — used only in `nav.tsx`/`footer.tsx`.
- Images use `next/image`; `next.config.ts` allows remote images only from `images.unsplash.com` (currently used as hero placeholder — labeled "Replace with your own photo" in the JSX).
