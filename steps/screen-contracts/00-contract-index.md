# Shrimo Verse — Screen Contract Index

**Purpose:** Every original website/screen state is planned here before meaningful code changes.  
**Last Updated:** 20 May 2026, 17:05 IST

---

## Rule

No scene code change should happen until its screen contract is updated.

---

## Screen Contract Map

| Contract | Previous | Current | Next | Primary Trigger |
|---|---|---|---|---|
| `01-mission-entry` | None | Mission Entry | Launch Sequence | Click/tap Enter Shrimo Verse. |
| `02-launch-sequence` | Mission Entry | Launch Sequence | Arrival Core | Automatic after Mission Entry CTA. |
| `03-arrival-core` | Launch Sequence | Arrival Core | Technology Orbit | Continue to Technology Orbit. |
| `04-technology-orbit` | Arrival Core | Technology Orbit | Product Gallery | Inspect a skill/tool or move to Product Gallery. |
| `05-product-gallery` | Technology Orbit | Product Gallery | Proof Ring | Inspect product or continue to Proof Ring. |
| `06-proof-ring` | Product Gallery | Proof Ring | Client Signals | Inspect proof or continue to Client Signals. |
| `07-client-signals` | Proof Ring | Client Signals | Launch Dock | Read signal or continue to Launch Dock. |
| `08-launch-dock` | Client Signals | Launch Dock | None | WhatsApp / Launch Project. |

---

## Required Usage

Before editing a screen:

1. Read `project-rules.md`.
2. Read `steps/00-master-product-planning-system.md`.
3. Read `steps/00-flow-transition-map.md`.
4. Read the matching file from `steps/screen-contracts/`.
5. Update the contract if behavior changes.
6. Then make code changes.

---

## Meaningful Change Rule

Do not make random code fixes.  
A change is meaningful only if it supports a contract requirement, acceptance criterion, or documented bug.
