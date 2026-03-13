import Link from 'next/link';

import { navigationLinks, siteConfig, socialLinks } from '@/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-2xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">Portfolio</p>
          <h2 className="text-2xl font-black tracking-[-0.03em] text-[var(--foreground)]">{siteConfig.name}</h2>
          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">{siteConfig.role}</p>
          <Link href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-[color:var(--accent)] hover:opacity-80">
            {siteConfig.email}
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Navigate</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--foreground)]">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Connect</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--foreground)]">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noreferrer'}
                className="hover:text-[color:var(--accent)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Designed and built with passion.</p>
        </div>
      </div>
    </footer>
  );
}
