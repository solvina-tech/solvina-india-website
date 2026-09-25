"use client";

import Link from "next/link";
import { useState } from "react";
import { assetPath } from "@/lib/assets";
import EnquiryCTA from "@/components/forms/EnquiryCTA";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type Value = {
  number: string;
  title: string;
  text: string;
};

type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bio?: string[];
  expertise?: string[];
};

/* -------------------------------------------------------------------------- */
/*                              IMAGE COMPONENT                               */
/* -------------------------------------------------------------------------- */

function ImagePanel({
  src,
  alt,
  className = "",
  overlay = false,
}: ImagePanelProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#101514] ${className}`}
      >
        <div className="absolute inset-0 opacity-30"></div>

        <div className="relative text-center">
          <span className="mb-3 block text-[10px] font-medium tracking-[0.28em] text-[#E3A526] uppercase">
            Solvina Engineer
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[1rem] ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SMALL COMPONENTS                              */
/* -------------------------------------------------------------------------- */

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-5">
      <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span
        className={`absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 ${
          open ? "rotate-90 opacity-0" : ""
        }`}
      />
    </span>
  );
}

function LeadershipCard({ member }: { member: LeadershipMember }) {
  return (
    <div className="group flex flex-col gap-8 overflow-hidden rounded-2xl border border-[#c5cbc3] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,22,20,0.08)] sm:flex-row">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl sm:w-[280px] sm:flex-shrink-0">
        <ImagePanel
          src={assetPath(member.image)}
          alt={`${member.name}, ${member.role}`}
          className="h-full"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <span className="text-xs font-semibold tracking-[0.16em] text-[#707970] uppercase">
          {member.role}
        </span>

        <h3 className="mt-4 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
          {member.name}
        </h3>

        {member.bio && member.bio.length > 0 && (
          <div className="mt-6 max-w-2xl space-y-4">
            {member.bio.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-[#596159]">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-8">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#111614] transition group-hover/link:text-[#b41448]"
          >
            LinkedIn
            <ArrowUpRight />
          </a>

          {member.expertise && member.expertise.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#c5cbc3] bg-[#f4f5f2] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#697169] uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SimpleProfileCard({ member }: { member: LeadershipMember }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[#c5cbc3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,22,20,0.08)]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <ImagePanel
          src={assetPath(member.image)}
          alt={`${member.name}, ${member.role}`}
          className="h-full"
        />

        {/* Hover overlay */}
        {(member.bio || member.expertise) && (
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/50 to-black/0 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              {member.bio && member.bio.length > 0 && (
                <p className="line-clamp-5 text-sm leading-6 text-white/85">
                  {member.bio[0]}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-medium tracking-[-0.02em]">
          {member.name}
        </h3>

        {member.role && (
          <span className="mt-2 text-xs font-semibold tracking-[0.16em] text-[#707970] uppercase">
            {member.role}
          </span>
        )}

        <div className="mt-4 border-t border-[#e8ebe7] pt-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#111614] transition group-hover/link:text-[#b41448]"
          >
            LinkedIn
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                PAGE DATA                                   */
/* -------------------------------------------------------------------------- */

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    text: "Define the system boundary, operating challenge, interfaces, available evidence and the decision that the engineering work needs to support.",
  },
  {
    number: "02",
    title: "Model",
    text: "Build, adapt or validate the engineering representation required to investigate the question with the right level of technical detail.",
  },
  {
    number: "03",
    title: "Simulate",
    text: "Explore normal operation, disturbances, transitions and credible scenarios to understand how the system behaves before changes are implemented.",
  },
  {
    number: "04",
    title: "Test",
    text: "Where applicable, use measurements, controlled plant tests or hardware- and system-in-the-loop approaches to connect analysis with real behaviour.",
  },
  {
    number: "05",
    title: "Diagnose",
    text: "Identify dominant interactions, limitations, sensitivities and likely root causes instead of stopping at the first visible symptom.",
  },
  {
    number: "06",
    title: "Optimize",
    text: "Develop technically grounded changes to controls, settings, operating philosophy, configuration or design.",
  },
  {
    number: "07",
    title: "Validate",
    text: "Confirm conclusions with appropriate simulation, measurement, testing or plant evidence before decisions are taken forward.",
  },
];

const values: Value[] = [
  {
    number: "01",
    title: "Technical excellence",
    text: "Engineering decisions should be grounded in sound technical understanding, not assumptions or shortcuts.",
  },
  {
    number: "02",
    title: "Integrity",
    text: "Clear conclusions require honest treatment of evidence, limitations and uncertainty.",
  },
  {
    number: "03",
    title: "Collaboration",
    text: "Complex systems demand different disciplines and perspectives working together.",
  },
  {
    number: "04",
    title: "Evidence discipline",
    text: "Claims, results and published customer evidence should be traceable, reviewed and appropriately controlled.",
  },
  {
    number: "05",
    title: "Responsible engineering",
    text: "Engineering recommendations should consider operational reality, safety, reliability and long-term consequences.",
  },
  {
    number: "06",
    title: "Continuous learning",
    text: "Every project can improve the models, methods and engineering understanding applied to the next challenge.",
  },
];

const faqs = [
  {
    question:
      "What makes Solvina different from a conventional engineering consultancy?",
    answer:
      "Solvina focuses on engineering questions where multiple systems interact. Rather than analysing each discipline in isolation, the approach connects power, process, control, protection and operational behaviour where the problem requires it.",
  },
  {
    question: "How does Integrated Systems Intelligence work?",
    answer:
      "It starts by understanding the complete engineering question and the operating decision behind it. Relevant disciplines are then connected through appropriate models, simulations, measurements and tests so that system interactions become understandable and actionable.",
  },
  {
    question: "What does From Model to Plant mean?",
    answer:
      "It describes the controlled path from understanding a real engineering problem through modelling and simulation to testing, diagnosis, optimization and validation. Not every assignment requires every step, but the methodology keeps analysis connected to real plant behaviour.",
  },
  {
    question: "What engineering teams does Solvina work with?",
    answer:
      "Depending on the assignment, Solvina can work alongside power-system engineers, process and thermodynamics teams, control and automation specialists, protection engineers, operations teams, project teams and plant management.",
  },
];

const boardOfDirectors: LeadershipMember[] = [
  {
    name: "Mohammad Shahzad Alam",
    role: "Managing Director",
    image: "/images/about/Shahzad Alam.png",
    linkedin: "https://in.linkedin.com/in/shahzad-alam-551598a",
    bio: [
      "Shahzad Alam leads Solvina India as Managing Director, supporting the company's engineering delivery and engagement with customers in India.",
      "His role brings together customer requirements, technical capabilities and practical project delivery around complex engineering challenges.",
      "Solvina India combines multidisciplinary engineering with a systems-focused approach, helping customers move from difficult technical questions toward clear and actionable engineering decisions.",
    ],
    expertise: ["Power", "Process", "Controls", "Operations"],
  },
  {
    name: "Niclas Krantz",
    role: "Board Member",
    image: "/images/about/niclas-krantz.jpg",
    linkedin: "https://www.linkedin.com/in/niclas-krantz-2a00089/",
    bio: [
      "Niclas Krantz brings extensive strategic leadership experience to the Solvina board, with a focus on business development and operational excellence.",
      "His expertise spans engineering services, international business expansion, and organizational growth in the industrial sector.",
    ],
  },
  {
    name: "Peter Dahlström",
    role: "Board Member",
    image: "/images/about/peter-dahlstrom.jpg",
    linkedin: "https://www.linkedin.com/in/peterdahlstrom/",
    bio: [
      "Peter Dahlström contributes deep technical knowledge and industry insight to the board, with particular expertise in power systems and engineering consulting.",
      "His background includes leadership roles in engineering organizations and a strong track record of delivering complex technical projects.",
    ],
  },
  {
    name: "Pontus Ryd",
    role: "Board Member",
    image: "/images/about/pontus-ryd.jpg",
    linkedin: "https://www.linkedin.com/in/pontus-ryd-a9a86579/",
    bio: [
      "Pontus Ryd brings valuable expertise in corporate governance and strategic planning to the Solvina board.",
      "His experience encompasses financial management, business strategy, and organizational development in engineering-focused companies.",
    ],
  },
];

const leadershipManagement: LeadershipMember[] = [
  {
    name: "Mohammad Shahzad Alam",
    role: "Managing Director",
    image: "/images/about/Shahzad Alam.png",
    linkedin: "https://in.linkedin.com/in/shahzad-alam-551598a",
    bio: [
      "Shahzad Alam leads Solvina India as Managing Director, supporting the company's engineering delivery and engagement with customers in India.",
      "His role brings together customer requirements, technical capabilities and practical project delivery around complex engineering challenges.",
      "Solvina India combines multidisciplinary engineering with a systems-focused approach, helping customers move from difficult technical questions toward clear and actionable engineering decisions.",
    ],
    expertise: ["Power", "Process", "Controls", "Operations"],
  },
  {
    name: "Deepesh Yadav",
    role: "Leadership Team",
    image: "/images/about/deepesh-yadav.jpg",
    linkedin: "https://www.linkedin.com/in/deepesh-yadav-730b7454/",
    bio: [
      "Deepesh Yadav is a key member of the leadership team, bringing extensive experience in engineering project management and technical delivery.",
      "His expertise spans across power systems, process engineering, and control systems, with a focus on delivering complex engineering solutions.",
    ],
  },
  {
    name: "Saurabh Tripathi",
    role: "Leadership Team",
    image: "/images/about/saurabh tripathi.png",
    linkedin: "https://www.linkedin.com/in/saurabh-tripathi225/",
    bio: [
      "Saurabh Tripathi contributes strong technical leadership to the team, with particular expertise in control systems and automation engineering.",
      "His background includes working on large-scale industrial projects and implementing advanced control strategies.",
    ],
  },
  {
    name: "Ashish Mishra",
    role: "Leadership Team",
    image: "/images/about/Ashish Mishra.png",
    linkedin: "https://www.linkedin.com/in/ashish-mishra-7a70a42b/",
    bio: [
      "Ashish Mishra brings valuable expertise in process engineering and thermodynamics to the leadership team.",
      "His experience includes working on complex process optimization projects and delivering engineering solutions across various industries.",
    ],
  },
  {
    name: "Vineet Saxena",
    role: "Leadership Team",
    image: "/images/about/vineet-saxena.png",
    linkedin: "https://www.linkedin.com",
    bio: [
      "Vineet Saxena contributes operational expertise and project management experience to the leadership team.",
      "His background includes leadership roles in engineering organizations and a focus on delivering practical, results-driven solutions.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="overflow-hidden bg-[#f4f5f2] text-[#111614]">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative min-h-[92vh] bg-[#101514] text-white">
        <div className="absolute inset-0">
          <ImagePanel
            src={assetPath("/images/about/about-hero.jpg")}
            alt="Industrial energy and power engineering environment"
            className="h-full rounded-none"
            overlay
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d0d]/95 via-[#0a0d0d]/65 to-[#0a0d0d]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101514] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] items-end px-6 pt-32 pb-16 sm:px-10 lg:px-16 lg:pb-24">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#E3A526]" />
              <span className="text-xs font-semibold tracking-[0.28em] text-[#E3A526] uppercase">
                About Solvina
              </span>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.3rem,7vw,7.8rem)] leading-[0.9] font-medium tracking-[-0.065em]">
              Engineering
              <br />
              <span className="text-white/55">Intelligence</span>
              <br />
              for Complex
              <br />
              Industrial Systems
            </h1>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                Solvina brings together multidisciplinary engineering, dynamic
                simulation, testing and practical validation to help customers
                understand and improve complex industrial energy and power
                systems.
              </p>

              <EnquiryCTA
                label="Our Engineering Approach"
                type="Engineering Approach"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#b41448] px-6 py-4 text-sm font-semibold text-[#fffff] transition hover:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-7 hidden text-right lg:right-16 lg:block">
          <span className="block text-[10px] tracking-[0.3em] text-white/35 uppercase">
            India
          </span>
          <span className="mt-1 block text-xs text-white/55">
            Engineering for complex systems
          </span>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTRO / WHO WE ARE                                                 */}
      {/* ================================================================== */}

      <section
        id="who-we-are"
        className="bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
                Who we are
              </span>

              <div className="mt-8 h-px w-16 bg-[#111614]" />

              <p className="mt-8 max-w-sm text-sm leading-6 text-[#687068]">
                Specialist engineering for questions that do not fit neatly
                inside a single discipline.
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5.2rem)] leading-[0.96] font-medium tracking-[-0.055em]">
                We connect the systems behind the engineering question.
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#5f675f] sm:text-lg">
                <p>
                  Solvina India is a specialist engineering consultancy working
                  across power systems, thermodynamics and process systems,
                  controls, protection and operations.
                </p>

                <p>
                  We connect disciplines that are often analysed separately when
                  the engineering question crosses system boundaries. Our role
                  is to make complex interactions understandable, testable and
                  actionable.
                </p>

                <p>
                  Whether the question concerns reliability, disturbance
                  response, Grid Code compliance, island operation, control
                  behaviour, utility performance or a technically difficult
                  project decision, the focus remains the same: understand the
                  system well enough to make a better engineering decision.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 border-t border-[#d6d9d4] pt-8 sm:grid-cols-5">
                {[
                  "Power systems",
                  "Process",
                  "Controls",
                  "Protection",
                  "Operations",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-[#d6d9d4] py-4 text-sm font-medium sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THE ENGINEERING CHALLENGE                                         */}
      {/* ================================================================== */}

      <section
        id="engineering-challenge"
        className="bg-[#111614] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* ============================================================ */}
            {/* LEFT — INDUSTRIAL IMAGE                                     */}
            {/* ============================================================ */}

            <div className="relative min-h-[520px] overflow-hidden lg:min-h-[650px]">
              <img
                src={assetPath("/images/about/engineering-challenge.png")}
                alt="Industrial power and process engineering systems"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111614]/70 via-transparent to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111614]/20" />

              {/* Technical corner accents */}
              <div className="absolute top-6 left-6 h-16 w-16 border-t border-l border-[#E3A526]/50" />

              <div className="absolute right-6 bottom-6 h-16 w-16 border-r border-b border-[#E3A526]/50" />

              {/* Image label */}
              <div className="absolute bottom-7 left-7">
                <span className="text-[10px] font-semibold tracking-[0.25em] text-white/60 uppercase">
                  Connected Industrial Systems
                </span>
              </div>
            </div>

            {/* ============================================================ */}
            {/* RIGHT — CONTENT                                               */}
            {/* ============================================================ */}

            <div className="flex flex-col justify-center">
              {/* Section label */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-xs font-semibold tracking-[0.25em] text-[#E3A526] uppercase">
                  The Engineering Challenge
                </span>
              </div>

              {/* Main heading */}
              <h2 className="max-w-2xl text-[clamp(2.7rem,4.5vw,5rem)] leading-[0.94] font-medium tracking-[-0.055em]">
                The difficult questions are rarely confined to{" "}
                <span className="text-white/35">one discipline.</span>
              </h2>

              {/* Description */}
              <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-white/55 sm:text-lg">
                <p>
                  Industrial plants rarely behave as isolated equipment.
                  Generation affects steam and electrical balance. Process
                  demand affects utility response. Controls and protection
                  influence how disturbances develop.
                </p>

                <p>
                  The engineering challenge is often found in the interaction
                  between these systems.
                </p>
              </div>

              {/* ========================================================== */}
              {/* DISCIPLINE SYSTEM                                         */}
              {/* ========================================================== */}

              <div className="mt-14">
                {/* Connecting line */}
                <div className="relative">
                  <div className="absolute top-[35px] right-[10%] left-[10%] h-px bg-white/15" />

                  <div className="relative grid grid-cols-5">
                    {/* POWER */}
                    <div className="group relative flex flex-col items-center">
                      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E3A526] bg-[#111614] text-white transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(201,255,74,0.15)] sm:h-[72px] sm:w-[72px]">
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          aria-hidden="true"
                        >
                          <path
                            d="M24 5L10 19H18L12 43L38 16H29L35 5H24Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <span className="mt-4 text-[9px] font-semibold tracking-[0.16em] text-white/65 uppercase sm:text-[10px]">
                        Power
                      </span>
                    </div>

                    {/* PROCESS */}
                    <div className="group relative flex flex-col items-center">
                      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E3A526] bg-[#111614] text-white transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(201,255,74,0.15)] sm:h-[72px] sm:w-[72px]">
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          aria-hidden="true"
                        >
                          <path
                            d="M8 39H40"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M11 39V24H21V39"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M27 39V14H37V39"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M14 24V17H18V24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <span className="mt-4 text-[9px] font-semibold tracking-[0.16em] text-white/65 uppercase sm:text-[10px]">
                        Process
                      </span>
                    </div>

                    {/* CONTROLS */}
                    <div className="group relative flex flex-col items-center">
                      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E3A526] bg-[#111614] text-white transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(201,255,74,0.15)] sm:h-[72px] sm:w-[72px]">
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          aria-hidden="true"
                        >
                          <path
                            d="M12 8V40"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M24 8V40"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M36 8V40"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <circle
                            cx="12"
                            cy="18"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <circle
                            cx="24"
                            cy="31"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <circle
                            cx="36"
                            cy="21"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <span className="mt-4 text-[9px] font-semibold tracking-[0.16em] text-white/65 uppercase sm:text-[10px]">
                        Controls
                      </span>
                    </div>

                    {/* PROTECTION */}
                    <div className="group relative flex flex-col items-center">
                      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E3A526] bg-[#111614] text-white transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(201,255,74,0.15)] sm:h-[72px] sm:w-[72px]">
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          aria-hidden="true"
                        >
                          <path
                            d="M24 5L39 11V22C39 32 33 39 24 43C15 39 9 32 9 22V11L24 5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M24 14V29"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <circle cx="24" cy="34" r="1.5" fill="currentColor" />
                        </svg>
                      </div>

                      <span className="mt-4 text-[9px] font-semibold tracking-[0.16em] text-white/65 uppercase sm:text-[10px]">
                        Protection
                      </span>
                    </div>

                    {/* OPERATIONS */}
                    <div className="group relative flex flex-col items-center">
                      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E3A526] bg-[#111614] text-white transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(201,255,74,0.15)] sm:h-[72px] sm:w-[72px]">
                        <svg
                          viewBox="0 0 48 48"
                          fill="none"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          aria-hidden="true"
                        >
                          <circle
                            cx="24"
                            cy="14"
                            r="6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="M12 39C12 31 17 26 24 26C31 26 36 31 36 39"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />

                          <circle
                            cx="9"
                            cy="18"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <circle
                            cx="39"
                            cy="18"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>

                      <span className="mt-4 text-[9px] font-semibold tracking-[0.16em] text-white/65 uppercase sm:text-[10px]">
                        Operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================== */}
              {/* CLOSING STATEMENT                                         */}
              {/* ========================================================== */}

              <div className="mt-12 border-l border-[#E3A526]/50 pl-5">
                <p className="max-w-xl text-sm leading-6 text-white/40">
                  Solvina connects the relevant disciplines to make complex
                  system interactions understandable, testable and actionable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ENGINEERING PHILOSOPHY                                             */}
      {/* ================================================================== */}

      <section className="bg-[#dfe4dc] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#667067] uppercase">
                Our engineering philosophy
              </span>

              <h2 className="mt-8 max-w-2xl text-[clamp(2.7rem,5.5vw,5.8rem)] leading-[0.92] font-medium tracking-[-0.06em]">
                Integrated
                <br />
                Systems
                <br />
                <span className="text-[#687168]">Intelligence.</span>
              </h2>
            </div>

            <div className="lg:pt-20">
              <p className="text-xl leading-9 text-[#3f4740] sm:text-2xl">
                Solvina's philosophy is to understand the complete engineering
                question, connect the relevant disciplines and focus analysis on
                the behaviour that matters to the operating decision.
              </p>

              <div className="mt-12 border-l-2 border-[#111614] pl-6">
                <p className="text-sm leading-7 text-[#596259]">
                  It is not about modelling everything. It is about identifying
                  the interactions that matter and using the right engineering
                  evidence to understand them.
                </p>
              </div>

              <div className="mt-14 grid gap-3 sm:grid-cols-2">
                {[
                  "System boundaries",
                  "Dynamic behaviour",
                  "Cross-disciplinary interaction",
                  "Operational decisions",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/40 p-5"
                  >
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FROM MODEL TO PLANT                                                */}
      {/* ================================================================== */}

      <section className="bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
                From model to plant
              </span>

              <h2 className="mt-7 max-w-3xl text-[clamp(2.7rem,5.5vw,6rem)] leading-[0.92] font-medium tracking-[-0.06em]">
                From understanding
                <br />
                to <span className="text-[#717a71]">validation.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#687068]">
              A controlled methodology connects engineering analysis with
              real-world behaviour. The exact sequence depends on the scope,
              evidence available and the decision that needs to be made.
            </p>
          </div>

          <div className="mt-16 border-t border-[#cfd4ce]">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group grid gap-6 border-b border-[#cfd4ce] py-8 transition hover:bg-white/50 md:grid-cols-[220px_1fr] md:items-start lg:p-10"
              >
                <h3 className="text-2xl font-medium tracking-[-0.03em] transition group-hover:text-[#52604d] lg:text-3xl">
                  {step.title}
                </h3>

                <div className="flex items-start justify-between gap-8">
                  <p className="text-sm leading-7 text-[#697169]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[#858d85] uppercase">
            <span>Understand</span>
            <span>→</span>
            <span>Model</span>
            <span>→</span>
            <span>Simulate</span>
            <span>→</span>
            <span>Test</span>
            <span>→</span>
            <span>Diagnose</span>
            <span>→</span>
            <span>Optimize</span>
            <span>→</span>
            <span>Validate</span>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ENGINEERING HERITAGE                                               */}
      {/* ================================================================== */}

      <section
        id="engineering-heritage"
        className="bg-[#111614] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <ImagePanel
              src={assetPath("/images/about/engineering-heritage.jpg")}
              alt="Industrial engineering environment"
              className="min-h-[520px]"
            />

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#E3A526]" />
                <span className="text-xs font-semibold tracking-[0.25em] text-[#E3A526] uppercase">
                  Engineering heritage
                </span>
              </div>

              <h2 className="mt-8 text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.06em]">
                Rigor.
                <br />
                Clarity.
                <br />
                Practical
                <br />
                thinking.
              </h2>

              <p className="mt-10 max-w-xl text-lg leading-8 text-white/60">
                Solvina's engineering heritage is rooted in Swedish engineering
                culture, where technical rigor, clear thinking, precision and
                practical problem-solving are important.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                We carry that philosophy into engineering work where the answer
                must stand up not only in a model or report, but in the
                operating environment.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {["Rigor", "Clarity", "Precision", "Practicality"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-[#151a18] px-4 py-5 text-center text-xs font-semibold tracking-[0.15em] text-white/65 uppercase"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHAT CUSTOMERS VALUE                                               */}
      {/* ================================================================== */}

      <section className="bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
              What customers value
            </span>

            <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.6rem)] leading-[0.94] font-medium tracking-[-0.06em]">
              Deep engineering.
              <br />
              <span className="text-[#717a71]">Practical outcomes.</span>
            </h2>

            <p className="mt-8 max-w-5xl text-lg leading-8 text-[#626a62]">
              Customers value technical knowledge, understanding of
              interconnected plant systems, practical recommendations,
              responsiveness, solution-focused collaboration and trust.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#d3d7d1] bg-[#d3d7d1] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical depth",
                text: "Strong engineering analysis built around the real technical question.",
              },
              {
                title: "Systems understanding",
                text: "A view across the interactions that shape plant behaviour.",
              },
              {
                title: "Practical recommendations",
                text: "Engineering conclusions designed to support real decisions.",
              },
              {
                title: "Responsiveness",
                text: "Clear communication and focused engagement when the problem matters.",
              },
              {
                title: "Solution focus",
                text: "Analysis that moves toward technically grounded action.",
              },
              {
                title: "Trust",
                text: "Transparent reasoning, evidence and communication of limitations.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-[#f4f5f2] p-6 transition duration-300 hover:bg-white sm:p-10"
              >
                <h3 className="text-2xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#6d756d]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEADERSHIP                                                         */}
      {/* ================================================================== */}

      <section
        id="leadership-experts"
        className="bg-[#e7ebe4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
              Leadership & experts
            </span>

            <h2 className="mt-7 text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.94] font-medium tracking-[-0.06em]">
              People behind
              <br />
              the engineering.
            </h2>
          </div>

          {/* Board of Directors */}
          <div className="mb-24">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#111614]" />
              <h3 className="text-2xl font-medium tracking-[-0.03em]">
                Board of Directors
              </h3>
            </div>

            {/* <div className="flex flex-col gap-8">
              {boardOfDirectors.map((member) => (
                <LeadershipCard key={member.name} member={member} />
              ))}
            </div> */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {boardOfDirectors.map((member) => (
                <SimpleProfileCard
                  key={`${member.name}-${member.role}`}
                  member={member}
                />
              ))}
            </div>
          </div>

          {/* Leadership & Management */}
          <div className="mb-24">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#111614]" />
              <h3 className="text-2xl font-medium tracking-[-0.03em]">
                Leadership & Management
              </h3>
            </div>

            {/* <div className="flex flex-col gap-8">
              {leadershipManagement.map((member) => (
                <LeadershipCard key={member.name} member={member} />
              ))}
            </div> */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {leadershipManagement.map((member) => (
                <SimpleProfileCard
                  key={`${member.name}-${member.role}`}
                  member={member}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GLOBAL PRESENCE                                                    */}
      {/* ================================================================== */}

      <section
        id="global-presence"
        className="bg-[#111614] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#E3A526] uppercase">
                Global presence
              </span>

              <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.93] font-medium tracking-[-0.06em]">
                Local delivery.
                <br />
                <span className="text-white/40">Wider experience.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-white/50">
                Solvina India delivers specialist engineering support from India
                while benefiting from the wider technical knowledge and project
                experience represented across the Solvina organization.
              </p>
            </div>

            <div>
              <ImagePanel
                src={assetPath("/images/global-presence.png")}
                alt="Solvina engineering presence and project regions"
              />

              <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                {[
                  {
                    region: "India",
                    label: "Solvina India",
                  },
                  {
                    region: "Sweden",
                    label: "Solvina heritage",
                  },
                  {
                    region: "Project regions",
                    label: "Approved project geography",
                  },
                ].map((item) => (
                  <div key={item.region} className="bg-[#151a18] p-6">
                    <span className="block text-xs font-semibold tracking-[0.16em] text-[#E3A526] uppercase">
                      {item.region}
                    </span>
                    <span className="mt-2 block text-sm text-white/50">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-white/25">
                Locations and project geography should be kept aligned with
                current approved corporate information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VALUES & GOVERNANCE                                                */}
      {/* ================================================================== */}

      <section
        id="values-governance"
        className="bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
                Values & governance
              </span>

              <h2 className="mt-8 text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.94] font-medium tracking-[-0.06em]">
                Engineering
                <br />
                with
                <br />
                <span className="text-[#747d74]">responsibility.</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-6 text-[#687068]">
                Technical excellence matters. So does the discipline behind the
                evidence, communication and decisions that support it.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.number} className="py-8">
                  <h3 className="mt-6 text-xl font-medium tracking-[-0.025em]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6c746c]">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ                                                                */}
      {/* ================================================================== */}

      <section className="bg-[#e1e6df] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
              Questions
            </span>

            <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-medium tracking-[-0.055em]">
              Understanding
              <br />
              the Solvina approach.
            </h2>
          </div>

          <div className="border-t border-[#c4cbc2]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="border-b border-[#c4cbc2]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-8 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="max-w-3xl text-lg font-medium tracking-[-0.02em] sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="shrink-0">
                      <PlusIcon open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pr-8 text-sm leading-7 text-[#687068]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* RELATED CONTENT                                                    */}
      {/* ================================================================== */}

      <section className="bg-[#f4f5f2] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#6f786f] uppercase">
                Continue exploring
              </span>

              <h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-medium tracking-[-0.055em]">
                Go deeper into
                <br />
                Solvina's work.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#687068]">
              Explore the engineering capabilities, industries and real-world
              projects that bring the Solvina approach into practice.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Expertise",
                text: "Explore the engineering disciplines and capabilities.",
                href: "/expertise/",
              },
              {
                number: "02",
                title: "Industries",
                text: "See where complex engineering challenges arise.",
                href: "/industries/",
              },
              {
                number: "03",
                title: "Projects",
                text: "See how engineering analysis becomes practical outcomes.",
                href: "/projects/",
              },
              {
                number: "04",
                title: "Knowledge Centre",
                text: "Explore technical knowledge, insights and resources.",
                href: "/knowledge-centre/",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex flex-col justify-between rounded-[1.75rem] border border-[#d2d7d0] bg-white/40 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(17,22,20,0.07)]"
              >
                <span className="absolute top-5 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#d1d6cf] transition group-hover:border-[#111614] group-hover:bg-[#111614] group-hover:text-white">
                  <ArrowUpRight />
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6e766e]">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA                                                          */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#E3A526] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full border-[70px] border-black/[0.035]" />
        <div className="absolute -bottom-48 left-[-100px] h-[500px] w-[500px] rounded-full border-[1px] border-black/[0.08]" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-black/50 uppercase">
                Start a conversation
              </span>

              <h2 className="mt-7 max-w-5xl text-[clamp(3rem,6.5vw,7rem)] leading-[0.9] font-medium tracking-[-0.065em]">
                Have a complex
                <br />
                engineering challenge?
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
                Let's discuss the system, the evidence and the engineering
                decision you need to make.
              </p>
            </div>

            <EnquiryCTA
              label="Discuss Your Engineering Challenge"
              type="Engineering Challenge"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#111614] px-7 py-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111614]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
