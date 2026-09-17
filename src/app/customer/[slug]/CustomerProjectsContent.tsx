"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MoveUpRight,
  RotateCcw,
  Settings2,
  Tag,
  ChevronDown,
} from "lucide-react";

import { Customer, customers } from "@/data/homepage";
import { Project } from "@/data/projects";

type Props = {
  customer: Customer;
  customerProjects: Project[];
};

/* ========================================================================== */
/* FILTER OPTIONS                                                             */
/* ========================================================================== */

const ALL_VALUE = "all";

function uniqueSorted(values: string[]) {
  return [...new Set(values)]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

/* ========================================================================== */
/* CUSTOMER LOGO                                                              */
/* ========================================================================== */

function CustomerLogo({
  customer,
  small = false,
}: {
  customer: Customer;
  small?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!customer.logo || failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center border border-black/[0.07] bg-white font-bold text-[#B41448] dark:border-white/[0.08] dark:bg-[#111111] dark:text-[#E3A526] ${
          small ? "h-20 w-20 text-[9px]" : "h-50 w-50 text-sm"
        }`}
      >
        {customer.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-black/[0.07] bg-white dark:border-white/[0.08] ${
        small ? "h-20 w-20 p-1.5" : "h-50 w-50 p-3"
      }`}
    >
      <img
        src={customer.logo}
        alt={`${customer.name} logo`}
        onError={() => setFailed(true)}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

/* ========================================================================== */
/* FILTER SELECT                                                              */
/* ========================================================================== */

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative min-w-0 flex-1">
      <label className="mb-2 block text-[9px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none border border-black/[0.08] bg-white px-4 py-3 pr-10 text-xs font-medium text-[#202020] transition-all duration-200 outline-none hover:border-[#E3A526]/50 focus:border-[#B41448] dark:border-white/[0.09] dark:bg-[#171717] dark:text-white dark:focus:border-[#E3A526]"
        >
          <option value={ALL_VALUE}>All {label}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-black/35 dark:text-white/35"
        />
      </div>
    </div>
  );
}

