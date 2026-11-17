# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output) with content collections, deployed to Netlify. The user asked for Netlify now and collection-based content management later (new projects added as content entries); Astro was chosen because each project is a Markdown file a Git-based CMS can edit without changing layouts.

## Users

Students, teachers and researchers of UNICA. They browse to find projects from competitions and educational-innovation programs: to get inspired, reference previous work, see what a program produces, or share their own team's project.

## Product Purpose

UNICA's public repository of innovation projects. It organizes projects by line → program → edition, and documents each one with name, team, participants, category, description, images and an optional YouTube video. Success: anyone can find a project in a few clicks and understand what it is.

## Positioning

The single place where UNICA's competition and educational-innovation projects are filed together under the institution's own program structure.

## Operating Context

Site architecture (from the user's FigJam):

- **Proyectos de Competencias:** Rally Nacional, Rally Latinoamericano, Hackathon, Ecothon — each with a 2026 edition.
- **Innovación Educativa:** Culminación de Estudios (2026 Marketing, 2026 Arte), Proyecto Integrador (2026 Marketing, 2026 Arte), Emprendimiento Educativo (2026 materia), Propiedad Intelectual (2026 materia).
- **Proyecto fields:** nombre del proyecto, nombre del equipo, participantes, categoría, descripción, imágenes, video (YouTube link).

## Capabilities and Constraints

- Static site; no backend. Search and filters run client-side and are encoded in the URL.
- The wireframe's email subscription block is replaced by a contact call (user decision).
- Spanish UI.
- Undecided: institutional logo and brand rules, real contact email, CMS choice.

## Brand Commitments

- Name: **UNICA**. No institutional logo supplied — do not draw one.
- Visual system is pinned by the user's DESIGN.md (notebook editorial + scrapbook).

## Evidence on Hand

No real projects yet. First version ships fictional example projects, each marked `example: true` and labelled "Ejemplo" on screen, to be replaced before publishing. No real images or videos: covers are authored placeholder illustrations. Never invent metrics, awards or partners.

## Product Principles

1. Find first: project access is never hidden behind decoration.
2. The program structure is the map: line → program → edition → project.
3. Honest records: only factual fields; examples are always labelled.
4. Adding a project means adding one file.

## Accessibility & Inclusion

WCAG 2.2 AA (from DESIGN.md).
