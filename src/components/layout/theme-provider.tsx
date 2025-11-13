/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: Theme;
  enableSystem?: boolean;
  storageKey?: string;
  disableTransitionOnChange?: boolean;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null;
    setTimeout(() => {
      setTheme(stored || defaultTheme);
    }, 0);
  }, [defaultTheme, storageKey, setTheme]);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    let resolved = theme;
    if (theme === "system" && enableSystem) {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    setTimeout(() => {
      setResolvedTheme(resolved as "dark" | "light");
    }, 0);

    if (disableTransitionOnChange) {
      const css = document.createElement("style");
      css.appendChild(
        document.createTextNode(
          `* {
             -webkit-transition: none !important;
             -moz-transition: none !important;
             -o-transition: none !important;
             -ms-transition: none !important;
             transition: none !important;
          }`
        )
      );
      document.head.appendChild(css);

      root.classList.add(resolved);

      const _ = window.getComputedStyle(css).opacity;
      document.head.removeChild(css);
    } else {
      root.classList.add(resolved);
    }

    if (attribute === "class") {
      root.classList.add(resolved);
    } else {
      root.setAttribute(attribute, resolved);
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, enableSystem, attribute, storageKey, disableTransitionOnChange]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
