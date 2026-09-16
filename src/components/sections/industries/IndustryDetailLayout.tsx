 "use client";

import Link from "next/link";
import type { IndustryPage } from "@/data/industries";
import { useEffect, useRef, useState } from "react";

type Props = {
  industry: IndustryPage;
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`industry-reveal ${visible ? "industry-reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B41448]">
      <span className="h-px w-8 bg-[#E3A526]" />
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
    >
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IndustryDetailLayout({ industry }: Props) {
  const relatedExpertise = industry.relatedPages ?? [];

  return (
    <main className="overflow-hidden bg-white text-[#202124]">
      {/* HERO — intentionally image-free */}
      <section className="relative isolate border-b border-black/8 bg-[#faf9f6]">
        <div className="absolute right-0 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#E3A526]/10 blur-3xl" />
        <div className="absolute bottom-0 left-[12%] -z-10 h-[260px] w-[260px] rounded-full bg-[#B41448]/6 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28 lg:pt-10">

          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <Reveal>
              <div className="max-w-5xl">
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#B41448]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B41448] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#E3A526]" />
                  {industry.title}
                </div>

                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#171717] sm:text-5xl lg:text-[4.6rem]">
                  {industry.hero.heading}
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65 sm:text-xl sm:leading-9">
                  {industry.hero.intro}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative hidden lg:block">
                <div className="absolute right-5 top-5 h-28 w-28 rounded-full border border-[#E3A526]/35" />
                <div className="absolute right-14 top-14 h-10 w-10 rounded-full bg-[#E3A526]" />
                <div className="relative rounded-[2rem] border border-black/8 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                    Engineering focus
                  </p>
                  <div className="mt-7 h-px w-full bg-black/10" />
                  <p className="mt-6 text-sm leading-6 text-black/65">
                    Power, steam, process, controls and protection considered
                    together where the engineering question crosses system
                    boundaries.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-[#E3A526] via-[#E3A526] to-[#B41448]" />
      </section>

      {/* INDUSTRY CHALLENGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <SectionLabel>Industry Challenge</SectionLabel>
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Where system interactions become an operating risk
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-black/70 sm:text-2xl sm:leading-10">
                  {industry.challenge}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DARK CONTEXT BAND */}
      <section className="relative bg-[#191919] text-white">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#B41448]/8" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E3A526]">
                  The Solvina perspective
                </p>
                <p className="mt-4 max-w-4xl text-xl leading-8 text-white/75">
                  The useful engineering question is not only whether individual
                  equipment performs correctly, but how the connected system
                  behaves when operating conditions change.
                </p>
              </div>
              <div className="hidden h-20 w-20 rounded-full border border-[#E3A526]/40 p-2 lg:block">
                <div className="h-full w-full rounded-full border border-[#B41448]/60" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHERE SOLVINA ADDS VALUE */}
      <section className="bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionLabel>Where Solvina Adds Value</SectionLabel>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Relevant expertise, connected to the industry's real questions
              </h2>
              <p className="mt-5 text-lg leading-8 text-black/60">
                The capabilities below are selected for their relevance to this
                industry rather than presented as a generic service catalogue.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-2">
            {industry.whereSolvinaAddsValue.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="h-full">
                <Link
                  href="/expertise/"
                  className="group relative block h-full bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#fffdfa] sm:p-9"
                >

                  <h3 className="max-w-md text-xl font-semibold leading-7 text-[#1b1b1b]">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-3 max-w-md leading-7 text-black/55">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-8 h-1 w-12 overflow-hidden rounded-full bg-[#E3A526] transition-all duration-500 group-hover:w-20" />
                  <div className="mb-10 absolute bottom-0 right-5 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#B41448] transition group-hover:border-[#E3A526] group-hover:bg-[#E3A526] group-hover:text-black">
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TYPICAL APPLICATIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <SectionLabel>Typical Applications</SectionLabel>
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Engineering support where operating behaviour matters
              </h2>
              <p className="mt-6 max-w-md leading-7 text-black/55">
                Typical applications are framed around the engineering
                situations addressed in the approved industry content.
              </p>
            </Reveal>

            <div className="border-t border-black/10">
              {industry.typicalApplications.map((application, index) => (
                <Reveal key={application} delay={index * 80}>
                  <div className="group gap-4 border-b border-black/10 py-7 sm:items-center">
                    <p className="text-lg leading-7 text-black/75 transition group-hover:text-black">
                      {application}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section className="bg-[#f5f2ed]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <Reveal>
              <SectionLabel>Relevant Evidence</SectionLabel>
              <h2 className="max-w-md text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
                Experience grounded in real engineering work
              </h2>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#B41448]">
                <span className="h-2 w-2 rounded-full bg-[#E3A526]" />
                Publication controlled
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.05)] sm:p-11">
                <span className="absolute left-8 top-8 text-5xl font-serif leading-none text-[#E3A526]/40 sm:left-11 sm:top-10">
                  “
                </span>
                <p className="relative pt-8 text-xl leading-9 text-black/70 sm:text-2xl sm:leading-10">
                  {industry.relevantEvidence}
                </p>
                <div className="mt-10 h-px bg-black/10" />
                <p className="mt-5 text-sm leading-6 text-black/45">
                  Customer names, outcomes and quotations are shown only where
                  the relevant publication permission has been confirmed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECHNICAL INSIGHT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="rounded-[2rem] bg-[#191919] p-8 text-white sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <SectionLabel>Technical Insight</SectionLabel>
                  <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                    Go deeper into the engineering capabilities behind this
                    industry
                  </h2>
                  <p className="mt-5 leading-7 text-white/60">
                    Explore the related expertise pages for the methods,
                    technical scope and engineering questions most relevant to{" "}
                    {industry.title.toLowerCase()}.
                  </p>
                </div>

                <Link
                  href="/expertise/"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#E3A526] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white"
                >
                  Explore Relevant Expertise
                  <Arrow />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED EXPERTISE */}
      <section className="border-t border-black/8 bg-[#faf9f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel>Related Expertise</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              Continue exploring
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {relatedExpertise.map((page, index) => (
              <Reveal key={page} delay={index * 60}>
                <Link
                  href="/expertise/"
                  className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black/70 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#E3A526] hover:text-[#B41448]"
                >
                  {page}
                  <Arrow />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#B41448] text-white">
        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 left-[-80px] h-72 w-72 rounded-full border border-[#E3A526]/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E3A526]">
                Start with the engineering question
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {industry.ctas.secondary}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Tell us what the plant needs to understand, prove, test or
                improve. We can identify the relevant engineering scope from
                there.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E3A526] px-7 py-4 text-sm font-bold text-black transition hover:bg-white"
              >
                {industry.ctas.secondary}
                <Arrow />
              </Link>

              <Link
                href="/expertise/"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-[#B41448]"
              >
                {industry.ctas.primary}
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx>{`
        .industry-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .industry-reveal--visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}

export default IndustryDetailLayout;
