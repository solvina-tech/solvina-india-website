//

"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Network,
  Activity,
  GitMerge,
  ShieldCheck,
  SearchCode,
} from "lucide-react";

const challenges = [
  {
    id: "interconnected-systems",
    number: "01",
    theme: "Interconnected Systems",
    narrative:
      "A change in one part of an industrial energy system can propagate through generation, steam networks, process loads, controls and protection.",
    icon: Network,
  },
  {
    id: "disturbance-behaviour",
    number: "02",
    theme: "Disturbance Behaviour",
    narrative:
      "The most important questions often appear during trips, islanding, frequency events, load changes and other transitions.",
    icon: Activity,
  },
  {
    id: "control-interaction",
    number: "03",
    theme: "Control Interaction",
    narrative:
      "Individual control loops may be stable while the overall plant response remains poorly coordinated.",
    icon: GitMerge,
  },
  {
    id: "grid-compliance",
    number: "04",
    theme: "Grid Compliance",
    narrative:
      "Compliance requires credible evidence of actual generator and control-system behaviour, not only documentation.",
    icon: ShieldCheck,
  },
  {
    id: "engineering-uncertainty",
    number: "05",
    theme: "Engineering Uncertainty",
    narrative:
      "Critical operating or investment decisions become stronger when assumptions are tested through modelling, simulation and validation.",
    icon: SearchCode,
  },
];

function DesktopPropagation() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative hidden lg:block">
      {/* connecting line row — plays once on enter, no scroll-scrubbing */}
      <div className="relative h-14">
        <div className="absolute top-1/2 right-8 left-8 h-[2px] -translate-y-1/2 bg-black/[0.08]" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute top-1/2 right-8 left-8 h-[2px] -translate-y-1/2 bg-[#B41448]/30"
        />
        {/* pulse glides across once, matched to the line's draw duration */}
        <motion.div
          initial={{ left: "0%", opacity: 0 }}
          whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3A526] shadow-[0_0_14px_3px_rgba(227,165,38,0.5)]"
        />

        <div className="absolute inset-0 flex justify-between px-8">
          {challenges.map((item) => (
            <div key={item.id} className="relative flex w-40 justify-center">
              <div
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  activeId === item.id ? "bg-[#B41448]" : "bg-black/15"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* cards row — always visible, content-driven height */}
      <div className="grid grid-cols-5 gap-5">
        {challenges.map((item, i) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`group rounded-2xl border bg-white p-5 transition-all duration-300 ${
                isActive
                  ? "-translate-y-1 border-[#B41448]/40 shadow-[0_10px_28px_rgba(180,20,72,0.12)]"
                  : "border-black/[0.08] shadow-sm"
              } `}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-black/35">
                  {item.number}
                </span>
                <Icon
                  strokeWidth={1.5}
                  className={`h-6 w-6 transition-colors duration-300 ${
                    isActive ? "text-[#B41448]" : "text-[#252525]/45"
                  }`}
                />
              </div>
              <h4 className="mt-4 text-[15px] leading-snug font-bold text-[#252525]">
                {item.theme}
              </h4>
              <p className="mt-2 text-[13px] leading-5 text-black/60">
                {item.narrative}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function MobileTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 40%"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative block lg:hidden">
      <div className="relative pl-10">
        <div className="absolute top-2 bottom-2 left-4 w-[2px] bg-black/[0.08]" />
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-2 left-4 w-[2px] bg-[#B41448]"
        />
        <div className="space-y-8">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative"
              >
                <div className="absolute top-0 -left-10 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                  <Icon strokeWidth={1.5} className="h-4 w-4 text-[#B41448]" />
                </div>
                <span className="text-xs font-semibold text-black/35">
                  {item.number}
                </span>
                <h4 className="mt-1 text-base font-bold text-[#252525]">
                  {item.theme}
                </h4>
                <p className="mt-1.5 text-sm leading-6 text-black/60">
                  {item.narrative}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ChallengeSectionPropagation() {
  return (
    <section className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#B41448] uppercase">
            WHAT WE LOOK FOR BEFORE WE PROPOSE ANYTHING
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
            Five things every integrated plant has to get right
          </h2>
          {/* <p className="mt-4 text-base text-black/55 sm:text-lg">
            Five patterns Solvina looks for before proposing anything.
          </p> */}
        </motion.div>

        <div className="mt-14">
          <DesktopPropagation />
          <MobileTimeline />
        </div>
      </div>
    </section>
  );
}

// Option 1 (closest to source doc wording)
// Eyebrow:  YOUR OPERATING ENVIRONMENT
// Headline: One change rarely stays where it started

// Option 2 (names whose problem it is, explicitly)
// Eyebrow:  PROBLEMS WE SEE IN THE FIELD
// Headline: One change rarely stays where it started

// Option 3 (frames it as "what we look for," ties back to the challenge-theme table)
// Eyebrow:  WHAT WE LOOK FOR BEFORE WE PROPOSE ANYTHING
// Headline: Five things every integrated plant has to get right

// Option 4 (most direct fix — least change from what you have)
// Eyebrow:  THE PLANT'S ENGINEERING CHALLENGE
// Headline: One change rarely stays where it started