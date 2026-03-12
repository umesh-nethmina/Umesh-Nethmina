# Portfolio App

This project is a Next.js portfolio application structured around the App Router.

## Routes

- `/` home page with hero, about, skills, experience, featured projects, and contact sections
- `/about` extended about, skills, and experience content
- `/projects` full project listing
- `/blog` writing index
- `/contact` contact form and direct links

## Structure

- `src/app` route entry points and API handlers
- `src/components/layout` shared frame components
- `src/components/sections` homepage and route sections
- `src/components/project` project-specific presentation
- `src/components/ui` reusable primitives
- `src/data` split content sources for projects, skills, experience, education, and site config
- `src/hooks` shared client hooks
- `src/lib` utility and database code
- `src/models` mongoose models
- `src/styles` global styling
- `src/types` shared TypeScript types

## Development

```bash
npm install
npm run dev
```

## Environment

Create `.env.local` with `MONGODB_URI` if you want the contact form to persist submissions to MongoDB.