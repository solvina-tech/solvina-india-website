// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Check } from "lucide-react";

// import { modelToPlantMethod } from "@/data/homepage";

// export default function ModelToPlantSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F7F7F5]">
//       <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
//         {/* =====================================================
//             INTRO
//         ===================================================== */}

//         <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-9 bg-[#E3A526]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B41448] sm:text-xs">
//                 Our Engineering Method
//               </span>
//             </div>

//             <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.5rem]">
//               From engineering question to validated action.
//             </h2>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{
//               duration: 0.6,
//               delay: 0.1,
//               ease: "easeOut",
//             }}
//             className="max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8"
//           >
//             A structured engineering process connects system understanding,
//             modelling, simulation, testing and validation so that technical
//             decisions are supported by appropriate evidence.
//           </motion.p>
//         </div>

//         {/* =====================================================
//             DESKTOP TIMELINE
//         ===================================================== */}

//         <div className="mt-20 hidden lg:block">
//           <div className="relative">
//             {/* Base line */}
//             <div className="absolute left-[7.14%] right-[7.14%] top-7 h-px bg-black/[0.10]" />

//             {/* Animated progress line */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{
//                 duration: 1.8,
//                 ease: "easeInOut",
//               }}
//               className="absolute left-[7.14%] right-[7.14%] top-7 h-px origin-left bg-[#E3A526]"
//             />

//             <div className="grid grid-cols-7">
//               {modelToPlantMethod.map((item, index) => (
//                 <motion.div
//                   key={item.number}
//                   initial={{
//                     opacity: 0,
//                     y: 16,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     margin: "-100px",
//                   }}
//                   transition={{
//                     duration: 0.45,
//                     delay: 0.15 + index * 0.12,
//                     ease: "easeOut",
//                   }}
//                   className="group relative flex flex-col items-center px-3 text-center"
//                 >
//                   {/* Number marker */}
//                   <motion.div
//                     whileHover={{ scale: 1.08 }}
//                     className="
//                       relative
//                       z-10
//                       flex
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-black/[0.10]
//                       bg-white
//                       text-xs
//                       font-semibold
//                       tabular-nums
//                       text-[#B41448]
//                       shadow-sm
//                       transition-all
//                       duration-300
//                       group-hover:border-[#B41448]/30
//                       group-hover:shadow-md
//                     "
//                   >
//                     {item.number}
//                   </motion.div>

//                   {/* Step */}
//                   <h3 className="mt-6 text-base font-semibold tracking-[-0.015em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448]">
//                     {item.step}
//                   </h3>

//                   {/* Description */}
//                   <p className="mt-2 max-w-[150px] text-xs leading-5 text-black/45">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             MOBILE TIMELINE
//         ===================================================== */}

//         <div className="mt-14 lg:hidden">
//           <div className="relative">
//             {modelToPlantMethod.map((item, index) => {
//               const isLast =
//                 index === modelToPlantMethod.length - 1;

//               return (
//                 <motion.div
//                   key={item.number}
//                   initial={{
//                     opacity: 0,
//                     x: -15,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     margin: "-50px",
//                   }}
//                   transition={{
//                     duration: 0.45,
//                     delay: index * 0.08,
//                     ease: "easeOut",
//                   }}
//                   className="relative flex gap-5"
//                 >
//                   {/* Marker + connector */}
//                   <div className="relative flex w-12 shrink-0 justify-center">
//                     <div
//                       className="
//                         relative
//                         z-10
//                         flex
//                         h-12
//                         w-12
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-black/[0.10]
//                         bg-white
//                         text-xs
//                         font-semibold
//                         tabular-nums
//                         text-[#B41448]
//                         shadow-sm
//                       "
//                     >
//                       {item.number}
//                     </div>

//                     {/* Only connect to the NEXT item */}
//                     {!isLast && (
//                       <div
//                         aria-hidden="true"
//                         className="
//                           absolute
//                           left-1/2
//                           top-12
//                           h-[calc(100%+2rem)]
//                           w-px
//                           -translate-x-1/2
//                           bg-[#E3A526]
//                         "
//                       />
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div
//                     className={`
//                       flex-1
//                       pb-8
//                       ${
//                         isLast
//                           ? "pb-0"
//                           : ""
//                       }
//                     `}
//                   >
//                     <h3 className="pt-1 text-base font-semibold text-[#202020] sm:text-lg">
//                       {item.step}
//                     </h3>

