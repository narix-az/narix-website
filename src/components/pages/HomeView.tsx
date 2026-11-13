import Hero from '@/components/sections/Hero';
import PartnersCarousel from '@/components/sections/PartnersCarousel';
import DeliveredProjects from '@/components/sections/DeliveredProjects';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import { partners } from '@/data/partners';
import styles from '@/app/home.module.css';

export default function HomeView() {
  return (
    <>
      <Hero />
      <section className={styles.partners}>
        <div className="container">
          <PartnersCarousel items={partners} />
        </div>
      </section>
      <Stats />
      <DeliveredProjects variant="home" />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}
