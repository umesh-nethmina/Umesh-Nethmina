import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/Button';

export function CollaborationSection() {
  return (
    <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color:var(--accent)]/22 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[color:var(--accent-strong)]/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Collaboration</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
                I am always interested in meaningful opportunities and collaborations.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
                If you are building a product, scaling a team, or exploring a new idea, I would love to hear about it.
              </p>
            </div>

            <Button href="/contact" className="w-full sm:w-auto">
              Let&apos;s Connect <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
