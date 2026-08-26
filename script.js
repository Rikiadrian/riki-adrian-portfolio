/* =========================================
   Riki Adrian Portfolio - script.js
   Features: mobile menu, sticky navbar state,
   active nav highlight, scroll reveal,
   image fallback, details toggle, scroll-to-top
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('header[id], section[id]'));
  var toTop = document.getElementById('to-top');
  var yearEl = document.getElementById('year');

  /* ---------- Sticky navbar style + scroll-to-top visibility ---------- */
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 400) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  function toggleMenu() {
    var isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside the navbar
  document.addEventListener('click', function (e) {
    if (navMenu.classList.contains('open') && !e.target.closest('.navbar')) {
      closeMenu();
    }
  });

  // Close menu with Escape key (keyboard friendly)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  /* ---------- Active navigation highlight ---------- */
  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = '#' + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle('active', link.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(function (sec) {
      navObserver.observe(sec);
    });
  }

  /* ---------- Reveal animation on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- Image fallback (placeholder when file missing) ---------- */
  Array.prototype.slice.call(document.querySelectorAll('img[data-fallback]')).forEach(function (img) {
    var slot = img.closest('.img-slot');
    if (!slot) return;

    var showPlaceholder = function () {
      slot.classList.add('img-missing');
    };

    if (img.complete && img.naturalWidth === 0) {
      showPlaceholder(); // already failed before JS ran
    }
    img.addEventListener('error', showPlaceholder);
  });

  /* ---------- Featured project: View Details toggle ---------- */
  var detailsToggle = document.getElementById('details-toggle');
  var detailsPanel = document.getElementById('project-details');

  if (detailsToggle && detailsPanel) {
    detailsToggle.addEventListener('click', function () {
      var isOpen = detailsPanel.classList.toggle('open');
      detailsToggle.setAttribute('aria-expanded', String(isOpen));
      detailsToggle.querySelector('.label').textContent = isOpen ? 'Hide Details' : 'View Details';
      detailsPanel.style.maxHeight = isOpen ? detailsPanel.scrollHeight + 'px' : '0px';
    });

    // Keep panel height correct on resize while open
    window.addEventListener('resize', function () {
      if (detailsPanel.classList.contains('open')) {
        detailsPanel.style.maxHeight = detailsPanel.scrollHeight + 'px';
      }
    });
  }

  /* ---------- Scroll to top ---------- */
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Footer year ---------- */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
