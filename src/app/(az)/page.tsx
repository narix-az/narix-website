import HomeView from '@/components/pages/HomeView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('az', 'home');

export default function Page() {
  return <HomeView />;
}
