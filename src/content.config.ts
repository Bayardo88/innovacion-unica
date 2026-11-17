import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Arquitectura (FigJam): Repositorio → Línea → Programa → Edición → Proyecto.
 * - Las líneas son fijas (ver src/data/site.ts).
 * - Cada programa es un archivo en src/content/programs y declara sus ediciones.
 * - Cada proyecto es un archivo en src/content/projects y apunta a un programa + edición.
 */

const motifs = [
  'phone', 'leaf', 'bulb', 'gear', 'book', 'chart',
  'people', 'box', 'map', 'megaphone', 'palette', 'seal',
] as const;

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    name: z.string(),
    line: z.enum(['competencias', 'innovacion-educativa']),
    order: z.number().default(0),
    summary: z.string(),
    motif: z.enum(motifs).default('bulb'),
    editions: z
      .array(
        z.object({
          id: z.string(), // p. ej. "2026" o "2026-marketing"
          label: z.string(), // p. ej. "2026 · Marketing"
          year: z.number(),
        }),
      )
      .min(1),
  }),
});

const media = z.object({
  /** Ruta dentro de /public, p. ej. "/proyectos/mi-proyecto/foto-1.webp". */
  src: z.string().optional(),
  alt: z.string(),
  caption: z.string().optional(),
  credit: z.string().optional(),
  /** Solo para contenido de ejemplo: dibuja una ilustración en lugar de una foto. */
  motif: z.enum(motifs).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(), // Nombre del proyecto
    team: z.string(), // Nombre del equipo
    participants: z
      .array(z.object({ name: z.string(), role: z.string().optional() }))
      .min(1),
    category: z.enum(['tecnologica', 'social', 'procesos', 'otra']),
    summary: z.string().max(220), // Descripción breve (tarjetas)
    program: reference('programs'),
    edition: z.string(), // id de la edición dentro del programa
    year: z.number(),
    stage: z
      .enum(['idea', 'prototipo', 'validacion', 'implementacion', 'concluido'])
      .optional(),
    topics: z.array(z.string()).default([]),
    cover: media,
    gallery: z.array(media).default([]),
    /** Enlace de YouTube (watch, youtu.be o shorts). */
    video: z.string().url().optional(),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    /** Marca el contenido ficticio. Se muestra con la etiqueta "Ejemplo". */
    example: z.boolean().default(false),
    visibility: z.enum(['draft', 'public']).default('public'),
  }),
});

export const collections = { programs, projects };
