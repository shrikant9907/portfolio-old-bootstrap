# Portfolio Scroll Story Plan

## Creative concept

The portfolio is rebuilt as a **Single-Screen AI Studio Experience** instead of a normal section-based page. The main viewport becomes a pinned cinematic stage. As the visitor scrolls, identity, capabilities, projects, proof, trust signals, and the final CTA appear inside the same black-and-cyan digital world.

The goal is visual creativity first: the page should feel like one living product-studio interface rather than separate Bootstrap sections.

## Story states

1. **Arrival / Identity**  
   Establishes Shrikant Yadav as a product-minded web designer and full-stack developer. The SY Crystal Core appears as the central visual anchor.

2. **Capability Orbit**  
   Capability nodes orbit the core: Business Websites, WordPress, React/Next.js, SEO-ready Structure, Web Apps, Product UI, Landing Pages, Performance.

3. **Project Reveal**  
   Real projects emerge as floating glass panels. Known projects include Shrimo Innovations, Digiting Card, Photocopywala, and Business Directory Platform.

4. **Proof Engine**  
   Experience numbers become data modules: 12+ years, 300+ projects, 100+ developers trained, multiple products built.

5. **Trust Stream**  
   Since verified customer reviews were not provided, the trust state avoids fake testimonials and shows honest project trust signals. Real client reviews can replace this layer later.

6. **Conversion Dock**  
   The scene simplifies around the CTA. WhatsApp, email, and selected work actions become the focus.

## Motion plan

- GSAP ScrollTrigger pins the main story stage on desktop and tablet-sized screens.
- Content layers fade, slide, scale, and leave as the user scrolls.
- The SY Crystal Core stays present across states and changes its role visually.
- Capability nodes and project panels move in and out around the core.
- Proof numbers animate once when the proof state is reached.
- Trust strips drift subtly to create a living interface.
- Reduced-motion users receive a stacked readable fallback.

## Color system

Only Black + Cyan is used for the new creative system.

- Deep black: `#05070A`
- Soft black: `#0B1016`
- Dark surface: `#111827`
- Primary cyan: `#22D3EE`
- Bright cyan glow: `#67E8F9`
- Soft cyan: `#A5F3FC`
- Primary text: `#F8FAFC`
- Secondary text: `#B6C2CF`
- Muted text: `#7C8A99`
- Glass border: `rgba(34, 211, 238, 0.22)`

## Library usage

- **GSAP**: core animation timeline.
- **GSAP ScrollTrigger**: pinned scroll story and state-based transitions.
- **Lenis**: smooth scroll on capable devices.
- **SplitType**: premium headline word reveal.
- **Three.js**: lightweight point-field canvas background only; readable UI remains HTML/CSS/SVG.
- **Custom JavaScript**: state navigation, mobile drawer, progress bar, counters, reduced-motion fallback.

## Responsive behavior

Desktop:
- Pinned immersive story.
- Header remains fixed and minimal.
- Visual core and content panels share the same stage.

Tablet:
- Pinned story remains, with reduced object sizes and spacing.

Mobile:
- Story becomes stacked but keeps the same visual language.
- Motion is reduced for performance.
- CTA remains easy to access.

## Fallback behavior

- If WebGL/Three.js fails, the canvas layer simply remains blank and the CSS grid/glow background still works.
- If `prefers-reduced-motion` is enabled, pinning and heavy transforms are disabled and content is shown in readable order.
- If GSAP or ScrollTrigger fails, content remains visible due to default CSS fallback.

## Files modified

- `index.html`
- `css/portfolio-style.css`
- `js/portfolio-scripts.js`
- `PORTFOLIO_SCROLL_STORY_PLAN.md`
- `CHANGELOG.md`
- `TODO.md`

## Quality checklist

- One H1 only.
- Black + Cyan visual system applied.
- Header is minimal and fixed.
- Scroll story works on desktop.
- Mobile fallback remains readable.
- No fake reviews.
- No forced SEO copy in the hero.
- No default Bootstrap hero/navbar appearance.
- No horizontal scroll.
- CTA actions are clear.
- Assets are local where needed.
- External libraries are loaded from CDN.
