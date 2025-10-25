import Image from "next/image";
import profileData from "@/data/profile.json";
import { getBlogCoverImage } from "@/lib/blog-utils";

interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  url: string;
  tags: string[];
  readingTime?: string;
}

interface BlogOGImageProps {
  blog: Blog;
}

const BlogOGImage = ({ blog }: BlogOGImageProps) => {
  const truncateTitle = (title: string, maxLength: number = 120) => {
    if (title.length <= maxLength) return title;
    return `${title.substring(0, maxLength).trim()}...`;
  };

  const truncateDescription = (
    description: string,
    maxLength: number = 180,
  ) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength).trim()}...`;
  };

  const displayTags = blog.tags.slice(0, 4);

  return (
    <div
      className="w-[1200px] h-[630px] bg-brand-beige overflow-hidden border-4 border-brand-amber/30"
      id="blog-og-image"
    >
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-6 text-brand-navy leading-tight px-12">
          {truncateTitle(blog.title)}
        </h1>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-center px-12 text-brand-navy">
            <p className="text-2xl text-brand-steel mb-8 font-medium leading-relaxed">
              {truncateDescription(blog.description)}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {displayTags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-brand-amber text-brand-charcoal font-medium rounded-lg text-lg"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 4 && (
                <span className="px-4 py-2 bg-brand-amber/50 text-brand-charcoal font-medium rounded-lg text-lg">
                  +{blog.tags.length - 4} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-amber/30">
                  <Image
                    src="/images/profile.webp"
                    alt="Hitesh Shetty"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl font-semibold text-brand-navy">
                    Hitesh Shetty
                  </p>
                  <p className="text-lg text-brand-steel">
                    {profileData.title}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl text-brand-navy/70 font-medium">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                {blog.readingTime && (
                  <p className="text-lg text-brand-steel">{blog.readingTime}</p>
                )}
              </div>
            </div>
          </div>

          <div className="w-80 flex flex-col justify-evenly items-center px-8">
            <div className="w-64 rounded-3xl overflow-hidden border-4 border-brand-amber/30 mb-6 flex items-center justify-center aspect-video">
              <Image
                src={getBlogCoverImage(blog.slug)}
                alt={blog.title}
                width={300}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-2xl text-brand-navy/70 font-medium text-center">
              hiteshshetty.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOGImage;
