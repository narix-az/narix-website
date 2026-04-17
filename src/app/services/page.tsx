import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI Workflow Automation, AI Chatbots & Agents, AI Analytics, Web & System Development, Branding & Content, AI Strategy & Audits — what Narix builds for businesses in Azerbaijan and abroad.',
  alternates: {
    canonical: 'https://narix.az/services',
    languages: {
      en: 'https://narix.az/services',
      az: 'https://narix.az/services',
      'x-default': 'https://narix.az/services',
    },
  },
  openGraph: {
    url: 'https://narix.az/services',
    title: 'Services · Narix',
    description:
      'AI Workflow Automation, AI Chatbots & Agents, AI Analytics, Web & System Development and more.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero page="services" />
      <Services />
      <Stats />
      <Process />
      <CTA />
    </>
  );
}
