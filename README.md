# Portfolio — Martín Barreiro

Portfolio personal construido con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com), disponible en **español**, **inglés** y **gallego**.

## Idiomas

Se usa el i18n nativo de Astro con rutas por prefijo. El español es el idioma por defecto (sin prefijo):

- `/` · `/about` — Español
- `/en/` · `/en/about` — Inglés
- `/gl/` · `/gl/about` — Gallego

Todo el contenido textual vive en `src/i18n/{es,en,gl}.json`. Para editar textos o traducciones basta con modificar esos archivos; el HTML de las descripciones (`<strong>`, `<p>`) se conserva dentro del JSON.

## Estructura

```
public/assets/        Imágenes (.webp) y la carta de recomendación (.pdf)
src/
  i18n/               Diccionarios por idioma + helpers (utils.ts)
  layouts/            Layout base (head, fuentes, título dinámico)
  components/         Header, Footer, Contact, tarjetas, carrusel, selector de idioma
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
