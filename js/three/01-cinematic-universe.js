/*
 * Cinematic universe renderer
 * ---------------------------
 * Adds the premium 3D/space layer behind the HTML portfolio.
 * It prefers real Three.js when available, then falls back to a lightweight
 * canvas renderer so the project never breaks offline or inside local testing.
 */
(function initCinematicUniverse(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createUniverse(context) {
    const { state, config } = context;
    const canvas = document.getElementById('verse3dCanvas');
    const stage = document.getElementById('verseStage');
    const hasReducedMotion = config.prefersReducedMotion;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const mood = { zone: 0, zoom: 1, pulse: 0, launch: 0 };
    let rendererApi = null;
    let started = false;

    function qualityMultiplier() {
      const mode = state.performanceMode || 'balanced';
      const capability = state.deviceCapability || 'medium';
      if (capability === 'low') return mode === 'cinematic' ? 0.38 : 0.18;
      if (capability === 'medium') return mode === 'cinematic' ? 0.72 : mode === 'balanced' ? 0.52 : 0.26;
      if (mode === 'essential') return 0.42;
      if (mode === 'balanced') return 0.72;
      return 1;
    }

    function init() {
      if (!canvas || !stage) return;

      rendererApi = tryCreateThreeRenderer() || createCanvasRenderer();
      rendererApi.resize();
      window.addEventListener('resize', rendererApi.resize, { passive: true });
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      document.addEventListener('visibilitychange', () => {
        state.pageHidden = document.hidden;
      });
      start();
    }

    function start() {
      if (started || !rendererApi) return;
      started = true;
      rendererApi.render(performance.now());
    }

    function onPointerMove(event) {
      const rect = stage.getBoundingClientRect();
      pointer.tx = ((event.clientX - rect.left) / Math.max(1, rect.width) - 0.5) * 2;
      pointer.ty = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
    }

    function setZone(zone) {
      mood.zone = zone;
      if (canvas) canvas.dataset.zone = String(zone);
      document.documentElement.style.setProperty('--cinematic-zone', String(zone));
    }

    function setZoom(zoom) {
      mood.zoom = zoom;
    }

    function launch() {
      mood.launch = 1;
      window.setTimeout(() => { mood.launch = 0; }, hasReducedMotion ? 120 : 1800);
    }

    function pulseAt() {
      mood.pulse = 1;
    }

    function setPaused(paused) {
      if (canvas) canvas.classList.toggle('is-paused', paused);
    }

    function setQuality(mode) {
      if (canvas) canvas.dataset.quality = mode;
      rendererApi?.setQuality?.(mode);
    }

    function tryCreateThreeRenderer() {
      const THREE = window.THREE;
      if (!THREE || !canvas) return null;

      try {
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 1200);
        camera.position.z = 260;

        const starCount = Math.max(state.deviceCapability === 'low' ? 36 : 90, Math.round((window.innerWidth < 760 ? 220 : 760) * qualityMultiplier()));
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount; i += 1) {
          const i3 = i * 3;
          starPositions[i3] = (Math.random() - 0.5) * 760;
          starPositions[i3 + 1] = (Math.random() - 0.5) * 460;
          starPositions[i3 + 2] = (Math.random() - 0.5) * 720;
        }

        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0x8df3ff, size: 1.15, transparent: true, opacity: 0.58, depthWrite: false });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        const core = new THREE.Mesh(
          new THREE.SphereGeometry(32, 32, 18),
          new THREE.MeshBasicMaterial({ color: 0x10e7ff, transparent: true, opacity: 0.14, wireframe: true })
        );
        scene.add(core);

        const rings = [86, 136, 192].map((radius, index) => {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(radius, 0.5, 8, 140),
            new THREE.MeshBasicMaterial({ color: index === 1 ? 0xff9f1c : 0x67e8f9, transparent: true, opacity: 0.18 })
          );
          ring.rotation.x = Math.PI * (0.55 + index * 0.04);
          ring.rotation.y = Math.PI * (0.1 + index * 0.06);
          scene.add(ring);
          return ring;
        });

        function resize() {
          const rect = canvas.parentElement.getBoundingClientRect();
          const width = Math.max(320, rect.width);
          const height = Math.max(320, rect.height);
          const dpr = Math.min(2, window.devicePixelRatio || 1);
          renderer.setPixelRatio(dpr);
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }

        function render(time) {
          window.requestAnimationFrame(render);
          if (state.pageHidden || state.paused) return;

          pointer.x += (pointer.tx - pointer.x) * 0.04;
          pointer.y += (pointer.ty - pointer.y) * 0.04;
          mood.pulse *= 0.93;

          const t = time * 0.001;
          stars.rotation.y = t * 0.025 + pointer.x * 0.08;
          stars.rotation.x = pointer.y * 0.035;
          core.rotation.x = t * 0.16;
          core.rotation.y = t * 0.24;
          core.scale.setScalar(1 + Math.sin(t * 1.5) * 0.04 + mood.pulse * 0.28);
          rings.forEach((ring, index) => {
            ring.rotation.z = t * (0.05 + index * 0.018) + mood.zone * 0.12;
            ring.scale.setScalar(1 + mood.zone * 0.015 + (mood.zoom - 1) * 0.05);
            ring.material.opacity = 0.13 + (mood.zone === index ? 0.08 : 0) + mood.pulse * 0.05;
          });

          camera.position.x += ((pointer.x * 22) - camera.position.x) * 0.025;
          camera.position.y += ((-pointer.y * 18) - camera.position.y) * 0.025;
          const zoneDepth = [0, -18, -34, -16, -26, -42][mood.zone] || 0;
          camera.position.z += ((260 + zoneDepth - mood.zoom * 18 - mood.launch * 60) - camera.position.z) * 0.025;
          camera.lookAt(scene.position);
          renderer.render(scene, camera);
        }

        function setQuality() {
          resize();
        }

        document.documentElement.classList.add('using-three-webgl');
        return { resize, render, setQuality };
      } catch (error) {
        console.warn('Three.js renderer failed. Falling back to cinematic canvas.', error);
        document.documentElement.classList.add('three-fallback-active');
        return null;
      }
    }

    function createCanvasRenderer() {
      const ctx = canvas.getContext('2d');
      const particles = [];
      let width = 1;
      let height = 1;
      let dpr = 1;

      function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        width = Math.max(320, rect.width);
        height = Math.max(320, rect.height);
        dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const target = Math.max(state.deviceCapability === 'low' ? 18 : 54, Math.round((window.innerWidth < 760 ? 90 : 260) * qualityMultiplier()));
        particles.length = 0;
        for (let i = 0; i < target; i += 1) {
          particles.push({
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * Math.max(width, height) * 0.54,
            z: Math.random(),
            speed: 0.00008 + Math.random() * 0.00018,
            size: 0.35 + Math.random() * 1.45,
            alpha: 0.12 + Math.random() * 0.42
          });
        }
      }

      function drawOrbit(cx, cy, radius, tilt, alpha, t) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * 0.00004 + tilt);
        ctx.scale(1, 0.36 + Math.sin(t * 0.0002 + tilt) * 0.035);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius, radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(103, 232, 249, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      function render(time) {
        window.requestAnimationFrame(render);
        if (state.pageHidden || state.paused) return;

        pointer.x += (pointer.tx - pointer.x) * 0.045;
        pointer.y += (pointer.ty - pointer.y) * 0.045;
        mood.pulse *= 0.92;

        const cx = width / 2 + pointer.x * 20;
        const cy = height / 2 + pointer.y * 12;
        ctx.clearRect(0, 0, width, height);

        const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(width, height) * 0.48);
        glow.addColorStop(0, `rgba(16, 231, 255, ${0.14 + mood.pulse * 0.12})`);
        glow.addColorStop(0.34, 'rgba(19, 78, 90, 0.12)');
        glow.addColorStop(1, 'rgba(3, 5, 8, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);

        particles.forEach((particle, index) => {
          if (!hasReducedMotion) particle.angle += particle.speed * (state.isLaunching ? 14 : 1) * (1 + mood.zone * 0.08);
          const depth = 0.38 + particle.z * 0.92;
          const radius = particle.radius * (0.76 + mood.zoom * 0.08 + mood.launch * 0.18);
          const x = cx + Math.cos(particle.angle + pointer.x * 0.06) * radius * depth;
          const y = cy + Math.sin(particle.angle + pointer.y * 0.04) * radius * depth * 0.58;
          const twinkle = 0.62 + Math.sin(time * 0.0018 + index) * 0.28;

          ctx.beginPath();
          ctx.arc(x, y, particle.size * depth * (1 + mood.pulse * 0.3), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${index % 7 === 0 ? '255, 159, 28' : '165, 243, 252'}, ${particle.alpha * twinkle})`;
          ctx.fill();
        });

        drawOrbit(cx, cy, 88 + mood.zone * 5, 0.22, 0.2 + mood.pulse * 0.1, time);
        drawOrbit(cx, cy, 148 + mood.zone * 4, -0.18, 0.16, time);
        drawOrbit(cx, cy, 218 + mood.zone * 3, 0.56, 0.1, time);

        ctx.beginPath();
        ctx.arc(cx, cy, 42 + Math.sin(time * 0.002) * 2 + mood.pulse * 18, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 159, 28, ${0.16 + mood.pulse * 0.22})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      function setQuality() {
        resize();
      }

      document.documentElement.classList.add('using-canvas-3d-fallback');
      return { resize, render, setQuality };
    }

    return { init, start, setZone, setZoom, launch, pulseAt, setPaused, setQuality };
  }

  SV.cinematic = { createUniverse };
})(window, document);
