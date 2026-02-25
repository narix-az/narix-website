import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Narix services: AI & Workflow Automation, AI Chatbots & Customer Support, AI Content & Branding, Business Analytics & AI Insights, Web Development & Digital Solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Our Services"
        description="AI-powered solutions tailored to your business. From workflow automation to web development — we deliver results that scale."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
