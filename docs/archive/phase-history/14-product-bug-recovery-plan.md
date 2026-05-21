# Step 14 — Product Bug Recovery Plan

**Updated:** 20 May 2026, 17:20 IST  
**Purpose:** Tracks the product-level bugs reported after the incomplete build and defines the correct recovery behavior.

---

## Reported Bugs and Fix Direction

1. **Steps were not planned deeply enough**  
   Fix: keep `00-flow-transition-map.md`, master planning file, and explicit previous/current/next sections in every major step.

2. **No meaningful animation/motion/3D feeling**  
   Fix: restore moving orbit particles, star canvas, circular orbit motion, rocket cursor, launch animation, and pseudo-3D depth through scale/opacity/parallax.

3. **Background after enter looked different**  
   Fix: preserve circular/cosmic background style after entry using concentric orbit rings, central cyan aura, canvas galaxy, and black/cyan atmosphere.

4. **Desktop previous/next arrows missing**  
   Fix: force desktop bottom step navigation with visible previous/next arrows after verse entry.

5. **Initial tutorial card missing**  
   Fix: launch guide automatically after entry sequence and keep replay guide control.

6. **Content overlapping**  
   Fix: reduce panel width, shorten scene copy, protect SV core, tune mobile bottom sheet/dock zones.

7. **Too-large fonts / excessive radius**  
   Fix: reduce headings, use medium radius, avoid article-card styling.

8. **Nothing moving around the core**  
   Fix: restore active orbit particles and keep them moving in Arrival Core/Technology Orbit.

9. **No realistic galaxy/moving universe**  
   Fix: improve canvas star/galaxy renderer and add persistent circular space aura.

10. **Entry not impressive**  
   Fix: restore Mission Control entry with full “Enter Shrimo Verse” CTA, circular orbit, rocket acceleration, and launch transition.

---

## Recovery Principle

Use the last visually fuller stable app as the base.  
Do not replace it with a clean skeleton.  
Add docs and steps into the working app, not the other way around.
