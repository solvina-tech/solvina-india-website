"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { assetPath } from "@/lib/assets";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/expertise", label: "Expertise" },
  { href: "/industries", label: "Industries" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects & Case Studies" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-black/95 shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-5 sm:px-8 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Solvina India home"
          >
            {/* Negative logo - hero */}
            <Image
              src={assetPath("/images/solvina-logo-negative.png")}
              alt="Solvina India"
              width={180}
              height={48}
              priority
              className={`h-10 w-auto transition-all duration-300 sm:h-11 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Regular logo - scrolled */}
            <Image
              src={assetPath("/images/solvina-logo.png")}
              alt="Solvina India"
              width={180}
              height={48}
              priority
              className={`absolute left-0 h-10 w-auto transition-all duration-300 sm:h-11 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex xl:gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? active
                        ? "text-[#B41448]"
                        : "text-[#252525] hover:text-[#B41448]"
                      : active
                        ? "text-[#E3A526]"
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}

                  {/* Active / hover indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#E3A526] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                className="h-11 rounded-md bg-[#B41448] px-5 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#9F103F] hover:shadow-md"
              >
                Talk to an Engineer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${
                  scrolled
                    ? "text-[#252525] hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] max-w-sm border-l border-black/10 bg-white px-6"
            >
              <SheetHeader className="border-b border-black/10 pb-5 px-0">
                <SheetTitle className="text-left">
                  <Image
                    src={assetPath("/images/solvina-logo.png")}
                    alt="Solvina India"
                    width={160}
                    height={43}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav
                className="mt-8 flex flex-col"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between border-b border-black/5 py-4 text-base font-medium transition-colors ${
                        active
                          ? "text-[#B41448]"
                          : "text-[#252525] hover:text-[#B41448]"
                      }`}
                    >
                      {link.label}

                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-8"
                >
                  <Button className="h-12 w-full rounded-md bg-[#B41448] font-semibold text-white hover:bg-[#9F103F]">
                    Talk to an Engineer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
