# Shrimo Verse Cluster Fix Plan

## Problem
The previous build placed technologies, tools, projects, proof, reviews, and contact actions into the same orbit around the SV core. This made the universe feel crowded and harder to understand.

## Final Fix Decision
The SV core remains fixed in the center like the sun. Only skills, technologies, and selected tools orbit the core. Other content types are separated into dedicated layers:

1. **Technology Orbit** — only skills, technologies, and zoom-revealed tools.
2. **Product Gallery** — projects/products are shown as small dots plus one focused gallery panel.
3. **Proof Ring** — delivery proof appears as separate data dots plus one readable proof panel.
4. **Client Signal Stream** — reviews are shown as signal dots plus one readable review panel.
5. **Launch Dock** — contact actions remain in the dock, not mixed into the orbit.

## Visual Rules
- No category prefixes inside orbit labels.
- No products/reviews/contact labels around the core.
- Only one content family is active at a time.
- Inactive orbit content is dimmed or hidden.
- Deep tools appear only after zoom.
- Mobile uses the same separated layers with bottom controls and bottom-sheet details.

## Interaction Rules
- Hovering orbit particles still gives orange/yellow lock-on feedback.
- Clicking orbit particles opens the tooltip.
- Product dots switch the focused product panel.
- Review dots switch the readable review panel.
- Proof dots switch the active proof signal.
- Auto Flight moves through each layer cleanly.

## Result Target
The screen should feel like a clear universe system instead of a crowded label cloud. The core remains visually meaningful, the orbit becomes cleaner, and products/reviews become easier to understand.
