'use client';

import Link from 'next/link';
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navigationLinks, siteConfig, socialLinks } from '@/data/site';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mounted, resolvedTheme, setTheme } = useTheme();
  const githubUrl = socialLinks.find((link) => link.name === 'GitHub')?.url;
  const linkedinUrl = socialLinks.find((link) => link.name === 'LinkedIn')?.url;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--surface)]/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 text-[var(--foreground)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--foreground)] text-sm font-extrabold tracking-[0.24em] text-[var(--background)] shadow-[0_10px_28px_rgba(15,23,42,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5">
            {siteConfig.shortName}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--muted)]">Portfolio</p>
            <p className="text-base font-bold sm:text-lg">{siteConfig.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                  isActive
                    ? 'bg-[var(--foreground)] text-[var(--background)] shadow-[0_12px_26px_rgba(15,23,42,0.18)]'
                    : 'text-[var(--muted)] hover:bg-white/55 hover:text-[color:var(--foreground)] dark:hover:bg-white/10',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:inline-flex"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          ) : null}
          {linkedinUrl ? (
            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:inline-flex"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          ) : null}
          {mounted ? (
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)] md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-2xl px-4 py-3 text-sm font-medium',
                  pathname === item.href
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'bg-black/0 text-[var(--muted)] hover:bg-black/5 dark:hover:bg-white/5',
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-[var(--border)] pt-3">
              {githubUrl ? (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </Link>
              ) : null}
              {linkedinUrl ? (
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-[var(--border)] p-2.5 text-[var(--muted)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}