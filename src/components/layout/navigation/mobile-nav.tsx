"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  onNavigate?: () => void;
}

export function MobileNav({ onNavigate }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Navigation Links */}
      <ScrollArea className="flex-1">
        <nav className="flex flex-col space-y-4 p-4">
          {siteConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200",
                  "hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground"
                )}
                onClick={onNavigate}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* CTA Section */}
      <div className="p-4 border-t space-y-4">
        <Button asChild size="lg" className="w-full" onClick={onNavigate}>
          <Link href="/contact">Hire Me</Link>
        </Button>
        <div className="text-center text-sm text-muted-foreground">
          Let&apos;s build something amazing together
        </div>
      </div>
    </div>
  );
}
