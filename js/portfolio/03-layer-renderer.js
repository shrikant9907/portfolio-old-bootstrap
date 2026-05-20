/*
 * Shrimo Verse layer renderer
 * ---------------------------
 * Creates and updates visible universe objects:
 * 1. Orbit skill/technology particles
 * 2. Product gallery dots and card
 * 3. Proof ring dots and focus panel
 * 4. Client review signal dots and card
 */
(function initShrimoVerseLayerRenderer(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createLayerRenderer(context) {
    const { els, state, config } = context;
    const { $, $$, escapeAttr, initials } = SV.dom;

    function renderOrbitParticles() {
      els.layer.innerHTML = '';

      config.orbitParticles.forEach((obj) => {
        const node = document.createElement('button');
        node.type = 'button';
        node.className = `verse-node ${obj.type} depth-${obj.depth}`;
        node.dataset.id = obj.id;
        node.dataset.type = obj.type;
        node.dataset.depth = obj.depth;
        node.innerHTML = `<strong>${obj.label}</strong>`;
        node.setAttribute('aria-label', `${obj.label}. ${obj.category}. Click to inspect.`);

        node.addEventListener('mouseenter', () => {
          document.body.classList.add('cursor-lock');
          node.classList.add('is-hovered');
          state.hoverTooltipTimer = setTimeout(() => {
            context.actions.showObject(obj, node);
          }, 600);
        });

        node.addEventListener('mouseleave', () => {
          document.body.classList.remove('cursor-lock');
          node.classList.remove('is-hovered');
          clearTimeout(state.hoverTooltipTimer);
        });

        node.addEventListener('focus', () => {
          node.classList.add('is-hovered');
          state.hoverTooltipTimer = setTimeout(() => {
            context.actions.showObject(obj, node);
          }, 600);
        });

        node.addEventListener('blur', () => {
          node.classList.remove('is-hovered');
          clearTimeout(state.hoverTooltipTimer);
        });

        node.addEventListener('click', (event) => {
          event.stopPropagation();
          clearTimeout(state.hoverTooltipTimer);
          if (state.autoActive) context.actions.stopAutoFlight();
          context.actions.showObject(obj, node);
        });

        els.layer.appendChild(node);
        obj.el = node;
      });

      // SV core behaves like an inspectable object, not just decoration.
      els.core.addEventListener('click', () => context.actions.showObject({
        label: 'Shrimo Verse Core',
        category: 'Core',
        desc: 'The fixed center of this universe. Skills and technologies orbit here; projects and client signals open as separate focused layers.',
        use: 'Return here whenever you want to reset the view or restart exploration.'
      }, els.core));
    }

    function renderSeparatedLayers() {
      renderProductLayer();
      renderProofLayer();
      renderReviewLayer();
    }

    function renderProductLayer() {
      els.productLayer.innerHTML = `
        <div class="gallery-card" id="productCard" role="group" aria-live="polite"></div>
        <div class="gallery-dots" aria-label="Product dots">
          ${config.products.map((item, index) => `<button type="button" class="world-dot product-dot" data-product="${index}" aria-label="Open ${escapeAttr(item.title)}"><span></span></button>`).join('')}
        </div>`;

      $$('.product-dot', els.productLayer).forEach((dot) => {
        dot.addEventListener('click', () => {
          state.activeProduct = Number(dot.dataset.product);
          updateProductLayer();
          context.actions.setZone(2);
        });
        dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
        dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
      });

      updateProductLayer();
    }

    function updateProductLayer() {
      const item = config.products[state.activeProduct];
      const card = $('#productCard');
      if (!card || !item) return;

      const initials = item.title.split(/\s+/).map((word) => word[0]).join('').slice(0, 3);
      const whatsappText = encodeURIComponent(`Hi Shrikant, I saw your product ${item.title} and want to start a similar mission.`);

      card.innerHTML = `
        <p>Mission file ${state.activeProduct + 1}/${config.products.length}</p>
        <h3>${item.title}</h3>
        <span class="gallery-preview">${initials}</span>
        <em>${item.desc}</em>
        <small>${item.use}</small>
        <div class="case-study-strip" aria-label="Product case study summary">
          ${item.problem ? `<span><b>Challenge</b>${item.problem}</span>` : ''}
          ${item.approach ? `<span><b>Solution</b>${item.approach}</span>` : ''}
          ${item.stack ? `<span><b>Stack</b>${item.stack.join(', ')}</span>` : ''}
          ${item.result ? `<span><b>Result</b>${item.result}</span>` : ''}
        </div>
        ${item.stack ? `<div class="product-stack" aria-label="Technology stack">${item.stack.map((tech) => `<span>${tech}</span>`).join('')}</div>` : ''}
        <div class="product-actions">
          ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="product-btn primary-path">Open Project Path</a>` : '<button type="button" class="disabled-path" disabled>Concept Path</button>'}
          <a href="https://wa.me/919907472038?text=${whatsappText}" target="_blank" rel="noopener" class="product-btn secondary-path">Start Similar Mission</a>
        </div>
        <div class="product-step-actions" aria-label="Product mission navigation">
          <button type="button" data-product-step="prev">Previous</button>
          <button type="button" data-product-step="next">Next Mission</button>
        </div>`;

      $$('.product-dot', els.productLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === state.activeProduct));
      $$( '[data-product-step]', card).forEach((btn) => {
        btn.addEventListener('click', () => {
          const direction = btn.dataset.productStep === 'next' ? 1 : -1;
          state.activeProduct = (state.activeProduct + direction + config.products.length) % config.products.length;
          updateProductLayer();
          SV.haptics?.trigger?.('tap');
        }, { once: true });
      });
      positionDots('.product-dot', state.activeProduct, 176);
      context.motion?.playCardRefresh?.('#productCard');
    }

    function renderProofLayer() {
      els.proofLayer.innerHTML = `
        <div class="proof-focus" id="proofFocus" aria-live="polite"></div>
        <div class="proof-dots" aria-label="Proof signals">
          ${config.proofs.map((item, index) => `<button type="button" class="world-dot proof-dot" data-proof="${index}" aria-label="Inspect ${escapeAttr(item.label)}"><strong>${item.title}</strong></button>`).join('')}
        </div>`;

      $$('.proof-dot', els.proofLayer).forEach((dot) => {
        dot.addEventListener('click', () => {
          state.activeProof = Number(dot.dataset.proof);
          updateProofLayer();
          context.actions.setZone(3);
        });
        dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
        dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
      });

      updateProofLayer();
    }

    function updateProofLayer() {
      const item = config.proofs[state.activeProof];
      const focus = $('#proofFocus');
      if (!focus || !item) return;

      focus.innerHTML = `<p>Proof signal</p><h3>${item.title}</h3><strong>${item.label}</strong><em>${item.desc}</em><small class="proof-context">${item.context || 'Validated through delivery history, client work, training, and product-building practice.'}</small><div class="proof-step-actions" aria-label="Proof signal navigation"><button type="button" data-proof-step="prev">Previous</button><button type="button" data-proof-step="next">Next Signal</button></div>`;
      $$('.proof-dot', els.proofLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === state.activeProof));
      $$( '[data-proof-step]', focus).forEach((btn) => {
        btn.addEventListener('click', () => {
          const direction = btn.dataset.proofStep === 'next' ? 1 : -1;
          state.activeProof = (state.activeProof + direction + config.proofs.length) % config.proofs.length;
          updateProofLayer();
          SV.haptics?.trigger?.('tap');
        }, { once: true });
      });
      positionDots('.proof-dot', state.activeProof, 162);
      context.motion?.playCardRefresh?.('#proofFocus');
    }

    function renderReviewLayer() {
      els.reviewLayer.innerHTML = `
        <div class="review-card" id="reviewCard" aria-live="polite"></div>
        <div class="review-dots" aria-label="Client review signal dots">
          ${config.reviews.map((item, index) => `<button type="button" class="world-dot review-dot" data-review="${index}" aria-label="Read review by ${escapeAttr(item.name)}"><span>${initials(item.name)}</span></button>`).join('')}
        </div>`;

      $$('.review-dot', els.reviewLayer).forEach((dot) => {
        dot.addEventListener('click', () => {
          state.activeReview = Number(dot.dataset.review);
          updateReviewLayer();
          context.actions.setZone(4);
        });
        dot.addEventListener('mouseenter', () => document.body.classList.add('cursor-lock'));
        dot.addEventListener('mouseleave', () => document.body.classList.remove('cursor-lock'));
      });

      updateReviewLayer();
    }

    function updateReviewLayer() {
      const item = config.reviews[state.activeReview];
      const card = $('#reviewCard');
      if (!card || !item) return;

      card.innerHTML = `<p>Client transmission ${state.activeReview + 1}/${config.reviews.length}</p><span class="review-stars" aria-label="Five star signal quality">★★★★★</span><blockquote>${item.text}</blockquote><strong>${item.name}</strong><em>${item.company}</em><small class="signal-note">${item.highlight || 'Readable proof signal selected from real delivery conversations.'}</small><span class="signal-quality">${item.rating || '5/5 Signal Quality'}</span><div class="review-step-actions" aria-label="Review transmission navigation"><button type="button" data-review-step="prev">Previous</button><button type="button" data-review-step="next">Next Signal</button></div>`;
      $$('.review-dot', els.reviewLayer).forEach((dot, index) => dot.classList.toggle('is-active', index === state.activeReview));
      $$( '[data-review-step]', card).forEach((btn) => {
        btn.addEventListener('click', () => {
          const direction = btn.dataset.reviewStep === 'next' ? 1 : -1;
          state.activeReview = (state.activeReview + direction + config.reviews.length) % config.reviews.length;
          updateReviewLayer();
          SV.haptics?.trigger?.('tap');
        }, { once: true });
      });
      positionDots('.review-dot', state.activeReview, 152);
      context.motion?.playCardRefresh?.('#reviewCard');
    }

    function positionDots(selector, activeIndex, radius) {
      $$(selector).forEach((dot, index, all) => {
        const total = all.length;
        const angle = ((index / total) * Math.PI * 2) - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        dot.style.setProperty('--dot-x', `${x}px`);
        dot.style.setProperty('--dot-y', `${y}px`);
        dot.classList.toggle('is-active', index === activeIndex);
      });
    }

    function animateProofNumbers() {
      if (state.proofAnimated) return;
      state.proofAnimated = true;

      const strongs = $$('.proof-dot strong');
      const targets = [
        { element: strongs[0], max: 12, suffix: '+' },
        { element: strongs[1], max: 300, suffix: '+' },
        { element: strongs[2], max: 100, suffix: '+' }
      ];

      targets.forEach(({ element, max, suffix }) => {
        if (!element) return;
        let current = 0;
        const duration = 1000;
        const stepTime = Math.max(15, Math.floor(duration / max));
        const timer = setInterval(() => {
          current += Math.ceil(max / 25);
          if (current >= max) {
            current = max;
            clearInterval(timer);
          }
          element.textContent = `${current}${suffix}`;
        }, stepTime);
      });
    }

    return {
      renderOrbitParticles,
      renderSeparatedLayers,
      updateProductLayer,
      updateProofLayer,
      updateReviewLayer,
      animateProofNumbers
    };
  }

  SV.layers = { createLayerRenderer };
})(window, document);
