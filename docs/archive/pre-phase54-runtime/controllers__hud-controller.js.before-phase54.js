(function () {
  'use strict';
  window.SV = window.SV || {};
  function showDetail(item, kind, node) {
    const d = window.SV.dom;
    d.$$('.verse-node').forEach(n => n.classList.remove('is-selected'));
    node?.classList.add('is-selected');
    d.tooltipType.textContent = kind === 'technology' ? 'Technology Signal' : kind === 'product' ? 'Product Beacon' : kind === 'proof' ? 'Proof Signal' : 'Client Transmission';
    d.tooltipTitle.textContent = item.title || item.label;
    d.tooltipDesc.textContent = item.desc || '';
    d.tooltipUse.textContent = item.use || '';
    if (item.link) d.tooltipLink.href = item.link;
    else d.tooltipLink.setAttribute('href', '#');
    d.tooltip.classList.add('is-visible');
    d.tooltip.setAttribute('aria-hidden', 'false');
    window.SV.motion?.haptic('tap');
  }
  function toggleSettings(force) {
    const panel = window.SV.dom.settingsPanel;
    const open = typeof force === 'boolean' ? force : !panel.classList.contains('is-visible');
    window.SV.dom.tooltip?.classList.remove('is-visible');
    panel.classList.toggle('is-visible', open);
    panel.setAttribute('aria-hidden', String(!open));
  }
  function bind() {
    const d = window.SV.dom;
    d.tooltipClose?.addEventListener('click', () => window.SV.scene.closePanels(false));
    d.settingsToggle?.addEventListener('click', () => toggleSettings());
    d.settingsClose?.addEventListener('click', () => toggleSettings(false));
    d.brandReset?.addEventListener('click', () => window.SV.scene.setScene(0));
    d.returnCore?.addEventListener('click', () => window.SV.scene.setScene(0));
    d.prev?.addEventListener('click', () => window.SV.scene.previous());
    d.next?.addEventListener('click', () => window.SV.scene.next());
    d.svCore?.addEventListener('click', () => showDetail({ title: 'Shrimo Verse Core', desc: 'The fixed center of the universe. Every layer is explored around this core.', use: 'Use the controls to inspect skills, products, proof, client signals, and the launch path.' }, 'core', d.svCore));
    d.mobileDock?.addEventListener('click', (event) => {
      const item = event.target.closest('[data-mobile]');
      if (!item) return;
      const action = item.dataset.mobile;
      if (action === 'guide') window.SV.guide.show(true);
      if (action === 'prev') window.SV.scene.previous();
      if (action === 'next') window.SV.scene.next();
      if (action === 'core') window.SV.scene.setScene(0);
      if (action === 'settings') toggleSettings();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') window.SV.scene.closePanels();
      if (event.key === '[') window.SV.scene.previous();
      if (event.key === ']') window.SV.scene.next();
      const n = Number(event.key);
      if (n >= 1 && n <= window.SV.state.scenes.length) window.SV.scene.setScene(n - 1);
    });
  }
  window.SV.hud = { bind, showDetail, toggleSettings };
}());
