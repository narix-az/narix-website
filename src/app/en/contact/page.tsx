import ContactView from '@/components/pages/ContactView';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('en', 'contact');

export default function Page() {
  return <ContactView />;
}
