const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const closeBtn = document.querySelector('[data-nav-close]'); // <-- not nav.querySelector!

if (toggle && nav && closeBtn) {
  // Open nav
  toggle.addEventListener('click', () => {
    nav.classList.add('is-open');
    document.body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  });

  // Close nav on close button
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}