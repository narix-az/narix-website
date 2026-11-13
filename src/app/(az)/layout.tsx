import type { ReactNode } from 'react';
import SiteShell from '@/components/layout/SiteShell';

export default function AzerbaijaniLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="az">{children}</SiteShell>;
}
