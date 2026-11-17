# UNICA · Archivo de Innovación

Repositorio público de proyectos de innovación de UNICA. Sitio estático hecho con [Astro](https://astro.build) y content collections, listo para Netlify.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview
```

## Estructura del archivo (según el FigJam)

```
Repositorio
├─ Proyectos de Competencias → Rally Nacional · Rally Latinoamericano · Hackathon · Ecothon
└─ Innovación Educativa      → Culminación de Estudios · Proyecto Integrador · Emprendimiento Educativo · Propiedad Intelectual
     └─ Edición (2026, 2026 · Marketing, 2026 · Arte, 2026 · Materia)
          └─ Proyecto
```

| Ruta | Contenido |
|---|---|
| `/` | Inicio (wireframe): hero, proyecto destacado, carpetas de las dos líneas, recientes, contacto |
| `/proyectos` | Catálogo con búsqueda, filtros (línea, programa, año, categoría), orden y estado en la URL |
| `/proyectos/[slug]` | Ficha del proyecto: equipo, participantes, categoría, descripción, imágenes, video |
| `/programas` y `/programas/[slug]` | Líneas, programas y proyectos agrupados por edición |
| `/sobre-el-repositorio` | Propósito, cómo publicar, correcciones |

## Agregar un proyecto

1. Creá `src/content/projects/nombre-del-proyecto.md` (el nombre del archivo es la URL).
2. Subí las imágenes a `public/proyectos/nombre-del-proyecto/`.
3. Completá el frontmatter:

```yaml
---
title: "Nombre del proyecto"
team: "Nombre del equipo"
participants:
  - { name: "Nombre Apellido", role: "Rol" }
category: tecnologica        # tecnologica | social | procesos | otra
summary: "Una o dos oraciones para las tarjetas (máx. 220 caracteres)."
program: hackathon           # id del archivo en src/content/programs
edition: "2026"              # id de una edición de ese programa
year: 2026
stage: prototipo             # opcional: idea | prototipo | validacion | implementacion | concluido
topics: ["educación"]
cover:
  src: /proyectos/nombre-del-proyecto/portada.webp
  alt: "Descripción concreta de la imagen"
gallery:
  - { src: /proyectos/nombre-del-proyecto/foto-1.webp, alt: "…", caption: "…" }
video: https://www.youtube.com/watch?v=XXXXXXXXXXX   # opcional
featured: false
publishedAt: 2026-11-16
---

## El reto
…
## La propuesta
…
## Cómo se desarrolló
…
## Estado actual
…
```

El build falla si falta un campo obligatorio o si el programa/edición no existe, así no se publican fichas incompletas. Para ocultar un proyecto sin borrarlo: `visibility: draft`.

**Nueva edición o programa:** editá o agregá un archivo en `src/content/programs/` (campo `editions`).

## Antes de publicar

- [ ] Borrar los 12 proyectos de ejemplo (`example: true`) y cargar proyectos reales.
- [ ] Reemplazar `contactEmail` en `src/data/site.ts` (hoy: `innovacion@unica.example`).
- [ ] Verificar los textos de las líneas (`src/data/site.ts`) y de los programas (`src/content/programs`).
- [ ] Cambiar `site` en `astro.config.mjs` por el dominio final.
- [ ] Sumar logo institucional según el manual de marca, si corresponde.

## Deploy en Netlify

Conectá el repositorio en Netlify; `netlify.toml` ya define `npm run build` y la carpeta `dist`.

## Gestión de contenido (siguiente paso)

Como cada proyecto es un archivo Markdown, se puede sumar un CMS basado en Git (por ejemplo Decap CMS, TinaCMS o Pages CMS) para que el equipo editorial cargue proyectos desde un formulario, sin tocar código.

## Diseño

`DESIGN.md` es la especificación visual. `PRODUCT.md` resume el contexto del producto.
