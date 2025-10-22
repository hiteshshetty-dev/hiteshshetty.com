interface BlogJsonLdProps {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  author: string;
  tags: string[];
  readingTime: string;
}

export default function BlogJsonLd({
  title,
  description,
  date,
  url,
  image,
  author,
  tags,
  readingTime,
}: BlogJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    datePublished: new Date(date).toISOString(),
    dateModified: new Date(date).toISOString(),
    author: {
      "@type": "Person",
      name: author,
      url: "https://hiteshshetty.com",
    },
    publisher: {
      "@type": "Person",
      name: author,
      url: "https://hiteshshetty.com",
    },
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
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe json created above and is valid according to schema.org
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
