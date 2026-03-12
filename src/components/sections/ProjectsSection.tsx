import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project/ProjectCard';

interface ProjectsSectionProps {
  compact?: boolean;
}

export function ProjectsSection({ compact = false }: ProjectsSectionProps) {
  const visibleProjects = compact ? projects.slice(0, 2) : projects;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Projects</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Selected work across product, data, and operational tooling.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}