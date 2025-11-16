"use client";

import { contactInfo, siteConfig } from "@/data/site-data";
import { motion } from "framer-motion";
import {
  Code,
  Coffee,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Twitter,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: "React", icon: "/assets/images/icons/react.png" },
    { name: "Next.js", icon: "/assets/images/icons/nextjs-icon.svg" },
    { name: "TypeScript", icon: "/assets/images/icons/typescript.svg" },
    { name: "Tailwind", icon: "/assets/images/icons/tailwind-css.svg" },
  ];

  const codeSnippets = [
    "const developer = { passion: 'coding', coffee: 'unlimited' };",
    "if (codeWorks) { celebrate(); } else { debug(); }",
    "while (alive) { code(); }",
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />

      <div className="container relative z-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Code Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center space-x-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 shadow-lg"
                >
                  <Code className="h-6 w-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Maker Shihab
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    &lt;Creative Frontend Architect /&gt;
                  </p>
                </div>
              </Link>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Crafting exceptional digital experiences with modern
                technologies, clean code, and a passion for innovation.
              </p>
            </div>

            {/* Terminal-style Code Snippet */}
            <motion.div
              key={currentSnippet}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-800 p-4 font-mono text-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-500 text-xs">terminal</span>
              </div>
              <div className="space-y-1">
                <div className="text-green-400">
                  <span className="text-blue-400">$</span>{" "}
                  <span className="text-gray-300">
                    {codeSnippets[currentSnippet]}
                  </span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400 inline-block"
                >
                  ▊
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: "GitHub",
                  href: siteConfig.links.github,
                  icon: Github,
                  color:
                    "hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900",
                },
                {
                  name: "Twitter",
                  href: siteConfig.links.twitter,
                  icon: Twitter,
                  color: "hover:bg-blue-400 hover:text-white",
                },
                {
                  name: "LinkedIn",
                  href: siteConfig.links.linkedin,
                  icon: Linkedin,
                  color: "hover:bg-blue-600 hover:text-white",
                },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} shadow-sm hover:shadow-md`}
                    aria-label={`Visit my ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { title: "Home", href: "/" },
                { title: "About", href: "/about" },
                { title: "Projects", href: "/projects" },
                { title: "Skills", href: "/#skills" },
                { title: "Experience", href: "/#experience" },
                { title: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 group flex items-center gap-2"
                >
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    &gt;
                  </span>
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Tech Stack */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href={contactInfo.email}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
            </div>

            {/* Tech Stack Icons */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3 font-mono">
                Built with:
              </p>
              <div className="flex items-center gap-3">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 p-1.5 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    title={tech.name}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Developer Vibes */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="font-mono">© {currentYear}</span>
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.span>
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>by Maker Shihab</span>
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span>Status: Online</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">●</span>
                <span>
                  {currentTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Fun Developer Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-primary">const</span>{" "}
              <span className="text-blue-400">availableForHire</span>{" "}
              <span className="text-primary">=</span>{" "}
              <span className="text-green-400">true</span>;
              <span className="text-gray-500">
                {" "}
                {"// Let's build something amazing!"}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
