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
  | 'music'
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
  /** `ecosystem` = Narix's own products and brands; `client` = work delivered for clients. */
  group: 'ecosystem' | 'client';
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

export const deliveredProjects: DeliveredProjectMeta[] = [
  // ── Narix ecosystem ──
  { id: 'chamanly', icon: 'cabin', group: 'ecosystem', link: 'https://chamanly.az/', accent: 'orange', featured: true },
  { id: 'inji', icon: 'check', group: 'ecosystem', link: 'https://inji.narix.az/', accent: 'lime' },
  { id: 'academy', icon: 'graduation', group: 'ecosystem', link: 'https://academy.narix.az/', accent: 'blue', isNew: true },
  { id: 'aimonitor', icon: 'pulse', group: 'ecosystem', link: 'https://ai-monitor.app/', accent: 'violet', isNew: true },
  { id: 'bircv', icon: 'document', group: 'ecosystem', link: 'https://bircv.az/', accent: 'pink' },
  { id: 'narcode', icon: 'code', group: 'ecosystem', accent: 'yellow' },
  { id: 'danisir', icon: 'spark', group: 'ecosystem', accent: 'blue' },
  { id: 'narmelody', icon: 'music', group: 'ecosystem', accent: 'orange' },

  // ── Client work ──
  { id: 'fintechauto', icon: 'car', group: 'client', link: 'https://fintechauto.az/', accent: 'blue' },
  { id: 'maliyye', icon: 'calculator', group: 'client', link: 'https://faizhesabla.az/', accent: 'yellow' },
  { id: 'go-sushi', icon: 'bowl', group: 'client', link: 'https://go-sushi.pages.dev/', accent: 'orange' },
  { id: 'ai-call-center', icon: 'headset', group: 'client', accent: 'pink', featured: true },
  { id: 'meta-sushi', icon: 'cutlery', group: 'client', accent: 'lime' },
  { id: 'reservation', icon: 'calendar', group: 'client', accent: 'violet' },
  { id: 'sales-ai', icon: 'chart', group: 'client', accent: 'yellow' },
];

export const ecosystemProjects = deliveredProjects.filter((p) => p.group === 'ecosystem');
export const clientProjects = deliveredProjects.filter((p) => p.group === 'client');

// Type preserved for component props / convenience.
export type DeliveredProject = DeliveredProjectMeta;
