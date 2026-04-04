/**
 * Quatτros Coffee — Main JS
 * Scroll animations, mobile menu, menu filter, back-to-top
 */

(function () {
  'use strict';

  // ─── DOM REFS ──────────────────────────────
  const header    = document.getElementById('site-header');
  const toggle    = document.querySelector('.nav__toggle');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav__link');
  const backToTop = document.getElementById('back-to-top');
  const reveals   = document.querySelectorAll('.reveal');
  const menuTabs  = document.querySelectorAll('.menu-tab');
  const menuCards = document.querySelectorAll('.menu-card');

  // ─── HEADER SCROLL ────────────────────────
  function handleHeaderScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // ─── BACK TO TOP ──────────────────────────
  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── SCROLL LISTENER (throttled) ──────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleHeaderScroll();
        handleBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  handleHeaderScroll();

  // ─── MOBILE MENU ──────────────────────────
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  // ─── INTERSECTION OBSERVER (Reveal) ───────
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show all
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ─── MENU FILTER TABS ────────────────────
  function filterMenu(filter) {
    menuCards.forEach(card => {
      if (card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.classList.remove('visible');
        void card.offsetWidth;
        card.classList.add('visible');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      filterMenu(tab.dataset.filter);
    });
  });

  // Initial filter based on active tab
  const activeTab = document.querySelector('.menu-tab.active');
  if (activeTab) {
    filterMenu(activeTab.dataset.filter);
  }

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ──────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

})();

