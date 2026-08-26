// TEDxHeriot-Watt University Dubai — countdown + motion + mobile nav

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Event starts Thursday, April 8, 2027 at 09:00 Gulf Standard Time (UTC+4).
  var eventDate = new Date('2027-04-08T09:00:00+04:00').getTime();
  var countdown = document.getElementById('countdown');
  var countdownStatus = document.getElementById('countdown-status');

  var els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs')
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function setCountdownValue(element, value) {
    if (!element || element.textContent === value) return;
    element.textContent = value;
    element.classList.remove('tick');
    void element.offsetWidth;
    element.classList.add('tick');
  }

  function updateCountdown() {
    var diff = eventDate - Date.now();

    if (diff <= 0) {
      ['days', 'hours', 'mins', 'secs'].forEach(function (unit) {
        setCountdownValue(els[unit], '00');
      });
      countdown.classList.add('is-live');
      countdown.setAttribute('aria-label', 'TEDxHeriot-Watt University Dubai is happening today');
      if (countdownStatus) countdownStatus.textContent = 'Event day — see you there';
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdownValue(els.days, pad(days));
    setCountdownValue(els.hours, pad(hours));
    setCountdownValue(els.mins, pad(mins));
    setCountdownValue(els.secs, pad(secs));
  }

  if (countdown && els.days) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Header state + active section ----
  var header = document.querySelector('.site-header');
  function updateHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  var navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
  var sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var isCurrent = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', isCurrent);
          if (isCurrent) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  // ---- Scroll reveal ----
  var revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }
});
