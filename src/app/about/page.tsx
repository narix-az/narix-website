import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About Narix',
  description:
    'Narix is a senior team of engineers, designers and AI specialists in Baku, Azerbaijan — building AI systems that move real numbers, not theatrical demos.',
  alternates: {
    canonical: 'https://narix.az/about',
    languages: {
      en: 'https://narix.az/about',
      az: 'https://narix.az/about',
      'x-default': 'https://narix.az/about',
    },
  },
  openGraph: {
    url: 'https://narix.az/about',
    title: 'About Narix',
    description:
      'A senior team of engineers, designers and AI specialists building AI systems that move real numbers.',
  },
};

export default function AboutPage() {
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
