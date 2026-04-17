// Non-translatable project metadata. All text (name, category, description,
// features, tags, stats) lives in `src/i18n/translations.ts` under
// `delivered.projects[id]` so it can be localized.

export interface DeliveredProjectMeta {
  id: string;
  logoUrl: string;
  link?: string;
  accent?: 'violet' | 'blue' | 'cyan';
}

export const deliveredProjects: DeliveredProjectMeta[] = [
  {
    id: 'chamanly',
    logoUrl: 'https://api.iconify.design/mdi/home-group.svg',
    link: 'https://chamanly.az/',
    accent: 'violet',
  },
  {
    id: 'meta-sushi',
    logoUrl: 'https://api.iconify.design/mdi/silverware-fork-knife.svg',
    accent: 'cyan',
  },
  {
    id: 'fintechauto',
    logoUrl: 'https://api.iconify.design/mdi/car-electric.svg',
    link: 'https://fintechauto.az/',
    accent: 'blue',
  },
  {
    id: 'go-sushi',
    logoUrl: 'https://api.iconify.design/mdi/bowl-mix.svg',
    link: 'https://go-sushi.pages.dev/',
    accent: 'violet',
  },
  {
    id: 'maliyye',
    logoUrl: 'https://api.iconify.design/mdi/calculator-variant.svg',
    accent: 'blue',
  },
  {
    id: 'reservation',
    logoUrl: 'https://api.iconify.design/mdi/calendar-check.svg',
    accent: 'cyan',
  },
  {
    id: 'ai-call-center',
    logoUrl: 'https://api.iconify.design/mdi/headset.svg',
    accent: 'violet',
  },
  {
    id: 'sales-ai',
    logoUrl: 'https://api.iconify.design/mdi/chart-line-variant.svg',
    accent: 'cyan',
  },
];

// Type preserved for component props / convenience.
export type DeliveredProject = DeliveredProjectMeta;
