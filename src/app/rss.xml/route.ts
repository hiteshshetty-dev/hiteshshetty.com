import blogsData from "@/data/blogs.json";
import profileData from "@/data/profile.json";

export const dynamic = "force-static";

const SITE_URL = "https://hiteshshetty.com";
const FEED_TITLE = "Hitesh Shetty's Blog";
const FEED_DESCRIPTION =
  "Articles on web development, performance, and software engineering by Hitesh Shetty.";

/** Escape the five XML predefined entities for safe inclusion in text nodes. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = [...blogsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((blog) => {
      const postUrl = `${SITE_URL}/blogs/${blog.slug}`;
      const categories = blog.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");

      return `    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(blog.description)}</description>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <author>${escapeXml(profileData.email)} (${escapeXml(profileData.name)})</author>
${categories}
    </item>`;
    })
    .join("\n");

  const lastBuildDate = blogsData.length
    ? new Date(
        Math.max(...blogsData.map((b) => new Date(b.date).getTime())),
      ).toUTCString()
    : new Date(0).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blogs</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
