"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  projects,
  INDUSTRY_GROUPS,
  EXPERTISE,
  type Project,
  getCustomerLogo,
} from "@/data/projects";
import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";
import { assetPath } from "@/lib/assets";

const PROJECTS_PER_LOAD = 3;

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

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path
        d="M4 7h16M7 12h10M10 17h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M16 16l4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M5 12.5l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatusBadge({ status }: { status: Project["evidenceStatus"] }) {
  const config = {
    "public-approved": {
      label: "Public approved",
      className: "border-[#E3A526]/40 bg-[#E3A526]/10 text-[#9A6908]",
    },

    "permission-pending": {
      label: "Permission pending",
      className: "border-[#B41448]/15 bg-[#B41448]/[0.04] text-[#B41448]",
    },

    anonymized: {
      label: "Anonymized",
      className: "border-[#D5D9D4] bg-[#F3F4F1] text-[#697169]",
    },

    "internal-confidential": {
      label: "Confidential",
      className: "border-[#D5D9D4] bg-[#F3F4F1] text-[#7A817A]",
    },
  } as const;

  const item = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-medium tracking-[0.14em] uppercase ${item.className}`}
    >
      {status === "public-approved" && <CheckIcon />}
      {item.label}
    </span>
  );
}

/* ==========================================================================
   EXPERTISE PILL
   ========================================================================== */

function ExpertisePill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-[#D9DDD8] bg-[#F6F7F4] px-2.5 py-1 text-[10px] tracking-[0.08em] text-[#697169]">
      {children}
    </span>
  );
}

/* ==========================================================================
   PROJECT ITEM
   ========================================================================== */

function ProjectItem({
  project,
  index,
  isActive,
}: {
  project: Project;
  index: number;
  isActive: boolean;
}) {
  const [open, setOpen] = useState(false);

  const customerVisible =
    project.customerNameApproved &&
    project.evidenceStatus === "public-approved";

  return (
    <article
      className={`relative grid grid-cols-[40px_minmax(0,1fr)] gap-5 transition-all duration-700 md:grid-cols-[58px_minmax(0,1fr)] md:gap-7 ${
        isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-65"
      }`}
    >
      {/* ================================================================
          TIMELINE NODE
      ================================================================ */}

      <div className="relative flex justify-center">
        <div
          data-project-node="true"
          className={`relative z-20 mt-8 flex h-5 w-5 items-center justify-center rounded-full border bg-[#F7F7F4] transition-all duration-500 ${
            isActive
              ? "border-[#B41448] shadow-[0_0_0_5px_rgba(180,20,72,0.08)]"
              : "border-[#C8CEC8]"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
              isActive
                ? "bg-[#B41448] shadow-[0_0_10px_rgba(180,20,72,0.45)]"
                : "bg-[#B8BEB8]"
            }`}
          />
        </div>
      </div>

      {/* ================================================================
          PROJECT CONTENT
      ================================================================ */}

      <div
        className={`relative mb-8 rounded-[22px] border p-6 transition-all duration-500 md:mb-10 md:p-8 ${
          isActive
            ? "border-[#D5DAD4] bg-white shadow-[0_16px_50px_rgba(23,26,24,0.055)]"
            : "border-[#E0E3DE] bg-[#FBFBF9]"
        }`}
      >
        {/* top metadata */}

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-[#C5CAC5]" />

            <span className="text-[10px] tracking-[0.16em] text-[#7B837B] uppercase">
              {project.serviceFamily}
            </span>
          </div>

          <Image
            src={getCustomerLogo(project.customer)?.logo || ""}
            alt={project.customer}
            width={50}
            height={50}
            className="absolute top-0 right-0"
          />
        </div>

        {/* title */}

        <h2 className="mt-5 max-w-4xl text-xl leading-[1.25] font-medium tracking-[-0.025em] text-[#171A18] md:text-2xl">
          {project.publicTitle}
        </h2>

        {/* customer/location */}

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="text-[#7A827A]">{project.customer}</span>

          <span className="h-1 w-1 rounded-full bg-[#CDD2CD]" />

          <span className="text-[#7A827A]">{project.location}</span>

          <span className="h-1 w-1 rounded-full bg-[#CDD2CD]" />

          <span className="text-[#7A827A]">{project.year}</span>
        </div>

        {/* description */}

        <p className="mt-6 max-w-4xl text-[14px] leading-7 text-[#687068]">
          {project.description}
        </p>

        {/* quick information */}

        <div className="mt-7 grid gap-5 border-t border-[#E1E4DF] pt-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[9px] tracking-[0.18em] text-[#929992] uppercase">
              Industry
            </p>

            <p className="mt-2 text-sm text-[#3F4740]">
              {project.industryGroup}
            </p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.18em] text-[#929992] uppercase">
              Project type
            </p>

            <p className="mt-2 text-sm text-[#3F4740]">{project.projectType}</p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.18em] text-[#929992] uppercase">
              Expertise
            </p>

            <p className="mt-2 text-sm text-[#3F4740]">
              {project.expertise[0]}
            </p>
          </div>
        </div>

        {/* expertise */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.expertise.map((item) => (
            <ExpertisePill key={item}>{item}</ExpertisePill>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ==========================================================================
   CASE STUDIES
   ========================================================================== */

function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative overflow-hidden border-t border-[#DDE1DC] bg-[#171A18]">
      <div className="pointer-events-none absolute top-20 -right-40 h-[500px] w-[500px] rounded-full bg-[#B41448]/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] font-medium tracking-[0.22em] text-[#E3A526] uppercase">
                Featured Case Studies
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl leading-[1.02] font-medium tracking-[-0.045em] text-white md:text-5xl lg:text-6xl">
              From engineering challenge
              <br />
              <span className="text-white/35">to practical insight.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[15px] leading-8 text-white/60">
              Selected engineering stories showing how Solvina approaches
              complex industrial systems through modelling, simulation, testing
              and practical validation.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/35">
              Case studies provide deeper context than the project reference
              library and are published with appropriate evidence and permission
              controls.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <article
              key={caseStudy.id}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#202420] transition-all duration-500 hover:-translate-y-1 hover:border-[#E3A526]/30 ${
                index === 0 ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
                }`}
              >
                <img
                  src={caseStudy.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101310] via-[#101310]/25 to-transparent" />

                <div className="absolute top-5 left-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/20 backdrop-blur-sm">
                  <span className="font-mono text-[9px] tracking-[0.12em] text-white/70">
                    {caseStudy.number}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-[#E3A526]/35 bg-black/30 px-3 py-1.5 text-[9px] tracking-[0.15em] text-[#E3A526] uppercase backdrop-blur-sm">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3
                  className={`max-w-2xl leading-[1.15] font-medium tracking-[-0.03em] text-white ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {caseStudy.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/50">
                  {caseStudy.description}
                </p>

                <div className="my-5 flex flex-wrap gap-2">
                  {caseStudy.expertise.map((expertise) => (
                    <span
                      key={expertise}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] tracking-[0.06em] text-white/45"
                    >
                      {expertise}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto border-t border-white/[0.07] pt-5">
                  <Link
                    href={caseStudy.href}
                    className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.17em] text-[#E3A526] uppercase transition-colors hover:text-white"
                  >
                    Read Case Study
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E3A526]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#E3A526]/60">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PAGE
   ========================================================================== */

export default function ProjectsPage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const [search, setSearch] = useState("");

  /* ========================================================================
     YEARS
  ======================================================================== */

  const years = useMemo(() => {
    return Array.from(
      new Set(projects.map((project) => project.yearStart)),
    ).sort((a, b) => b - a);
  }, []);

  /* ========================================================================
     FILTER
  ======================================================================== */

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return [...projects]
      .filter((project) => {
        const industryMatch =
          selectedIndustry === "All" ||
          project.industryGroup === selectedIndustry;

        const expertiseMatch =
          selectedExpertise === "All" ||
          project.expertise.includes(selectedExpertise);

        const yearMatch =
          selectedYear === "All" || project.yearStart === Number(selectedYear);

        const searchMatch =
          !query ||
          [
            project.id,
            project.publicTitle,
            project.customer,
            project.location,
            project.industry,
            project.industryGroup,
            project.serviceFamily,
            project.projectType,
            project.description,
            ...project.expertise,
            ...project.technologyTags,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query);

        return industryMatch && expertiseMatch && yearMatch && searchMatch;
      })
      .sort((a, b) => {
        if (b.yearStart !== a.yearStart) {
          return b.yearStart - a.yearStart;
        }

        return a.sourceRow - b.sourceRow;
      });
  }, [search, selectedIndustry, selectedExpertise, selectedYear]);

  /* ========================================================================
     VISIBLE PROJECTS
  ======================================================================== */

  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = visibleCount < filteredProjects.length;

  /* ========================================================================
     RESET PAGINATION
  ======================================================================== */

  useEffect(() => {
    setVisibleCount(PROJECTS_PER_LOAD);
    setActiveIndex(0);
  }, [selectedIndustry, selectedExpertise, selectedYear, search]);

  /* ========================================================================
     TIMELINE SCROLL ANIMATION
  ======================================================================== */

  useEffect(() => {
    const updateTimeline = () => {
      if (!timelineRef.current) return;

      const timeline = timelineRef.current;

      const timelineRect = timeline.getBoundingClientRect();

      const nodes = Array.from(
        timeline.querySelectorAll<HTMLElement>('[data-project-node="true"]'),
      );

      if (nodes.length === 0) {
        setTimelineHeight(0);
        return;
      }

      const viewportHeight = window.innerHeight;

      const viewportAnchor = viewportHeight * 0.55;

      const viewportDistance = viewportAnchor - timelineRect.top;

      const lastNode = nodes[nodes.length - 1];

      const lastNodeRect = lastNode.getBoundingClientRect();

      const lastNodeCenter =
        lastNodeRect.top + lastNodeRect.height / 2 - timelineRect.top;

      const targetHeight = Math.min(
        Math.max(viewportDistance, 0),
        lastNodeCenter,
      );

      setTimelineHeight(targetHeight);

      let active = 0;

      nodes.forEach((node, index) => {
        const nodeRect = node.getBoundingClientRect();

        const nodeCenter =
          nodeRect.top + nodeRect.height / 2 - timelineRect.top;

        if (nodeCenter <= targetHeight + 1) {
          active = index;
        }
      });

      setActiveIndex(active);
    };

    updateTimeline();

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        updateTimeline();
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateTimeline);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  /* ========================================================================
     LOAD MORE
  ======================================================================== */

  const loadMore = () => {
    setVisibleCount((current) => current + PROJECTS_PER_LOAD);
  };

  /* ========================================================================
     RESET
  ======================================================================== */

  const hasFilters =
    selectedIndustry !== "All" ||
    selectedExpertise !== "All" ||
    selectedYear !== "All" ||
    search.trim() !== "";

  const resetFilters = () => {
    setSelectedIndustry("All");
    setSelectedExpertise("All");
    setSelectedYear("All");
    setSearch("");
    setVisibleCount(PROJECTS_PER_LOAD);
  };

  /* ========================================================================
     STATS
  ======================================================================== */

  const totalProjects = projects.length;

  const activeYears = new Set(projects.map((project) => project.yearStart))
    .size;

  const industries = new Set(projects.map((project) => project.industryGroup))
    .size;

  const expertiseCount = new Set(
    projects.flatMap((project) => project.expertise),
  ).size;

  /* ========================================================================
     RENDER
  ======================================================================== */

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F4] text-[#171A18]">
      {/* ==================================================================
          HERO
      ================================================================== */}

      <section className="relative isolate min-h-[76vh] overflow-hidden bg-[#171A18]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <Image
          src={assetPath("/images/projects/projects-hero.jpg")}
          alt="Industrial power system and engineering environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[65%_center]"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#111614]/95 via-[#111614]/65 to-[#111614]/15" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#111614] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1400px] z-10 flex min-h-[76vh] flex-col justify-end px-5 pt-32 pb-16 sm:px-8 md:px-10 lg:px-16 lg:pb-20">
          <div>
            <div className="max-w-5xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-[10px] font-medium tracking-[0.24em] text-[#E3A526] uppercase">
                  Projects & Case Studies
                </span>
              </div>

              <h1 className="text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] font-medium tracking-[-0.055em] text-white">
                Engineering evidence
                <br />
                <span className="text-white/45">from real systems.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                Explore Solvina India&apos;s reference experience across power
                systems, grid compliance, integrated utilities, island
                operation, controls and system studies.
              </p>
            </div>

            <div className="mt-14 grid max-w-5xl grid-cols-2 border-t border-white/15 sm:grid-cols-4">
              <div className="border-r border-white/10 py-6 pr-5">
                <p className="text-3xl font-medium tracking-[-0.04em] text-white">
                  {totalProjects}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/45 uppercase">
                  Reference records
                </p>
              </div>

              <div className="border-r border-white/10 py-6 pr-5 pl-5 sm:pl-6">
                <p className="text-3xl font-medium tracking-[-0.04em] text-white">
                  {activeYears}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/45 uppercase">
                  Years represented
                </p>
              </div>

              <div className="border-r border-white/10 py-6 pr-5 pl-5 sm:pl-6">
                <p className="text-3xl font-medium tracking-[-0.04em] text-white">
                  {industries}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/45 uppercase">
                  Industry groups
                </p>
              </div>

              <div className="py-6 pl-5 sm:pl-6">
                <p className="text-3xl font-medium tracking-[-0.04em] text-[#E3A526]">
                  {expertiseCount}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/45 uppercase">
                  Expertise areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          INTRO
      ================================================================== */}

      <section className="border-y border-white/[0.07] bg-white">
        <div className="mx-auto max-w-[1400px] gap-10 px-5 py-16 md:px-10 md:py-20 lg:px-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />
              <span className="text-[10px] tracking-[0.22em] text-[#B41448] uppercase">
                Reference experience
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl leading-tight font-medium tracking-[-0.035em]">
              A timeline of engineering work across <br />
              <span className="text-[#B41448]">
                complex industrial systems.
              </span>
            </h2>

            <p className="mt-8 text-[15px] leading-8 text-black/55">
              The project library brings together reference experience from real
              operating environments. Browse by industry, expertise or year to
              find engineering work relevant to your challenge.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          FILTER BAR
      ================================================================== */}

      <section className="sticky top-0 z-40 border-b border-[#D9DDD8] bg-[#F7F7F4]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-[#4E564F] uppercase transition-colors hover:text-[#B41448]"
            >
              <FilterIcon />
              Filters
            </button>

            <div className="text-right">
              <span className="font-mono text-xs text-[#B41448]">
                {filteredProjects.length}
              </span>

              <span className="ml-2 text-[9px] tracking-[0.16em] text-[#858C85] uppercase">
                matching records
              </span>
            </div>
          </div>

          <div
            className={`grid pb-6 transition-[grid-template-rows,opacity] duration-400`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
                <label className="relative block">
                  <span className="sr-only">Search projects</span>

                  <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8A918A]">
                    <SearchIcon />
                  </div>

                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search projects..."
                    className="h-12 w-full rounded-xl border border-[#D6DBD5] bg-white pr-4 pl-11 text-sm text-[#171A18] outline-none placeholder:text-[#A2A8A2] focus:border-[#B41448]/50"
                  />
                </label>

                <select
                  value={selectedIndustry}
                  onChange={(event) => setSelectedIndustry(event.target.value)}
                  className="h-12 rounded-xl border border-[#D6DBD5] bg-white px-4 text-xs text-[#4E564F] outline-none focus:border-[#B41448]/50"
                >
                  <option value="All">All industries</option>

                  {INDUSTRY_GROUPS.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedExpertise}
                  onChange={(event) => setSelectedExpertise(event.target.value)}
                  className="h-12 rounded-xl border border-[#D6DBD5] bg-white px-4 text-xs text-[#4E564F] outline-none focus:border-[#B41448]/50"
                >
                  <option value="All">All expertise</option>

                  {EXPERTISE.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedYear}
                  onChange={(event) => setSelectedYear(event.target.value)}
                  className="h-12 rounded-xl border border-[#D6DBD5] bg-white px-4 text-xs text-[#4E564F] outline-none focus:border-[#B41448]/50"
                >
                  <option value="All">All years</option>

                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                {hasFilters ? (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="h-12 rounded-xl border border-[#B41448]/25 px-5 text-[10px] font-medium tracking-[0.15em] text-[#B41448] uppercase transition-colors hover:bg-[#B41448]/[0.05]"
                  >
                    Reset
                  </button>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          TIMELINE
      ================================================================== */}

      <section className="relative overflow-hidden bg-[#F7F7F4]">
        <div
          ref={timelineRef}
          className="relative mx-auto max-w-[1200px] overflow-hidden px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          {visibleProjects.length > 0 ? (
            <div className="relative">
              {/* BASE TIMELINE */}

              <div className="pointer-events-none absolute top-0 bottom-0 left-[20px] w-px bg-[#D5DAD4] md:left-[28px]" />

              {/* ANIMATED TIMELINE */}

              <div
                className="pointer-events-none absolute top-0 left-[20px] z-10 w-px bg-[#B41448] shadow-[0_0_10px_rgba(180,20,72,0.35)] transition-[height] duration-150 ease-out md:left-[28px]"
                style={{
                  height: `${timelineHeight}px`,
                }}
              />

              <div className="relative">
                {visibleProjects.map((project, index) => {
                  const previous = visibleProjects[index - 1];

                  const isNewYear =
                    !previous || previous.yearStart !== project.yearStart;

                  const isActive = index <= activeIndex;

                  return (
                    <div key={project.id} className="relative">
                      {isNewYear && (
                        <div className="relative mb-7 pl-[64px] md:pl-[88px]">
                          <div className="inline-flex items-center gap-3 rounded-full border border-[#D7DCD6] bg-white px-4 py-2 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

                            <span className="font-mono text-sm tracking-[0.1em] text-[#596159]">
                              {project.yearStart}
                            </span>
                          </div>
                        </div>
                      )}

                      <ProjectItem
                        project={project}
                        index={index}
                        isActive={isActive}
                      />
                    </div>
                  );
                })}
              </div>

              {/* SHOW MORE */}

              {hasMore && (
                <div className="relative flex justify-center pt-8 pb-4">
                  <button
                    type="button"
                    onClick={loadMore}
                    className="group relative z-20 inline-flex items-center gap-4 rounded-full border border-[#CDD3CC] bg-white px-7 py-4 text-[10px] font-medium tracking-[0.18em] text-[#4D554E] uppercase shadow-sm transition-all duration-300 hover:border-[#B41448]/40 hover:text-[#B41448] hover:shadow-[0_12px_35px_rgba(23,26,24,0.08)]"
                  >
                    <span>Show More Projects</span>

                    <span className="font-mono text-[9px] text-[#A0A7A0] transition-colors group-hover:text-[#B41448]">
                      +
                      {Math.min(
                        PROJECTS_PER_LOAD,
                        filteredProjects.length - visibleCount,
                      )}
                    </span>

                    <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-y-0.5">
                      ↓
                    </span>
                  </button>
                </div>
              )}

              {!hasMore && filteredProjects.length > PROJECTS_PER_LOAD && (
                <div className="relative flex justify-center pt-10">
                  <div className="rounded-full border border-[#D8DDD7] bg-white px-5 py-3 text-[9px] tracking-[0.18em] text-[#929992] uppercase">
                    All {filteredProjects.length} matching projects displayed
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex min-h-[420px] items-center justify-center">
              <div className="max-w-md text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D7DCD6] bg-white text-[#8B938B] shadow-sm">
                  <SearchIcon />
                </div>

                <h2 className="mt-6 text-2xl font-medium tracking-[-0.025em] text-[#171A18]">
                  No matching projects
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#747C74]">
                  Try changing the industry, expertise or year filters, or
                  search using a broader engineering term.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-7 rounded-full border border-[#B41448]/30 px-5 py-3 text-[10px] font-medium tracking-[0.16em] text-[#B41448] uppercase transition-colors hover:bg-[#B41448]/[0.05]"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ==================================================================
          CASE STUDIES
      ================================================================== */}

      <CaseStudiesSection />

      {/* ==================================================================
          FINAL CTA
      ================================================================== */}

      <section className="relative overflow-hidden bg-[#E3A526]">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border-[70px] border-black/[0.035]" />

        <div className="absolute -bottom-48 left-[-100px] h-[500px] w-[500px] rounded-full border border-black/[0.08]" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-[10px] font-medium tracking-[0.22em] text-black/50 uppercase">
                Your system is next
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl leading-[1] font-medium tracking-[-0.045em] text-[#171A18] md:text-6xl">
                Have a similar engineering challenge?
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base">
                Tell us what your system needs to do, what is not behaving as
                expected, and what decision you need to make.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#171A18] px-6 text-[10px] font-medium tracking-[0.16em] text-white uppercase transition-transform hover:-translate-y-0.5"
              >
                Discuss Your Engineering Challenge
                <ArrowUpRight />
              </Link>

              <Link
                href="/expertise/"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full border border-black/20 px-6 text-[10px] font-medium tracking-[0.16em] text-[#171A18] uppercase transition-colors hover:border-black/40 hover:bg-black/[0.04]"
              >
                Explore Our Expertise
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
