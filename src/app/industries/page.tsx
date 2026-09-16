"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* ==========================================================================
   ICONS
   ========================================================================== */

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndustryIcon({ type }: { type: string }) {
  if (type === "power") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 5v38M12 14h24M15 25h18M8 36h32M12 14 5 23M36 14l7 9M15 25l-8 11M33 25l8 11"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "steel") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M7 40V22l14-7v25M21 40V10l11 5v25M32 40V20l9-4v24M4 40h40M12 28h3M12 34h3M26 22h3M26 28h3M26 34h3M36 28h2M36 34h2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "refining") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M8 40V23h9v17M17 40V12h8v28M25 40V18h8v22M33 40V7h7v33M5 40h38M12 29h2M20 20h2M28 26h2M36 17h2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "chemical") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M19 6v13l-9 15a6 6 0 0 0 5 9h18a6 6 0 0 0 5-9l-9-15V6M16 6h16M17 29h14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="34" r="2" fill="currentColor" />
        <circle cx="28" cy="32" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "paper") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M8 40V17h7v23M15 40V10h7v30M22 40V20h7v20M29 40V13h7v27M36 40V23h5v17M5 40h38"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
      <path
        d="M7 39h34M10 39V20h12v19M22 39V10h16v29M15 27h4M15 32h4M27 17h6M27 23h6M27 29h6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ==========================================================================
   INDUSTRY DATA
   ========================================================================== */

