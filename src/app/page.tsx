import { AboutSection } from '@/components/sections/AboutSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CollaborationSection } from '@/components/sections/CollaborationSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection compact />
      <BlogSection />
      <CollaborationSection />
    </>
  );
}
