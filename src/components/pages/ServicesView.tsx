import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export default function ServicesView() {
  return (
    <>
      <PageHero page="services" />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