const industries = [
  {
    number: "01",
    name: "Power Generation & Utilities",
    shortName: "Power & Utilities",
    slug: "power-generation-utilities",
    type: "power",
    image: "/images/power-generation-utilities.png",
    description:
      "Grid response, stability, compliance, generator controls and changing operating conditions.",
    detail:
      "Engineering questions often span generator behaviour, electrical networks, controls, protection and the changing conditions imposed by the grid.",
    tags: [
      "Grid response",
      "Generator controls",
      "Grid Code",
      "Stability",
    ],
  },
  {
    number: "02",
    name: "Steel, Metals & Mining",
    shortName: "Steel & Metals",
    slug: "steel-metals-mining",
    type: "steel",
    image: "/images/steel-metals-mining.jpeg",
    description:
      "Captive generation, large dynamic loads and tightly interconnected process utilities.",
    detail:
      "Large industrial loads and captive power systems create strong interactions between production processes, electrical networks, steam systems and controls.",
    tags: [
      "Captive generation",
      "Dynamic loads",
      "Process utilities",
      "Island operation",
    ],
  },
  {
    number: "03",
    name: "Refining & Petrochemicals",
    shortName: "Refining & Petrochemicals",
    slug: "refining-petrochemicals",
    type: "refining",
    image: "/images/refining-petrochemicals.jpeg",
    description:
      "Tightly coupled steam, power, process and electrical systems.",
    detail:
      "Refining and petrochemical facilities depend on coordinated utility systems where disturbances can propagate between process, steam and electrical networks.",
    tags: [
      "Steam & power",
      "Process systems",
      "Electrical networks",
      "Disturbance analysis",
    ],
  },
  {
    number: "04",
    name: "Chemicals & Fertilizers",
    shortName: "Chemicals & Fertilizers",
    slug: "chemicals-fertilizers",
    type: "chemical",
    image: "/images/chemicals-fertilizers.png",
    description:
      "Utility and process interactions where continuity directly affects production.",
    detail:
      "Engineering analysis can focus on the interactions between process demand, steam generation, electrical supply and control response that influence production continuity.",
    tags: [
      "Process utilities",
      "Steam systems",
      "Power systems",
      "Continuity",
    ],
  },
  {
    number: "05",
    name: "Pulp & Paper",
    shortName: "Pulp & Paper",
    slug: "pulp-paper",
    type: "paper",
    image: "/images/pulp-paper.png",
    description:
      "Steam/power integration, captive generation and island-operation relevance.",
    detail:
      "Pulp and paper facilities can involve highly integrated steam and electrical systems where generation, process demand and islanding behaviour need to be considered together.",
    tags: [
      "Steam & power",
      "Captive generation",
      "Island operation",
      "Controls",
    ],
  },
  {
    number: "06",
    name: "EPC & Project Organisations",
    shortName: "EPC & Projects",
    slug: "epc-project-organizations",
    type: "epc",
    image: "/images/epc-project-organizations.png",
    description:
      "Specialist engineering support at high-risk technical interfaces.",
    detail:
      "EPC and project organisations can use specialist engineering analysis to resolve complex interfaces between equipment, systems, controls, grid requirements and operating philosophy.",
    tags: [
      "Technical interfaces",
      "System studies",
      "Commissioning",
      "Validation",
    ],
  },
];

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function IndustriesPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 80);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111312]">

      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="relative min-h-[78vh] overflow-hidden bg-[#F8F7F4]">

        {/* grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,19,18,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,18,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* image */}

        <div className="absolute bottom-0 right-0 top-0 hidden w-[100%] lg:block">

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0d]/95 via-[#0a0d0d]/65 to-[#0a0d0d]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101514] via-transparent to-transparent" />

          <img
            src="./images/industries/industries-hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#111312]/[0.08]" />
        </div>

        <div
          className={`relative mx-auto flex min-h-[100svh] max-w-[1400px] items-end px-5 pb-20 transition-all duration-1000 md:px-10 md:pb-28 lg:px-16 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="max-w-5xl">

            <h1 className="max-w-5xl text-[clamp(3.3rem,7vw,7.8rem)] text-[#fff] font-medium leading-[0.9] tracking-[-0.065em]">
              Engineering Intelligence
              <br />
              <span className="text-white/55">
                for Complex Industries
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Different industries have different production
              priorities, but the underlying engineering challenge is
              often the same: power, steam, process, controls and
              protection must behave together under real operating
              conditions.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#industries"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-[#B41448] px-6 text-[10px] text-[#fff] font-medium uppercase tracking-[0.16em] text-[#111312] transition-all hover:-translate-y-0.5 hover:bg-[#d5981d]"
              >
                Explore Industries
                <ArrowRight />
              </a>

              <Link
                href="/contact/"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-[#E3A526]/[0.15] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[#E3A526] transition-colors hover:bg-[#E3A526] hover:text-[#fff]"
              >
                Discuss Your Plant Challenge
                <ArrowUpRight />
              </Link>

            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-5 hidden md:block lg:left-16">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-black/25">
            Power / Process / Controls / Protection
          </span>
        </div>
      </section>

      {/* ================================================================
          INTRODUCTION
      ================================================================ */}

      <section className="border-y border-black/[0.07] bg-white">

        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">

          <div>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
                Industry perspective
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
              Different plants.
              <br />
              <span className="text-black/35">
                Similar system questions.
              </span>
            </h2>
          </div>

          <div className="max-w-3xl">

            <p className="text-[16px] leading-8 text-black/60">
              Industrial facilities operate under very different
              production conditions, but many engineering questions
              cross the same boundaries.
            </p>

            <p className="mt-6 text-[16px] leading-8 text-black/45">
              Steam generation affects process operation. Electrical
              disturbances affect production utilities. Controls and
              protection determine how systems respond. Solvina applies
              multidisciplinary engineering to understand these
              interactions in the context of the customer's actual
              operating challenge.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Power",
                "Steam",
                "Process",
                "Controls",
                "Protection",
                "Operations",
              ].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full border px-4 py-2 text-[9px] uppercase tracking-[0.13em] ${
                    index % 2 === 0
                      ? "border-[#E3A526]/40 text-black/50"
                      : "border-[#B41448]/30 text-black/50"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          INDUSTRIES
      ================================================================ */}

      <section
        id="industries"
        className="bg-[#F8F7F4]"
      >

        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">

          <div className="mb-16 max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
                Industries we serve
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
              Engineering support where
              <br />
              <span className="text-black/35">
                system interactions matter.
              </span>
            </h2>
          </div>

          {/* industry list */}

          <div className="space-y-5">

            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}/`}
                className="group relative block overflow-hidden rounded-[26px] border border-black/[0.09] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#E3A526]/40 hover:shadow-[0_20px_60px_rgba(17,19,18,0.07)]"
              >

                <div className="grid lg:grid-cols-[0.38fr_0.62fr]">

                  {/* image */}

                  <div className="relative min-h-[260px] overflow-hidden bg-[#111312] lg:min-h-[330px]">

                    <img
                      src={industry.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#111312]/40 via-transparent to-[#111312]/10" />
                  </div>

                  {/* content */}

                  <div className="relative flex flex-col justify-between p-7 md:p-9 lg:p-10">

                    <div>

                      <div className="flex items-start justify-between gap-6">

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.18em] text-[#B41448]">
                            Industry
                          </span>

                          <h3 className="mt-3 max-w-xl text-2xl font-medium tracking-[-0.035em] md:text-3xl">
                            {industry.name}
                          </h3>
                        </div>

                        <span className="mt-1 shrink-0 text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B41448]">
                          <ArrowUpRight />
                        </span>
                      </div>

                      <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55">
                        {industry.description}
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-black/35">
                        {industry.detail}
                      </p>

                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">

                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/[0.08] bg-[#F8F7F4] px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] text-black/40"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                    {/* hover line */}

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E3A526] to-[#B41448] transition-all duration-500 group-hover:w-full" />
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          INDUSTRY INTERACTIONS — DARK
      ================================================================ */}

      <section className="bg-[#111312] text-white">

        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">

          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-[10px] uppercase tracking-[0.22em] text-[#E3A526]">
                  Across industries
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
                The industry changes.
                <br />
                <span className="text-white/35">
                  The engineering principle remains.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-[15px] leading-8 text-white/40">
                Solvina's work is shaped around the specific plant,
                operating challenge and evidence available. The
                objective is not to apply a standard study template,
                but to understand the interactions that matter to the
                decision.
              </p>

              <Link
                href="/expertise/"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.17em] text-[#E3A526] transition-colors hover:text-white"
              >
                Explore Our Expertise
                <ArrowRight />
              </Link>
            </div>

            {/* system relationship visual */}

            <div className="relative aspect-[1.2/1] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#191C1A]">

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* central node */}

              <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#E3A526]/40 bg-[#111312] shadow-[0_0_50px_rgba(227,165,38,.08)] md:h-36 md:w-36">

                <div className="text-center">
                  <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-[#E3A526]">
                    Integrated
                  </span>

                  <span className="mt-2 block text-sm font-medium">
                    System
                  </span>

                  <span className="block text-[9px] text-white/30">
                    intelligence
                  </span>
                </div>
              </div>

              {/* horizontal line */}

              <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#E3A526]/40 to-transparent" />

              {/* vertical line */}

              <div className="absolute bottom-[12%] left-1/2 top-[12%] w-px bg-gradient-to-b from-transparent via-[#B41448]/40 to-transparent" />

              {/* nodes */}

              {[
                {
                  label: "POWER",
                  pos: "left-[7%] top-[13%]",
                },
                {
                  label: "PROCESS",
                  pos: "right-[7%] top-[13%]",
                },
                {
                  label: "CONTROLS",
                  pos: "left-[7%] bottom-[13%]",
                },
                {
                  label: "PROTECTION",
                  pos: "right-[7%] bottom-[13%]",
                },
              ].map((node) => (
                <div
                  key={node.label}
                  className={`absolute ${node.pos} flex h-16 w-16 items-center justify-center rounded-full border border-white/[0.12] bg-[#111312] md:h-20 md:w-20`}
                >
                  <span className="text-[7px] uppercase tracking-[0.15em] text-white/45 md:text-[8px]">
                    {node.label}
                  </span>
                </div>
              ))}

              <div className="absolute bottom-5 left-5">
                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/20">
                  Power / Process / Controls / Protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CONDITIONAL SECTORS
      ================================================================ */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
                  Conditional sectors
                </span>
              </div>

              <h2 className="mt-6 max-w-lg text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
                Expand only where
                <br />
                <span className="text-black/35">
                  evidence supports it.
                </span>
              </h2>

            </div>

            <div className="max-w-3xl">

              <p className="text-[15px] leading-8 text-black/45">
                Additional industry pages should be introduced when
                sufficient validated project experience, technical
                content and appropriate references are available.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                <div className="rounded-[20px] border border-black/[0.08] bg-[#F8F7F4] p-6">
                  <span className="font-mono text-[9px] text-[#B41448]">
                    07
                  </span>

                  <h3 className="mt-5 text-lg font-medium">
                    Cement & Manufacturing
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/40">
                    Potential future sector page, subject to
                    sufficient validated content and references.
                  </p>

                  <span className="mt-5 inline-block rounded-full border border-black/[0.08] px-3 py-1 text-[8px] uppercase tracking-[0.14em] text-black/30">
                    Planned / Conditional
                  </span>
                </div>

                <div className="rounded-[20px] border border-black/[0.08] bg-[#F8F7F4] p-6">
                  <span className="font-mono text-[9px] text-[#B41448]">
                    08
                  </span>

                  <h3 className="mt-5 text-lg font-medium">
                    Renewable & Evolving Energy
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/40">
                    Potential future sector page where the
                    engineering reference base supports publication.
                  </p>

                  <span className="mt-5 inline-block rounded-full border border-black/[0.08] px-3 py-1 text-[8px] uppercase tracking-[0.14em] text-black/30">
                    Planned / Conditional
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PROJECT CONNECTION
      ================================================================ */}

      <section className="border-y border-black/[0.07] bg-[#F8F7F4]">

        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
                From industry to evidence
              </span>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
                See how engineering challenges
                <br />
                <span className="text-black/35">
                  have been addressed in real systems.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-black/45">
                Explore the project library to see reference
                experience across industries, engineering disciplines
                and operating challenges.
              </p>

            </div>

            <Link
              href="/projects/"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-black/[0.15] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-black/60 transition-all hover:-translate-y-0.5 hover:border-[#E3A526] hover:text-[#B41448]"
            >
              Explore Projects
              <ArrowUpRight />
            </Link>

          </div>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
      ================================================================ */}

      <section className="relative overflow-hidden bg-[#B41448]">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#E3A526]/[0.13] blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
                Your industry / Your challenge
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.045em] text-white md:text-6xl">
                What is your plant trying to understand?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                Tell us about the system, operating challenge or
                engineering decision you are working through.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#E3A526] px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-[#111312] transition-transform hover:-translate-y-0.5"
              >
                Discuss Your Plant Challenge
                <ArrowUpRight />
              </Link>

              <Link
                href="/expertise/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/30 px-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60 hover:bg-white/[0.05]"
              >
                Explore Expertise
                <ArrowRight />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}