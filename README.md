# Praneet R — Developer Portfolio

A single-page developer portfolio built with **React 19, Vite, TypeScript, and Tailwind CSS v4**, deployed on **Cloudflare Pages (`*.pages.dev`)**.

## Quick Customization (Placeholders)

All personal links, contact details, resume path, and project URLs live in **`src/data/portfolio.ts`**:

1. **Email:** Update `profile.email` and set `profile.emailIsPlaceholder = false`.
2. **Resume PDF:** Drop your PDF into `public/Praneet_R_Resume.pdf`, then set:
   ```ts
   resumeUrl: '/Praneet_R_Resume.pdf',
   resumeReady: true,
   ```
3. **Project Demos & Repos:** Replace `null` in `liveDemoUrl` or `sourceUrl` with your live URLs.

## Local Development & Deploy

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## Switching Between Saved Design Versions

Every design iteration is tagged in Git:
- `v1-editorial` — Warm editorial serif + card layout
- `v2-swiss` — Two-column Swiss engineering index (`IBM Plex Sans`)
- `v3-reader` — Quiet single-column reader-first personal site (`DM Sans`)

```bash
git checkout v2-swiss      # or v1-editorial / v3-reader
```
