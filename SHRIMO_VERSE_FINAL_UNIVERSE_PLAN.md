# Shrimo Verse Final Universe Plan

## Final concept
Shrimo Verse is a full-screen interactive portfolio universe, not a normal section-based website. The fixed center core is `SV / Shrimo Verse`, and every particle, gallery object, proof signal, review signal, and contact beacon orbits around it.

## Claude/expert suggestions applied
- Game-like universe instead of dashboard or normal portfolio.
- Pure black cinematic background, no grid.
- Fixed center SV core that behaves like the sun.
- Short particle labels only: HTML, React, Git, WordPress, etc.
- SVG HUD controls with tooltip labels.
- Yellow/orange rocket flame and orange particle hover lock-on glow.
- Product gallery objects instead of normal project cards.
- Mobile-specific bottom control dock and bottom-sheet details.
- 1366x768 heading size protection and overlap protection.
- Real client reviews only.

## Screen model
The app is a single screen. It does not expose normal page sections. The world states are:
1. Arrival Core
2. Technology Orbit
3. Product Gallery
4. Proof Ring
5. Client Signal Stream
6. Launch Dock

## Entry screen
The entry screen is Mission Control. It shows:
- SHRIMO VERSE MISSION CONTROL
- You are about to enter Shrimo Verse
- One short explanation
- Four SVG hint chips: Move, Zoom, Inspect, Launch
- One CTA: Enter Shrimo Verse

No Skip Intro button is shown. The rocket cursor is active from the first desktop screen.

## Center core rules
- Core is fixed at viewport center.
- Core does not move.
- Default core size is small and safe.
- Core grows visually only through zoom.
- Particles are pushed away from the center safe zone.
- Tooltips and controls never depend on the core moving.

## Particle system
All particles are meaningful. Labels are simple and never include category prefixes.

Categories:
- Technologies
- Tools
- Services
- Products
- Proof
- Reviews
- Contact paths

Tools stay hidden until zoom level is high enough.

## Gallery system
Product objects are larger than regular particles and behave like orbiting showcase bodies. Known products:
- Shrimo Innovations
- Digiting Card
- Photocopywala
- Business Directory Platform

## Controls
Desktop controls are SVG HUD buttons:
- Guided Flight
- Free Explore
- Auto Flight
- Pause Orbit
- Return to Core
- Replay Guide
- Launch Project

Each control has an aria-label and tooltip.

## Zoom system
Zoom uses a top/right vertical game-style slider on desktop and a mobile-friendly bottom control on small screens.

Limits:
- Min: 70%
- Max: 220%

Zoom reveals hidden tools and expands the orbit field.

## Rocket cursor
Desktop only. The ship follows the pointer, rotates based on movement direction, and leaves a yellow/orange flame trail. It enters lock-on state over particles.

Mobile and touch devices use native touch behavior, not the rocket cursor.

## First Launch Guide
The guide teaches:
1. Pilot the ship
2. Inspect particles
3. Open details
4. Zoom deeper
5. Return to Core
6. Auto Flight
7. Launch Project

## Mobile plan
Mobile is not a compressed desktop version. It uses:
- No rocket cursor
- Bottom control dock
- Swipe between zones
- Tap particles to inspect
- Bottom-sheet details
- Reduced particle visual complexity
- Larger touch targets

## Launch Dock
The footer is implemented as a Launch Dock inside the universe, not a traditional website footer. It includes WhatsApp, Call, Email, LinkedIn, GitHub, Shrimo, and Digital Profile.

## Performance plan
- Pure CSS/DOM/SVG effects with lightweight canvas star field.
- No large images or textures.
- No heavy 3D dependency required for stability.
- Particle positions are updated through one requestAnimationFrame loop.
- Rocket trail is throttled.
- Reduced-motion fallback disables heavy animation.

## Accessibility plan
- One H1 only.
- Controls have aria-labels.
- Buttons and links have focus states.
- Tooltip can be closed with Escape.
- Keyboard shortcuts are supported.
- Touch targets are mobile-friendly.
- Reduced motion is respected.
