/*
 * Vendor bridge
 * -------------
 * Keeps third-party animation dependencies safe for a static HTML project.
 * - Uses real GSAP / Typed.js / Three.js when CDN scripts are available.
 * - Provides tiny local fallbacks when a CDN is blocked or the file is opened offline.
 * Future developers should call ShrimoVerse.vendor instead of calling globals directly.
 */
(function initVendorBridge(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function toArray(targets) {
    if (!targets) return [];
    if (typeof targets === 'string') return Array.from(document.querySelectorAll(targets));
    if (targets instanceof Element) return [targets];
    if (NodeList.prototype.isPrototypeOf(targets) || Array.isArray(targets)) return Array.from(targets).filter(Boolean);
    return [];
  }

  function createMiniGsap() {
    function apply(targets, vars, animate) {
      const elements = toArray(targets);
      const duration = Number(vars.duration || 0.35) * 1000;
      const delay = Number(vars.delay || 0) * 1000;
      const easing = vars.ease && String(vars.ease).includes('out') ? 'ease-out' : 'ease';
      const reserved = new Set(['duration', 'delay', 'ease', 'stagger', 'onComplete', 'clearProps']);

      elements.forEach((el, index) => {
        const stagger = Number(vars.stagger || 0) * 1000 * index;
        const styles = {};

        Object.keys(vars).forEach((key) => {
          if (reserved.has(key)) return;
          let value = vars[key];
          if (key === 'autoAlpha') {
            styles.opacity = String(value);
            styles.visibility = Number(value) <= 0 ? 'hidden' : 'visible';
            return;
          }
          if (key === 'x' || key === 'y' || key === 'scale') return;
          styles[key] = typeof value === 'number' && key !== 'opacity' ? `${value}px` : String(value);
        });

        const transforms = [];
        if (vars.x !== undefined) transforms.push(`translateX(${typeof vars.x === 'number' ? `${vars.x}px` : vars.x})`);
        if (vars.y !== undefined) transforms.push(`translateY(${typeof vars.y === 'number' ? `${vars.y}px` : vars.y})`);
        if (vars.scale !== undefined) transforms.push(`scale(${vars.scale})`);
        if (transforms.length) styles.transform = transforms.join(' ');

        window.setTimeout(() => {
          if (!animate || !el.animate) {
            Object.assign(el.style, styles);
            if (typeof vars.onComplete === 'function') vars.onComplete();
            return;
          }

          const from = {};
          Object.keys(styles).forEach((key) => { from[key] = getComputedStyle(el)[key]; });
          const animation = el.animate([from, styles], { duration, easing, fill: 'forwards' });
          animation.onfinish = () => {
            Object.assign(el.style, styles);
            if (vars.clearProps === 'all') el.removeAttribute('style');
            if (typeof vars.onComplete === 'function') vars.onComplete();
          };
        }, delay + stagger);
      });
    }

    return {
      to(targets, vars) { apply(targets, vars, true); },
      fromTo(targets, fromVars, toVars) {
        apply(targets, fromVars || {}, false);
        apply(targets, toVars || {}, true);
      },
      set(targets, vars) { apply(targets, vars, false); },
      timeline() {
        const queue = [];
        return {
          to(targets, vars) { queue.push(() => apply(targets, vars, true)); return this; },
          fromTo(targets, fromVars, toVars) { queue.push(() => { apply(targets, fromVars || {}, false); apply(targets, toVars || {}, true); }); return this; },
          play() { queue.forEach((job) => job()); return this; }
        };
      }
    };
  }

  class TypedFallback {
    constructor(target, options = {}) {
      this.el = typeof target === 'string' ? document.querySelector(target) : target;
      this.options = options;
      this.index = 0;
      this.char = 0;
      this.timer = null;
      this.destroyed = false;
      if (this.el) this.typeNext();
    }

    typeNext() {
      if (this.destroyed || !this.el) return;
      const strings = this.options.strings && this.options.strings.length ? this.options.strings : [this.el.textContent || ''];
      const value = strings[this.index % strings.length];
      this.el.textContent = value.slice(0, this.char);
      this.char += 1;

      if (this.char <= value.length) {
        this.timer = window.setTimeout(() => this.typeNext(), this.options.typeSpeed || 32);
        return;
      }

      if (this.options.loop && strings.length > 1) {
        this.timer = window.setTimeout(() => {
          this.index += 1;
          this.char = 0;
          this.typeNext();
        }, this.options.backDelay || 1400);
      }
    }

    destroy() {
      this.destroyed = true;
      window.clearTimeout(this.timer);
    }
  }

  SV.vendor = {
    gsap: window.gsap || createMiniGsap(),
    Typed: window.Typed || TypedFallback,
    hasRealGsap: Boolean(window.gsap),
    hasRealTyped: Boolean(window.Typed),
    hasThree: Boolean(window.THREE)
  };

  document.documentElement.classList.toggle('has-real-gsap', SV.vendor.hasRealGsap);
  document.documentElement.classList.toggle('has-real-typed', SV.vendor.hasRealTyped);
  document.documentElement.classList.toggle('has-three-js', SV.vendor.hasThree);
})(window, document);
