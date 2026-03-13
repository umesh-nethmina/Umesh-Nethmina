'use client';

import { useState } from 'react';

import { siteConfig, socialLinks } from '@/data/site';
import type { ContactFormState } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
  });
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    try {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );

      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

      setFormData({ name: '', email: '', message: '' });
      setFeedback('Your email app should open now.');
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Contact</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Let’s talk about a product, a team, or a build problem worth solving.
          </h2>
          <p className="text-lg leading-8 text-[var(--muted)]">Prefer email or social links? Those work too.</p>
          <div className="space-y-4 text-sm text-[var(--foreground)]">
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.location}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Button key={link.name} href={link.url} variant="secondary" target="_blank" rel="noreferrer">
                {link.name}
              </Button>
            ))}
          </div>
        </div>

        <Card className="rounded-[2rem] border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
                <span>Name</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--accent)]"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm font-medium text-[var(--foreground)]">
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-[1.5rem] border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[color:var(--accent)]"
              />
            </label>
            {feedback ? <p className="text-sm text-[var(--muted)]">{feedback}</p> : null}
            <Button type="submit">Send message</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}