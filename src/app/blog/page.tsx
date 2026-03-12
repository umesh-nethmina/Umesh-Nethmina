import { blogPosts } from '@/data/site';

export default function BlogPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">Blog</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-[var(--foreground)]">Notes on design, engineering, and shipping work.</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">{post.category}</p>
              <h2 className="mt-4 text-2xl font-bold text-[var(--foreground)]">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{post.excerpt}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {post.publishedAt} • {post.readTime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}