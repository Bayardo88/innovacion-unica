import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { categories, lines, type LineId } from '../data/site';

export type Project = CollectionEntry<'projects'>;
export type Program = CollectionEntry<'programs'>;

/** Proyecto + datos de su programa/edición ya resueltos, listo para tarjetas. */
export type ProjectView = {
  id: string;
  href: string;
  title: string;
  team: string;
  summary: string;
  year: number;
  category: Project['data']['category'];
  categoryLabel: string;
  programId: string;
  programName: string;
  lineId: LineId;
  lineName: string;
  editionId: string;
  editionLabel: string;
  cover: Project['data']['cover'];
  publishedAt: Date;
  example: boolean;
  featured: boolean;
  entry: Project;
};

export async function getPrograms(): Promise<Program[]> {
  const all = await getCollection('programs');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getProgramsByLine(line: LineId) {
  return (await getPrograms()).filter((p) => p.data.line === line);
}

function toView(project: Project, program: Program): ProjectView {
  const edition = program.data.editions.find((e) => e.id === project.data.edition);
  if (!edition) {
    throw new Error(
      `El proyecto "${project.id}" usa la edición "${project.data.edition}", que no existe en el programa "${program.id}".`,
    );
  }
  return {
    id: project.id,
    href: `/proyectos/${project.id}`,
    title: project.data.title,
    team: project.data.team,
    summary: project.data.summary,
    year: project.data.year,
    category: project.data.category,
    categoryLabel: categories[project.data.category].label,
    programId: program.id,
    programName: program.data.name,
    lineId: program.data.line,
    lineName: lines[program.data.line].name,
    editionId: edition.id,
    editionLabel: edition.label,
    cover: project.data.cover,
    publishedAt: project.data.publishedAt,
    example: project.data.example,
    featured: project.data.featured,
    entry: project,
  };
}

/** Solo proyectos públicos, más recientes primero. */
export async function getPublicProjects(): Promise<ProjectView[]> {
  const [projects, programs] = await Promise.all([
    getCollection('projects', ({ data }) => data.visibility === 'public'),
    getPrograms(),
  ]);
  const byId = new Map(programs.map((p) => [p.id, p]));
  return projects
    .map((p) => {
      const program = byId.get(p.data.program.id);
      if (!program) throw new Error(`Programa desconocido en "${p.id}": ${p.data.program.id}`);
      return toView(p, program);
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export async function getProjectView(project: Project) {
  const program = await getEntry(project.data.program);
  if (!program) throw new Error(`Programa desconocido en "${project.id}"`);
  return toView(project, program);
}

export async function getFeaturedProjects(limit = 3) {
  const all = await getPublicProjects();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

/** Relacionados: misma línea o categoría, excluyendo el propio. */
export async function getRelatedProjects(view: ProjectView, limit = 3) {
  const all = await getPublicProjects();
  const score = (p: ProjectView) =>
    (p.programId === view.programId ? 3 : 0) +
    (p.category === view.category ? 2 : 0) +
    (p.lineId === view.lineId ? 1 : 0);
  return all
    .filter((p) => p.id !== view.id)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.publishedAt.getTime() - a.p.publishedAt.getTime())
    .slice(0, limit)
    .map(({ p }) => p);
}

/** Extrae el id de un enlace de YouTube. */
export function youtubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1) || null;
    if (u.hostname.endsWith('youtube.com') || u.hostname.endsWith('youtube-nocookie.com')) {
      if (u.searchParams.get('v')) return u.searchParams.get('v');
      const m = u.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/);
      if (m) return m[2];
    }
  } catch {}
  return null;
}
