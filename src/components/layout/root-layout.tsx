"use client";

import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Footer } from "../shared/footer";
import { Header } from "../shared/header";
import { Analytics } from "./analytics";
import { ThemeProvider } from "./theme-provider";

interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          className: "font-sans",
        }}
      />
      <Analytics />
    </ThemeProvider>
  );
}
