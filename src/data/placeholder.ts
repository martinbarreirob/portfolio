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
    id: 'atlas',
    title: 'Atlas',
    kind: 'Captura: panel de rutas',
    result: 'Redujo un 38 % el tiempo de planificación de rutas.',
    stack: 'React · Node · PostgreSQL',
    role: 'Full stack y producto',
    rows: [
      { k: 'Problema', v: 'Los despachadores planificaban rutas a mano en hojas de cálculo; cada cambio de última hora obligaba a rehacerlo todo.' },
      { k: 'Decisiones', v: 'Modelar las rutas como eventos y no como estados, y mostrar siempre el efecto de cada cambio sobre el plan completo.' },
      { k: 'Reto y solución', v: 'El cálculo bloqueaba la interfaz con más de 200 paradas. Lo moví a un worker con una cola y recálculo incremental.' },
      { k: 'Resultado', v: 'El tiempo de planificación diaria bajó un 38 % y los cambios de última hora dejaron de rehacer el plan.' },
    ],
  },
  {
    id: 'cuadra',
    title: 'Cuadra',
    kind: 'Captura: estado trimestral',
    result: '1.200 usuarios activos en tres meses.',
    stack: 'Next.js · Prisma · Stripe',
    role: 'Producto y desarrollo',
    rows: [
      { k: 'Problema', v: 'Los autónomos llegaban a fin de trimestre sin saber cuánto debían ni qué facturas faltaban.' },
      { k: 'Decisiones', v: 'Una sola pantalla de estado en lugar de módulos separados, y facturar en tres pasos.' },
      { k: 'Reto y solución', v: 'Las reglas fiscales cambian por tramo. Las aislé en un módulo de reglas versionado y con pruebas por caso.' },
      { k: 'Resultado', v: '1.200 usuarios activos en los primeros tres meses, sin campañas de pago.' },
    ],
  },
  {
    id: 'tinta',
    title: 'Tinta',
    kind: 'Demo: editor en vivo',
    result: 'Sincroniza en menos de 80 ms con 20 personas.',
    stack: 'TypeScript · WebSockets · Redis',
    role: 'Arquitectura y frontend',
    rows: [
      { k: 'Problema', v: 'Editar en equipo a la vez provocaba conflictos y pérdidas de texto.' },
      { k: 'Decisiones', v: 'CRDT en lugar de bloqueo por párrafo, y cursores visibles para todos.' },
      { k: 'Reto y solución', v: 'La latencia subía con documentos largos. Segmenté el documento y envié diferencias en lugar de estados completos.' },
      { k: 'Resultado', v: 'Sincronización por debajo de 80 ms con 20 personas editando.' },
    ],
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
