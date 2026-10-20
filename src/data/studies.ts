/**
 * Formación. El título y la descripción (traducibles) viven en
 * `about.studies.<id>` de los diccionarios i18n.
 */
export type StudyId = 'daw' | 'asir';

export interface Study {
  id: StudyId;
  center: string;
  period: string;
  technologies: readonly string[];
}

export const studies: readonly Study[] = [
  {
    id: 'daw',
    center: 'IES San Clemente',
    period: '2021 / 2023',
    technologies: ['Docker', 'Vue', 'PHP', 'Symfony', 'Javascript'],
  },
  {
    id: 'asir',
    center: 'IES Rodeira',
    period: '2019 / 2021',
    technologies: ['Apache', 'SQL', 'Linux', 'Docker', 'Python', 'PHP'],
  },
];
