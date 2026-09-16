"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";

/*
 * IMPORTANT:
 * These are evidence-led customer themes/paraphrases rather than
 * publishable named testimonials.
 *
 * The source customer-feedback report marks direct quotations,
 * named customer paraphrases and attribution as permission-controlled.
 *
 * Once publication permission is approved, replace these with the
 * approved quotations and attribution without changing the UI.
 */

const customerVoice = [
  {
    id: "01",
    category: "Technical Depth",
    statement:
      "Customers value specialist technical knowledge across power systems, thermodynamics and complex industrial systems.",
    source: "Recurring theme across available customer evaluations",
    accent: "gold",
  },
  {
    id: "02",
    category: "Integrated Understanding",
    statement:
      "Customers value a comprehensive approach that considers interconnected power, gas, steam and plant-process behaviour rather than isolated systems.",
    source: "Customer feedback theme — integrated systems",
    accent: "magenta",
  },
  {
    id: "03",
    category: "Responsive Collaboration",
    statement:
      "Customer feedback highlights responsiveness, supportive dialogue, willingness to understand detailed plant behaviour and practical collaboration.",
    source: "Recurring theme across available customer evaluations",
    accent: "gold",
  },
  {
    id: "04",
    category: "Solution Focus",
    statement:
      "Customers value thoughtful analysis, practical recommendations and a strong focus on making the engineering solution work.",
    source: "Customer feedback theme — solution focus",
    accent: "magenta",
  },
  {
    id: "05",
    category: "Trust & Partnership",
    statement:
      "Available feedback also reflects trust, recommendation intent and willingness to work with Solvina again.",
    source: "Customer feedback theme — trust and repeat engagement",
    accent: "gold",
  },
];

function getRelativeIndex(index: number, activeIndex: number, length: number) {
  let difference = index - activeIndex;

  if (difference > length / 2) {
    difference -= length;
  }

  if (difference < -length / 2) {
    difference += length;
  }

  return difference;
}

export default function CustomerVoiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % customerVoice.length);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + customerVoice.length) % customerVoice.length,
    );
  };

  const active = customerVoice[activeIndex];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
            }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
                Customer Success & Voice
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.2rem]">
              Technical depth matters.
              <span className="block text-black/40">
                So does how teams work together.
              </span>
            </h2>
          </motion.div>

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
              delay: 0.1,
            }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
              Our customer feedback consistently highlights technical expertise,
              a comprehensive understanding of industrial systems, responsive
              collaboration and practical engineering recommendations.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div className="relative mt-14">
          {/* Desktop side navigation */}

          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous customer feedback"
            className="absolute top-1/2 left-0 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.10] bg-white text-black/50 shadow-sm transition-all duration-300 hover:border-[#B41448]/30 hover:bg-[#B41448] hover:text-white lg:flex"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next customer feedback"
            className="absolute top-1/2 right-0 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.10] bg-white text-black/50 shadow-sm transition-all duration-300 hover:border-[#B41448]/30 hover:bg-[#B41448] hover:text-white lg:flex"
          >
            <ArrowRight size={17} />
          </button>

          {/* ===================================================
              CAROUSEL STAGE
          =================================================== */}

          <div className="relative mx-auto h-[410px] max-w-[1180px] overflow-hidden sm:h-[410px] lg:h-[430px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {customerVoice.map((item, index) => {
                const relativeIndex = getRelativeIndex(
                  index,
                  activeIndex,
                  customerVoice.length,
                );

                /*
                 * Only show the active card and its
                 * immediate neighbours.
                 */
                if (Math.abs(relativeIndex) > 2) {
                  return null;
                }

                const isActive = relativeIndex === 0;

                const isLeft = relativeIndex === -1;

                const isRight = relativeIndex === 1;

                const isGold = item.accent === "gold";

                return (
                  <motion.article
                    key={item.id}
                    initial={false}
                    animate={{
                      x:
                        relativeIndex === 0
                          ? 0
                          : relativeIndex === -1
                            ? "-76%"
                            : relativeIndex === 1
                              ? "76%"
                              : relativeIndex === -2
                                ? "-142%"
                                : "142%",

                      scale: isActive ? 1 : 0.86,

                      opacity: isActive
                        ? 1
                        : Math.abs(relativeIndex) === 1
                          ? 0.42
                          : 0.12,

                      zIndex: isActive ? 20 : 10,

                      filter: isActive ? "blur(0px)" : "blur(0.3px)",
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => {
                      if (isLeft) {
                        goPrevious();
                      }

                      if (isRight) {
                        goNext();
                      }
                    }}
                    className={`absolute w-[84%] max-w-[690px] cursor-pointer sm:w-[72%] lg:w-[620px] ${
                      isActive ? "pointer-events-auto" : "pointer-events-auto"
                    } `}
                  >
                    <div
                      className={`relative min-h-[400px] border bg-white px-7 py-8 shadow-[0_20px_70px_rgba(20,30,40,0.08)] sm:min-h-[400px] sm:px-10 sm:py-10 ${
                        isActive ? "border-black/[0.10]" : "border-black/[0.05]"
                      } `}
                    >
                      {/* Top accent */}

                      <div
                        className={`absolute top-0 left-0 h-[3px] w-20 ${
                          isGold ? "bg-[#E3A526]" : "bg-[#B41448]"
                        } `}
                      />

                      {/* Quote mark */}

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${
                          isGold ? "bg-[#E3A526]/10" : "bg-[#B41448]/10"
                        } `}
                      >
                        <Quote
                          size={19}
                          strokeWidth={1.4}
                          className={
                            isGold ? "text-[#E3A526]" : "text-[#B41448]"
                          }
                        />
                      </div>

                      {/* Category */}

                      <div className="mt-7">
                        <span
                          className={`text-[10px] font-bold tracking-[0.18em] uppercase ${
                            isGold ? "text-[#B41448]" : "text-[#B41448]"
                          } `}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Statement */}

                      <p
                        className={`mt-4 max-w-[570px] text-xl leading-[1.35] font-medium tracking-[-0.02em] text-[#252525] sm:text-2xl ${
                          isActive ? "" : "text-black/70"
                        } `}
                      >
                        “{item.statement}”
                      </p>

                      {/* Source */}

                      <div className="absolute right-7 bottom-7 left-7 flex items-end justify-between border-t border-black/[0.07] pt-4 sm:right-10 sm:bottom-9 sm:left-10">
                        <div>
                          <p className="text-[9px] font-bold tracking-[0.15em] text-black/30 uppercase">
                            Customer feedback
                          </p>

                          <p className="mt-1 max-w-[350px] text-[10px] leading-4 text-black/35">
                            {item.source}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              MOBILE CONTROLS
          =================================================== */}

          <div className="mt-5 flex items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous customer feedback"
              className="flex h-10 w-10 items-center justify-center border border-black/[0.10] bg-white text-black/50"
            >
              <ArrowLeft size={16} />
            </button>

            {/* Dots */}

            <div className="flex items-center gap-2">
              {customerVoice.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show feedback ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 bg-[#B41448]"
                      : "w-1.5 bg-black/15"
                  } `}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next customer feedback"
              className="flex h-10 w-10 items-center justify-center border border-black/[0.10] bg-white text-black/50"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* =====================================================
            DESKTOP PAGINATION
        ===================================================== */}

        <div className="mx-auto mt-4 hidden max-w-[620px] items-center justify-center gap-2 lg:flex">
          {customerVoice.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show feedback ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#B41448]"
                  : "w-1.5 bg-black/15 hover:bg-black/30"
              } `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
