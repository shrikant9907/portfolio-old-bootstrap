/*
 * Motion system
 * -------------
 * Uses GSAP when it exists and falls back to the vendor bridge mini animator.
 * This file owns cinematic choreography only; it should not contain business data.
 */
(function initMotionSystem(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createMotionSystem(context) {
    const { config, els } = context;
    const gsap = window.gsap || SV.vendor?.gsap;
    const enabled = Boolean(gsap) && !config.prefersReducedMotion;

    function primeInitialState() {
      if (!enabled) return;
      gsap.set([els.missionPanel, els.stateReadout], { autoAlpha: 0, y: 18 });
      gsap.set('.verse-node', { autoAlpha: 0, scale: 0.88 });
    }

    function revealInterface() {
      if (!enabled) {
        [els.missionPanel, els.stateReadout].forEach((el) => {
          if (!el) return;
          el.style.opacity = '1';
          el.style.visibility = 'visible';
        });
        return;
      }

      gsap.to([els.stateReadout, els.missionPanel], {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        stagger: 0.08,
        ease: 'power3.out'
      });

      gsap.to('.verse-node', {
        autoAlpha: 1,
        scale: 1,
        duration: 0.62,
        stagger: 0.018,
        delay: 0.18,
        ease: 'back.out(1.4)'
      });
    }

    function playEntryLaunch() {
      document.documentElement.classList.add('mission-launching');
      if (!enabled) return;

      gsap.fromTo('.entry-space',
        { scale: 0.94, autoAlpha: 0.75 },
        { scale: 1.12, autoAlpha: 1, duration: 1.1, ease: 'power3.out' }
      );
      gsap.to('.entry-orbit', {
        scale: 1.18,
        autoAlpha: 0.82,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power2.out'
      });
    }

    function playZoneChange(zone) {
      document.documentElement.style.setProperty('--active-zone', String(zone));
      if (!enabled) return;

      gsap.fromTo(els.missionPanel,
        { autoAlpha: 0.68, y: 14, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.46, ease: 'power3.out' }
      );

      const activeLayer = zone === 2 ? els.productLayer : zone === 3 ? els.proofLayer : zone === 4 ? els.reviewLayer : null;
      if (activeLayer) {
        gsap.fromTo(activeLayer,
          { autoAlpha: 0, y: 18, scale: 0.975 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.56, ease: 'power3.out' }
        );
      }
    }

    function playTooltipOpen(target) {
      if (!enabled || !els.tooltip) return;
      gsap.fromTo(els.tooltip,
        { autoAlpha: 0, y: 16, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.36, ease: 'power3.out' }
      );
      if (target) {
        gsap.fromTo(target, { scale: 0.94 }, { scale: 1.06, duration: 0.22, ease: 'power2.out' });
        gsap.to(target, { scale: 1, duration: 0.22, delay: 0.22, ease: 'power2.out' });
      }
    }

    function playCardRefresh(selector) {
      if (!enabled) return;
      gsap.fromTo(selector,
        { autoAlpha: 0.7, y: 12, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.34, ease: 'power2.out' }
      );
    }

    return {
      primeInitialState,
      revealInterface,
      playEntryLaunch,
      playZoneChange,
      playTooltipOpen,
      playCardRefresh
    };
  }

  SV.motion = { createMotionSystem };
})(window, document);
