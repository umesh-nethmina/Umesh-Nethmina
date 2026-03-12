import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

type LinkButtonProps = SharedProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>;

type NativeButtonProps = SharedProps & {
  href?: undefined;
} & ComponentPropsWithoutRef<'button'>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--foreground)] text-[var(--background)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(31,26,22,0.16)]',
  secondary:
    'border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]',
  ghost:
    'text-[var(--foreground)] hover:text-[color:var(--accent)]',
};

export function Button({ children, className, href, variant = 'primary', ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em]',
    variantClasses[variant],
    className,
  );

  if (href) {
    const linkProps = props as Omit<LinkButtonProps, 'children' | 'className' | 'href' | 'variant'>;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<NativeButtonProps, 'children' | 'className' | 'href' | 'variant'>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}