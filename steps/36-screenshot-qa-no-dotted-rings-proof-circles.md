# Step 36 — Screenshot QA: No Dotted Rings and Circular Proof Signals

**Updated:** 20 May 2026, 21:10 IST  
**Build:** `shrimo-verse-no-dotted-rings-proof-fix.zip`

---

## Issues identified from screenshots

1. Technology Orbit still showed a large dotted orbit ring.
2. Client Signals still showed a circular guide ring behind the SV core.
3. Proof Ring signal nodes looked like rounded squares instead of circles.
4. Proof detail panel text overlapped: `12+`, `Years Experience`, and copy were too close.
5. Technology detail tooltip and technology scan panel were both visible, causing duplicated/overlapped information.
6. Bottom-left state readout repeated the current scene and looked like another card wrapper.

---

## Fixes applied in code

- Removed all decorative generated ring pseudo-elements.
- Forced proof signal nodes into true circular shapes.
- Fixed proof panel text spacing.
- Hid duplicated Technology Scan panel when an object tooltip is open.
- Hid repeated bottom-left state readout.

---

## Acceptance criteria

- [x] No dotted ring visible in Technology Orbit.
- [x] No dotted ring visible in Product Gallery.
- [x] No dotted ring visible in Proof Ring.
- [x] No dotted ring visible in Client Signals.
- [x] Proof signals are circular.
- [x] Proof text does not overlap.
- [x] Technology tooltip does not visually duplicate the scan panel.
- [x] Bottom-left repeated readout is hidden.
