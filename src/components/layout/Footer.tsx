import Link from 'next/link';

import { navigationLinks, siteConfig, socialLinks } from '@/data/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Portfolio</p>
          <h2 className="mt-3 text-2xl font-bold text-[var(--foreground)]">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">{siteConfig.role}</p>
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
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
