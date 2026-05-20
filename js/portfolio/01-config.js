/*
 * Shrimo Verse configuration
 * --------------------------
 * Keep portfolio content and journey data here.
 * Developers can update zones, skills, products, proof points, and reviews
 * without touching animation or interaction code.
 */
(function initShrimoVerseConfig(window) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  function makeParticle(id, label, category, desc, use, angle, radius, type, depth = 'core') {
    return {
      id,
      label,
      category,
      desc,
      use,
      angle,
      radius,
      type,
      depth,
      phase: Math.random() * Math.PI * 2
    };
  }

  const ZONES = [
    { name: 'Arrival Core', hint: 'Start from the center.', title: 'Welcome to Shrimo Verse.', kicker: 'ARRIVAL CORE', copy: 'SV stays fixed in the center. Skills and technologies orbit around it like a living product universe.', focus: 'Identity + system architecture', proof: 'Static SEO content stays readable while enhanced layers add motion and WebGL depth.' },
    { name: 'Technology Orbit', hint: 'Skills and tools around the core.', title: 'Skills orbit the core.', kicker: 'TECHNOLOGY ORBIT', copy: 'Only technologies and tools orbit SV. Zoom in to reveal deeper tools without crowding the screen.', focus: 'Frontend stack intelligence', proof: 'Core, deep, and hidden skills are separated so the interface stays usable at every zoom level.' },
    { name: 'Product Missions', hint: 'One build file opens at a time.', title: 'Projects open as mission files.', kicker: 'PRODUCT MISSIONS', copy: 'Every product appears as a focused build file with problem, approach, stack, result, and next action. No crowded project grid.', focus: 'Product thinking + case study flow', proof: 'Every mission card shows problem, build approach, stack, result, and next action.' },
    { name: 'Proof Ring', hint: 'Delivery proof appears as data dots.', title: 'Proof becomes data.', kicker: 'PROOF RING', copy: 'Experience, delivered work, training, and product-building proof appear as separate signals, not mixed with the skill orbit.', focus: 'Trust signals and measurable history', proof: 'Numbers are presented as focused data signals instead of noisy generic achievement cards.' },
    { name: 'Client Transmissions', hint: 'One readable signal at a time.', title: 'Client transmissions confirm the path.', kicker: 'CLIENT TRANSMISSIONS', copy: 'Real reviews appear like incoming transmissions with one readable signal selected at a time.', focus: 'Readable social proof', proof: 'Signal cards keep testimonials easy to scan on desktop and mobile without overcrowding the orbit.' },
    { name: 'Launch Dock', hint: 'Contact paths are the final dock.', title: 'Reach the Launch Dock.', kicker: 'LAUNCH DOCK', copy: 'When the path is clear, use the Launch Dock to send a message, call, email, or open professional links.', focus: 'Conversion and project start', proof: 'The final screen keeps WhatsApp primary and all other contact paths secondary.' }
  ];

  const ORBIT_PARTICLES = [
    // Inner orbit: foundation technologies shown first.
    makeParticle('html', 'HTML5', 'Technology', 'The semantic base of readable, accessible, search-friendly websites.', 'Used for clean structure and long-term maintainability.', -90, 148, 'technology', 'core'),
    makeParticle('css', 'CSS3', 'Technology', 'The visual layer for responsive layout, spacing, motion, and visual polish.', 'Used for professional interfaces on desktop and mobile.', -18, 148, 'technology', 'core'),
    makeParticle('javascript', 'JavaScript', 'Technology', 'The interaction layer that powers controls, tooltips, zoom, and guided behavior.', 'Used for app-like experiences and interactive product UI.', 54, 148, 'technology', 'core'),
    makeParticle('typescript', 'TypeScript', 'Technology', 'Typed JavaScript for safer large-scale frontend and product codebases.', 'Useful for scalable systems and maintainable architecture.', 126, 148, 'technology', 'core'),

    // Middle orbit: frameworks, runtimes, and CMS skills.
    makeParticle('react', 'React', 'Technology', 'Component-based frontend library for dynamic product interfaces.', 'Best for dashboards, SaaS screens, and modular UI systems.', -96, 228, 'technology', 'core'),
    makeParticle('next', 'Next.js', 'Technology', 'Production React framework for fast, SEO-ready web applications.', 'Useful for websites, products, routing, rendering, and performance.', -42, 228, 'technology', 'core'),
    makeParticle('node', 'Node.js', 'Technology', 'JavaScript runtime for backend systems and API services.', 'Used for scalable backend logic and product systems.', 12, 228, 'technology', 'core'),
    makeParticle('express', 'Express.js', 'Technology', 'Node framework for REST APIs and server routes.', 'Useful for auth flows, dashboards, and modular backend systems.', 66, 228, 'technology', 'core'),
    makeParticle('php', 'PHP', 'Technology', 'Server-side language used in WordPress and custom systems.', 'Useful for CMS work, plugins, and practical web tools.', 120, 228, 'technology', 'core'),
    makeParticle('wordpress', 'WordPress', 'Technology', 'CMS platform for editable business websites and custom themes.', 'Best when clients need content control and fast publishing workflows.', 174, 228, 'technology', 'core'),

    // Outer orbit: databases, styling systems, libraries, and production tools.
    makeParticle('mongodb', 'MongoDB', 'Technology', 'Document database for flexible application data and dashboards.', 'Useful for product data, profiles, and dynamic applications.', -100, 306, 'technology', 'deep'),
    makeParticle('mysql', 'MySQL', 'Technology', 'Relational database for structured business and CMS data.', 'Useful for directories, ecommerce, and custom business systems.', -55, 306, 'technology', 'deep'),
    makeParticle('tailwind', 'Tailwind CSS', 'Technology', 'Utility-first CSS system for fast, consistent interface building.', 'Useful for design tokens and responsive component systems.', -10, 306, 'technology', 'deep'),
    makeParticle('bootstrap', 'Bootstrap', 'Technology', 'Responsive frontend framework for practical website layouts.', 'Useful for reliable business websites and admin interfaces.', 35, 306, 'technology', 'deep'),
    makeParticle('sass', 'Sass / SCSS', 'Technology', 'CSS preprocessor for structured, maintainable visual systems.', 'Useful for larger theme and component styling.', 80, 306, 'technology', 'deep'),
    makeParticle('jquery', 'jQuery', 'Technology', 'Classic JavaScript library still useful in legacy and WordPress projects.', 'Useful for maintaining older business sites and plugins.', 125, 306, 'technology', 'deep'),
    makeParticle('redux', 'Redux', 'Technology', 'Predictable frontend state management for complex interfaces.', 'Useful when larger applications need stable data flow.', 170, 306, 'technology', 'deep'),
    makeParticle('jwt', 'JWT Auth', 'Technology', 'Token-based authentication for secure logged-in web products.', 'Useful for role-based dashboards and protected APIs.', 215, 306, 'technology', 'deep'),

    // Hidden-depth orbit: only shown after deeper zoom.
    makeParticle('woocommerce', 'WooCommerce', 'Technology', 'WordPress ecommerce system for catalogs, orders, and payments.', 'Useful for online stores and business commerce workflows.', -82, 382, 'technology', 'hidden'),
    makeParticle('git', 'Git', 'Tool', 'Version control for professional development and deployment workflows.', 'Keeps work trackable, reversible, and collaborative.', -34, 382, 'tool', 'hidden'),
    makeParticle('figma', 'Figma', 'Tool', 'Design and interface planning tool for UI structure and handoff.', 'Useful for shaping layouts before development starts.', 14, 382, 'tool', 'hidden'),
    makeParticle('gsap', 'GSAP', 'Tool', 'Animation platform for premium web motion and scroll-based storytelling.', 'Used when motion needs to feel controlled and production-quality.', 62, 382, 'tool', 'hidden'),
    makeParticle('three', 'Three.js', 'Tool', 'WebGL library for 3D and immersive web visuals.', 'Useful for universe-like experiences and depth-driven interfaces.', 110, 382, 'tool', 'hidden'),
    makeParticle('apis', 'APIs', 'Tool', 'Connected systems and integrations for product functionality.', 'Useful for business automation and dynamic data flows.', 158, 382, 'tool', 'hidden'),
    makeParticle('performance', 'Performance', 'Tool', 'Speed, loading, and UX optimization.', 'Important for conversions, usability, and search quality.', 206, 382, 'tool', 'hidden'),
    makeParticle('hosting', 'Hosting', 'Tool', 'Deployment and server setup for production websites.', 'Used for making websites stable and accessible online.', 254, 382, 'tool', 'hidden'),
    makeParticle('analytics', 'Analytics', 'Tool', 'Measurement system for traffic and user behavior.', 'Helps understand what users do after launch.', 302, 382, 'tool', 'hidden'),
    makeParticle('search-console', 'Search Console', 'Tool', 'Google search monitoring and technical SEO insight.', 'Used to track indexing, issues, and search performance.', 350, 382, 'tool', 'hidden')
  ];

  const PRODUCTS = [
    {
      id: 'shrimo',
      title: 'Shrimo Innovations',
      desc: 'Software and web development company in Narmadapuram focused on websites, apps, SEO-ready pages, and practical digital products.',
      use: 'Parent brand and professional service identity behind Shrimo Verse.',
      problem: 'Businesses need a credible digital partner who can design, build, explain, and improve their web presence without making the process confusing.',
      approach: 'Created a focused company presence with service clarity, local trust, portfolio proof, and direct WhatsApp conversion paths.',
      stack: ['Brand system', 'Business website', 'Local SEO', 'Conversion UX'],
      result: 'A stronger service identity that positions Shrimo Innovations for serious website, app, and digital product leads.',
      link: 'https://shrimo.com/'
    },
    {
      id: 'digiting',
      title: 'Digiting Card',
      desc: 'Digital visiting card platform for professionals and local businesses that need a shareable online identity.',
      use: 'Shows product thinking around identity, sharing, onboarding, profiles, pricing, templates, and dashboard flows.',
      problem: 'Professionals still depend on printed cards or scattered links, making it difficult to share complete identity quickly.',
      approach: 'Built a reusable digital profile flow with template browsing, pricing clarity, profile creation, and contact-first sharing.',
      stack: ['Next.js direction', 'Profile UX', 'SEO content', 'Product dashboard'],
      result: 'Turns a simple contact card into a reusable online identity product with clear growth potential.',
      link: 'https://digitingcard.com/'
    },
    {
      id: 'photocopywala',
      title: 'Photocopywala',
      desc: 'Online document and image utility platform for students, shops, and common users.',
      use: 'Demonstrates practical tool-building, image/document workflows, and problem-first utility design.',
      problem: 'Users need quick passport photo, image crop, document, and print-related tools without installing heavy software.',
      approach: 'Designed lightweight browser tools with clear actions, fast output, and simple flows for daily document work.',
      stack: ['Utility tools', 'Image processing UX', 'SEO pages', 'Performance-first UI'],
      result: 'A practical platform direction for high-intent utility traffic and local shop/customer use cases.',
      link: 'https://photocopywala.in/'
    },
    {
      id: 'directory',
      title: 'Local Business Directory',
      desc: 'Business listing and discovery platform concept for organized local search and lead generation.',
      use: 'Shows planning around listings, user dashboards, review workflow, profile completion, and local SEO growth.',
      problem: 'Customers often struggle to find trusted nearby businesses, and local businesses struggle to appear professionally online.',
      approach: 'Planned listing profiles, review moderation, dashboard management, local SEO structure, and conversion-focused contact actions.',
      stack: ['Directory UX', 'Local SEO', 'Review flow', 'User dashboard'],
      result: 'A scalable platform direction for organized business discovery and local lead generation.',
      link: ''
    }
  ];

  const PROOFS = [
    { id: 'years', title: '12+', label: 'Years Experience', desc: 'Full-time practical web development experience across websites, CMS, frontend, backend, and product workflows.', context: 'This means the work is not based only on tutorials. It comes from long-term client delivery, debugging, redesign, and product-building practice.' },
    { id: 'projects', title: '300+', label: 'Projects Delivered', desc: 'Websites, business pages, tools, dashboards, and digital systems delivered across different needs and complexity levels.', context: 'This shows delivery discipline: understanding requirements, building usable interfaces, fixing issues, and taking projects live.' },
    { id: 'trained', title: '100+', label: 'Developers Trained', desc: 'Developers and learners guided through practical web development, communication, and implementation thinking.', context: 'Training experience improves clarity, explanation quality, and the ability to make complex projects understandable for clients.' },
    { id: 'products-proof', title: 'Multiple', label: 'Products Built', desc: 'Independent product directions built or planned inside the Shrimo ecosystem, including digital cards, utilities, and listing platforms.', context: 'This proves product thinking beyond client work: idea, UX, content, architecture, growth, and conversion planning.' }
  ];

  const REVIEWS = [
    { id: 'ram', name: 'Ram Dubey', company: 'Khyati Overseas Private Limited', rating: '5/5 Signal Quality', text: 'Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.', highlight: 'Stronger business presence and digital setup support.' },
    { id: 'rajeev', name: 'Rajeev T.', company: 'International client', rating: '5/5 Signal Quality', text: 'A project many people said could not be done was handled quickly, with practical suggestions and fast execution.', highlight: 'Fast practical execution on a difficult requirement.' },
    { id: 'sergio', name: 'Sergio W.', company: 'International client', rating: '5/5 Signal Quality', text: 'The work was delivered on time, communication stayed professional, and the final result matched expectations.', highlight: 'Professional communication and reliable delivery.' }
  ];

  const SYSTEM_METRICS = [
    { id: 'engine', label: 'Engine', value: 'Static + Enhanced', desc: 'SEO-first HTML with optional cinematic layers.' },
    { id: 'webgl', label: '3D Layer', value: 'Adaptive', desc: 'Three.js when available, canvas fallback when not.' },
    { id: 'motion', label: 'Motion', value: prefersReducedMotion ? 'Reduced' : 'Cinematic', desc: 'Respects user motion preferences.' },
    { id: 'controls', label: 'Controls', value: isTouch ? 'Touch' : 'Keyboard + Mouse', desc: 'Device-aware navigation and inspection.' }
  ];

  function getGuideSteps() {
    if (isTouch) {
      return [
        { title: 'Travel by touch', text: 'Swipe left or right to move between Shrimo Verse zones.', target: '.mobile-control-dock' },
        { title: 'Inspect particles', text: 'Tap a glowing skill node to open its story.', target: '.verse-node[data-id="html"]' },
        { title: 'Product missions', text: 'Projects open from clean mission dots, not crowded orbit labels.', target: '#productGalleryLayer' },
        { title: 'Client transmissions', text: 'Client reviews appear as readable transmission cards.', target: '#clientSignalLayer' },
        { title: 'Zoom in Explore', text: 'Use Orbit Zoom or pinch in Free Explore to reveal deeper tools.', target: '.zoom-dock' },
        { title: 'Launch Project', text: 'Use Launch when you are ready to start a project conversation.', target: '.mobile-control-dock a' }
      ];
    }

    return [
      { title: 'Pilot the rocket', text: 'Move your cursor to pilot the rocket cursor through Shrimo Verse.', target: '#rocketCursor' },
      { title: 'Inspect skills', text: 'Only skills and technologies orbit the SV core. Hover to scan them.', target: '.verse-node[data-id="html"]' },
      { title: 'Open details', text: 'Click a glowing node to open its story.', target: '.verse-node[data-id="react"]' },
      { title: 'Product missions', text: 'Projects open as focused mission files, one build story at a time.', target: '#productGalleryLayer' },
      { title: 'Client transmissions', text: 'Reviews appear as readable transmissions, not orbit clutter.', target: '#clientSignalLayer' },
      { title: 'Zoom deeper', text: 'Use Orbit Zoom to reveal hidden tools and details.', target: '.zoom-dock' },
      { title: 'Return to Core', text: 'Lost in the orbit? Return to Core anytime.', target: '#returnCore' }
    ];
  }

  SV.config = {
    prefersReducedMotion,
    isTouch,
    zones: ZONES,
    orbitParticles: ORBIT_PARTICLES,
    products: PRODUCTS,
    proofs: PROOFS,
    reviews: REVIEWS,
    systemMetrics: SYSTEM_METRICS,
    getGuideSteps
  };
})(window);
