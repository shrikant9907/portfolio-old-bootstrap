# SV Core Circle Protection Fix

**Updated:** 20 May 2026, 19:25 IST  
**Build:** `shrimo-verse-phase-3-sv-core-circle-fixed.zip`

---

## What happened

The global button refinement was applied too broadly.

Because the SV core is an interactive element, the global button radius rule affected it and made it look like a rounded square.

That was wrong.

---

## Correct rule

The SV core is not a normal UI button.

It must always remain:

```txt
circular
centered
protected
universe core object
not affected by global button styling
```

---

## Code fix

Updated:

```txt
css/portfolio-style.css
```

Added a protected rule for:

```txt
.sv-core
.entry-sv-mini
.core-ring
.core-inner
```

All of these are forced back to:

```css
border-radius: 50%;
```

---

## Acceptance criteria

- [ ] SV core is circular on desktop.
- [ ] SV core is circular on tablet.
- [ ] SV core is circular on mobile.
- [ ] Entry mini SV marker remains circular.
- [ ] Global button styling does not affect SV core.
