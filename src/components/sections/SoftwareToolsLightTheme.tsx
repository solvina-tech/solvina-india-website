"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
} from "lucide-react";
import { useRef, useState } from "react";

import { softwareTools } from "@/data/homepage";

function ToolVideo({
  video,
  poster,
  name,
}: {
  video: string;
  poster?: string;
  name: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: false,
    margin: "-100px",
  });

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePause = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div
      ref={containerRef}
      className="
        group
        relative
        aspect-[16/10]
        w-full
        overflow-hidden
        bg-[#111820]
      "
    >
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.015]
        "
        onMouseEnter={handlePlay}
        onMouseLeave={handlePause}
      />

      {/* Video protection */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.08]" />

      {/* Technical frame */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-white/15
          transition-all
          duration-500
          group-hover:inset-3
          group-hover:border-white/25
        "
      />

      {/* Top metadata */}
      <div className="absolute left-6 top-6 z-10">
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white/65">
          Solvina / {name}
        </span>
      </div>

      {/* Play indicator */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Play ${name} video`}
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            bg-black/30
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-105
            hover:border-[#E3A526]
            hover:bg-[#E3A526]
            hover:text-black
          "
        >
          <Play
            size={18}
            fill="currentColor"
            className="ml-0.5"
          />
        </button>
      )}

      {/* Bottom progress-style detail */}
      <div className="absolute inset-x-6 bottom-6 z-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/20">
          <motion.div
            initial={{ width: "0%" }}
            animate={{
              width: isPlaying ? "100%" : "18%",
            }}
            transition={{
              duration: isPlaying ? 8 : 0.3,
              ease: "linear",
            }}
            className="h-full bg-[#E3A526]"
          />
        </div>

        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/50">
          {isPlaying ? "Playing" : "Preview"}
        </span>
      </div>
    </div>
  );
}

export default function SoftwareToolsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5]">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#E3A526]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B41448] sm:text-xs">
                Software & Engineering Tools
              </span>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.5rem]">
              Engineering software that supports the work.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
            Tools and platforms that support simulation, training, monitoring
            and engineering decisions across complex industrial systems.
          </p>
        </motion.div>

        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:mt-24 lg:space-y-28">
          {softwareTools.map((tool, index) => {
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={tool.name}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                }}
                className="
                  grid
                  items-center
                  gap-8
                  lg:grid-cols-2
                  lg:gap-14
                  xl:gap-20
                "
              >
                {/* =================================================
                    VIDEO
                ================================================= */}

                <div
                  className={
                    reversed
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                >
                  <ToolVideo
                    video={tool.video}
                    poster={tool.poster}
                    name={tool.name}
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                  className={
                    reversed
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >
                  <div className="max-w-xl">
                    {/* Number */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#E3A526]">
                        {tool.number}
                      </span>

                      <span className="h-px w-8 bg-black/10" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#B41448]">
                        {tool.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3rem]">
                      {tool.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-5 max-w-lg text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                      {tool.description}
                    </p>

                    {/* Divider */}
                    <div className="mt-8 h-px w-full bg-black/[0.08]" />

                    {/* Navigation */}
                    <Link
                      href={tool.href}
                      className="
                        group
                        mt-5
                        inline-flex
                        items-center
                        gap-3
                        text-xs
                        font-semibold
                        text-[#B41448]
                        transition-colors
                        duration-300
                        hover:text-[#9F103F]
                      "
                    >
                      Explore {tool.name}

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          border
                          border-[#B41448]/20
                          transition-all
                          duration-300
                          group-hover:border-[#B41448]
                          group-hover:bg-[#B41448]
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.7}
                          className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            SECTION LINK
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
            delay: 0.2,
          }}
          className="mt-16 flex justify-end border-t border-black/[0.08] pt-6 sm:mt-20"
        >
          <Link
            href="/products/"
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
            Explore Software & Tools

            <ArrowRight
              size={14}
              strokeWidth={1.7}
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