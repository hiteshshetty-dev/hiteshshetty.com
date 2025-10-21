import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiClock, HiTag } from "react-icons/hi";
import blogsData from "@/data/blogs.json";

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
  const image = blogData?.image;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora leading-tight">
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
      </article>
    </div>
  );
}
