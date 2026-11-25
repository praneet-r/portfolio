# Praneet R — Developer Portfolio

A clean two-column Swiss engineering portfolio built with **React 19, Vite, TypeScript, and Tailwind CSS v4**, deployed on **Cloudflare Pages (`*.pages.dev`)**.

## Quick Customization (Placeholders)

All personal links, contact details, resume path, and project URLs live in **`src/data/portfolio.ts`**:

1. **Email:** Update `profile.email` and set `profile.emailIsPlaceholder = false`.
2. **Resume PDF:** Drop your PDF into `public/Praneet_R_Resume.pdf`, then set:
   ```ts
   resumeUrl: '/Praneet_R_Resume.pdf',
   resumeReady: true,
   ```
3. **Project Demos & Repos:** Replace `null` in `liveDemoUrl` or `sourceUrl` with your live URLs.

## Local Development & Build

```bash
npm install
npm run dev
npm run build
```

## Deploying to Cloudflare Pages

```bash
npm run deploy
```

## Reverting to Previous Design (`v1-editorial`)

The initial warm editorial design is preserved as a Git tag (`v1-editorial`):

```bash
git checkout v1-editorial
```
