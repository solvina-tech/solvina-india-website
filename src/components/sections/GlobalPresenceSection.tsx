"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { globalProof } from "@/data/homepage";
import { assetPath } from "@/lib/assets";

function ProofCard({
  item,
  index,
}: {
  item: (typeof globalProof)[number];
  index: number;
}) {
  const isGold = item.accent === "gold";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`absolute z-20 hidden w-[205px] bg-[#F4F3EE] px-5 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] lg:block ${
        item.position === "top-left"
          ? "top-[225px] left-[-45px] rounded-tl-[26px] rounded-br-[26px]"
          : ""
      } ${
        item.position === "right-middle"
          ? "top-[170px] right-[-45px] -translate-y-1/2 rounded-tr-[26px] rounded-bl-[26px]"
          : ""
      } ${
        item.position === "bottom-center"
          ? "bottom-[-35px] left-1/2 -translate-x-1/2 rounded-tr-[26px] rounded-bl-[26px]"
          : ""
      } `}
    >
      <div
        className={`mb-4 h-[2px] w-8 ${isGold ? "bg-[#E3A526]" : "bg-[#B41448]"} `}
      />

      <div
        className="flex gap-[5]"
      >
        <span
          className={`text-[2.25rem] leading-none font-semibold tracking-[-0.045em] ${isGold ? "text-[#B41448]" : "text-[#E3A526]"} `}
        >
          {item.value}
        </span>
        <span
          className={`text-[1.5rem] leading-none font-semibold tracking-[-0.045em] ${isGold ? "text-[#B41448]" : "text-[#E3A526]"} `}
        >
          {item.suffix}
        </span>
      </div>

      <p className="mt-3 max-w-[165px] text-[11px] leading-[1.55] text-black/50">
        {item.label}
      </p>
    </motion.div>
  );
}

export default function GlobalPresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D1724] text-white">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-48 h-[500px] w-[500px] rounded-full bg-[#B41448]/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#E3A526]/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            DESKTOP
        ===================================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="max-w-xl"
          >
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E3A526] uppercase sm:text-xs">
                Global / Group Presence
              </span>
            </div>

            <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[3.35rem]">
              Swedish engineering heritage.
              <span className="mt-2 block text-white/45">
                International experience.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              Solvina brings a Swedish engineering perspective to complex
              industrial and energy systems, with Solvina India focused on the
              needs of India&apos;s market and projects.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-white/35 sm:text-[15px] sm:leading-7">
              International experience and group context support local
              engineering delivery without losing sight of the specific
              operating realities of each plant and project.
            </p>

            <Link
              href="/about#global-presence"
              className="group mt-8 inline-flex items-center gap-1 text-xs font-semibold text-white transition-colors duration-300 hover:text-[#E3A526]"
            >
              About Solvina / Global Presence
              <span className="flex h-8 w-8 items-center justify-center transition-all duration-300 group-hover:text-[#E3A526]">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>

          {/* ===================================================
              MAP + FLOATING CARDS
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[760px] lg:py-14 lg:pl-4"
          >
            {/* Map container */}

            <div className="relative aspect-[16/10] w-full overflow-visible border border-white/[0.08] bg-[#111D2A]">
              {/* Map image */}

              <Image
                src={assetPath("/images/global-presence.png")}
                alt="Solvina global presence showing Sweden and Noida, India"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover opacity-90"
              />

              {/* Image protection */}


              {/* Subtle dark edges */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#0D1724]/10 via-transparent to-[#0D1724]/20" />

              {/* Technical frame */}

              <div className="pointer-events-none absolute inset-4 border border-white/[0.12]" />

              {/* Bottom label */}

              <div className="absolute right-6 bottom-6 z-10">
                <span className="font-mono text-[8px] tracking-[0.18em] text-white/50 uppercase">
                  Sweden — India
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING STATISTIC CARDS
            ================================================= */}

            {globalProof.map((item, index) => (
              <ProofCard key={item.label} item={item} index={index} />
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE STATISTICS
        ===================================================== */}

        <div className="mt-12 grid grid-cols-2 gap-3 lg:hidden">
          {globalProof.map((item, index) => {
            const isGold = item.accent === "gold";

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`bg-[#F4F3EE] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.16)] ${
                  index % 2 === 0
                    ? "rounded-tl-[24px] rounded-br-[24px]"
                    : "rounded-tr-[24px] rounded-bl-[24px]"
                } `}
              >
                <div
                  className={`mb-4 h-[2px] w-7 ${isGold ? "bg-[#E3A526]" : "bg-[#B41448]"} `}
                />

                <div
                  className={`text-3xl leading-none font-semibold tracking-[-0.04em] ${isGold ? "text-[#B41448]" : "text-[#252525]"} `}
                >
                  {item.value}
                </div>

                <p className="mt-3 text-[10px] leading-4 text-black/50">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            MOBILE CTA
        ===================================================== */}

        <div className="mt-8 lg:hidden">
          <Link
            href="/about/global-presence/"
            className="group inline-flex items-center gap-3 text-xs font-semibold text-white transition-colors duration-300 hover:text-[#E3A526]"
          >
            About Solvina / Global Presence
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
