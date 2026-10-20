# Portfolio — Martín Barreiro

Portfolio personal construido con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com), disponible en **español**, **inglés** y **gallego**.

## Idiomas

Se usa el i18n nativo de Astro con rutas por prefijo. El español es el idioma por defecto (sin prefijo):

- `/` · `/about` — Español
- `/en/` · `/en/about` — Inglés
- `/gl/` · `/gl/about` — Gallego

El contenido se reparte en dos sitios:

- **Textos traducibles** (títulos, descripciones, etiquetas de la interfaz): `src/i18n/{es,en,gl}.json`. El HTML de las descripciones (`<strong>`, `<p>`) se conserva dentro del JSON. Las experiencias, estudios y proyectos se enlazan con su dato por `id`.
- **Datos que no cambian con el idioma** (empresas, fechas, tecnologías, enlaces, email): `src/data/`. Las fechas se formatean solas según el idioma.

Para añadir una experiencia: crea su entrada en `src/data/experience.ts` (añade el `id` al tipo) y su `description` en los tres JSON; `npm run check` avisa si falta alguna traducción.

## Estructura

```
public/assets/        Imágenes (.webp) y la carta de recomendación (.pdf)
src/
  data/               Datos invariables: perfil, experiencia, estudios, proyectos, stack
  i18n/               Diccionarios por idioma + helpers (utils.ts)
  layouts/            Layout base (head, fuentes, título dinámico)
  components/         Navegación lateral, tarjetas del bento, carrusel, selectores de tema e idioma
  pages/              Rutas por idioma (index / about)
  styles/global.css   Tailwind + tokens del tema
```

## Comandos

| Comando           | Acción                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio estático en `dist/`        |
| `npm run preview` | Previsualiza el build de producción        |
| `npm run check`   | Comprueba tipos y traducciones             |
