export const siteConfig = {
  name: "Maker Shihab",
  description:
    "Creative Frontend Architect - Building exceptional digital experiences with modern technologies",
  url: "https://maker-shihab.vercel.app",
  ogImage: "https://maker-shihab.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/makershihab",
    github: "https://github.com/maker-shihab",
    linkedin: "https://linkedin.com/in/maker-shihab",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
} as const;
