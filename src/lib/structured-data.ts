import profileData from "@/data/profile.json";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.bio,
    url: "https://hiteshshetty.com",
    image: "https://hiteshshetty.com/images/profile.webp",
    sameAs: [
      profileData.linkedin,
      profileData.github,
      profileData.medium,
      profileData.codepen,
      profileData.leetcode,
      profileData.x,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: profileData.email,
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Web Development",
      "Open Source",
      "Slate.js",
      "Stylex",
      "Visual Editing",
      "AI Integration",
      "Distributed Systems",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Vidyavardhini's College of Engineering and Technology",
    },
    worksFor: {
      "@type": "Organization",
      name: "Contentstack",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hitesh Shetty",
    alternateName: ["Hitesh Shetty Developer", "Hitesh Shetty Portfolio"],
    url: "https://hiteshshetty.com/",
    description:
      "Senior Software Engineer specializing in full-stack product development",
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: profileData.name,
      url: "https://hiteshshetty.com/",
    },
    publisher: {
      "@type": "Person",
      name: profileData.name,
    },
  };
}
