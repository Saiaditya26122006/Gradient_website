# Gradient — marketing site

Static site (no build step) for the Gradient AI-automation studio. Bilingual (ES default / EN toggle), built for Vercel.

## Structure

```
gradient-site/
  index.html
  css/style.css
  js/main.js
  vercel.json
```

## Deploy to Vercel (pick one)

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel
cd gradient-site
vercel --prod
```
No build settings needed — Vercel auto-detects this as a static site.

**Option B — Drag and drop**
Go to vercel.com → Add New → Project → drag the `gradient-site` folder into the browser.

**Option C — Git-based (recommended for ongoing edits)**
Push this folder to a GitHub repo, then import it in the Vercel dashboard. Every push to `main` auto-deploys — best option once you're editing copy/pricing regularly.

## Before going live — things left as placeholders

1. **Contact email**: `js/main.js` line ~150 (`CONTACT_EMAIL`) currently points at the founder's personal Gmail. The contact form opens the visitor's email client with a pre-filled message (no backend). Swap in a dedicated business inbox once one exists, and consider replacing the mailto approach with a real form handler (Vercel serverless function, Formspree, etc.) for a no-redirect submit experience.
2. **Domain**: not yet purchased. Once bought, point it at the Vercel project in Project Settings → Domains.
3. **Legal footer**: intentionally minimal — no registered company details are shown because the business isn't formally registered yet (per the Barcelona plan's recommendation to start as autónomo). Update the footer once registration is complete.
4. **No testimonials/client logos**: deliberate. Fabricating social proof before there are real clients is a fast way to lose trust with a skeptical lawyer or gestor. The "3 founding clients" section does the trust-building work honestly instead — replace it with real case studies as they land.
5. **Verticals shown**: currently Legal, Real Estate, Gestorías only (the active Barcelona pilot). Add Hospitality/coffee shops as a section once that expansion actually starts — don't add it earlier, it dilutes the pitch.

## Editing copy

All text lives in `js/main.js` inside the `translations` object (`es` and `en` keys side by side). Change the string, save, redeploy — no HTML editing needed for copy changes.
