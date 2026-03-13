'use client';

import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';

import type { ProjectItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden rounded-[2rem] border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
          {project.category}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
            {project.featured ? 'Featured project' : 'Case study'}
          </p>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <p className="text-sm leading-7 text-[var(--muted)]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
            View Code <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" href={`/projects/${project.slug}`}>
            Project Details
          </Button>
        </div>
      </div>
    </Card>
  );
}