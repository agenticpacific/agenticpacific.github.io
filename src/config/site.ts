import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Agentic Pacific (FJ)",
  description:
    "AI-Augmented Solutions and Services to Enable the Growing Knowledge Sector of the Pacific Islands.",
  url: "https://agenticpacific.github.io",
  lang: "en",
  locale: "en_US",
  author: "Sachindra Singh",
  twitter: "@sachin1618",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/sachin1618",
    github: "https://github.com/sopac",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "Legal AI", href: "/services" },
    { text: "FinTech", href: "/services" },
    { text: "Document AI", href: "/services" },
    { text: "Earth Observations", href: "/services" },
    { text: "Custom AI Agents", href: "/services" },
    { text: "About", href: "/about" },

    // { text: "Blog", href: "/blog" },
    // { text: "Contact", href: "/contact" },
    // { text: "Widgets", href: "/widgets" },
  ],
};
