import type { ReactElement } from 'react';
import type { ProjectIconKey } from '@/data/deliveredProjects';

// One small line icon per project, drawn here so project cards never wait on
// (or break because of) a third-party icon service. 24×24, 1.8 stroke,
// `currentColor` — the tile behind it decides the colour.
const paths: Record<ProjectIconKey, ReactElement> = {
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8L16 9.5" />
    </>
  ),
  cabin: (
    <>
      <path d="M3 20L12 4l9 16" />
      <path d="M7.5 20v-4.5a4.5 4.5 0 019 0V20" />
      <path d="M2 20h20" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9v5" />
    </>
  ),
  pulse: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M6.5 11h2.5l1.5-3 3 6 1.5-3h2.5M8 21h8M12 17v4" />
    </>
  ),
  code: (
    <>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l11-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </>
  ),
  car: (
    <>
      <path d="M4 16v-3l2-5h12l2 5v3M3 16h18v2H3z" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="16.5" cy="18" r="1.5" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.7-2 2.5-5 2.5" />
    </>
  ),
  bowl: (
    <>
      <path d="M3 11h18a9 9 0 01-18 0zM8 21h8M9 3l2 8M15 3l-2 8" />
    </>
  ),
  cutlery: (
    <>
      <path d="M7 3v8M4.5 3v4a2.5 2.5 0 005 0V3M7 11v10M17 21V3c-2.2 1.5-3.5 4-3.5 7 0 2 1.3 3 3.5 3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M9 15.5l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
};

export default function ProjectIcon({ name, size = 28 }: { name: ProjectIconKey; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
