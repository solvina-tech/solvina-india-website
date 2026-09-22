"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  ExternalLink,
  FlaskConical,
  Gauge,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type { Product } from "@/data/product_details";
import EnquiryCTA from "@/components/forms/EnquiryCTA";

interface ProductPageLayoutProps {
  product: Product;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ProductPageLayout({ product }: ProductPageLayoutProps) {
  return (
    <main className="relative overflow-hidden bg-[#f6f7f5] text-[#102033] dark:bg-[#09131f] dark:text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate min-h-[82vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f6f7f5] dark:bg-[#09131f]" />

          <div className="absolute top-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#e7ece9] blur-3xl dark:bg-[#112638]" />

          <div className="absolute bottom-[-20%] left-[-10%] h-[450px] w-[450px] rounded-full bg-[#edf0ee] blur-3xl dark:bg-[#0e2434]" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#102033 1px, transparent 1px), linear-gradient(90deg, #102033 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#e56b2f]" />

              <span className="text-sm font-semibold tracking-[0.22em] text-[#e56b2f]">
                {product.hero.eyebrow}
              </span>
            </motion.div>

            {/* Product name */}
            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full border border-[#d9dfdc] bg-white/70 px-4 py-2 text-sm font-medium text-[#405161] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-[#b9c5cf]">
                {product.name}
              </span>

              <span className="text-sm font-semibold tracking-[0.16em] text-[#7a8791] dark:text-[#71808d]">
                {product.shortName}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl leading-[1.04] font-semibold tracking-[-0.035em] sm:text-6xl lg:text-7xl"
            >
              {product.hero.headline}
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#53616d] sm:text-xl dark:text-[#aab6c0]"
            >
              {product.hero.supportingCopy}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#engineering-question"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#102033] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#172d43] dark:bg-white dark:text-[#102033] dark:hover:bg-[#e8ecef]"
              >
                {product.hero.primaryCta}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#engineering-problem"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfd7d4] bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#263746] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#aebbb6] dark:border-white/15 dark:bg-white/[0.04] dark:text-[#d8e0e5] dark:hover:border-white/25"
              >
                {product.hero.secondaryCta}
              </a>
            </motion.div>

            {/* Bottom metadata */}
            <motion.div
              variants={fadeUp}
              className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#dfe4e1] pt-6 dark:border-white/10"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#7a8791] uppercase">
                  Product
                </p>

                <p className="mt-1 text-sm font-medium">{product.shortName}</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#7a8791] uppercase">
                  Scope
                </p>

                <p className="mt-1 max-w-md text-sm text-[#53616d] dark:text-[#aab6c0]">
                  Engineering-focused simulation and training
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING PROBLEM
      ========================================================= */}
      <section
        id="engineering-problem"
        className="border-t border-[#dfe4e1] bg-white py-24 dark:border-white/10 dark:bg-[#0c1824]"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="THE ENGINEERING PROBLEM"
            title={product.engineeringProblem.title}
            lead={product.engineeringProblem.lead}
          />

          {product.engineeringProblem.paragraphs && (
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
              {product.engineeringProblem.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="text-base leading-8 text-[#5b6873] dark:text-[#aebac4]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          ENGINEERING PURPOSE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#102033] py-24 text-white dark:bg-[#07111c]">
        <div className="absolute top-0 right-0 h-full opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="ENGINEERING PURPOSE"
            title={product.engineeringPurpose.title}
            lead={product.engineeringPurpose.lead}
            dark
          />

          {product.engineeringPurpose.paragraphs && (
            <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-16">
              {product.engineeringPurpose.paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  className="border-l border-white/20 pl-6"
                >
                  <p className="text-base leading-8 text-[#b9c5ce]">
                    {paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Capabilities */}
          <div className="mt-20">
            <div className="mb-8 flex items-center justify-between gap-6">
              <h3 className="text-2xl font-semibold tracking-tight">
                Core Platform Capabilities
              </h3>

              <div className="hidden h-px flex-1 bg-white/10 sm:block" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2"
            >
              {product.capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  variants={fadeUp}
                  className="group bg-[#14283a] p-7 transition-colors duration-300 hover:bg-[#193147] dark:bg-[#0d1e2d] dark:hover:bg-[#12283a]"
                >
                  <h4 className="text-lg font-semibold">{capability.title}</h4>

                  <p className="mt-3 text-sm leading-7 text-[#aebbc5]">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TYPICAL WORKFLOW
      ========================================================= */}
      <section className="bg-[#f6f7f5] py-24 dark:bg-[#09131f]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="TYPICAL WORKFLOW"
            title={product.workflow.title}
            lead="A structured engineering workflow keeps simulation activity connected to the question being investigated."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-14"
          >
            {product.workflow.items?.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="group grid border-t border-[#d7ddda] py-7 md:grid-cols-[100px_1fr_auto] md:items-center md:gap-8 dark:border-white/10"
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-[#e56b2f]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-xl font-medium tracking-tight text-[#203343] md:mt-0 md:text-2xl dark:text-[#dce4e9]">
                  {item}
                </h3>

                <ChevronRight
                  className="mt-4 hidden text-[#a2ada8] transition-transform duration-300 group-hover:translate-x-1 md:mt-0 md:block"
                  size={20}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SCOPE
      ========================================================= */}
      <section className="border-y border-[#dfe4e1] bg-white py-24 dark:border-white/10 dark:bg-[#0c1824]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <SectionHeading
              eyebrow="TECHNICAL SCOPE"
              title={product.technicalScope.title}
              lead="The scope should make clear what the tool addresses and where engineering validation remains necessary."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="space-y-0"
            >
              {product.technicalScope.items?.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-5 border-b border-[#e1e5e3] py-6 first:border-t dark:border-white/10"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf0ee] text-xs font-semibold text-[#53616d] dark:bg-white/10 dark:text-[#c2ccd3]">
                    {index + 1}
                  </span>

                  <p className="text-base leading-7 text-[#53616d] dark:text-[#aebac4]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Advantage */}
          <div className="mt-24">
            <div className="mb-10 flex items-center gap-5">
              <h3 className="text-2xl font-semibold tracking-tight whitespace-nowrap">
                The {product.shortName} Advantage
              </h3>

              <div className="h-px w-full bg-[#dfe4e1] dark:bg-white/10" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {product.advantage.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="rounded-2xl border border-[#dfe4e1] bg-[#f8f9f8] p-6 dark:border-white/10 dark:bg-[#101f2d]"
                >
                  <p className="text-sm leading-6 text-[#53616d] dark:text-[#b2bec7]">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING QUESTION CTA
      ========================================================= */}
      <section
        id="engineering-question"
        className="relative overflow-hidden bg-[#102033] py-28 text-white dark:bg-[#07111c]"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-7 flex justify-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                <FlaskConical size={24} className="text-[#e56b2f]" />
              </div>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold tracking-[0.2em] text-[#e56b2f]"
            >
              ENGINEERING QUESTION
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              {product.engineeringQuestionCta.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#b8c4cd] sm:text-lg"
            >
              {product.engineeringQuestionCta.lead}
            </motion.p>

            {product.engineeringQuestionCta.paragraphs?.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#8f9da8]"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >

              <EnquiryCTA
                label="Book a Demo"
                type="Book a Demo"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#102033] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef1f3]"
              />

              <EnquiryCTA
                label={product.hero.secondaryCta}
                type={product.hero.secondaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              />
              
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
}

function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="max-w-4xl"
    >
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-4">
        <span className="h-px w-8 bg-[#E3A526]" />

        <span
          className={`text-xs font-semibold tracking-[0.2em] ${
            dark ? "text-[#E3A526]" : "text-[#B41448]"
          }`}
        >
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className={`text-4xl font-semibold tracking-[-0.03em] sm:text-5xl ${
          dark ? "text-white" : "text-[#102033] dark:text-white"
        }`}
      >
        {title}
      </motion.h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`mt-6 max-w-3xl text-lg leading-8 ${
            dark ? "text-[#aebbc4]" : "text-[#5b6873] dark:text-[#aebac4]"
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}

/* =========================================================
   VALIDATION ROW
========================================================= */

interface ValidationRowProps {
  label: string;
  value: string;
}

function ValidationRow({ label, value }: ValidationRowProps) {
  return (
    <div className="grid gap-1 border-b border-[#e1e5e3] pb-4 last:border-0 last:pb-0 sm:grid-cols-[190px_1fr] sm:gap-5 dark:border-white/10">
      <p className="text-xs font-semibold tracking-[0.12em] text-[#7b8790] uppercase">
        {label}
      </p>

      <p className="text-sm leading-6 text-[#53616d] dark:text-[#aebac4]">
        {value}
      </p>
    </div>
  );
}
