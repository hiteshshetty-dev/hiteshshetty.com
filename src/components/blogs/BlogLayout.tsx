import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiArrowRight,
  HiCalendar,
  HiClock,
  HiExternalLink,
  HiTag,
} from "react-icons/hi";
import BlogJsonLd from "@/components/ui/BlogJsonLd";
import blogsData from "@/data/blogs.json";
import { getBlogCoverImage } from "@/lib/blog-utils";

interface BlogLayoutProps {
  children: React.ReactNode;
  slug: string;
}

export default function BlogLayout({ children, slug }: BlogLayoutProps) {
  const blogData = blogsData.find((blog) => blog.slug === slug);

  const title = blogData?.title || "Blog Post";
  const publishedAt = blogData?.date;
  const summary = blogData?.description;
  const tags = blogData?.tags || [];
  const readingTime = blogData?.readingTime || "5 min read";
  const image = blogData ? getBlogCoverImage(blogData.slug) : undefined;
  const mediumUrl = blogData?.url;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {blogData && (
        <BlogJsonLd
          title={title}
          description={summary || ""}
          date={publishedAt || ""}
          url={`https://hiteshshetty.com/blogs/${slug}`}
          image={`https://hiteshshetty.com${image}`}
          author="Hitesh Shetty"
          tags={tags}
          readingTime={readingTime}
        />
      )}
      <div className="min-h-screen bg-brand-beige">
        <header className="bg-brand-navy text-brand-beige py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-brand-beige/80 hover:text-brand-amber transition-colors"
              >
                <HiArrowLeft size={20} />
                Back to Blogs
              </Link>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {title}
              </h1>

              {summary && (
                <p className="text-lg sm:text-xl text-brand-beige/90 leading-relaxed max-w-3xl">
                  {summary}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-brand-beige/80">
                {publishedAt && (
                  <div className="flex items-center gap-2">
                    <HiCalendar size={18} />
                    <span>{formatDate(publishedAt)}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <HiClock size={18} />
                  <span>{readingTime}</span>
                </div>

                {tags.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <HiTag size={18} />
                    <div className="flex gap-2 flex-wrap">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-brand-steel/20 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl prose-code:before:content-none prose-code:after:content-none max-w-none overflow-x-hidden">
            {children}
          </div>

          {mediumUrl && (
            <div className="mt-12 p-6 bg-brand-navy/5 rounded-lg border border-brand-navy/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">
                    Also available on Medium
                  </h3>
                  <p className="text-brand-navy/70 text-sm">
                    This article is also published on Medium for wider reach.
                  </p>
                </div>
                <a
                  href={mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-brand-beige font-medium rounded-lg hover:bg-brand-navy/90 transition-colors"
                >
                  Read on Medium
                  <HiExternalLink size={16} />
                </a>
              </div>
            </div>
          )}
        </article>

        <section className="bg-brand-navy/5 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
                Latest Blogs
              </h2>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg hover:bg-brand-amber/90 transition-colors"
              >
                View All Blogs
                <HiArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {blogsData
                .filter((blog) => blog.slug !== slug)
                .slice(0, 2)
                .map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}
                    className="group block p-6 bg-white rounded-lg border-2 border-brand-steel/10 hover:border-brand-amber/30 transition-all duration-200 hover:shadow-lg flex flex-col"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-brand-navy mb-2 group-hover:text-brand-steel transition-colors flex-1">
                      {blog.title}
                    </h3>
                    <p className="text-brand-navy/70 mb-3 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-brand-navy/60 mt-auto">
                      <span>{formatDate(blog.date)}</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
