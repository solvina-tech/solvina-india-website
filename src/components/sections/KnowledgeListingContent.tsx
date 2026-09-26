"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  FileText,
  Gauge,
  Lightbulb,
} from "lucide-react";
import { knowledgeItems } from "@/data/knowledgeSection";

const iconMap = {
  "Technical Article": Gauge,
  "Case Study": Lightbulb,
  "Standards / Grid Code Update": FileText,
  "Whitepaper": BookOpen,
  "Publication": FileText,
};

function ContentType({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-6 bg-[#E3A526]" />

      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B41448]">
        {children}
      </span>
    </div>
  );
}

export default function KnowledgeListingContent() {
  const featured = knowledgeItems.find((item) => item.featured) || knowledgeItems[0];
  const articles = knowledgeItems.filter((item) => !item.featured);

  const FeaturedIcon = iconMap[featured.type as keyof typeof iconMap] || Gauge;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F7F4] text-[#171A18]">
      {/* ================================================================
          HEADER
      ================================================================ */}

      <section className="relative overflow-hidden bg-white pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
            }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B41448]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B41448]">
                Knowledge Centre
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-5xl lg:text-[4.5rem]">
              Engineering insight for
              <span className="block text-black/40">
                complex industrial systems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-7 text-black/55 sm:text-xl">
              Technical articles, standards updates and engineering insights
              that explore the questions behind complex power, process,
              control and utility systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          FEATURED + ARTICLE LIST
      ================================================================ */}

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ===================================================
                FEATURED ARTICLE (DARK THEME)
            =================================================== */}

            <motion.article
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                group
                relative
                flex
                min-h-[450px]
                flex-col
                justify-between
                overflow-hidden
                bg-[#0D1724]
                p-8
                text-white
                lg:min-h-[520px]
                lg:p-10
                cursor-default
              "
            >
              {/* Ambient accent */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  h-80
                  w-80
                  rounded-full
                  bg-[#B41448]/10
                  blur-[100px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  bg-gradient-to-r
                  from-[#E3A526]
                  via-[#B41448]
                  to-transparent
                "
              />

              {/* Top */}

              <div className="relative z-10 flex items-start justify-between">
                <ContentType>
                  {featured.type}
                </ContentType>

                <span className="font-mono text-[9px] tracking-[0.16em] text-white/25">
                  FEATURED
                </span>
              </div>

              {/* Icon */}

              <div className="relative z-10 mt-14">
                <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.04]">
                  <FeaturedIcon
                    size={21}
                    strokeWidth={1.4}
                    className="text-[#E3A526]"
                  />
                </div>

                <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-3xl lg:text-[2.25rem]">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50 sm:text-[15px]">
                  {featured.teaser}
                </p>
              </div>

              {/* CTA */}

              <div className="relative z-10 mt-10 border-t border-white/10 pt-5">
                <Link
                  href={`/knowledge/${featured.slug}`}
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#E3A526]
                  "
                >
                  Read insight

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5
                    "
                  />
                </Link>
              </div>
            </motion.article>

            {/* ===================================================
                SECOND ARTICLE (WHITE THEME)
            =================================================== */}

            {articles.map((article, index) => {
              const Icon = iconMap[article.type as keyof typeof iconMap] || FileText;

              return (
                <Link key={article.id} href={`/knowledge/${article.slug}`}>
                  <motion.article
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[450px]
                      flex-col
                      justify-between
                      overflow-hidden
                      bg-white
                      p-8
                      text-[#202020]
                      lg:min-h-[520px]
                      lg:p-10
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(23,26,24,0.06)]
                    "
                  >

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-32
                        -top-32
                        h-80
                        w-80
                        rounded-full
                        bg-[#E3A526]/10
                        blur-[100px]
                      "
                    />

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-gradient-to-r
                        from-[#B41448]
                        via-[#E3A526]
                        to-transparent
                      "
                    />

                    <div className="relative z-10 flex items-start justify-between">
                      <ContentType>
                        {article.type}
                      </ContentType>

                      <span className="font-mono text-[9px] tracking-[0.16em] text-black/25">
                        INSIGHT
                      </span>
                    </div>

                    <div className="relative z-10 mt-14">
                      <div className="flex h-12 w-12 items-center justify-center border border-black/[0.08] bg-[#F7F7F4] transition-colors duration-300 group-hover:border-[#E3A526]/50">
                        <Icon
                          size={21}
                          strokeWidth={1.4}
                          className="text-[#B41448]"
                        />
                      </div>

                      <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-3xl lg:text-[2.25rem] transition-colors duration-300 group-hover:text-[#B41448]">
                        {article.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-6 text-black/55 sm:text-[15px]">
                        {article.teaser}
                      </p>
                    </div>

                    {/* CTA */}

                    <div className="relative z-10 mt-10 border-t border-black/[0.08] pt-5">
                      <div
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-xs
                          font-semibold
                          text-[#B41448]
                          transition-colors
                          duration-300
                          hover:text-[#9F103F]
                        "
                      >
                        Read insight

                        <ArrowUpRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover/link:-translate-y-0.5
                            group-hover/link:translate-x-0.5
                          "
                        />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
                Work with us
              </span>
            </div>

            <h2 className="mt-7 max-w-5xl text-4xl leading-[0.92] font-medium tracking-[-0.05em] text-[#171A18] lg:text-6xl">
              Have a complex system
              <br />
              <span className="text-[#B41448]">
                that needs deeper understanding?
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
                href="/expertise/"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 text-sm font-medium text-[#171A18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/[0.05]"
              >
                View our expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
