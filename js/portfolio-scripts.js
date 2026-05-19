(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDesktopStory = window.innerWidth > 900 && !prefersReducedMotion;
  var currentState = 0;
  var stateCount = 6;
  var countersStarted = false;
  var lenis = null;

  var qs = function (selector, scope) { return (scope || document).querySelector(selector); };
  var qsa = function (selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); };

  function setProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    var bar = qs('.scroll-progress span');
    if (bar) bar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }

  function setActiveState(index) {
    currentState = Math.max(0, Math.min(stateCount - 1, index));
    qsa('[data-target-state]').forEach(function (item) {
      var state = Number(item.getAttribute('data-target-state'));
      item.classList.toggle('is-active', state === currentState);
    });
    document.body.setAttribute('data-current-state', String(currentState));
    if (currentState === 3) runCounters();
  }

  function scrollToState(index) {
    var story = qs('#studio-scroll-story');
    if (!story) return;
    var bounded = Math.max(0, Math.min(stateCount - 1, Number(index) || 0));
    var target;
    if (isDesktopStory) {
      var scrollable = story.offsetHeight - window.innerHeight;
      target = story.offsetTop + (scrollable * (bounded / (stateCount - 1)));
    } else {
      var panels = qsa('.story-panel');
      target = panels[bounded] ? panels[bounded].getBoundingClientRect().top + window.scrollY - 90 : story.offsetTop;
    }
    if (lenis && typeof lenis.scrollTo === 'function') lenis.scrollTo(target, { duration: 1.15 });
    else window.scrollTo({ top: target, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  function bindNavigation() {
    qsa('[data-target-state]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        var state = trigger.getAttribute('data-target-state');
        if (state !== null) {
          event.preventDefault();
          closeMobileMenu();
          scrollToState(Number(state));
        }
      });
    });

    var toggle = qs('.mobile-toggle');
    var nav = qs('#studioNav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        var use = toggle.querySelector('use');
        if (use) use.setAttribute('href', isOpen ? '#icon-close' : '#icon-menu');
      });
    }
  }

  function closeMobileMenu() {
    var nav = qs('#studioNav');
    var toggle = qs('.mobile-toggle');
    if (nav) nav.classList.remove('is-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      var use = toggle.querySelector('use');
      if (use) use.setAttribute('href', '#icon-menu');
    }
  }

  function initLenis() {
    if (prefersReducedMotion || !window.Lenis) return;
    lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
    }
  }

  function initStory() {
    if (!window.gsap || !window.ScrollTrigger) {
      document.body.classList.add('story-fallback');
      qsa('.story-panel').forEach(function (panel) { panel.classList.add('is-visible'); });
      setActiveState(0);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (!isDesktopStory) {
      qsa('.story-panel').forEach(function (panel) { panel.classList.add('is-visible'); });
      setActiveState(0);
      window.addEventListener('scroll', updateMobileState, { passive: true });
      updateMobileState();
      return;
    }

    var panels = qsa('.story-panel');
    var nodes = qsa('.capability-node');
    var projects = qsa('.project-tile');
    var proofItems = qsa('.proof-engine div');
    var trustItems = qsa('.trust-stream span');
    var contactItems = qsa('.contact-grid a');

    if (window.SplitType) {
      try { new SplitType('.story-headline', { types: 'words' }); } catch (error) { /* keep fallback */ }
    }

    gsap.set(panels, { autoAlpha: 0, y: 70, scale: .98 });
    gsap.set('.identity-panel', { autoAlpha: 1, y: 0, scale: 1 });
    gsap.set(nodes, { autoAlpha: .14, scale: .86, y: 14 });
    gsap.set(projects, { autoAlpha: 0, y: 38, rotateX: -8, transformPerspective: 800 });
    gsap.set(proofItems, { autoAlpha: 0, y: 34, scale: .92 });
    gsap.set(trustItems, { autoAlpha: 0, x: -30 });
    gsap.set(contactItems, { autoAlpha: 0, y: 24 });
    gsap.set('.story-headline .word', { yPercent: 112, opacity: 0 });

    gsap.to(nodes, {
      y: function (i) { return i % 2 ? -12 : 12; },
      duration: function (i) { return 4.2 + i * .28; },
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: .08
    });
    gsap.to('.crystal-core', { y: -10, duration: 5.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.connection-map', { rotate: 1.4, scale: 1.015, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 50%' });

    var tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: '#studio-scroll-story',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.story-stage',
        scrub: 1,
        anticipatePin: 1,
        onUpdate: function (self) {
          var state = Math.round(self.progress * (stateCount - 1));
          if (state !== currentState) setActiveState(state);
        }
      }
    });

    tl.addLabel('arrival')
      .to('.story-headline .word', { yPercent: 0, opacity: 1, stagger: .035, duration: .62 }, 'arrival+=.05')
      .from('.identity-panel .eyebrow, .identity-panel .story-copy, .identity-panel .story-actions, .identity-panel .proof-line', { y: 24, autoAlpha: 0, stagger: .08, duration: .55 }, 'arrival+=.18')
      .from('.crystal-core', { scale: .72, autoAlpha: 0, duration: .9, ease: 'expo.out' }, 'arrival+=.08')
      .fromTo('.map-line', { strokeDashoffset: 180 }, { strokeDashoffset: 0, duration: .8, stagger: .08 }, 'arrival+=.1');

    tl.addLabel('capability', '+=.8')
      .to('.identity-panel', { autoAlpha: 0, y: -70, scale: .96, duration: .55 }, 'capability')
      .to('.capability-panel', { autoAlpha: 1, y: 0, scale: 1, duration: .65 }, 'capability+=.14')
      .to(nodes, { autoAlpha: 1, scale: 1, y: 0, stagger: .05, duration: .55 }, 'capability+=.04')
      .to('.crystal-core', { scale: .88, duration: .65 }, 'capability');

    tl.addLabel('projects', '+=.9')
      .to('.capability-panel', { autoAlpha: 0, y: -60, scale: .97, duration: .55 }, 'projects')
      .to(nodes, { autoAlpha: .38, scale: .92, duration: .45 }, 'projects')
      .to('.project-panel', { autoAlpha: 1, y: 0, scale: 1, duration: .65 }, 'projects+=.12')
      .to(projects, { autoAlpha: 1, y: 0, rotateX: 0, stagger: .08, duration: .58 }, 'projects+=.18')
      .to('.crystal-core', { scale: .76, x: 44, duration: .7 }, 'projects');

    tl.addLabel('proof', '+=.9')
      .to('.project-panel', { autoAlpha: 0, y: -60, scale: .98, duration: .55 }, 'proof')
      .to(projects, { autoAlpha: 0, y: -30, stagger: .03, duration: .35 }, 'proof')
      .to('.proof-panel', { autoAlpha: 1, y: 0, scale: 1, duration: .65 }, 'proof+=.12')
      .to(proofItems, { autoAlpha: 1, y: 0, scale: 1, stagger: .07, duration: .58 }, 'proof+=.2')
      .to('.crystal-core', { scale: 1.03, x: 0, duration: .7 }, 'proof');

    tl.addLabel('trust', '+=.9')
      .to('.proof-panel', { autoAlpha: 0, y: -60, scale: .97, duration: .55 }, 'trust')
      .to('.trust-panel', { autoAlpha: 1, y: 0, scale: 1, duration: .65 }, 'trust+=.12')
      .to(trustItems, { autoAlpha: 1, x: 0, stagger: .06, duration: .48 }, 'trust+=.2')
      .to('.crystal-core', { scale: .82, x: -20, duration: .7 }, 'trust');

    tl.addLabel('contact', '+=.9')
      .to('.trust-panel', { autoAlpha: 0, y: -60, scale: .98, duration: .55 }, 'contact')
      .to('.contact-panel', { autoAlpha: 1, y: 0, scale: 1, duration: .65 }, 'contact+=.12')
      .to(contactItems, { autoAlpha: 1, y: 0, stagger: .07, duration: .45 }, 'contact+=.24')
      .to(nodes, { autoAlpha: .18, duration: .5 }, 'contact')
      .to('.crystal-core', { scale: 1.14, x: 66, duration: .8 }, 'contact');
  }

  function updateMobileState() {
    var panels = qsa('.story-panel');
    var closest = 0;
    var minDistance = Infinity;
    panels.forEach(function (panel, index) {
      var distance = Math.abs(panel.getBoundingClientRect().top - 140);
      if (distance < minDistance) { minDistance = distance; closest = index; }
    });
    setActiveState(closest);
  }

  function runCounters() {
    if (countersStarted) return;
    countersStarted = true;
    qsa('.count').forEach(function (item) {
      var end = Number(item.getAttribute('data-value') || 0);
      var suffix = item.getAttribute('data-suffix') || '';
      if (window.gsap && !prefersReducedMotion) {
        var obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration: 1.4,
          ease: 'power3.out',
          onUpdate: function () { item.textContent = Math.round(obj.val) + suffix; }
        });
      } else {
        item.textContent = end + suffix;
      }
    });
  }

  function initThreeField() {
    if (!window.THREE || prefersReducedMotion) return;
    var canvas = qs('#studioCanvas');
    if (!canvas) return;

    try {
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 260;
      var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.setSize(window.innerWidth, window.innerHeight);

      var count = window.innerWidth < 900 ? 160 : 320;
      var positions = new Float32Array(count * 3);
      var colors = new Float32Array(count * 3);
      for (var i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - .5) * 680;
        positions[i * 3 + 1] = (Math.random() - .5) * 420;
        positions[i * 3 + 2] = (Math.random() - .5) * 360;
        colors[i * 3] = .13;
        colors[i * 3 + 1] = .82 + Math.random() * .18;
        colors[i * 3 + 2] = .93 + Math.random() * .07;
      }
      var geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      var material = new THREE.PointsMaterial({ size: 1.65, vertexColors: true, transparent: true, opacity: .72, depthWrite: false });
      var points = new THREE.Points(geometry, material);
      scene.add(points);

      function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener('resize', resize);

      function animate() {
        points.rotation.y += .0008;
        points.rotation.x += .00024;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    } catch (error) {
      canvas.style.display = 'none';
    }
  }

  function handleHeaderScroll() {
    var header = qs('#siteHeader');
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  }

  function init() {
    bindNavigation();
    initLenis();
    initThreeField();
    initStory();
    setProgress();
    handleHeaderScroll();
    window.addEventListener('scroll', function () { setProgress(); handleHeaderScroll(); }, { passive: true });
    window.addEventListener('resize', function () { setProgress(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
