/**
 * Contenido de EJEMPLO tomado del diseño. Pendiente de sustituir por los datos
 * reales (src/data/* + i18n) en una fase posterior.
 */
export interface CaseRow {
  k: string;
  v: string;
}

export interface PlaceholderProject {
  id: string;
  title: string;
  kind: string;
  result: string;
  stack: string;
  role: string;
  rows: CaseRow[];
}

export const placeholderProjects: PlaceholderProject[] = [
  {
    id: 'nonchoperdas',
    title: 'NonChoPerdas',
    kind: 'Captura: NonChoPerdas',
    result: 'Red social y foro para descubrir y compartir eventos.',
    stack: 'Angular · Java · SQL · Docker',
    role: 'Proyecto personal en desarrollo',
    rows: [],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    kind: 'Captura: portfolio',
    result: 'Este sitio: portfolio multilingüe, responsive y accesible.',
    stack: 'Astro · Tailwind · TypeScript',
    role: 'Diseño y código',
    rows: [],
  },
  {
    id: 'sombras',
    title: 'Mapa de sombras',
    kind: 'Demo: experimento WebGL',
    result: 'Instalación web usada en una exposición.',
    stack: 'WebGL · Three.js',
    role: 'Diseño y código',
    rows: [],
  },
];

export const placeholderExperience = [
  { year: '2023 – hoy', role: 'Full Stack Engineer · Empresa A', org: 'Lideré la migración modular', impact: 'Lideré la migración a módulos independientes: los despliegues pasaron de semanales a diarios.' },
  { year: '2020 – 2023', role: 'Ingeniero full stack · Startup B', org: 'Primer ingeniero del equipo', impact: 'Llevé el producto de prototipo a 20.000 usuarios.' },
  { year: '2018 – 2020', role: 'Desarrollador · Agencia C', org: 'Producto a medida', impact: 'Diseñé y construí 15 sitios y herramientas a medida para clientes.' },
];

export const placeholderAbout = {
  intro: 'Soy Martín, desarrollador full stack con ojo para el diseño. Me gusta que lo que construyo funcione bien y también se vea cuidado.',
  outside: 'Dibujo tipografía a mano y hago carteles generativos con código.',
  seeking: 'Busco proyectos de producto y trabajos externos de diseño y desarrollo.',
  availability: 'Disponible desde enero de 2027 · remoto o híbrido.',
};

export const placeholderContact = {
  title: 'Escríbeme',
  subtitle: 'Si tienes un proyecto en mente, cuéntamelo.',
  email: 'hola@martinbarreiro.dev',
};

export const placeholderNav = ['Inicio', 'Proyectos', 'Experiencia', 'Sobre mí', 'Contacto'] as const;
