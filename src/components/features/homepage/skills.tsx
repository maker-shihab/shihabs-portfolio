"use client";

import { SkillBadge } from "@/components/blocks/skill-badge";
import { Button } from "@/components/ui/button";
import { skillCategories, skills } from "@/data";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { useState } from "react";

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tooling: Wrench,
  design: Palette,
  soft: Users,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  // Calculate stats
  const expertSkills = skills.filter((s) => s.level >= 90).length;
  const totalProjects = skills.reduce((acc, skill) => acc + skill.projects, 0);
  const maxExperience = Math.max(...skills.map((s) => s.yearsOfExperience));

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative z-10">
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
            <Terminal className="w-4 h-4" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive arsenal of modern technologies and tools I use to
            build exceptional digital experiences. From frontend frameworks to
            design tools, every skill is backed by real-world projects and
            continuous learning.
          </motion.p>
        </motion.div>

        {/* Stats Bar - Developer Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {expertSkills}+
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Expert Level Skills
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {skills.length}+
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Technologies
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {totalProjects}+
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Projects Completed
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {maxExperience}+
                </span>
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                Years Experience
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filters - Developer Style */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border-primary/20 hover:border-primary/50 hover:bg-gradient-to-r hover:from-red-500/20 hover:via-purple-500/20 hover:to-blue-500/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              All Skills
            </Button>
          </motion.div>

          {skillCategories
            .filter((category) => category.value !== "all")
            .map((category, idx) => {
              const Icon =
                categoryIcons[category.value as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    variant={
                      selectedCategory === category.value
                        ? "default"
                        : "outline"
                    }
                    onClick={() => setSelectedCategory(category.value)}
                    className="rounded-full"
                  >
                    {Icon && <Icon className="w-4 h-4 mr-2" />}
                    {category.label}
                  </Button>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <SkillBadge
              key={skill.id}
              skill={skill}
              index={index}
              variant="default"
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/contact">
                <Rocket className="w-5 h-5 mr-2" />
                Ready to Build Something Amazing?
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
