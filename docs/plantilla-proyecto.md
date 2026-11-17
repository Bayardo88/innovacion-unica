---
# ─────────────────────────────────────────────────────────────────────────────
# PLANTILLA DE PROYECTO · UNICA Archivo de Innovación
#
# Cómo usarla:
#   1. Copiá este archivo a  src/content/projects/
#   2. Renombralo con el nombre del proyecto en minúsculas y con guiones,
#      sin tildes ni espacios. Ese nombre será la dirección de la ficha.
#        Ej.: "Agua Limpia Ya" → agua-limpia-ya.md → /proyectos/agua-limpia-ya/
#   3. Reemplazá todo lo que está entre < >. Borrá los campos opcionales
#      que no uses (o dejalos vacíos como se indica).
#   4. Las líneas que empiezan con # son comentarios: podés borrarlas.
#
# Si preferís un formulario, cargá el proyecto desde el panel:
#   https://unica-innovacion.netlify.app/admin/  → Proyectos → Nuevo
# El panel genera exactamente este mismo archivo.
#
# Obligatorio = el sitio no se publica si falta o está mal escrito.
# ─────────────────────────────────────────────────────────────────────────────

# Nombre del proyecto. OBLIGATORIO.
title: "<Nombre del proyecto>"

# Nombre del equipo, tal como se presentó. OBLIGATORIO.
team: "<Nombre del equipo>"

# Integrantes. OBLIGATORIO (al menos uno). Solo personas que dieron
# permiso para aparecer con su nombre en el sitio. El rol es opcional.
participants:
  - { name: "<Nombre Apellido>", role: "<Rol, ej.: Diseño>" }
  - { name: "<Nombre Apellido>", role: "<Rol>" }
  - { name: "<Nombre Apellido>" }

# Categoría. OBLIGATORIO. Usar exactamente uno de estos valores:
#   tecnologica | social | procesos | otra
category: <tecnologica>

# Descripción breve para las tarjetas: 1 o 2 oraciones. OBLIGATORIO.
# Máximo 220 caracteres. Qué hace el proyecto y para quién.
summary: "<Qué es el proyecto, qué problema resuelve y para quién.>"

# Programa. OBLIGATORIO. Usar exactamente uno de estos valores:
#   Proyectos de Competencias:
#     rally-nacional | rally-latinoamericano | hackathon | ecothon
#   Innovación Educativa:
#     culminacion-de-estudios | proyecto-integrador |
#     emprendimiento-educativo | propiedad-intelectual
program: <hackathon>

# Edición dentro del programa. OBLIGATORIO. Debe existir en ese programa:
#   rally-nacional, rally-latinoamericano, hackathon, ecothon  → "2026"
#   culminacion-de-estudios, proyecto-integrador → "2026-marketing" o "2026-arte"
#   emprendimiento-educativo, propiedad-intelectual → "2026-materia"
# Para una edición nueva (ej. 2027), agregala primero en el programa
# (panel → Programas, o src/content/programs/<programa>.md).
edition: "<2026>"

# Año de la edición. OBLIGATORIO. Solo el número, sin comillas.
year: 2026

# Etapa. Opcional. Uno de: idea | prototipo | validacion | implementacion | concluido
# Si no aplica, borrá la línea.
stage: <prototipo>

# Temas o palabras clave. Opcional. Ayudan a encontrar el proyecto en la búsqueda.
topics: ["<tema 1>", "<tema 2>"]

# Imagen de portada. OBLIGATORIO el texto alternativo (alt).
# La imagen se sube a public/proyectos/ (ver docs/guia-imagenes-y-video.md).
# En "src" va la ruta pública: empieza con /proyectos/ (sin "public").
cover:
  src: "/proyectos/<nombre-del-proyecto>-portada.webp"
  alt: "<Qué se ve en la foto. Ej.: Tres estudiantes prueban el prototipo del sensor en un lavamanos.>"

# Galería. Opcional. Una entrada por imagen; alt obligatorio en cada una.
# Si no hay galería, dejá:  gallery: []
gallery:
  - src: "/proyectos/<nombre-del-proyecto>-01.webp"
    alt: "<Qué se ve en la imagen>"
    caption: "<Pie de foto corto (opcional)>"
    credit: "<Autor de la foto (opcional)>"
  - src: "/proyectos/<nombre-del-proyecto>-02.webp"
    alt: "<Qué se ve en la imagen>"

# Video de YouTube. Opcional. Enlace completo, público o "no listado".
# Si no hay video, borrá la línea.
video: "https://www.youtube.com/watch?v=<ID_DEL_VIDEO>"

# Enlaces extra (presentación, repositorio, documento). Opcional.
# Si no hay, dejá:  links: []
links:
  - { label: "<Presentación del proyecto>", url: "https://<enlace>" }

# Mostrar en "Proyecto destacado" del inicio. true o false.
featured: false

# Fecha de publicación en el archivo (AAAA-MM-DD). OBLIGATORIO.
# Ordena el catálogo: la más reciente aparece primero.
publishedAt: <2026-11-20>

# Siempre false en proyectos reales (true muestra la etiqueta "Ejemplo").
example: false

# public = se muestra en el sitio · draft = guardado pero oculto
visibility: public
---

## El reto

<Qué problema o necesidad había, en qué contexto y a quién afectaba. 2–4 oraciones.>

## La propuesta

<Qué propuso el equipo y qué la hace distinta. 2–4 oraciones.>

## Cómo se desarrolló

<Investigación, ideación, prototipos, pruebas: qué hicieron y en qué orden.>

## Estado actual

<En qué etapa está hoy, con honestidad: idea, prototipo, probado con usuarios, implementado. Si hay resultados medidos, indicar cómo y cuándo se midieron.>

<!--
Podés borrar una sección completa (título incluido) si no hay información.
No inventes datos, cifras ni premios: solo lo que el equipo pueda respaldar.
-->
