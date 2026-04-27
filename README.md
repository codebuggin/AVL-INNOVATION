# AVL Innovations

Vite + React + TypeScript + Tailwind website for AVL Innovations.

## Setup

```bash
npm install
npm run dev
```

## Update Content

Edit the files in `src/config/`:

- `site.ts` for company, contact, founder, and navigation details
- `services.ts` for service pages and service cards
- `projects.ts` for work examples
- `pricing.ts` for pricing packages

## Add A Project

Add a new object to the `projects` array in `src/config/projects.ts`.

Use `status: 'live'` for launched projects and include `liveUrl`.
Use `status: 'in-development'` for projects that are not ready to link.

## Add Device Mockups

Place mockup images in:

```bash
public/mockups/
```

Suggested names:

- `laptop.png`
- `phone.png`
- `about-1.jpg`
- `about-2.jpg`

## Deploy

Push this project to GitHub, connect the repository to Vercel, and deploy.

The `vercel.json` file already includes the rewrite needed for React Router.