//                     <p className="mt-2 max-w-xl text-sm leading-6 text-black/50">
//                       {item.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* =====================================================
//             FOOTER
//         ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 12,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             margin: "-50px",
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.3,
//           }}
//           className="mt-14 flex flex-col gap-4 border-t border-black/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
//         >
//           <div className="flex items-center gap-2">
//             <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B41448] text-white">
//               <Check size={13} strokeWidth={2.2} />
//             </span>

//             <span className="text-xs font-semibold text-black/50 sm:text-sm">
//               Evidence-led engineering progression
//             </span>
//           </div>

//           <div className="flex items-center gap-2 text-xs font-medium text-black/35">
//             Understand

//             <ArrowRight size={13} />

//             Validate
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Box,
//   Play,
//   FlaskConical,
//   Stethoscope,
//   SlidersHorizontal,
//   BadgeCheck,
// } from "lucide-react";

// const steps = [
//   {
//     id: "understand",
//     number: "01",
//     title: "Understand",
//     meaning:
//       "Define the system, operating problem, interfaces and decision context.",
//     icon: Search,
//   },
//   {
//     id: "model",
//     number: "02",
//     title: "Model",
//     meaning:
//       "Build or validate the engineering representation needed for the question.",
//     icon: Box,
//   },
//   {
//     id: "simulate",
//     number: "03",
//     title: "Simulate",
//     meaning:
//       "Explore normal, disturbed and alternative operating scenarios.",
//     icon: Play,
//   },
//   {
//     id: "test",
//     number: "04",
//     title: "Test",
//     meaning:
//       "Use controlled testing, measurement or HIL approaches where applicable and supported.",
//     icon: FlaskConical,
//   },
//   {
//     id: "diagnose",
//     number: "05",
//     title: "Diagnose",
//     meaning: "Identify interactions, limitations and root causes.",
//     icon: Stethoscope,
//   },
//   {
//     id: "optimize",
//     number: "06",
//     title: "Optimize",
//     meaning:
//       "Develop settings, control strategies or engineering recommendations.",
//     icon: SlidersHorizontal,
//   },
//   {
//     id: "validate",
//     number: "07",
//     title: "Validate",
//     meaning:
//       "Confirm that the model, settings or recommended behaviour are supported by appropriate evidence.",
//     icon: BadgeCheck,
//   },
// ];

// function DesktopStepper() {
//   const [activeId, setActiveId] = useState<string>(steps[0].id);
//   const activeStep = steps.find((s) => s.id === activeId)!;

//   return (
//     <div className="hidden lg:block">
//       {/* connecting line + nodes */}
//       <div className="relative">
//         <div className="absolute left-0 right-0 top-6 h-[2px] bg-black/[0.08]" />
//         <motion.div
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           style={{ transformOrigin: "left" }}
//           className="absolute left-0 right-0 top-6 h-[2px] bg-[#B41448]/35"
//         />

//         <div className="relative grid grid-cols-7">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             const isActive = activeId === step.id;
//             return (
//               <motion.button
//                 key={step.id}
//                 type="button"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: "easeOut" }}
//                 onMouseEnter={() => setActiveId(step.id)}
//                 onFocus={() => setActiveId(step.id)}
//                 onClick={() => setActiveId(step.id)}
//                 className="group flex flex-col items-center px-1 outline-none"
//               >
//                 <span
//                   className={`
//                     relative z-10 flex h-12 w-12 items-center justify-center rounded-full
//                     border bg-white transition-all duration-300
//                     ${
//                       isActive
//                         ? "border-[#B41448] shadow-[0_8px_20px_rgba(180,20,72,0.18)] scale-110"
//                         : "border-black/10 shadow-sm group-hover:border-[#B41448]/50"
//                     }
//                   `}
//                 >
//                   <Icon
//                     strokeWidth={1.5}
//                     className={`h-5 w-5 transition-colors duration-300 ${
//                       isActive ? "text-[#B41448]" : "text-[#252525]/45"
//                     }`}
//                   />
//                 </span>
//                 <span
//                   className={`mt-3 text-[10px] font-semibold tracking-wide ${
//                     isActive ? "text-[#B41448]" : "text-black/35"
//                   }`}
//                 >
//                   {step.number}
//                 </span>
//                 <span
//                   className={`mt-1 text-sm font-bold transition-colors duration-300 ${
//                     isActive ? "text-[#252525]" : "text-black/55"
//                   }`}
//                 >
//                   {step.title}
//                 </span>
//               </motion.button>
//             );
//           })}
//         </div>
//       </div>

