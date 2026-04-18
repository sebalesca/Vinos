# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

No build step required. This is a static HTML page with in-browser Babel/JSX transpilation.

- **Open directly:** `Carilila Landing.html` in any browser
- **VS Code debug:** Press `F5` (launches in Microsoft Edge via `.vscode/launch.json`)
- **Local server:** `python -m http.server 8000` or `npx http-server`

## Architecture

Single-page React app loaded entirely from `Carilila Landing.html`. React 18 and Babel are loaded via CDN; JSX components live in `components/` and are fetched at runtime via `fetch()` + Babel transpilation (no bundler).

**Component tree:**
```
App (tweaks + shared config state)
├── Hero          — 3 switchable variants: Classic / Editorial / Artisan
├── Configurator  — 3-step product builder (wine → glass → engraving) with live preview
├── BoxIllustration — reusable photo + engraving overlay
├── Sections      — ProcessSection, GallerySection, StoriesSection, FAQSection, FinalCTA, Footer
├── Icons         — shared SVG icon library
└── TweaksPanel   — dev/designer panel; communicates with parent via postMessage
```

**State:** All shared product config (wine, glass, engraving) and UI tweaks (heroVariant, showConfigurator) are lifted to `App`. The Configurator has its own local copy that mirrors App state.

**postMessage protocol:** The page participates in a parent-iframe edit-mode handshake:
- Child → parent: `{ type: '__edit_mode_available' }`
- Parent → child: `{ type: '__activate_edit_mode' }` / `{ type: '__deactivate_edit_mode' }`
- Child → parent: `{ type: '__edit_mode_set_keys', edits: { heroVariant, showConfigurator } }`

## Key Data

Defined as constants at the top of the relevant component files:

- **`WINES`** — 4 options (Malbec Reserva, Cabernet, Blend, Chardonnay) with color, region, year, tasting notes
- **`GLASSES`** — 3 types (Cabernet, Burgundy, Flute) with inline SVG illustrations
- **`PRESETS`** — Quick-select engraving suggestions
- **`HERO_PHOTOS`** — Unsplash URLs used across hero and content sections

## Defaults

Set in `Carilila Landing.html` via an inline JSON script tag (`id="tweak-defaults"`):
```json
{ "heroVariant": "artisan", "accent": "wine", "showConfigurator": true }
```

## Design System

**CSS variables** (defined in `Carilila Landing.html` `:root`):
- Colors: `--cream`, `--wine` (#5C1A1B), `--ink`, `--gold`, `--wood`, `--paper`, `--muted`
- Fonts: Cormorant Garamond (headings), DM Sans (body), JetBrains Mono (labels/stats)

**Breakpoints:** `≤640px` mobile, `≤980px` tablet, `≥1500px` wide — handled via `<style>` blocks in each component.

**Images:** All from Unsplash CDN with `w=`, `q=80`, `auto=format`, `fit=crop` params. No local image assets.
