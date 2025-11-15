import { Laptop2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

// VS Code-inspired gradient colors (Deep Blue to Electric Cyan)
// For Tailwind CSS/Next.js: use custom utility classes for the gradient
// Example: bg-gradient-to-br from-blue-700 to-cyan-500

export const LogoConcept1 = ({
  setIsMobileOpen,
}: {
  setIsMobileOpen: (isMobileOpen: boolean) => void;
}) => (
  <Link
    href="/"
    className="flex items-center space-x-2 group"
    onClick={() => setIsMobileOpen(false)}
  >
    {/* 1. The Icon Container (Small and Attractive) */}
    <Button type="button" variant="default" size="icon">
      <Laptop2 className="h-4 w-4" />
    </Button>

    {/* 2. The Text (Catchy and Stylish) */}
    <div className="flex flex-col leading-none">
      <span
        className="font-extrabold text-lg 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-foreground to-foreground/70"
      >
        Maker Shihab
      </span>
      <span className="text-[10px] uppercase tracking-widest text-foreground/50">
        &lt;Solution/&gt;
      </span>
    </div>
  </Link>
);
