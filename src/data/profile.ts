/** Datos personales y enlaces. No dependen del idioma. */
export const profile = {
  name: 'Martín Barreiro',
  /** Solo el año: la edad mostrada se calcula al compilar (puede diferir en 1 si aún no ha cumplido). */
  birthYear: 2000,
  email: 'martinbarreirob@gmail.com',
  github: { label: 'GitHub', url: 'https://github.com/martinbarreirob' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/martinbarreirob/' },
} as const;
