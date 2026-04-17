import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import PartnersCarousel from '@/components/sections/PartnersCarousel';
import DeliveredProjects from '@/components/sections/DeliveredProjects';
import { partners } from '@/data/partners';
import { deliveredProjects } from '@/data/deliveredProjects';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'AI Systems That Run Your Business',
  description:
    'Narix designs, builds and operates AI systems — workflow automation, AI agents, analytics and modern web platforms — for fast-moving teams.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.partners}>
        <div className="container">
          <PartnersCarousel items={partners} />
        </div>
      </section>
      <DeliveredProjects projects={deliveredProjects} />
      <Stats />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
