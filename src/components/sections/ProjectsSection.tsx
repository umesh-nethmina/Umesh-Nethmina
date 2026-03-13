import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project/ProjectCard';
import { Button } from '@/components/ui/Button';

interface ProjectsSectionProps {
  compact?: boolean;
}

export function ProjectsSection({ compact = false }: ProjectsSectionProps) {
  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = compact
    ? (featuredProjects.length >= 3 ? featuredProjects : projects).slice(0, 4)
    : projects;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Projects</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              Featured builds that combine product thinking with solid engineering execution.
            </h2>
          </div>
          {compact ? (
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          ) : null}
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