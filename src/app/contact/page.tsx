import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Narix',
  description:
    'Tell us what you’re trying to build, automate or fix. Email hello@narix.az or call +994 51 560 06 25 — we respond within 24 hours, usually much faster.',
  alternates: {
    canonical: 'https://narix.az/contact',
    languages: {
      en: 'https://narix.az/contact',
      az: 'https://narix.az/contact',
      'x-default': 'https://narix.az/contact',
    },
  },
  openGraph: {
    url: 'https://narix.az/contact',
    title: 'Contact Narix',
    description:
      'Email hello@narix.az or call +994 51 560 06 25 — we respond within 24 hours.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero page="contact" />
      <Contact />
    </>
  );
}
