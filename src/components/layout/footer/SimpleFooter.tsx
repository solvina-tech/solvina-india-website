"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { assetPath } from "@/lib/assets";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/legal/privacy-policy",
  },
  {
    label: "Cookie Policy",
    href: "/legal/cookie-policy",
  },
  {
    label: "Terms / Legal Notice",
    href: "/legal/terms-of-service",
  },
];

const mainLinks = [
  {
    label: "Expertise",
    href: "/expertise/",
  },
  {
    label: "Industries",
    href: "/industries/",
  },
  {
    label: "Projects & Case Studies",
    href: "/projects/",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export function SimpleFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1520] text-white">
      {/* subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      {/* subtle ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#B41448]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* =====================================================
    MAIN FOOTER ROW
===================================================== */}

        <div className="border-b border-white/[0.07] py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr_1.2fr_auto] lg:items-start lg:gap-10">
            {/* Brand */}
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/"
                aria-label="Solvina India home"
                className="flex shrink-0 items-center"
              >
                <Image
                  src={assetPath("/images/solvina-logo-negative.png")}
                  alt="Solvina India"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>

              {/* <div className="hidden h-7 w-px bg-white/10 xl:block" /> */}

              <p className="hidden max-w-xs text-[10px] leading-[1.5] text-white/35 xl:block">
                Specialist Engineering Intelligence for complex industrial
                energy and power systems.
              </p>
              
              <a
                href="https://www.linkedin.com/company/solvina-ab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solvina on LinkedIn"
                className="mt-3 inline-flex items-center gap-2 text-[11px] text-white/40 transition-colors hover:text-white"
              >
                <LinkedInIcon className="h-[14px] w-[14px]" />
                Solvina
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[9px] font-bold tracking-[0.18em] text-[#E3A526] uppercase">
                Navigation
              </h3>

              <ul className="mt-3 space-y-1.5">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[11px] leading-4 text-white/40 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={9}
                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[9px] font-bold tracking-[0.18em] text-[#E3A526] uppercase">
                Contact
              </h3>

              <div className="mt-3 space-y-2">
                <a
                  href="mailto:enquiry@solvina.in"
                  className="flex items-center gap-2 text-[11px] text-white/40 transition-colors hover:text-white"
                >
                  <Mail size={11} />
                  enquiry@solvina.in
                </a>

                <a
                  href="tel:+919873302435"
                  className="flex items-center gap-2 text-[11px] text-white/40 transition-colors hover:text-white"
                >
                  <Phone size={11} />
                  +91 98733 02435
                </a>

                <a
                  href="tel:+919540728444"
                  className="flex items-center gap-2 text-[11px] text-white/40 transition-colors hover:text-white"
                >
                  <Phone size={11} />
                  +91 95407 28444
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} Solvina India Private Limited. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[9px] text-white/20 transition-colors hover:text-white/50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
