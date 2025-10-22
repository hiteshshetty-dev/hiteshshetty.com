import type { Metadata } from "next";
import BlogLayout from "@/components/blogs/BlogLayout";
import blogsData from "@/data/blogs.json";

const validSlugs = blogsData
  .map((blog) => blog.slug)
  .filter(Boolean) as string[];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogData = blogsData.find((blog) => blog.slug === slug);

  if (!blogData) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = blogData.title;
  const description = blogData.description;
  const publishedTime = new Date(blogData.date).toISOString();
  const modifiedTime = new Date(blogData.date).toISOString();
  const url = `https://hiteshshetty.com/blogs/${slug}`;
  const ogImageUrl = `https://hiteshshetty.com${blogData.ogImage}`;

  return {
    title,
    description,
    keywords: blogData.tags,
    authors: [{ name: "Hitesh Shetty" }],
    creator: "Hitesh Shetty",
    publisher: "Hitesh Shetty",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hitesh Shetty",
      locale: "en_US",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: ["Hitesh Shetty"],
      tags: blogData.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: blogData.title,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { default: Post } = await import(`@/content/blogs/${slug}.mdx`);

  return (
    <BlogLayout slug={slug}>
      <Post />
    </BlogLayout>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return validSlugs.map((slug) => ({ slug: slug as string }));
}

export const dynamicParams = false;
