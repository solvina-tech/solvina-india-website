"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { expertiseFamilies } from "@/data/homepage";

export default function ExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5]">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
                Our Expertise
              </span>
            </div>

            <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.5rem]">
              Engineering capability across the systems that matter.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/55 sm:text-[15px] sm:leading-7 lg:pb-1">
            Integrated engineering expertise for complex power, steam, process,
            control and electrical systems.
          </p>
        </motion.div>

        {/* =====================================================
            EXPERTISE GRID
        ===================================================== */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {expertiseFamilies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col overflow-hidden border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B41448]/25 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)] sm:p-7"
                >
                  <span className="absolute top-0 left-0 h-[2px] w-9 bg-[#E3A526] transition-all duration-300 group-hover:w-16" />

                  {/* <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.16em] text-black/30 tabular-nums">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-black/[0.08] bg-[#FAFAFA] text-[#B41448] transition-all duration-300 group-hover:border-[#B41448]/20 group-hover:bg-[#B41448] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div> */}

                  <div className="">
                    <h3 className="max-w-[280px] text-lg leading-[1.2] font-semibold tracking-[-0.02em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[290px] text-sm leading-6 text-black/55">
                      {item.description}
                    </p>
                    <div className="absolute right-[20px] bottom-[20px] flex justify-end">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.6}
                        className="shrink-0 text-black/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B41448]"
                      />
                    </div>
                  </div>

                  {/* <div className="mt-6 flex items-center justify-between border-t border-black/[0.07] pt-4">
                    <span className="max-w-[220px] text-[10px] font-semibold tracking-[0.1em] text-black/40 uppercase transition-colors duration-300 group-hover:text-[#B41448]">
                      {item.linkLabel}
                    </span>

                  </div> */}
                </Link>
              </motion.div>
            );
          })}
        </div>
        {/* ===================================================
    VIEW ALL EXPERTISE
=================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="mt-6 flex justify-end"
        >
          <Link
            href="/expertise/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors duration-300 hover:text-[#9F103F]"
          >
            View All Expertise
            <ArrowRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
