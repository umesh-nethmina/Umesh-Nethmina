import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Skills</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Full-stack capabilities grounded in real delivery work.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-[var(--foreground)]">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{category.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--foreground)]">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}