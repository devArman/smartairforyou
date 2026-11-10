# SmartAir System — website

Marketing site for **SMARTAIR SYSTEM LLC**, a heating & cooling (HVAC) company in Lakewood, NJ.
Production domain: https://www.smartairforyou.com

## Stack
React 19 + Vite 7, plain CSS, `lucide-react` icons. No backend: the quote form opens an SMS to the company phone.

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # output in dist/
```

## Editing content
All business data (phone, hours, services, FAQ, service area, photos) lives in `src/data/site.js`.
SEO tags and structured data are in `index.html`.

Photos in `public/images` are free Unsplash images — replace with real job photos when available.

## Deploy
Vercel: framework preset **Vite**, build command `npm run build`, output directory `dist`.

## SEO
- `npm run build` prerenders the page to static HTML (`src/entry-server.jsx` + `scripts/prerender.mjs`), so crawlers see full content without JS; the browser then hydrates it.
- JSON-LD (HVACBusiness + services + service area + FAQPage) is generated from `src/data/site.js` by `src/seo.js` — edit the data, not the markup.
