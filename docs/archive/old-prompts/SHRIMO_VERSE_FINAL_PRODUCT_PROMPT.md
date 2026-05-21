# SHRIMO VERSE FINAL PRODUCT PROMPT

Act as a senior creative director, product interaction designer, Three.js frontend architect, GSAP motion designer, accessibility reviewer, and production JavaScript developer.

## Mission
Finalize **Shrimo Verse** as a premium interactive portfolio universe, not a normal section-based website. The experience should feel slightly game-like, but polished and professional: the visitor enters a living black-and-cyan universe, pilots a ship, learns how to inspect meaningful particles, zooms into technologies/tools/products/proof/reviews, and reaches the Launch Dock to contact Shrikant Yadav.

## Non-negotiable product rules
1. It must feel like one screen / one world, not stacked website sections.
2. There must be no container-like page feeling. The universe should fill the viewport.
3. Every particle must be meaningful. No random stars used as fake decoration.
4. The first-time user must be taught how to use the universe with an interactive First Launch Guide.
5. Desktop and mobile must use different interaction models.
6. Desktop uses rocket/ship cursor with yellow/orange flame trail.
7. Mobile disables the custom cursor and uses touch-first controls, tap particles, bottom-sheet tooltip, swipe zones, pinch zoom in Explore mode, and double-tap reset.
8. Heading sizes must stay readable on 1366×768 laptop screens.
9. Footer must be part of the universe as Shrimo Base Station / Launch Dock, not a normal footer block.
10. The experience must loop back to the core instead of feeling like it ends.

## Color system
Use Black + Cyan as the universe palette.
Yellow/orange is allowed only for the rocket flame because it represents thrust/movement.

- Deep black: #05070A
- Soft black: #0B1016
- Surface: #111827
- Primary cyan: #22D3EE
- Bright cyan: #67E8F9
- Soft cyan: #A5F3FC
- Text: #F8FAFC
- Secondary text: #B6C2CF
- Muted: #7C8A99
- Rocket flame: #FFB020 and #FF6B00 only for thrust/trail

## First Launch Guide
After the loader and entry click, show a compact interactive guide:

Desktop steps:
1. Explain that Shrimo Verse is an interactive universe.
2. Highlight the rocket cursor and explain movement.
3. Highlight a particle and explain hover/click scanning.
4. Highlight zoom controls and explain zoom depth.
5. Highlight Free Explore mode.
6. Highlight Return to Core.
7. Highlight Launch Project.

Mobile steps:
1. Explain touch-first exploration.
2. Highlight a tappable particle.
3. Explain pinch/zoom controls.
4. Highlight Free Explore.
5. Highlight Return to Core/double tap reset.
6. Highlight mobile Menu controls.

## Interaction language
Use universe language:
- Guided Flight, not Guided Mode
- Free Explore, not Explore Mode
- Pause Orbit, not Pause Motion
- Return to Core, not Reset View
- Launch Project, not Start Project
- Signal Layer, not Proof section
- Client Stream, not Testimonials
- Launch Dock, not Footer

## Desktop behavior
- Mouse movement pilots ship.
- Ship rotates toward movement direction.
- Yellow/orange flame trail appears while moving.
- Hovering particles creates lock-on feeling.
- Clicking particles opens glass tooltip.
- Wheel in Guided Flight moves between zones.
- Wheel in Free Explore zooms.
- Return to Core resets zone, zoom, selected particles, tooltips, and mode.

## Mobile behavior
- No custom cursor.
- Menu opens controls.
- Swipe vertically in Guided Flight moves zones.
- Tap nodes opens tooltip as bottom sheet.
- Pinch zoom works in Free Explore.
- Double-tap resets to core.
- Touch targets are at least 42–44px.
- Text remains readable and headings stay small enough.

## Visual polish checklist
- Loader is cinematic but not oversized.
- Main headings use clamp but max at readable sizes on 1366px.
- The background is atmospheric without noise.
- Active zone particles are clear; inactive particles are dimmed.
- The guide highlights the correct UI item with a warm flame-colored focus ring.
- The stage fills the screen.
- Launch Dock feels like a destination inside the universe.

## Production checklist
- JS syntax passes.
- JSON-LD parses.
- One H1 only.
- No fake reviews.
- No missing local assets.
- No horizontal scroll.
- Reduced motion fallback remains available.
- No `.git` folder in ZIP.
