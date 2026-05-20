# Shrimo Verse

> New developer note: read [`about-project.md`](./about-project.md) first. It explains the complete project vision, scene flow, mobile-first rules, visual system, and future direction.

## Current Build

**Version:** `shrimo-verse-v1.3.1-visual-recovery`  
**Updated:** 20 May 2026  
**Purpose:** Visual recovery and cleanup after v1.3 became too panel-heavy and website-like.

## What This Project Is

Shrimo Verse is a cinematic black/cyan universe experience for Shrikant Yadav / Shrimo Innovations. It is not a normal portfolio website. It should feel like a futuristic product/game/AI command universe where visitors explore identity, skills, products, proof, reviews, and finally the Launch Dock.

## Main Testing Command

```bash
python3 -m http.server 5500
```

Open:

```txt
http://localhost:5500
```

## v1.3.1 Visual Recovery Notes

This version focuses on clean experience design:

- hides dashboard-style `Live Build Deck` by default,
- removes heavy article-card styling from the main scene,
- simplifies Launch Dock into a clean conversion signal,
- reduces excessive borders and padding,
- keeps black/cyan as the main UI system,
- reduces the large center background blob,
- keeps mobile controls compact and thumb-friendly,
- avoids overlapping information layers.

## Controls

```txt
1-6  -> jump scenes
[    -> previous scene
]    -> next scene
M    -> mission briefing
Q    -> quality mode
Esc  -> close active panel
Swipe left/right on mobile -> next/previous scene
```

## Required Root Docs

These must always stay in the root of every ZIP:

```txt
README.md
about-project.md
```

Also keep:

```txt
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
```

## Important Rule

A feature is complete only when it is planned, coded, loaded, wired, visible, validated, and documented.
