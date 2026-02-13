# Guardian Angel — Static Website

This is a lightweight static site (HTML/CSS/JS) with 3 pages:
- `index.html` — Home / vessel overview
- `around-the-world.html` — 7-year itinerary (sample)
- `financial-projection.html` — projection framework + simple split calculator

## How to run locally
Option A (simple): just double-click `index.html`.

Option B (recommended): run a tiny local server to avoid any browser restrictions:
- If you have Python installed:
  - `python -m http.server 8080`
  - then open `http://localhost:8080`

## Deploy (easy)
- **Netlify**: drag-and-drop the folder.
- **Vercel / Cloudflare Pages**: deploy as a static site.
- **GitHub Pages**: push to a repo and enable Pages.

## Add your images
Put your images in `/assets` and name them:
- `hero.jpg`
- `route-map.jpg`
- `gallery-1.jpg` ... `gallery-4.jpg`

The site will fall back to SVG placeholders if the images are missing.

## Season sources used for the itinerary (official references)
You can add these links directly on the itinerary page if you want them visible:
- Oyster 885 Series II specs: https://oysteryachts.com/new-sailing-yachts/oyster-885/
- NOAA NHC (Atlantic hurricane season Jun 1–Nov 30): https://www.nhc.noaa.gov/
- NOAA NHC (Eastern Pacific hurricane season May 15–Nov 30): https://www.nhc.noaa.gov/?epac=
- Australian Bureau of Meteorology (cyclone season Nov 1–Apr 30): https://www.bom.gov.au/climate/cyclones/australia/
- Météo-France La Réunion (SW Indian Ocean cyclone season mid-Nov–Apr): https://www.meteo.fr/temps/domtom/La_Reunion/webcmrs9.0/anglais/faq/FAQ_Ang_G.html
- NIWA / NZ MetService (Southwest Pacific cyclone outlook Nov–Apr): https://niwa.co.nz/sites/default/files/2025-10/ESNZ_tc_outlook_2025-26.pdf
- World Cruising Club (ARC / World ARC examples): https://worldcruising.com/

## Next enhancements (when you’re ready)
- Add a proper photo gallery with lightbox
- Add a real route map (or interactive map)
- Add a financial model page with scenarios (bear/base/bull) and charts
- Add a private owner portal (login) if needed
