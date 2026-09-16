"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { caseStudyDetails } from "@/data/caseStudyDetails";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = use(params);

  const caseStudy = caseStudyDetails.find(
    (study) => study.id === slug
  );

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#171717]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Soft background accents */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#f4c400]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#e30613]/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* =====================================================
              BREADCRUMB

              IMPORTANT:
              The top padding deliberately creates space below
              the fixed navigation bar.
          ===================================================== */}
          <div className="relative z-10 pt-28 sm:pt-32">
            <Link
              href="/projects#case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              <span>Case Studies</span>

              <span className="text-black/20">/</span>

              <span className="max-w-[220px] truncate text-black/70">
                {caseStudy.client}
              </span>
            </Link>
          </div>

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <div className="relative z-10 max-w-[1120px] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Category */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#e30613]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b0000a]">
                  {caseStudy.category}
                </span>
              </div>

              {/* Main title */}
              <h1 className="max-w-[1050px] text-[clamp(3rem,7vw,7.2rem)] font-medium leading-[0.91] tracking-[-0.06em]">
                {caseStudy.title}
              </h1>

              {/* Client information */}
              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-6 border-t border-black/10 pt-7 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                    Client
                  </p>

                  <p className="mt-2 text-lg font-medium">
                    {caseStudy.client}
                  </p>
                </div>

                {caseStudy.location && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Location
                    </p>

                    <p className="mt-2 text-lg font-medium">
                      {caseStudy.location}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT OVERVIEW
      ========================================================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="flex flex-col gap-10">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E3A526]">
                  Project Overview
                </span>
              </div>
            </motion.div>

            {/* Large statement */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <p className="text-[18px] font-medium leading-8 tracking-[-0.035em] text-black/65">
                {caseStudy.heroDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-[#f7f7f4]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-14 lg:grid-cols-[250px_1fr] lg:gap-20">
            {/* Side introduction */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                  Engineering Reference
                </p>

                <div className="mt-5 h-px w-12 bg-[#e30613]" />

                <p className="mt-5 max-w-[190px] text-sm leading-6 text-black/45">
                  Detailed engineering work carried out by Solvina for{" "}
                  {caseStudy.client}.
                </p>
              </div>
            </aside>

            {/* Content */}
            <div className="max-w-[920px]">
              {caseStudy.sections.map((section, index) => (
                <motion.article
                  key={`${section.heading}-${index}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55 }}
                  className="border-t border-black/10 py-12 first:border-t-0 first:pt-0 sm:py-14 lg:py-16"
                >
                  {/* Section heading */}
                  <h2 className="max-w-[780px] text-[clamp(1.8rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs &&
                    section.paragraphs.length > 0 && (
                      <div className="mt-7 max-w-[820px] space-y-5">
                        {section.paragraphs.map(
                          (paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-base leading-8 text-black/65 sm:text-[17px]"
                            >
                              {paragraph}
                            </p>
                          )
                        )}
                      </div>
                    )}

                  {/* Bullets */}
                  {section.bullets &&
                    section.bullets.length > 0 && (
                      <ul className="mt-8 max-w-[820px] space-y-4">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-4 text-base leading-7 text-black/70 sm:text-[17px]"
                          >
                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#e30613]" />

                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER NAVIGATION
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/projects#case-studies"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                <ArrowLeft size={16} />
              </span>

              All Case Studies
            </Link>

            <Link
              href="/contact/"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Download Case Study

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4c400] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}