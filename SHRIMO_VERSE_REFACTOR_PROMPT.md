# Shrimo Verse Modular Refactor Prompt

Refactor Shrimo Verse into a maintainable production structure. Split the single large portfolio JavaScript and main design file into clear modules/partials with readable naming, focused responsibility, and useful comments.

## Rules

1. Preserve the existing visual direction, journey, animations, responsive layout, SEO, and cursor replacement.
2. Do not redesign the project in this refactor.
3. Keep the project static-hosting friendly. Do not add a build tool, package manager, framework, or dependency.
4. Split JavaScript by responsibility:
   - configuration/content
   - DOM/state utilities
   - layer rendering
   - guide controller
   - scene effects
   - main app controller
5. Split CSS by responsibility and preserve cascade order:
   - foundation/base
   - separated product/proof/review layers
   - polish/layout overrides
   - cinematic upgrade pass
6. Use clear naming conventions and comments that explain what each module owns.
7. Keep the standalone rocket cursor isolated in its own cursor files.
8. Fix any existing runtime issue discovered during refactor.
9. Validate JavaScript syntax, script references, stylesheet references, and ZIP integrity before delivery.

## Final goal

A developer should be able to update content, visuals, orbit behavior, guide steps, or layer rendering without searching through one large mixed file.
