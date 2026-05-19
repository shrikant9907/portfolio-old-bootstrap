(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  const ZONES = [
    { name: 'Arrival Core', hint: 'Start from the center.', title: 'Welcome to Shrimo Verse.', kicker: 'ARRIVAL CORE', copy: 'SV stays fixed in the center. Skills and technologies orbit around it like a living product universe.' },
    { name: 'Technology Orbit', hint: 'Skills and tools around the core.', title: 'Skills orbit the core.', kicker: 'TECHNOLOGY ORBIT', copy: 'Only technologies and tools orbit SV. Zoom in to reveal deeper tools without crowding the screen.' },
    { name: 'Product Gallery', hint: 'Products are shown separately.', title: 'Products enter as gallery signals.', kicker: 'PRODUCT GALLERY', copy: 'Projects do not clutter the orbit. Use the product dots to inspect Shrimo, Digiting Card, Photocopywala, and the directory platform.' },
    { name: 'Proof Ring', hint: 'Delivery proof appears as data dots.', title: 'Proof becomes data.', kicker: 'PROOF RING', copy: 'Experience, delivered work, training, and product-building proof appear as separate signals, not mixed with the skill orbit.' },
    { name: 'Client Signals', hint: 'Reviews are readable, not crowded.', title: 'Client signals confirm the path.', kicker: 'CLIENT SIGNAL STREAM', copy: 'Real reviews appear as clean signal dots with one readable review panel at a time.' },
    { name: 'Launch Dock', hint: 'Contact paths are the final dock.', title: 'Reach the Launch Dock.', kicker: 'LAUNCH DOCK', copy: 'When the path is clear, use the Launch Dock to send a message, call, email, or open professional links.' }
  ];

  const ORBIT_PARTICLES = [
    // Inner orbit: foundation
    n('html','HTML5','Technology','The semantic base of readable, accessible, search-friendly websites.','Used for clean structure and long-term maintainability.',-90,148,'technology','core'),
    n('css','CSS3','Technology','The visual layer for responsive layout, spacing, motion, and visual polish.','Used for professional interfaces on desktop and mobile.',-18,148,'technology','core'),
    n('javascript','JavaScript','Technology','The interaction layer that powers controls, tooltips, zoom, and guided behavior.','Used for app-like experiences and interactive product UI.',54,148,'technology','core'),
    n('typescript','TypeScript','Technology','Typed JavaScript for safer large-scale frontend and product codebases.','Useful for scalable systems and maintainable architecture.',126,148,'technology','core'),

    // Middle orbit: frameworks / runtime / CMS
    n('react','React','Technology','Component-based frontend library for dynamic product interfaces.','Best for dashboards, SaaS screens, and modular UI systems.',-96,228,'technology','core'),
    n('next','Next.js','Technology','Production React framework for fast, SEO-ready web applications.','Useful for websites, products, routing, rendering, and performance.',-42,228,'technology','core'),
    n('node','Node.js','Technology','JavaScript runtime for backend systems and API services.','Used for scalable backend logic and product systems.',12,228,'technology','core'),
    n('express','Express.js','Technology','Node framework for REST APIs and server routes.','Useful for auth flows, dashboards, and modular backend systems.',66,228,'technology','core'),
    n('php','PHP','Technology','Server-side language used in WordPress and custom systems.','Useful for CMS work, plugins, and practical web tools.',120,228,'technology','core'),
    n('wordpress','WordPress','Technology','CMS platform for editable business websites and custom themes.','Best when clients need content control and fast publishing workflows.',174,228,'technology','core'),

    // Outer orbit: database / styling / libraries
    n('mongodb','MongoDB','Technology','Document database for flexible application data and dashboards.','Useful for product data, profiles, and dynamic applications.',-100,306,'technology','deep'),
    n('mysql','MySQL','Technology','Relational database for structured business and CMS data.','Useful for directories, ecommerce, and custom business systems.',-55,306,'technology','deep'),
    n('tailwind','Tailwind CSS','Technology','Utility-first CSS system for fast, consistent interface building.','Useful for design tokens and responsive component systems.',-10,306,'technology','deep'),
    n('bootstrap','Bootstrap','Technology','Responsive frontend framework for practical website layouts.','Useful for reliable business websites and admin interfaces.',35,306,'technology','deep'),
    n('sass','Sass / SCSS','Technology','CSS preprocessor for structured, maintainable visual systems.','Useful for larger theme and component styling.',80,306,'technology','deep'),
    n('jquery','jQuery','Technology','Classic JavaScript library still useful in legacy and WordPress projects.','Useful for maintaining older business sites and plugins.',125,306,'technology','deep'),
    n('redux','Redux','Technology','Predictable frontend state management for complex interfaces.','Useful when larger applications need stable data flow.',170,306,'technology','deep'),
    n('jwt','JWT Auth','Technology','Token-based authentication for secure logged-in web products.','Useful for role-based dashboards and protected APIs.',215,306,'technology','deep'),

    // Reveal on deeper zoom
    n('woocommerce','WooCommerce','Technology','WordPress ecommerce system for catalogs, orders, and payments.','Useful for online stores and business commerce workflows.',-82,382,'technology','hidden'),
    n('git','Git','Tool','Version control for professional development and deployment workflows.','Keeps work trackable, reversible, and collaborative.',-34,382,'tool','hidden'),
    n('figma','Figma','Tool','Design and interface planning tool for UI structure and handoff.','Useful for shaping layouts before development starts.',14,382,'tool','hidden'),
    n('gsap','GSAP','Tool','Animation platform for premium web motion and scroll-based storytelling.','Used when motion needs to feel controlled and production-quality.',62,382,'tool','hidden'),
    n('three','Three.js','Tool','WebGL library for 3D and immersive web visuals.','Useful for universe-like experiences and depth-driven interfaces.',110,382,'tool','hidden'),
    n('apis','APIs','Tool','Connected systems and integrations for product functionality.','Useful for business automation and dynamic data flows.',158,382,'tool','hidden'),
    n('performance','Performance','Tool','Speed, loading, and UX optimization.','Important for conversions, usability, and search quality.',206,382,'tool','hidden'),
    n('hosting','Hosting','Tool','Deployment and server setup for production websites.','Used for making websites stable and accessible online.',254,382,'tool','hidden'),
    n('analytics','Analytics','Tool','Measurement system for traffic and user behavior.','Helps understand what users do after launch.',302,382,'tool','hidden'),
    n('search-console','Search Console','Tool','Google search monitoring and technical SEO insight.','Used to track indexing, issues, and search performance.',350,382,'tool','hidden')
  ];

  const PRODUCTS = [
    { id:'shrimo', title:'Shrimo Innovations', desc:'Software and web development company focused on websites, apps, and digital products.', use:'Main business identity behind Shrimo Verse.', link:'https://shrimo.com/' },
    { id:'digiting', title:'Digiting Card', desc:'Digital visiting card platform for professionals and businesses.', use:'Built around digital identity, contact sharing, and online presence.', link:'https://digitingcard.com/' },
    { id:'photocopywala', title:'Photocopywala', desc:'Online tools and document utilities for common print and digital tasks.', use:'Practical platform for people who need quick document services and tools.', link:'https://photocopywala.in/' },
    { id:'directory', title:'Business Directory Platform', desc:'Business listing and discovery platform concept for organized local search.', use:'A product direction for local discovery and business visibility.', link:'' }
  ];

  const PROOFS = [
    { id:'years', title:'12+', label:'Years Experience', desc:'More than a decade of web design, WordPress, PHP, frontend, React, and full-stack work.' },
    { id:'projects', title:'300+', label:'Projects Delivered', desc:'A strong delivery record across websites, products, and business systems.' },
    { id:'trained', title:'100+', label:'Developers Trained', desc:'Practical training, mentoring, communication, and system thinking.' },
    { id:'products-proof', title:'Multiple', label:'Products Built', desc:'Product ideas and platforms built inside the Shrimo ecosystem.' }
  ];

  const REVIEWS = [
    { id:'ram', name:'Ram Dubey', company:'Khyati Overseas Private Limited', text:'Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.' },
    { id:'rajeev', name:'Rajeev T.', company:'International client', text:'A project many people said could not be done was handled quickly, with practical suggestions and fast execution.' },
    { id:'sergio', name:'Sergio W.', company:'International client', text:'The work was delivered on time, communication stayed professional, and the final result matched expectations.' }
  ];

  function n(id,label,category,desc,use,angle,radius,type,depth='core') {
    return { id,label,category,desc,use,angle,radius,type,depth,phase: Math.random() * Math.PI * 2 };
  }

  const els = {
    body: document.body,
    entryGate: $('#entryGate'),
    enterVerse: $('#enterVerse'),
    ship: $('#shipCursor'),
    trail: $('#cursorTrailLayer'),
    guidedMode: $('#guidedMode'),
    exploreMode: $('#exploreMode'),
    autoFlight: $('#autoFlight'),
    pauseOrbit: $('#pauseOrbit'),
    returnCore: $('#returnCore'),
    replayGuide: $('#replayGuide'),
    brandReset: $('#brandReset'),
    zoomIn: $('#zoomIn'),
    zoomOut: $('#zoomOut'),
    zoomRange: $('#zoomRange'),
    zoomValue: $('#zoomValue'),
    plane: $('#universePlane'),
    layer: $('#particleLayer'),
    productLayer: $('#productGalleryLayer'),
    proofLayer: $('#proofRingLayer'),
    reviewLayer: $('#clientSignalLayer'),
    core: $('#svCore'),
    stage: $('#verseStage'),
    tooltip: $('#objectTooltip'),
    tooltipClose: $('#tooltipClose'),
    tooltipType: $('#tooltipType'),
    tooltipTitle: $('#tooltipTitle'),
    tooltipMock: $('#tooltipMock'),
    tooltipDesc: $('#tooltipDesc'),
    tooltipUse: $('#tooltipUse'),
    tooltipLink: $('#tooltipLink'),
    missionKicker: $('#missionKicker'),
    missionTitle: $('#missionTitle'),
    missionCopy: $('#missionCopy'),
    stateName: $('#stateName'),
    stateHint: $('#stateHint'),
    missionPanel: $('#missionPanel'),
    launchDock: $('#launchDock'),
    guideOverlay: $('#guideOverlay'),
    guideTitle: $('#guideTitle'),
    guideText: $('#guideText'),
    guideStep: $('#guideStep'),
    guideProgress: $('#guideProgress'),
    guideBack: $('#guideBack'),
    guideNext: $('#guideNext'),
    mobileDots: $('#mobileZoneDots'),
    zonePrev: $('#zonePrev'),
    zoneNext: $('#zoneNext'),
    zoneNav: $('#zoneNav')
  };

  let currentZone = 0;
  let zoom = 1;
  let paused = false;
  let autoTimer = null;
  let autoActive = false;
  let guideIndex = 0;
  let lastMouse = { x: window.innerWidth * .72, y: window.innerHeight * .35 };
  let prevMouse = { ...lastMouse };
  let shipAngle = 0;
  let entered = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let pinchStartDistance = null;
  let pinchStartZoom = 1;
  let activeProduct = 0;
  let activeReview = 0;
  let activeProof = 0;
  let moveIdleTimer = null;
  let shipVelocity = 0;
  let shipPos = { ...lastMouse };
  let shipTarget = { ...lastMouse };
  let lastShipFrame = performance.now();
  let launchStart = 0;
  let isLaunching = false;
  let pageHidden = false;
  let lockTimer = null;

  const GUIDE = isTouch ? [
    { title:'Travel by touch', text:'Swipe left or right to move between Shrimo Verse zones.', target:'.mobile-control-dock' },
    { title:'Inspect particles', text:'Tap a glowing skill node to open its story.', target:'.verse-node[data-id="html"]' },
    { title:'Project dots', text:'Projects open from clean dots, not crowded orbit labels.', target:'#productGalleryLayer' },
    { title:'Review signals', text:'Client reviews appear as readable signal cards.', target:'#clientSignalLayer' },
    { title:'Zoom in Explore', text:'Use Orbit Zoom or pinch in Free Explore to reveal deeper tools.', target:'.zoom-dock' },
    { title:'Launch Project', text:'Use Launch when you are ready to start a project conversation.', target:'.mobile-control-dock a' }
  ] : [
    { title:'Pilot the ship', text:'Move your cursor to pilot the explorer ship.', target:'#shipCursor' },
    { title:'Inspect skills', text:'Only skills and technologies orbit the SV core. Hover to scan them.', target:'.verse-node[data-id="html"]' },
    { title:'Open details', text:'Click a glowing node to open its story.', target:'.verse-node[data-id="react"]' },
    { title:'Project gallery', text:'Projects are managed separately as dots and a focused gallery panel.', target:'#productGalleryLayer' },
    { title:'Client signals', text:'Reviews are readable signal dots, not orbit clutter.', target:'#clientSignalLayer' },
    { title:'Zoom deeper', text:'Use Orbit Zoom to reveal hidden tools and details.', target:'.zoom-dock' },
    { title:'Return to Core', text:'Lost in the orbit? Return to Core anytime.', target:'#returnCore' }
  ];

  init();

  function init() {
    document.body.classList.toggle('touch-device', isTouch);
    if (!isTouch && !prefersReducedMotion) document.body.classList.add('has-ship');
    renderOrbitParticles();
    renderSeparatedLayers();
    bindControls();
    bindEntry();
    bindCursor();
    bindKeyboard();
    bindTouch();
    initStars();
    setZone(0, { immediate: true });
    setZoom(1, { silent: true });
    animate();
  }

  function renderOrbitParticles() {
    els.layer.innerHTML = '';
    ORBIT_PARTICLES.forEach((obj) => {
      const node = document.createElement('button');
      node.type = 'button';
      node.className = `verse-node ${obj.type} depth-${obj.depth}`;
      node.dataset.id = obj.id;
      node.dataset.type = obj.type;
      node.dataset.depth = obj.depth;
      node.innerHTML = `<strong>${obj.label}</strong>`;
      node.setAttribute('aria-label', `${obj.label}. ${obj.category}. Click to inspect.`);
      node.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-lock');
        node.classList.add('is-hovered');
      });
      node.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-lock');
        node.classList.remove('is-hovered');
      });
      node.addEventListener('focus', () => node.classList.add('is-hovered'));
      node.addEventListener('blur', () => node.classList.remove('is-hovered'));
      node.addEventListener('click', (event) => {
        event.stopPropagation();
        if (autoActive) stopAutoFlight();
        showObject(obj, node);
      });
      els.layer.appendChild(node);
      obj.el = node;
    });

    els.core.addEventListener('click', () => showObject({
      label: 'Shrimo Verse Core',
      category: 'Core',
      desc: 'The fixed center of this universe. Skills and technologies orbit here; projects and client signals open as separate focused layers.',
      use: 'Return here whenever you want to reset the view or restart exploration.'
    }, els.core));
  }

  function renderSeparatedLayers() {
    renderProductLayer();
    renderProofLayer();
    renderReviewLayer();
  }

  function renderProductLayer() {
    els.productLayer.innerHTML = `
      <div class="gallery-card" id="productCard" role="group" aria-live="polite"></div>
      <div class="gallery-dots" aria-label="Product dots">
        ${PRODUCTS.map((item, index) => `<button type="button" class="world-dot product-dot" data-product="${index}" aria-label="Open ${escapeAttr(item.title)}"><span></span></button>`).join('')}
      </div>`;
    $$('.product-dot', els.productLayer).forEach((dot) => {
      dot.addEventListener('click', () => {
        activeProduct = Number(dot.dataset.product);
        updateProductLayer();
        setZone(2);
      });
      dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });
    updateProductLayer();
  }

  function updateProductLayer() {
    const item = PRODUCTS[activeProduct];
    const card = $('#productCard');
    if (!card) return;
    card.innerHTML = `
      <p>Product signal ${activeProduct + 1}/${PRODUCTS.length}</p>
      <h3>${item.title}</h3>
      <span class="gallery-preview">${item.title.split(/\s+/).map(w => w[0]).join('').slice(0,3)}</span>
      <em>${item.desc}</em>
      <small>${item.use}</small>
      ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">Open path</a>` : '<button type="button" class="disabled-path" disabled>Concept path</button>'}`;
    $$('.product-dot', els.productLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === activeProduct));
    positionDots('.product-dot', activeProduct, 176);
  }

  function renderProofLayer() {
    els.proofLayer.innerHTML = `
      <div class="proof-focus" id="proofFocus" aria-live="polite"></div>
      <div class="proof-dots" aria-label="Proof signals">
        ${PROOFS.map((item, index) => `<button type="button" class="world-dot proof-dot" data-proof="${index}" aria-label="Inspect ${escapeAttr(item.label)}"><strong>${item.title}</strong></button>`).join('')}
      </div>`;
    $$('.proof-dot', els.proofLayer).forEach((dot) => {
      dot.addEventListener('click', () => {
        activeProof = Number(dot.dataset.proof);
        updateProofLayer();
        setZone(3);
      });
      dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });
    updateProofLayer();
  }

  function updateProofLayer() {
    const item = PROOFS[activeProof];
    const focus = $('#proofFocus');
    if (!focus) return;
    focus.innerHTML = `<p>Proof signal</p><h3>${item.title}</h3><strong>${item.label}</strong><em>${item.desc}</em>`;
    $$('.proof-dot', els.proofLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === activeProof));
    positionDots('.proof-dot', activeProof, 162);
  }

  function renderReviewLayer() {
    els.reviewLayer.innerHTML = `
      <div class="review-card" id="reviewCard" aria-live="polite"></div>
      <div class="review-dots" aria-label="Client review signal dots">
        ${REVIEWS.map((item, index) => `<button type="button" class="world-dot review-dot" data-review="${index}" aria-label="Read review by ${escapeAttr(item.name)}"><span>${initials(item.name)}</span></button>`).join('')}
      </div>`;
    $$('.review-dot', els.reviewLayer).forEach((dot) => {
      dot.addEventListener('click', () => {
        activeReview = Number(dot.dataset.review);
        updateReviewLayer();
        setZone(4);
      });
      dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });
    updateReviewLayer();
  }

  function updateReviewLayer() {
    const item = REVIEWS[activeReview];
    const card = $('#reviewCard');
    if (!card) return;
    card.innerHTML = `<p>Client signal ${activeReview + 1}/${REVIEWS.length}</p><blockquote>${item.text}</blockquote><strong>${item.name}</strong><em>${item.company}</em>`;
    $$('.review-dot', els.reviewLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === activeReview));
    positionDots('.review-dot', activeReview, 152);
  }

  function positionDots(selector, activeIndex, radius) {
    $$(selector).forEach((dot, index, all) => {
      const total = all.length;
      const angle = ((index / total) * Math.PI * 2) - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      dot.style.setProperty('--dot-x', `${x}px`);
      dot.style.setProperty('--dot-y', `${y}px`);
      dot.classList.toggle('is-active', index === activeIndex);
    });
  }

  function bindEntry() {
    els.enterVerse.addEventListener('click', () => {
      if (entered) return;
      entered = true;
      isLaunching = true;
      launchStart = performance.now();
      els.enterVerse.disabled = true;
      els.enterVerse.textContent = 'Entering Shrimo Verse...';
      els.entryGate.classList.add('is-launching');
      document.body.classList.add('is-entering-verse');
      els.ship?.classList.add('is-boosting', 'is-locked');
      const statusSteps = [
        [260, 'ALIGNING ROCKET PATH'],
        [820, 'OPENING ORBIT FIELD'],
        [1380, 'LOCKING SV CORE'],
        [1900, 'ENTERING DIGITAL UNIVERSE']
      ];
      statusSteps.forEach(([delay, label]) => {
        window.setTimeout(() => {
          const status = $('#entryStatus');
          if (status && isLaunching) status.textContent = label;
        }, prefersReducedMotion ? 40 : delay);
      });
      window.setTimeout(() => {
        els.entryGate.classList.add('is-hidden');
        document.body.classList.add('verse-entered');
        document.body.classList.remove('is-entering-verse');
        isLaunching = false;
        els.ship?.classList.remove('is-boosting', 'is-locked');
        setZone(0);
        window.setTimeout(() => startGuide(), prefersReducedMotion ? 120 : 620);
      }, prefersReducedMotion ? 180 : 2400);
    });
  }

  function bindControls() {
    els.guidedMode.addEventListener('click', () => { stopAutoFlight(); startGuide(); setControlActive(els.guidedMode); });
    els.exploreMode.addEventListener('click', () => { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); });
    els.autoFlight.addEventListener('click', () => toggleAutoFlight());
    els.pauseOrbit.addEventListener('click', () => togglePause());
    els.returnCore.addEventListener('click', () => returnToCore());
    els.replayGuide.addEventListener('click', () => startGuide());
    els.brandReset.addEventListener('click', () => returnToCore());
    els.zoomIn.addEventListener('click', () => setZoom(zoom + .15));
    els.zoomOut.addEventListener('click', () => setZoom(zoom - .15));
    els.zoomRange.addEventListener('input', () => setZoom(Number(els.zoomRange.value) / 100));
    els.tooltipClose.addEventListener('click', closeObject);
    els.stage.addEventListener('click', (event) => {
      if (!event.target.closest('.verse-node') && !event.target.closest('.world-dot') && !event.target.closest('.object-tooltip') && !event.target.closest('.sv-core')) closeObject();
    });
    els.guideBack.addEventListener('click', () => stepGuide(-1));
    els.guideNext.addEventListener('click', () => stepGuide(1));
    $$('[data-action="auto"]').forEach(btn => btn.addEventListener('click', startAutoFlight));
    $$('[data-action="guide"]').forEach(btn => btn.addEventListener('click', startGuide));
    $$('[data-mobile]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.mobile;
        if (action === 'guide') startGuide();
        if (action === 'explore') { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); }
        if (action === 'auto') startAutoFlight();
        if (action === 'core') returnToCore();
      });
    });
    $$('[data-zone]', els.mobileDots).forEach(btn => btn.addEventListener('click', () => setZone(Number(btn.dataset.zone))));
    els.zonePrev?.addEventListener('click', () => setZone(currentZone - 1));
    els.zoneNext?.addEventListener('click', () => setZone(currentZone + 1));
  }

  function setControlActive(control) {
    $$('.hud-btn').forEach(btn => btn.classList.remove('is-active'));
    if (control) control.classList.add('is-active');
  }

  function togglePause() {
    paused = !paused;
    document.body.classList.toggle('orbit-paused', paused);
    els.pauseOrbit.classList.toggle('is-active', paused);
  }

  function returnToCore() {
    stopAutoFlight();
    closeObject();
    setZoom(1);
    setZone(0);
    setControlActive(els.guidedMode);
  }

  function toggleAutoFlight() {
    autoActive ? stopAutoFlight() : startAutoFlight();
  }

  function startAutoFlight() {
    closeGuide();
    closeObject();
    autoActive = true;
    setControlActive(els.autoFlight);
    let index = currentZone;
    const lastZone = ZONES.length - 1;
    const run = () => {
      if (!autoActive) return;
      const zone = Math.max(0, Math.min(lastZone, index));
      setZone(zone);
      if (zone === 2) { activeProduct = Math.min(activeProduct + 1, PRODUCTS.length - 1); updateProductLayer(); }
      if (zone === 3) { activeProof = Math.min(activeProof + 1, PROOFS.length - 1); updateProofLayer(); }
      if (zone === 4) { activeReview = Math.min(activeReview + 1, REVIEWS.length - 1); updateReviewLayer(); }
      const focus = activeParticleForZone(zone);
      if (focus?.el) {
        $$('.verse-node').forEach(node => node.classList.remove('is-selected'));
        focus.el.classList.add('is-selected');
      }
      if (zone >= lastZone) {
        autoTimer = setTimeout(() => {
          stopAutoFlight();
          setControlActive(els.guidedMode);
        }, 4200);
        return;
      }
      index += 1;
      autoTimer = setTimeout(run, 5200);
    };
    run();
  }

  function stopAutoFlight() {
    autoActive = false;
    clearTimeout(autoTimer);
    els.autoFlight.classList.remove('is-active');
  }

  function activeParticleForZone(zone) {
    if (zone === 0 || zone === 1) return ORBIT_PARTICLES.find(p => p.el && !p.el.classList.contains('is-hidden-by-zoom')) || ORBIT_PARTICLES[0];
    return null;
  }

  function setZone(zone, options = {}) {
    currentZone = Math.max(0, Math.min(ZONES.length - 1, zone));
    const z = ZONES[currentZone];
    els.missionKicker.textContent = z.kicker;
    els.missionTitle.textContent = z.title;
    els.missionCopy.textContent = z.copy;
    els.stateName.textContent = z.name;
    els.stateHint.textContent = z.hint;
    els.launchDock.classList.toggle('is-visible', currentZone === 5);
    els.stage.dataset.zone = String(currentZone);
    $$('.mobile-zone-dots button').forEach(btn => {
      const isActive = Number(btn.dataset.zone) === currentZone;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-current', isActive ? 'step' : 'false');
    });
    if (els.zonePrev) els.zonePrev.disabled = currentZone === 0;
    if (els.zoneNext) els.zoneNext.disabled = currentZone === ZONES.length - 1;
    updateLayerStates();
    if (!options.immediate && !prefersReducedMotion) pulseZone();
  }

  function pulseZone() {
    els.missionPanel?.animate?.([{ opacity:.72, transform:'translateY(-46%)' },{ opacity:1, transform:'translateY(-50%)' }], { duration: 420, easing: 'ease-out' });
  }

  function updateLayerStates() {
    const orbitActive = currentZone === 0 || currentZone === 1;
    els.layer.classList.toggle('is-muted', !orbitActive);
    els.productLayer.classList.toggle('is-visible', currentZone === 2);
    els.proofLayer.classList.toggle('is-visible', currentZone === 3);
    els.reviewLayer.classList.toggle('is-visible', currentZone === 4);
    ORBIT_PARTICLES.forEach(obj => {
      if (!obj.el) return;
      const primaryVisible = orbitActive || (currentZone !== 5 && obj.depth === 'core');
      obj.el.classList.toggle('is-active-zone', orbitActive);
      obj.el.classList.toggle('is-inactive', !orbitActive);
      obj.el.classList.toggle('is-world-dim', !orbitActive);
      obj.el.style.pointerEvents = orbitActive ? 'auto' : 'none';
      obj.el.style.visibility = primaryVisible ? 'visible' : 'hidden';
    });
    applyZoomVisibility();
  }

  function setZoom(value, options = {}) {
    zoom = Math.max(.7, Math.min(2.2, value));
    document.documentElement.style.setProperty('--zoom', String(zoom));
    els.plane?.classList.toggle('zoomed', zoom > 1.08);
    els.plane?.classList.toggle('deep-zoom', zoom > 1.52);
    if (!options.silent) els.zoomRange.value = String(Math.round(zoom * 100));
    els.zoomValue.textContent = `${Math.round(zoom * 100)}%`;
    applyZoomVisibility();
    updateNodePositions(performance.now());
  }

  function applyZoomVisibility() {
    const orbitActive = currentZone === 0 || currentZone === 1;
    ORBIT_PARTICLES.forEach((obj, index) => {
      if (!obj.el) return;
      let visible = orbitActive;
      if (obj.depth === 'deep' && zoom < 1.14) visible = false;
      if (obj.depth === 'hidden' && zoom < 1.56) visible = false;
      // Arrival core keeps only the first quiet ring visible to avoid a crowded start.
      if (currentZone === 0 && index > 11 && zoom < 1.2) visible = false;
      obj.el.classList.toggle('is-hidden-by-zoom', !visible);
      if (!visible) {
        obj.el.style.opacity = '0';
        obj.el.style.visibility = 'hidden';
        obj.el.style.pointerEvents = 'none';
      } else {
        obj.el.style.visibility = 'visible';
        obj.el.style.pointerEvents = orbitActive ? 'auto' : 'none';
      }
    });
  }

  function showObject(obj, target) {
    stopAutoFlight();
    $$('.verse-node,.sv-core,.world-dot').forEach(node => node.classList.remove('is-selected','is-focused'));
    target?.classList.add(target === els.core ? 'is-focused' : 'is-selected');
    els.tooltipType.textContent = obj.category || 'Object';
    els.tooltipTitle.textContent = obj.label || obj.title || obj.name;
    updateTooltipMock(obj, target);
    els.tooltipDesc.textContent = obj.desc || obj.text || '';
    els.tooltipUse.textContent = obj.use || obj.company || '';
    if (obj.link) {
      els.tooltipLink.href = obj.link;
      els.tooltipLink.classList.add('is-visible');
      els.tooltipLink.textContent = obj.category === 'Contact' ? 'Open contact path' : 'Open path';
    } else {
      els.tooltipLink.classList.remove('is-visible');
    }
    els.tooltip.classList.add('is-open');
    els.tooltip.setAttribute('aria-hidden', 'false');
  }

  function updateTooltipMock(obj, target) {
    if (!els.tooltipMock) return;
    const mockType =
      target === els.core ? 'core' :
      target?.classList?.contains('proof-dot') ? 'proof' :
      target?.classList?.contains('review-dot') ? 'review' :
      obj.category === 'Tool' ? 'tool' :
      obj.category === 'Contact' ? 'contact' :
      'technology';
    els.tooltipMock.className = `tooltip-mock ${mockType}`;
  }

  function closeObject() {
    els.tooltip.classList.remove('is-open');
    els.tooltip.setAttribute('aria-hidden', 'true');
    $$('.verse-node,.sv-core,.world-dot').forEach(node => node.classList.remove('is-selected','is-focused'));
    document.body.classList.remove('cursor-lock');
  }

  function startGuide() {
    stopAutoFlight();
    guideIndex = 0;
    els.guideOverlay.classList.add('is-visible');
    els.guideOverlay.setAttribute('aria-hidden', 'false');
    showGuideStep();
  }

  function closeGuide() {
    els.guideOverlay.classList.remove('is-visible');
    els.guideOverlay.setAttribute('aria-hidden', 'true');
    $$('.guide-target').forEach(el => el.classList.remove('guide-target'));
  }

  function stepGuide(direction) {
    if (direction > 0 && guideIndex === GUIDE.length - 1) {
      closeGuide();
      return;
    }
    guideIndex = Math.max(0, Math.min(GUIDE.length - 1, guideIndex + direction));
    showGuideStep();
  }

  function showGuideStep() {
    const step = GUIDE[guideIndex];
    els.guideStep.textContent = `Step ${guideIndex + 1} of ${GUIDE.length}`;
    els.guideTitle.textContent = step.title;
    els.guideText.textContent = step.text;
    els.guideProgress.style.width = `${((guideIndex + 1) / GUIDE.length) * 100}%`;
    els.guideBack.disabled = guideIndex === 0;
    els.guideNext.textContent = guideIndex === GUIDE.length - 1 ? 'Finish' : 'Next';
    $$('.guide-target').forEach(el => el.classList.remove('guide-target'));
    const target = $(step.target);
    if (target) target.classList.add('guide-target');
  }

  function bindCursor() {
    if (isTouch || prefersReducedMotion) return;
    shipPos = { ...lastMouse };
    shipTarget = { ...lastMouse };
    positionShip(shipPos.x, shipPos.y);
    els.ship.classList.remove('is-hidden');
    els.ship.classList.add('is-idle');

    window.addEventListener('mouseenter', () => {
      els.ship.classList.remove('is-hidden');
    });
    window.addEventListener('mouseleave', () => {
      els.ship.classList.add('is-hidden');
      els.ship.classList.remove('is-moving', 'is-boosting', 'is-locked');
    });
    window.addEventListener('mousemove', (event) => {
      prevMouse = { ...lastMouse };
      lastMouse = { x: event.clientX, y: event.clientY };
      shipTarget = { ...lastMouse };
    }, { passive: true });
    window.addEventListener('dblclick', (event) => {
      triggerCursorLock(event.clientX, event.clientY);
    });
    document.addEventListener('visibilitychange', () => {
      pageHidden = document.hidden;
      if (pageHidden) els.ship.classList.add('is-hidden');
      else els.ship.classList.remove('is-hidden');
    });
  }

  function updateShip(time = performance.now()) {
    if (isTouch || prefersReducedMotion || !els.ship || pageHidden) return;
    const dt = Math.max(16, Math.min(48, time - lastShipFrame));
    lastShipFrame = time;

    const target = isLaunching
      ? { x: window.innerWidth * 0.5, y: window.innerHeight * 0.48 }
      : shipTarget;

    const ease = isLaunching ? 0.115 : 0.165;
    const dx = target.x - shipPos.x;
    const dy = target.y - shipPos.y;
    shipPos.x += dx * ease;
    shipPos.y += dy * ease;

    const vx = shipPos.x - prevMouse.x;
    const vy = shipPos.y - prevMouse.y;
    const frameVelocity = Math.hypot(dx, dy) * (dt / 16) * 0.08;
    shipVelocity = frameVelocity;

    if (Math.hypot(dx, dy) > 0.65) {
      const nextAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
      const angleDelta = ((((nextAngle - shipAngle) % 360) + 540) % 360) - 180;
      shipAngle += angleDelta * 0.18;
      els.ship.classList.remove('is-idle', 'is-hidden');
      els.ship.classList.add('is-moving');
      els.ship.classList.toggle('is-boosting', isLaunching || frameVelocity > 17);
      createTrail(shipPos.x, shipPos.y, frameVelocity);
      clearTimeout(moveIdleTimer);
      moveIdleTimer = setTimeout(() => {
        shipVelocity = 0;
        if (!isLaunching) {
          els.ship.classList.remove('is-moving', 'is-boosting');
          els.ship.classList.add('is-idle');
        }
      }, 140);
    }
    positionShip(shipPos.x, shipPos.y);
    prevMouse = { ...shipPos };
  }

  function positionShip(x, y) {
    els.ship.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%,-50%) rotate(${shipAngle}deg)`;
    const flameSize = Math.max(0, Math.min(1, shipVelocity / 22));
    els.ship.style.setProperty('--thrust', flameSize.toFixed(2));
  }

  let lastTrailTime = 0;
  function createTrail(x, y, velocity = shipVelocity) {
    if (pageHidden || velocity < 2.4) return;
    const now = performance.now();
    const interval = velocity > 18 ? 30 : velocity > 8 ? 46 : 68;
    if (now - lastTrailTime < interval) return;
    lastTrailTime = now;

    const activeDots = els.trail.querySelectorAll('.trail-dot').length;
    if (activeDots > 28) return;

    const dot = document.createElement('span');
    dot.className = `trail-dot ${velocity > 18 || isLaunching ? 'trail-boost' : velocity > 8 ? 'trail-hot' : 'trail-smoke'}`;
    const spread = velocity > 18 ? 5 : 3;
    dot.style.left = `${x - 3 + ((Math.random() - 0.5) * spread)}px`;
    dot.style.top = `${y - 3 + ((Math.random() - 0.5) * spread)}px`;
    els.trail.appendChild(dot);
    setTimeout(() => dot.remove(), velocity > 18 ? 760 : 620);
  }

  function triggerCursorLock(x, y) {
    els.ship.classList.add('is-locked');
    clearTimeout(lockTimer);
    lockTimer = setTimeout(() => {
      els.ship.classList.remove('is-locked');
    }, 420);

    const ring = document.createElement('span');
    ring.className = 'cursor-target-ring';
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    els.trail.appendChild(ring);
    setTimeout(() => ring.remove(), 700);

    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'trail-dot trail-boost';
      dot.style.left = `${x + ((Math.random() - 0.5) * 18)}px`;
      dot.style.top = `${y + ((Math.random() - 0.5) * 18)}px`;
      els.trail.appendChild(dot);
      setTimeout(() => dot.remove(), 720);
    }
  }

  function bindKeyboard() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { closeObject(); closeGuide(); stopAutoFlight(); }
      if (event.key.toLowerCase() === 'g') startGuide();
      if (event.key.toLowerCase() === 'e') { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); }
      if (event.key.toLowerCase() === 'a') toggleAutoFlight();
      if (event.key === ' ' && entered) { event.preventDefault(); togglePause(); }
      if (event.key === 'Home' || event.key.toLowerCase() === 'r') returnToCore();
      if (event.key === '+' || event.key === '=') setZoom(zoom + .15);
      if (event.key === '-' || event.key === '_') setZoom(zoom - .15);
      if (event.key === '?' || event.key.toLowerCase() === 'h') startGuide();
      if (event.key === 'ArrowRight') setZone(currentZone + 1);
      if (event.key === 'ArrowLeft') setZone(currentZone - 1);
    });
  }

  function bindTouch() {
    els.stage.addEventListener('touchstart', (event) => {
      if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
      }
      if (event.touches.length === 2) {
        pinchStartDistance = distance(event.touches[0], event.touches[1]);
        pinchStartZoom = zoom;
      }
    }, { passive: true });

    els.stage.addEventListener('touchmove', (event) => {
      if (event.touches.length === 2 && pinchStartDistance) {
        const next = distance(event.touches[0], event.touches[1]);
        setZoom(pinchStartZoom * (next / pinchStartDistance));
      }
    }, { passive: true });

    els.stage.addEventListener('touchend', (event) => {
      if (pinchStartDistance) { pinchStartDistance = null; return; }
      const touch = event.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy)) setZone(currentZone + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  function distance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function animate(time = 0) {
    updateShip(time);
    if (!paused && !pageHidden) updateNodePositions(time);
    requestAnimationFrame(animate);
  }

  function updateNodePositions(time) {
    const rect = els.stage.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const mobile = rect.width <= 780;
    const laptop = rect.height <= 760 && rect.width >= 781;
    const scaleRadius = mobile ? .45 : laptop ? .68 : .82;
    const timeScale = paused ? 0 : time / 1000;
    const orbitActive = currentZone === 0 || currentZone === 1;

    ORBIT_PARTICLES.forEach((obj, i) => {
      const node = obj.el;
      if (!node) return;
      if (!orbitActive) {
        node.style.opacity = '0.08';
        node.style.pointerEvents = 'none';
        return;
      }
      const ring = obj.radius * scaleRadius * (0.82 + zoom * .16);
      const speedBase = obj.depth === 'core' ? 0.022 : obj.depth === 'deep' ? 0.018 : 0.014;
      const angle = (obj.angle * Math.PI / 180) + (timeScale * speedBase) + obj.phase * .04;
      const wobble = prefersReducedMotion ? 0 : Math.sin(timeScale * 1.25 + i) * (mobile ? 1.5 : 4);
      let x = cx + Math.cos(angle) * ring;
      let y = cy + Math.sin(angle) * ring + wobble;

      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const minSafe = mobile ? 105 : laptop ? 148 : 168;
      if (dist < minSafe) {
        x = cx + (dx / dist) * minSafe;
        y = cy + (dy / dist) * minSafe;
      }

      const leftSafe = mobile ? 16 : 36;
      const rightSafe = mobile ? 16 : 96;
      x = Math.max(leftSafe, Math.min(rect.width - rightSafe, x));
      y = Math.max(mobile ? 94 : 92, Math.min(rect.height - (mobile ? 160 : 58), y));

      const depthWave = Math.sin(angle);
      const depthScale = 0.78 + ((depthWave + 1) * 0.15);
      const depthOpacity = currentZone === 0
        ? 0.28 + ((depthWave + 1) * 0.18)
        : 0.54 + ((depthWave + 1) * 0.23);
      const blur = depthWave < -0.45 && !mobile ? 0.35 : 0;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.setProperty('--depth-scale', depthScale.toFixed(3));
      node.style.setProperty('--depth-blur', `${blur}px`);
      node.style.zIndex = String(22 + Math.round((depthWave + 1) * 12));
      if (!node.classList.contains('is-hidden-by-zoom')) {
        node.style.opacity = String(Math.min(1, depthOpacity));
      }
    });
  }

  function initStars() {
    const canvas = $('#starCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resetStar(star, randomize = true) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const angle = Math.random() * Math.PI * 2;
      const dist = randomize ? Math.random() * Math.max(window.innerWidth, window.innerHeight) * 0.7 : 8;
      star.x = centerX + Math.cos(angle) * dist;
      star.y = centerY + Math.sin(angle) * dist;
      star.vx = Math.cos(angle);
      star.vy = Math.sin(angle);
      star.r = Math.random() * 1.15 + .18;
      star.a = Math.random() * .34 + .06;
      star.s = Math.random() * .22 + .035;
    }

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(90, Math.min(170, Math.floor(window.innerWidth * window.innerHeight / 12000)));
      stars = Array.from({ length: count }, () => {
        const star = {};
        resetStar(star, true);
        return star;
      });
    }

    function draw(time = 0) {
      if (pageHidden) { requestAnimationFrame(draw); return; }
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const launchT = isLaunching ? Math.min(1, (time - launchStart) / 2400) : 0;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#030508';
      ctx.fillRect(0, 0, w, h);

      stars.forEach(star => {
        if (!paused && !prefersReducedMotion) {
          if (launchT > 0) {
            const dx = star.x - cx;
            const dy = star.y - cy;
            const len = Math.hypot(dx, dy) || 1;
            const boost = 1.4 + launchT * 13;
            star.x += (dx / len) * boost;
            star.y += (dy / len) * boost;
            if (star.x < -80 || star.x > w + 80 || star.y < -80 || star.y > h + 80) resetStar(star, false);
          } else {
            star.y += star.s;
            if (star.y > h + 4) star.y = -4;
          }
        }

        const alpha = Math.min(.76, star.a + launchT * .42);
        if (launchT > .08) {
          const dx = star.x - cx;
          const dy = star.y - cy;
          const len = Math.hypot(dx, dy) || 1;
          const tail = 8 + launchT * 34;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - (dx / len) * tail, star.y - (dy / len) * tail);
          ctx.strokeStyle = `rgba(165,243,252,${alpha * .46})`;
          ctx.lineWidth = Math.max(.4, star.r);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(165,243,252,${alpha})`;
          ctx.fill();
        }
      });
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    draw();
  }

  function initials(name) {
    return name.split(/\s+/).filter(Boolean).map(part => part[0]).join('').slice(0,2).toUpperCase();
  }

  function escapeAttr(value) {
    return String(value).replace(/[&<>"]/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  }
})();
