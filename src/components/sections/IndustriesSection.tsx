"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { industriesServed } from "@/data/homepage";

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            SECTION INTRO
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
                Industries Served
              </span>
            </div>

            <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.5rem]">
              Engineering insight where systems are tightly connected.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/55 sm:text-[15px] sm:leading-7 lg:pb-1">
            Supporting utilities, industrial operators and project organizations
            where power, process, controls and operations interact.
          </p>
        </motion.div>

        {/* =====================================================
            INDUSTRY GRID
        ===================================================== */}

        <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:grid-rows-[200px_200px] lg:gap-4">
          {industriesServed.map((industry, index) => {
            const featured = index === 0;

            return (
              <motion.div
                key={industry.number}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={
                  featured
                    ? "lg:col-span-2 lg:row-span-2"
                    : index === 5
                      ? "lg:col-span-2"
                      : ""
                }
              >
                <Link
                  href={industry.href}
                  className="group relative block h-full min-h-[340px] overflow-hidden bg-[#151515] sm:min-h-[360px] lg:min-h-0"
                >
                  {/* Image */}
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    sizes={
                      featured
                        ? "(max-width: 1024px) 100vw, 50vw"
                        : "(max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Image protection */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Number */}
                  <div className="absolute top-5 left-5 z-10 sm:top-6 sm:left-6">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-white/70 tabular-nums">
                      {industry.number}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E3A526] group-hover:bg-[#E3A526] group-hover:text-black sm:top-6 sm:right-6">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-7">
                    {/* Gold accent */}
                    <div className="mb-4 h-[2px] w-8 bg-[#E3A526] transition-all duration-300 group-hover:w-14" />

                    <h3
                      className={`max-w-xl leading-[1.1] font-semibold tracking-[-0.025em] text-white ${
                        featured
                          ? "text-2xl sm:text-3xl lg:text-[2.15rem]"
                          : "text-xl sm:text-[1.35rem]"
                      } `}
                    >
                      {industry.title}
                    </h3>

                    <p
                      className={`mt-3 max-w-xl leading-6 text-white/75 ${
                        featured
                          ? "text-sm sm:text-[15px] sm:leading-7"
                          : "text-xs sm:text-sm"
                      } `}
                    >
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="mt-6 flex justify-end"
        >
          <Link
            href="/industries/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors duration-300 hover:text-[#9F103F]"
          >
            View All Industries
            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