//       {/* expanded detail panel — always has content (defaults to step 1), never empty */}
//       <div className="relative mt-8 min-h-[104px] rounded-2xl border border-black/[0.08] bg-white p-8">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeStep.id}
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.25, ease: "easeOut" }}
//             className="flex items-start gap-5"
//           >
//             <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B41448]/8">
//               <activeStep.icon strokeWidth={1.5} className="h-5 w-5 text-[#B41448]" />
//             </div>
//             <div>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-xs font-semibold text-black/35">
//                   {activeStep.number}
//                 </span>
//                 <h4 className="text-lg font-bold text-[#252525]">{activeStep.title}</h4>
//               </div>
//               <p className="mt-1.5 max-w-2xl text-[15px] leading-6 text-black/60">
//                 {activeStep.meaning}
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// function MobileSequence() {
//   return (
//     <div className="relative block lg:hidden">
//       <div className="relative pl-10">
//         <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-black/[0.08]" />
//         <motion.div
//           initial={{ scaleY: 0 }}
//           whileInView={{ scaleY: 1 }}
//           viewport={{ once: true, margin: "-60px" }}
//           transition={{ duration: 1.4, ease: "easeInOut" }}
//           style={{ transformOrigin: "top" }}
//           className="absolute left-4 top-2 bottom-2 w-[2px] bg-[#B41448]/40"
//         />

//         <div className="space-y-7">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             return (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0, x: -12 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
//                 className="relative"
//               >
//                 <div className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
//                   <Icon strokeWidth={1.5} className="h-4 w-4 text-[#B41448]" />
//                 </div>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-xs font-semibold text-black/35">{step.number}</span>
//                   <h4 className="text-base font-bold text-[#252525]">{step.title}</h4>
//                 </div>
//                 <p className="mt-1.5 text-sm leading-6 text-black/60">{step.meaning}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ModelToPlantMethod() {
//   return (
//     <section className="bg-white py-16 sm:py-20 lg:py-24">
//       <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.5 }}
//           className="max-w-2xl"
//         >
//           <span className="text-xs font-semibold uppercase tracking-widest text-[#B41448]">
//             Our Method
//           </span>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
//             From model to plant, in seven steps
//           </h2>
//           <p className="mt-4 text-base text-black/55 sm:text-lg">
//             The same method behind every engagement — hover or select a step for detail.
//           </p>
//         </motion.div>

//         <div className="mt-14">
//           <DesktopStepper />
//           <MobileSequence />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { modelToPlantMethods } from "@/data/homepage";

const STEP_MS = 650;
const N = modelToPlantMethods.length;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReduced(mq.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  return reduced;
}

/**
 * Runs the seven-step sweep once when the section
 * enters the viewport.
 */
