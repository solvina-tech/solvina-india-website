// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Factory,
//   Network,
//   Activity,
//   GitMerge,
//   ShieldCheck,
//   SearchCode,
// } from "lucide-react";

// const challenges = [
//   {
//     id: "interconnected-systems",
//     number: "01",
//     theme: "Interconnected Systems",
//     narrative:
//       "A change in one part of an industrial energy system can propagate through generation, steam networks, process loads, controls and protection.",
//     icon: Network,
//   },
//   {
//     id: "disturbance-behaviour",
//     number: "02",
//     theme: "Disturbance Behaviour",
//     narrative:
//       "The most important questions often appear during trips, islanding, frequency events, load changes and other transitions.",
//     icon: Activity,
//   },
//   {
//     id: "control-interaction",
//     number: "03",
//     theme: "Control Interaction",
//     narrative:
//       "Individual control loops may be stable while the overall plant response remains poorly coordinated.",
//     icon: GitMerge,
//   },
//   {
//     id: "grid-compliance",
//     number: "04",
//     theme: "Grid Compliance",
//     narrative:
//       "Compliance requires credible evidence of actual generator and control-system behaviour, not only documentation.",
//     icon: ShieldCheck,
//   },
//   {
//     id: "engineering-uncertainty",
//     number: "05",
//     theme: "Engineering Uncertainty",
//     narrative:
//       "Critical operating or investment decisions become stronger when assumptions are tested through modelling, simulation and validation.",
//     icon: SearchCode,
//   },
// ];

// // Evenly spaced around a circle, starting at the top, going clockwise
// const RADIUS = 40; // % of container
// const nodePositions = challenges.map((_, i) => {
//   const angleDeg = -90 + i * (360 / challenges.length);
//   const angleRad = (angleDeg * Math.PI) / 180;
//   return {
//     x: 50 + RADIUS * Math.cos(angleRad),
//     y: 50 + RADIUS * Math.sin(angleRad),
//   };
// });

// function RadialDiagram({
//   activeId,
//   setActiveId,
// }: {
//   activeId: string | null;
//   setActiveId: (id: string | null) => void;
// }) {
//   return (
//     <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
//       <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
//         {challenges.map((item, i) => {
//           const pos = nodePositions[i];
//           const isActive = activeId === item.id;
//           return (
//             <g key={item.id}>
//               {/* base spoke */}
//               <line
//                 x1="50" y1="50" x2={pos.x} y2={pos.y}
//                 stroke="#25252514" strokeWidth="0.6"
//               />
//               {/* highlight spoke, drawn once on view */}
//               <motion.line
//                 x1="50" y1="50" x2={pos.x} y2={pos.y}
//                 stroke={isActive ? "#B41448" : "#B4144833"}
//                 strokeWidth="0.6"
//                 initial={{ pathLength: 0, opacity: 0 }}
//                 whileInView={{ pathLength: 1, opacity: 1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: "easeOut" }}
//               />
//               {/* pulse traveling outward from plant to node, looping softly */}
//               <motion.circle
//                 r="1.1"
//                 fill="#E3A526"
//                 initial={{ opacity: 0 }}
//                 whileInView={{
//                   cx: [50, pos.x],
//                   cy: [50, pos.y],
//                   opacity: [0, 1, 1, 0],
//                 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{
//                   duration: 1.6,
//                   delay: 1 + i * 0.12,
//                   repeat: Infinity,
//                   repeatDelay: 3.2,
//                   ease: "easeInOut",
//                 }}
//               />
//             </g>
//           );
//         })}
//       </svg>

//       {/* center — the plant */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.85 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true, margin: "-100px" }}
//         transition={{ duration: 0.5 }}
//         className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#B41448]/20 bg-white shadow-[0_10px_30px_rgba(180,20,72,0.12)]"
//       >
//         <Factory strokeWidth={1.5} className="h-8 w-8 text-[#B41448]" />
//         <span className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-black/40">
//           Your Plant
//         </span>
//       </motion.div>

//       {/* spoke nodes */}
//       {challenges.map((item, i) => {
//         const pos = nodePositions[i];
//         const Icon = item.icon;
//         const isActive = activeId === item.id;
//         return (
//           <motion.button
//             key={item.id}
//             type="button"
//             initial={{ opacity: 0, scale: 0.7 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.4, delay: 0.3 + i * 0.12, ease: "easeOut" }}
//             onMouseEnter={() => setActiveId(item.id)}
//             onMouseLeave={() => setActiveId(null)}
//             onFocus={() => setActiveId(item.id)}
//             onBlur={() => setActiveId(null)}
//             style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
//             className={`
//               absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center
//               rounded-full border bg-white transition-all duration-300
//               ${
//                 isActive
//                   ? "border-[#B41448] shadow-[0_8px_20px_rgba(180,20,72,0.18)] scale-110"
//                   : "border-black/10 shadow-sm"
//               }
//             `}
//           >
//             <Icon
//               strokeWidth={1.5}
//               className={`h-6 w-6 transition-colors duration-300 ${
//                 isActive ? "text-[#B41448]" : "text-[#252525]/45"
//               }`}
//             />
//             <span className="absolute -top-1.5 -right-1 rounded-full bg-[#252525] px-1.5 py-0.5 text-[9px] font-semibold text-white">
//               {item.number}
//             </span>
//           </motion.button>
//         );
//       })}
//     </div>
//   );
// }

