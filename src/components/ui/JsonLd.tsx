interface JsonLdProps {
  // biome-ignore lint/suspicious/noExplicitAny: Value of data is dynamic
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This is safe json created by generatePersonSchema and generateWebsiteSchema
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
