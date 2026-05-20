/*
 * Typed terminal controller
 * -------------------------
 * Adds controlled typewriter storytelling in only the places where it helps:
 * entry status, core command line, and launch dock CTA line.
 */
(function initTypedTerminal(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createTypedTerminal(context) {
    const { config } = context;
    const Typed = window.Typed || SV.vendor?.Typed;
    const instances = [];
    let entryInstance = null;

    function type(target, strings, options = {}) {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (!el) return null;
      if (config.prefersReducedMotion || !Typed) {
        el.textContent = strings[0] || el.textContent;
        return null;
      }

      const instance = new Typed(el, {
        strings,
        typeSpeed: options.typeSpeed || 28,
        backSpeed: options.backSpeed || 12,
        backDelay: options.backDelay || 1600,
        startDelay: options.startDelay || 200,
        loop: options.loop !== false,
        showCursor: options.showCursor !== false,
        cursorChar: options.cursorChar || '_'
      });
      instances.push(instance);
      return instance;
    }

    function startEntry() {
      entryInstance = type('#entryStatus', [
        'SHRIMO VERSE MISSION CONTROL',
        'INITIALIZING 3D SKILL UNIVERSE',
        'SCANNING PRODUCTS • PROOF • CLIENT SIGNALS'
      ], { typeSpeed: 30, backDelay: 1350 });
      return entryInstance;
    }

    function stopEntry() {
      const entry = document.querySelector('#entryStatus');
      entryInstance?.destroy?.();
      entryInstance = null;
      if (entry) entry.textContent = 'ALIGNING ROCKET PATH';
    }

    function startCore() {
      type('#coreTerminal', [
        'Three.js-ready visual layer online.',
        'GSAP motion timeline armed.',
        'Typed.js command terminal active.',
        'Build mode: premium static portfolio.'
      ], { typeSpeed: 24, backDelay: 1500 });
    }

    function startLaunchDock() {
      type('#launchDockTyped', [
        'Ready to convert this experience into a real business website?',
        'Send a project brief. I will map the design, code, and launch path.',
        'Start with WhatsApp. Keep the mission simple and clear.'
      ], { typeSpeed: 22, backDelay: 1800 });
    }

    function setZone(zone) {
      const line = document.querySelector('#zoneTerminalLine');
      if (!line) return;
      const messages = [
        'Core stable. Explore the orbit.',
        'Technology scan active. Zoom deeper for hidden tools.',
        'Product dock connected. Inspect live systems.',
        'Proof stream open. Delivery metrics verified.',
        'Client signal channel active. Read transmissions.',
        'Launch dock ready. Start the project conversation.'
      ];
      line.textContent = messages[zone] || messages[0];
    }

    function destroy() {
      instances.splice(0).forEach((instance) => instance?.destroy?.());
    }

    return { startEntry, stopEntry, startCore, startLaunchDock, setZone, destroy };
  }

  SV.terminal = { createTypedTerminal };
})(window, document);
