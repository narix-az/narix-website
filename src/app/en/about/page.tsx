import AboutView from '@/components/pages/AboutView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'about');

export default function Page() {
  return <AboutView />;
}
