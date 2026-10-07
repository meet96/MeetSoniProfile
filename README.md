# Meet Soni — Profile

Personal portfolio built with **Next.js 16 (App Router)**, React 19 and TypeScript, exported as a fully static site and hosted on **Netlify**.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run lint       # type-check
```

## Edit content

All content lives in [`data/profile.ts`](data/profile.ts) — experience, skills, certifications, education and links. Wrap text in `**double asterisks**` to highlight it. Replace `public/Meet_Soni_Resume.pdf` to update the downloadable résumé. The favicon is `app/icon.svg` (with `app/apple-icon.png` for iOS); colours and motion live in `app/globals.css`, and all animations respect `prefers-reduced-motion`.

## Deploy (Netlify)

`netlify.toml` is preconfigured: build command `npm run build`, publish directory `out`, Node 22. Connect the repo in Netlify and deploy — no plugins or server runtime required. Update `siteUrl` in `data/profile.ts` if you use a custom domain.
