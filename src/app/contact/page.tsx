import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Narix for AI business solutions. Get in touch and our team will respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Contact Us"
        description="Ready to transform your business with AI? Reach out and let's discuss your project."
      />
      <Contact />
    </>
  );
}
