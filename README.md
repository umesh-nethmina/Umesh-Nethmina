# Portfolio App

This project is a Next.js portfolio application structured around the App Router.

## Routes

- `/` home page with hero, about, skills, experience, featured projects, and contact sections
- `/about` extended about, skills, and experience content
- `/projects` full project listing
- `/blog` writing index
- `/contact` contact form and direct links

## Structure

- `src/app` route entry points
- `src/components/layout` shared frame components
- `src/components/sections` homepage and route sections
- `src/components/project` project-specific presentation
- `src/components/ui` reusable primitives
- `src/data` split content sources for projects, skills, experience, education, and site config
- `src/hooks` shared client hooks
- `src/lib` utility helpers
- `src/styles` global styling
- `src/types` shared TypeScript types

## Development

```bash
npm install
npm run dev
```

## Environment

No database is required. The contact form uses email delivery via your local email app (`mailto`).