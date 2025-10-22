import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogOGImage from "@/components/ui/blog-og-image";
import blogs from "@/data/blogs.json";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `OG Image: ${blog.title}`,
    robots: "noindex, nofollow",
  };
}
export function generateStaticParams(): { slug: string }[] {
  return blogs.map((blog) => ({ slug: blog.slug as string }));
}

export const dynamicParams = false;

export default async function BlogOGImagePage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <Link
            href="/dev/og-images"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to OG Images Generator
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            OG Image Template (1200x630px)
          </h2>
          <div className="flex justify-center">
            <BlogOGImage blog={blog} />
          </div>
        </div>
      </div>
    </div>
  );
}
