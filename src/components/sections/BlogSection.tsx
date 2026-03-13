import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '@/data/site';
import { Button } from '@/components/ui/Button';

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Blog</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
              Knowledge notes on frontend architecture, product delivery, and software craftsmanship.
            </h2>
          </div>
          <Button href="/blog" variant="secondary">
            View All Posts
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.14)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{post.category}</p>
              <h3 className="mt-4 text-2xl font-bold text-[var(--foreground)]">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {post.publishedAt} • {post.readTime}
              </p>
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] hover:text-[color:var(--accent)]"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
