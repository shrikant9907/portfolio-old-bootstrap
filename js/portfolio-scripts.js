(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || !window.matchMedia('(pointer: fine)').matches;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const els = {
    entryGate: $('#entryGate'),
    enterVerse: $('#enterVerse'),
    skipIntro: $('#skipIntro'),
    autoPlayMode: $('#autoPlayMode'),
    zoomRange: $('#zoomRange'),
    entryStatus: $('#entryStatus'),
    verseStage: $('#verseStage'),
    worldPlane: $('#worldPlane'),
    verseNodes: $('#verseNodes'),
    verseViewport: $('#verseViewport'),
    tooltip: $('#objectTooltip'),
    tooltipClose: $('#tooltipClose'),
    tooltipCategory: $('#tooltipCategory'),
    tooltipTitle: $('#tooltipTitle'),
    tooltipDescription: $('#tooltipDescription'),
    tooltipUse: $('#tooltipUse'),
    tooltipAction: $('#tooltipAction'),
    zoomValue: $('#zoomValue'),
    guidedMode: $('#guidedMode'),
    exploreMode: $('#exploreMode'),
    pauseMotion: $('#pauseMotion'),
    resetView: $('#resetView'),
    brandReset: $('#brandReset'),
    zoomIn: $('#zoomIn'),
    zoomOut: $('#zoomOut'),
    mobileCommand: $('#mobileCommand'),
    verseControl: $('#verseControl'),
    shipCursor: $('#shipCursor'),
    cursorTrailLayer: $('#cursorTrailLayer'),
    canvas: $('#verseCanvas'),
    launchGuideButton: $('#launchGuideButton'),
    launchGuide: $('#launchGuide'),
    guideStart: $('#guideStart'),
    guideSkip: $('#guideSkip'),
    guidePrev: $('#guidePrev'),
    guideNext: $('#guideNext'),
    guideTitle: $('#guideTitle'),
    guideText: $('#guideText'),
    guideStepCount: $('#guideStepCount')
  };

  const zones = ['arrival', 'orbit', 'products', 'proof', 'trust', 'dock'];
  const viewTargets = [
    { x: 0, y: 0, zoom: 1.0 },
    { x: -80, y: 10, zoom: 1.18 },
    { x: 140, y: -20, zoom: 1.05 },
    { x: -30, y: 90, zoom: 1.26 },
    { x: 120, y: 70, zoom: 1.16 },
    { x: 0, y: -115, zoom: 1.05 }
  ];

  let activeZone = 0;
  let mode = 'guided';
  let worldZoom = 1;
  let worldPan = { x: 0, y: 0 };
  let paused = false;
  let wheelLocked = false;
  let proofAnimated = false;
  let threeRuntime = null;
  let guideStep = 0;
  let guideVisible = false;
  let guideShown = false;
  let autoPlayActive = false;
  let autoPlayTimer = null;

  const universeObjects = [
    { id:'core', zone:0, category:'Identity', label:'Shrimo Verse Core', type:'identity', x:800, y:500, desc:'The central identity object of this interactive portfolio universe.', use:'It keeps the experience connected: identity, products, tools, proof, and contact flow.', link:'' },
    { id:'shrikant', zone:0, category:'Identity', label:'Shrikant Yadav', type:'identity', x:640, y:332, desc:'Full-stack engineer building SaaS products, APIs, and scalable web systems with MERN and Next.js.', use:'Creates digital systems for business websites, product interfaces, APIs, dashboards, and launch-ready web experiences.', link:'https://shrikant.shrimo.com/' },
    { id:'shrimo', zone:0, category:'Identity', label:'Shrimo Innovations', type:'product', x:985, y:332, desc:'Software and web development company connected to the Shrimo ecosystem.', use:'Represents professional web, product, and digital solution work.', link:'https://shrimo.com/' },

    { id:'html', zone:1, category:'Technology', label:'HTML', type:'technology', x:386, y:265, desc:'The structural layer of the web.', use:'Used to keep content readable, semantic, accessible, and search-friendly.', link:'' },
    { id:'css', zone:1, category:'Technology', label:'CSS', type:'technology', x:520, y:192, desc:'The visual system layer for layout, responsive design, and motion styling.', use:'Used to create polished black-and-cyan interfaces, glass surfaces, and responsive systems.', link:'' },
    { id:'javascript', zone:1, category:'Technology', label:'JavaScript', type:'technology', x:1105, y:196, desc:'The interaction layer of Shrimo Verse.', use:'Used for controls, zoom, tooltips, guided mode, explore mode, and cursor behavior.', link:'' },
    { id:'react', zone:1, category:'Technology', label:'React', type:'technology', x:1222, y:334, desc:'A component-based frontend library for modern interfaces.', use:'Best for dashboards, products, interactive apps, and scalable UI systems.', link:'' },
    { id:'next', zone:1, category:'Technology', label:'Next.js', type:'technology', x:1252, y:520, desc:'A React framework for production-grade web applications.', use:'Useful for SEO-ready websites, fast routing, server rendering, and modern business platforms.', link:'' },
    { id:'typescript', zone:1, category:'Technology', label:'TypeScript', type:'technology', x:1268, y:640, desc:'Typed JavaScript used to make larger frontend and product codebases safer.', use:'Helps reduce bugs, improve maintainability, and support scalable application architecture.', link:'' },
    { id:'mern', zone:1, category:'Technology', label:'MERN Stack', type:'technology', x:1115, y:830, desc:'MongoDB, Express, React, and Node.js used together for full-stack products.', use:'Useful for SaaS platforms, admin dashboards, API-driven systems, and scalable web products.', link:'' },
    { id:'wordpress', zone:1, category:'Technology', label:'WordPress', type:'technology', x:1040, y:755, desc:'CMS platform for editable business websites.', use:'Best when clients need content control, fast site delivery, and easy publishing workflows.', link:'' },
    { id:'node', zone:1, category:'Technology', label:'Node.js', type:'technology', x:475, y:720, desc:'JavaScript runtime used for backend services and APIs.', use:'Helpful for building APIs, product backends, and connected web applications.', link:'' },
    { id:'php', zone:1, category:'Technology', label:'PHP', type:'technology', x:315, y:548, desc:'Server-side language commonly used in WordPress and custom web systems.', use:'Useful for CMS websites, plugins, server logic, and practical business tools.', link:'' },
    { id:'mongo', zone:1, category:'Technology', label:'MongoDB', type:'technology', x:715, y:807, desc:'Document database used for flexible application data.', use:'Good for product data, user profiles, dynamic dashboards, and scalable app structures.', link:'' },
    { id:'mysql', zone:1, category:'Technology', label:'MySQL', type:'technology', x:910, y:818, desc:'Relational database for structured business data.', use:'Useful for CMS, directories, listings, ecommerce, and custom data systems.', link:'' },
    { id:'tailwind', zone:1, category:'Technology', label:'Tailwind CSS', type:'technology', x:750, y:188, desc:'Utility-first CSS system for fast, consistent interface building.', use:'Useful for responsive UI systems, design tokens, and production-ready component styling.', link:'' },
    { id:'bootstrap', zone:1, category:'Technology', label:'Bootstrap', type:'technology', x:612, y:255, desc:'Responsive frontend framework used for quick, reliable business website layouts.', use:'Good for practical websites, dashboards, and layouts that need stable responsive behavior.', link:'' },
    { id:'sass', zone:1, category:'Technology', label:'Sass / SCSS', type:'technology', x:332, y:410, desc:'CSS preprocessor used to structure larger visual systems.', use:'Helps organize reusable variables, components, and maintainable UI styling.', link:'' },
    { id:'jquery', zone:1, category:'Technology', label:'jQuery', type:'technology', x:472, y:872, desc:'Classic JavaScript library still useful in many legacy and WordPress projects.', use:'Helpful for maintaining older websites, plugins, and interactive business pages.', link:'' },
    { id:'express', zone:1, category:'Technology', label:'Express.js', type:'technology', x:632, y:735, desc:'Node.js backend framework for APIs and server-side routes.', use:'Used for REST APIs, authentication flows, dashboards, and scalable backend services.', link:'' },
    { id:'redux', zone:1, category:'Technology', label:'Redux', type:'technology', x:1198, y:262, desc:'State management approach for complex frontend applications.', use:'Useful when larger interfaces need predictable data flow and maintainable app state.', link:'' },
    { id:'auth', zone:1, category:'Technology', label:'JWT Auth', type:'technology', x:1190, y:770, desc:'Token-based authentication pattern for protected web applications.', use:'Useful for role-based dashboards, secure APIs, and logged-in product systems.', link:'' },
    { id:'woocommerce', zone:1, category:'Technology', label:'WooCommerce', type:'technology', x:1008, y:880, desc:'WordPress ecommerce system for product and order workflows.', use:'Helpful for online stores, catalogs, and business websites with commerce features.', link:'' },
    { id:'vercel', zone:1, category:'Tool', label:'Vercel / Hosting', type:'tool', x:1388, y:510, desc:'Deployment layer for fast web delivery.', use:'Used for launching, hosting, and maintaining modern websites and applications.', link:'' },
    { id:'performance', zone:1, category:'Tool', label:'Performance', type:'tool', x:230, y:760, desc:'Speed, loading behavior, and frontend optimization work.', use:'Helps websites feel faster, reduce friction, and improve user experience.', link:'' },

    { id:'figma', zone:1, category:'Tool', label:'Figma', type:'tool', x:192, y:336, desc:'Design tool used for planning interfaces before development.', use:'Helps shape layout, hierarchy, and responsive behavior before code.', link:'' },
    { id:'gsap', zone:1, category:'Tool', label:'GSAP', type:'tool', x:1394, y:390, desc:'Professional animation library for smooth UI and motion storytelling.', use:'Used for cinematic transitions, timeline control, and premium motion behavior.', link:'' },
    { id:'three', zone:1, category:'Tool', label:'Three.js', type:'tool', x:1366, y:610, desc:'3D JavaScript library for WebGL-powered visual worlds.', use:'Used here for atmospheric depth and the Shrimo Verse universe layer.', link:'' },
    { id:'git', zone:1, category:'Tool', label:'Git', type:'tool', x:228, y:682, desc:'Version control system for reliable code changes.', use:'Keeps production projects organized, trackable, and safer to update.', link:'' },
    { id:'search-console', zone:1, category:'Tool', label:'Search Console', type:'tool', x:1186, y:702, desc:'Google tool used to monitor search visibility and indexing.', use:'Helps verify technical SEO health after launch.', link:'' },
    { id:'analytics', zone:1, category:'Tool', label:'Analytics', type:'tool', x:382, y:822, desc:'Measurement layer for traffic and user behavior.', use:'Helps understand which pages and CTAs are working.', link:'' },
    { id:'apis', zone:1, category:'Tool', label:'APIs', type:'tool', x:200, y:506, desc:'Connectors that let systems talk to each other.', use:'Used for integrations, dashboards, automation, and product workflows.', link:'' },

    { id:'service-websites', zone:1, category:'Service', label:'Business Websites', type:'service', x:764, y:130, desc:'Professional websites built for trust and conversion.', use:'Best for local businesses, service providers, startups, and companies that need a clean online presence.', link:'' },
    { id:'service-apps', zone:1, category:'Service', label:'Web Applications', type:'service', x:1010, y:118, desc:'Custom web systems with user flows, data, and interaction.', use:'Useful for products, dashboards, portals, and internal business tools.', link:'' },
    { id:'service-seo', zone:1, category:'Service', label:'SEO-ready Structure', type:'service', x:606, y:872, desc:'Technical structure that helps websites launch cleaner.', use:'Includes semantic HTML, metadata, schema, speed, and content hierarchy planning.', link:'' },

    { id:'digiting', zone:2, category:'Product', label:'Digiting Card', type:'product', x:605, y:338, desc:'A digital visiting card platform for professionals and businesses.', use:'Helps people share business identity, links, and contact details digitally.', link:'https://digitingcard.com/' },
    { id:'photocopywala', zone:2, category:'Product', label:'Photocopywala', type:'product', x:1015, y:366, desc:'A practical document and photo utility platform.', use:'Helps users complete common print, photo, and document preparation tasks online.', link:'https://photocopywala.in/' },
    { id:'directory', zone:2, category:'Product', label:'Directory Platform', type:'product', x:515, y:642, desc:'A business listing and discovery platform concept.', use:'Designed to organize local businesses, profiles, categories, and search-driven discovery.', link:'' },
    { id:'shrimo-site', zone:2, category:'Product', label:'Shrimo.com', type:'product', x:1065, y:642, desc:'Company website for Shrimo Innovations.', use:'Represents service positioning, trust building, and business enquiry flow.', link:'https://shrimo.com/' },

    { id:'years', zone:3, category:'Proof', label:'12+ Years', type:'proof', x:610, y:430, desc:'Long-term experience in website design, development, training, and product building.', use:'Shows maturity and practical understanding across many real projects.', link:'' },
    { id:'projects', zone:3, category:'Proof', label:'300+ Projects', type:'proof', x:800, y:300, desc:'A broad delivery history across websites, tools, and web systems.', use:'Gives confidence that the work is practical, not theoretical.', link:'' },
    { id:'trained', zone:3, category:'Proof', label:'100+ Developers', type:'proof', x:1000, y:430, desc:'Developers trained through practical teaching and development guidance.', use:'Shows ability to explain, structure, and mentor development thinking.', link:'' },
    { id:'products-proof', zone:3, category:'Proof', label:'Products Built', type:'proof', x:800, y:650, desc:'Multiple product ideas and platforms built inside the Shrimo ecosystem.', use:'Shows product thinking beyond ordinary service websites.', link:'' },

    { id:'review-khyati', zone:4, category:'Client Signal', label:'Khyati Overseas', type:'review', x:515, y:375, desc:'Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.', use:'Ram Dubey · Khyati Overseas Private Limited', link:'' },
    { id:'review-rajeev', zone:4, category:'Client Signal', label:'Fast Execution', type:'review', x:800, y:300, desc:'A project many people said could not be done was handled quickly, with practical suggestions and fast execution.', use:'Rajeev T. · International client', link:'' },
    { id:'review-sergio', zone:4, category:'Client Signal', label:'On-time Delivery', type:'review', x:1085, y:375, desc:'The work was delivered on time, communication stayed professional, and the final result matched expectations.', use:'Sergio W. · International client', link:'' },
    { id:'trust-communication', zone:4, category:'Trust Signal', label:'Clear Communication', type:'trust', x:600, y:610, desc:'Professional communication is treated as part of delivery, not an extra.', use:'Keeps projects easier to understand, approve, and move forward.', link:'' },
    { id:'trust-practical', zone:4, category:'Trust Signal', label:'Practical Suggestions', type:'trust', x:1000, y:610, desc:'Suggestions are focused on what can be built, launched, and maintained.', use:'Useful for business owners who need clear next steps, not confusing technical options.', link:'' },

    { id:'start-project', zone:5, category:'Conversion', label:'Launch Project', type:'conversion', x:670, y:424, desc:'The main launch action inside Shrimo Verse.', use:'Use this when you want to discuss a new website, redesign, or web application.', link:'https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20want%20to%20start%20a%20project.' },
    { id:'whatsapp', zone:5, category:'Conversion', label:'WhatsApp', type:'conversion', x:880, y:360, desc:'Fastest way to start a practical project discussion.', use:'Send your requirement, current website, or idea and get the next step.', link:'https://wa.me/919907472038?text=Hi%20Shrikant%2C%20I%20want%20to%20start%20a%20project.' },
    { id:'email', zone:5, category:'Conversion', label:'Email', type:'conversion', x:955, y:540, desc:'Best for structured requirements or project briefs.', use:'Send project details, reference links, and timeline expectations.', link:'mailto:shrikant9907@gmail.com' },
    { id:'linkedin', zone:5, category:'Conversion', label:'LinkedIn', type:'conversion', x:722, y:625, desc:'Professional contact and profile connection.', use:'Useful for business networking, work history, and professional communication.', link:'https://www.linkedin.com/in/shrikant9907/' },
    { id:'call', zone:5, category:'Conversion', label:'Call', type:'conversion', x:1040, y:640, desc:'Direct phone path for quick discussion.', use:'Use this when the project needs a fast first conversation.', link:'tel:+919907472038' },
    { id:'profile-link', zone:5, category:'Conversion', label:'Digital Profile', type:'conversion', x:560, y:560, desc:'Public Digiting Card profile path for quick identity and contact access.', use:'A compact profile link connected to the Shrimo ecosystem.', link:'https://digitingcard.com/p/shrikant-yadav' }
  ];

  function init() {
    document.body.classList.toggle('touch-device', isTouch);
    if (!isTouch && !prefersReducedMotion) document.body.classList.add('has-ship-cursor');
    renderNodes();
    bindEntry();
    bindControls();
    bindWheelAndKeys();
    bindTouchGestures();
    initCursor();
    initThree();
    setZone(0, { immediate: true });

    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
      skipEntry();
    } else if (window.gsap) {
      gsap.from('.entry-core', { scale: 0.8, opacity: 0, duration: 1.1, ease: 'expo.out' });
      gsap.from('.entry-kicker, .entry-gate h1, .entry-copy, .entry-actions, .entry-line', { y: 24, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.25, ease: 'power3.out' });
      setTimeout(() => { els.entryStatus.textContent = 'Calibrating rocket controls'; }, 700);
      setTimeout(() => { els.entryStatus.textContent = 'Syncing meaningful particles'; }, 1350);
      setTimeout(() => { els.entryStatus.textContent = 'You are going to enter Shrimo Verse'; }, 2050);
    }
  }

  function renderNodes() {
    els.verseNodes.innerHTML = '';
    universeObjects.filter(obj => obj.id !== 'core').forEach((obj, index) => {
      const node = document.createElement('button');
      node.type = 'button';
      node.className = `verse-node ${obj.type}`;
      node.dataset.id = obj.id;
      node.dataset.zone = String(obj.zone);
      node.dataset.type = obj.type;
      node.style.left = `${obj.x}px`;
      node.style.top = `${obj.y}px`;
      node.style.animationDelay = `${(index % 8) * -0.55}s`;
      node.innerHTML = `<span><small>${obj.category}</small><strong>${obj.label}</strong></span>`;
      node.setAttribute('aria-label', `${obj.label}. ${obj.category}. Click for details.`);
      node.addEventListener('click', (event) => {
        event.stopPropagation();
        showTooltip(obj, node);
      });
      node.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
      node.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
      els.verseNodes.appendChild(node);
    });

    $('#shrimoCore').addEventListener('click', () => showTooltip(universeObjects[0], $('#shrimoCore')));
    $('#shrimoCore').addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showTooltip(universeObjects[0], $('#shrimoCore'));
      }
    });
  }

  function bindEntry() {
    els.enterVerse.addEventListener('click', enterVerse);
    if (els.skipIntro) els.skipIntro.addEventListener('click', skipEntry);
  }

  function enterVerse() {
    closeLaunchGuide();
    if (window.gsap && !prefersReducedMotion) {
      els.entryStatus.textContent = 'Opening Shrimo Verse flight path';
      gsap.timeline({ onComplete: skipEntry })
        .to('.entry-core', { scale: 4.6, opacity: 0.16, duration: 0.9, ease: 'expo.inOut' })
        .to('.entry-orbit', { scale: 2.2, opacity: 0.12, duration: 0.9, ease: 'expo.inOut' }, '<')
        .to('.entry-gate h1, .entry-copy, .entry-hints, .entry-actions, .entry-line', { y: -28, opacity: 0, duration: 0.48, stagger: 0.035, ease: 'power3.in' }, '<.1')
        .to('.entry-kicker', { letterSpacing: '0.38em', opacity: 0, duration: 0.38, ease: 'power2.out' }, '<')
        .to(els.entryGate, { opacity: 0, duration: 0.52, ease: 'power2.out' }, '-=.1');
    } else {
      skipEntry();
    }
  }

  function skipEntry() {
    els.entryGate.classList.add('is-hidden');
    els.entryGate.setAttribute('aria-hidden', 'true');
    document.body.classList.add('verse-ready');
    if (!isTouch) document.body.classList.add('has-ship-cursor');
    animateInitialWorld();
    if (!guideShown && !prefersReducedMotion) {
      guideShown = true;
      setTimeout(() => showLaunchGuide(false), 850);
    }
  }

  function animateInitialWorld() {
    if (!window.gsap || prefersReducedMotion) return;
    gsap.from('.shrimo-core', { scale: 0.72, opacity: 0, duration: 1, ease: 'expo.out' });
    gsap.from('.verse-node', { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.018, ease: 'power3.out', delay: 0.2 });
    gsap.from('.verse-copy.is-active > *', { y: 22, opacity: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out', delay: 0.25 });
  }

  function bindControls() {
    els.guidedMode.addEventListener('click', () => setMode('guided'));
    els.exploreMode.addEventListener('click', () => setMode('explore'));
    if (els.autoPlayMode) els.autoPlayMode.addEventListener('click', toggleAutoPlay);
    els.pauseMotion.addEventListener('click', togglePause);
    els.resetView.addEventListener('click', resetView);
    if (els.launchGuideButton) els.launchGuideButton.addEventListener('click', () => showLaunchGuide(true));
    if (els.guideNext) els.guideNext.addEventListener('click', nextGuideStep);
    if (els.guidePrev) els.guidePrev.addEventListener('click', prevGuideStep);
    if (els.guideSkip) els.guideSkip.addEventListener('click', closeLaunchGuide);
    els.brandReset.addEventListener('click', (event) => { event.preventDefault(); resetView(); });
    els.zoomIn.addEventListener('click', () => setZoom(worldZoom + 0.12));
    els.zoomOut.addEventListener('click', () => setZoom(worldZoom - 0.12));
    if (els.zoomRange) els.zoomRange.addEventListener('input', () => setZoom(Number(els.zoomRange.value) / 100, { keepPan: true }));
    els.tooltipClose.addEventListener('click', closeTooltip);
    els.verseStage.addEventListener('click', (event) => {
      if (!event.target.closest('.verse-node') && !event.target.closest('.shrimo-core') && !event.target.closest('.object-tooltip')) closeTooltip();
    });
    els.mobileCommand.addEventListener('click', () => {
      const open = els.verseControl.classList.toggle('menu-open');
      els.mobileCommand.setAttribute('aria-expanded', String(open));
    });
    $$('[data-zone]').forEach(btn => btn.addEventListener('click', () => setZone(Number(btn.dataset.zone))));
    $$('[data-jump-zone]').forEach(btn => btn.addEventListener('click', () => setZone(Number(btn.dataset.jumpZone))));
  }


  const desktopGuideSteps = [
    { selector: null, title: 'First Launch Guide', text: 'This is not a normal portfolio page. It behaves like a small interactive universe. Learn the basics, then explore freely.' },
    { selector: '#shipCursor', title: 'Pilot the explorer ship', text: 'Move your cursor to fly through Shrimo Verse. The yellow/orange flame reacts to motion.' },
    { selector: '.verse-node[data-id="html"]', title: 'Scan meaningful particles', text: 'Every particle has meaning. Hover or click a glowing node to inspect a technology, tool, product, proof, or contact path.' },
    { selector: '#zoomRange', title: 'Control the zoom level', text: 'Use the zoom bar or + / − buttons to move between universe view, cluster view, and object view.' },
    { selector: '#exploreMode', title: 'Switch to Free Explore', text: 'Free Explore lets you zoom, inspect, click, and play with the universe instead of following the guided flight.' },
    { selector: '#resetView', title: 'Return to Core anytime', text: 'If you feel lost, Return to Core resets zoom, closes tooltips, and brings you back to the starting orbit.' },
    { selector: '#autoPlayMode', title: 'Let Auto Play guide you', text: 'Auto Play moves from the core to each information layer and opens the right signal one by one.' },
    { selector: '.verse-cta', title: 'Launch when ready', text: 'When the signal feels right, use Launch Project to start a website, product, or web app discussion.' }
  ];

  const mobileGuideSteps = [
    { selector: null, title: 'Touch Launch Guide', text: 'On mobile, Shrimo Verse works differently. Swipe to travel, tap nodes to inspect, and use the bottom controls to zoom or reset.' },
    { selector: '.verse-node[data-id="html"]', title: 'Tap glowing nodes', text: 'Tap a particle to open its story in a mobile-friendly bottom sheet.' },
    { selector: '#zoomRange', title: 'Use the zoom control', text: 'Pinch in Free Explore or use the zoom bar to control how deep you are inside the universe.' },
    { selector: '#exploreMode', title: 'Free Explore mode', text: 'Use Free Explore when you want to play with the universe instead of moving zone by zone.' },
    { selector: '#resetView', title: 'Return to Core', text: 'Double-tap the world or use Return to Core if the view becomes too deep.' },
    { selector: '.mobile-command', title: 'Open controls', text: 'Use Menu to open Shrimo Verse controls on smaller screens.' }
  ];

  function getGuideSteps() {
    return isTouch ? mobileGuideSteps : desktopGuideSteps;
  }

  function showLaunchGuide(replay) {
    if (!els.launchGuide) return;
    guideStep = 0;
    guideVisible = true;
    document.body.classList.add('guide-active');
    els.launchGuide.classList.add('is-visible');
    els.launchGuide.setAttribute('aria-hidden', 'false');
    updateGuideStep();
    if (replay) closeTooltip();
  }

  function closeLaunchGuide() {
    guideVisible = false;
    document.body.classList.remove('guide-active');
    els.launchGuide?.classList.remove('is-visible');
    els.launchGuide?.setAttribute('aria-hidden', 'true');
    clearGuideFocus();
  }

  function clearGuideFocus() {
    $$('.guide-focus').forEach(el => el.classList.remove('guide-focus'));
  }

  function updateGuideStep() {
    const steps = getGuideSteps();
    const step = steps[guideStep] || steps[0];
    clearGuideFocus();
    if (els.guideTitle) els.guideTitle.textContent = step.title;
    if (els.guideText) els.guideText.textContent = step.text;
    if (els.guideStepCount) els.guideStepCount.textContent = `${guideStep} / ${steps.length - 1}`;
    if (els.guidePrev) els.guidePrev.hidden = guideStep === 0;
    if (els.guideNext) els.guideNext.textContent = guideStep === 0 ? 'Start Guide' : guideStep === steps.length - 1 ? 'Start Exploring' : 'Next';
    if (step.selector) {
      const target = $(step.selector);
      if (target) target.classList.add('guide-focus');
    }
  }

  function nextGuideStep() {
    const steps = getGuideSteps();
    if (guideStep >= steps.length - 1) {
      closeLaunchGuide();
      return;
    }
    guideStep += 1;
    if (guideStep === 2) setZone(1);
    if (guideStep === 5 && !isTouch) setMode('guided');
    updateGuideStep();
  }

  function prevGuideStep() {
    if (guideStep <= 0) return;
    guideStep -= 1;
    updateGuideStep();
  }

  const autoFocusByZone = {
    0: 'core',
    1: 'next',
    2: 'digiting',
    3: 'projects',
    4: 'review-khyati',
    5: 'start-project'
  };

  function toggleAutoPlay() {
    autoPlayActive = !autoPlayActive;
    document.body.classList.toggle('autoplay-active', autoPlayActive);
    if (els.autoPlayMode) {
      els.autoPlayMode.classList.toggle('is-active', autoPlayActive);
      els.autoPlayMode.textContent = autoPlayActive ? 'Stop Auto' : 'Auto Play';
    }
    if (autoPlayActive) startAutoPlay(); else stopAutoPlay();
  }

  function startAutoPlay() {
    setMode('guided');
    closeLaunchGuide();
    runAutoStep(true);
    autoPlayTimer = window.setInterval(() => runAutoStep(false), 4200);
  }

  function stopAutoPlay() {
    autoPlayActive = false;
    document.body.classList.remove('autoplay-active');
    if (autoPlayTimer) window.clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    if (els.autoPlayMode) {
      els.autoPlayMode.classList.remove('is-active');
      els.autoPlayMode.textContent = 'Auto Play';
    }
  }

  function runAutoStep(initial) {
    const targetZone = initial ? 0 : activeZone + 1;
    setZone(targetZone);
    window.setTimeout(() => {
      const focusId = autoFocusByZone[activeZone];
      const obj = universeObjects.find(item => item.id === focusId) || universeObjects.find(item => item.zone === activeZone);
      const target = focusId === 'core' ? $('#shrimoCore') : $(`.verse-node[data-id="${focusId}"]`);
      if (obj && target) showTooltip(obj, target);
    }, 850);
  }

  function bindWheelAndKeys() {
    window.addEventListener('wheel', (event) => {
      if (!document.body.classList.contains('verse-ready')) return;
      event.preventDefault();
      if (autoPlayActive) stopAutoPlay();
      if (mode === 'explore') {
        setZoom(worldZoom + (event.deltaY > 0 ? -0.08 : 0.08));
        return;
      }
      if (wheelLocked) return;
      wheelLocked = true;
      setTimeout(() => { wheelLocked = false; }, 650);
      if (event.deltaY > 0) setZone(activeZone + 1); else setZone(activeZone - 1);
    }, { passive: false });

    window.addEventListener('keydown', (event) => {
      if (!document.body.classList.contains('verse-ready')) return;
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); setZone(activeZone + 1); }
      if (['ArrowUp', 'PageUp'].includes(event.key)) { event.preventDefault(); setZone(activeZone - 1); }
      if (event.key === 'Escape') closeTooltip();
      if (event.key.toLowerCase() === 'r') resetView();
      if (event.key === '+' || event.key === '=') setZoom(worldZoom + 0.16);
      if (event.key === '-') setZoom(worldZoom - 0.16);
    });
  }

  function setMode(nextMode) {
    mode = nextMode;
    document.body.classList.toggle('explore-mode', mode === 'explore');
    els.guidedMode.classList.toggle('is-active', mode === 'guided');
    els.exploreMode.classList.toggle('is-active', mode === 'explore');
    if (mode === 'guided') setZone(activeZone);
  }

  function togglePause() {
    paused = !paused;
    document.body.classList.toggle('motion-paused', paused);
    els.pauseMotion.textContent = paused ? 'Resume Orbit' : 'Pause Orbit';
    if (threeRuntime) threeRuntime.paused = paused;
    if (window.gsap) paused ? gsap.globalTimeline.pause() : gsap.globalTimeline.resume();
  }

  function resetView() {
    stopAutoPlay();
    closeTooltip();
    setMode('guided');
    setZone(0, { immediate: false });
  }

  function setZone(nextZone, options = {}) {
    if (nextZone > zones.length - 1) nextZone = 0;
    if (nextZone < 0) nextZone = zones.length - 1;
    activeZone = nextZone;
    const target = viewTargets[activeZone];
    worldPan = { x: target.x, y: target.y };
    setZoom(target.zoom, { keepPan: true });

    $$('[data-zone-panel]').forEach(panel => panel.classList.toggle('is-active', Number(panel.dataset.zonePanel) === activeZone));
    $$('.state-dot').forEach(dot => dot.classList.toggle('is-active', Number(dot.dataset.zone) === activeZone));

    $$('.verse-node').forEach(node => {
      const nodeZone = Number(node.dataset.zone);
      const inZone = nodeZone === activeZone || (activeZone === 0 && nodeZone === 0);
      node.classList.toggle('is-active-zone', inZone);
      node.classList.toggle('is-dimmed', !inZone && activeZone !== 0);
    });

    if (activeZone === 3) animateProof();
    if (window.gsap && !options.immediate && !prefersReducedMotion) {
      gsap.fromTo(`[data-zone-panel="${activeZone}"] > *`, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.58, stagger: 0.06, ease: 'power3.out' });
    }
  }

  function setZoom(nextZoom, options = {}) {
    worldZoom = Math.max(0.72, Math.min(1.85, nextZoom));
    if (!options.keepPan && mode === 'explore') {
      worldPan.x *= 0.96;
      worldPan.y *= 0.96;
    }
    els.worldPlane.classList.toggle('zoomed', worldZoom > 1.16);
    els.worldPlane.classList.toggle('deep-zoom', worldZoom > 1.45);
    els.zoomValue.textContent = `${worldZoom.toFixed(1)}x`;
    if (els.zoomRange) els.zoomRange.value = String(Math.round(worldZoom * 100));
    applyWorldTransform();
  }

  function applyWorldTransform() {
    const x = `calc(-50% + ${worldPan.x}px)`;
    const y = `calc(-50% + ${worldPan.y}px)`;
    els.worldPlane.style.transform = `translate(${x}, ${y}) scale(${worldZoom})`;
  }

  function showTooltip(obj, target) {
    $$('.verse-node, .shrimo-core').forEach(node => node.classList.remove('is-selected', 'is-focused'));
    if (target) target.classList.add(target.classList.contains('shrimo-core') ? 'is-focused' : 'is-selected');
    els.tooltipCategory.textContent = obj.category;
    els.tooltipTitle.textContent = obj.label;
    els.tooltipDescription.textContent = obj.desc;
    els.tooltipUse.textContent = obj.use;
    if (obj.link) {
      els.tooltipAction.hidden = false;
      els.tooltipAction.href = obj.link;
      els.tooltipAction.textContent = obj.category === 'Conversion' ? 'Open Contact Path' : obj.category === 'Product' ? 'View Product' : 'Open Link';
    } else {
      els.tooltipAction.hidden = true;
      els.tooltipAction.removeAttribute('href');
    }
    els.tooltip.setAttribute('aria-hidden', 'false');
    els.tooltip.classList.add('is-visible');
    if (worldZoom < 1.16 && obj.type === 'tool') setZoom(1.28);
  }

  function closeTooltip() {
    els.tooltip.classList.remove('is-visible');
    els.tooltip.setAttribute('aria-hidden', 'true');
    $$('.verse-node, .shrimo-core').forEach(node => node.classList.remove('is-selected', 'is-focused'));
  }

  function animateProof() {
    if (proofAnimated) return;
    proofAnimated = true;
    $$('[data-count]').forEach(el => {
      const finalValue = Number(el.dataset.count);
      if (window.gsap && !prefersReducedMotion) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: finalValue,
          duration: 1.4,
          ease: 'power3.out',
          onUpdate: () => { el.textContent = Math.round(counter.value); }
        });
      } else {
        el.textContent = finalValue;
      }
    });
  }


  function bindTouchGestures() {
    if (!els.verseStage) return;

    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
    let startDistance = 0;
    let startZoom = 1;
    let isDragging = false;
    let moved = false;

    const interactiveSelector = 'a, button, .object-tooltip, input, textarea, select';
    const getDistance = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    els.verseStage.addEventListener('touchstart', (event) => {
      if (!document.body.classList.contains('verse-ready')) return;
      if (event.target.closest(interactiveSelector)) return;
      moved = false;
      if (event.touches.length === 2) {
        startDistance = getDistance(event.touches);
        startZoom = worldZoom;
        isDragging = false;
        event.preventDefault();
        return;
      }
      if (event.touches.length === 1) {
        startX = lastX = event.touches[0].clientX;
        startY = lastY = event.touches[0].clientY;
        isDragging = mode === 'explore';
      }
    }, { passive: false });

    els.verseStage.addEventListener('touchmove', (event) => {
      if (!document.body.classList.contains('verse-ready')) return;
      if (event.target.closest(interactiveSelector)) return;
      if (event.touches.length === 2 && startDistance > 0) {
        const distance = getDistance(event.touches);
        const scale = distance / startDistance;
        setZoom(startZoom * scale, { keepPan: true });
        moved = true;
        event.preventDefault();
        return;
      }
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        const totalDx = touch.clientX - startX;
        const totalDy = touch.clientY - startY;
        if (mode === 'explore' && isDragging) {
          worldPan.x += dx;
          worldPan.y += dy;
          applyWorldTransform();
          moved = true;
          event.preventDefault();
        } else if (Math.abs(totalYSafe(totalDy)) > 14 || Math.abs(totalDx) > 14) {
          moved = true;
        }
        lastX = touch.clientX;
        lastY = touch.clientY;
      }
    }, { passive: false });

    els.verseStage.addEventListener('touchend', (event) => {
      if (!document.body.classList.contains('verse-ready')) return;
      if (event.target.closest(interactiveSelector)) return;
      if (event.touches.length === 0 && event.changedTouches.length) {
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        const dx = endX - startX;
        const dy = endY - startY;
        if (mode === 'guided' && Math.abs(dy) > 46 && Math.abs(dy) > Math.abs(dx) * 1.15) {
          setZone(activeZone + (dy < 0 ? 1 : -1));
          event.preventDefault();
        }
      }
      startDistance = 0;
      isDragging = false;
    }, { passive: false });

    // Double tap quickly returns to the main universe view on touch devices.
    let lastTap = 0;
    els.verseStage.addEventListener('touchend', (event) => {
      if (event.target.closest(interactiveSelector)) return;
      const now = Date.now();
      if (!moved && now - lastTap < 280) {
        resetView();
        event.preventDefault();
      }
      lastTap = now;
    }, { passive: false });
  }

  function totalYSafe(value) {
    return Number.isFinite(value) ? value : 0;
  }

  function initCursor() {
    if (isTouch || prefersReducedMotion) return;
    let mouse = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };
    let previous = { x: -100, y: -100 };
    let lastTrail = 0;

    window.addEventListener('pointermove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    window.addEventListener('pointerdown', () => createTrail(current.x, current.y, true));

    function cursorFrame(time) {
      current.x += (mouse.x - current.x) * 0.2;
      current.y += (mouse.y - current.y) * 0.2;
      const angle = Math.atan2(current.y - previous.y, current.x - previous.x) * 180 / Math.PI + 90;
      els.shipCursor.style.transform = `translate3d(${current.x - 14}px, ${current.y - 18}px, 0) rotate(${angle}deg)`;
      const distance = Math.hypot(current.x - previous.x, current.y - previous.y);
      if (distance > 3 && time - lastTrail > 28) {
        createTrail(current.x, current.y, false);
        lastTrail = time;
      }
      previous.x = current.x;
      previous.y = current.y;
      requestAnimationFrame(cursorFrame);
    }
    requestAnimationFrame(cursorFrame);
  }

  function createTrail(x, y, burst) {
    const dot = document.createElement('span');
    dot.className = burst ? 'trail-dot is-burst' : 'trail-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = burst ? '18px' : '7px';
    dot.style.height = burst ? '18px' : '7px';
    els.cursorTrailLayer.appendChild(dot);
    setTimeout(() => dot.remove(), 650);
  }

  function initThree() {
    if (!window.THREE || !els.canvas) return;
    const canvas = els.canvas;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 95;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const nodePositions = universeObjects.flatMap((obj) => {
      const x = (obj.x - 800) / 18;
      const y = -(obj.y - 500) / 18;
      const z = obj.type === 'product' ? 8 : obj.type === 'tool' ? -10 : 0;
      return [x, y, z];
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
    const material = new THREE.PointsMaterial({ color: 0x67e8f9, size: 1.45, transparent: true, opacity: 0.84, depthWrite: false });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const ambientGeometry = new THREE.BufferGeometry();
    const ambient = [];
    for (let i = 0; i < 140; i++) {
      ambient.push((Math.random() - 0.5) * 130, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60);
    }
    ambientGeometry.setAttribute('position', new THREE.Float32BufferAttribute(ambient, 3));
    const ambientPoints = new THREE.Points(ambientGeometry, new THREE.PointsMaterial({ color: 0x22d3ee, size: 0.42, transparent: true, opacity: 0.32, depthWrite: false }));
    scene.add(ambientPoints);

    threeRuntime = { paused: false };
    let start = performance.now();
    function render() {
      if (!threeRuntime.paused) {
        const elapsed = (performance.now() - start) / 1000;
        points.rotation.z = elapsed * 0.015;
        points.rotation.y = Math.sin(elapsed * 0.28) * 0.08;
        ambientPoints.rotation.z = -elapsed * 0.01;
        ambientPoints.rotation.x = Math.sin(elapsed * 0.18) * 0.05;
        renderer.render(scene, camera);
      }
      requestAnimationFrame(render);
    }
    render();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('visibilitychange', () => {
      threeRuntime.paused = document.hidden || paused;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
