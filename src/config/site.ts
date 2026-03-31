import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Agentic Pacific",
  description:
    "AI-augmented Domain-Specific Solutions for The Pacific Islands | Legal AI, Financial Techh, Document AI, and Earth Observations.",
  url: "https://agenticpacific.github.io",
  lang: "en",
  locale: "en_US",
  author: "Agentic Pacific",
  twitter: "@sachin1618",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/sachin1618",
    github: "https://github.com/sopac",
    email: "mailto:agentic.pacific@icloud.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Legal AI", href: "/legal" },
    { text: "FinTech", href: "/fintech" },
    { text: "Document AI", href: "/docai" },
    { text: "Earth Observations", href: "/eo" },
    { text: "Custom AI Agents", href: "/custom" },
    { text: "About", href: "/about" },
  ],
};
