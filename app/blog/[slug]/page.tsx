import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.serafimdogtraining.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — Serafim Dog Training`,
      description: post.excerpt,
      url: `https://www.serafimdogtraining.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const htmlContent = await marked(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Arthur Serafim",
      url: "https://www.serafimdogtraining.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Serafim Dog Training",
      url: "https://www.serafimdogtraining.com",
    },
    ...(post.coverImage && { image: post.coverImage }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-forest pt-40 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs uppercase tracking-widest font-medium mb-8 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            All Posts
          </Link>

          {post.date && (
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-5">
              {formatDate(post.date)}
            </p>
          )}
          <h1 className="font-display text-4xl md:text-5xl text-white font-medium leading-tight mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-white/65 font-light text-lg leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="bg-offwhite">
          <div className="max-w-4xl mx-auto px-6 -mt-0">
            <div
              className="w-full aspect-[16/7] bg-cover bg-center rounded-sm"
              style={{ backgroundImage: `url(${post.coverImage})` }}
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-offwhite-soft">
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-semibold">A</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-charcoal">Arthur Serafim</p>
              <p className="text-xs text-charcoal-muted font-light">
                Dog Trainer · Austin, TX & Online
              </p>
            </div>
          </div>

          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-offwhite-soft">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-forest hover:text-gold text-sm font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white font-medium mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-white/60 font-light mb-8">
            Book a free consult — we&apos;ll talk about your dog and
            figure out the right path forward.
          </p>
          <a
            href="/book"
            className="inline-block text-sm tracking-wide px-8 py-4 bg-gold text-forest hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Book a Free Consult
          </a>
        </div>
      </section>
    </>
  );
}
