(function ($) {
  'use strict';

  var $window = $(window);
  var $navLinks = $('.site-header .nav-link[href^="#"]');
  var $goTop = $('.go-top');
  var $floatingCta = $('.floating-cta');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initAos() {
    if (window.AOS) {
      AOS.init({ duration: 650, easing: 'ease-out-cubic', once: true, offset: 80, disable: function () { return prefersReducedMotion; } });
    }
  }

  function initHeroMotion() {
    if (!window.gsap || prefersReducedMotion) return;
    gsap.from('.command-nav', { y: -22, opacity: 0, duration: .7, ease: 'power3.out' });
    gsap.from('.hero-copy > *', { y: 34, opacity: 0, duration: .9, stagger: .11, ease: 'power3.out', delay: .12 });
    gsap.from('.command-console', { y: 48, scale: .96, opacity: 0, duration: 1.05, delay: .38, ease: 'power3.out' });
    gsap.from('.console-card', { y: 18, opacity: 0, duration: .72, stagger: .09, delay: .85, ease: 'power3.out' });
    gsap.to('.tech-nodes span', { y: -7, duration: 2.6, stagger: .16, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.connector, .network-line', { strokeDashoffset: -140, duration: 8, repeat: -1, ease: 'none' });
  }

  function initTypeIt() {
    if (!window.TypeIt || prefersReducedMotion) return;
    var target = document.getElementById('typed-focus');
    if (!target) return;
    target.innerHTML = '';
    new TypeIt('#typed-focus', {
      strings: ['Business Websites · Web Apps · SEO-ready Digital Products'],
      speed: 28,
      lifeLike: true,
      cursorChar: '▍',
      waitUntilVisible: true
    }).go();
  }

  function initLightbox() {
    if (window.GLightbox) {
      GLightbox({ selector: '.glightbox', touchNavigation: true, loop: false, openEffect: 'fade', closeEffect: 'fade' });
    }
  }

  function initProjectFilter() {
    var grid = document.getElementById('project-grid');
    if (!grid || !window.Shuffle) return;
    var shuffle = new Shuffle(grid, { itemSelector: '.project-item', speed: prefersReducedMotion ? 0 : 450 });
    $('.filters').on('click', '.filter-btn', function () {
      var group = this.getAttribute('data-group');
      $('.filter-btn').removeClass('is-checked');
      $(this).addClass('is-checked');
      shuffle.filter(group === 'all' ? Shuffle.ALL_ITEMS : group);
    });
  }

  function initCounters() {
    var counted = false;
    var proof = document.getElementById('proof');
    if (!proof) return;

    function runCounters() {
      if (counted) return;
      counted = true;
      $('.countup').each(function () {
        var el = this;
        var value = Number(el.getAttribute('data-value')) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var CountUpCtor = window.countUp && window.countUp.CountUp ? window.countUp.CountUp : window.CountUp;
        if (CountUpCtor && !prefersReducedMotion) {
          var counter = new CountUpCtor(el, value, { duration: 1.7, suffix: suffix });
          if (!counter.error) counter.start();
        } else {
          el.textContent = value + suffix;
        }
      });
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { runCounters(); observer.disconnect(); }
      }, { threshold: .25 });
      observer.observe(proof);
    } else {
      runCounters();
    }
  }

  function initReviewSlider() {
    if (window.Splide && document.getElementById('reviewSlider')) {
      new Splide('#reviewSlider', { type: 'loop', perPage: 1, gap: '1rem', arrows: false, autoplay: !prefersReducedMotion, interval: 3600, pauseOnHover: true, pauseOnFocus: true }).mount();
    }
  }

  function initTiltLikeMotion() {
    var panel = document.querySelector('[data-tilt-root]');
    if (!panel || prefersReducedMotion) return;
    panel.addEventListener('mousemove', function (event) {
      var rect = panel.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - .5;
      var y = (event.clientY - rect.top) / rect.height - .5;
      panel.style.transform = 'perspective(900px) rotateY(' + (x * 5).toFixed(2) + 'deg) rotateX(' + (-y * 5).toFixed(2) + 'deg)';
    });
    panel.addEventListener('mouseleave', function () { panel.style.transform = ''; });
  }

  function initSmoothClose() {
    $navLinks.on('click', function () { $('.navbar-collapse').collapse('hide'); });
  }


  function initCommandMenuState() {
    var $toggle = $('.command-toggle');
    $('#mainNavbar')
      .on('shown.bs.collapse', function () { $toggle.attr('aria-expanded', 'true'); })
      .on('hidden.bs.collapse', function () { $toggle.attr('aria-expanded', 'false'); });
  }

  function updateActiveLink() {
    var scrollTop = $window.scrollTop() + 120;
    var currentId = '#top';
    $('main section[id], body[id]').each(function () {
      var $section = $(this);
      if ($section.offset().top <= scrollTop) currentId = '#' + $section.attr('id');
    });
    $navLinks.removeClass('active');
    $navLinks.filter('[href="' + currentId + '"]').addClass('active');
  }

  function updateScrollUi() {
    var scrollTop = $window.scrollTop();
    var docHeight = $(document).height() - $window.height();
    var progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    $('.scroll-progress span').css('width', progress + '%');
    $('#main_header').toggleClass('is-scrolled', scrollTop > 24);
    if (scrollTop > 420) { $goTop.addClass('is-visible'); $floatingCta.addClass('is-visible'); }
    else { $goTop.removeClass('is-visible'); $floatingCta.removeClass('is-visible'); }
  }

  function initScrollState() {
    updateActiveLink(); updateScrollUi();
    $window.on('scroll', function () { updateActiveLink(); updateScrollUi(); });
  }

  function initYear() {
    $('#year').text(new Date().getFullYear());
  }

  $(function () {
    initYear();
    initAos();
    initHeroMotion();
    initTypeIt();
    initLightbox();
    initProjectFilter();
    initCounters();
    initReviewSlider();
    initTiltLikeMotion();
    initSmoothClose();
    initCommandMenuState();
    initScrollState();
  });
})(jQuery);
