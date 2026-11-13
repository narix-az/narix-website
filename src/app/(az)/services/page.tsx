import ServicesView from '@/components/pages/ServicesView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('az', 'services');

export default function Page() {
  return <ServicesView />;
}
