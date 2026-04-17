import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Narix',
  description:
    'Tell us what you’re trying to build, automate or fix. We respond within 24 hours — usually much faster.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />
      <Contact />
    </>
  );
}
