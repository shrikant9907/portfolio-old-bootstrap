# Shrimo Verse — Active Requirements

**Updated:** 21 May 2026, 03:55 IST
**Status:** Source of truth after Phase 54 structure conversion

## Product definition

Shrimo Verse is a cinematic product universe, not a normal portfolio website. The experience must feel like a black/cyan interactive space where users move through core identity, technology, products, proof, client signals, and final launch actions.

## Non-negotiable rules

1. SV core remains centered.
2. Entry screen shows no leaked controls before Start.
3. Mobile bottom dock owns the bottom safe zone.
4. No mobile CTA or button can hide under the bottom dock.
5. Product, Proof, Client, and Launch scenes use focused scene panels, not article sections.
6. Yellow/orange is only for active/launch/lock-on states.
7. Project structure must be respected: edit modules/controllers, not random patch blocks.

## Active architecture after Phase 54

CSS is loaded through:

```txt
css/portfolio-style.css -> css/modules/*.css
```

JS is loaded through:

```txt
js/portfolio-scripts.js -> js/controllers/app-controller.js -> js/controllers/legacy-runtime-controller.js
```

This is a safe conversion. The visual runtime is preserved, and the next phase should extract the runtime into semantic modules without changing UI.

## Next phases

1. Phase 55 — Extract JS runtime into core/controllers/data/effects.
2. Phase 56 — Split CSS runtime into semantic modules 01-09.
3. Phase 57 — Tablet layout QA and fixes.
4. Phase 58 — Desktop layout QA and fixes.
5. Phase 59 — Final visual QA and production lock.

## Brand Safe Zone Requirement

The ShrimoVerse logo is a fixed HUD identity element. Moving particles, nodes, scene dots, and orbit elements must not visually pass behind or cover it.

Required layer order:

```txt
background stars < universe particles < SV core < panels < controls < brand / exit
```
