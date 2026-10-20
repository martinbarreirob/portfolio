/**
 * Proyectos destacados. La descripción (traducible) vive en
 * `home.projects.<id>` de los diccionarios i18n.
 * `link` vacío = proyecto aún sin enlace público.
 */
export type ProjectId = 'nonchoperdas';

export interface Project {
  id: ProjectId;
  title: string;
  technologies: readonly string[];
  link: string;
}

export const projects: readonly Project[] = [
  {
    id: 'nonchoperdas',
    title: 'NonChoPerdas',
    technologies: ['Angular', 'Java', 'SQL', 'Docker'],
    link: '',
  },
];
