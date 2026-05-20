/*
 * Guided tour controller
 * ----------------------
 * Owns the onboarding overlay. The v1 experience uses sessionStorage so the
 * guide appears automatically only once per browser tab session. Manual replay
 * is always available from the Help or Settings controls.
 */
(function initShrimoVerseGuideController(window) {
  'use strict';

  const SV = window.ShrimoVerse = window.ShrimoVerse || {};

  function createGuideController(context) {
    const { $, $$ } = SV.dom;
    const { els, state, guideSteps } = context;

    function startGuide(options = {}) {
      context.actions.stopAutoFlight();

      if (options.auto && context.experience && !context.experience.shouldShowGuideAutomatically()) {
        return;
      }

      state.guideIndex = 0;
      els.guideOverlay.classList.add('is-visible');
      els.guideOverlay.setAttribute('aria-hidden', 'false');
      showGuideStep();
    }

    function closeGuide(markSeen = true) {
      els.guideOverlay.classList.remove('is-visible');
      els.guideOverlay.setAttribute('aria-hidden', 'true');
      $$('.guide-target').forEach((el) => el.classList.remove('guide-target'));
      if (markSeen) context.experience?.markGuideSeen?.();
    }

    function stepGuide(direction) {
      if (direction > 0 && state.guideIndex === guideSteps.length - 1) {
        closeGuide(true);
        return;
      }

      state.guideIndex = Math.max(0, Math.min(guideSteps.length - 1, state.guideIndex + direction));
      showGuideStep();
    }

    function showGuideStep() {
      const step = guideSteps[state.guideIndex];
      if (!step) return;

      els.guideStep.textContent = `Step ${state.guideIndex + 1} of ${guideSteps.length}`;
      els.guideTitle.textContent = step.title;
      els.guideText.textContent = step.text;
      els.guideProgress.style.width = `${((state.guideIndex + 1) / guideSteps.length) * 100}%`;
      els.guideBack.disabled = state.guideIndex === 0;
      els.guideNext.textContent = state.guideIndex === guideSteps.length - 1 ? 'Finish' : 'Next';

      $$('.guide-target').forEach((el) => el.classList.remove('guide-target'));
      const target = $(step.target);
      if (target) target.classList.add('guide-target');
    }

    els.guideSkip?.addEventListener('click', () => closeGuide(true));

    return {
      startGuide,
      closeGuide,
      stepGuide,
      showGuideStep
    };
  }

  SV.guide = { createGuideController };
})(window);
