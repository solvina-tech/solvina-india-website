"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/assets";

/* ==========================================================================
   ICONS
   ========================================================================== */

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

/* ==========================================================================
   PRODUCTS DATA
   ========================================================================== */

const products = [
  {
    number: "01",
    title: "Operator Training Simulator",
    slug: "operator-training-simulator",
    short:
      "A centralized, browser-based simulation platform designed to build confident, operationally ready personnel through realistic, physics-based training.",
    tags: [
      "Operator Training",
      "Simulation",
      "FMU-Based",
      "SCADA Design",
    ],
    image: assetPath("/images/products/ots.jpg"),
  },
];

/* ==========================================================================
   PRODUCT CARD
   ========================================================================== */

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <article
      className={`group relative border-t border-black/[0.08] py-8 md:py-10 ${
        index === 0 ? "border-t-0 pt-0 md:pt-0" : ""
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
        <div>
          <div className="flex items-start gap-5">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#E3A526] lg:hidden">
              {product.number}
            </span>

            <h3 className="text-2xl font-medium leading-[1.1] tracking-[-0.035em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] md:text-3xl">
              {product.title}
            </h3>
          </div>

          <p className="mt-5 max-w-2xl text-[14px] leading-7 text-black/55 md:text-[15px]">
            {product.short}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-black/[0.02]
                  px-3
                  py-1.5
                  text-[9px]
                  uppercase
                  tracking-[0.08em]
                  text-black/45
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/products/${product.slug}/`}
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#B41448]
              transition-colors
              hover:text-[#9F103F]
            "
          >
            Explore Product

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="relative hidden overflow-hidden rounded-[20px] border border-black/[0.08] bg-[#ECEBE6] lg:block">
          <div className="aspect-[4/3]">
            <img
              src={product.image}
              alt=""
              className="
                h-full
                w-full
                object-cover
                opacity-75
                grayscale
                transition-all
                duration-700
                group-hover:scale-[1.04]
                group-hover:opacity-100
                group-hover:grayscale-0
              "
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/35" />

            <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-[#E3A526]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#E3A526] to-[#B41448] transition-all duration-500 group-hover:w-full" />
    </article>
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
      text: "Define the engineering question, training objective and operational context.",
    },
    {
      number: "02",
      title: "Model",
      text: "Prepare or validate the simulation model and test configuration.",
    },
    {
      number: "03",
      title: "Simulate",
      text: "Run relevant scenarios, controlled events and training exercises.",
    },
    {
      number: "04",
      title: "Evaluate",
      text: "Analyse operator response, system behaviour and training outcomes.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F7F4] text-[#202020]">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#B41448]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#E3A526]" />

            <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
              Engineering Purpose
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl">
            Tools with a Clear Engineering Purpose
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-black/50">
            Digital tools support analysis, training, testing, decision support
            and model-based validation. The appropriate next step is an
            engineering discussion rather than a generic product demonstration.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative border-b border-black/[0.08] p-7 transition-colors duration-300 hover:bg-[#B41448]/[0.025] ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index < 2 ? "lg:border-r" : ""} ${
                  index >= 2 ? "lg:border-t" : ""
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#E3A526]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-medium tracking-[-0.025em] text-[#202020]">
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
      label: "Expertise",
      description: "Explore our engineering capabilities and technical depth.",
      href: "/expertise/",
    },
    {
      label: "Industries",
      description: "See how our tools apply across industrial sectors.",
      href: "/industries/",
    },
    {
      label: "Projects & Case Studies",
      description: "Reference experience and engineering evidence.",
      href: "/projects/",
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
              className="
                group
                rounded-[20px]
                border
                border-black/[0.08]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E3A526]/50
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]
              "
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

export default function ProductsPage() {
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

        <div
          className="pointer-events-none absolute -right-60 top-1/4 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#B41448]/[0.08] blur-[140px]"
        />

        {/* Gold accent */}

        <div
          className="pointer-events-none absolute -left-40 bottom-1/4 h-[400px] w-[400px] translate-y-1/2 rounded-full bg-[#E3A526]/[0.06] blur-[120px]"
        />

        {/* Content */}

        <div className="relative mx-auto max-w-[1400px] px-5 py-32 md:px-10 md:py-40 lg:px-16">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#E3A526]">
                Engineering Tools
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-6xl">
              Engineering Tools That Make Complex System Behaviour Visible and
              Testable
            </h1>

            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/50 md:text-[16px]">
              Digital tools support analysis, training, testing, decision
              support and model-based validation. The appropriate next step is
              an engineering discussion rather than a generic product
              demonstration.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          PRODUCTS LIST
      ================================================================== */}

      <section className="relative bg-[#F7F7F4]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24 lg:px-16">
          <div className="mb-16">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B41448]" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#B41448]">
                Available Tools
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-medium leading-[1.02] tracking-[-0.045em] md:text-4xl">
              Engineering Tools and Platforms
            </h2>
          </div>

          <div className="space-y-0">
            {products.map((product, index) => (
              <ProductCard key={product.slug} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          ENGINEERING APPROACH
      ================================================================== */}

      <EngineeringApproach />

      {/* ==================================================================
          RELATED CONTENT
      ================================================================== */}

      <RelatedContent />
    </main>
  );
}
