import BlogLayout from "@/components/blogs/BlogLayout";
import blogsData from "@/data/blogs.json";

const validSlugs = blogsData
  .map((blog) => blog.slug)
  .filter(Boolean) as string[];

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
