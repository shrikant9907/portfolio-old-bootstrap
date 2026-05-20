# Shrimo Verse v0.0.5 Upgrade Notes

## Upgrade focus

v0.0.5 improves real-world production quality instead of adding random effects. The portfolio now has a deeper explanation layer for clients/developers and a quality controller for performance safety.

## New modules

- `js/ui/04-mission-briefing.js`
  - Opens/closes the Mission Briefing drawer.
  - Renders zone-specific product and developer context.
  - Shows selected product, proof, or review details depending on the active zone.

- `js/ui/05-performance-director.js`
  - Controls Essential, Balanced, and Cinematic quality modes.
  - Saves the selected quality mode in local storage when available.
  - Can downgrade from Cinematic to Balanced if FPS stays low.

- `css/modules/07-mission-briefing-performance.css`
  - Styles the Mission Briefing drawer, quality switcher, and quality-level visual states.

## Shortcuts

- `M`: open Mission Briefing.
- `Q`: cycle visual quality mode.

## Safety

- Existing zones, rocket cursor, guide, product gallery, proof ring, reviews, launch dock, and cinematic canvas are preserved.
- The new features are optional layers and do not replace core HTML content.
