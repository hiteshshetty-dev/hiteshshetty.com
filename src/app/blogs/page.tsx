import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiExternalLink } from "react-icons/hi";
import blogsData from "@/data/blogs.json";

export const metadata = {
  title: "Blogs",
  description:
    "Technical articles and insights on software development, React, TypeScript, and more",
  alternates: {
    canonical: "https://hiteshshetty.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-navy/70 hover:text-brand-navy mb-8 transition-colors"
        >
          <HiArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-navy font-sora mb-4">
            Blog Posts
          </h1>
          <p className="text-lg text-brand-navy/70 max-w-2xl">
            Technical articles, tutorials, and insights on software development.
            Read the full articles here or find them on Medium.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {blogsData.map((blog) => (
            <Link
              key={blog.uuid}
              href={`/blogs/${blog.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-brand-navy/10 hover:border-brand-amber/50"
              data-umami-event="Blog Click"
              data-umami-event-blog-title={blog.title}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-96 h-64 md:h-auto md:min-h-[280px] flex-shrink-0 bg-brand-navy/5 flex items-center justify-center">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-brand-navy/60 text-sm mb-3">
                    <HiCalendar size={16} />
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl font-bold text-brand-navy font-sora mb-3 group-hover:text-brand-steel transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-brand-navy/70 leading-relaxed mb-4">
                    {blog.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-brand-navy/5 text-brand-navy text-sm rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-brand-steel font-medium">
                    <span>Read Article</span>
                    <HiExternalLink
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://medium.com/@hitesh-shetty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-navy text-brand-beige font-medium rounded-lg hover:bg-brand-navy/90 transition-colors shadow-lg"
          >
            View All on Medium
            <HiExternalLink size={20} />
          </a>
        </div>
      </div>
    </main>
  );
}
