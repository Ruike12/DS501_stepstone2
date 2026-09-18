'use strict';
document.documentElement.classList.add('js');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const navLinks = [...navigation.querySelectorAll('a')];
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navLinks.forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
// Each navigation destination displays one section, with shareable hash URLs.
const sections = [...document.querySelectorAll('main > section[id]')];
const destinations = new Map(sections.map(section => [section.id, section]));
const originalTitle = 'Rickie (Ruike) Lin — Research, Data & Design';
function showSection(moveFocus = false) {
  const requested = window.location.hash.slice(1);
  const id = destinations.has(requested) ? requested : 'home';
  const current = destinations.get(id);
  sections.forEach(section => { section.hidden = section !== current; });
  navLinks.forEach(link => {
    const active = link.hash === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = id === 'home' ? originalTitle : id[0].toUpperCase() + id.slice(1) + ' — Rickie (Ruike) Lin';
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (moveFocus) {
    const heading = current.querySelector('h1, h2');
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (!destinations.has(link.hash.slice(1))) return;
  event.preventDefault();
  if (window.location.hash !== link.hash) history.pushState(null, '', link.hash);
  showSection(true);
});
window.addEventListener('popstate', () => showSection(true));
window.addEventListener('hashchange', () => showSection(true));
showSection();
