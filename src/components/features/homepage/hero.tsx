/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { portfolioStats } from "@/data";
import { siteConfig } from "@/data/site-data";
import { fadeIn, heroVariants, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [count, setCount] = useState(0);
  const yearsOfExperience = portfolioStats.yearsOfExperience;

  // Countdown animation for years of experience
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = yearsOfExperience / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= yearsOfExperience) {
        setCount(yearsOfExperience);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [yearsOfExperience]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resume.url;
    link.download = siteConfig.resume.fileName;
    link.click();
  };

  // Technology icons to display around hero image
  const techIcons = [
    { name: "React", src: "/assets/images/icons/react.png", delay: 0 },
    {
      name: "TypeScript",
      src: "/assets/images/icons/typescript.svg",
      delay: 0.4,
    },
    {
      name: "Next.js",
      src: "/assets/images/icons/nextjs-icon.svg",
      delay: 0.2,
    },
    {
      name: "Tailwind",
      src: "/assets/images/icons/tailwind-css.svg",
      delay: 0.6,
    },
    { name: "JavaScript", src: "/assets/images/icons/js.png", delay: 0.8 },
    { name: "HTML", src: "/assets/images/icons/html.png", delay: 1.0 },
    { name: "CSS", src: "/assets/images/icons/css.png", delay: 1.2 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-gradient(to bottom, #f0f0f0, #ffffff) py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column - Content */}
          <motion.div
            variants={heroVariants.container}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={heroVariants.text} className="space-y-4">
              <h4 className="text-xl lg:text-2xl text-muted-foreground font-light">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Maker Shihab
                </span>{" "}
                👋
              </h4>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Creative{" "}
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Frontend
                </span>{" "}
                Architect
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroVariants.text}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Bringing ideas to life with{" "}
              <span className="text-foreground font-semibold">clean code</span>,{" "}
              <span className="text-foreground font-semibold">
                modern design
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">
                powerful user experiences
              </span>
              .
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={heroVariants.text}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-3 gap-6 py-6 max-w-md"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {portfolioStats.yearsOfExperience}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  160+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {portfolioStats.clientSatisfaction}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroVariants.container}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <motion.div variants={heroVariants.button}>
                <Button size="lg" className="gap-2 px-8 text-base h-12" asChild>
                  <a
                    href="https://wa.me/8801722563073"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hire Me
                    <Sparkles className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={heroVariants.button}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 px-8 text-base h-12"
                  onClick={handleDownloadCV}
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={heroVariants.text} className="pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Follow my work
                </span>
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
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-11 h-11 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 ${social.color} shadow-sm hover:shadow-lg hover:border-primary/30`}
                        aria-label={`Visit my ${social.name}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={heroVariants.image}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{ scale: 1.02 }}
                className="relative w-[400px] h-[500px] lg:w-[400px] lg:h-[500px] xl:w-[500px] xl:h-[600px] rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      "0 25px 50px -12px rgba(139, 92, 246, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)",
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/assets/images/me.jpg"
                    alt="Maker Shihab - Frontend Developer"
                    fill
                    className="object-cover transition-transform duration-700"
                    priority
                  />

                  {/* Animated Gradient Overlay with Scrollbar Colors */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      background: [
                        "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)",
                        "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(239, 68, 68, 0.2) 100%)",
                        "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(239, 68, 68, 0.1) 50%, rgba(168, 85, 247, 0.15) 100%)",
                        "linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)",
                      ],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 mix-blend-overlay"
                  />

                  {/* Additional Gradient Glow Effect */}
                  <motion.div
                    animate={{
                      opacity: [0, 0.4, 0],
                      background: [
                        "radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.3), transparent 70%)",
                        "radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.3), transparent 70%)",
                        "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3), transparent 70%)",
                        "radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.3), transparent 70%)",
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 pointer-events-none"
                  />
                </motion.div>
              </motion.div>

              {/* Animated Technology Icons with Glassy Background */}
              {techIcons.map((tech, index) => {
                // Adjust angles to avoid covering the face (center area)
                // Position icons more around the edges, avoiding top center
                let angle = (index * 360) / techIcons.length;
                // Offset to avoid top center (where face is)
                angle += 45; // Rotate all icons to avoid face area

                // Increase radius for larger image
                const radius = 240;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                // Adjust HTML and CSS icons to be further away from center
                const isHTMLCSS = tech.name === "HTML" || tech.name === "CSS";
                const adjustedRadius = isHTMLCSS ? radius + 40 : radius;
                const adjustedX =
                  Math.cos((angle * Math.PI) / 180) * adjustedRadius;
                const adjustedY =
                  Math.sin((angle * Math.PI) / 180) * adjustedRadius;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: isHTMLCSS ? adjustedX : x,
                      y: isHTMLCSS ? adjustedY : y,
                    }}
                    transition={{
                      delay: 1.5 + tech.delay,
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    className="absolute top-1/3 right-20 lg:right-60 -translate-x-1 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: tech.delay,
                      }}
                      className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-xl backdrop-blur-md bg-white/20 dark:bg-gray-900/20 border border-white/30 dark:border-gray-700/30 shadow-lg flex items-center justify-center p-2 group"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 lg:w-10 lg:h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(139, 92, 246, 0)",
                            "0 0 20px rgba(139, 92, 246, 0.4)",
                            "0 0 0px rgba(139, 92, 246, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20"
              >
                🚀 Available
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-sm border shadow-lg px-4 py-3 rounded-2xl max-w-[200px] z-20"
              >
                <div className="text-xs text-muted-foreground">
                  Currently working on
                </div>
                <div className="text-sm font-medium">Next.js 14 Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
