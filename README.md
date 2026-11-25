# Praneet R — Developer Portfolio

A clean, warm editorial single-page portfolio built with **React 19, Vite, TypeScript, Tailwind CSS v4, Motion, and Lucide Icons**, configured for **Cloudflare Pages (`*.pages.dev`)**.

## Quick Customization (Placeholders)

All personal links, contact details, resume path, and project URLs live in one file: **`src/data/portfolio.ts`**.

1. **Email:** Update `profile.email` and set `profile.emailIsPlaceholder: false`.
2. **Resume PDF:** Drop your PDF into `public/Praneet_R_Resume.pdf`, then set:
   ```ts
   resumeUrl: '/Praneet_R_Resume.pdf',
   resumeReady: true,
   ```
3. **Project Demos & Repos:** Replace any `null` in `liveDemoUrl` or `sourceUrl` inside `projects` with your live URLs—the placeholder badges automatically switch into live links.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

This compiles the site into `dist/`, including Cloudflare Pages response headers from `public/_headers`.

## Deploying to Cloudflare Pages

### Option 1: Direct CLI Deploy (Wrangler)

```bash
npx wrangler login
npm run deploy
```

### Option 2: Automatic Git Deploys (Cloudflare Dashboard)

1. Open **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Select `praneet-r/portfolio`.
3. Use:
   - **Framework preset:** `None` (or `Vite`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Every push to `main` automatically rebuilds and deploys to `*.pages.dev`.
