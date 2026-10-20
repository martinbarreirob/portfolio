/**
 * Experiencia laboral, de más reciente a más antigua.
 * Aquí va solo lo que no cambia con el idioma; la descripción vive en
 * `home.experiences.<id>` de los diccionarios i18n.
 *
 * `end: null` indica que el puesto sigue en curso.
 */
export interface YearMonth {
  year: number;
  /** 1–12 */
  month: number;
}

export type ExperienceId = 'sigillum' | 'marosavat' | 'pinvestiga';

export interface Experience {
  id: ExperienceId;
  company: string;
  role: string;
  start: YearMonth;
  end: YearMonth | null;
  technologies: readonly string[];
  recommendation?: string;
}

export const experiences: readonly Experience[] = [
  {
    id: 'sigillum',
    company: 'Sigillum K.S.',
    role: 'Fullstack Developer',
    start: { year: 2025, month: 5 },
    end: null,
    technologies: ['Angular', 'Java', 'Python', 'SQL', 'Docker'],
  },
  {
    id: 'marosavat',
    company: 'Marosavat',
    role: 'Frontend Developer',
    start: { year: 2024, month: 2 },
    end: { year: 2025, month: 2 },
    technologies: ['Angular', 'Agile', 'SCRUM', 'UX / UI', 'Git'],
  },
  {
    id: 'pinvestiga',
    company: 'Galaxia Empírica — pInvestiga',
    role: 'Fullstack Developer',
    start: { year: 2023, month: 10 },
    end: { year: 2023, month: 12 },
    technologies: ['Angular', 'NestJS', 'PHP', 'SQL'],
    recommendation: '/assets/cartarecomendacion.pdf',
  },
];
