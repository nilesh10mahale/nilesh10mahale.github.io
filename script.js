// Live local clock
function tickClock() {
  const els = document.querySelectorAll('[data-clock]');
  if (!els.length) return;
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  const str = `LOCAL_${hh}:${mm}:${ss}`;
  els.forEach((el) => (el.textContent = str));
}
tickClock();
setInterval(tickClock, 1000);

// Fullscreen mobile menu toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const overlay = document.querySelector('[data-overlay]');
if (menuBtn && overlay) {
  menuBtn.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    menuBtn.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      overlay.classList.remove('open');
      menuBtn.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// Back to top
document.querySelectorAll('[data-totop]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
