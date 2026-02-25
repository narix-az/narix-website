import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Narix – where technology meets strategy. Our team turns complex challenges into AI-powered solutions that drive real results.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="page"
        title="About Narix"
        description="Where technology meets strategy. We turn complex challenges into simple, AI-powered solutions that drive real business results."
      />
      <About />
      <Services variant="preview" />
      <Process />
      <CTA />
    </>
  );
}
