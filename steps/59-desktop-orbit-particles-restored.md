

# Step 59 — Desktop Orbit Particles Restored

**Updated:** 21 May 2026, 11:58 IST  
**Build:** `shrimo-verse-phase-59-desktop-orbit-particles-restored.zip`

## Problem

After the desktop brand/card safe-zone fixes, the desktop view became too empty around the SV core. Technology particles were protected from the logo area, but the orbit no longer felt alive around the core.

## Root cause

Old phase visibility rules, zoom-hidden classes, and brand safe-zone guards were all touching the same DOM nodes. The logo fix protected the brand, but the desktop orbit needed its own final controller to keep nodes visible around the SV core.

## Fix

- Added a desktop-only orbit restore controller.
- Arrival Core shows a small calm orbit.
- Technology Orbit shows a fuller moving technology orbit.
- Nodes are kept away from the top-left logo safe zone.
- Mobile is untouched.

## Acceptance criteria

- [x] Desktop Arrival Core has visible moving nodes around SV.
- [x] Desktop Technology Orbit has visible moving technology particles around SV.
- [x] Nodes do not go behind the logo.
- [x] Mobile behavior remains unchanged.
