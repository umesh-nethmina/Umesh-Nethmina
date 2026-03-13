import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

import { siteConfig, socialLinks } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const githubUrl = socialLinks.find((link) => link.name === 'GitHub')?.url;
  const linkedinUrl = socialLinks.find((link) => link.name === 'LinkedIn')?.url;
  const emailUrl = socialLinks.find((link) => link.name === 'Email')?.url;

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute left-[-10rem] top-[-8rem] h-72 w-72 rounded-full bg-[color:var(--accent)]/18 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-[-9rem] right-[-8rem] h-72 w-72 rounded-full bg-[color:var(--accent-strong)]/18 blur-3xl animate-float-slower" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            <Sparkles className="h-3.5 w-3.5" />
            {siteConfig.availability}
          </p>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              {siteConfig.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="text-xl font-semibold tracking-[-0.02em] text-[color:var(--accent-strong)] sm:text-2xl">{siteConfig.role}</p>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {siteConfig.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="/projects">
              View My Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" variant="secondary">
              Download Resume <Download className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {githubUrl ? (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <Github className="h-4 w-4" /> GitHub
              </Link>
            ) : null}
            {linkedinUrl ? (
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Link>
            ) : null}
            {emailUrl ? (
              <Link
                href={emailUrl}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              >
                <Mail className="h-4 w-4" /> Email
              </Link>
            ) : null}
          </div>
        </div>

        <div className="space-y-5">
          <article className="relative overflow-hidden rounded-[2.2rem] border border-[var(--border)] p-6 backdrop-blur-xl">
            <div className="relative flex justify-center">
              <div className="mx-auto h-60 w-60 rounded-[2rem] p-2 animate-float-slow sm:h-64 sm:w-64">
                <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} profile photo`}
                    fill
                    sizes="(min-width: 640px) 256px, 240px"
                    className="object-cover object-center scale-[1.04] contrast-110 saturate-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {siteConfig.heroStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{stat.label}</p>
                <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}