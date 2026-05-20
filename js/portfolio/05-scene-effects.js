/*
 * Scene effects and animation loop
 * --------------------------------
 * Owns frame-by-frame visuals: orbit positioning, starfield canvas,
 * reduced-motion handling, and page visibility pausing.
 */
(function initShrimoVerseSceneEffects(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createSceneEffects(context) {
    const { $, $$ } = SV.dom;
    const { els, state, config } = context;

    function animate(time = 0) {
      if (!state.paused && !state.pageHidden) updateNodePositions(time);
      requestAnimationFrame(animate);
    }

    function updateNodePositions(time = performance.now()) {
      if (!els.stage) return;

      const rect = els.stage.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const mobile = rect.width <= 780;
      const laptop = rect.height <= 760 && rect.width >= 781;
      const scaleRadius = mobile ? 0.45 : laptop ? 0.68 : 0.82;
      const timeScale = state.paused ? 0 : time / 1000;
      const orbitActive = state.currentZone === 0 || state.currentZone === 1;

      config.orbitParticles.forEach((obj, index) => {
        const node = obj.el;
        if (!node) return;

        if (!orbitActive) {
          node.style.opacity = '0.08';
          node.style.pointerEvents = 'none';
          return;
        }

        const ring = obj.radius * scaleRadius * (0.82 + state.zoom * 0.16);
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

        const angle = (obj.angle * Math.PI / 180) + (timeScale * speedBase) + obj.phase * 0.04;
        const wobble = config.prefersReducedMotion ? 0 : Math.sin(timeScale * 1.25 + index) * (mobile ? 1.5 : 4);
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

    function applyZoomVisibility() {
      const orbitActive = state.currentZone === 0 || state.currentZone === 1;
      const mobile = window.innerWidth <= 780;

      config.orbitParticles.forEach((obj, index) => {
        if (!obj.el) return;

        let visible = orbitActive;
        if (mobile && obj.depth !== 'core') visible = false;
        if (obj.depth === 'deep' && state.zoom < 1.14) visible = false;
        if (obj.depth === 'hidden' && state.zoom < 1.56) visible = false;
        if (state.currentZone === 0 && index > 11 && state.zoom < 1.2) visible = false;

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
        star.r = Math.random() * 1.15 + 0.18;
        star.a = Math.random() * 0.34 + 0.06;
        star.s = Math.random() * 0.22 + 0.035;
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
        if (state.pageHidden) {
          requestAnimationFrame(draw);
          return;
        }

        const width = window.innerWidth;
        const height = window.innerHeight;
        const cx = width / 2;
        const cy = height / 2;
        const launchElapsed = time - state.launchStart;
        const launchT = (state.isLaunching && launchElapsed > 800) ? Math.min(1, (launchElapsed - 800) / 1600) : 0;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#030508';
        ctx.fillRect(0, 0, width, height);

        stars.forEach((star) => {
          if (!state.paused && !config.prefersReducedMotion) {
            if (state.isLaunching) {
              const dx = star.x - cx;
              const dy = star.y - cy;
              const len = Math.hypot(dx, dy) || 1;
              const boost = 1.2 + launchT * 15;
              star.x += (dx / len) * boost;
              star.y += (dy / len) * boost;
              if (star.x < -80 || star.x > width + 80 || star.y < -80 || star.y > height + 80) resetStar(star, false);
            } else {
              star.y += star.s;
              if (star.y > height + 4) star.y = -4;
            }
          }

          const alpha = Math.min(0.76, star.a + launchT * 0.42);
          if (launchT > 0.08) {
            const dx = star.x - cx;
            const dy = star.y - cy;
            const len = Math.hypot(dx, dy) || 1;
            const tail = 8 + launchT * 34;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x - (dx / len) * tail, star.y - (dy / len) * tail);
            ctx.strokeStyle = `rgba(165,243,252,${alpha * 0.46})`;
            ctx.lineWidth = Math.max(0.4, star.r);
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

    function bindPageVisibility() {
      document.addEventListener('visibilitychange', () => {
        state.pageHidden = document.hidden;
      });
    }

    function bindCursor() {
      // The realistic rocket cursor is intentionally isolated in js/cursor-rocket.js.
      // This no-op keeps app flow clear without reintroducing duplicate cursor logic.
    }

    return {
      animate,
      updateNodePositions,
      applyZoomVisibility,
      initStars,
      bindPageVisibility,
      bindCursor
    };
  }

  SV.effects = { createSceneEffects };
})(window, document);
