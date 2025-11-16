import { motion } from "framer-motion";
import { Brackets, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";

export const LogoConcept1 = ({
  setIsMobileOpen,
}: {
  setIsMobileOpen: (isMobileOpen: boolean) => void;
}) => (
  <Link
    href="/"
    className="flex items-center space-x-3 group"
    onClick={() => setIsMobileOpen(false)}
  >
    {/* Professional Developer Icon */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
      <Button
        type="button"
        size="icon"
        className="relative bg-background border-2 border-border hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
          <Terminal className="h-4 w-4 text-primary absolute" />
          <Brackets className="h-5 w-5 text-primary/60" />
        </div>
      </Button>
    </motion.div>

    {/* Text with Developer Theme */}
    <div className="flex flex-col leading-none">
      <motion.span
        className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
        whileHover={{ scale: 1.02 }}
      >
        Maker Shihab
      </motion.span>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
        Creative Frontend Architect
      </span>
    </div>
  </Link>
);
