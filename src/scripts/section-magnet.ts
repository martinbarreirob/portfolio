/**
 * Imán suave entre secciones, solo al bajar y con ratón.
 * Al parar de hacer scroll, si el borde superior de una sección queda a menos de REACH
 * (fracción de la altura de la ventana) por delante, se ajusta hasta ella con una curva
 * que frena progresivamente. Lejos del borde no hace nada, así que nunca hay saltos grandes.
 * Cualquier gesto del usuario durante el ajuste lo cancela. En táctil se usa el scroll-snap nativo.
 */
const REACH = 0.70;
const SETTLE_MS = 140;
const MIN_MS = 600;
const MAX_MS = 800;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function initSectionMagnet() {
  if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const sections = [...document.querySelectorAll<HTMLElement>('main > section')];
  if (sections.length < 2) return;
  document.documentElement.classList.add('section-magnet');

  let raf = 0;
  let animating = false;
  let timer: number | undefined;
  let lastY = scrollY;

  const top = (el: HTMLElement) => el.getBoundingClientRect().top + scrollY;

  const cancel = () => {
    if (!animating) return;
    cancelAnimationFrame(raf);
    animating = false;
    lastY = scrollY;
  };

  function glideTo(y: number) {
    const from = scrollY;
    const dist = Math.abs(y - from);
    if (dist < 2) return;
    const duration = MIN_MS + (MAX_MS - MIN_MS) * Math.min(dist / (innerHeight * REACH), 1);
    const start = performance.now();
    animating = true;
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      scrollTo(0, from + (y - from) * easeOutCubic(p));
      if (p < 1) raf = requestAnimationFrame(step);
      else {
        animating = false;
        lastY = scrollY;
      }
    };
    raf = requestAnimationFrame(step);
  }

  function settle() {
    const y = scrollY;
    const down = y > lastY;
    lastY = y;
    if (!down) return;
    // sección cuyo borde superior está justo por delante (aún no alcanzado) y cerca
    const target = sections.find((s) => {
      const gap = top(s) - y;
      return gap > 2 && gap <= innerHeight * REACH;
    });
    if (target) glideTo(top(target));
  }

  addEventListener(
    'scroll',
    () => {
      if (animating) return;
      clearTimeout(timer);
      timer = window.setTimeout(settle, SETTLE_MS);
    },
    { passive: true },
  );
  ['wheel', 'keydown', 'pointerdown'].forEach((t) => addEventListener(t, cancel, { passive: true }));
}
