import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  const topics = [
    'Programming Tutorials',
    'Project Lessons',
    'Software Engineering Concepts',
    'Developer Productivity',
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Blog</p>
          <h1 className="text-5xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">Blog</h1>
          <p className="text-lg leading-8 text-[var(--muted)]">
            I write about programming, projects, software engineering concepts, and practical lessons learned while
            building real products.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Topics</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                <p className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  {post.category}
                </p>
              </div>

              <div className="space-y-4 p-6">
                <h2 className="text-2xl font-bold text-[var(--foreground)]">{post.title}</h2>
                <p className="text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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