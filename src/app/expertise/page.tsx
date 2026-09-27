"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";
import EnquiryCTA from "@/components/forms/EnquiryCTA";

/* ==========================================================================
   ICONS
   ========================================================================== */

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

/* ==========================================================================
   EXPERTISE DATA
   ========================================================================== */

const expertiseAreas = [
  {
    number: "01",
    title: "Integrated Steam & Power",
    slug: "integrated-steam-power-systems",
    short:
      "Understanding the interaction between electrical systems, steam networks, generation and industrial process demand.",
    tags: [
      "Steam & Power",
      "Thermodynamics",
      "Power Systems",
      "System Studies",
    ],
    image: assetPath("/images/expertise/integrated-steam-power.jpg"),
  },
  {
    number: "02",
    title: "Dynamic Simulation & Model Validation",
    slug: "dynamic-simulation-model-validation",
    short:
      "Using dynamic models and simulation to understand disturbances, transitions, controls and system behaviour.",
    tags: [
      "Dynamic Simulation",
      "Model Validation",
      "Transient Studies",
      "System Dynamics",
    ],
    image: assetPath("/images/expertise/dynamic-simulation.jpg"),
  },
  {
    number: "03",
    title: "Grid Code & Compliance",
    slug: "grid-code-compliance",
    short:
      "Assessing plant behaviour against grid requirements through simulation, testing and engineering validation.",
    tags: ["Grid Code", "Compliance", "PFR", "Model Validation"],
    image: assetPath("/images/expertise/grid-code.jpg"),
  },
  {
    number: "04",
    title: "Island Operation & Power System Resilience",
    slug: "island-operation-power-system-resilience",
    short:
      "Understanding how industrial power systems behave during islanding, disturbances and transitions between operating modes.",
    tags: [
      "Island Operation",
      "Power System Stability",
      "Resilience",
      "Protection",
    ],
    image: assetPath("/images/expertise/island-operation.jpg"),
  },
  {
    number: "05",
    title: "Controls, Governors & AVR",
    slug: "controls-governors-avr",
    short:
      "Engineering analysis and testing of control systems that determine how generating units and industrial systems respond.",
    tags: ["Controls", "Governor", "AVR", "Tuning"],
    image: assetPath("/images/expertise/controls-governors-avr.jpg"),
  },
  {
    number: "06",
    title: "Protection & Power Quality",
    slug: "protection-power-quality",
    short:
      "Studying protection behaviour, electrical disturbances and power-quality interactions across industrial networks.",
    tags: [
      "Protection",
      "Relay Coordination",
      "Power Quality",
      "Fault Studies",
    ],
    image: assetPath("/images/expertise/protection-power-quality.jpg"),
  },
  {
    number: "07",
    title: "Testing & Practical Validation",
    slug: "testing-practical-validation",
    short:
      "Connecting engineering models and analysis with measurements, controlled tests and real plant behaviour.",
    tags: ["Plant Testing", "Measurements", "Validation", "Field Engineering"],
    image: assetPath("/images/expertise/testing-validation.jpg"),
  },
  {
    number: "08",
    title: "Solar, Wind & BESS",
    slug: "solar-wind-bess",
    short:
      "Grid code compliance, controller testing and dynamic model validation for solar PV, wind power and battery energy storage systems.",
    tags: [
      "Solar PV",
      "Wind Power",
      "BESS",
      "Grid Integration",
      "Inverter Testing",
    ],
    image: assetPath("/images/expertise/solar-wind-bess.jpg"),
  },
];

/* ==========================================================================
   EXPERTISE CARD
   ========================================================================== */

