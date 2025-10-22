import type { Metadata } from "next";
import Link from "next/link";
import blogs from "@/data/blogs.json";

export const metadata: Metadata = {
  title: "OG Images Generator - Dev",
  description: "Development tool for generating OG images for blogs",
  robots: "noindex, nofollow",
};

export default function OGImagesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog OG Images Generator
          </h1>
          <p className="text-gray-600 mb-6">
            Development tool to generate and preview OG images for all blogs.
            Click on any blog to view its OG image template.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.uuid}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{blog.tags.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/dev/og-images/${blog.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Generate OG Image
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
