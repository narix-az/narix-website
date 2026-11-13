import AboutView from '@/components/pages/AboutView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('az', 'about');

export default function Page() {
  return <AboutView />;
}
