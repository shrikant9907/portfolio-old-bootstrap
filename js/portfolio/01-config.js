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
    { name: 'Arrival Core', hint: 'Start from the center.', title: 'Welcome to Shrimo Verse.', kicker: 'ARRIVAL CORE', copy: 'SV stays fixed in the center. Skills and technologies orbit around it like a living product universe.' },
    { name: 'Technology Orbit', hint: 'Skills and tools around the core.', title: 'Skills orbit the core.', kicker: 'TECHNOLOGY ORBIT', copy: 'Only technologies and tools orbit SV. Zoom in to reveal deeper tools without crowding the screen.' },
    { name: 'Product Gallery', hint: 'Products are shown separately.', title: 'Products enter as gallery signals.', kicker: 'PRODUCT GALLERY', copy: 'Projects do not clutter the orbit. Use the product dots to inspect Shrimo, Digiting Card, Photocopywala, and the directory platform.' },
    { name: 'Proof Ring', hint: 'Delivery proof appears as data dots.', title: 'Proof becomes data.', kicker: 'PROOF RING', copy: 'Experience, delivered work, training, and product-building proof appear as separate signals, not mixed with the skill orbit.' },
    { name: 'Client Signals', hint: 'Reviews are readable, not crowded.', title: 'Client signals confirm the path.', kicker: 'CLIENT SIGNAL STREAM', copy: 'Real reviews appear as clean signal dots with one readable review panel at a time.' },
    { name: 'Launch Dock', hint: 'Contact paths are the final dock.', title: 'Reach the Launch Dock.', kicker: 'LAUNCH DOCK', copy: 'When the path is clear, use the Launch Dock to send a message, call, email, or open professional links.' }
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
    { id: 'shrimo', title: 'Shrimo Innovations', desc: 'Software and web development company focused on websites, apps, and digital products.', use: 'Main business identity behind Shrimo Verse.', link: 'https://shrimo.com/' },
    { id: 'digiting', title: 'Digiting Card', desc: 'Digital visiting card platform for professionals and businesses.', use: 'Built around digital identity, contact sharing, and online presence.', link: 'https://digitingcard.com/' },
    { id: 'photocopywala', title: 'Photocopywala', desc: 'Online tools and document utilities for common print and digital tasks.', use: 'Practical platform for people who need quick document services and tools.', link: 'https://photocopywala.in/' },
    { id: 'directory', title: 'Business Directory Platform', desc: 'Business listing and discovery platform concept for organized local search.', use: 'A product direction for local discovery and business visibility.', link: '' }
  ];

  const PROOFS = [
    { id: 'years', title: '12+', label: 'Years Experience', desc: 'More than a decade of web design, WordPress, PHP, frontend, React, and full-stack work.' },
    { id: 'projects', title: '300+', label: 'Projects Delivered', desc: 'A strong delivery record across websites, products, and business systems.' },
    { id: 'trained', title: '100+', label: 'Developers Trained', desc: 'Practical training, mentoring, communication, and system thinking.' },
    { id: 'products-proof', title: 'Multiple', label: 'Products Built', desc: 'Product ideas and platforms built inside the Shrimo ecosystem.' }
  ];

  const REVIEWS = [
    { id: 'ram', name: 'Ram Dubey', company: 'Khyati Overseas Private Limited', text: 'Shrimo supported us in website design, social setup, and digital growth work that helped us strengthen our export business presence.' },
    { id: 'rajeev', name: 'Rajeev T.', company: 'International client', text: 'A project many people said could not be done was handled quickly, with practical suggestions and fast execution.' },
    { id: 'sergio', name: 'Sergio W.', company: 'International client', text: 'The work was delivered on time, communication stayed professional, and the final result matched expectations.' }
  ];

  function getGuideSteps() {
    if (isTouch) {
      return [
        { title: 'Travel by touch', text: 'Swipe left or right to move between Shrimo Verse zones.', target: '.mobile-control-dock' },
        { title: 'Inspect particles', text: 'Tap a glowing skill node to open its story.', target: '.verse-node[data-id="html"]' },
        { title: 'Project dots', text: 'Projects open from clean dots, not crowded orbit labels.', target: '#productGalleryLayer' },
        { title: 'Review signals', text: 'Client reviews appear as readable signal cards.', target: '#clientSignalLayer' },
        { title: 'Zoom in Explore', text: 'Use Orbit Zoom or pinch in Free Explore to reveal deeper tools.', target: '.zoom-dock' },
        { title: 'Launch Project', text: 'Use Launch when you are ready to start a project conversation.', target: '.mobile-control-dock a' }
      ];
    }

    return [
      { title: 'Pilot the rocket', text: 'Move your cursor to pilot the rocket cursor through Shrimo Verse.', target: '#rocketCursor' },
      { title: 'Inspect skills', text: 'Only skills and technologies orbit the SV core. Hover to scan them.', target: '.verse-node[data-id="html"]' },
      { title: 'Open details', text: 'Click a glowing node to open its story.', target: '.verse-node[data-id="react"]' },
      { title: 'Project gallery', text: 'Projects are managed separately as dots and a focused gallery panel.', target: '#productGalleryLayer' },
      { title: 'Client signals', text: 'Reviews are readable signal dots, not orbit clutter.', target: '#clientSignalLayer' },
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
    getGuideSteps
  };
})(window);
