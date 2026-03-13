import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';
import { notFound } from 'next/navigation';

import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">{project.category}</p>
          <h1 className="text-5xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">{project.title}</h1>
          <p className="max-w-4xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p>
        </div>

        <div className="relative h-[22rem] overflow-hidden rounded-[2.2rem] border border-[var(--border)] sm:h-[30rem]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button href={project.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
            View Code <Github className="h-4 w-4" />
          </Button>
          <Button href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href="/projects" variant="ghost">
            Back to Projects
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Key Features</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {project.keyFeatures.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Challenges Faced</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-[var(--foreground)]">Lessons Learned</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">
              {project.lessonsLearned.map((lesson) => (
                <li key={lesson} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
