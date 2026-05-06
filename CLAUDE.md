# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MoverX Solutions — a Next.js 16 marketing website for an Australian interstate removalist (moving) company. Supports Portuguese and English locales. Deployed on Vercel.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (also used to check for type/build errors)
- `npm run lint` — run ESLint
- No test framework is configured.

## Architecture

### Routing & i18n

Next.js App Router with `next-intl`. All pages live under `src/app/[locale]/`. The locale segment (`pt` | `en`, default `pt`) is handled by middleware (`src/middleware.ts`) and routing config (`src/i18n/routing.ts`).

Navigation helpers (`Link`, `redirect`, `useRouter`, `usePathname`) must be imported from `@/i18n/routing` — not from `next/navigation` directly — so locale is preserved automatically.

Translation JSON files live in `messages/` at the project root:
- `en.json`, `pt.json` — main translations
- `en_volume.json`, `pt_volume.json` — volume calculator translations

Server components use `setRequestLocale(locale)` + `getMessages()`. Client components use the `useTranslations()` hook.

### Component Organization

- `src/components/home/` — homepage sections (Hero, Features, Pricing, FAQ, CTA, QuoteCalculator, etc.)
- `src/components/layout/` — Header, Footer, TopBar, ScrollOrchestrator
- `src/components/ui/` — reusable primitives (Button, FadeIn, ScrollLink, etc.)
- `src/components/volume/` — VolumeCalculator (complex stateful component)

### API Integration

API calls in `src/lib/api/` submit forms to the external MovePro API (`api.movepro.com.au`). Two submission flows: standard quote and volume-based quote. Both use fetch with Bearer token auth and a `schema` array payload format.

### Data & Validation

- Static data (volume item categories) in `src/data/`
- Zod schemas for form validation in `src/lib/schemas/`
- Google Places API integration in `src/lib/googleMaps.ts` (cached with `unstable_cache`, 24h revalidation, includes hardcoded fallback data)

### Styling

Tailwind CSS v4 configured via `@theme` directives in `src/globals.css` (no separate `tailwind.config` file). Key theme colors:
- Primary: `#273690` (blue)
- Accent: `#FF6600` (orange)
- Secondary: `#0F172A` (navy)

Class merging utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).

Font: Inter, loaded via `next/font/google`.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Key Conventions

- TypeScript strict mode is enabled.
- Pages must call `setRequestLocale(locale)` at the top to enable static rendering with `next-intl`.
- `generateStaticParams` must be exported from layout/page files that use the `[locale]` segment.
- Environment variables: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACES_ID_MOVEX` (defined in `.env`).
