import { skillCategories } from '@/data/skills';

export function SkillsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Skills</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Full stack expertise across frontend, backend, data, and delivery workflows.
          </h2>
          <p className="text-lg leading-8 text-[var(--muted)]">
            A practical toolkit shaped by shipping real products and solving performance, reliability, and user
            experience challenges.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.14)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">{`0${index + 1}`}</p>
              <h3 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{category.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2 text-sm text-[var(--foreground)]">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)] dark:bg-white/5"
                  >
                    {item}
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