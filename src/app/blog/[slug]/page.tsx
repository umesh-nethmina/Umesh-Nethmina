import Image from 'next/image';
import { notFound } from 'next/navigation';

import { blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/Button';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">{post.category}</p>
          <h1 className="text-4xl font-black tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">{post.title}</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
            {post.publishedAt} • {post.readTime}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative h-[18rem] overflow-hidden rounded-[2rem] border border-[var(--border)] sm:h-[25rem]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-8 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 leading-8 text-[var(--muted)] backdrop-blur-xl">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-[var(--foreground)]">{section.heading}</h2>
              <p>{section.content}</p>
              {section.codeExample ? (
                <pre className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 text-sm leading-6 text-[var(--foreground)]">
                  <code>{section.codeExample}</code>
                </pre>
              ) : null}
            </section>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/blog" variant="secondary">
            Back to Blog
          </Button>
          <Button href="/contact" variant="ghost">
            Discuss This Topic
          </Button>
        </div>
      </div>
    </article>
  );
}
