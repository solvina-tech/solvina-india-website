"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { getRouteHref } from "@/lib/utils";

const contactRoutes = [
  {
    title: "Talk to Our Engineers",
    description: "Connect with the relevant technical team.",
    type: "Talk to Engineers",
  },
  {
    title: "Request a Proposal",
    description: "Share your scope, schedule and key technical requirements.",
    type: "Proposal",
  },
  {
    title: "Request a Case Study",
    description: "Ask for relevant approved project evidence.",
    type: "Case Study",
  },
  {
    title: "Book a Technical Demo",
    description: "For verified current software and tool offerings.",
    type: "Demo",
  },
];

export default function FinalCTASection() {
  const pathname = usePathname();

  return (
    <section className="relative overflow-hidden bg-[#0B1520] text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-48 h-[500px] w-[500px] rounded-full bg-[#B41448]/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E3A526]/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            MAIN CTA
        ===================================================== */}

        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E3A526] uppercase sm:text-xs">
                Start a Conversation
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.3rem]">
              Describe the challenge,
              <span className="block text-white/40">not just the service.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Tell us what your plant is doing that it shouldn&apos;t be — or
              what it needs to prove to your grid operator — and the right
              engineer will get back to you.
            </p>

            {/* Primary CTA */}

            <div className="mt-9">
              <Link
                href={getRouteHref("Engineering Challenge", pathname)}
                className="group inline-flex items-center gap-3 bg-[#B41448] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#9F103F] hover:shadow-xl"
              >
                Discuss Your Engineering Challenge
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* ===================================================
              CONTACT PANEL
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8"
          >
            {/* Top accent */}

            <div className="absolute top-0 left-0 h-[2px] w-16 bg-[#E3A526]" />

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.03]">
                <Mail size={16} strokeWidth={1.4} className="text-[#E3A526]" />
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[0.16em] text-white/30 uppercase">
                  India Enquiries
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  <a
                    href="mailto:enquiry@solvina.in"
                    className="flex items-center gap-3 text-sm text-[#E3A526] transition-colors hover:text-[#E3A526]"
                  >
                    enquiry@solvina.in
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-7 space-y-3 border-t border-white/[0.07] pt-5">
              <a
                href="tel:+919873302435"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#E3A526]"
              >
                <Phone size={15} strokeWidth={1.4} className="text-white/25" />
                +91 98733 02435
              </a>
              <a
                href="tel:+919540728444"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#E3A526]"
              >
                <Phone size={15} strokeWidth={1.4} className="text-white/25" />
                +91 95407 28444
              </a>
            </div>

            {/* Office */}

            <div className="mt-7 border-t border-white/[0.07] pt-6">
              <div className="flex gap-3">
                <Building2
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#E3A526]"
                />

                <div>
                  <p className="text-xs font-semibold text-white">
                    Noida — Corporate Office
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-white/40">
                    B-918, Advant Navis Business Park,
                    <br />
                    Plot No. 7, Sector 142, Expressway Noida
                    <br />
                    Noida, U.P. – 201305, India
                    <a
                      href="tel:+911204516596"
                      className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#E3A526]"
                    >
                      <Phone
                        size={15}
                        strokeWidth={1.4}
                        className="text-white/25"
                      />
                      +91 120-4516596
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-white/25"
                />

                <div>
                  <p className="text-xs font-semibold text-white/65">
                    New Delhi — Registered Office
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-white/30">
                    4637/20 Room No. 214
                    <br />
                    Munish Plaza, Ansari Road, Daryaganj
                    <br />
                    New Delhi – 110002, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            OTHER CONTACT ROUTES
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-16 border-t border-white/[0.08]"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {contactRoutes.map((route, index) => (
              <Link
                key={route.title}
                href={getRouteHref(route.type, pathname)}
                className="group relative border-b border-white/[0.08] p-5 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {route.title}
                    </h3>

                    <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/35">
                      {route.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E3A526]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
