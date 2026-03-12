'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navigationLinks, siteConfig } from '@/data/site';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { mounted, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[var(--foreground)]">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-bold tracking-[0.22em] text-[var(--background)]">
            {siteConfig.shortName}
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">Portfolio</p>
            <p className="text-lg font-bold">{siteConfig.name}</p>
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
                  'rounded-full px-4 py-2 text-sm font-medium',
                  isActive
                    ? 'bg-[var(--foreground)] text-[var(--background)]'
                    : 'text-[var(--muted)] hover:text-[color:var(--foreground)]',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {mounted ? (
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-[var(--border)] p-3 text-[var(--muted)] hover:text-[var(--foreground)]"
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-[var(--border)] p-3 text-[var(--muted)] md:hidden"
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}