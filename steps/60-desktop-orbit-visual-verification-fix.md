

# Step 60 — Desktop Orbit Visual Verification Fix

**Updated:** 21 May 2026, 12:22 IST

## Verified issue

Phase 59 restored desktop orbit nodes, but the Technology Orbit labels were visually crowded because the orbit bounds were too tight.

## Fix

- Arrival uses 8 calm nodes around SV.
- Technology uses 16 nodes in two rings.
- Wider x/y bounds reduce label bunching.
- Guide hides when the technology tooltip is visible.
- Mobile is untouched.
