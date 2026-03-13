import Image from 'next/image';
import { BookOpen, Code2, Cpu, GitBranch, Lightbulb, Rocket } from 'lucide-react';

import { aboutPageContent, siteConfig } from '@/data/site';
import { skillCategories } from '@/data/skills';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  const iconMap = {
    cpu: Cpu,
    git: GitBranch,
    book: BookOpen,
  } as const;

  return (
    <div className="space-y-16 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-24 lg:py-24">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--accent)]">About</p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">About Me</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          {aboutPageContent.headerDescription}
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] bg-[var(--surface)] p-4 backdrop-blur-xl">
          <div className="relative h-[28rem] overflow-hidden rounded-[1.8rem]">
            <Image
              src={aboutPageContent.profileImage}
              alt="Developer portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <h2 className="text-4xl font-black tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
            {aboutPageContent.journeyHeadline}
          </h2>
          {aboutPageContent.journeyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="pt-2">
            <Button href="/contact">Let&apos;s Collaborate</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Skills & Expertise</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Technical strengths across the modern product development stack.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{`0${index + 1}`}</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{category.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Education</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Academic foundation and growth milestones.
          </h2>
        </div>

        <div className="relative space-y-8 pl-8 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-[var(--border)]">
          {education.map((item) => (
            <article key={`${item.institution}-${item.degree}`} className="relative rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
              <span className="absolute -left-[1.95rem] top-8 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[color:var(--accent)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{item.degree}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.institution}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Experience</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Learning journey through internships, freelance work, and shipping products.
          </h2>
        </div>

        <div className="relative space-y-8 pl-8 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-[var(--border)]">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
              <span className="absolute -left-[1.95rem] top-8 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[color:var(--accent)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--accent)]">{item.period}</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{item.role}</h3>
              <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Personal Interests</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            What keeps me curious outside day-to-day delivery.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutPageContent.interests.map((interest) => {
            const Icon = iconMap[interest.icon as keyof typeof iconMap] ?? Cpu;

            return (
              <article key={interest.title} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
                <Icon className="h-7 w-7 text-[color:var(--accent)]" />
                <h3 className="mt-4 text-2xl font-bold text-[var(--foreground)]">{interest.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{interest.description}</p>
              </article>
            );
          })}
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl">
          <p className="text-sm leading-7 text-[var(--muted)]">
            {aboutPageContent.closingLine}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" variant="secondary">
              <Code2 className="h-4 w-4" /> Resume
            </Button>
            <Button href="/projects" variant="ghost">
              <Rocket className="h-4 w-4" /> Explore Projects
            </Button>
            <Button href="/blog" variant="ghost">
              <Lightbulb className="h-4 w-4" /> Read Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}