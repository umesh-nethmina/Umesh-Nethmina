import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { blogPosts } from '@/data/blog';
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
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  {post.category}
                </p>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-bold text-[var(--foreground)]">{post.title}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {post.publishedAt} • {post.readTime}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] hover:text-[color:var(--accent)]"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
