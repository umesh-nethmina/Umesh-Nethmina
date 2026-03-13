import { Briefcase, GraduationCap, Handshake, MessageSquare } from 'lucide-react';

import { ContactSection } from '@/components/sections/ContactSection';
import { socialLinks, siteConfig } from '@/data/site';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="space-y-12 px-4 py-16 sm:px-6 lg:px-8 lg:space-y-16 lg:py-24">
      <section className="mx-auto max-w-7xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Contact</p>
        <h1 className="text-5xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">Contact Me</h1>
        <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">
          Thanks for visiting my portfolio. I would love to connect with recruiters, teams, and collaborators working
          on meaningful software ideas.
        </p>
      </section>

      <ContactSection />

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--accent)]">Collaboration Invitation</p>
        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
          Open to internships, freelance projects, and open-source collaboration.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          If you have an opportunity where I can contribute as a developer and grow through real engineering work,
          please reach out.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.5rem] border border-[var(--border)] p-5">
            <Briefcase className="h-6 w-6 text-[color:var(--accent)]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Internships</p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] p-5">
            <Handshake className="h-6 w-6 text-[color:var(--accent)]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Freelance</p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] p-5">
            <MessageSquare className="h-6 w-6 text-[color:var(--accent)]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Mentorship</p>
          </div>
          <div className="rounded-[1.5rem] border border-[var(--border)] p-5">
            <GraduationCap className="h-6 w-6 text-[color:var(--accent)]" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Open Source</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Footer Contact Reminder</p>
        <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
          Prefer direct contact? Reach me through email or social platforms.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={`mailto:${siteConfig.email}`} variant="secondary">
            {siteConfig.email}
          </Button>
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              href={link.url}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noreferrer'}
              variant="ghost"
            >
              {link.name}
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}