/**
 * Stack tecnológico mostrado en el bloque "Stack" del bento.
 * Independiente del idioma (los nombres no se traducen).
 * Para añadir/quitar una tecnología basta con editar este array.
 *
 * `icon`  → clase CSS del icono (Devicon o Font Awesome según `iconSet`).
 * `iconSet` → "devicon" (por defecto) | "fa".
 */
export interface Tech {
  name: string;
  icon: string;
  iconSet?: 'devicon' | 'fa';
}

export const stack: Tech[] = [
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'SQL', icon: 'fa-solid fa-database', iconSet: 'fa' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'Node', icon: 'devicon-nodejs-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Vue', icon: 'devicon-vuejs-plain colored' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
];
