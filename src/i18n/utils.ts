import type { YearMonth } from '@/data/experience';
import es from './es.json';
import en from './en.json';
import gl from './gl.json';

export const languages = ['en', 'es', 'gl'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'en';

const dictionaries = { es, en, gl } as const;

export type Dictionary = (typeof dictionaries)['es'];

/** Devuelve el diccionario completo del idioma indicado. */
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Edad exacta en años a partir de la fecha de nacimiento (AAAA-MM-DD). */
export function calcAge(birthDate: string, now = new Date()): number {
  const [y, m, d] = birthDate.split('-').map(Number);
  const hadBirthday = now.getMonth() + 1 > m || (now.getMonth() + 1 === m && now.getDate() >= d);
  return now.getFullYear() - y - (hadBirthday ? 0 : 1);
}

/** Construye una ruta con el prefijo de idioma correcto (el idioma por defecto no lleva prefijo). */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${prefix}/${clean}`.replace(/\/+$/, '') || '/';
}

/** "Mayo 2025", "May 2025", "Maio 2025"… según el idioma. */
export function formatMonthYear({ year, month }: YearMonth, lang: Lang): string {
  const name = new Intl.DateTimeFormat(lang, { month: 'long', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
  return `${name.charAt(0).toLocaleUpperCase(lang)}${name.slice(1)} ${year}`;
}

/** Periodo localizado de un puesto; sin fecha de fin usa el texto de "actualidad". */
export function formatPeriod(
  start: YearMonth,
  end: YearMonth | null,
  lang: Lang,
  currentLabel: string,
): string {
  return `${formatMonthYear(start, lang)} — ${end ? formatMonthYear(end, lang) : currentLabel}`;
}

/**
 * `getStaticPaths` compartido por las páginas dinámicas `[...lang]`.
 * El idioma por defecto no lleva prefijo (`lang` indefinido); el resto sí.
 */
export function getLangStaticPaths() {
  return languages.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}
