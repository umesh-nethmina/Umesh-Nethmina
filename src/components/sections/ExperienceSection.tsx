import { education } from '@/data/education';
import { experience } from '@/data/experience';

export function ExperienceSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Journey</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Education and hands-on work moving in parallel.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
            <h3 className="text-2xl font-bold text-[var(--foreground)]">Experience</h3>
            <div className="mt-8 space-y-6">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="rounded-[1.5rem] border border-[var(--border)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{item.period}</p>
                  <h4 className="mt-3 text-xl font-bold text-[var(--foreground)]">{item.role}</h4>
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
          </div>

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
            <h3 className="text-2xl font-bold text-[var(--foreground)]">Education</h3>
            <div className="mt-8 space-y-6">
              {education.map((item) => (
                <article key={`${item.institution}-${item.degree}`} className="rounded-[1.5rem] border border-[var(--border)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{item.period}</p>
                  <h4 className="mt-3 text-xl font-bold text-[var(--foreground)]">{item.degree}</h4>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.institution}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}