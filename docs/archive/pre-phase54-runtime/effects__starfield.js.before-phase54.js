(function () {
  'use strict';
  window.SV = window.SV || {};
  window.SV.effects = window.SV.effects || {};
  function initStars() {
    const canvas = window.SV.dom?.starCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let stars = [];
    let frame = 0;
    function resize() {
      width = canvas.width = Math.floor(window.innerWidth * Math.min(devicePixelRatio, 2));
      height = canvas.height = Math.floor(window.innerHeight * Math.min(devicePixelRatio, 2));
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      const capability = document.body.dataset.deviceCapability;
      const quality = document.body.dataset.qualityMode;
      const count = quality === 'essential' || capability === 'low' ? 28 : quality === 'cinematic' ? 120 : 72;
      stars = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.4 + .3, v: Math.random() * .18 + .04 }));
    }
    function draw() {
      if (document.hidden) { requestAnimationFrame(draw); return; }
      frame += 1;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(103,232,249,.72)';
      for (const s of stars) {
        s.y += s.v * Math.min(devicePixelRatio, 2);
        if (s.y > height) { s.y = 0; s.x = Math.random() * width; }
        ctx.globalAlpha = .18 + Math.sin(frame * .02 + s.x) * .08;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('storage', resize, { passive: true });
    window.SV.events?.on('scenechange', resize);
    window.SV.events?.on('qualitychange', resize);
    draw();
  }
  window.SV.effects.initStars = initStars;
}());