// function ChallengeCards({
//   activeId,
//   setActiveId,
// }: {
//   activeId: string | null;
//   setActiveId: (id: string | null) => void;
// }) {
//   return (
//     <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-5">
//       {challenges.map((item, i) => {
//         const Icon = item.icon;
//         const isActive = activeId === item.id;
//         return (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
//             onMouseEnter={() => setActiveId(item.id)}
//             onMouseLeave={() => setActiveId(null)}
//             className={`
//               rounded-2xl border bg-white p-5 transition-all duration-300
//               ${
//                 isActive
//                   ? "border-[#B41448]/40 shadow-[0_10px_28px_rgba(180,20,72,0.12)] -translate-y-1"
//                   : "border-black/[0.08] shadow-sm"
//               }
//             `}
//           >
//             <div className="flex items-center justify-between">
//               <span className="text-[11px] font-semibold text-black/35">{item.number}</span>
//               <Icon
//                 strokeWidth={1.5}
//                 className={`h-6 w-6 transition-colors duration-300 lg:hidden ${
//                   isActive ? "text-[#B41448]" : "text-[#252525]/45"
//                 }`}
//               />
//             </div>
//             <h4 className="mt-3 text-[15px] font-bold leading-snug text-[#252525]">
//               {item.theme}
//             </h4>
//             <p className="mt-2 text-[13px] leading-5 text-black/60">{item.narrative}</p>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// export default function ChallengeSectionRadial() {
//   const [activeId, setActiveId] = useState<string | null>(null);

//   return (
//     <section className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.5 }}
//           className="mx-auto max-w-2xl text-center lg:text-left"
//         >
//           <span className="text-xs font-semibold uppercase tracking-widest text-[#B41448]">
//             Your Operating Environment
//           </span>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
//             One change rarely stays where it started
//           </h2>
//           <p className="mt-4 text-base text-black/55 sm:text-lg">
//             Five patterns Solvina looks for before proposing anything.
//           </p>
//         </motion.div>

//         <RadialDiagram activeId={activeId} setActiveId={setActiveId} />
//         <ChallengeCards activeId={activeId} setActiveId={setActiveId} />
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Network,
  Activity,
  GitMerge,
  ShieldCheck,
  SearchCode,
  ArrowUpRight,
} from "lucide-react";

const challenges = [
  {
    id: "interconnected-systems",
    number: "01",
    theme: "Interconnected Systems",
    subtitle: "Cascading Impact Dynamics",
    narrative:
      "A change in one part of an industrial energy system can propagate through generation, steam networks, process loads, controls and protection.",
    icon: Network,
    accent: "from-blue-500 to-indigo-600",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    id: "disturbance-behaviour",
    number: "02",
    theme: "Disturbance Behaviour",
    subtitle: "Transient State Vulnerabilities",
    narrative:
      "The most important questions often appear during trips, islanding, frequency events, load changes and other transitions.",
    icon: Activity,
    accent: "from-amber-500 to-orange-600",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    id: "control-interaction",
    number: "03",
    theme: "Control Interaction",
    subtitle: "Uncoordinated Loop Dynamics",
    narrative:
      "Individual control loops may be stable while the overall plant response remains poorly coordinated.",
    icon: GitMerge,
    accent: "from-purple-500 to-pink-600",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    id: "grid-compliance",
    number: "04",
    theme: "Grid Compliance",
    subtitle: "Beyond Paper Compliance",
    narrative:
      "Compliance requires credible evidence of actual generator and control-system behaviour, not only documentation.",
    icon: ShieldCheck,
    accent: "from-emerald-500 to-teal-600",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    id: "engineering-uncertainty",
    number: "05",
    theme: "Engineering Uncertainty",
    subtitle: "Validated Decision Making",
    narrative:
      "Critical operating or investment decisions become stronger when assumptions are tested through modelling, simulation and validation.",
    icon: SearchCode,
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(6, 182, 212, 0.15)",
  },
];

export default function ChallengesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeChallenge = challenges[activeIndex];
  const IconComponent = activeChallenge.icon;

  return (
    <section className="relative bg-zinc-950 text-white py-24 px-6 md:px-12 overflow-hidden selection:bg-white/20">
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] transition-all duration-700 pointer-events-none"
        style={{ background: activeChallenge.glow }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-zinc-800/80 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Core Engineering Friction
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Five Critical Challenges
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            Operational bottlenecks and hidden risks that emerge across complex energy networks.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {challenges.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-900/90 border border-zinc-700/60 shadow-xl"
                      : "bg-zinc-900/20 border border-transparent hover:bg-zinc-900/50 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm tracking-widest transition-colors ${
                          isActive ? "text-white font-bold" : "text-zinc-500"
                        }`}
                      >
                        {item.number}
                      </span>
                      <div>
                        <h3
                          className={`text-lg font-medium transition-colors ${
                            isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {item.theme}
                        </h3>
                        <p className="text-xs text-zinc-500 font-normal">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive
                          ? "text-white translate-x-0.5 -translate-y-0.5 opacity-100"
                          : "text-zinc-600 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Hero Stage Display Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-zinc-900/40 border border-zinc-800/80 p-8 md:p-12 backdrop-blur-xl min-h-[380px] flex flex-col justify-between overflow-hidden">
              {/* Animated Floating Gradient Pill */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge.id}
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-8 relative z-10"
                >
                  {/* Top Bar: Icon Badge & Challenge Counter */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeChallenge.accent} flex items-center justify-center text-white shadow-lg shadow-black/40`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-mono text-4xl font-bold text-zinc-800">
                      {activeChallenge.number}
                    </span>
                  </div>

                  {/* Title & Narrative */}
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                      {activeChallenge.theme}
                    </h3>
                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-xl font-normal">
                      {activeChallenge.narrative}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Bottom Indicator Dots */}
              <div className="flex items-center gap-2 pt-8 mt-4 border-t border-zinc-800/60 relative z-10">
                {challenges.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}