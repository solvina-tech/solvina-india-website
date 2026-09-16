"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { assetPath } from "@/lib/assets";
import HeroExpertSection from "./HeroExpertiseSection";
import EnquiryCTA from "../forms/EnquiryCTA";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[40svh] overflow-hidden bg-[#111111]">
      {/* ============================================================
          BACKGROUND IMAGE
      ============================================================ */}

      <Image
        src={assetPath("/images/hero-industrial.jpg")}
        alt="Industrial energy and engineering systems"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-[65%_center]"
      />

      {/* ============================================================
          IMAGE PROTECTION
      ============================================================ */}

      {/* Overall image protection */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Strong left-side readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/10" />

      {/* Additional mobile protection */}
      <div className="absolute inset-0 bg-black/20 sm:hidden" />

      {/* ============================================================
          CONTENT
      ============================================================ */}

      <div className="relative z-10 flex items-center px-5 py-28 sm:px-8 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-12">
          <div className="w-full max-w-[900px]">
            {/* Eyebrow */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-[#E3A526] uppercase sm:text-sm">
                Engineering Intelligence Partner
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-[850px] text-[2.65rem] leading-[1.06] font-semibold tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              Engineering Intelligence for{" "}
              <span className="text-[#E3A526]">
                Reliable, Efficient & Sustainable
              </span>{" "}
              Industrial Systems
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-7 max-w-[760px] text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              Solvina helps utilities and energy-intensive industries
              understand, validate and improve complex power, steam, process and
              control systems — from dynamic modelling and system studies to
              testing, tuning and plant validation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary */}
              <div className="hidden lg:block">
                <EnquiryCTA
                  label="Discuss Your Engineering Challenge"
                  type="Engineering Challenge"
                />
              </div>

              {/* Secondary */}
              <Link
                href="/expertise"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/50 bg-white/[0.06] px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#E3A526] hover:bg-[#E3A526] hover:text-black"
              >
                See Our Expertise
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          <div className="shrink-0">
            {/* <ExpertAreas /> */}
            <HeroExpertSection />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertAreas() {
  const expertise = [
    "Island Operation Testing & Optimization",
    "Integrated Steam, Power & Control Systems",
    "Solar, Wind & BESS",
    "Industrial Automation & Digitization",
    "Grid Code Compliance",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.35,
        ease: "easeOut",
      }}
      className="relative hidden h-[500px] w-[500px] lg:block xl:h-[540px] xl:w-[540px]"
    >
      {/* =====================================================
          SOFT BACKGROUND
      ===================================================== */}

      <div className="absolute inset-[-18px] rounded-full bg-[#F7F3EA]/75 backdrop-blur-[3px]" />

      {/* =====================================================
          RADIAL WHEEL
      ===================================================== */}

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {/* -------------------------------------------------
            Very subtle wheel surface
        ------------------------------------------------- */}

        <circle cx="300" cy="300" r="285" fill="#F8F5EE" fillOpacity="0.88" />

        {/* -------------------------------------------------
            Very subtle alternating sector tones
        ------------------------------------------------- */}

        <path
          d="M300 300 L300 15 A285 285 0 0 1 571 212 Z"
          fill="#ffffff"
          fillOpacity="0.20"
        />

        <path
          d="M300 300 L571 212 A285 285 0 0 1 476 531 Z"
          fill="#E3A526"
          fillOpacity="0.025"
        />

        <path
          d="M300 300 L476 531 A285 285 0 0 1 124 531 Z"
          fill="#ffffff"
          fillOpacity="0.14"
        />

        <path
          d="M300 300 L124 531 A285 285 0 0 1 29 212 Z"
          fill="#B41448"
          fillOpacity="0.018"
        />

        <path
          d="M300 300 L29 212 A285 285 0 0 1 300 15 Z"
          fill="#E3A526"
          fillOpacity="0.025"
        />

        {/* -------------------------------------------------
            OUTER CIRCLE
        ------------------------------------------------- */}

        <circle
          cx="300"
          cy="300"
          r="285"
          fill="none"
          stroke="#252525"
          strokeOpacity="0.18"
          strokeWidth="1.2"
        />

        {/* -------------------------------------------------
            INNER CIRCLE
        ------------------------------------------------- */}

        <circle
          cx="300"
          cy="300"
          r="82"
          fill="#FAF8F3"
          stroke="#252525"
          strokeOpacity="0.18"
          strokeWidth="1.2"
        />

        {/* -------------------------------------------------
            5 EQUAL RADIAL DIVIDERS

            Every divider is separated by 72 degrees.
        ------------------------------------------------- */}

        <line
          x1="300"
          y1="15"
          x2="300"
          y2="218"
          stroke="#252525"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        <line
          x1="571"
          y1="212"
          x2="378"
          y2="275"
          stroke="#252525"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        <line
          x1="476"
          y1="531"
          x2="348"
          y2="367"
          stroke="#252525"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        <line
          x1="124"
          y1="531"
          x2="252"
          y2="367"
          stroke="#252525"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />

        <line
          x1="29"
          y1="212"
          x2="222"
          y2="275"
          stroke="#252525"
          strokeOpacity="0.16"
          strokeWidth="1.2"
        />
      </svg>

      {/* =====================================================
          SECTOR LABELS
      ===================================================== */}

      <ExpertSector
        title={expertise[0]}
        className="top-[25%] left-[30%] w-[190px] -translate-x-1/2"
        delay={0.65}
      />

      <ExpertSector
        title={expertise[1]}
        className="top-[25%] right-[15%] w-[145px]"
        delay={0.75}
      />

      <ExpertSector
        title={expertise[2]}
        className="right-[3%] bottom-[35%] w-[180px]"
        delay={0.85}
      />

      <ExpertSector
        title={expertise[3]}
        className="bottom-[16%] left-[38%] w-[145px]"
        delay={0.95}
      />

      <ExpertSector
        title={expertise[4]}
        className="bottom-[35%] left-[7%] w-[150px]"
        delay={1.05}
      />

      {/* =====================================================
          CENTER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.55,
          delay: 0.55,
          ease: "easeOut",
        }}
        className="absolute top-1/2 left-1/2 z-20 flex h-[164px] w-[164px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF8F3]"
      >
        <div className="text-center">
          <span className="block text-[9px] font-semibold tracking-[0.28em] text-[#B41448] uppercase">
            Solvina
          </span>

          <span className="mt-2 block text-[25px] leading-[1.05] font-semibold tracking-[-0.035em] text-[#202020]">
            Expert
            <br />
            Areas
          </span>

          <span className="mx-auto mt-4 block h-[2px] w-8 bg-[#E3A526]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ExpertSector({
  title,
  className,
  delay,
}: {
  title: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: "easeOut",
      }}
      className={`absolute z-10 text-center ${className} `}
    >
      <div className="group">
        {/* Small engineering marker */}

        {/* <span
          className="
            mx-auto
            mb-3
            block
            h-2
            w-2
            rounded-full
            bg-[#E3A526]
            transition-all
            duration-300
            group-hover:scale-125
            group-hover:bg-[#B41448]
          "
        /> */}

        {/* Expertise */}

        <span className="block text-[14px] leading-[1.35] font-semibold tracking-[-0.015em] text-[#252525]/80 transition-colors duration-300 group-hover:text-[#B41448] xl:text-[15px]">
          {title}
        </span>
      </div>
    </motion.div>
  );
}
