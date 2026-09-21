import es from './es.json';
import en from './en.json';
import gl from './gl.json';

export const languages = ['es', 'en', 'gl'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'es';

const dictionaries = { es, en, gl } as const;

export type Dictionary = (typeof dictionaries)['es'];

/** Devuelve el diccionario completo del idioma indicado. */
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Extrae el idioma del primer segmento de la URL (`/en/...`, `/gl/...`). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (languages.includes(segment as Lang)) return segment as Lang;
  return defaultLang;
}

/** Construye una ruta con el prefijo de idioma correcto (el idioma por defecto no lleva prefijo). */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${clean}`.replace(/\/+$/, '') || '/';
}
