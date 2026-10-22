/**
 * Scroll por pasos: cada sección es un "stage" alto con la pantalla fija (sticky) dentro.
 * Al recorrerlo, las cards (.reveal) aparecen una a una según su data-step (por defecto, el orden
 * del DOM); las que comparten valor aparecen a la vez. Una vez reveladas se quedan: al subir no se repite la animación.
 * Las cards no visibles en el breakpoint actual (display:none) no consumen scroll.
 */
const STEP = 0.25; // altura de ventana de scroll por card
const LEAD = 0.3; // la primera card aparece cuando el stage entra a esta fracción de la ventana
const DWELL = 0.15; // pausa con todo visible antes de seguir

interface Stage {
  el: HTMLElement;
  items: { el: HTMLElement; rank: number }[];
}

const stages: Stage[] = [];

function layout() {
  const vh = innerHeight;
  for (const stage of stages) {
    const found = [...stage.el.querySelectorAll<HTMLElement>('.reveal')]
      .filter((el) => el.getClientRects().length > 0)
      .map((el, i) => ({ el, key: el.dataset.step !== undefined ? Number(el.dataset.step) : i }))
      .sort((a, b) => a.key - b.key);
    const keys = [...new Set(found.map((f) => f.key))];
    stage.items = found.map((f) => ({ el: f.el, rank: keys.indexOf(f.key) }));
    const screen = stage.el.firstElementChild as HTMLElement;
    const extra = Math.max(keys.length - 1, 0) * STEP * vh + DWELL * vh;
    stage.el.style.height = `${screen.offsetHeight + extra}px`;
  }
  update();
}

function update() {
  const vh = innerHeight;
  for (const stage of stages) {
    const scrolled = -stage.el.getBoundingClientRect().top;
    for (const item of stage.items) {
      if (scrolled >= (item.rank * STEP - LEAD) * vh) item.el.classList.add('is-visible');
    }
  }
}

export function initScrollReveal() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stages.push(...[...document.querySelectorAll<HTMLElement>('[data-stage]')].map((el) => ({ el, items: [] })));
  document.documentElement.classList.add('stepped');
  layout();

  addEventListener(
    'scroll',
    () => {
      update();
    },
    { passive: true },
  );
  addEventListener('resize', layout);
  document.fonts?.ready.then(layout);

  // Los enlaces de la barra llevan al final del stage: la sección aparece completa
  document.querySelectorAll<HTMLAnchorElement>('[data-dot]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const stage = stages.find((s) => s.el.id === a.dataset.dot);
      if (!stage) return;
      e.preventDefault();
      const screen = stage.el.firstElementChild as HTMLElement;
      const top = stage.el.getBoundingClientRect().top + scrollY;
      scrollTo({ top: top + stage.el.offsetHeight - screen.offsetHeight, behavior: 'smooth' });
    });
  });
}
