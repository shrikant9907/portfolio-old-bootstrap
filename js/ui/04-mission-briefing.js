/*
 * Mission Briefing Drawer
 * -----------------------
 * v0.0.5 adds a deeper explanation layer for clients and developers.
 * The main universe stays visual; this drawer explains the product thinking,
 * active zone purpose, selected project context, and next useful action.
 */
(function initMissionBriefing(window, document) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createMissionBriefing(context) {
    const { els, state, config } = context;

    function init() {
      if (!els.missionBriefing || !els.briefingOpen) return;

      els.briefingOpen.addEventListener('click', () => open());
      els.briefingClose?.addEventListener('click', () => close());
      els.missionBriefing.addEventListener('click', (event) => {
        if (event.target === els.missionBriefing) close();
      });

      els.briefingBody?.addEventListener('click', (event) => {
        const action = event.target.closest('[data-briefing-action]')?.dataset.briefingAction;
        if (!action) return;

        if (action === 'next-zone') {
          context.actions.stopAutoFlight();
          context.actions.setZone(state.currentZone + 1);
          updateZone(state.currentZone);
        }

        if (action === 'launch') {
          context.actions.stopAutoFlight();
          context.actions.setZone(config.zones.length - 1);
          close();
        }
      });

      render();
    }

    function open() {
      if (!els.missionBriefing) return;
      state.briefingOpen = true;
      render();
      els.missionBriefing.classList.add('is-open');
      els.missionBriefing.setAttribute('aria-hidden', 'false');
      document.body.classList.add('briefing-visible');
      window.setTimeout(() => els.briefingClose?.focus?.(), 60);
    }

    function close() {
      if (!els.missionBriefing) return;
      state.briefingOpen = false;
      els.missionBriefing.classList.remove('is-open');
      els.missionBriefing.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('briefing-visible');
      els.briefingOpen?.focus?.();
    }

    function updateZone() {
      render();
    }

    function render() {
      if (!els.briefingBody) return;

      const zone = config.zones[state.currentZone] || config.zones[0];
      const product = config.products[state.activeProduct] || config.products[0];
      const proof = config.proofs[state.activeProof] || config.proofs[0];
      const review = config.reviews[state.activeReview] || config.reviews[0];
      const visibleSkills = getVisibleSkillSummary();
      const nextZone = config.zones[Math.min(state.currentZone + 1, config.zones.length - 1)];

      if (els.briefingZone) els.briefingZone.textContent = `${zone.kicker} · Developer Brief`;
      if (els.briefingTitle) els.briefingTitle.textContent = zone.title;

      els.briefingBody.innerHTML = `
        <section class="briefing-section briefing-lead">
          <span>Current Objective</span>
          <p>${escapeHtml(zone.copy)}</p>
        </section>

        <div class="briefing-grid">
          <section class="briefing-section">
            <span>What it demonstrates</span>
            <strong>${escapeHtml(zone.focus || zone.name)}</strong>
            <p>${escapeHtml(zone.proof || zone.hint)}</p>
          </section>
          <section class="briefing-section">
            <span>Developer note</span>
            <strong>${escapeHtml(getDeveloperNote(state.currentZone))}</strong>
            <p>${escapeHtml(getDeveloperDetail(state.currentZone))}</p>
          </section>
        </div>

        ${state.currentZone === 1 ? renderSkillBrief(visibleSkills) : ''}
        ${state.currentZone === 2 ? renderProductBrief(product) : ''}
        ${state.currentZone === 3 ? renderProofBrief(proof) : ''}
        ${state.currentZone === 4 ? renderReviewBrief(review) : ''}
        ${state.currentZone === 5 ? renderLaunchBrief() : ''}

        <div class="briefing-actions">
          ${state.currentZone < config.zones.length - 1 ? `<button type="button" data-briefing-action="next-zone">Next: ${escapeHtml(nextZone.name)}</button>` : ''}
          <button type="button" data-briefing-action="launch">Go to Launch Dock</button>
        </div>
      `;
    }

    function getVisibleSkillSummary() {
      const visible = config.orbitParticles.filter((item) => {
        if (item.depth === 'core') return true;
        if (item.depth === 'deep') return state.zoom > 1.08;
        return state.zoom > 1.52;
      });

      return visible.slice(0, 10).map((item) => item.label);
    }

    function renderSkillBrief(skills) {
      return `
        <section class="briefing-section">
          <span>Visible skill layer</span>
          <strong>${skills.length} signals active</strong>
          <div class="briefing-pills">${skills.map((skill) => `<em>${escapeHtml(skill)}</em>`).join('')}</div>
          <p>Zoom reveals deeper tools gradually, so the screen stays readable while still proving technical depth.</p>
        </section>
      `;
    }

    function renderProductBrief(product) {
      return `
        <section class="briefing-section briefing-product">
          <span>Selected product case</span>
          <strong>${escapeHtml(product.title)}</strong>
          <p>${escapeHtml(product.desc)}</p>
          <dl>
            <div><dt>Problem</dt><dd>${escapeHtml(product.problem || 'Product problem statement is ready to be expanded.')}</dd></div>
            <div><dt>Approach</dt><dd>${escapeHtml(product.approach || product.use)}</dd></div>
            <div><dt>Result</dt><dd>${escapeHtml(product.result || 'Result copy can be updated after launch metrics are available.')}</dd></div>
          </dl>
          ${product.stack ? `<div class="briefing-pills">${product.stack.map((item) => `<em>${escapeHtml(item)}</em>`).join('')}</div>` : ''}
        </section>
      `;
    }

    function renderProofBrief(proof) {
      return `
        <section class="briefing-section">
          <span>Active proof signal</span>
          <strong>${escapeHtml(proof.title)} ${escapeHtml(proof.label)}</strong>
          <p>${escapeHtml(proof.desc)}</p>
        </section>
      `;
    }

    function renderReviewBrief(review) {
      return `
        <section class="briefing-section">
          <span>Client signal context</span>
          <strong>${escapeHtml(review.name)} · ${escapeHtml(review.company)}</strong>
          <p>“${escapeHtml(review.text)}”</p>
        </section>
      `;
    }

    function renderLaunchBrief() {
      return `
        <section class="briefing-section">
          <span>Conversion path</span>
          <strong>Primary action: WhatsApp project launch</strong>
          <p>The final zone keeps one strong CTA first, then offers secondary contact paths for users who prefer call, email, LinkedIn, GitHub, or Shrimo.</p>
        </section>
      `;
    }

    function getDeveloperNote(zoneIndex) {
      return [
        'Progressive enhancement over static HTML',
        'Layered information architecture',
        'Focused case-study presentation',
        'Proof-led credibility system',
        'Readable social proof layer',
        'Conversion-first contact design'
      ][zoneIndex] || 'Maintainable interactive portfolio system';
    }

    function getDeveloperDetail(zoneIndex) {
      return [
        'SEO content remains in the DOM while canvas/WebGL, motion, and typed effects enhance the experience.',
        'Core tools appear first; deeper tools reveal on zoom instead of crowding the interface.',
        'Products are separated from skills so visitors understand real business outcomes, not only technology names.',
        'Numbers and delivery signals are presented as proof objects with animation but remain readable text.',
        'Reviews use a signal pattern to keep testimonials visible without turning the portfolio into a generic card grid.',
        'The strongest action is intentionally placed at the end of the journey to convert exploration into a conversation.'
      ][zoneIndex] || 'Each module owns one responsibility and can be improved without rewriting the full portfolio.';
    }

    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"]/g, (ch) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[ch]));
    }

    return { init, open, close, updateZone };
  }

  SV.missionBriefing = { createMissionBriefing };
})(window, document);
