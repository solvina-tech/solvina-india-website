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

const knowledgeItems = [
  {
    id: "01",
    type: "Technical Article",
    title:
      "Why Island Operation Testing Shouldn't Wait for a Blackout",
    teaser:
      "What a live, on-grid frequency-control test reveals that a commissioning checklist never will.",
    icon: Gauge,
    featured: true,
  },
  {
    id: "02",
    type: "Standards / Grid Code Update",
    title:
      "Reading a Grid Code: What a TSO Actually Tests For",
    teaser:
      "A practical walkthrough of FRT, ROCOF and reactive-capability requirements for Indian grid connection.",
    icon: FileText,
    featured: false,
  },
  {
    id: "03",
    type: "Technical Article",
    title:
      "The Hidden Cost of an Unvalidated Simulation Model",
    teaser:
      "Why a model that was never checked against plant data is a liability, not an asset.",
    icon: BookOpen,
    featured: false,
  },
  {
    id: "04",
    type: "Case Insight",
    title:
      "Steam Net Control: The Difference Between Tuned and Guessed",
    teaser:
      "How dynamic modelling turns a multi-header steam system from reactive to predictable.",
    icon: Lightbulb,
    featured: false,
  },
];

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

export default function KnowledgeCentreSection() {
  const featured = knowledgeItems[0];
  const articles = knowledgeItems.slice(1);

  const FeaturedIcon = featured.icon;

  return (
    <section className="relative overflow-hidden bg-[#F7F7F4]">
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

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B41448] sm:text-xs">
                Knowledge Centre
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.25rem]">
              Engineering insight for
              <span className="block text-black/40">
                complex industrial systems.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm leading-6 text-black/55 sm:text-base sm:leading-7">
              Technical articles, standards updates and engineering insights
              that explore the questions behind complex power, process,
              control and utility systems.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            FEATURED + ARTICLE LIST
        ===================================================== */}

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ===================================================
              FEATURED ARTICLE
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
              min-h-[430px]
              flex-col
              justify-between
              overflow-hidden
              bg-[#0D1724]
              p-7
              text-white
              sm:p-9
              lg:min-h-[500px]
              lg:p-10
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
                href="/knowledge-centre"
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
              ARTICLE LIST
          =================================================== */}

          <div className="flex flex-col border-y border-black/[0.08]">
            {articles.map((article, index) => {
              const Icon = article.icon;

              return (
                <motion.article
                  key={article.id}
                  initial={{
                    opacity: 0,
                    x: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-1
                    items-start
                    gap-5
                    border-b
                    border-black/[0.08]
                    bg-white
                    px-5
                    py-6
                    transition-all
                    duration-300
                    last:border-b-0
                    hover:bg-[#FBFBF9]
                    sm:px-7
                    sm:py-7
                  "
                >
                  {/* Number */}

                  <span className="hidden pt-1 font-mono text-[9px] tracking-[0.12em] text-black/20 sm:block">
                    {article.id}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      mt-0.5
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-black/[0.08]
                      bg-[#F7F7F4]
                      transition-colors
                      duration-300
                      group-hover:border-[#E3A526]/50
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#B41448]"
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">
                    <ContentType>
                      {article.type}
                    </ContentType>

                    <h3 className="mt-3 max-w-xl text-lg font-semibold leading-[1.2] tracking-[-0.02em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] sm:text-xl">
                      {article.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-xs leading-5 text-black/45 sm:text-sm sm:leading-6">
                      {article.teaser}
                    </p>
                  </div>

                  {/* Arrow */}

                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      mt-1
                      shrink-0
                      text-black/20
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#B41448]
                    "
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <motion.div
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
            href="/knowledge-centre"
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
        </motion.div>
      </div>
    </section>
  );
}