# Step 15 — Meaningful Change Protocol

**Purpose:** Prevent random fixes, patch stacking, and unplanned UI changes.  
**Last Updated:** 20 May 2026, 17:05 IST

---

## 1. Why this file exists

Shrimo Verse was repeatedly damaged by changing files without a strong screen contract.

From now on, every change must be meaningful and connected to a planned screen contract.

---

## 2. Before any code change

Answer these questions in markdown first:

```txt
Which scene is affected?
Which screen contract applies?
What user problem is being solved?
What previous state is involved?
What next state is affected?
What animation or interaction changes?
What device sizes are affected?
What acceptance criterion will prove the change worked?
```

---

## 3. Approved reasons to change code

A code change is allowed only if it does at least one of these:

- fixes a contract failure,
- restores stable behavior from `CHANGELOG.md`,
- improves a planned scene animation,
- improves mobile/tablet/desktop behavior defined in steps,
- removes conflict/patch stacking,
- improves accessibility,
- improves performance without reducing experience,
- updates docs to match real behavior.

---

## 4. Not approved

Do not change code just to:

- add another version layer,
- make a random visual variation,
- hide a problem with z-index,
- create another recovery CSS file,
- add a new guard script instead of fixing state,
- replace a working UI with a clean skeleton,
- add documentation that is not connected to actual project decisions.

---

## 5. Required change record

Every meaningful change should update:

```txt
CHANGELOG.md
Relevant steps/screen-contracts/*.md
FINAL_PROJECT_CHECK.md if package changes
```

---

## 6. Completion gate

A change is complete only when:

```txt
Planned → Coded → Loaded → Wired → Visible → Usable → Validated → Documented
```
