import PageHero from '@/components/sections/PageHero';
import DeliveredProjects from '@/components/sections/DeliveredProjects';
import CTA from '@/components/sections/CTA';

export default function ProjectsView() {
  return (
    <>
      <PageHero page="projects" />
      <DeliveredProjects variant="all" />
      <CTA />
    </>
  );
}
