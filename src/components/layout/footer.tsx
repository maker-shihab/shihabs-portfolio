import { SocialIcons } from "@/components/social-icons";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/60 group-hover:from-primary/80 group-hover:to-primary/40 transition-all duration-300">
                <span className="text-primary-foreground font-bold text-sm">
                  MS
                </span>
              </div>
              <span className="font-bold text-2xl bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Maker Shihab
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md text-lg">
              Creative Frontend Architect crafting exceptional digital
              experiences with modern technologies and clean code.
            </p>
            <SocialIcons variant="minimal" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>frontendmaker99@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+88 01722 563073</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Shibganj, Thakurgaon, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Maker Shihab. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
