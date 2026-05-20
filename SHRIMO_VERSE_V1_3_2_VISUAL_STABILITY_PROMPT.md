# Shrimo Verse v1.3.2 Visual Stability Prompt

## Goal
Fix the visual breakage reported from v1.3/v1.3.1 without adding another feature layer. Treat Shrimo Verse as a cinematic black/cyan universe experience, not a website, dashboard, or article layout.

## Non-negotiable Rules
- Keep static HTML/CSS/JS.
- Do not convert to React.
- Do not add more visible panels.
- Do not use orange/yellow for normal UI, selected states, buttons, settings, or controls.
- Keep black/cyan as the main visual system.
- One scene, one focus, one action.
- Mobile-first from 375px.
- No overlapping content.
- No internal scrollbars inside the main scene caption.
- No dashboard/debug panels visible in normal experience.
- README.md and about-project.md must stay in the ZIP root.

## Fixes Required
1. Remove duplicated desktop HUD controls.
2. Simplify Landing Gate and remove crowded hint chips.
3. Fix Initiate Launch button text overlap.
4. Remove warm/yellow blob from landing/background.
5. Restore scene brightness and readable text.
6. Make settings panel readable without dimming the entire experience.
7. Keep mission panel as lightweight caption, not card/article block.
8. Keep mobile command dock compact and thumb-friendly.
9. Keep Launch Dock as a launch signal, not a bordered content section.
10. Update docs and validate package.

## Validation Rule
Do not call complete unless local references, duplicate IDs, duplicate scripts, CSS imports, JS syntax, required docs, and ZIP integrity are checked. Browser/mobile device visual QA still has to be performed by the user on real devices.
