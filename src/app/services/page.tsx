import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI Workflow Automation, AI Chatbots & Agents, AI Analytics, Web & System Development, Branding & Content, AI Strategy & Audits — what Narix builds.',
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
