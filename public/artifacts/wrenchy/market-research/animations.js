// ─── INTERSECTION OBSERVER ENGINE ───
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;

    // Basic reveal
    if (el.classList.contains('rv')) { el.classList.add('vis'); }

    // Stagger children
    if (el.classList.contains('stag')) {
      el.classList.add('vis');
      el.querySelectorAll('.rv-ch').forEach((ch, i) => {
        setTimeout(() => { ch.style.opacity = '1'; ch.style.transform = 'translateY(0)'; }, i * 120);
      });
    }

    // Chain nodes — sequential reveal
    if (el.id === 'chain1') {
      const nodes = el.querySelectorAll('.cn, .chain-conn, .chain-bridge');
      nodes.forEach((n, i) => {
        setTimeout(() => { n.classList.add('vis'); }, i * 180);
      });
    }

    // CountUp on stat values
    if (el.id === 'stats1') {
      setTimeout(() => {
        el.querySelectorAll('[data-count]').forEach(s => {
          if (s.dataset.done) return;
          s.dataset.done = '1';
          countUp(s);
        });
      }, 400);
    }

    // Bar chart fill
    if (el.id === 'bars1') {
      el.classList.add('vis');
      el.querySelectorAll('.br').forEach((br, i) => {
        setTimeout(() => { br.style.height = br.dataset.h + '%'; }, i * 150);
      });
    }

    // Donut rings draw
    if (el.id === 'donuts1') {
      setTimeout(() => {
        el.querySelectorAll('.dring').forEach((ring, i) => {
          setTimeout(() => {
            ring.style.strokeDashoffset = ring.dataset.target;
          }, i * 100);
        });
      }, 500);
    }

    // Table row stagger
    if (el.classList.contains('tbl-rv')) {
      el.classList.add('vis');
      el.querySelectorAll('tbody tr').forEach((tr, i) => {
        setTimeout(() => { tr.style.opacity = '1'; tr.style.transform = 'translateX(0)'; }, i * 80);
      });
    }

    io.unobserve(el);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

// ─── OBSERVER START ───
function observeAll() {
  document.querySelectorAll('.rv, .stag, #chain1, #stats1, #bars1, #donuts1, .tbl-rv, h2').forEach(el => io.observe(el));
}

// Start observers after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(observeAll, 60));
} else {
  setTimeout(observeAll, 60);
}

// ─── COUNT UP ───
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const useComma = el.dataset.comma === 'true';
  const duration = 1600;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    let display;
    if (target >= 100 && Number.isInteger(target)) {
      display = Math.round(current);
      if (useComma) display = display.toLocaleString();
    } else if (target >= 10) {
      display = current.toFixed(1);
      if (display.endsWith('.0') && target === Math.round(target)) display = Math.round(current).toString();
    } else {
      display = current.toFixed(2);
    }

    el.textContent = prefix + display + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
