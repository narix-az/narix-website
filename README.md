# narix-website

The website of [Narix](https://narix.az): a product and engineering studio in Baku that builds websites, mobile and web apps, AI automation and DevOps infrastructure.

Next.js (App Router, static export), TypeScript, CSS Modules with a few Tailwind utilities, Framer Motion. Deployed as static files (Cloudflare Pages).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run lint
```

## Languages

Every page exists in two languages, each at its own address:

| | Azerbaijani (default) | English |
|---|---|---|
| Home | `/` | `/en` |
| Services | `/services` | `/en/services` |
| Projects | `/projects` | `/en/projects` |
| About | `/about` | `/en/about` |
| Contact | `/contact` | `/en/contact` |

The language comes from the address, not from browser storage, so each page is rendered in its own language at build time and both can be indexed. `src/i18n/routes.ts` has the helpers; `src/lib/seo.ts` holds titles, descriptions, canonical URLs and `hreflang` alternates; `src/app/sitemap.ts` lists every page in both languages.

All text lives in `src/i18n/translations.ts`. The two dictionaries share one TypeScript interface, so a key missing in one language fails the build.

## Where things are

```
src/app/(az)/…        Azerbaijani pages        src/app/en/…   English pages
src/components/pages  page bodies, shared by both languages
src/components/sections, layout, ui
src/data              projects and tools (no text — text is in translations.ts)
src/i18n              dictionaries, routes, provider
public/brand          logo files exported from the brand kit
```

## Adding a project

1. Add an entry to `src/data/deliveredProjects.ts` (`group: 'ecosystem'` for Narix's own products, `'client'` for client work; `link` only if it is publicly reachable).
2. Add its text under `delivered.projects[id]` in **both** dictionaries in `src/i18n/translations.ts`.
3. If it needs a new icon, draw it in `src/components/ui/ProjectIcon.tsx`.

The home page shows the ecosystem; `/projects` shows both groups.

## Contact form

The site is static and has no backend. The form hands the message to an app the visitor already has — their email client or WhatsApp — and says so. To receive submissions directly, connect a form service or a Cloudflare Pages Function and change `handleSubmit` in `src/components/sections/Contact.tsx`.

## Brand

Logo files in `public/brand` and the icons in `src/app` (`favicon.ico`, `icon.png`, `apple-icon.png`) come from the Narix Flow logo kit. The kit is PNG only; a vector master would be sharper at large sizes. Design rules are in [DESIGN.md](./DESIGN.md).
