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

## Panel de contenido (Sveltia CMS)

El panel está en **`/admin`** (https://unica-innovacion.netlify.app/admin/). Cada vez que se guarda un cambio, el panel hace un commit en GitHub y Netlify publica el sitio en 1–2 minutos. La configuración vive en `public/admin/config.yml` y replica los campos de `src/content.config.ts`: si cambia el esquema, hay que actualizar los dos.

### Cómo ingresar

Quien edita necesita una cuenta de GitHub con permiso de escritura en `Bayardo88/innovacion-unica`.

**Opción A: token de acceso (funciona ya).**
1. En GitHub: Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
2. Repository access: solo `Bayardo88/innovacion-unica`. Permissions → Contents: **Read and write**.
3. En `/admin`, elegí **Iniciar sesión con un token de acceso** y pegalo. Queda guardado en ese navegador.

**Opción B: botón "Iniciar sesión con GitHub" (requiere configurarlo una vez).**
1. En GitHub: Settings → Developer settings → OAuth Apps → New OAuth App.
   Homepage URL: `https://unica-innovacion.netlify.app` · Authorization callback URL: `https://api.netlify.com/auth/done`.
2. Copiá el Client ID y generá un Client secret.
3. En Netlify: Project configuration → Security → OAuth → Install provider → GitHub, y pegá ambos valores.

**Trabajo local (sin cuenta):** con `npm run dev`, abrí `http://localhost:4321/admin/index.html` en Chrome o Edge y elegí **Trabajar con un repositorio local**; los cambios quedan en tu carpeta y se suben con git.

### Cargar un proyecto
Plantilla para editar a mano: [`docs/plantilla-proyecto.md`](docs/plantilla-proyecto.md) · Guía de fotos y videos: [`docs/guia-imagenes-y-video.md`](docs/guia-imagenes-y-video.md)

1. **Proyectos → Nuevo proyecto**.
2. Completá nombre, equipo, participantes (solo con su permiso), categoría, programa y **edición** (el identificador aparece en la ayuda del campo).
3. Subí la portada y las imágenes y escribí su texto alternativo.
4. Dejá **Proyecto de ejemplo** apagado. Usá **Visibilidad → Borrador** para guardar sin publicar.
5. Guardá. Si un dato no es válido (por ejemplo, una edición que no existe en el programa), el build de Netlify falla y el sitio publicado no cambia; revisá el error en el panel de deploys de Netlify.

Para una edición nueva (por ejemplo 2027), agregala primero en **Programas** dentro del programa correspondiente.

## Diseño

`DESIGN.md` es la especificación visual. `PRODUCT.md` resume el contexto del producto.