function useStepCycleOnce(paused: boolean, running: boolean) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const hasStartedRef = useRef(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    if (paused || !running || hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;

    let i = -1;

    const step = () => {
      i += 1;

      setActiveIndex(i);

      if (i < N - 1) {
        timeoutRef.current = setTimeout(step, STEP_MS);
      }
    };

    timeoutRef.current = setTimeout(step, STEP_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [paused, running]);

  return activeIndex;
}

/* =========================================================
   DESKTOP
========================================================= */

function DesktopZigzag({ activeIndex }: { activeIndex: number }) {
  const fillFraction = activeIndex < 0 ? 0 : (activeIndex + 1) / N;

  return (
    <div className="relative hidden pt-28 pb-28 lg:block">
      {/* Base timeline */}
      <div className="absolute top-1/2 right-0 left-0 h-[2px] -translate-y-1/2 rounded-full bg-white/[0.10]" />

      {/* Animated timeline */}
      <motion.div
        animate={{
          scaleX: fillFraction,
        }}
        transition={{
          duration: STEP_MS / 1000,
          ease: "linear",
        }}
        style={{
          transformOrigin: "left",
        }}
        className="absolute top-1/2 right-0 left-0 h-[3px] -translate-y-1/2 rounded-full bg-[#B41448] shadow-[0_0_14px_rgba(180,20,72,0.35)]"
      />

      <div className="relative grid grid-cols-7">
        {modelToPlantMethods.map((step, i) => {
          const isActive = i <= activeIndex;
          const isTop = i % 2 === 0;
          const Icon = step.icon;

          return (
            <div key={step.id} className="relative flex justify-center">
              {/* Connector from timeline to text */}
              <div
                className={`absolute left-1/2 w-px -translate-x-1/2 transition-colors duration-500 ${
                  isActive ? "bg-[#E3A526]/70" : "bg-white/[0.10]"
                } ${isTop ? "bottom-1/2 h-10" : "top-1/2 h-10"} `}
              />

              {/* Node */}
              <motion.span
                animate={{
                  scale: isActive ? 1 : 0.94,
                  boxShadow: isActive
                    ? "0 0 0 5px rgba(180,20,72,0.08), 0 0 22px rgba(180,20,72,0.16)"
                    : "0 0 0 0 rgba(180,20,72,0)",
                }}
                transition={{
                  duration: 0.45,
                }}
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-[#111D2A] transition-colors duration-500 ${
                  isActive ? "border-[#B41448]" : "border-white/[0.16]"
                } `}
              >
                <Icon
                  strokeWidth={1.5}
                  className={`h-5 w-5 transition-colors duration-500 ${
                    isActive ? "text-[#E3A526]" : "text-white/25"
                  } `}
                />
              </motion.span>

              {/* Text */}
              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  y: isActive ? 0 : 2,
                }}
                transition={{
                  duration: 0.5,
                }}
                className={`absolute left-1/2 w-40 -translate-x-1/2 text-center ${
                  isTop ? "bottom-[calc(50%+2.5rem)]" : "top-[calc(50%+2.5rem)]"
                } `}
              >
                {/* <div
                  className={`
                    text-[10px]
                    font-semibold
                    tracking-[0.16em]
                    transition-colors
                    duration-500
                    ${
                      isActive
                        ? "text-[#E3A526]"
                        : "text-white/25"
                    }
                  `}
                >
                  {step.number}
                </div> */}

                <h4
                  className={`mt-1 text-sm font-bold transition-colors duration-500 ${
                    isActive ? "text-white" : "text-white/35"
                  } `}
                >
                  {step.title}
                </h4>

                <p className="mt-1.5 text-[12px] leading-5 text-white/40">
                  {step.meaning}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE
========================================================= */

function MobileVertical({ activeIndex }: { activeIndex: number }) {
  const fillFraction = activeIndex < 0 ? 0 : (activeIndex + 1) / N;

  return (
    <div className="relative block lg:hidden">
      <div className="relative pl-14">
        {/* Base line */}
        <div className="absolute top-2 bottom-2 left-6 w-[2px] -translate-x-1/2 rounded-full bg-white/[0.10]" />

        {/* Animated line */}
        <motion.div
          animate={{
            scaleY: fillFraction,
          }}
          transition={{
            duration: STEP_MS / 1000,
            ease: "linear",
          }}
          style={{
            transformOrigin: "top",
          }}
          className="absolute top-2 bottom-2 left-6 w-[3px] -translate-x-1/2 rounded-full bg-[#B41448] shadow-[0_0_12px_rgba(180,20,72,0.35)]"
        />

        <div className="space-y-10">
          {modelToPlantMethods.map((step, i) => {
            const isActive = i <= activeIndex;

            const Icon = step.icon;

            return (
              <div key={step.id} className="relative">
                {/* Node */}
                <motion.span
                  animate={{
                    scale: isActive ? 1 : 0.94,
                    boxShadow: isActive
                      ? "0 0 0 4px rgba(180,20,72,0.08), 0 0 18px rgba(180,20,72,0.15)"
                      : "0 0 0 0 rgba(180,20,72,0)",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className={`absolute top-0 -left-14 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-[#111D2A] transition-colors duration-500 ${
                    isActive ? "border-[#B41448]" : "border-white/[0.16]"
                  } `}
                >
                  <Icon
                    strokeWidth={1.5}
                    className={`h-[18px] w-[18px] transition-colors duration-500 ${
                      isActive ? "text-[#E3A526]" : "text-white/25"
                    } `}
                  />
                </motion.span>

                {/* Content */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="pt-1.5"
                >
                  <div className="flex items-baseline gap-2">
                    {/* <span
                        className={`
                          text-xs
                          font-semibold
                          transition-colors
                          duration-500
                          ${
                            isActive
                              ? "text-[#E3A526]"
                              : "text-white/25"
                          }
                        `}
                      >
                        {step.number}
                      </span> */}

                    <h4
                      className={`text-base font-bold transition-colors duration-500 ${
                        isActive ? "text-white" : "text-white/35"
                      } `}
                    >
                      {step.title}
                    </h4>
                  </div>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    {step.meaning}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function ModelToPlantMethodSweep() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);

  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const activeIndex = useStepCycleOnce(reducedMotion, inView && !reducedMotion);

  const finalIndex = reducedMotion ? N - 1 : activeIndex;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0D1724] py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          TECHNICAL BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Atmospheric glow */}
        <div className="absolute top-[20%] left-[15%] h-[420px] w-[420px] rounded-full bg-[#B41448]/[0.055] blur-[120px]" />

        <div className="absolute right-[10%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-[#E3A526]/[0.035] blur-[120px]" />

        {/* Abstract system-response waveform */}
        <svg
          viewBox="0 0 1600 500"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-1/2 h-[500px] w-full -translate-y-1/2"
          fill="none"
        >
          <path
            d="
        M-50 270
        C80 270 110 270 180 270
        C240 270 250 210 310 210
        C370 210 380 340 450 340
        C520 340 535 170 610 170
        C680 170 690 300 760 300
        C830 300 850 245 910 245
        C970 245 985 125 1050 125
        C1115 125 1130 350 1200 350
        C1270 350 1290 205 1360 205
        C1430 205 1460 270 1530 270
        C1570 270 1600 270 1650 270
      "
            stroke="#E3A526"
            strokeWidth="1.5"
            opacity="0.12"
          />

          <path
            d="
        M-50 290
        C100 290 120 290 190 290
        C250 290 275 250 325 250
        C380 250 395 315 450 315
        C515 315 540 215 600 215
        C665 215 690 275 755 275
        C820 275 845 255 910 255
        C975 255 1000 180 1060 180
        C1120 180 1140 320 1205 320
        C1270 320 1300 245 1360 245
        C1430 245 1460 290 1530 290
        C1570 290 1600 290 1650 290
      "
            stroke="#B41448"
            strokeWidth="1"
            opacity="0.09"
          />
        </svg>
      </div>

      {/* Ambient magenta glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-[#B41448]/10 blur-3xl"
      />

      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-40 h-80 w-80 rounded-full bg-[#E3A526]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
          }}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#E3A526]" />

            <span className="text-xs font-semibold tracking-[0.18em] text-[#E3A526] uppercase">
              Our Method
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-[3.2rem]">
            Finding the problem
            <br className="hidden sm:block" /> in order to find the solution.
          </h2>
        </motion.div>

        {/* =====================================================
            METHOD TIMELINE
        ===================================================== */}

        <DesktopZigzag activeIndex={finalIndex} />

        <MobileVertical activeIndex={finalIndex} />
      </div>
    </section>
  );
}
