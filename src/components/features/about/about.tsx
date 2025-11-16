"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Award,
  Code2,
  Github,
  Linkedin,
  Mail,
  Rocket,
  Terminal,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";

export function About() {
  const skills = [
    "React",
    "Next.js",
    "Express.js",
    "MongoDB",
    "Shopify",
    "TypeScript",
    "Python",
    "UI/UX",
  ];

  const achievements = [
    {
      icon: Award,
      title: "Level Two Seller",
      description: "Fiverr",
      color: "text-green-500",
    },
    {
      icon: Rocket,
      title: "MERN Stack",
      description: "Full Stack Developer",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Always Growing",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="min-h-screen py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-red-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <User className="w-4 h-4" />
            <span>About Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              My Story
            </span>
          </motion.h1>
        </motion.div>

        {/* Main Content - Documentation Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 lg:p-12 shadow-xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b border-border/50">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              about.tsx
            </span>
            <Badge
              variant="outline"
              className="ml-auto text-xs font-mono border-primary/30 text-primary bg-primary/5"
            >
              <Code2 className="w-3 h-3 mr-1.5" />
              Developer
            </Badge>
          </div>

          {/* Introduction */}
          <div className="space-y-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 font-mono text-foreground">
                const about = {"{"}
              </h2>
              <div className="ml-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground font-mono text-sm">
                    name:{" "}
                    <span className="text-foreground">&quot;Shihab&quot;</span>,
                  </p>
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    I&apos;m Shihab, a passionate{" "}
                    <span className="text-primary font-semibold">
                      MERN Stack
                    </span>{" "}
                    and{" "}
                    <span className="text-primary font-semibold">
                      frontend developer
                    </span>{" "}
                    who loves building fast, modern web applications.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Work */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="ml-6 space-y-2"
            >
              <p className="text-muted-foreground font-mono text-sm">
                professionalStack: [
              </p>
              <div className="ml-6 space-y-3">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  I work professionally with{" "}
                  <span className="text-primary font-semibold">React</span>,{" "}
                  <span className="text-primary font-semibold">Next.js</span>,{" "}
                  <span className="text-primary font-semibold">Express.js</span>
                  , <span className="text-primary font-semibold">MongoDB</span>,
                  and{" "}
                  <span className="text-primary font-semibold">Shopify</span> to
                  create polished, client-ready solutions.
                </p>
              </div>
              <p className="text-muted-foreground font-mono text-sm">],</p>
            </motion.div>

            {/* Fiverr Achievement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="ml-6 space-y-2"
            >
              <p className="text-muted-foreground font-mono text-sm">
                achievements: {"{"}
              </p>
              <div className="ml-6 space-y-3">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  I&apos;m also a{" "}
                  <span className="text-green-500 font-semibold">
                    Level Two Seller
                  </span>{" "}
                  on <span className="text-primary font-semibold">Fiverr</span>,
                  delivering high-quality{" "}
                  <span className="text-primary font-semibold">
                    UI/UX-focused
                  </span>{" "}
                  projects with clean code and smooth user experience.
                </p>
              </div>
              <p className="text-muted-foreground font-mono text-sm">{"}"},</p>
            </motion.div>

            {/* Learning & Growth */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="ml-6 space-y-2"
            >
              <p className="text-muted-foreground font-mono text-sm">
                learning: {"{"}
              </p>
              <div className="ml-6 space-y-3">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  Alongside client work, I&apos;m expanding my skills in{" "}
                  <span className="text-primary font-semibold">Python</span>,{" "}
                  <span className="text-primary font-semibold">
                    real-time systems
                  </span>
                  , and{" "}
                  <span className="text-primary font-semibold">UI/UX</span> to
                  grow in remote tech roles.
                </p>
              </div>
              <p className="text-muted-foreground font-mono text-sm">{"}"},</p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="ml-6 space-y-2"
            >
              <p className="text-muted-foreground font-mono text-sm">
                philosophy: {"{"}
              </p>
              <div className="ml-6 space-y-3">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  I believe in{" "}
                  <span className="text-primary font-semibold">
                    continuous learning
                  </span>
                  ,{" "}
                  <span className="text-primary font-semibold">discipline</span>
                  , and building digital products that{" "}
                  <span className="text-primary font-semibold">
                    solve real problems
                  </span>{" "}
                  and{" "}
                  <span className="text-primary font-semibold">
                    inspire users
                  </span>
                  .
                </p>
              </div>
              <p className="text-muted-foreground font-mono text-sm">{"}"}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mt-6 font-mono text-foreground">
                {"}"}
              </h2>
            </motion.div>
          </div>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mb-8 pt-6 border-t border-border/50"
          >
            <p className="text-sm font-mono text-muted-foreground mb-4">
              {"//"} Technologies &amp; Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Badge
                    variant="outline"
                    className="text-sm font-mono border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="mb-8 pt-6 border-t border-border/50"
          >
            <p className="text-sm font-mono text-muted-foreground mb-4">
              {"//"} Key Achievements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <Icon className={`w-5 h-5 mb-2 ${achievement.color}`} />
                    <h3 className="font-semibold text-sm mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {achievement.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="pt-6 border-t border-border/50 flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/50"
            >
              <Link href="/projects">
                <Rocket className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/50"
            >
              <a
                href="https://github.com/maker-shihab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary/50"
            >
              <a
                href="https://linkedin.com/in/maker-shihab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
