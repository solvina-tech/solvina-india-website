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
import { knowledgeOverview } from "@/data/knowledgeSection";

const iconMap = {
  "Technical Article": Gauge,
  "Case Study": Lightbulb,
  "Standards / Grid Code Update": FileText,
  Whitepaper: BookOpen,
  Publication: FileText,
};

function ContentType({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-[2px] w-6 bg-[#E3A526]" />

      <span className="text-[9px] font-bold tracking-[0.18em] text-[#B41448] uppercase">
        {children}
      </span>
    </div>
  );
}

export default function KnowledgeCentreSection() {
  const featured =
    knowledgeOverview.find((item) => item.featured) || knowledgeOverview[0];
  const articles = knowledgeOverview.filter((item) => !item.featured);

  const showSimpleGrid = articles.length === 0;
  const displayArticles = showSimpleGrid ? knowledgeOverview : articles;

  return (
    <section
      id="knowledge-center"
      className="relative overflow-hidden bg-[#F7F7F4]"
    >
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.55,
          }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
                Knowledge Centre
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.25rem]">
              Engineering insight for
              <span className="block text-black/40">
                complex industrial systems.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
              Technical articles, standards updates and engineering insights
              that explore the questions behind complex power, process, control
              and utility systems.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SIMPLE GRID (when only one article)
        ===================================================== */}

        {showSimpleGrid ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {knowledgeOverview.map((article, index) => {
              const Icon =
                iconMap[article.type as keyof typeof iconMap] || FileText;

              return (
                <Link key={article.id} href={`/knowledge/${article.slug}`}>
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
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group relative flex min-h-[280px] flex-col justify-between gap-5 border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E3A526]/50 hover:shadow-[0_18px_45px_rgba(23,26,24,0.06)] sm:p-7"
                  >
                    <div>
                      <ContentType>{article.type}</ContentType>

                      <h3 className="mt-4 text-lg leading-[1.2] font-semibold tracking-[-0.02em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] sm:text-xl">
                        {article.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/45">
                        {article.teaser}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/[0.08] bg-[#F7F7F4] transition-colors duration-300 group-hover:border-[#E3A526]/50">
                        <Icon
                          size={17}
                          strokeWidth={1.4}
                          className="text-[#B41448]"
                        />
                      </div>

                      <ArrowRight
                        size={17}
                        strokeWidth={1.5}
                        className="shrink-0 text-black/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B41448]"
                      />
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Link href={`/knowledge/${featured.slug}`}>
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
                className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-[#0D1724] p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,26,24,0.06)] sm:p-9 lg:min-h-[420px] lg:p-10"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#E3A526]/10 blur-[100px]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#B41448] via-[#E3A526] to-transparent"
                />

                <div className="relative z-10 flex items-start justify-between">
                  <ContentType>{featured.type}</ContentType>
                </div>

                <div className="relative z-10">
                  <h3 className="max-w-xl text-2xl leading-[1.12] font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#B41448] sm:text-3xl lg:text-[2.25rem]">
                    {featured.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/55 sm:text-[15px]">
                    {featured.teaser}
                  </p>
                </div>

                {/* CTA */}

                <div className="relative z-10 mt-10 border-t border-white/10 pt-5">
                  <div className="group/link inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors duration-300 hover:text-[#9F103F]">
                    Read insight
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            </Link>

            {/* ===================================================
                SECOND ARTICLE (WHITE THEME)
            =================================================== */}

            {displayArticles.map((article, index) => {
              const Icon =
                iconMap[article.type as keyof typeof iconMap] || FileText;

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
                    className="group relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-white p-7 text-[#202020] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,26,24,0.06)] sm:p-9 lg:min-h-[420px] lg:p-10"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#E3A526]/10 blur-[100px]"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#B41448] via-[#E3A526] to-transparent"
                    />

                    <div className="relative z-10 flex items-start justify-between">
                      <ContentType>{article.type}</ContentType>
                    </div>

                    <div className="relative z-10">
                      <h3 className="max-w-xl text-2xl leading-[1.12] font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#B41448] sm:text-3xl lg:text-[2.25rem]">
                        {article.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-6 text-black/55 sm:text-[15px]">
                        {article.teaser}
                      </p>
                    </div>

                    {/* CTA */}

                    <div className="relative z-10 mt-10 border-t border-black/[0.08] pt-5">
                      <div className="group/link inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors duration-300 hover:text-[#9F103F]">
                        Read insight
                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              );
            })}
          </div>
        )}

        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-7 flex justify-end"
        >
          <Link
            href="/knowledge"
            className="
              group
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
            View all insights

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
