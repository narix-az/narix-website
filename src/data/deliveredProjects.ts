// Non-translatable project metadata. All text (name, category, description,
// features, tags, stats) lives in `src/i18n/translations.ts` under
// `delivered.projects[id]` so it can be localized.

export type Accent = 'orange' | 'pink' | 'violet' | 'blue' | 'lime' | 'yellow';

export interface DeliveredProjectMeta {
  id: string;
  logoUrl: string;
  link?: string;
  accent: Accent;
  /** Spans two columns in the bento grid. */
  featured?: boolean;
  /** Shows a "New" badge. */
  isNew?: boolean;
}

/** Vivid fills that need white (not ink) content on top — see DESIGN.md §2. */
export const darkAccents: ReadonlySet<Accent> = new Set(['violet', 'blue']);

export const deliveredProjects: DeliveredProjectMeta[] = [
  {
    id: 'inji',
    logoUrl: 'https://api.iconify.design/mdi/checkbox-multiple-marked-circle-outline.svg',
    link: 'https://inji.narix.az/',
    accent: 'lime',
    featured: true,
    isNew: true,
  },
  {
    id: 'chamanly',
    logoUrl: 'https://api.iconify.design/mdi/home-group.svg',
    link: 'https://chamanly.az/',
    accent: 'orange',
  },
  {
    id: 'bircv',
    logoUrl: 'https://api.iconify.design/mdi/file-account-outline.svg',
    link: 'https://bircv.az/',
    accent: 'violet',
  },
  {
    id: 'fintechauto',
    logoUrl: 'https://api.iconify.design/mdi/car-electric.svg',
    link: 'https://fintechauto.az/',
    accent: 'blue',
  },
  {
    id: 'maliyye',
    logoUrl: 'https://api.iconify.design/mdi/calculator-variant.svg',
    link: 'https://faizhesabla.az/',
    accent: 'yellow',
  },
  {
    id: 'ai-call-center',
    logoUrl: 'https://api.iconify.design/mdi/headset.svg',
    accent: 'pink',
    featured: true,
  },
  {
    id: 'go-sushi',
    logoUrl: 'https://api.iconify.design/mdi/bowl-mix.svg',
    link: 'https://go-sushi.pages.dev/',
    accent: 'orange',
  },
  {
    id: 'meta-sushi',
    logoUrl: 'https://api.iconify.design/mdi/silverware-fork-knife.svg',
    accent: 'lime',
  },
  {
    id: 'reservation',
    logoUrl: 'https://api.iconify.design/mdi/calendar-check.svg',
    accent: 'violet',
  },
  {
    id: 'sales-ai',
    logoUrl: 'https://api.iconify.design/mdi/chart-line-variant.svg',
    accent: 'yellow',
  },
];

// Type preserved for component props / convenience.
export type DeliveredProject = DeliveredProjectMeta;
