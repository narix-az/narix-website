// Non-translatable project metadata. All text (name, category, description,
// features, tags, stats) lives in `src/i18n/translations.ts` under
// `delivered.projects[id]` so it can be localized.

export type Accent = 'orange' | 'pink' | 'violet' | 'blue' | 'lime' | 'yellow';

/** Icons are drawn in `src/components/ui/ProjectIcon.tsx` — no external requests. */
export type ProjectIconKey =
  | 'check'
  | 'cabin'
  | 'document'
  | 'graduation'
  | 'pulse'
  | 'code'
  | 'spark'
  | 'car'
  | 'calculator'
  | 'headset'
  | 'bowl'
  | 'cutlery'
  | 'calendar'
  | 'chart';

export interface DeliveredProjectMeta {
  id: string;
  icon: ProjectIconKey;
  /** Only for projects that are publicly reachable. */
  link?: string;
  accent: Accent;
  /** Spans two columns in the bento grid. */
  featured?: boolean;
  /** Shows a "New" badge. */
  isNew?: boolean;
}

/** Vivid fills that need white (not ink) content on top — see DESIGN.md §2. */
export const darkAccents: ReadonlySet<Accent> = new Set(['violet', 'blue']);

// One list, in the order the projects are shown. The first eight appear on the
// home page; the Projects page shows all of them.
export const deliveredProjects: DeliveredProjectMeta[] = [
  { id: 'chamanly', icon: 'cabin', link: 'https://chamanly.az/', accent: 'orange', featured: true },
  { id: 'inji', icon: 'check', link: 'https://inji.narix.az/', accent: 'lime' },
  { id: 'academy', icon: 'graduation', link: 'https://academy.narix.az/', accent: 'blue', isNew: true },
  { id: 'aimonitor', icon: 'pulse', link: 'https://ai-monitor.app/', accent: 'violet', isNew: true },
  { id: 'bircv', icon: 'document', link: 'https://bircv.az/', accent: 'pink' },
  { id: 'narcode', icon: 'code', accent: 'yellow' },
  { id: 'danisir', icon: 'spark', accent: 'blue' },
  { id: 'fintechauto', icon: 'car', link: 'https://fintechauto.az/', accent: 'blue' },
  { id: 'maliyye', icon: 'calculator', link: 'https://faizhesabla.az/', accent: 'yellow' },
  { id: 'go-sushi', icon: 'bowl', link: 'https://go-sushi.pages.dev/', accent: 'orange' },
  { id: 'ai-call-center', icon: 'headset', accent: 'pink' },
  { id: 'meta-sushi', icon: 'cutlery', accent: 'lime' },
  { id: 'reservation', icon: 'calendar', accent: 'violet' },
  { id: 'sales-ai', icon: 'chart', accent: 'yellow' },
];

/** The selection shown on the home page. */
export const homeProjects = deliveredProjects.slice(0, 8);

// Type preserved for component props / convenience.
export type DeliveredProject = DeliveredProjectMeta;
