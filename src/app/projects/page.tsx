'use client';

import { useMemo, useState } from 'react';

import { projects } from '@/data/projects';
import type { ProjectItem } from '@/types';
import { ProjectCard } from '@/components/project/ProjectCard';

export default function ProjectsPage() {
  type ProjectCategoryFilter = 'All Projects' | ProjectItem['category'];

  const categories: ProjectCategoryFilter[] = [
    'All Projects',
    'Web Applications',
    'Mobile Applications',
    'IoT Projects',
    'Academic Projects',
  ];

  const [activeCategory, setActiveCategory] = useState<ProjectCategoryFilter>('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Projects</p>
          <h1 className="text-5xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">My Projects</h1>
          <p className="text-lg leading-8 text-[var(--muted)]">
            These projects demonstrate my experience in building modern applications across web, mobile, IoT, and
            academic problem spaces.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? 'border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]'
                  : 'border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}