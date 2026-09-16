"use client";

import { motion } from "framer-motion";
import {
  Network,
  Activity,
  GitMerge,
  ShieldCheck,
  SearchCode,
} from "lucide-react";
import Image from "next/image";

const challenges = [
  {
    id: "interconnected-systems",
    number: "01",
    theme: "Interconnected Systems",
    image: "/images/interconnected-systems.png",
    narrative:
      "A change in one part of an industrial energy system can propagate through generation, steam networks, process loads, controls and protection.",
    icon: Network,
    featured: true,
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

function ChallengeCard({
  item,
  index,
}: {
  item: (typeof challenges)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-7 sm:p-8 ${item.featured ? "lg:col-span-2 lg:row-span-2 lg:p-10" : ""} `}
    >
      {/* gold accent, consistent with trust bar */}
      <div className="absolute top-0 left-7 h-[2px] w-8 bg-[#E3A526] transition-all duration-300 group-hover:w-14 sm:left-8" />

      {/* <div className="flex items-start justify-between">
        <span className="text-xs font-semibold tracking-wide text-black/35">
          {item.number}
        </span>
        <Icon
          strokeWidth={1.5}
          className={`text-[#B41448]/70 transition-colors duration-300 group-hover:text-[#B41448] ${
            item.featured ? "h-9 w-9" : "h-7 w-7"
          }`}
        />
      </div> */}

      {item.image && (
        <div className="flex min-h-0 flex-1 items-center justify-center">
          <Image
            src={item.image}
            alt={item.theme}
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
        </div>
      )}

      <h3
        className={`mt-6 leading-tight font-bold text-[#252525] ${
          item.featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
        }`}
      >
        {item.theme}
      </h3>

      <p
        className={`mt-3 leading-6 text-black/60 ${
          item.featured
            ? "text-base sm:text-[17px]"
            : "text-sm sm:text-[15px]"
        }`}
      >
        {item.narrative}
      </p>
    </motion.div>
  );
}

export default function CustomerChallengesSection() {
  return (
    <section className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E3A526]" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase">
              The Engineering Challenge
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
            Five questions we ask before we propose anything
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {challenges.map((item, i) => (
            <ChallengeCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