function ExpertiseCard({
  area,
  index,
}: {
  area: (typeof expertiseAreas)[number];
  index: number;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#E3A526]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-9 ${index % 2 === 1 ? "lg:translate-y-10" : ""} `}
    >
      {/* Subtle technical background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,20,72,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(180,20,72,.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom right, black, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to bottom right, black, transparent 70%)",
        }}
      />

      {/* Top accent */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#E3A526] to-[#B41448] transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10 flex flex-col">
        {/* Number + arrow */}
        <div className="absolute top-0 right-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-black/30 transition-all duration-300 group-hover:border-[#B41448]/30 group-hover:bg-[#B41448] group-hover:text-white">
            <ArrowUpRight />
          </span>
        </div>

        {/* Main content */}
        <div>
          <h3 className="max-w-xl text-2xl leading-[1.08] font-medium tracking-[-0.035em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] md:text-3xl">
            {area.title}
          </h3>

          <p className="mt-5 max-w-xl text-[14px] leading-7 text-black/50 md:text-[15px]">
            {area.short}
          </p>
        </div>

        {/* Tags pushed toward bottom */}
        <div className="mt-auto pt-10">
          <div className="flex flex-wrap gap-2">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/[0.08] bg-black/[0.02] px-3 py-1.5 text-[9px] tracking-[0.08em] text-black/45 uppercase transition-colors duration-300 group-hover:border-[#B41448]/15"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/expertise/${area.slug}/`}
            className="mt-7 inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.17em] text-[#B41448] uppercase"
          >
            Explore Expertise
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#E3A526] to-[#B41448] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

/* ==========================================================================
   SYSTEM CONNECTION — DARK SECTION
   ========================================================================== */

function SystemsConnection() {
  const [active, setActive] = useState(0);

  const systems = [
    {
      number: "01",
      title: "Power",
      text: "Electrical generation, networks, stability, disturbances and operating modes.",
    },
    {
      number: "02",
      title: "Process",
      text: "Steam, thermodynamics, utilities and industrial process demand.",
    },
    {
      number: "03",
      title: "Controls",
      text: "Governors, AVR, plant controls and interactions between control loops.",
    },
    {
      number: "04",
      title: "Protection",
      text: "Protection behaviour, relay coordination and system response.",
    },
    {
      number: "05",
      title: "Testing",
      text: "Measurements, controlled testing and practical validation.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0d1110] text-white">
      <div className="pointer-events-none absolute top-1/2 -right-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B41448]/[0.08] blur-[130px]" />

      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] tracking-[0.22em] text-[#E3A526] uppercase">
                Integrated Systems Intelligence
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl leading-[1.02] font-medium tracking-[-0.045em] md:text-5xl">
              Complex systems don&apos;t respect discipline boundaries.
            </h2>

            <p className="mt-7 max-w-lg text-[15px] leading-8 text-white/50">
              A change in process demand can alter steam conditions. Steam
              conditions can influence generation. Generation affects the
              electrical network. Controls and protection determine how the
              system responds.
            </p>

            <p className="mt-5 max-w-lg text-[15px] leading-8 text-white/35">
              Our expertise is therefore connected rather than isolated. The
              engineering question determines which disciplines need to come
              together.
            </p>
          </div>

          <div>
            <div className="relative">
              <div className="absolute top-6 bottom-6 left-[21px] hidden w-px bg-white/[0.08] sm:block" />

              <div
                className="absolute top-6 left-[21px] hidden w-px bg-gradient-to-b from-[#E3A526] to-[#B41448] transition-all duration-500 sm:block"
                style={{
                  height: `${active * 25}%`,
                }}
              />

              {systems.map((system, index) => (
                <button
                  key={system.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group relative flex w-full gap-6 border-b border-white/[0.07] py-6 text-left last:border-b-0"
                >
                  <div
                    className={`relative z-10 mt-1 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border bg-[#0d1110] transition-all duration-300 ${
                      active === index
                        ? "border-[#E3A526]"
                        : "border-white/[0.1]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[9px] ${
                        active === index ? "text-[#E3A526]" : "text-white/30"
                      }`}
                    >
                      {system.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-5">
                      <h3
                        className={`text-lg font-medium transition-colors ${
                          active === index ? "text-white" : "text-white/55"
                        }`}
                      >
                        {system.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-2 max-w-xl text-sm leading-6 transition-colors ${
                        active === index ? "text-white/50" : "text-white/25"
                      }`}
                    >
                      {system.text}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   ENGINEERING APPROACH — LIGHT SECTION
   ========================================================================== */

function EngineeringApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "Define the system, operating challenge, interfaces, evidence and engineering decision.",
    },
    {
      number: "02",
      title: "Model",
      text: "Build, adapt or validate the engineering representation needed for the question.",
    },
    {
      number: "03",
      title: "Simulate",
      text: "Explore normal operation, disturbances, transitions and credible scenarios.",
    },
    {
      number: "04",
      title: "Test",
      text: "Where applicable, use measurements, controlled plant tests or system-level approaches.",
    },
    {
      number: "05",
      title: "Diagnose",
      text: "Identify dominant interactions, limitations, sensitivities and likely root causes.",
    },
    {
      number: "06",
      title: "Optimize",
      text: "Develop technically grounded changes to controls, settings, operation or design.",
    },
    {
      number: "07",
      title: "Validate",
      text: "Confirm conclusions with appropriate simulation, measurement, testing or plant evidence.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F7F4] text-[#202020]">
      <div className="pointer-events-none absolute top-1/3 -left-40 h-[450px] w-[450px] rounded-full bg-[#B41448]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#E3A526]" />

            <span className="text-[10px] tracking-[0.22em] text-[#B41448] uppercase">
              From Model to Plant
            </span>
          </div>

          <h2 className="mt-6 text-4xl leading-[1.02] font-medium tracking-[-0.045em] md:text-5xl">
            Engineering analysis becomes useful when it connects to the plant.
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-black/50">
            Our methodology adapts to the engineering question. Simulation,
            testing and field validation are used where they provide the
            evidence needed to make a decision.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative border-b border-black/[0.08] p-7 transition-colors duration-300 hover:bg-[#B41448]/[0.025] md:border-r lg:border-r lg:border-t`}
              >
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#202020]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {step.text}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#E3A526] to-[#B41448] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   RELATED CONTENT — LIGHT
   ========================================================================== */

function RelatedContent() {
  const links = [
    {
      label: "Projects & Case Studies",
      description:
        "Explore reference experience and deeper engineering stories.",
      href: "/projects/",
    },
    {
      label: "Industries",
      description: "See how our expertise applies across industrial sectors.",
      href: "/industries/",
    },
    {
      label: "Knowledge Center",
      description:
        "Read technical perspectives, articles and engineering insights.",
      href: "/knowledge/",
    },
  ];

  return (
    <section className="border-t border-black/[0.07] bg-[#F7F7F4] text-[#202020]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group rounded-[20px] border border-black/[0.08] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E3A526]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.025em]">
                    {link.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {link.description}
                  </p>
                </div>

                <span className="text-black/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B41448]">
                  <ArrowUpRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function ExpertisePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHeroVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F4] text-[#202020]">
      {/* ==================================================================
          HERO — DARK
      ================================================================== */}

      <section
        ref={heroRef}
        className="relative isolate min-h-[78vh] overflow-hidden bg-[#080c0b] text-white"
      >
        {/* Technical grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Burgundy atmosphere */}

        <div className="pointer-events-none absolute top-0 -right-40 h-[700px] w-[700px] rounded-full bg-[#B41448]/[0.09] blur-[150px]" />

        {/* Gold atmosphere */}

        <div className="pointer-events-none absolute top-[22%] right-[18%] h-[300px] w-[300px] rounded-full bg-[#E3A526]/[0.035] blur-[110px]" />

        {/* Technical visual */}

        <div className="pointer-events-none absolute right-[-8%] bottom-0 hidden h-[75%] w-[48%] lg:block">
          <div className="absolute inset-0 [transform:perspective(900px)_rotateY(-18deg)_rotateX(8deg)] rounded-[50%] border border-white/[0.05]" />

          <div className="absolute inset-[12%] [transform:perspective(900px)_rotateY(-18deg)_rotateX(8deg)] rounded-[50%] border border-[#E3A526]/[0.09]" />

          <div className="absolute inset-[24%] [transform:perspective(900px)_rotateY(-18deg)_rotateX(8deg)] rounded-[50%] border border-[#B41448]/[0.13]" />

          <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E3A526]" />

          <div className="absolute top-1/2 left-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B41448]/[0.08]" />
        </div>

        <div
          className={`relative mx-auto flex min-h-[78vh] max-w-[1400px] items-end px-5 pt-46 pb-20 transition-all duration-1000 md:px-10 md:pb-28 lg:px-16 ${
            heroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="max-w-5xl">
            <h1 className="max-w-5xl text-[clamp(3.2rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.06em]">
              Engineering Expertise
              <br />
              <span className="text-white/35">for Complex Systems.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
              Solvina brings together multidisciplinary engineering, dynamic
              simulation, testing and practical validation to understand how
              complex industrial systems behave and how they can be improved.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#expertise"
                className="inline-flex h-12 items-center gap-3 rounded-full bg-[#E3A526] px-6 text-[10px] font-medium tracking-[0.16em] text-black uppercase transition-transform hover:-translate-y-0.5"
              >
                Explore Expertise
                <ArrowRight />
              </Link>

              <EnquiryCTA
                label="Discuss Your Engineering Challenge"
                type="Engineering Challenge"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-white/[0.18] bg-transparent px-6 text-[10px] font-medium tracking-[0.16em] text-white/70 uppercase transition-colors hover:border-[#E3A526]/50 hover:bg-white hover:text-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          ENGINEERING QUESTION — LIGHT
      ================================================================== */}

      <section className="border-y border-black/[0.07] bg-[#F7F7F4]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] tracking-[0.22em] text-[#B41448] uppercase">
                The engineering question
              </span>
            </div>

            <h2 className="mt-5 max-w-xl text-3xl leading-[1.05] font-medium tracking-[-0.04em] md:text-4xl">
              The difficult problems are usually at the boundaries.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-[15px] leading-8 text-black/55">
              Industrial plants behave through interactions. Electrical
              generation affects process utilities. Process demand changes
              operating conditions. Controls influence disturbances. Protection
              determines how the system responds.
            </p>

            <p className="mt-5 text-[15px] leading-8 text-black/40">
              Solvina&apos;s expertise connects these disciplines when the
              engineering question requires a system-level view. The right
              combination depends on the plant, the operating challenge and the
              decision that needs to be made.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
    EXPERTISE AREAS — LIGHT
================================================================== */}

      <section id="expertise" className="relative overflow-hidden bg-[#F7F7F4]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute top-[30%] -left-40 h-[600px] w-[600px] rounded-full bg-[#B41448]/[0.035] blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 bottom-[10%] h-[500px] w-[500px] rounded-full bg-[#E3A526]/[0.025] blur-[140px]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          {/* Header */}
          <div className="mb-16 max-w-3xl md:mb-20">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] tracking-[0.22em] text-[#B41448] uppercase">
                Areas of expertise
              </span>
            </div>

            <h2 className="mt-6 text-4xl leading-[1.02] font-medium tracking-[-0.045em] md:text-5xl">
              Connected disciplines.
              <br />
              <span className="text-black/35">One engineering question.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-black/45">
              Our expertise brings together the disciplines needed to understand
              complex industrial systems — from generation and process
              interaction through to controls, protection, simulation and
              validation.
            </p>
          </div>

          {/* Expertise grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={area.slug} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          SYSTEM CONNECTION — DARK
      ================================================================== */}

      <SystemsConnection />

      {/* ==================================================================
          ENGINEERING APPROACH — LIGHT
      ================================================================== */}

      <EngineeringApproach />

      {/* ==================================================================
          EVIDENCE — LIGHT
      ================================================================== */}

      <section className="border-y border-black/[0.07] bg-[#F7F7F4]">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-[10px] tracking-[0.22em] text-[#B41448] uppercase">
                  Engineering evidence
                </span>
              </div>

              <h2 className="mt-6 max-w-2xl text-4xl leading-[1.02] font-medium tracking-[-0.045em] md:text-5xl">
                Expertise is demonstrated through engineering work.
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-black/45">
                Explore reference projects and deeper case studies to see where
                these capabilities have been applied across real industrial
                systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects/"
                  className="inline-flex h-12 items-center gap-3 rounded-full bg-[#B41448] px-6 text-[10px] font-medium tracking-[0.16em] text-white uppercase transition-transform hover:-translate-y-0.5"
                >
                  Explore Projects
                  <ArrowRight />
                </Link>

                <Link
                  href="/projects/#case-studies"
                  className="inline-flex h-12 items-center gap-3 rounded-full border border-black/[0.12] px-6 text-[10px] font-medium tracking-[0.16em] text-black/60 uppercase transition-colors hover:border-[#E3A526] hover:text-[#B41448]"
                >
                  View Case Studies
                  <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-[#B41448]/[0.035] blur-[80px]" />

              <div className="relative overflow-hidden rounded-[24px] border border-black/[0.08] bg-white">
                <div className="aspect-[4/3]">
                  <img
                    src={assetPath("/images/expertise/expertise-evidence.jpg")}
                    alt=""
                    className="h-full w-full object-cover object-[center_75%]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/55" />

                  <div className="absolute inset-x-6 bottom-6">
                    <div className="rounded-xl border border-white/20 bg-[#101412]/90 p-5 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] tracking-[0.16em] text-white/45 uppercase">
                          Engineering evidence
                        </span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-lg border border-white/[0.08] p-3">
                          <span className="font-mono text-lg text-white">
                            86
                          </span>

                          <p className="mt-1 text-[8px] tracking-[0.12em] text-white/35 uppercase">
                            References
                          </p>
                        </div>

                        <div className="rounded-lg border border-white/[0.08] p-3">
                          <span className="font-mono text-lg text-white">
                            19
                          </span>

                          <p className="mt-1 text-[8px] tracking-[0.12em] text-white/35 uppercase">
                            Expertise areas
                          </p>
                        </div>

                        <div className="rounded-lg border border-[#B41448]/30 bg-[#B41448]/[0.08] p-3">
                          <span className="font-mono text-lg text-[#E3A526]">
                            03
                          </span>

                          <p className="mt-1 text-[8px] tracking-[0.12em] text-white/35 uppercase">
                            Case studies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          RELATED CONTENT — LIGHT
      ================================================================== */}

      <RelatedContent />

      {/* ==================================================================
          FINAL CTA — BURGUNDY
      ================================================================== */}

      <section className="relative overflow-hidden bg-[#B41448] text-white">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#E3A526]/[0.12] blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[10px] font-medium tracking-[0.22em] text-white/55 uppercase">
                Start with the engineering question
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-medium tracking-[-0.045em] md:text-6xl">
                Have a complex system to understand?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
                Tell us what your system needs to do, what is not behaving as
                expected and what engineering decision you need to make.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <EnquiryCTA
                label="Discuss Your Engineering Challenge"
                type="Engineering Challenge"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#E3A526] px-6 text-[10px] font-medium tracking-[0.16em] text-black uppercase transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-black"
              />

              <Link
                href="/projects/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/25 px-6 text-[10px] font-medium tracking-[0.16em] text-white uppercase transition-colors hover:border-white/50 hover:bg-white/[0.05]"
              >
                See Engineering Evidence
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
