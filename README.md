# Shrimo Verse v1.0 Experience

Shrimo Verse is a cinematic interactive portfolio for **Shrikant Yadav** and **Shrimo Innovations**. It is built as a static HTML/CSS/JavaScript project with progressive enhancement for 3D, motion, typed terminal text, guided exploration, and conversion-focused contact paths.

## Current final direction

This version is no longer a normal portfolio page with animations. It is a guided sci-fi portfolio experience:

1. **Landing Gate** — the user first sees a focused curiosity screen.
2. **Launch Sequence** — clicking Enter starts a short cinematic transition.
3. **Arrival Core** — the user enters Shrimo Verse and sees the SV core.
4. **Technology Orbit** — skills and tools orbit the core.
5. **Product Missions** — projects open one focused mission file at a time.
6. **Proof Signals** — delivery proof appears as data signals.
7. **Client Transmissions** — reviews appear as readable signal cards.
8. **Launch Dock** — the final conversion section for WhatsApp, call, email, and profile links.

## How to run locally

Use a local server instead of double-clicking `index.html`:

```bash
python3 -m http.server 5500
```

Then open:

```txt
http://localhost:5500
```

## Important files

```txt
index.html
css/portfolio-style.css
css/modules/08-v1-experience-flow.css
js/experience/01-experience-director.js
js/portfolio/01-config.js
js/portfolio/06-main-controller.js
js/portfolio/04-guide-controller.js
```

## Editing content

Update portfolio content in:

```txt
js/portfolio/01-config.js
```

This file contains:

- `ZONES`
- `ORBIT_PARTICLES`
- `PRODUCTS`
- `PROOFS`
- `REVIEWS`
- guide steps

## Editing the cinematic experience

Use these files:

```txt
css/modules/08-v1-experience-flow.css
js/experience/01-experience-director.js
```

The experience director controls:

- landing / launching / verse states
- active chapter styling
- one-time session guide behavior
- settings drawer
- chapter rail
- reduced-clutter focus mode

## Current UX rule

Only one primary focus should be visible at a time.

Do not add permanent panels everywhere. New details should open only when needed through mission cards, tooltips, drawers, or the settings panel.

## Testing checklist

Before deploying, test:

- Enter button starts the launch sequence.
- Tutorial appears only once in the same browser tab session.
- Help button can replay the tutorial manually.
- Settings opens and closes.
- Chapter rail moves between sections.
- Left/right arrow keys move chapters.
- `M` opens Mission Briefing.
- `S` opens Settings.
- `Q` cycles quality mode.
- Launch Dock links work.
- Mobile swipe moves chapters.
- Reduced motion mode still keeps content usable.

## Version

Current stable test package: **shrimo-verse-v1.0-experience**
