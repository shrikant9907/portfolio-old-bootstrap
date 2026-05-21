(function () {
  'use strict';
  window.SV = window.SV || {};
  const rings = {
    inner: { rx: 160, ry: 86 },
    middle: { rx: 235, ry: 130 },
    outer: { rx: 320, ry: 176 },
    deep: { rx: 390, ry: 216 }
  };
  function polarPosition(index, total, ring) {
    const base = rings[ring] || rings.middle;
    const angle = ((Math.PI * 2) / Math.max(total, 1)) * index - Math.PI / 2;
    const mobile = matchMedia('(max-width: 767px)').matches;
    const scale = mobile ? 0.58 : matchMedia('(max-width: 1199px)').matches ? 0.78 : 1;
    return {
      x: `calc(50% + ${Math.cos(angle) * base.rx * scale}px)`,
      y: `calc(50% + ${Math.sin(angle) * base.ry * scale}px)`
    };
  }
  function clearLayers() {
    const { particleLayer, productLayer, proofLayer, reviewLayer } = window.SV.dom;
    [particleLayer, productLayer, proofLayer, reviewLayer].forEach(layer => { if (layer) layer.innerHTML = ''; });
  }
  function createNode(item, index, total, kind, ring = 'middle') {
    const pos = polarPosition(index, total, ring);
    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'verse-node';
    node.dataset.kind = kind;
    node.dataset.label = item.title || item.label;
    node.style.setProperty('--x', pos.x);
    node.style.setProperty('--y', pos.y);
    node.style.animationDelay = `${Math.min(index * 34, 420)}ms`;
    node.textContent = item.label;
    node.setAttribute('aria-label', `${item.title || item.label}. Inspect signal.`);
    node.addEventListener('click', () => window.SV.hud?.showDetail(item, kind, node));
    node.addEventListener('mouseenter', () => node.classList.add('is-lock-on'));
    node.addEventListener('mouseleave', () => node.classList.remove('is-lock-on'));
    return node;
  }
  function renderTechnology() {
    const { particleLayer } = window.SV.dom;
    if (!particleLayer) return;
    const items = window.SHRIMO_SKILLS || [];
    const groups = ['inner', 'middle', 'outer', 'deep'];
    groups.forEach(group => {
      const groupItems = items.filter(item => item.orbit === group);
      groupItems.forEach((item, index) => particleLayer.appendChild(createNode(item, index, groupItems.length, 'technology', group)));
    });
  }
  function renderProducts() {
    const { productLayer } = window.SV.dom;
    const items = window.SHRIMO_PRODUCTS || [];
    items.forEach((item, index) => productLayer.appendChild(createNode(item, index, items.length, 'product', 'middle')));
  }
  function renderProof() {
    const { proofLayer } = window.SV.dom;
    const items = window.SHRIMO_PROOF || [];
    items.forEach((item, index) => proofLayer.appendChild(createNode(item, index, items.length, 'proof', 'middle')));
  }
  function renderReviews() {
    const { reviewLayer } = window.SV.dom;
    const items = window.SHRIMO_REVIEWS || [];
    items.forEach((item, index) => reviewLayer.appendChild(createNode(item, index, items.length, 'review', 'middle')));
  }
  function renderForScene(sceneId) {
    clearLayers();
    if (sceneId === 'technology') renderTechnology();
    if (sceneId === 'products') renderProducts();
    if (sceneId === 'proof') renderProof();
    if (sceneId === 'clients') renderReviews();
  }
  window.SV.orbit = { renderForScene, clearLayers };
}());
