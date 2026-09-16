"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  CircleDot,
  Network,
} from "lucide-react";
import { useState } from "react";

import type { ExpertisePage as ExpertisePageData } from "@/data/expertise";

interface ExpertisePageProps {
  expertise: ExpertisePageData;
}

export default function ExpertisePage({
  expertise,
}: ExpertisePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const hasChallenge = Boolean(expertise.challenge?.trim());
  const hasScope = expertise.scope?.length > 0;
  const hasMethod = Boolean(expertise.methodAndDeliverables?.trim());
  const hasValue = expertise.value?.length > 0;
  const hasFaqs = expertise.faqs?.length > 0;
  const hasRelated = expertise.relatedPages?.length > 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F4] text-[#171A18]">
      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="relative flex min-h-[78vh] items-center border-b border-[#DDE1DC] bg-white pt-32 pb-24">
        {/* subtle technical grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(#171A18 1px, transparent 1px),
              linear-gradient(90deg, #171A18 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* technical circles */}

        <div className="pointer-events-none absolute -right-40 top-24 hidden h-[520px] w-[520px] rounded-full border border-[#B41448]/10 lg:block" />

        <div className="pointer-events-none absolute -right-16 top-56 hidden h-[280px] w-[280px] rounded-full border border-[#E3A526]/30 lg:block" />

        <div className="pointer-events-none absolute right-24 top-72 hidden h-3 w-3 rounded-full bg-[#E3A526] lg:block" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          {/* breadcrumb */}

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-14 flex flex-wrap items-center gap-2 text-sm text-black/45"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#B41448]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/expertise/"
              className="transition-colors hover:text-[#B41448]"
            >
              Expertise
            </Link>

            <span>/</span>

            <span className="text-black/70">
              {expertise.title}
            </span>
          </motion.nav>

          <div className="grid items-end gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
            {/* heading */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B41448]" />

                <span className="text-xs font-medium tracking-[0.22em] text-[#687068] uppercase">
                  {expertise.category}
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3.2rem,7vw,7.2rem)] leading-[0.9] font-medium tracking-[-0.055em]">
                {expertise.hero.heading}
              </h1>
            </motion.div>

            {/* intro */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pb-3"
            >
              <div className="border-l-2 border-[#E3A526] pl-7 lg:pl-10">
                <p className="text-lg leading-relaxed text-[#5F675F] lg:text-xl">
                  {expertise.hero.intro}
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact/"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#B41448] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#94103D] hover:shadow-[0_12px_30px_rgba(180,20,72,0.18)]"
                  >
                    {expertise.ctas.primary}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#scope"
                    className="inline-flex items-center gap-3 rounded-full border border-[#D6DBD5] bg-[#F7F7F4] px-6 py-3.5 text-sm font-medium text-[#343B35] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E3A526] hover:bg-white"
                  >
                    {expertise.ctas.secondary}

                    <ArrowDown size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="mt-24 flex items-center gap-3 text-xs tracking-[0.18em] text-black/35 uppercase"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#D8DDD7]">
              <ArrowDown size={13} />
            </span>

            Explore this expertise
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          ENGINEERING CHALLENGE
      ================================================================ */}

      {hasChallenge && (
        <section className="bg-white py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <SectionLabel label="The Challenge" />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.65,
                }}
              >
                <h2 className="max-w-4xl text-4xl leading-[1] font-medium tracking-[-0.04em] lg:text-6xl">
                  The engineering problem
                  <br />
                  <span className="text-[#B41448]">
                    behind the question.
                  </span>
                </h2>

                <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]">
                  <p className="text-xl leading-relaxed text-[#626A62] lg:text-2xl">
                    {expertise.challenge}
                  </p>

                  <div className="relative hidden aspect-square items-center justify-center rounded-full border border-[#D9DED8] bg-[#FAFAF7] lg:flex">
                    <div className="absolute inset-8 rounded-full border border-dashed border-[#D5DAD4]" />

                    <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#B41448]/20 bg-white shadow-[0_10px_35px_rgba(23,26,24,0.06)]">
                      <Network
                        size={34}
                        strokeWidth={1.15}
                        className="text-[#B41448]"
                      />
                    </div>

                    <span className="absolute right-6 top-12 h-2 w-2 rounded-full bg-[#E3A526]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          SCOPE
      ================================================================ */}

      {hasScope && (
        <section
          id="scope"
          className="bg-[#F7F7F4] py-28 lg:py-36"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            >
              <div>
                <SectionLabel label="Scope" />

                <h2 className="mt-5 text-4xl leading-none font-medium tracking-[-0.04em] lg:text-6xl">
                  What we study
                </h2>
              </div>

              <p className="max-w-md leading-relaxed text-[#6B736B]">
                The scope is shaped around the engineering question,
                system boundary and operating conditions relevant to
                the study.
              </p>
            </motion.div>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {expertise.scope.map((item, index) => (
                <motion.div
                  key={item}
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.045,
                  }}
                  className="group flex min-h-[210px] flex-col justify-between rounded-2xl border border-[#DDE1DC] bg-white p-8 shadow-[0_5px_25px_rgba(23,26,24,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E3A526]/50 hover:shadow-[0_18px_45px_rgba(23,26,24,0.07)] lg:p-10"
                >
                  <p className="text-xl leading-tight tracking-[-0.025em] text-[#252B26] lg:text-2xl">
                    {item}
                  </p>

                  <div className="mt-7 h-1 w-8 rounded-full bg-[#E3A526] transition-all duration-300 group-hover:w-14" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          METHOD
      ================================================================ */}

      {hasMethod && (
        <section className="bg-white py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <SectionLabel label="Approach" />

                <h2 className="mt-5 max-w-xs text-3xl leading-tight font-medium tracking-[-0.035em] lg:text-4xl">
                  From engineering question to evidence.
                </h2>
              </motion.div>

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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.65,
                }}
              >
                <div className="mb-14 hidden items-start md:flex">
                  {[
                    "Define",
                    "Review",
                    "Model",
                    "Analyse",
                    "Diagnose",
                    "Recommend",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex flex-1 items-start last:flex-none"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6DBD5] bg-[#F7F7F4] text-xs font-medium text-[#5C655D] transition-all hover:border-[#E3A526] hover:bg-[#FFF9E9]">
                          <span className="sr-only">
                            Step {index + 1}
                          </span>

                          <CircleDot
                            size={15}
                            strokeWidth={1.4}
                            className="text-[#B41448]"
                          />
                        </div>

                        <span className="text-xs text-[#727A72]">
                          {step}
                        </span>
                      </div>

                      {index < 5 && (
                        <div className="mx-3 mt-5 h-px flex-1 bg-[#D9DED8]" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#DDE1DC] pt-10">
                  <p className="max-w-4xl text-xl leading-relaxed text-[#626A62] lg:text-2xl">
                    {expertise.methodAndDeliverables}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          VALUE
      ================================================================ */}

      {hasValue && (
        <section className="relative overflow-hidden bg-[#25201D] py-28 text-white lg:py-36">
          <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full border border-[#E3A526]/10" />

          <div className="pointer-events-none absolute -right-16 top-16 h-[300px] w-[300px] rounded-full border border-[#B41448]/20" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.4fr_0.6fr] lg:gap-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <SectionLabel
                  label="Engineering Value"
                  dark
                />

                <h2 className="mt-6 max-w-lg text-4xl leading-none font-medium tracking-[-0.045em] lg:text-6xl">
                  What this work
                  <br />
                  <span className="text-[#E3A526]">
                    gives you.
                  </span>
                </h2>
              </motion.div>

              <div>
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {expertise.value.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.06,
                      }}
                      className="flex items-start gap-7 py-7"
                    >
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E3A526]" />

                      <div className="flex-1">
                        <p className="text-xl leading-snug lg:text-2xl">
                          {item}
                        </p>
                      </div>

                      <Check
                        size={19}
                        strokeWidth={1.5}
                        className="mt-1 text-white/35"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          FAQ
      ================================================================ */}

      {hasFaqs && (
        <section className="bg-[#F7F7F4] py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <SectionLabel label="FAQ" />

                <h2 className="mt-5 text-4xl leading-none font-medium tracking-[-0.04em] lg:text-5xl">
                  Questions we
                  <br />
                  often hear.
                </h2>
              </motion.div>

              <div className="border-t border-[#D9DED8]">
                {expertise.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <motion.div
                      key={faq.question}
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                      className="border-b border-[#D9DED8]"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaq(isOpen ? null : index)
                        }
                        className="flex w-full items-start justify-between gap-8 py-7 text-left lg:py-8"
                        aria-expanded={isOpen}
                      >
                        <div className="flex-1">
                          <span className="text-lg font-medium tracking-[-0.015em] text-[#242A25] lg:text-xl">
                            {faq.question}
                          </span>
                        </div>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#B41448] bg-[#B41448] text-white"
                              : "border-[#D3D8D2] bg-white text-[#697169]"
                          }`}
                        >
                          <ChevronDown
                            size={17}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-8 pr-8 leading-7 text-[#687068]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          RELATED EXPERTISE
      ================================================================ */}

      {hasRelated && (
        <section className="bg-white py-28 lg:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
                duration: 0.6,
              }}
              className="mb-14"
            >
              <SectionLabel label="Related Expertise" />

              <h2 className="mt-5 max-w-3xl text-4xl leading-none font-medium tracking-[-0.04em] lg:text-6xl">
                Explore adjacent
                <br />
                <span className="text-[#B41448]">
                  engineering areas.
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {expertise.relatedPages.map(
                (relatedTitle, index) => {
                  const relatedSlug = relatedTitle
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");

                  return (
                    <motion.div
                      key={relatedTitle}
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
                        margin: "-60px",
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                    >
                      <Link
                        href={`/expertise/${relatedSlug}/`}
                        className="group flex min-h-[220px] flex-col justify-between rounded-2xl border border-[#DDE1DC] bg-[#FAFAF7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E3A526]/50 hover:bg-white hover:shadow-[0_18px_45px_rgba(23,26,24,0.06)] lg:p-9"
                      >
                        <div className="flex items-center justify-end">
                          <span className="text-xs tracking-[0.15em] text-[#8A918A] uppercase">
                            Related expertise
                          </span>
                        </div>

                        <div className="flex items-end justify-between gap-5">
                          <h3 className="text-2xl leading-tight tracking-[-0.03em] text-[#242A25] lg:text-3xl">
                            {relatedTitle}
                          </h3>

                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5DAD4] text-[#B41448] transition-all duration-300 group-hover:border-[#E3A526] group-hover:bg-[#E3A526] group-hover:text-[#171A18]">
                            <ArrowRight
                              size={17}
                              className="transition-transform group-hover:translate-x-0.5"
                            />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================================================================
          CTA
      ================================================================ */}

      <section className="relative overflow-hidden bg-[#E3A526] py-28 lg:py-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border-[80px] border-black/[0.035]" />

        <div className="pointer-events-none absolute -bottom-48 -left-20 h-[480px] w-[480px] rounded-full border border-black/[0.08]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.7,
            }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#171A18]" />

              <span className="text-xs tracking-[0.2em] text-black/50 uppercase">
                Start with the engineering question
              </span>
            </div>

            <h2 className="mt-7 max-w-5xl text-5xl leading-[0.92] font-medium tracking-[-0.05em] text-[#171A18] lg:text-7xl">
              Have a system behaviour
              <br />
              you need to understand?
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#171A18] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B41448]"
              >
                {expertise.ctas.primary}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/expertise/"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 text-sm font-medium text-[#171A18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.05]"
              >
                View all expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   SECTION LABEL
================================================================ */

function SectionLabel({
  label,
  dark = false,
}: {
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-10 ${
          dark ? "bg-[#E3A526]" : "bg-[#B41448]"
        }`}
      />

      <span
        className={`text-xs font-medium tracking-[0.2em] uppercase ${
          dark ? "text-white/45" : "text-black/40"
        }`}
      >
        {label}
      </span>
    </div>
  );
}