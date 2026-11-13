import ServicesView from '@/components/pages/ServicesView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'services');

export default function Page() {
  return <ServicesView />;
}
