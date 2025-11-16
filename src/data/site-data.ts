export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    email: string;
  };
  author: {
    name: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
  };
  resume: {
    url: string;
    fileName: string;
  };
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
}

export const siteConfig: SiteConfig = {
  name: "Maker Shihab",
  description:
    "Creative Frontend Architect - Building exceptional digital experiences with modern technologies and clean code principles.",
  url: "https://maker-shihab.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/makershihab",
    github: "https://github.com/maker-shihab",
    linkedin: "https://linkedin.com/in/maker-shihab",
    email: "mailto:frontendmaker99@gmail.com",
  },
  author: {
    name: "Maker Shihab",
    email: "frontendmaker99@gmail.com",
    twitter: "@makershihab",
    github: "maker-shihab",
    linkedin: "maker-shihab",
  },
  resume: {
    url: "/resume/maker-shihab-resume.pdf",
    fileName: "Maker-Shihab-Frontend-Developer-Resume.pdf",
  },
};

export const mainNav: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Back to homepage",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn about my journey and skills",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Explore my portfolio work",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "View my technical expertise",
  },
  {
    title: "Experience",
    href: "/experience",
    description: "My professional journey",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with me",
  },
];

export const footerNav = {
  services: [
    { title: "Web Development", href: "/services/web-development" },
    { title: "React Applications", href: "/services/react" },
    { title: "UI/UX Design", href: "/services/design" },
    { title: "Performance Optimization", href: "/services/performance" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Cookie Policy", href: "/cookies" },
  ],
};

export const contactInfo = {
  email: "shihabud696@gmail.com",
  phone: "+88 01722 563073",
  location: "Nurjahan Road, Mohammodpur, Dhaka, Bangladesh",
  social: {
    github: "https://github.com/maker-shihab",
    linkedin: "https://linkedin.com/in/maker-shihab",
    twitter: "https://twitter.com/makershihab",
    fiverr: "https://fiverr.com/makershihab",
    upwork: "https://upwork.com/freelancers/makershihab",
  },
};
