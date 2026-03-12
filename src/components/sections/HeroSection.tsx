import { ArrowRight, Mail } from 'lucide-react';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-8">
          <p className="inline-flex rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--accent)]">
            {siteConfig.availability}
          </p>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
              {siteConfig.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-8xl">
              Building digital products with clarity, restraint, and strong engineering.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {siteConfig.intro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="/projects">
              Explore projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              Start a conversation <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {siteConfig.heroStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{stat.label}</p>
              <p className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)]">{stat.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}