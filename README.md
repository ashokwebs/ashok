# ashokpasala.vercel.app

Personal site of Ashok Pasala, AI systems and security engineer. Hire: [norveth.app](https://norveth.app).

- Next.js (App Router), server-rendered, no client-side JavaScript beyond analytics.
- `lib/config.ts` holds every contact link. `components/work.tsx` holds the project list, which also feeds the JSON-LD.
- SEO/GEO: Person + Organization JSON-LD (`app/layout.tsx`), `public/llms.txt`, `app/sitemap.ts`, `app/robots.ts`.
- `npm run build` runs `scripts/check-banned.mjs` first and fails on private contact details or retired names.

```
npm install
npm run dev
```

Code is MIT (see LICENSE). Personal content, photos and project descriptions belong to Ashok Pasala.
