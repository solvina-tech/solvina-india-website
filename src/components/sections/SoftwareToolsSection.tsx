"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MonitorPlay, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { assetPath } from "@/lib/assets";

const tools = [
  // {
  //   id: "solvtree",
  //   name: "SolvTREE",
  //   description:
  //     "Real-time asset performance and supply-chain management for furnace, caster and rolling operations.",
  //   icon: Activity,
  //   frame: "dashboard", // multi-panel KPI dashboard mockup
  // },
  // {
  //   id: "simpow",
  //   name: "SIMPOW",
  //   description:
  //     "Power system simulation software for load-flow, short-circuit and dynamic stability studies.",
  //   icon: Zap,
  //   frame: "chart", // waveform/oscillogram mockup
  // },
  {
    id: "solvsim",
    name: "SolvOTS",
    description:
      "Browser-based, physics-driven operator training simulator with scenario and fault-injection libraries.",
    icon: MonitorPlay,
    href: "/products/operator-training-simulator",
    images: [
      "/images/products/ots/ots-1.png",
      "/images/products/ots/ots-2.png",
      "/images/products/ots/ots-3.png",
      "/images/products/ots/ots-4.png",
    ],
  },
  // {
  //   id: "solvit",
  //   name: "SolvIT",
  //   description:
  //     "Centralised monitoring of protection relays, energy meters and power-quality meters across sites.",
  //   icon: Radio,
  //   frame: "grid", // sensor/meter tile grid mockup
  // },
];

/** Bounded image carousel — no wraparound, rounded arrow controls, dot indicators. */
function ImageCarousel({
  images,
  href,
}: {
  images: string[];
  href: string;
}) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [failedMap, setFailedMap] = useState<Record<number, boolean>>({});

  const canGoPrev = index > 0;
  const canGoNext = index < images.length - 1;

  function goPrev(event: React.MouseEvent) {
    event.stopPropagation();
    if (canGoPrev) setIndex((current) => current - 1);
  }

  function goNext(event: React.MouseEvent) {
    event.stopPropagation();
    if (canGoNext) setIndex((current) => current + 1);
  }

  return (
    <div
      className="group/carousel relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-[#12131A]"
      onClick={() => router.push(href)}
    >
      {/* faux browser chrome */}
      <div className="relative z-10 flex items-center gap-1.5 border-b border-white/[0.06] bg-[#12131A] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>

      {/* slides */}
      <div className="relative h-[calc(100%-28px)] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-400 ease-out"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={src + i}
              className="relative h-full shrink-0"
              style={{ width: `${100 / images.length}%` }}
            >
              {failedMap[i] ? (
                <div className="flex h-full w-full items-center justify-center bg-white/[0.03]">
                  <span className="text-[11px] text-white/25">Image placeholder</span>
                </div>
              ) : (
                <img
                  src={assetPath(src)}
                  alt=""
                  onError={() =>
                    setFailedMap((current) => ({ ...current, [i]: true }))
                  }
                  className="h-full w-full object-fill"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* vignette so the mock never competes with real content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/40 via-transparent to-transparent" />

      {/* prev / next arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label="Previous image"
            className="absolute top-1/2 left-2.5 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:bg-black/70 disabled:pointer-events-none disabled:opacity-0"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label="Next image"
            className="absolute top-1/2 right-2.5 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover/carousel:opacity-100 hover:bg-black/70 disabled:pointer-events-none disabled:opacity-0"
          >
            <ChevronRight size={15} />
          </button>

          {/* dot indicators */}
          <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-white/85" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[number];
  index: number;
}) {
  const Icon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/[0.16]"
    >
      <ImageCarousel images={tool.images} href={tool.href} />
      <div className="mt-4 flex items-start gap-3" onClick={() => window.open(tool.href)}>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
          <Icon strokeWidth={1.5} className="h-4 w-4 text-white/60" />
        </span>
        <div>
          <h4 className="text-sm font-bold text-white/90">{tool.name}</h4>
          <p className="mt-1 text-[13px] leading-5 text-white/45">
            {tool.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SoftwareToolsSection() {
  return (
    <section className="bg-[#0A0B0F] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#E3A526]" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#E3A526] uppercase sm:text-xs">
              Software &amp; Engineering Tools
            </span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-white/90 sm:text-2xl">
            The tools behind the engineering
          </h3>
          <p className="mt-2 text-sm text-white/45">
            Verified, currently active platforms — supporting the work, not the
            headline.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3">
          {tools.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}