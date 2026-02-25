import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import DeliveredProjects from '@/components/sections/DeliveredProjects';
import { deliveredProjects } from '@/data/deliveredProjects';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Narix – AI Business Solutions. Transform your business with AI-powered workflow automation, chatbots, content & branding, analytics, and web development.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeliveredProjects projects={deliveredProjects} />
      <Stats />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
