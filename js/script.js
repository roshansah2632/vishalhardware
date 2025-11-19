/* script.js — interactions: theme toggle, menu, scroll reveal, parallax, transitions */

// Helper
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// Page-transition: add exit class on internal link click
document.addEventListener('click', (e) => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
  // internal link -> animate out then navigate
  e.preventDefault();
  document.querySelector('.page-content')?.classList.add('page-exit');
  setTimeout(() => { window.location = href; }, 340);
});

// Theme toggle + persistence
(function themeInit(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  if (initial === 'dark') root.setAttribute('data-theme','dark');
  else root.removeAttribute('data-theme');
})();

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const root = document.documentElement;
  if (root.getAttribute('data-theme') === 'dark') {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme','light');
  } else {
    root.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.right = '20px';
  nav.style.top = '64px';
  nav.style.padding = '10px';
  nav.style.background = 'var(--bg)';
  nav.style.borderRadius = '10px';
  nav.style.boxShadow = '0 12px 40px rgba(2,18,59,0.08)';
});

// Scroll reveal for .fade elements
function revealOnScroll() {
  const items = document.querySelectorAll('.fade');
  const offset = window.innerHeight - 80;
  items.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < offset) setTimeout(() => el.classList.add('visible'), i * 60);
  });
}
document.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Parallax effect on hero image / blobs
function heroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const heroImage = hero.querySelector('.hero-image');
  const blob1 = hero.querySelector('.blob-1');
  const blob2 = hero.querySelector('.blob-2');
  const rect = hero.getBoundingClientRect();
  const center = (rect.top + rect.bottom) / 2;
  const windowMiddle = window.innerHeight / 2;
  const diff = (windowMiddle - center) / window.innerHeight;
  if (heroImage) heroImage.style.transform = `translateY(${diff * -10}px)`;
  if (blob1) blob1.style.transform = `translateY(${diff * -20}px)`;
  if (blob2) blob2.style.transform = `translateY(${diff * 18}px)`;
}
window.addEventListener('scroll', heroParallax);
window.addEventListener('resize', heroParallax);
document.addEventListener('DOMContentLoaded', heroParallax);

// Make sure lazy-loaded images add visible class on load (subtle)
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
  img.addEventListener('load', () => img.classList.add('visible'));
});
