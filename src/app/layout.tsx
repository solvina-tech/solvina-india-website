import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import DarkThemeSimpleHeader from "@/components/layout/header/DarkThemeSimpleHeader";
import MegaMenuHeader from "@/components/layout/header/MegaMenuHeader";
import DarkThemeHeader from "@/components/layout/header/DarkThemeHeader";
import { createDefaultMetadata } from "@/lib/seo";
import { Toaster } from "sonner";
import BackToTop from "@/components/BackToTop";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = createDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide h-full antialiased">
      <body className="min-h-full font-sans">
        {/* <Header /> */}
        {/* <DarkThemeSimpleHeader /> */}
        {/* <MegaMenuHeader /> */}
        <DarkThemeHeader />
        {children}

        <Toaster position="top-right" richColors closeButton />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
