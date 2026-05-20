# Testing Checklist — Shrimo Verse

**Current Build:** `shrimo-verse-v1.3.1-visual-recovery`  
**Updated:** 20 May 2026

## Package Validation

- [ ] JavaScript syntax passes.
- [ ] CSS imports exist.
- [ ] CSS brace count is valid.
- [ ] HTML local file references exist.
- [ ] No duplicate IDs.
- [ ] No duplicate scripts.
- [ ] README.md exists in root.
- [ ] about-project.md exists in root.
- [ ] ZIP integrity passes.

## Mobile Visual QA — 375px

- [ ] Landing Signal is clean and not website-like.
- [ ] Arrival Core has one clear focus.
- [ ] Mission caption does not have internal scrollbar.
- [ ] Bottom HUD does not cover important content.
- [ ] Launch Dock is not an article card.
- [ ] WhatsApp CTA is primary.
- [ ] Call and Email are secondary.
- [ ] No horizontal scroll.
- [ ] No orange/yellow selected states.

## Tablet QA — 768px

- [ ] Same scene model works with more space.
- [ ] Controls remain touch-friendly.
- [ ] Panels do not overlap.

## Desktop QA — 1366px+

- [ ] Scene feels cinematic, not like a dashboard.
- [ ] Debug deck is not visible by default.
- [ ] Guide/settings panels do not compete with the main scene.
- [ ] Background supports content and does not cover it.

## Real Device QA Still Needed

Test on:

- [ ] Android Chrome.
- [ ] iPhone Safari.
- [ ] Tablet browser.
- [ ] Desktop Chrome/Firefox/Edge.

## Performance QA Still Needed

- [ ] Lighthouse mobile target checked after hosting.
- [ ] Low-end Android performance checked.
- [ ] Reduced motion checked.
- [ ] Essential/Balanced/Cinematic modes checked visually.

---

## v1.3.2 Visual Stability Update — 20 May 2026

This update fixes screenshot-reported visual breakage from v1.3/v1.3.1. The build removes duplicated desktop HUD controls, restores readable scene brightness, simplifies the landing gate, removes warm/yellow leakage from normal UI states, prevents article-like panels from dominating the screen, and keeps the mobile HUD compact and thumb-friendly. The project remains black/cyan, scene-first, and mobile-first.

Important: this is a visual stabilization build. Real mobile-device testing and Lighthouse testing should still be completed before production publishing.

## v1.3.2 Visual Stability Reference

Implementation prompt: `SHRIMO_VERSE_V1_3_2_VISUAL_STABILITY_PROMPT.md`
