import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">About</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Product-minded engineering with a strong eye for interfaces and reliability.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
            I focus on building software that feels effortless for users and maintainable for teams.
          </p>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
          <p>{siteConfig.about}</p>
          <p>{siteConfig.aboutExtended}</p>
          <p>
            I enjoy solving real-world problems with practical architecture, thoughtful UX decisions, and continuous
            learning from each product release.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Focus</p>
              <p className="mt-3 text-xl font-bold text-[var(--foreground)]">Clean architecture and interface systems</p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Approach</p>
              <p className="mt-3 text-xl font-bold text-[var(--foreground)]">Fast iteration without losing maintainability</p>
            </div>
          </div>
          <div className="pt-2">
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}