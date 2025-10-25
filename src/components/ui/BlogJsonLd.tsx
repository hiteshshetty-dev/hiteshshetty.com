import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generatePersonSchema,
} from "../../lib/structured-data";
import JsonLd from "./JsonLd";

interface BlogJsonLdProps {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  tags: string[];
  readingTime: string;
}

export default function BlogJsonLd({
  title,
  description,
  date,
  url,
  image,
  tags,
  readingTime,
}: BlogJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: title,
        description: description,
        image: {
          "@type": "ImageObject",
          url: image,
          width: 1400,
          height: 788,
        },
        datePublished: new Date(date).toISOString(),
        dateModified: new Date(date).toISOString(),
        author: generatePersonSchema(),
        publisher: generateOrganizationSchema(),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        url: url,
        keywords: tags.join(", "),
        articleSection: "Technology",
        wordCount: readingTime.includes("min")
          ? parseInt(readingTime, 10) * 200
          : 1000,
      },
      generateBreadcrumbSchema(
        [
          { name: "Home", url: "https://hiteshshetty.com/" },
          { name: "Blogs", url: "https://hiteshshetty.com/blogs" },
          { name: title },
        ],
        { includeContext: false },
      ),
    ],
  };

  return <JsonLd data={jsonLd} />;
}
