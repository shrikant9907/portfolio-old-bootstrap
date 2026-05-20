(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isTouch = !hasFinePointer && (navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

  const GUIDE_SESSION_KEY = 'shrimoVerseGuideSeenThisSession';

  const ZONES = [
    { name: 'Arrival Core', hint: 'Start from the center.', title: 'Shrimo Verse Core', kicker: 'ARRIVAL CORE', copy: 'The SV core stays fixed while every layer opens around it.' },
    { name: 'Technology Orbit', hint: 'Skills and tools around the core.', title: 'Technology Orbit', kicker: 'TECHNOLOGY ORBIT', copy: 'Inspect skills, tools, and deeper capabilities around the core.' },
    { name: 'Product Gallery', hint: 'Products are shown separately.', title: 'Product Gallery', kicker: 'PRODUCT GALLERY', copy: 'Products appear as separate mission signals, one focus at a time.' },
    { name: 'Proof Ring', hint: 'Delivery proof appears as data dots.', title: 'Proof Ring', kicker: 'PROOF RING', copy: 'Credibility signals form around the universe before client trust.' },
    { name: 'Client Signals', hint: 'Reviews are readable, not crowded.', title: 'Client Signals', kicker: 'CLIENT SIGNAL STREAM', copy: 'Client trust appears as readable transmissions, not a testimonial grid.' },
    { name: 'Launch Dock', hint: 'Contact paths are the final dock.', title: 'Launch Dock', kicker: 'LAUNCH DOCK', copy: 'Start the project conversation from the final dock.' }
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
    {
      id:'shrimo',
      code:'SV-01',
      title:'Shrimo Innovations',
      desc:'Software and web development company focused on websites, apps, and digital products.',
      challenge:'Businesses need a trusted technical partner, not only a one-time website vendor.',
      solution:'A service and product studio direction for websites, apps, digital systems, and conversion-focused web presence.',
      stack:'HTML, CSS, JavaScript, PHP, WordPress, React, Next.js, APIs, SEO-ready systems',
      result:'A clear parent brand for product work, client services, and future digital platforms.',
      use:'Main business identity behind Shrimo Verse.',
      link:'https://shrimo.com/'
    },
    {
      id:'digiting',
      code:'SV-02',
      title:'Digiting Card',
      desc:'Digital visiting card platform for professionals and businesses.',
      challenge:'Professionals need a simple way to share identity, links, business details, and contact paths.',
      solution:'A digital profile/card platform focused on fast sharing, templates, pricing, and business identity.',
      stack:'Next.js, Tailwind CSS, profile data, templates, CTA flows, SEO content',
      result:'A reusable digital identity product direction for local businesses and professionals.',
      use:'Built around digital identity, contact sharing, and online presence.',
      link:'https://digitingcard.com/'
    },
    {
      id:'photocopywala',
      code:'SV-03',
      title:'Photocopywala',
      desc:'Online tools and document utilities for common print and digital tasks.',
      challenge:'Users and shops need fast browser-based tools for photos, documents, printing, and utility workflows.',
      solution:'A practical tools platform with focused utilities like passport photo maker, image tools, and document workflows.',
      stack:'Web tools, image processing UX, SEO pages, responsive utility interfaces',
      result:'A useful public platform that can attract search traffic and help real users complete small tasks quickly.',
      use:'Practical platform for people who need quick document services and tools.',
      link:'https://photocopywala.in/'
    },
    {
      id:'directory',
      code:'SV-04',
      title:'Business Directory Platform',
      desc:'Business listing and discovery platform concept for organized local search.',
      challenge:'Local businesses need better discovery and users need cleaner searchable business information.',
      solution:'A structured listing platform with profiles, categories, local SEO, review flow, and approval workflow.',
      stack:'Directory architecture, user dashboard, listings, moderation, local SEO, schema',
      result:'A scalable direction for business visibility and organized local discovery.',
      use:'A product direction for local discovery and business visibility.',
      link:''
    }
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
    guideSkip: $('#guideSkip'),
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
  let activeTechnologyIndex = 0;
  let activeReview = 0;
  let activeProof = 0;
  let proofAnimated = false;
  let moveIdleTimer = null;
  let shipVelocity = 0;
  let shipPos = { ...lastMouse };
  let shipTarget = { ...lastMouse };
  let lastShipFrame = performance.now();
  let launchStart = 0;
  let isLaunching = false;
  let pageHidden = false;
  let lockTimer = null;
  let rocketCentering = false;
  let rocketOrbitDemo = false;
  let rocketOrbitStart = 0;
  let pointerMouse = { ...lastMouse };
  let lastTapTime = 0;
  let hoverTooltipTimer = null;

  const GUIDE = isTouch ? [
    { title:'Inspect particles', text:'Tap a glowing skill node to open its story.', target:'.verse-node[data-id="html"]' },
    { title:'Project dots', text:'Projects open from clean dots, not crowded orbit labels.', target:'#productGalleryLayer' },
    { title:'Review signals', text:'Client reviews appear as readable signal cards.', target:'#clientSignalLayer' },
    { title:'Zoom in Explore', text:'Use Orbit Zoom or pinch in Free Explore to reveal deeper tools.', target:'.zoom-dock' },
    { title:'Launch Project', text:'Use Launch when you are ready to start a project conversation.', target:'.mobile-control-dock a' }
  ] : [
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
    bindPageVisibility();
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
        updateTechnologyFocus(obj, node, 'hover');
        hoverTooltipTimer = setTimeout(() => {
          showObject(obj, node);
        }, 600);
      });
      node.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-lock');
        node.classList.remove('is-hovered');
        clearTimeout(hoverTooltipTimer);
      });
      node.addEventListener('focus', () => {
        node.classList.add('is-hovered');
        updateTechnologyFocus(obj, node, 'focus');
        hoverTooltipTimer = setTimeout(() => {
          showObject(obj, node);
        }, 600);
      });
      node.addEventListener('blur', () => {
        node.classList.remove('is-hovered');
        clearTimeout(hoverTooltipTimer);
      });
      node.addEventListener('click', (event) => {
        event.stopPropagation();
        clearTimeout(hoverTooltipTimer);
        if (autoActive) stopAutoFlight();
        activeTechnologyIndex = ORBIT_PARTICLES.indexOf(obj);
        updateTechnologyFocus(obj, node, 'selected');
        showObject(obj, node);
      });
      els.layer.appendChild(node);
      obj.el = node;
    });

    const technologyFocus = document.createElement('aside');
    technologyFocus.className = 'technology-focus';
    technologyFocus.id = 'technologyFocus';
    technologyFocus.setAttribute('aria-live', 'polite');
    technologyFocus.innerHTML = '<span>TECH SCAN</span><h3>Technology Orbit</h3><p>Select a moving particle to inspect its use case.</p>';
    els.layer.appendChild(technologyFocus);
    updateTechnologyFocus(ORBIT_PARTICLES[activeTechnologyIndex], null, 'ready');

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
      dot.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-lock');
        if (currentZone === 2) {
          activeProduct = Number(dot.dataset.product);
          updateProductLayer();
        }
      });
      dot.addEventListener('focus', () => {
        if (currentZone === 2) {
          activeProduct = Number(dot.dataset.product);
          updateProductLayer();
        }
      });
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });
    updateProductLayer();
  }

  
  function updateProductDetailOverlay() {
    if (!els.productDetailBody) return;
    const item = PRODUCTS[activeProduct];
    if (!item) return;
    const initials = item.title.split(/\s+/).map(w => w[0]).join('').slice(0,3);
    els.productDetailBody.innerHTML = `
      <div class="product-detail-hero">
        <span class="product-detail-code">${item.code || `SV-0${activeProduct + 1}`}</span>
        <strong id="productDetailTitle">${item.title}</strong>
        <i>${initials}</i>
        <p>${item.desc}</p>
      </div>
      <div class="product-detail-sections">
        <section><small>Challenge</small><p>${item.challenge || item.desc}</p></section>
        <section><small>Solution</small><p>${item.solution || item.use}</p></section>
        <section><small>Stack</small><p>${item.stack || 'Web product system, responsive UX, practical frontend/backend work'}</p></section>
        <section><small>Result</small><p>${item.result || item.use}</p></section>
      </div>
      <div class="product-detail-actions">
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="product-btn primary-path">Open Project Path</a>` : '<button type="button" class="disabled-path" disabled>Concept Path</button>'}
        <a href="https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20saw%20your%20product%20${encodeURIComponent(item.title)}%20and%20want%20to%20start%20a%20similar%20mission." target="_blank" rel="noopener" class="product-btn secondary-path">Start Similar Mission</a>
      </div>`;
  }

  function openProductDetail() {
    stopAutoFlight();
    updateProductDetailOverlay();
    document.body.classList.add('product-detail-open');
    els.productDetailOverlay?.classList.add('is-open');
    els.productDetailOverlay?.setAttribute('aria-hidden', 'false');
    els.productDetailPrev?.focus?.({ preventScroll: true });
  }

  function closeProductDetail() {
    document.body.classList.remove('product-detail-open');
    els.productDetailOverlay?.classList.remove('is-open');
    els.productDetailOverlay?.setAttribute('aria-hidden', 'true');
  }

  function stepProductDetail(direction) {
    activeProduct = (activeProduct + direction + PRODUCTS.length) % PRODUCTS.length;
    updateProductLayer();
    updateProductDetailOverlay();
  }


  function handleProductDetailOutsideClick(event) {
    if (!els.productDetailOverlay?.classList.contains('is-open')) return;

    const sheet = event.target.closest('.product-detail-sheet');
    const openTrigger = event.target.closest('[data-open-product-detail]');
    const closeTrigger = event.target.closest('[data-close-product-detail]');

    if (closeTrigger || (!sheet && !openTrigger)) {
      event.preventDefault();
      closeProductDetail();
    }
  }

function updateProductLayer() {
    const item = PRODUCTS[activeProduct];
    const card = $('#productCard');
    if (!card) return;

    const initials = item.title.split(/\s+/).map(w => w[0]).join('').slice(0,3);
    const prevIndex = (activeProduct - 1 + PRODUCTS.length) % PRODUCTS.length;
    const nextIndex = (activeProduct + 1) % PRODUCTS.length;

    card.innerHTML = `
      <div class="product-card-head">
        <p>Mission ${activeProduct + 1}/${PRODUCTS.length}</p>
        <span class="product-code">${item.code || `SV-0${activeProduct + 1}`}</span>
      </div>

      <div class="product-compact-layout">
        <div class="product-copy">
          <h3>${item.title}</h3>
          <em>${item.desc}</em>
        </div>
        <span class="gallery-preview" aria-hidden="true">${initials}</span>
      </div>

      <dl class="product-mission-grid" aria-label="${item.title} mission details">
        <div><dt>Challenge</dt><dd>${item.challenge || item.desc}</dd></div>
        <div><dt>Solution</dt><dd>${item.solution || item.use}</dd></div>
        <div><dt>Stack</dt><dd>${item.stack || 'Web product system, responsive UX, practical frontend/backend work'}</dd></div>
        <div><dt>Result</dt><dd>${item.result || item.use}</dd></div>
      </dl>

      <div class="product-scan-nav" aria-label="Product mission navigation">
        <button type="button" class="product-scan-arrow" data-product-jump="${prevIndex}" aria-label="Previous product mission">‹</button>
        <span>${item.title}</span>
        <button type="button" class="product-scan-arrow" data-product-jump="${nextIndex}" aria-label="Next product mission">›</button>
      </div>

      <button type="button" class="product-details-trigger" data-open-product-detail>View Mission Details</button>

      <div class="product-actions">
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="product-btn primary-path">Open Path</a>` : '<button type="button" class="disabled-path" disabled>Concept</button>'}
        <a href="https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20saw%20your%20product%20${encodeURIComponent(item.title)}%20and%20want%20to%20start%20a%20similar%20mission." target="_blank" rel="noopener" class="product-btn secondary-path">Start Similar</a>
      </div>`;

    $$('.product-dot', els.productLayer).forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeProduct);
      dot.setAttribute('aria-current', index === activeProduct ? 'true' : 'false');
    });

    $$('.product-scan-arrow', card).forEach((btn) => {
      btn.addEventListener('click', () => {
        activeProduct = Number(btn.dataset.productJump);
        updateProductLayer();
        if (els.productDetailOverlay?.classList.contains('is-open')) updateProductDetailOverlay();
      });
    });

    $('[data-open-product-detail]', card)?.addEventListener('click', () => openProductDetail());

    updateProductDetailOverlay();
    positionDots('.product-dot', activeProduct, window.innerWidth <= 780 ? 148 : 214);
  }

  function renderProofLayer() {
    els.proofLayer.innerHTML = `
      <div class="proof-focus" id="proofFocus" aria-live="polite"></div>
      <div class="proof-nav" aria-label="Proof navigation">
        <button type="button" class="proof-arrow" id="proofPrev" aria-label="Previous proof signal">‹</button>
        <button type="button" class="proof-arrow" id="proofNext" aria-label="Next proof signal">›</button>
      </div>
      <div class="proof-dots" aria-label="Proof signals">
        ${PROOFS.map((item, index) => `<button type="button" class="world-dot proof-dot" data-proof="${index}" aria-label="Inspect ${escapeAttr(item.label)}"><strong>${item.title}</strong><span>${escapeAttr(item.label)}</span></button>`).join('')}
      </div>`;

    $$('.proof-dot', els.proofLayer).forEach((dot) => {
      dot.addEventListener('click', () => {
        activeProof = Number(dot.dataset.proof);
        updateProofLayer();
        setZone(3);
      });
      dot.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-lock');
        if (currentZone === 3) {
          activeProof = Number(dot.dataset.proof);
          updateProofLayer();
        }
      });
      dot.addEventListener('focus', () => {
        if (currentZone === 3) {
          activeProof = Number(dot.dataset.proof);
          updateProofLayer();
        }
      });
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });

    $('#proofPrev')?.addEventListener('click', () => {
      activeProof = (activeProof - 1 + PROOFS.length) % PROOFS.length;
      updateProofLayer();
    });
    $('#proofNext')?.addEventListener('click', () => {
      activeProof = (activeProof + 1) % PROOFS.length;
      updateProofLayer();
    });

    updateProofLayer();
  }

  function updateProofLayer() {
    const item = PROOFS[activeProof];
    const focus = $('#proofFocus');
    if (!focus) return;

    focus.innerHTML = `
      <div class="proof-signal-head">
        <p>Proof signal ${activeProof + 1}/${PROOFS.length}</p>
        <span>Verified Capability</span>
      </div>
      <h3>${item.title}</h3>
      <strong>${item.label}</strong>
      <em>${item.desc}</em>
      <button type="button" class="proof-next-inline" data-proof-next>Next Proof</button>`;

    $('[data-proof-next]', focus)?.addEventListener('click', () => {
      activeProof = (activeProof + 1) % PROOFS.length;
      updateProofLayer();
    });

    $$('.proof-dot', els.proofLayer).forEach((dot, index) => {
      const isActive = index === activeProof;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    positionDots('.proof-dot', activeProof, window.innerWidth <= 780 ? 126 : 198);
  }

  function renderReviewLayer() {
    els.reviewLayer.innerHTML = `
      <div class="review-card" id="reviewCard" aria-live="polite"></div>
      <div class="review-nav" aria-label="Client signal navigation">
        <button type="button" class="review-arrow" id="reviewPrev" aria-label="Previous client signal">‹</button>
        <button type="button" class="review-arrow" id="reviewNext" aria-label="Next client signal">›</button>
      </div>
      <div class="review-dots" aria-label="Client review signal dots">
        ${REVIEWS.map((item, index) => `<button type="button" class="world-dot review-dot" data-review="${index}" aria-label="Read review by ${escapeAttr(item.name)}"><span>${initials(item.name)}</span></button>`).join('')}
      </div>`;

    $$('.review-dot', els.reviewLayer).forEach((dot) => {
      dot.addEventListener('click', () => {
        activeReview = Number(dot.dataset.review);
        updateReviewLayer();
        setZone(4);
      });
      dot.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-lock');
        if (currentZone === 4) {
          activeReview = Number(dot.dataset.review);
          updateReviewLayer();
        }
      });
      dot.addEventListener('focus', () => {
        if (currentZone === 4) {
          activeReview = Number(dot.dataset.review);
          updateReviewLayer();
        }
      });
      dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
    });

    $('#reviewPrev')?.addEventListener('click', () => {
      activeReview = (activeReview - 1 + REVIEWS.length) % REVIEWS.length;
      updateReviewLayer();
    });
    $('#reviewNext')?.addEventListener('click', () => {
      activeReview = (activeReview + 1) % REVIEWS.length;
      updateReviewLayer();
    });

    updateReviewLayer();
  }

  function updateReviewLayer() {
    const item = REVIEWS[activeReview];
    const card = $('#reviewCard');
    if (!card) return;

    card.innerHTML = `
      <p>Client signal ${activeReview + 1}/${REVIEWS.length}</p>
      <blockquote>${item.text}</blockquote>
      <div class="review-person">
        <strong>${item.name}</strong>
        <em>${item.company}</em>
      </div>
      <button type="button" class="review-next-inline" data-review-next>Next Signal</button>`;

    $('[data-review-next]', card)?.addEventListener('click', () => {
      activeReview = (activeReview + 1) % REVIEWS.length;
      updateReviewLayer();
    });

    $$('.review-dot', els.reviewLayer).forEach((dot, index) => {
      const isActive = index === activeReview;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });

    positionDots('.review-dot', activeReview, window.innerWidth <= 780 ? 118 : 180);
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
      els.enterVerse.textContent = 'STARTING';
      els.entryGate.classList.add('is-launching');
      document.body.classList.add('is-entering-verse');
      const statusSteps = [
        [250, 'ALIGNING ROCKET PATH'],
        [800, 'OPENING ORBIT FIELD'],
        [1400, 'LOCKING SV CORE'],
        [1800, 'ENTERING DIGITAL UNIVERSE']
      ];
      statusSteps.forEach(([delay, label]) => {
        window.setTimeout(() => {
          const status = $('#entryStatus');
          if (status && isLaunching) status.textContent = label;
        }, prefersReducedMotion ? 40 : delay);
      });

      // 250ms: Rocket gently aligns toward center
      window.setTimeout(() => {
        if (!prefersReducedMotion) {
          rocketCentering = true;
        }
      }, prefersReducedMotion ? 40 : 250);

      // 1800ms: Technology particles appear from depth (revealing background)
      window.setTimeout(() => {
        document.body.classList.add('verse-revealing');
      }, prefersReducedMotion ? 100 : 1800);

      // 2200ms: Header, controls, zoom, and bottom bullets appear
      window.setTimeout(() => {
        document.body.classList.add('verse-entered');
      }, prefersReducedMotion ? 140 : 2200);

      // 2400ms: app becomes interactive, then rocket performs one controlled lap and returns to cursor
      window.setTimeout(() => {
        els.entryGate.classList.add('is-hidden');
        document.body.classList.remove('is-entering-verse', 'verse-revealing');
        isLaunching = false;
        rocketCentering = false;
        if (!isTouch && !prefersReducedMotion) {
          rocketOrbitDemo = true;
          rocketOrbitStart = performance.now();
          document.body.classList.add('ship-orbit-demo');
        }
        setZone(0);
        window.setTimeout(() => startInitialGuide(), prefersReducedMotion ? 180 : 260);
      }, prefersReducedMotion ? 180 : 2400);
    });
  }

  function bindControls() {
    els.guidedMode.addEventListener('click', () => { stopAutoFlight(); startGuide({ manual: true }); setControlActive(els.guidedMode); });
    els.exploreMode.addEventListener('click', () => { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); });
    els.autoFlight.addEventListener('click', () => toggleAutoFlight());
    els.pauseOrbit.addEventListener('click', () => togglePause());
    els.returnCore.addEventListener('click', () => returnToCore());
    els.replayGuide.addEventListener('click', () => startGuide({ manual: true }));
    els.brandReset.addEventListener('click', () => returnToCore());
    els.zoomIn.addEventListener('click', () => { stopAutoFlight(); setZoom(zoom + .15); });
    els.zoomOut.addEventListener('click', () => { stopAutoFlight(); setZoom(zoom - .15); });
    els.zoomRange.addEventListener('input', () => { stopAutoFlight(); setZoom(Number(els.zoomRange.value) / 100); });
    els.tooltipClose.addEventListener('click', closeObject);
    els.stage.addEventListener('click', (event) => {
      if (!event.target.closest('.verse-node') && !event.target.closest('.world-dot') && !event.target.closest('.object-tooltip') && !event.target.closest('.sv-core')) closeObject();
    });
    els.productDetailPrev?.addEventListener('click', () => stepProductDetail(-1));
    els.productDetailNext?.addEventListener('click', () => stepProductDetail(1));
    $$('[data-close-product-detail]').forEach((btn) => btn.addEventListener('click', closeProductDetail));
    els.productDetailOverlay?.addEventListener('click', handleProductDetailOutsideClick);
    document.addEventListener('click', (event) => {
      if (!els.productDetailOverlay?.classList.contains('is-open')) return;
      if (els.productDetailOverlay.contains(event.target)) return;
      if (event.target.closest('[data-open-product-detail]')) return;
      closeProductDetail();
    });

    els.stage.addEventListener('dblclick', (event) => {
      if (!entered || event.target.closest('button,a,.object-tooltip,.guide-card')) return;
      stopAutoFlight();
      toggleStageZoom();
    });
    els.guideSkip?.addEventListener('click', () => { document.body.classList.remove('first-guide-visible'); closeGuide();
        closeProductDetail(); });
    els.guideBack.addEventListener('click', () => stepGuide(-1));
    els.guideNext.addEventListener('click', () => stepGuide(1));
    $$('[data-action="auto"]').forEach(btn => btn.addEventListener('click', startAutoFlight));
    $$('[data-action="guide"]').forEach(btn => btn.addEventListener('click', () => startGuide({ manual: true })));
    $$('[data-mobile]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.mobile;
        if (action === 'guide') startGuide({ manual: true });
        if (action === 'explore') { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); }
        if (action === 'auto') startAutoFlight();
        if (action === 'core') returnToCore();
      });
    });
    $$('[data-zone]', els.mobileDots).forEach(btn => btn.addEventListener('click', () => {
      stopAutoFlight();
      setZone(Number(btn.dataset.zone));
    }));
    els.zonePrev?.addEventListener('click', () => {
      stopAutoFlight();
      setZone(currentZone - 1);
    });
    els.zoneNext?.addEventListener('click', () => {
      stopAutoFlight();
      setZone(currentZone + 1);
    });
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
    let index = 0;
    const lastZone = ZONES.length - 1;
    activeProduct = 0;
    activeProof = 0;
    activeReview = 0;
    const run = () => {
      if (!autoActive) return;
      const zone = Math.max(0, Math.min(lastZone, index));
      setZone(zone);
      if (zone === 2) updateProductLayer();
      if (zone === 3) updateProofLayer();
      if (zone === 4) updateReviewLayer();
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

  function animateProofNumbers() {
    if (proofAnimated) return;
    proofAnimated = true;
    const strongs = $$('.proof-dot strong');
    const targets = [
      { element: strongs[0], max: 12, suffix: '+' },
      { element: strongs[1], max: 300, suffix: '+' },
      { element: strongs[2], max: 100, suffix: '+' }
    ];
    targets.forEach(({ element, max, suffix }) => {
      if (!element) return;
      let current = 0;
      const duration = 1000;
      const stepTime = Math.max(15, Math.floor(duration / max));
      const timer = setInterval(() => {
        current += Math.ceil(max / 25);
        if (current >= max) {
          current = max;
          clearInterval(timer);
        }
        element.textContent = `${current}${suffix}`;
      }, stepTime);
    });
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
    document.body.dataset.scene = z.name.toLowerCase().replace(/\s+/g, '-');
    if (currentZone !== 2) closeProductDetail();
    $$('.mobile-zone-dots button').forEach(btn => {
      const isActive = Number(btn.dataset.zone) === currentZone;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-current', isActive ? 'step' : 'false');
    });
    if (els.zonePrev) els.zonePrev.disabled = currentZone === 0;
    if (els.zoneNext) els.zoneNext.disabled = currentZone === ZONES.length - 1;
    
    if (currentZone === 1) updateTechnologyFocus(ORBIT_PARTICLES[activeTechnologyIndex] || ORBIT_PARTICLES[0], ORBIT_PARTICLES[activeTechnologyIndex]?.el || null, 'zone');
    if (currentZone === 2) updateProductLayer();
    if (currentZone === 3) {
      setTimeout(() => animateProofNumbers(), 320);
      updateProofLayer();
    }
    if (currentZone === 4) updateReviewLayer();

    updateLayerStates();
    if (!options.immediate && !prefersReducedMotion) pulseZone();
  }

  function pulseZone() {
    els.missionPanel?.animate?.([{ opacity:.72, transform:'translateY(-46%)' },{ opacity:1, transform:'translateY(-50%)' }], { duration: 420, easing: 'ease-out' });
  }

  function updateLayerStates() {
    const orbitActive = currentZone === 0 || currentZone === 1;
    const technologyMode = currentZone === 1;
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

  function toggleStageZoom() {
    const next = zoom < 1.18 ? 1.48 : 1;
    setZoom(next);
    document.body.classList.add('zoom-feedback');
    window.setTimeout(() => document.body.classList.remove('zoom-feedback'), 360);
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
    const technologyMode = currentZone === 1;
    const mobile = window.innerWidth <= 780;
    ORBIT_PARTICLES.forEach((obj, index) => {
      if (!obj.el) return;
      let visible = orbitActive;
      if (mobile && obj.depth !== 'core') {
        visible = false;
      }
      if (!mobile && currentZone === 1 && obj.depth === 'deep') {
        visible = zoom >= .96;
      } else if (obj.depth === 'deep' && zoom < 1.14) {
        visible = false;
      }
      if (!mobile && currentZone === 1 && obj.depth === 'hidden') {
        visible = zoom >= 1.42;
      } else if (obj.depth === 'hidden' && zoom < 1.56) {
        visible = false;
      }
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

  function updateTechnologyFocus(obj, target = null, mode = 'ready') {
    const focus = $('#technologyFocus');
    if (!focus || !obj) return;
    const label = obj.label || 'Technology Orbit';
    const category = obj.category || 'Technology';
    const desc = obj.desc || 'Inspect this particle to understand the capability.';
    const use = obj.use || 'This supports the Shrimo Verse product journey.';
    focus.dataset.mode = mode;
    focus.innerHTML = `
      <span>${category.toUpperCase()} SCAN</span>
      <h3>${label}</h3>
      <p>${desc}</p>
      <em>${use}</em>
    `;
    $$('.verse-node').forEach(node => node.classList.remove('is-focused-tech'));
    target?.classList.add('is-focused-tech');
  }

  function showObject(obj, target) {
    stopAutoFlight();
    $$('.verse-node,.sv-core,.world-dot').forEach(node => node.classList.remove('is-selected','is-focused'));
    target?.classList.add(target === els.core ? 'is-focused' : 'is-selected');
    els.tooltipType.textContent = obj.category || 'Object';
    els.tooltipTitle.textContent = obj.label || obj.title || obj.name;
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

  function closeObject() {
    els.tooltip.classList.remove('is-open');
    els.tooltip.setAttribute('aria-hidden', 'true');
    $$('.verse-node,.sv-core,.world-dot').forEach(node => node.classList.remove('is-selected','is-focused'));
    document.body.classList.remove('cursor-lock');
  }

  function startInitialGuide() {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(GUIDE_SESSION_KEY) === 'true';
    } catch (error) {
      seen = false;
    }
    if (seen) return;
    document.body.classList.add('first-guide-visible');
    startGuide({ initial: true });
  }

  function startGuide(options = {}) {
    stopAutoFlight();
    guideIndex = 0;
    els.guideOverlay.classList.add('is-visible');
    els.guideOverlay.setAttribute('aria-hidden', 'false');
    showGuideStep();
  }

  function closeGuide() {
    document.body.classList.remove('first-guide-visible');
    els.guideOverlay.classList.remove('is-visible');
    els.guideOverlay.setAttribute('aria-hidden', 'true');
    $$('.guide-target').forEach(el => el.classList.remove('guide-target'));
  }

  function stepGuide(direction) {
    if (direction > 0 && guideIndex === GUIDE.length - 1) {
      try {
        window.sessionStorage.setItem(GUIDE_SESSION_KEY, 'true');
      } catch (error) {}
      document.body.classList.remove('first-guide-visible');
      closeGuide();
      return;
    }
    guideIndex = Math.max(0, Math.min(GUIDE.length - 1, guideIndex + direction));
    showGuideStep();
  }

  function showGuideStep() {
    const step = GUIDE[guideIndex];
    els.guideStep.textContent = 'MISSION BRIEFING';
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
    shipTarget = { x: -100, y: -100 };
    shipPos = { x: -100, y: -100 };
    prevMouse = { x: -100, y: -100 };
    positionShip(shipPos.x, shipPos.y);
    els.ship.classList.remove('is-hidden');
    els.ship.classList.add('is-idle');

    window.addEventListener('mouseenter', () => {
      els.ship.classList.remove('is-hidden');
    });
    window.addEventListener('mouseleave', () => {
      els.ship.classList.add('is-hidden');
    });
    window.addEventListener('pointermove', (event) => {
      pointerMouse.x = event.clientX;
      pointerMouse.y = event.clientY;
      if (!rocketCentering && !rocketOrbitDemo) {
        shipTarget.x = event.clientX;
        shipTarget.y = event.clientY;
      }
      if (entered && hasFinePointer) {
        const mx = (event.clientX - window.innerWidth / 2) * 0.018;
        const my = (event.clientY - window.innerHeight / 2) * 0.018;
        document.body.style.setProperty('--mx', `${mx.toFixed(2)}px`);
        document.body.style.setProperty('--my', `${my.toFixed(2)}px`);
      }
    }, { passive: true });
    window.addEventListener('pointerdown', () => {
      createTrail(shipPos.x, shipPos.y, true);
    });
    document.addEventListener('visibilitychange', () => {
      if (pageHidden) els.ship.classList.add('is-hidden');
      else els.ship.classList.remove('is-hidden');
    });
  }

  function bindPageVisibility() {
    document.addEventListener('visibilitychange', () => {
      pageHidden = document.hidden;
      if (pageHidden) {
        stopAutoFlight();
        els.ship?.classList.add('is-hidden');
      } else {
        lastShipFrame = performance.now();
        if (!isTouch && !prefersReducedMotion) els.ship?.classList.remove('is-hidden');
      }
    });
  }

  function updateShip(time = performance.now()) {
    if (isTouch || prefersReducedMotion || !els.ship || pageHidden) return;

    let target = shipTarget;
    let easing = 0.2;
    let forceTrail = false;

    if (rocketOrbitDemo) {
      const elapsed = time - rocketOrbitStart;
      const duration = 1750;
      const t = Math.min(1, elapsed / duration);
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.18;
      const angle = (-Math.PI / 2) + t * Math.PI * 2.15;
      target = {
        x: window.innerWidth / 2 + Math.cos(angle) * radius,
        y: window.innerHeight / 2 + Math.sin(angle) * radius * 0.58
      };
      easing = 0.16;
      forceTrail = true;
      if (t >= 1) {
        rocketOrbitDemo = false;
        document.body.classList.remove('ship-orbit-demo');
        shipTarget = { ...pointerMouse };
      }
    } else if (rocketCentering) {
      target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      easing = 0.085;
      forceTrail = true;
    }

    shipPos.x += (target.x - shipPos.x) * easing;
    shipPos.y += (target.y - shipPos.y) * easing;

    shipAngle = Math.atan2(shipPos.y - prevMouse.y, shipPos.x - prevMouse.x) * 180 / Math.PI + 90;
    const distance = Math.hypot(shipPos.x - prevMouse.x, shipPos.y - prevMouse.y);

    const trailDelay = forceTrail ? 12 : 28;
    if (distance > 3 && time - lastTrailTime > trailDelay) {
      createTrail(shipPos.x, shipPos.y, forceTrail && distance > 8);
    }

    positionShip(shipPos.x, shipPos.y);
    prevMouse = { ...shipPos };
    if (distance > 3) lastTrailTime = time;
  }

  function positionShip(x, y) {
    els.ship.style.transform = `translate3d(${x - 14}px, ${y - 18}px, 0) rotate(${shipAngle}deg)`;
  }

  let lastTrailTime = 0;
  function createTrail(x, y, burst) {
    if (pageHidden) return;
    const activeDots = els.trail.querySelectorAll('.trail-dot').length;
    if (activeDots > 34) return;
    const dot = document.createElement('span');
    dot.className = burst ? 'trail-dot is-burst' : 'trail-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = burst ? '18px' : '7px';
    dot.style.height = burst ? '18px' : '7px';
    if (burst) {
      dot.style.width = '18px';
      dot.style.height = '18px';
    }
    els.trail.appendChild(dot);
    setTimeout(() => dot.remove(), 650);
  }

  function bindKeyboard() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { closeObject(); closeGuide(); stopAutoFlight(); }
      if (event.key.toLowerCase() === 'g') startGuide();
      if (event.key.toLowerCase() === 'e') { stopAutoFlight(); setControlActive(els.exploreMode); setZone(1); }
      if (event.key.toLowerCase() === 'a') toggleAutoFlight();
      if (event.key === ' ' && entered) { event.preventDefault(); togglePause(); }
      if (event.key === 'Home' || event.key.toLowerCase() === 'r') returnToCore();
      if (event.key === '+' || event.key === '=') { stopAutoFlight(); setZoom(zoom + .15); }
      if (event.key === '-' || event.key === '_') { stopAutoFlight(); setZoom(zoom - .15); }
      if (event.key === '?' || event.key.toLowerCase() === 'h') startGuide();
      if (event.key === 'ArrowRight') { stopAutoFlight(); setZone(currentZone + 1); }
      if (event.key === 'ArrowLeft') { stopAutoFlight(); setZone(currentZone - 1); }
    });
  }

  function bindTouch() {
    els.stage.addEventListener('touchstart', (event) => {
      if (event.touches.length === 1) {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
      }
      if (event.touches.length === 2) {
        const now = performance.now();
        if (entered && now - lastTapTime < 320) {
          toggleStageZoom();
        }
        lastTapTime = now;
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
    const technologyMode = currentZone === 1;

    ORBIT_PARTICLES.forEach((obj, i) => {
      const node = obj.el;
      if (!node) return;
      if (!orbitActive) {
        node.style.opacity = '0.08';
        node.style.pointerEvents = 'none';
        return;
      }
      const ring = obj.radius * scaleRadius * (0.82 + zoom * .16);
      
      let speedBase = 0.05;
      if (obj.radius < 180) {
        speedBase = (2 * Math.PI) / 42;
      } else if (obj.radius < 260) {
        speedBase = (2 * Math.PI) / 58;
      } else if (obj.radius < 340) {
        speedBase = (2 * Math.PI) / 76;
      } else {
        speedBase = (2 * Math.PI) / 92;
      }

      if (technologyMode) speedBase *= mobile ? 1.08 : 1.24;
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
      
      let depthScale = 0.93 + depthWave * 0.15;
      if (depthScale > 1.08) depthScale = 1.08;
      if (depthScale < 0.78) depthScale = 0.78;

      let depthOpacity = 0.69 + depthWave * 0.31;
      if (depthWave >= 0) {
        depthOpacity = 0.72 + depthWave * 0.28;
      } else {
        depthOpacity = 0.72 + depthWave * 0.34;
      }

      const blur = depthWave < -0.45 && !mobile ? 0.4 : 0;
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
    canvas.classList.add('real-universe-canvas');

    const ctx = canvas.getContext('2d');
    let stars = [];
    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;

    const rand = (min, max) => min + Math.random() * (max - min);

    function deviceProfile() {
      const w = window.innerWidth;
      if (w < 780 || isTouch) {
        return { starMin: 140, starMax: 220, dprMax: 1.5, parallaxStrength: 0 };
      }
      if (w < 1100) {
        return { starMin: 260, starMax: 380, dprMax: 1.75, parallaxStrength: 1 };
      }
      return { starMin: 540, starMax: 760, dprMax: 2, parallaxStrength: 1 };
    }

    function createStar(layer = 1) {
      const rareBig = Math.random() > 0.955;
      const medium = Math.random() > 0.70;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: rareBig ? rand(1.55, 2.7) : medium ? rand(0.8, 1.45) : rand(0.22, 0.8),
        baseAlpha: rareBig ? rand(0.45, 0.95) : medium ? rand(0.24, 0.7) : rand(0.08, 0.42),
        blinkAmp: rareBig ? rand(0.24, 0.60) : rand(0.04, 0.20),
        blinkSpeed: rand(0.00035, 0.0015),
        blinkOffset: rand(0, Math.PI * 2),
        vx: rand(-0.012, 0.012) * layer,
        vy: rand(0.006, 0.030) * layer,
        depth: layer,
        parallax: rareBig ? rand(24, 58) * layer : medium ? rand(16, 44) * layer : rand(10, 30) * layer,
        hue: Math.random() > 0.88 ? 'rgba(103,232,249,' : 'rgba(255,255,255,',
        big: rareBig
      };
    }

    function resetStar(star, fromCenter = false) {
      if (fromCenter) {
        const angle = Math.random() * Math.PI * 2;
        const dist = rand(8, 36);
        star.x = window.innerWidth / 2 + Math.cos(angle) * dist;
        star.y = window.innerHeight / 2 + Math.sin(angle) * dist;
      } else {
        star.x = Math.random() * window.innerWidth;
        star.y = Math.random() * window.innerHeight;
      }
    }

    function resize() {
      const profile = deviceProfile();
      const dpr = Math.min(profile.dprMax, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = window.innerWidth * window.innerHeight;
      const count = Math.max(profile.starMin, Math.min(profile.starMax, Math.floor(area / (isTouch ? 4600 : 2150))));
      stars = Array.from({ length: count }, () => createStar(rand(0.45, 1.6)));
    }

    function draw(time = 0) {
      if (pageHidden) {
        requestAnimationFrame(draw);
        return;
      }

      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;
      const launchElapsed = time - launchStart;
      const launchT = (isLaunching && launchElapsed > 350) ? Math.min(1, (launchElapsed - 350) / 1550) : 0;

      smoothX += (targetX - smoothX) * 0.085;
      smoothY += (targetY - smoothY) * 0.085;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, w, h);

      stars.forEach(star => {
        const px = hasFinePointer && !isTouch ? smoothX * -star.parallax : 0;
        const py = hasFinePointer && !isTouch ? smoothY * -star.parallax * 0.78 : 0;

        if (!paused && !prefersReducedMotion) {
          if (isLaunching) {
            const dx = star.x - cx;
            const dy = star.y - cy;
            const len = Math.hypot(dx, dy) || 1;
            const boost = 2.4 + launchT * 34;
            star.x += (dx / len) * boost;
            star.y += (dy / len) * boost;
            if (star.x < -130 || star.x > w + 130 || star.y < -130 || star.y > h + 130) resetStar(star, true);
          } else {
            star.x += star.vx;
            star.y += star.vy;
            if (star.y > h + 8) star.y = -8;
            if (star.y < -8) star.y = h + 8;
            if (star.x > w + 8) star.x = -8;
            if (star.x < -8) star.x = w + 8;
          }
        }

        const blink = prefersReducedMotion ? 0 : Math.sin(time * star.blinkSpeed + star.blinkOffset) * star.blinkAmp;
        const alpha = Math.max(0.04, Math.min(1, star.baseAlpha + blink + launchT * 0.45));
        const x = star.x + px;
        const y = star.y + py;

        if (launchT > 0.08) {
          const dx = x - cx;
          const dy = y - cy;
          const len = Math.hypot(dx, dy) || 1;
          const tail = 20 + launchT * 86;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - (dx / len) * tail, y - (dy / len) * tail);
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.56})`;
          ctx.lineWidth = Math.max(0.4, star.r);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = `${star.hue}${alpha})`;
          ctx.fill();

          if (star.big) {
            ctx.beginPath();
            ctx.arc(x, y, star.r * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha * 0.06})`;
            ctx.fill();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    if (hasFinePointer && !isTouch) {
      window.addEventListener('pointermove', (event) => {
        targetX = ((event.clientX / Math.max(window.innerWidth, 1)) - 0.5);
        targetY = ((event.clientY / Math.max(window.innerHeight, 1)) - 0.5);
      }, { passive: true });
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


/* ==========================================================================
   INTERACTION FIX PATCH — BACKGROUND ZOOM / TOUCH / PRODUCT OUTSIDE CLICK
   Updated: 20 May 2026, 19:15 IST
   Purpose:
   - Make background zoom work on desktop double-click.
   - Make mobile/tablet two-finger pinch and two-finger double-touch zoom work.
   - Make product detail overlay close on outside/backdrop click reliably.
   - Keep global button behavior unaffected.
   ========================================================================== */
(function () {
  const d = document;
  const w = window;

  function qs(sel, root = d) { return root.querySelector(sel); }
  function qsa(sel, root = d) { return Array.from(root.querySelectorAll(sel)); }

  let phaseZoom = 1;
  let pinchStartDistance = 0;
  let pinchStartZoom = 1;
  let lastTwoFingerTap = 0;
  let zoomFeedbackTimer = null;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function getTouchDistance(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.hypot(dx, dy);
  }

  function applyPhaseZoom(value, source = "manual") {
    phaseZoom = clamp(Number(value) || 1, 0.72, 1.85);

    d.documentElement.style.setProperty("--zoom", String(phaseZoom));
    d.body.dataset.zoomMode = source;

    const slider = qs("#zoomRange");
    const valueLabel = qs("#zoomValue");

    if (slider) {
      slider.value = String(Math.round(phaseZoom * 100));
    }

    if (valueLabel) {
      valueLabel.textContent = `${Math.round(phaseZoom * 100)}%`;
    }

    d.body.classList.add("zoom-feedback");
    clearTimeout(zoomFeedbackTimer);
    zoomFeedbackTimer = setTimeout(() => d.body.classList.remove("zoom-feedback"), 420);

    // Force transform on important universe layers so zoom works even if previous logic missed it.
    const scale = `scale(${phaseZoom})`;
    const inverse = 1 / Math.max(phaseZoom, 0.01);

    qsa(".particle-layer, .product-gallery-layer, .proof-layer, .reviews-layer").forEach((el) => {
      el.style.transform = scale;
      el.style.transformOrigin = "50% 50%";
    });

    qsa(".orbit-line").forEach((el) => {
      el.style.setProperty("--phaseZoomScale", phaseZoom);
    });

    const core = qs(".sv-core");
    if (core) {
      core.style.setProperty("--coreZoomCompensate", inverse.toFixed(3));
    }
  }

  function togglePhaseZoom() {
    applyPhaseZoom(phaseZoom < 1.18 ? 1.48 : 1, "toggle");
  }

  function bindPhaseZoomControls() {
    const stage = qs("#verseStage") || qs(".verse-stage");
    const zoomIn = qs("#zoomIn");
    const zoomOut = qs("#zoomOut");
    const zoomRange = qs("#zoomRange");

    if (zoomIn && !zoomIn.dataset.phaseZoomBound) {
      zoomIn.dataset.phaseZoomBound = "true";
      zoomIn.addEventListener("click", () => applyPhaseZoom(phaseZoom + 0.12, "button"));
    }

    if (zoomOut && !zoomOut.dataset.phaseZoomBound) {
      zoomOut.dataset.phaseZoomBound = "true";
      zoomOut.addEventListener("click", () => applyPhaseZoom(phaseZoom - 0.12, "button"));
    }

    if (zoomRange && !zoomRange.dataset.phaseZoomBound) {
      zoomRange.dataset.phaseZoomBound = "true";
      zoomRange.addEventListener("input", () => applyPhaseZoom(Number(zoomRange.value) / 100, "slider"));
    }

    if (stage && !stage.dataset.phaseZoomBound) {
      stage.dataset.phaseZoomBound = "true";

      stage.addEventListener("dblclick", (event) => {
        if (!d.body.classList.contains("verse-entered")) return;
        if (event.target.closest("button,a,input,.guide-card,.object-tooltip,.product-detail-sheet,.settings-panel")) return;
        event.preventDefault();
        togglePhaseZoom();
      });

      stage.addEventListener("touchstart", (event) => {
        if (!d.body.classList.contains("verse-entered")) return;
        if (event.touches.length === 2) {
          const now = performance.now();
          const distance = getTouchDistance(event.touches[0], event.touches[1]);

          if (now - lastTwoFingerTap < 330) {
            event.preventDefault();
            togglePhaseZoom();
          }

          lastTwoFingerTap = now;
          pinchStartDistance = distance;
          pinchStartZoom = phaseZoom;
        }
      }, { passive: false });

      stage.addEventListener("touchmove", (event) => {
        if (!d.body.classList.contains("verse-entered")) return;
        if (event.touches.length === 2 && pinchStartDistance > 0) {
          event.preventDefault();
          const nextDistance = getTouchDistance(event.touches[0], event.touches[1]);
          const ratio = nextDistance / Math.max(pinchStartDistance, 1);
          applyPhaseZoom(pinchStartZoom * ratio, "pinch");
        }
      }, { passive: false });

      stage.addEventListener("touchend", (event) => {
        if (event.touches.length < 2) {
          pinchStartDistance = 0;
        }
      }, { passive: true });
    }
  }

  function closeProductDetailOverlay() {
    const overlay = qs("#productDetailOverlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    d.body.classList.remove("product-detail-open");
  }

  function bindProductOutsideClose() {
    const overlay = qs("#productDetailOverlay");
    if (!overlay || overlay.dataset.outsideCloseFixed === "true") return;

    overlay.dataset.outsideCloseFixed = "true";

    overlay.addEventListener("click", (event) => {
      const sheet = event.target.closest(".product-detail-sheet");
      const closeTarget = event.target.closest("[data-close-product-detail]");
      if (closeTarget || !sheet) {
        event.preventDefault();
        closeProductDetailOverlay();
      }
    });

    d.addEventListener("click", (event) => {
      if (!overlay.classList.contains("is-open")) return;
      if (overlay.contains(event.target)) return;
      if (event.target.closest("[data-open-product-detail]")) return;
      closeProductDetailOverlay();
    });

    d.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) {
        closeProductDetailOverlay();
      }
    });
  }

  function initInteractionFixes() {
    bindPhaseZoomControls();
    bindProductOutsideClose();
    applyPhaseZoom(Number(getComputedStyle(d.documentElement).getPropertyValue("--zoom")) || 1, "init");
  }

  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", initInteractionFixes);
  } else {
    initInteractionFixes();
  }

  w.ShrimoVerseInteractionFix = {
    applyZoom: applyPhaseZoom,
    toggleZoom: togglePhaseZoom,
    closeProductDetail: closeProductDetailOverlay
  };
})();


/* ==========================================================================
   FINAL PHASES COMPLETION PATCH
   Updated: 20 May 2026, 19:45 IST
   Purpose: Proof Ring, Client Signals, Launch Dock, and final interaction
   completion without changing earlier scene contracts.
   ========================================================================== */
(function () {
  const d = document;

  function qs(sel, root = d) { return root.querySelector(sel); }

  function syncFinalSceneState() {
    const scene = d.body.dataset.scene || "";
    d.body.classList.toggle("is-proof-scene", scene === "proof-ring");
    d.body.classList.toggle("is-review-scene", scene === "client-signals");
    d.body.classList.toggle("is-launch-scene", scene === "launch-dock");
  }

  const stage = qs("#verseStage");
  if (stage) {
    const observer = new MutationObserver(syncFinalSceneState);
    observer.observe(stage, { attributes: true, attributeFilter: ["data-zone"] });
  }

  const bodyObserver = new MutationObserver(syncFinalSceneState);
  bodyObserver.observe(d.body, { attributes: true, attributeFilter: ["data-scene"] });

  d.addEventListener("click", (event) => {
    const proofNext = event.target.closest("[data-proof-next]");
    const reviewNext = event.target.closest("[data-review-next]");
    if (proofNext || reviewNext) {
      d.body.classList.add("scene-action-feedback");
      setTimeout(() => d.body.classList.remove("scene-action-feedback"), 280);
    }
  });

  syncFinalSceneState();
})();
