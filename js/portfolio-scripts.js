(() => {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  const ZONES = [
    { name: 'Arrival Core', hint: 'Everything orbits from the center.', title: 'Welcome to Shrimo Verse.', kicker: 'ARRIVAL CORE', copy: 'A living portfolio universe where products, tools, technologies, proof, and client signals orbit one meaningful center.' },
    { name: 'Technology Orbit', hint: 'Core technologies and tools become visible.', title: 'Tools become orbit paths.', kicker: 'TECHNOLOGY ORBIT', copy: 'Inspect the technologies and tools used to build scalable websites, SaaS systems, APIs, and product interfaces.' },
    { name: 'Product Gallery', hint: 'Products and platforms come forward.', title: 'Real products enter focus.', kicker: 'PRODUCT GALLERY', copy: 'Explore Shrimo Innovations, Digiting Card, Photocopywala, and the business directory platform as larger orbiting gallery objects.' },
    { name: 'Proof Ring', hint: 'Experience becomes measurable signal.', title: 'Proof moves around the core.', kicker: 'PROOF RING', copy: '12+ years, 300+ projects, 100+ developers trained, and multiple products built into the Shrimo ecosystem.' },
    { name: 'Client Signals', hint: 'Real feedback from real clients.', title: 'Client signals confirm the path.', kicker: 'CLIENT SIGNAL STREAM', copy: 'Real reviews from Khyati Overseas and international clients show delivery, communication, speed, and practical execution.' },
    { name: 'Launch Dock', hint: 'Conversion dock and contact beacons.', title: 'Reach the Launch Dock.', kicker: 'LAUNCH DOCK', copy: 'Start a project, send a WhatsApp message, call, email, or open the professional network paths from the final dock.' }
  ];

  const PARTICLES = [
    // Technology
    p('html','HTML5','Technology','The semantic base of readable, accessible, search-friendly websites.','Used for clean structure and long-term maintainability.',1,0,250,'technology'),
    p('css','CSS3','Technology','The visual system layer for layout, responsive design, and motion styling.','Used for polished interfaces and responsive screen behavior.',1,24,255,'technology'),
    p('javascript','JavaScript','Technology','The interaction layer that powers controls, tooltips, zoom, and guided behavior.','Used for living interfaces and app-like experiences.',1,48,260,'technology'),
    p('typescript','TypeScript','Technology','Typed JavaScript for safer large-scale frontend and product codebases.','Useful for scalable systems and maintainable architecture.',1,72,265,'technology'),
    p('react','React','Technology','Component-based frontend library for dynamic product interfaces.','Best for dashboards, SaaS screens, and modular UI systems.',1,98,270,'technology'),
    p('next','Next.js','Technology','Production React framework for fast, SEO-ready web applications.','Useful for websites, products, routing, rendering, and performance.',1,126,265,'technology'),
    p('node','Node.js','Technology','JavaScript runtime for backend systems and API services.','Used for scalable backend logic and product systems.',1,154,260,'technology'),
    p('express','Express.js','Technology','Node framework for REST APIs and server routes.','Useful for auth flows, dashboards, and modular backend systems.',1,182,255,'technology'),
    p('php','PHP','Technology','Server-side language used in WordPress and custom systems.','Useful for CMS work, plugins, and practical web tools.',1,210,250,'technology'),
    p('wordpress','WordPress','Technology','CMS platform for editable business websites and custom themes.','Best when clients need content control and fast publishing workflows.',1,236,245,'technology'),
    p('mongodb','MongoDB','Technology','Document database for flexible application data and dashboards.','Useful for product data, profiles, and dynamic applications.',1,262,250,'technology'),
    p('mysql','MySQL','Technology','Relational database for structured business and CMS data.','Useful for directories, ecommerce, and custom business systems.',1,288,255,'technology'),
    p('tailwind','Tailwind CSS','Technology','Utility-first CSS system for fast, consistent interface building.','Useful for design tokens and responsive component systems.',1,314,260,'technology'),
    p('bootstrap','Bootstrap','Technology','Responsive frontend framework for practical website layouts.','Useful for reliable business websites and admin interfaces.',1,338,255,'technology'),
    p('sass','Sass / SCSS','Technology','CSS preprocessor for structured, maintainable visual systems.','Useful for larger theme and component styling.',1,16,335,'technology'),
    p('jquery','jQuery','Technology','Classic JavaScript library still useful in legacy and WordPress projects.','Useful for maintaining older business sites and plugins.',1,66,346,'technology'),
    p('redux','Redux','Technology','Predictable frontend state management for complex interfaces.','Useful when larger applications need stable data flow.',1,116,340,'technology'),
    p('jwt','JWT Auth','Technology','Token-based authentication for secure logged-in web products.','Useful for role-based dashboards and protected APIs.',1,166,348,'technology'),
    p('woocommerce','WooCommerce','Technology','WordPress ecommerce system for catalogs, orders, and payments.','Useful for online stores and business commerce workflows.',1,216,342,'technology'),

    // Tools hidden until zoom
    p('git','Git','Tool','Version control for professional development and deployment workflows.','Keeps work trackable, reversible, and collaborative.',1,26,430,'tool'),
    p('figma','Figma','Tool','Design and interface planning tool for UI structure and handoff.','Useful for shaping layouts before development starts.',1,70,450,'tool'),
    p('gsap','GSAP','Tool','Animation platform for premium web motion and scroll-based storytelling.','Used when motion needs to feel controlled and production-quality.',1,116,438,'tool'),
    p('three','Three.js','Tool','WebGL library for 3D and immersive web visuals.','Useful for universe-like experiences and depth-driven interfaces.',1,160,452,'tool'),
    p('apis','APIs','Tool','Connected systems and integrations for product functionality.','Useful for business automation and dynamic data flows.',1,206,440,'tool'),
    p('search-console','Search Console','Tool','Google search monitoring and technical SEO insight.','Used to track visibility, issues, indexing, and search performance.',1,252,456,'tool'),
    p('analytics','Analytics','Tool','Measurement system for traffic and user behavior.','Helps understand what users do after launch.',1,300,430,'tool'),
    p('hosting','Hosting','Tool','Deployment and server setup for production websites.','Used for making websites stable and accessible online.',1,344,448,'tool'),
    p('vercel','Vercel','Tool','Modern hosting platform for frontend and Next.js applications.','Useful for fast deployments and production previews.',1,20,505,'tool'),
    p('performance','Performance','Tool','Speed, loading, and UX optimization.','Important for conversions, usability, and search quality.',1,330,512,'tool'),

    // Services
    p('websites','Websites','Service','Professional business websites designed to look credible and convert clearly.','Useful for service providers, companies, and local businesses.',1,42,560,'service'),
    p('landing','Landing Pages','Service','Focused pages built to convert one campaign or offer.','Useful for ads, launches, and lead generation.',1,95,575,'service'),
    p('redesign','Redesign','Service','Improving old websites without losing their business identity.','Useful when a site feels outdated, slow, or unclear.',1,148,565,'service'),
    p('webapps','Web Apps','Service','Interactive systems with login, data, dashboards, and workflows.','Useful for SaaS, admin panels, and internal tools.',1,202,580,'service'),
    p('product-ui','Product UI','Service','Interfaces that make digital products easier to use and scale.','Useful for dashboards, tools, platforms, and SaaS screens.',1,254,566,'service'),
    p('seo-structure','SEO Structure','Service','Clean technical structure for better crawlability and content hierarchy.','Useful for ranking preparation and long-term growth.',1,308,580,'service'),
    p('saas','SaaS Systems','Service','Scalable product architecture for web-based software.','Useful for businesses building recurring digital products.',1,356,558,'service'),

    // Products / gallery
    p('shrimo','Shrimo Innovations','Product','Software and web development company focused on websites, apps, and digital products.','The main business identity behind Shrimo Verse.',2,20,315,'product','https://shrimo.com/'),
    p('digiting','Digiting Card','Product','Digital visiting card platform for professionals and businesses.','A product built around digital identity and contact sharing.',2,90,340,'product','https://digitingcard.com/'),
    p('photocopywala','Photocopywala','Product','Online tools and document utilities for common print and digital tasks.','A practical platform for people who need quick document services/tools.',2,180,336,'product','https://photocopywala.in/'),
    p('directory','Directory Platform','Product','Business listing and discovery platform concept for organized local business search.','A product direction for local discovery and business visibility.',2,270,330,'product'),

    // Proof
    p('years','12+ Years','Proof','More than a decade of web design, WordPress, PHP, frontend, React, and full-stack work.','Shows long-term practical delivery experience.',3,32,290,'proof'),
    p('projects','300+ Projects','Proof','A strong delivery record across websites, products, and business systems.','Shows real execution beyond experiments.',3,122,300,'proof'),
    p('trained','100+ Trained','Proof','Developers trained through practical guidance and development learning.','Shows communication, teaching, and system thinking.',3,212,300,'proof'),
    p('products-proof','Products Built','Proof','Multiple product ideas and platforms built inside the Shrimo ecosystem.','Shows product-building ability, not only service delivery.',3,302,290,'proof'),

    // Reviews
    p('ram','Ram Dubey','Review','Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.','Khyati Overseas Private Limited',4,30,330,'review'),
    p('rajeev','Rajeev T.','Review','A project many people said could not be done was handled quickly, with practical suggestions and fast execution.','International client',4,150,345,'review'),
    p('sergio','Sergio W.','Review','The work was delivered on time, communication stayed professional, and the final result matched expectations.','International client',4,270,330,'review'),

    // Launch Dock / contacts
    p('launch','Launch Project','Contact','Start a project discussion from Shrimo Verse.','Best for websites, redesigns, web apps, SaaS systems, and product work.',5,12,285,'conversion','https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20want%20to%20launch%20a%20project.'),
    p('whatsapp','WhatsApp','Contact','Fastest way to send your requirement and get a practical next step.','Message directly with your project idea or website link.',5,60,360,'conversion','https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20want%20to%20launch%20a%20project.'),
    p('call','Call','Contact','Direct phone path for quick discussion.','Useful when the project needs a fast first conversation.',5,120,400,'conversion','tel:+919907472038'),
    p('email','Email','Contact','Best for structured requirements and project briefs.','Send requirements, links, screenshots, and timelines.',5,180,395,'conversion','mailto:shrikant9907@gmail.com'),
    p('linkedin','LinkedIn','Contact','Professional profile and networking path.','Useful for work history and professional communication.',5,240,360,'conversion','https://www.linkedin.com/in/shrikant9907/'),
    p('github','GitHub','Contact','Code and developer profile path.','Useful to check development identity and work signals.',5,300,340,'conversion','https://github.com/shrikant9907'),
    p('profile','Digital Profile','Contact','Compact digital profile path connected to the Shrimo ecosystem.','Useful for quick identity and contact access.',5,350,300,'conversion','https://digitingcard.com/p/shrikant-yadav')
  ];

  function p(id,label,category,desc,use,zone,angle,radius,type,link='') {
    return { id,label,category,desc,use,zone,angle,radius,type,link,phase: Math.random() * Math.PI * 2 };
  }

  const els = {
    body: document.body,
    entryGate: $('#entryGate'),
    enterVerse: $('#enterVerse'),
    ship: $('#shipCursor'),
    trail: $('#cursorTrailLayer'),
    control: $('#verseControl'),
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
    guideNext: $('#guideNext'),
    mobileDots: $('#mobileZoneDots')
  };

  let currentZone = 0;
  let zoom = 1;
  let paused = false;
  let autoTimer = null;
  let autoActive = false;
  let guideIndex = 0;
  let guideActive = false;
  let lastMouse = { x: window.innerWidth * .72, y: window.innerHeight * .35 };
  let prevMouse = { ...lastMouse };
  let shipAngle = 0;
  let entered = false;
  let touchStartX = 0;
  let touchStartY = 0;
  let pinchStartDistance = null;
  let pinchStartZoom = 1;

  const GUIDE = isTouch ? [
    { title:'Travel by touch', text:'Swipe left or right to move between universe zones.', target:'.mobile-control-dock' },
    { title:'Inspect particles', text:'Tap any glowing node to open its story.', target:'.verse-node[data-id="html"]' },
    { title:'Zoom in Explore', text:'Use Orbit Zoom or pinch in Free Explore to reveal hidden tools.', target:'.zoom-dock' },
    { title:'Return to Core', text:'Use Core anytime to come back to the center.', target:'[data-mobile="core"]' },
    { title:'Auto Flight', text:'Tap Auto and Shrimo Verse will present itself automatically.', target:'[data-mobile="auto"]' },
    { title:'Launch Project', text:'Use Launch when you are ready to start a project conversation.', target:'.mobile-control-dock a' }
  ] : [
    { title:'Pilot the ship', text:'Move your cursor to pilot the explorer ship.', target:'#shipCursor' },
    { title:'Inspect particles', text:'Every particle has meaning. Hover to scan it.', target:'.verse-node[data-id="html"]' },
    { title:'Open details', text:'Click a glowing node to open its story.', target:'.verse-node[data-id="html"]' },
    { title:'Zoom deeper', text:'Use Orbit Zoom to reveal hidden tools and details.', target:'.zoom-dock' },
    { title:'Return to Core', text:'Lost in the orbit? Return to Core anytime.', target:'#returnCore' },
    { title:'Auto Flight', text:'Let Shrimo Verse guide you automatically.', target:'#autoFlight' },
    { title:'Launch Project', text:'When ready, use Launch Project to start a conversation.', target:'#launchProject' }
  ];

  init();

  function init() {
    document.body.classList.toggle('touch-device', isTouch);
    if (!isTouch && !prefersReducedMotion) document.body.classList.add('has-ship');
    renderParticles();
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

  function renderParticles() {
    els.layer.innerHTML = '';
    PARTICLES.forEach((obj) => {
      const node = document.createElement('button');
      node.type = 'button';
      node.className = `verse-node ${obj.type}`;
      node.dataset.id = obj.id;
      node.dataset.zone = String(obj.zone);
      node.dataset.type = obj.type;
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
      desc: 'The fixed center of this universe. Everything else orbits around this core.',
      use: 'Return here whenever you want to reset the view or restart exploration.'
    }, els.core));
  }

  function bindEntry() {
    els.enterVerse.addEventListener('click', () => {
      entered = true;
      els.entryGate.classList.add('is-launching');
      setTimeout(() => {
        els.entryGate.classList.add('is-hidden');
        document.body.classList.add('verse-entered');
        setZone(0);
        setTimeout(() => startGuide(), 700);
      }, prefersReducedMotion ? 120 : 1450);
    });
  }

  function bindControls() {
    els.guidedMode.addEventListener('click', () => { stopAutoFlight(); startGuide(); setControlActive(els.guidedMode); });
    els.exploreMode.addEventListener('click', () => { stopAutoFlight(); setControlActive(els.exploreMode); });
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
      if (!event.target.closest('.verse-node') && !event.target.closest('.object-tooltip') && !event.target.closest('.sv-core')) closeObject();
    });
    els.guideBack.addEventListener('click', () => stepGuide(-1));
    els.guideNext.addEventListener('click', () => stepGuide(1));
    $$('[data-action="auto"]').forEach(btn => btn.addEventListener('click', startAutoFlight));
    $$('[data-action="guide"]').forEach(btn => btn.addEventListener('click', startGuide));
    $$('[data-mobile]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.mobile;
        if (action === 'guide') startGuide();
        if (action === 'explore') { stopAutoFlight(); setControlActive(els.exploreMode); }
        if (action === 'auto') startAutoFlight();
        if (action === 'core') returnToCore();
      });
    });
    $$('[data-zone]', els.mobileDots).forEach(btn => btn.addEventListener('click', () => setZone(Number(btn.dataset.zone))));
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
    const run = () => {
      if (!autoActive) return;
      setZone(index % ZONES.length);
      const focus = activeParticleForZone(index % ZONES.length);
      if (focus?.el) {
        $$('.verse-node').forEach(node => node.classList.remove('is-selected'));
        focus.el.classList.add('is-selected');
      }
      index += 1;
      autoTimer = setTimeout(run, index === 1 ? 5200 : 6200);
    };
    run();
  }

  function stopAutoFlight() {
    autoActive = false;
    clearTimeout(autoTimer);
    els.autoFlight.classList.remove('is-active');
  }

  function activeParticleForZone(zone) {
    return PARTICLES.find(p => p.zone === zone && ['product','proof','review','conversion','technology'].includes(p.type));
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
    $$('.mobile-zone-dots button').forEach(btn => btn.classList.toggle('is-active', Number(btn.dataset.zone) === currentZone));
    updateParticleStates();
    if (!options.immediate && !prefersReducedMotion) pulseZone();
  }

  function pulseZone() {
    els.missionPanel?.animate?.([{ opacity:.72, transform:'translateY(-46%)' },{ opacity:1, transform:'translateY(-50%)' }], { duration: 420, easing: 'ease-out' });
  }

  function updateParticleStates() {
    PARTICLES.forEach(obj => {
      if (!obj.el) return;
      const active = obj.zone === currentZone || currentZone === 0 || obj.type === 'conversion';
      obj.el.classList.toggle('is-active-zone', active);
      obj.el.classList.toggle('is-inactive', !active);
    });
  }

  function setZoom(value, options = {}) {
    zoom = Math.max(.7, Math.min(2.2, value));
    document.documentElement.style.setProperty('--zoom', String(zoom));
    els.plane?.classList.toggle('zoomed', zoom > 1.08);
    els.plane?.classList.toggle('deep-zoom', zoom > 1.52);
    if (!options.silent) {
      els.zoomRange.value = String(Math.round(zoom * 100));
    }
    els.zoomValue.textContent = `${Math.round(zoom * 100)}%`;
    updateNodePositions(performance.now());
  }

  function showObject(obj, target) {
    stopAutoFlight();
    $$('.verse-node,.sv-core').forEach(node => node.classList.remove('is-selected','is-focused'));
    target?.classList.add(target === els.core ? 'is-focused' : 'is-selected');
    els.tooltipType.textContent = obj.category || 'Object';
    els.tooltipTitle.textContent = obj.label;
    els.tooltipDesc.textContent = obj.desc || '';
    els.tooltipUse.textContent = obj.use || '';
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
    $$('.verse-node,.sv-core').forEach(node => node.classList.remove('is-selected','is-focused'));
    document.body.classList.remove('cursor-lock');
  }

  function startGuide() {
    stopAutoFlight();
    guideActive = true;
    guideIndex = 0;
    els.guideOverlay.classList.add('is-visible');
    els.guideOverlay.setAttribute('aria-hidden', 'false');
    showGuideStep();
  }

  function closeGuide() {
    guideActive = false;
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
    positionShip(lastMouse.x, lastMouse.y);
    window.addEventListener('mousemove', (event) => {
      prevMouse = { ...lastMouse };
      lastMouse = { x: event.clientX, y: event.clientY };
      const dx = lastMouse.x - prevMouse.x;
      const dy = lastMouse.y - prevMouse.y;
      if (Math.abs(dx) + Math.abs(dy) > 1) {
        shipAngle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
        createTrail(lastMouse.x, lastMouse.y);
      }
      positionShip(lastMouse.x, lastMouse.y);
    }, { passive: true });
  }

  function positionShip(x, y) {
    els.ship.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%,-50%) rotate(${shipAngle}deg)`;
  }

  let lastTrailTime = 0;
  function createTrail(x, y) {
    const now = performance.now();
    if (now - lastTrailTime < 28) return;
    lastTrailTime = now;
    const dot = document.createElement('span');
    dot.className = 'trail-dot';
    dot.style.left = `${x - 3}px`;
    dot.style.top = `${y - 3}px`;
    els.trail.appendChild(dot);
    setTimeout(() => dot.remove(), 650);
  }

  function bindKeyboard() {
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { closeObject(); closeGuide(); stopAutoFlight(); }
      if (event.key.toLowerCase() === 'g') startGuide();
      if (event.key.toLowerCase() === 'e') { stopAutoFlight(); setControlActive(els.exploreMode); }
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
      if (Math.abs(dx) > 54 && Math.abs(dx) > Math.abs(dy)) {
        setZone(currentZone + (dx < 0 ? 1 : -1));
      }
    }, { passive: true });
  }

  function distance(a, b) {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  function animate(time = 0) {
    if (!paused) updateNodePositions(time);
    requestAnimationFrame(animate);
  }

  function updateNodePositions(time) {
    const rect = els.stage.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const mobile = rect.width <= 780;
    const laptop = rect.height <= 760 && rect.width >= 781;
    const scaleRadius = mobile ? .52 : laptop ? .78 : 1;
    const timeScale = paused ? 0 : time / 1000;
    const zoneBias = currentZone * 22;

    PARTICLES.forEach((obj, i) => {
      const node = obj.el;
      if (!node) return;
      const ring = obj.radius * scaleRadius * (0.78 + zoom * .22);
      const speed = (obj.type === 'product' ? 0.018 : obj.type === 'review' ? 0.014 : obj.type === 'proof' ? 0.02 : 0.026);
      const angle = ((obj.angle + zoneBias) * Math.PI / 180) + (timeScale * speed) + obj.phase * .08;
      const wobble = prefersReducedMotion ? 0 : Math.sin(timeScale * 1.6 + i) * (mobile ? 2 : 5);
      let x = cx + Math.cos(angle) * ring;
      let y = cy + Math.sin(angle) * ring + wobble;

      // Keep the core safe: push particles away from the exact center.
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const minSafe = mobile ? 126 : 178;
      if (dist < minSafe) {
        x = cx + (dx / dist) * minSafe;
        y = cy + (dy / dist) * minSafe;
      }

      // Entry/heading safe zones on laptop: keep particles out of top 120px and control right rail.
      const pad = mobile ? 18 : 38;
      x = Math.max(pad, Math.min(rect.width - pad, x));
      y = Math.max(mobile ? 90 : 100, Math.min(rect.height - (mobile ? 150 : 70), y));

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      const active = obj.zone === currentZone || currentZone === 0 || obj.type === 'conversion';
      const farDim = active ? 1 : 0.34;
      node.style.opacity = obj.type === 'tool' && zoom < 1.08 ? 0 : farDim;
      node.style.visibility = obj.type === 'tool' && zoom < 1.08 ? 'hidden' : 'visible';
    });
  }

  function initStars() {
    const canvas = $('#starCanvas');
    const ctx = canvas.getContext('2d');
    let stars = [];
    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(80, Math.min(170, Math.floor(window.innerWidth * window.innerHeight / 12000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.6 + .25,
        a: Math.random() * .35 + .08,
        s: Math.random() * .22 + .04
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = '#05070A';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      stars.forEach(star => {
        if (!paused && !prefersReducedMotion) {
          star.y += star.s;
          if (star.y > window.innerHeight + 4) star.y = -4;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(165,243,252,${star.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    draw();
  }
})();
