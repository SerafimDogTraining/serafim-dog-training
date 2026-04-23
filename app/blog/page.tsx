import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Dog training tips, service dog insights, and behavioral guidance from Arthur Serafim.",
  alternates: { canonical: "https://www.serafimdogtraining.com/blog" },
  openGraph: {
    title: "Blog — Serafim Dog Training",
    description:
      "Dog training tips, service dog insights, and behavioral guidance.",
    url: "https://www.serafimdogtraining.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="bg-forest pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gold text-xs uppercase tracking-[0.28em] font-medium mb-6">
            Blog
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-medium leading-tight max-w-2xl mb-6">
            Training insights from the field.
          </h1>
          <p className="text-white/70 font-light text-lg max-w-lg leading-relaxed">
            Real-world guidance on dog training, service dog work,
            handler education, and behavioral rehabilitation.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-offwhite py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-forest font-light mb-3">
                Posts coming soon.
              </p>
              <p className="text-charcoal-muted font-light">
                Add .mdx files to /content/blog/ to populate this page.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-offwhite-soft rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  {/* Cover image */}
                  {post.coverImage ? (
                    <div className="aspect-[16/9] overflow-hidden">
                      {/* Replace with Next Image when images are available */}
                      <div
                        className="w-full h-full bg-forest/10 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${post.coverImage})` }}
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/9] bg-gradient-to-br from-forest/10 to-forest/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-forest/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="p-7">
                    {post.date && (
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium mb-3">
                        {formatDate(post.date)}
                      </p>
                    )}
                    <h2 className="font-display text-xl text-forest font-semibold leading-snug mb-3 group-hover:text-forest-light transition-colors duration-200">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-charcoal-muted font-light text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-5 flex items-center gap-2 text-forest text-xs font-medium tracking-wide">
                      Read more
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
