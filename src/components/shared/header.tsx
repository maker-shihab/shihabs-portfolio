"use client";

import { LogoConcept1 } from "@/components/shared/logo/LogoConcept1";
import { ThemeToggle } from "@/components/shared/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MainNav } from "./navigation/main-nav";
import { MobileNav } from "./navigation/mobile-nav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-border/50"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoConcept1 setIsMobileOpen={setIsMobileOpen} />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <MainNav />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href="https://wa.me/8801722563073"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-4 h-4 mr-2" />
                Hire Me
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span className="sr-only">Toggle menu</span>
              </motion.button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border/50 p-0 overflow-hidden"
            >
              <SheetHeader className="p-6 border-b border-border/50 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <SheetTitle className="ml-4 font-mono text-sm text-muted-foreground">
                    navigation.tsx
                  </SheetTitle>
                </div>
              </SheetHeader>
              <MobileNav onNavigate={() => setIsMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
