import ProjectsView from '@/components/pages/ProjectsView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'projects');

export default function Page() {
  return <ProjectsView />;
}
