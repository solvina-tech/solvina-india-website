"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  User,
  Tag,
  BookOpen,
} from "lucide-react";
import type { KnowledgeItem } from "@/data/knowledgeSection";

interface KnowledgeArticlePageProps {
  item: KnowledgeItem;
}

export default function KnowledgeArticlePage({
  item,
}: KnowledgeArticlePageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F4] text-[#171A18]">
      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="relative flex min-h-[70vh] items-center border-b border-[#DDE1DC] bg-white pt-10 pb-20">
        {/* subtle technical grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(#171A18 1px, transparent 1px),
              linear-gradient(90deg, #171A18 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* technical circles */}

        <div className="pointer-events-none absolute -right-40 top-24 hidden h-[520px] w-[520px] rounded-full border border-[#B41448]/10 lg:block" />

        <div className="pointer-events-none absolute -right-16 top-56 hidden h-[280px] w-[280px] rounded-full border border-[#E3A526]/30 lg:block" />

        <div className="pointer-events-none absolute right-24 top-72 hidden h-3 w-3 rounded-full bg-[#E3A526] lg:block" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
            {/* heading */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B41448]" />

                <span className="text-xs font-medium tracking-[0.22em] text-[#687068] uppercase">
                  {item.article.eyebrow || item.type}
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-medium tracking-[-0.05em]">
                {item.article.title}
              </h1>

              {item.article.subtitle && (
                <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#5F675F] lg:text-2xl">
                  {item.article.subtitle}
                </p>
              )}
            </motion.div>

            {/* metadata */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:pb-3"
            >
              <div className="border-l-2 border-[#E3A526] pl-7 lg:pl-10">
                <div className="space-y-4">
                  {item.author && (
                    <div className="flex items-center gap-3">
                      <User size={16} className="text-[#B41448]" />
                      <span className="text-sm text-[#5F675F]">
                        {Array.isArray(item.author) ? item.author.join(", ") : item.author}
                      </span>
                    </div>
                  )}

                  {item.publication && (
                    <div className="flex items-center gap-3">
                      <BookOpen size={16} className="text-[#B41448]" />
                      <span className="text-sm text-[#5F675F]">
                        {item.publication}
                      </span>
                    </div>
                  )}

                  {item.publicationYear && (
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-[#B41448]" />
                      <span className="text-sm text-[#5F675F]">
                        {item.publicationYear}
                      </span>
                    </div>
                  )}

                  {item.readingTime && (
                    <div className="flex items-center gap-3">
                      <Clock size={16} className="text-[#B41448]" />
                      <span className="text-sm text-[#5F675F]">
                        {item.readingTime}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#D6DBD5] bg-[#F7F7F4] px-3 py-1.5 text-xs text-[#5C655D]"
                    >
                      <Tag size={12} className="text-[#B41448]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          ABSTRACT
      ================================================================ */}

      {item.article.abstract && (
        <section className="bg-[#0D1724] py-16 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#E3A526]" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
                  Abstract
                </span>
              </div>
              <p className="text-lg leading-relaxed text-white/80 lg:text-xl">
                {item.article.abstract}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================================================================
          INTRODUCTION
      ================================================================ */}

      {item.article.introduction && (
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="mb-8 text-3xl font-medium tracking-[-0.035em] text-[#202020] lg:text-4xl">
                {item.article.introduction.heading}
              </h2>
              <div className="space-y-6">
                {item.article.introduction.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-[#5F675F] lg:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================================================================
          CONTENT SECTIONS
      ================================================================ */}

      {item.article.sections.map((section, sectionIndex) => (
        <section
          key={section.heading}
          className={`py-20 lg:py-28 ${
            sectionIndex % 2 === 0 ? "bg-[#F7F7F4]" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h2 className="mb-8 text-3xl font-medium tracking-[-0.035em] text-[#202020] lg:text-4xl">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-[#5F675F] lg:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-8 space-y-4">
                  {section.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E3A526]" />
                      <span className="text-lg leading-relaxed text-[#5F675F] lg:text-xl">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ================================================================
          KEY TAKEAWAYS
      ================================================================ */}

      {item.article.keyTakeaways && item.article.keyTakeaways.length > 0 && (
        <section className="relative overflow-hidden bg-[#25201D] py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full border border-[#E3A526]/10" />

          <div className="pointer-events-none absolute -right-16 top-16 h-[300px] w-[300px] rounded-full border border-[#B41448]/20" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E3A526]" />
                <span className="text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
                  Key Takeaways
                </span>
              </div>

              <h2 className="mb-10 text-3xl font-medium tracking-[-0.035em] lg:text-4xl">
                What you'll learn
              </h2>

              <div className="space-y-6">
                {item.article.keyTakeaways.map((takeaway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E3A526]" />
                    <span className="text-lg leading-relaxed text-white/90 lg:text-xl">
                      {takeaway}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================================================================
          CONCLUSION
      ================================================================ */}

      {item.article.conclusion && (
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B41448]" />
                <span className="text-xs font-medium tracking-[0.2em] text-black/40 uppercase">
                  Conclusion
                </span>
              </div>

              <p className="text-xl leading-relaxed text-[#5F675F] lg:text-2xl">
                {item.article.conclusion}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ================================================================
          CTA
      ================================================================ */}

      <section className="relative overflow-hidden bg-[#E3A526] py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border-[80px] border-black/[0.035]" />

        <div className="pointer-events-none absolute -bottom-48 -left-20 h-[480px] w-[480px] rounded-full border border-black/[0.08]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#171A18]" />

              <span className="text-xs tracking-[0.2em] text-black/50 uppercase">
                Explore More
              </span>
            </div>

            <h2 className="mt-7 max-w-5xl text-4xl leading-[0.92] font-medium tracking-[-0.05em] text-[#171A18] lg:text-6xl">
              Have a project that requires
              <br />
              <span className="text-[#B41448]">
                dynamic simulation expertise?
              </span>
            </h2>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-3 rounded-full bg-[#171A18] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B41448]"
              >
                Get in touch

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 text-sm font-medium text-[#171A18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.05]"
              >
                Back to homepage
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
