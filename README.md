# Portfolio — Martín Barreiro

Portfolio personal construido con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com), disponible en **inglés**, **español** y **gallego**.

Es una página única a pantalla completa por sección (Inicio, Proyectos, Experiencia, Sobre mí, Contacto), con una barra de navegación segmentada y un imán suave de scroll entre secciones.

## Idiomas

Las rutas se generan en `src/pages/[...lang]/index.astro` con `getLangStaticPaths` (`src/i18n/utils.ts`). El idioma por defecto es el inglés (`defaultLang`) y no lleva prefijo:

- `/` — Inglés
- `/es` — Español
- `/gl` — Gallego

El selector de idioma (`LangSwitcher`) muestra su etiqueta traducida (clave `ui.language`) y lista cada idioma en su propia lengua.

El contenido se reparte en dos sitios:

- **Textos traducibles** (títulos, descripciones, etiquetas de la interfaz): `src/i18n/{es,en,gl}.json`. El HTML de las descripciones (`<strong>`, `<p>`) se conserva dentro del JSON. Las experiencias y los proyectos se enlazan con su dato por `id`. El tipo del diccionario sale de `es.json`, así que `en.json` y `gl.json` deben tener las mismas claves.
- **Datos que no cambian con el idioma** (empresas, fechas, tecnologías, enlaces, email, fotos): `src/data/`. Las fechas se formatean solas según el idioma.

Para añadir una experiencia: crea su entrada en `src/data/experience.ts` (añade el `id` al tipo) y su `description` y `points` en los tres JSON; `npm run check` avisa si falta alguna traducción.

## Secciones

| Sección     | Componente                              | Contenido                                                                                           |
| ----------- | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Inicio      | `components/sections/Hero.astro`        | Nombre, rol y enlaces                                                                               |
| Proyectos   | `components/sections/Projects.astro`    | Cards de proyectos reales (`data/projects.ts`) y de ejemplo (`data/placeholder.ts`), caso de estudio |
| Experiencia | `components/sections/Experience.astro`  | Acordeón en móvil; cards fijas en escritorio                                                        |
| Sobre mí    | `components/sections/About.astro`       | Carrusel de fotos automático, presentación, "Fuera del código" y "Busco"                            |
| Contacto    | `components/sections/Contact.astro`     | Llamada a la acción, formulario y enlaces a GitHub y LinkedIn                                       |

Detalles de comportamiento:

- **Experiencia:** en móvil (< 768px) es un acordeón con una sola card abierta; en escritorio todas las cards se muestran abiertas en la rejilla.
- **Carrusel de Sobre mí:** cambia de foto cada 5 s, se pausa al pasar el ratón o al enfocar, y no avanza solo si el sistema pide reducir animaciones. Tiene botones anterior/siguiente y puntos. Las fotos son `public/assets/about1–3.webp`; sus textos alternativos están en `about.photos` de los JSON.
- **Tarjeta de título** (Proyectos, Experiencia, Sobre mí): solo se ve en escritorio; en móvil el título aparece encima de la rejilla.

## Estilo

Los tokens (colores `brand`, `ink`, `paper`, `card`, tipografías) están en `src/styles/global.css`. Tipografías: Poppins (pesos 300, 400, 500, 600 y 900) y Libre Baskerville, cargadas desde Google Fonts en `src/layouts/Layout.astro`.

Paleta de las cards:

- **Azul** (`brand`): solo las cards de título de página (Proyectos, Experiencia, Sobre mí) y la de Contacto.
- **Negro** (`ink`, texto claro): NonChoPerdas, "Busco" y GitHub.
- **Blanco** (`card`): el resto.

Variantes de Tailwind propias: `tight:` (ventanas de hasta 900px de alto) y `full:` (≥ 1024px de ancho y > 900px de alto). Los tamaños de texto de escritorio usan `clamp()` para escalar con el ancho de la pantalla.

## Estructura

```
public/assets/        Fotos (.webp) y la carta de recomendación (.pdf)
src/
  data/               Datos invariables: perfil, experiencia, estudios, proyectos, stack, ejemplos
  i18n/               Diccionarios por idioma + helpers (utils.ts)
  layouts/            Layout base (head, fuentes, título dinámico)
  components/         Cabecera, navegación, selector de idioma, logotipo, caso de estudio
    sections/         Una pantalla por sección + Screen.astro (contenedor común)
  pages/[...lang]/    Página única por idioma
  scripts/            Imán de scroll entre secciones (section-magnet.ts)
  styles/global.css   Tailwind, tokens del tema, rejillas por sección y acordeón
```

## Comandos

| Comando           | Acción                                     |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio estático en `dist/`        |
| `npm run preview` | Previsualiza el build de producción        |
| `npm run check`   | Comprueba tipos y traducciones             |
