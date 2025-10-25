import profileData from "@/data/profile.json";

export function generatePersonSchema() {
  return {
    "@type": "Person",
    "@id": "https://hiteshshetty.com/#person",
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
    additionalName: ["hiteshshetty-dev", "hitesh.shetty2011"],
  };
}

export function generateWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": "https://hiteshshetty.com/#website",
    name: "Hitesh Shetty",
    alternateName: ["Hitesh Shetty Developer", "Hitesh Shetty Portfolio"],
    url: "https://hiteshshetty.com/",
    description:
      "Senior Software Engineer specializing in full-stack product development",
    inLanguage: "en-US",
    publisher: {
      "@id": "https://hiteshshetty.com/#organization",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": "https://hiteshshetty.com/#organization",
    name: "Hitesh Shetty",
    url: "https://hiteshshetty.com",
    logo: {
      "@type": "ImageObject",
      url: "https://hiteshshetty.com/icons/logo-navy.svg",
      width: 1024,
      height: 1024,
    },
    founder: {
      "@id": "https://hiteshshetty.com/#person",
    },
  };
}

export function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generatePersonSchema(),
      generateWebsiteSchema(),
      generateOrganizationSchema(),
    ],
  };
}