/* ========================================================================== */
/* PROJECT CARD                                                               */
/* ========================================================================== */

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
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
        delay: Math.min(index * 0.04, 0.25),
      }}
      className="group relative overflow-hidden border border-black/[0.07] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E3A526]/50 hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)] dark:border-white/[0.08] dark:bg-[#151515] dark:hover:border-[#E3A526]/40"
    >
      {/* Top accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#B41448] via-[#E3A526] to-transparent opacity-70" />

      <div className="p-6 sm:p-7 lg:p-8">
        {/* Header */}
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center border border-[#E3A526]/30 bg-[#E3A526]/[0.08] text-[10px] font-bold text-[#B41448] dark:text-[#E3A526]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-[10px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
              Project
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium text-black/40 dark:text-white/40">
            <CalendarDays size={13} />
            {project.year}
          </div>
        </div>

        {/* Title */}
        <h2 className="max-w-2xl text-xl leading-[1.2] font-semibold tracking-[-0.025em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] sm:text-2xl dark:text-white dark:group-hover:text-[#E3A526]">
          {project.publicTitle}
        </h2>

        {/* Customer + Location */}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-black/45 dark:text-white/45">
          <span className="font-semibold text-black/65 dark:text-white/65">
            {project.publicCustomer}
          </span>

          {project.location && (
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} />
              {project.location}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-6 text-sm leading-7 text-black/55 dark:text-white/55">
          {project.description}
        </p>

        {/* Metadata */}
        <div className="mt-7 grid gap-4 border-t border-black/[0.07] pt-6 sm:grid-cols-2 dark:border-white/[0.08]">
          <div>
            <div className="mb-1.5 flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
              <Settings2 size={12} />
              Project Type
            </div>

            <p className="text-xs leading-5 font-medium text-black/70 dark:text-white/70">
              {project.projectType}
            </p>
          </div>

          <div>
            <div className="mb-1.5 flex items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
              <Tag size={12} />
              Service
            </div>

            <p className="text-xs leading-5 font-medium text-black/70 dark:text-white/70">
              {project.serviceFamily}
            </p>
          </div>
        </div>

        {/* Expertise */}
        {project.expertise.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 text-[9px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
              Expertise
            </div>

            <div className="flex flex-wrap gap-2">
              {project.expertise.map((item) => (
                <span
                  key={item}
                  className="border border-black/[0.07] bg-[#F7F7F4] px-2.5 py-1.5 text-[10px] font-medium text-black/55 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Ongoing */}
        {project.ongoing && (
          <div className="mt-6 inline-flex items-center gap-2 border border-green-600/20 bg-green-600/[0.06] px-3 py-2 text-[10px] font-semibold text-green-700 dark:text-green-400">
            <CheckCircle2 size={13} />
            Ongoing
          </div>
        )}
      </div>

      {/* Hover line */}
      <div className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-[#E3A526] transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
}

/* ========================================================================== */
/* OTHER CUSTOMERS                                                            */
/* ========================================================================== */

function OtherCustomers({ currentCustomerId }: { currentCustomerId: string }) {
  const otherCustomers = customers.filter(
    (customer) => customer.id !== currentCustomerId,
  );

  return (
    <section className="border-t border-black/[0.07] bg-white dark:border-white/[0.08] dark:bg-[#111111]">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#E3A526]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase dark:text-[#E3A526]">
              Explore Customers
            </span>
          </div>

          <h2 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#202020] sm:text-3xl dark:text-white">
            Explore our work with other
            <span className="text-black/35 dark:text-white/35">
              {" "}
              customers.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {otherCustomers.map((customer) => (
            <Link
              key={customer.id}
              href={`/customer/${customer.id}`}
              className="group relative flex items-center gap-5 overflow-hidden border border-black/[0.07] bg-[#F7F7F4] px-6 py-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E3A526]/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:border-white/[0.08] dark:bg-[#171717] dark:hover:bg-[#1c1c1c]"
            >
              <span className="absolute top-[35%] right-4 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/25 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-[#B41448] group-hover:text-[#B41448] group-hover:opacity-100 dark:border-white/10 dark:text-white/25 dark:group-hover:border-[#E3A526] dark:group-hover:text-[#E3A526]">
                <ArrowRight size={14} />
              </span>

              <CustomerLogo customer={customer} small={true} />

              <span className="text-sm font-semibold text-[#27313D]/80 transition-colors group-hover:text-[#B41448] dark:text-white/75 dark:group-hover:text-[#E3A526]">
                {customer.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/* PAGE                                                                       */
/* ========================================================================== */

export default function CustomerProjectsContent({
  customer,
  customerProjects,
}: Props) {
  /* ------------------------------------------------------------------------ */
  /* FILTER STATE                                                             */
  /* ------------------------------------------------------------------------ */

  const [yearFilter, setYearFilter] = useState(ALL_VALUE);
  const [expertiseFilter, setExpertiseFilter] = useState(ALL_VALUE);
  const [industryFilter, setIndustryFilter] = useState(ALL_VALUE);

  const [visibleCount, setVisibleCount] = useState(4);

  /* ------------------------------------------------------------------------ */
  /* FILTER OPTIONS                                                           */
  /* ------------------------------------------------------------------------ */

  const yearOptions = useMemo(() => {
    return uniqueSorted(
      customerProjects.map((project) => project.year),
    ).reverse();
  }, [customerProjects]);

  const expertiseOptions = useMemo(() => {
    return uniqueSorted(
      customerProjects.flatMap((project) => project.expertise),
    );
  }, [customerProjects]);

  const industryOptions = useMemo(() => {
    return uniqueSorted(
      customerProjects.map((project) => project.industryGroup),
    );
  }, [customerProjects]);

  /* ------------------------------------------------------------------------ */
  /* FILTERED PROJECTS                                                        */
  /* ------------------------------------------------------------------------ */

  const filteredProjects = useMemo(() => {
    return customerProjects.filter((project) => {
      const matchesYear =
        yearFilter === ALL_VALUE || project.year === yearFilter;

      const matchesExpertise =
        expertiseFilter === ALL_VALUE ||
        project.expertise.includes(expertiseFilter);

      const matchesIndustry =
        industryFilter === ALL_VALUE ||
        project.industryGroup === industryFilter;

      return matchesYear && matchesExpertise && matchesIndustry;
    });
  }, [customerProjects, yearFilter, expertiseFilter, industryFilter]);

  /* ------------------------------------------------------------------------ */
  /* VISIBLE PROJECTS                                                         */
  /* ------------------------------------------------------------------------ */

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const hasMoreProjects = visibleCount < filteredProjects.length;

  /* ------------------------------------------------------------------------ */
  /* FILTER HANDLERS                                                          */
  /* ------------------------------------------------------------------------ */

  function handleYearChange(value: string) {
    setYearFilter(value);
    setVisibleCount(4);
  }

  function handleExpertiseChange(value: string) {
    setExpertiseFilter(value);
    setVisibleCount(4);
  }

  function handleIndustryChange(value: string) {
    setIndustryFilter(value);
    setVisibleCount(4);
  }

  function clearFilters() {
    setYearFilter(ALL_VALUE);
    setExpertiseFilter(ALL_VALUE);
    setIndustryFilter(ALL_VALUE);
    setVisibleCount(4);
  }

  const filtersActive =
    yearFilter !== ALL_VALUE ||
    expertiseFilter !== ALL_VALUE ||
    industryFilter !== ALL_VALUE;

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-[#202020] dark:bg-[#0D0D0D] dark:text-white">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden border-b border-black/[0.07] dark:border-white/[0.08]">

        <div className="relative mx-auto w-full px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-20 lg:px-12 lg:pt-20 lg:pb-24 xl:px-16 2xl:px-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto]">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E3A526]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase dark:text-[#E3A526]">
                  Projects
                </span>
              </div>

              <h1 className="max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.045em] text-[#202020] sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
                {customer.name}
              </h1>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-black/50 sm:text-base dark:text-white/50">
                Engineering assignments delivered by Solvina across power,
                utilities and energy-intensive industrial environments.
              </p>
            </motion.div>

            {/* Logo — small, in a clean bordered card, right-aligned */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex justify-start lg:justify-end"
            >
              <CustomerLogo customer={customer} />
            </motion.div>
          </div>

          {/* Project count — sized to content, not full width */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 inline-flex w-fit items-center gap-6 border border-black/[0.07] bg-white/70 px-6 py-5 backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.035]"
          >
            <div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#202020] dark:text-white">
                {filteredProjects.length}
              </div>
              <div className="mt-1 text-[9px] font-bold tracking-[0.16em] text-black/35 uppercase dark:text-white/35">
                {filtersActive ? "Matching Projects" : "Projects"}
              </div>
            </div>

            {filtersActive && (
              <button
                type="button"
                onClick={clearFilters}
                className="group inline-flex items-center gap-2 border-l border-black/[0.08] pl-6 text-[10px] font-semibold text-[#B41448] transition-colors hover:text-[#9F103F] dark:border-white/[0.08] dark:text-[#E3A526] dark:hover:text-[#F0B63C]"
              >
                <RotateCcw
                  size={13}
                  className="transition-transform duration-300 group-hover:-rotate-45"
                />
                Clear filters
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PROJECTS                                                           */}
      {/* ================================================================== */}

      <section className="mx-auto w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
        {/* ---------------------------------------------------------------- */}
        {/* FILTERS                                                          */}
        {/* ---------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10 border border-black/[0.07] bg-white p-5 sm:p-6 lg:p-7 dark:border-white/[0.08] dark:bg-[#151515]"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 text-[9px] font-bold tracking-[0.18em] text-[#B41448] uppercase dark:text-[#E3A526]">
                Filter Projects
              </div>

              <h2 className="text-lg font-semibold tracking-[-0.025em] text-[#202020] dark:text-white">
                Find relevant projects
              </h2>
            </div>

            <p className="text-xs text-black/35 dark:text-white/35">
              Filter by year, expertise or industry.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FilterSelect
              label="Year"
              value={yearFilter}
              options={yearOptions}
              onChange={handleYearChange}
            />

            <FilterSelect
              label="Expertise"
              value={expertiseFilter}
              options={expertiseOptions}
              onChange={handleExpertiseChange}
            />

            <FilterSelect
              label="Industry"
              value={industryFilter}
              options={industryOptions}
              onChange={handleIndustryChange}
            />
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* PROJECT HEADER                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 text-[10px] font-bold tracking-[0.18em] text-[#B41448] uppercase dark:text-[#E3A526]">
              Project Portfolio
            </div>

            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#202020] sm:text-3xl dark:text-white">
              Projects
            </h2>
          </div>

          <p className="text-xs text-black/35 dark:text-white/35">
            Showing {visibleProjects.length} of {filteredProjects.length}
          </p>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* PROJECT GRID                                                      */}
        {/* ---------------------------------------------------------------- */}

        {visibleProjects.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          /* -------------------------------------------------------------- */
          /* NO FILTER RESULTS                                              */
          /* -------------------------------------------------------------- */

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="border border-black/[0.07] bg-white p-10 text-center sm:p-14 dark:border-white/[0.08] dark:bg-[#151515]"
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E3A526]/[0.10] text-[#B41448] dark:text-[#E3A526]">
              <Settings2 size={20} />
            </div>

            <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#202020] dark:text-white">
              No projects match these filters
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/40 dark:text-white/40">
              Try changing the year, expertise or industry selection.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] dark:text-[#E3A526]"
            >
              <RotateCcw size={13} />
              Clear filters
            </button>
          </motion.div>
        )}

        {/* ---------------------------------------------------------------- */}
        {/* SHOW MORE                                                        */}
        {/* ---------------------------------------------------------------- */}

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((current) => current + 4)}
              className="group inline-flex items-center gap-3 border border-black/[0.09] bg-white px-7 py-3.5 text-xs font-semibold text-[#202020] transition-all duration-300 hover:border-[#E3A526]/60 hover:bg-[#E3A526]/[0.05] hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] dark:border-white/[0.1] dark:bg-[#151515] dark:text-white dark:hover:border-[#E3A526]/50"
            >
              Show more
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          </div>
        )}
      </section>

      {/* ================================================================== */}
      {/* OTHER CUSTOMERS                                                    */}
      {/* ================================================================== */}

      <OtherCustomers currentCustomerId={customer.id} />

      {/* ================================================================== */}
      {/* FOOTER CTA                                                         */}
      {/* ================================================================== */}

      <section className="border-t border-black/[0.07] bg-[#F7F7F4] dark:border-white/[0.08] dark:bg-[#0D0D0D]">
        <div className="mx-auto flex w-full flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div>
            <div className="text-[9px] font-bold tracking-[0.18em] text-black/30 uppercase dark:text-white/30">
              Solvina India
            </div>

            <p className="mt-1 text-xs text-black/45 dark:text-white/45">
              Engineering experience across complex power and industrial
              systems.
            </p>
          </div>

          <Link
            href="/projects/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors hover:text-[#9F103F] dark:text-[#E3A526] dark:hover:text-[#F0B63C]"
          >
            View all projects
            <MoveUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ========================================================================== */
/* SHOW MORE ICON                                                             */
/* ========================================================================== */

function ArrowDown({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
