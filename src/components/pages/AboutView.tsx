import PageHero from '@/components/sections/PageHero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function AboutView() {
  return (
    <>
      <PageHero page="about" />
      <About />
      <Stats />
      <Services variant="preview" />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
