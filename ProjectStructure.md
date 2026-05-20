# Project Structure — Shrimo Verse

**Current Build:** `shrimo-verse-v1.3.1-visual-recovery`  
**Updated:** 20 May 2026

## Root Files

```txt
index.html
README.md
about-project.md
CHANGELOG.md
ProjectStructure.md
DEVELOPMENT_GUIDE.md
TESTING_CHECKLIST.md
```

## Main CSS Flow

```txt
css/portfolio-style.css
  imports css/modules/01-foundation.css
  imports css/modules/02-separated-layers.css
  imports css/modules/03-polish-overrides.css
  imports css/modules/04-cinematic-upgrade.css
  imports css/modules/05-third-party-cinematic.css
  imports css/modules/06-command-deck-and-polish.css
  imports css/modules/07-mission-briefing-performance.css
  imports css/modules/08-v1-experience-flow.css
  imports css/modules/09-v1-1-cinematic-polish.css
  imports css/modules/10-v1-2-mobile-first-polish.css
  imports css/modules/11-v1-3-cinematic-universe-ui.css
  imports css/modules/12-v1-3-1-visual-recovery.css
```

`12-v1-3-1-visual-recovery.css` is the final visual recovery layer. It owns the current black/cyan cleanup and overrides old website-like visual patterns.

## Main JavaScript Areas

```txt
js/portfolio/        core content, rendering, controls
js/experience/       launch and chapter experience
js/ui/               command deck, settings, polish, gestures
js/three/            universe/canvas visual layer
js/animation/        motion and haptic helpers
js/vendors/          safe vendor bridge
```

## Rule

Do not add more visual layers without reviewing the rendered screen first. If a new layer creates overlap, article-like cards, unreadable content, or visual clutter, fix it before packaging.
