# Guardian Angel — Static Website

This is a lightweight static site (HTML/CSS/JS) with a **fresh, airy, editorial look**.

Pages:
- `index.html` — Home / vessel overview
- `around-the-world.html` — 7-year itinerary (sample)
- `financial-projection.html` — projection framework + simple split calculator

## Run locally
Option A: open `index.html`.

Option B (recommended): run a small local server
- `python -m http.server 8080`
- open `http://localhost:8080`

## Deploy (GitHub Pages)
- Settings → Pages → Deploy from branch → `main` + `/(root)`
- Your site will be served at: `https://<username>.github.io/<repo>/`

## Images
Put your images in `/assets`:
- `hero.jpg` (homepage hero)
- `route-hero.jpg` (itinerary hero) — optional, otherwise placeholder
- `finance-hero.jpg` (finance hero) — optional, otherwise placeholder
- `route-map.jpg`
- `gallery-1.jpg` ... `gallery-4.jpg`

If images are missing, the site will fall back to clean SVG placeholders.
