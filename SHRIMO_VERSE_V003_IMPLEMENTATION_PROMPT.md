# Shrimo Verse v0.0.3 Implementation Prompt

Upgrade Shrimo Verse from v0.0.2 to v0.0.3 as a progressive cinematic portfolio enhancement.

## Goal
Make the project feel premium, interactive, and technically stronger without rebuilding it or breaking the static HTML/CSS/JS architecture.

## Rules
- Keep the existing SEO-friendly HTML content.
- Keep the current Shrimo Verse journey: Entry Gate, SV Core, Technology Orbit, Product Gallery, Proof Ring, Client Signals, Launch Dock.
- Add a 3D/WebGL-ready background layer without moving readable content into canvas.
- Use GSAP-style motion through a vendor bridge so real GSAP can be used when available and a fallback keeps the site working offline.
- Use Typed.js-style terminal copy through a vendor bridge so real Typed.js can be used when available and a fallback keeps the text working offline.
- Keep all enhancements progressive. If CDN libraries fail, the site must still work.
- Keep mobile lighter and respect prefers-reduced-motion.
- Add clear developer comments explaining ownership and future modification points.

## Final result
A stable static project that demonstrates 3D/canvas depth, cinematic motion, type animation, polished UI surfaces, product storytelling, and safe production fallbacks.
