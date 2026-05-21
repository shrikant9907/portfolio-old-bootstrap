# Development Guide — Shrimo Verse

Updated: 20 May 2026, 15:35 IST

## First rule

Read `project-rules.md` before changing code.

## Development process

1. Audit before coding.
2. Fix root cause, not symptoms.
3. Work one scene at a time.
4. Mobile 375px first.
5. Tablet second.
6. Desktop third.
7. Validate visually before packaging.

## Running locally

```bash
python3 -m http.server 5500
```

## Do not do

- Do not add another `v1-x-fix.css` file.
- Do not add another UI guard script for broken state.
- Do not show dashboard panels in the main scene.
- Do not wrap everything in bordered cards.
- Do not make mobile a squeezed desktop.

## Correct work pattern

```txt
Scene plan → HTML state → CSS layout → JS behavior → visual check → documentation
```
