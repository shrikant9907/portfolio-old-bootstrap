(function ($) {
  'use strict';

  var $window = $(window);
  var $body = $('body');
  var $navLinks = $('.site-header .nav-link[href^="#"]');
  var $goTop = $('.go-top');

  function initAos() {
    if (window.AOS) {
      AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        once: true,
        offset: 70,
        disable: function () {
          return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
      });
    }
  }

  function initLightbox() {
    if (window.GLightbox) {
      GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: false
      });
    }
  }

  function initPortfolioFilter() {
    var $grid = $('.grid');
    if (!$grid.length || typeof $.fn.isotope !== 'function') return;

    $grid.imagesLoaded ? $grid.imagesLoaded(function () {
      $grid.isotope({ itemSelector: '.filter-items', layoutMode: 'fitRows' });
    }) : $grid.isotope({ itemSelector: '.filter-items', layoutMode: 'fitRows' });

    $('.filters').on('click', '.filter-btn', function () {
      var $button = $(this);
      $('.filter-btn').removeClass('is-checked');
      $button.addClass('is-checked');
      $grid.isotope({ filter: $button.attr('data-filter') });
    });
  }

  function initSmoothClose() {
    $navLinks.on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }

  function updateActiveLink() {
    var scrollTop = $window.scrollTop() + 120;
    var currentId = '#top';

    $('main section[id], body[id]').each(function () {
      var $section = $(this);
      if ($section.offset().top <= scrollTop) {
        currentId = '#' + $section.attr('id');
      }
    });

    $navLinks.removeClass('active');
    $navLinks.filter('[href="' + currentId + '"]').addClass('active');
  }

  function toggleTopButton() {
    if ($window.scrollTop() > 420) {
      $goTop.addClass('is-visible');
    } else {
      $goTop.removeClass('is-visible');
    }
  }

  function initScrollState() {
    updateActiveLink();
    toggleTopButton();
    $window.on('scroll', function () {
      updateActiveLink();
      toggleTopButton();
    });
  }

  $(function () {
    initAos();
    initLightbox();
    initPortfolioFilter();
    initSmoothClose();
    initScrollState();
  });
})(jQuery);
