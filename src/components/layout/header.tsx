/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MainNav } from "./navigation/main-nav";
import { MobileNav } from "./navigation/mobile-nav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

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
        "sticky top-0 z-50 w-full border-b transition-all duration-300 backdrop-blur supports-backdrop-filter:bg-background/60",
        isScrolled
          ? "bg-background/95 border-border/40"
          : "bg-background/80 border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 group"
          onClick={() => setIsMobileOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/60 group-hover:from-primary/80 group-hover:to-primary/40 transition-all duration-300">
            <span className="text-primary-foreground font-bold text-sm">
              MS
            </span>
          </div>
          <span className="font-bold text-xl bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Maker Shihab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <MainNav />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild variant="default" size="sm">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <MobileNav onNavigate={() => setIsMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
