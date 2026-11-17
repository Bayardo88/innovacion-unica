/** Textos e identidad configurables. Reemplazar con información verificada antes de publicar. */
export const site = {
  name: 'UNICA',
  archiveName: 'Archivo de Innovación',
  tagline: 'Ideas que se convierten en proyectos.',
  description:
    'Repositorio de proyectos de innovación de UNICA: competencias e innovación educativa, organizados por programa y edición.',
  // TODO: reemplazar por el correo oficial del repositorio.
  contactEmail: 'innovacion@unica.example',
};

export const lines = {
  competencias: {
    id: 'competencias',
    name: 'Proyectos de Competencias',
    short: 'Competencias',
    summary:
      'Retos y competencias donde equipos de estudiantes proponen soluciones en tiempo limitado, frente a jurados y otras universidades.',
  },
  'innovacion-educativa': {
    id: 'innovacion-educativa',
    name: 'Innovación Educativa',
    short: 'Innovación Educativa',
    summary:
      'Proyectos que nacen dentro de las carreras y materias: trabajos de culminación, proyectos integradores, emprendimiento y propiedad intelectual.',
  },
} as const;

export type LineId = keyof typeof lines;

export const categories = {
  tecnologica: { label: 'Tecnológica', tone: 'blue' },
  social: { label: 'Social', tone: 'pink' },
  procesos: { label: 'Procesos', tone: 'green' },
  otra: { label: 'Otra', tone: 'sand' },
} as const;

export type CategoryId = keyof typeof categories;

export const stages = {
  idea: 'Idea',
  prototipo: 'Prototipo',
  validacion: 'Validación',
  implementacion: 'Implementación',
  concluido: 'Concluido',
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/programas', label: 'Programas' },
  { href: '/sobre-el-repositorio', label: 'Sobre el repositorio' },
];
