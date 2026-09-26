"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ExternalLink,
  FlaskConical,
  ChevronRight,
} from "lucide-react";

import type { Product, ProductSection } from "@/data/product_details";
import EnquiryCTA from "@/components/forms/EnquiryCTA";
import ProductCarousel from "./ProductCarousel";

interface ProductPageLayoutProps {
  product: Product;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
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
      staggerChildren: 0.07,
    },
  },
};

export default function ProductPageLayout({ product }: ProductPageLayoutProps) {
  return (
    <main className="relative overflow-hidden bg-[#f6f7f5] text-[#102033] dark:bg-[#09131f] dark:text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f6f7f5] dark:bg-[#09131f]" />

          <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#e7ece9] blur-3xl dark:bg-[#112638]" />

          <div className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#edf0ee] blur-3xl dark:bg-[#0e2434]" />

          <div
            className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#102033 1px, transparent 1px), linear-gradient(90deg, #102033 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />
        </div>

        <div className="mx-auto flex max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12 lg:py-14">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#E3A526]" />

              <span className="text-xs font-bold tracking-[0.2em] text-[#B41448] uppercase dark:text-[#E3A526]">
                {product.hero.eyebrow}
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full border border-[#d9dfdc] bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#405161] dark:border-white/10 dark:bg-white/[0.04] dark:text-[#b9c5cf]">
                {product.category}
              </span>

              <span className="text-xs font-semibold tracking-[0.15em] text-[#7a8791] uppercase">
                {product.shortName}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl leading-[1.04] font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              {product.hero.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-[#53616d] sm:text-lg dark:text-[#aab6c0]"
            >
              {product.hero.supportingCopy}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <EnquiryCTA
                label={product.hero.primaryCta}
                type={product.hero.primaryCta}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#102033] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#172d43] dark:bg-white dark:text-[#102033] dark:hover:bg-[#e8ecef]"
              />

              {product.externalLink && (
                <a
                  href={product.externalLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfd7d4] bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#263746] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#aebbb6] dark:border-white/15 dark:bg-white/[0.04] dark:text-[#d8e0e5] dark:hover:border-white/25"
                >
                  {product.externalLink.label}
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-1"
          >
            <ProductCarousel
              images={product.images}
              productName={product.name}
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING PROBLEM
      ========================================================= */}
      <ProductSection
        id="engineering-problem"
        eyebrow="THE ENGINEERING PROBLEM"
        section={product.engineeringProblem}
      />

      {/* =========================================================
          ENGINEERING PURPOSE
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#102033] py-20 text-white sm:py-24 dark:bg-[#07111c]">
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
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

          {product.engineeringPurpose.paragraphs &&
            product.engineeringPurpose.paragraphs.length > 0 && (
              <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
                {product.engineeringPurpose.paragraphs.map(
                  (paragraph, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={fadeUp}
                      className="border-l border-white/20 pl-5"
                    >
                      <p className="text-sm leading-7 text-[#b9c5ce] sm:text-base">
                        {paragraph}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            )}

          {product.capabilities && product.capabilities.length > 0 && (
            <div className="mt-16">
              <div className="mb-7 flex items-center gap-5">
                <h3 className="text-xl font-semibold">Core Capabilities</h3>

                <div className="hidden h-px flex-1 bg-white/10 sm:block" />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
                className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
              >
                {product.capabilities.map((capability) => (
                  <motion.div
                    key={capability.title}
                    variants={fadeUp}
                    className="bg-[#14283a] p-6 transition-colors duration-300 hover:bg-[#193147] dark:bg-[#0d1e2d] dark:hover:bg-[#12283a]"
                  >
                    <h4 className="text-base font-semibold">
                      {capability.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-[#aebbc5]">
                      {capability.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          WORKFLOW
      ========================================================= */}
      <section className="bg-[#f6f7f5] py-20 sm:py-24 dark:bg-[#09131f]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="TYPICAL WORKFLOW"
            title={product.workflow.title}
            lead="A structured workflow keeps the tool connected to the engineering question."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="mt-10"
          >
            {product.workflow.items?.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="group grid border-t border-[#d7ddda] py-6 md:grid-cols-[80px_1fr_auto] md:items-center md:gap-8 dark:border-white/10"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-[#B41448] dark:text-[#E3A526]">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-lg font-medium tracking-tight text-[#203343] md:mt-0 md:text-xl dark:text-[#dce4e9]">
                  {item}
                </h3>

                <ChevronRight
                  size={18}
                  className="hidden text-[#9aa6a1] transition-transform duration-300 group-hover:translate-x-1 md:block"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL SCOPE
      ========================================================= */}
      <section className="border-y border-[#dfe4e1] bg-white py-20 sm:py-24 dark:border-white/10 dark:bg-[#0c1824]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="TECHNICAL SCOPE"
              title={product.technicalScope.title}
              lead="The scope identifies what the product addresses without extending beyond the available evidence."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
            >
              {product.technicalScope.items?.map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex gap-4 border-b border-[#e1e5e3] py-5 first:border-t dark:border-white/10"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf0ee] text-xs font-semibold text-[#53616d] dark:bg-white/10 dark:text-[#c2ccd3]">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-[#53616d] dark:text-[#aebac4]">
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
        className="relative overflow-hidden bg-[#102033] py-24 text-white dark:bg-[#07111c]"
      >
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5"
            >
              <FlaskConical size={21} className="text-[#E3A526]" />
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.2em] text-[#E3A526]"
            >
              ENGINEERING QUESTION
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              {product.engineeringQuestionCta.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#b8c4cd] sm:text-base"
            >
              {product.engineeringQuestionCta.lead}
            </motion.p>

            {product.engineeringQuestionCta.paragraphs?.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#8f9da8]"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <EnquiryCTA
                label={product.hero.primaryCta}
                type={product.hero.primaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#102033] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eef1f3]"
              />

              <EnquiryCTA
                label={product.hero.secondaryCta}
                type={product.hero.secondaryCta}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/5"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   GENERIC PRODUCT SECTION
========================================================= */

function ProductSection({
  id,
  eyebrow,
  section,
}: {
  id: string;
  eyebrow: string;
  section: ProductSection;
}) {
  return (
    <section
      id={id}
      className="border-t border-[#dfe4e1] bg-white py-20 sm:py-24 dark:border-white/10 dark:bg-[#0c1824]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow={eyebrow}
          title={section.title}
          lead={section.lead}
        />

        {section.paragraphs && section.paragraphs.length > 0 && (
          <div className="mt-10 grid gap-7 lg:grid-cols-2 lg:gap-12">
            {section.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="text-sm leading-7 text-[#5b6873] sm:text-base dark:text-[#aebac4]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        )}

        {section.items && section.items.length > 0 && (
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {section.items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#dfe4e1] bg-[#f8f9f8] p-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <p className="text-sm leading-6 text-[#53616d] dark:text-[#aebac4]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="max-w-4xl"
    >
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-[#E3A526]" />

        <span
          className={`text-xs font-bold tracking-[0.2em] uppercase ${
            dark ? "text-[#E3A526]" : "text-[#B41448] dark:text-[#E3A526]"
          }`}
        >
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        variants={fadeUp}
        className={`text-3xl font-semibold tracking-[-0.03em] sm:text-4xl ${
          dark ? "text-white" : "text-[#102033] dark:text-white"
        }`}
      >
        {title}
      </motion.h2>

      {lead && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 w-full text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-[#aebbc4]" : "text-[#5b6873] dark:text-[#aebac4]"
          }`}
        >
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
