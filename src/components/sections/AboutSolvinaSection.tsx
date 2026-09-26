"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { homepageAbout } from "@/data/homepage";

export default function AboutSolvinaSection() {
  return (
    <section id="about-solvina" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:gap-24">
          {/* =====================================================
              IMAGE
          ===================================================== */}

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
            className="relative order-2 lg:order-1"
          >
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 h-24 w-24 border-t-2 border-r-2 border-[#E3A526] sm:-top-4 sm:-right-4"
            />
            {/* Image frame */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F2F0] sm:aspect-[16/10] lg:aspect-[3/3]">
              <Image
                src={homepageAbout.image.src}
                alt={homepageAbout.image.alt}
                fill
                sizes="
                  (max-width: 1024px) 100vw,
                  45vw
                "
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Subtle image protection */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Brand accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-24 w-24 border-b-2 border-l-2 border-[#E3A526] sm:-bottom-4 sm:-left-4"
            />

            {/* Small engineering marker */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="absolute right-5 bottom-5 hidden bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B41448]" />

                <span className="text-[9px] font-bold tracking-[0.18em] text-black/55 uppercase">
                  Multidisciplinary Engineering
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

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
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
                {homepageAbout.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.35rem] xl:text-[3.75rem]">
              {homepageAbout.title}
            </h2>

            {/* Main positioning */}
            <p className="mt-7 text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              {homepageAbout.description}
            </p>

            {/* Heritage */}
            <div className="mt-8 border-l-2 border-[#E3A526] pl-5">
              <p className="text-sm leading-6 text-black/55 sm:text-[15px] sm:leading-7">
                {homepageAbout.heritage}
              </p>
            </div>

            {/* Engineering disciplines */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {[
                "Power Systems",
                "Thermodynamics & Process",
                "Control Engineering",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.08,
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B41448]" />

                  <span className="text-xs font-medium text-black/65 sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href={homepageAbout.cta.href}
                className="group inline-flex items-center gap-2 border-b border-[#B41448] pb-1.5 text-sm font-semibold text-[#B41448] transition-colors duration-300 hover:border-[#E3A526] hover:text-[#9F103F]"
              >
                {homepageAbout.cta.label}

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
