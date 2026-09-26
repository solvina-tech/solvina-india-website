"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CircleDot,
  Gauge,
  Handshake,
  Layers3,
  Network,
  SlidersHorizontal,
} from "lucide-react";

import { whySolvina } from "@/data/homepage";

type VisualType = (typeof whySolvina)[number]["visual"];

function SystemsVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden bg-[#FAF8F3]">
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#B41448]/25 bg-white shadow-sm">
        <Network size={21} strokeWidth={1.5} className="text-[#B41448]" />
      </div>

      <div className="absolute top-1/2 left-[15%] flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-black/10 bg-white">
        <span className="h-2 w-2 rounded-full bg-[#E3A526]" />
      </div>

      <div className="absolute top-1/2 right-[15%] flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-black/10 bg-white">
        <span className="h-2 w-2 rounded-full bg-[#E3A526]" />
      </div>

      <div className="absolute top-[20%] left-[25%] text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
        Power
      </div>

      <div className="absolute top-[20%] right-[25%] text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
        Process
      </div>

      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
        Controls · Protection · Steam
      </div>
    </div>
  );
}

function ModelToPlantVisual() {
  return (
    <div className="flex h-40 w-full items-center justify-center bg-white">
      <div className="flex w-[82%] items-center gap-2 sm:gap-3">
        <div className="flex-1 border border-[#B41448]/20 bg-[#FAF4EC] p-3">
          <div className="text-[8px] font-bold tracking-[0.15em] text-[#B41448] uppercase">
            Model
          </div>
          <div className="mt-3 h-1.5 w-full bg-[#B41448]/15">
            <div className="h-full w-2/3 bg-[#B41448]" />
          </div>
          <div className="mt-2 h-1.5 w-3/4 bg-black/10" />
        </div>

        <div className="flex shrink-0 items-center">
          <ArrowUpRight size={20} className="text-[#E3A526]" />
        </div>

        <div className="flex-1 border border-black/10 bg-[#FAFAFA] p-3">
          <div className="text-[8px] font-bold tracking-[0.15em] text-black/45 uppercase">
            Simulation
          </div>
          <div className="mt-3 flex gap-1">
            <span className="h-5 w-1 bg-[#E3A526]" />
            <span className="h-8 w-1 bg-[#B41448]/50" />
            <span className="h-6 w-1 bg-[#B41448]" />
            <span className="h-10 w-1 bg-[#B41448]/35" />
            <span className="h-7 w-1 bg-[#E3A526]" />
          </div>
        </div>

        <div className="flex shrink-0 items-center">
          <ArrowUpRight size={20} className="text-[#E3A526]" />
        </div>

        <div className="flex-1 border border-black/10 bg-white p-3">
          <div className="text-[8px] font-bold tracking-[0.15em] text-black/45 uppercase">
            Plant
          </div>
          <div className="mt-3 flex items-end gap-1">
            <span className="h-5 w-2 bg-black/15" />
            <span className="h-8 w-2 bg-black/25" />
            <span className="h-12 w-2 bg-[#B41448]/60" />
            <span className="h-7 w-2 bg-black/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DynamicVisual() {
  return (
    <div className="relative h-40 w-full overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-x-7 top-1/2 h-px bg-black/10" />

      <div className="absolute top-6 left-7 text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
        Disturbance
      </div>

      <div className="absolute right-7 bottom-6 text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
        Response
      </div>

      <svg
        viewBox="0 0 500 150"
        className="absolute inset-0 h-full w-full px-7 py-8"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 75 H65 L85 30 L105 112 L130 45 L155 92 L180 64 C230 64 245 82 275 82 C310 82 325 55 350 67 C375 78 390 91 420 82 C450 74 470 76 500 76"
          stroke="#B41448"
          strokeWidth="2"
        />

        <path d="M0 75 H500" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
      </svg>

      <div className="absolute top-[25%] left-[20%] h-2 w-2 rounded-full bg-[#E3A526]" />
    </div>
  );
}

function ControlVisual() {
  return (
    <div className="flex h-40 w-full items-center justify-center bg-[#FAF8F3]">
      <div className="w-[75%]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[8px] font-semibold tracking-[0.16em] text-black/35 uppercase">
            Control response
          </span>

          <SlidersHorizontal
            size={15}
            strokeWidth={1.5}
            className="text-[#B41448]"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] text-black/40">Loop 01</span>
            <div className="h-1.5 flex-1 bg-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "76%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-full bg-[#B41448]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] text-black/40">Loop 02</span>
            <div className="h-1.5 flex-1 bg-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "58%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-full bg-[#E3A526]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-12 text-[8px] text-black/40">Plant</span>
            <div className="h-1.5 flex-1 bg-black/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-full bg-[#B41448]/55"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EvidenceVisual() {
  return (
    <div className="flex h-40 w-full items-center justify-center bg-white">
      <div className="relative h-28 w-[75%]">
        <div className="absolute right-0 bottom-0 left-0 h-16 border border-black/10 bg-[#FAFAFA] p-3">
          <div className="flex items-center gap-2">
            <CircleDot size={14} className="text-[#B41448]" />
            <span className="text-[8px] font-semibold tracking-[0.15em] text-black/45 uppercase">
              Measurements
            </span>
          </div>
        </div>

        <div className="absolute right-[10%] bottom-5 left-[10%] h-16 -translate-y-5 border border-black/10 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Gauge size={14} className="text-[#E3A526]" />
            <span className="text-[8px] font-semibold tracking-[0.15em] text-black/45 uppercase">
              Models & Tests
            </span>
          </div>
        </div>

        <div className="absolute right-[20%] bottom-10 left-[20%] h-16 -translate-y-5 border border-[#B41448]/20 bg-[#FAF4EC] p-3">
          <div className="flex items-center gap-2">
            <Check size={14} className="text-[#B41448]" />
            <span className="text-[8px] font-semibold tracking-[0.15em] text-[#B41448] uppercase">
              Validated Evidence
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnershipVisual() {
  return (
    <div className="flex h-40 w-full items-center justify-center bg-[#FAFAFA]">
      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center justify-center border border-black/10 bg-white">
          <span className="text-[8px] font-bold tracking-[0.12em] text-black/45 uppercase">
            Plant
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-16 bg-[#E3A526]" />
          <Handshake size={18} strokeWidth={1.5} className="text-[#B41448]" />
          <div className="h-px w-16 bg-[#E3A526]" />
        </div>

        <div className="flex h-16 w-16 items-center justify-center border border-[#B41448]/20 bg-[#FAF4EC]">
          <span className="text-[8px] font-bold tracking-[0.12em] text-[#B41448] uppercase">
            Solvina
          </span>
        </div>
      </div>
    </div>
  );
}

function VisualDevice({ type }: { type: VisualType }) {
  switch (type) {
    case "systems":
      return <SystemsVisual />;

    case "model-to-plant":
      return <ModelToPlantVisual />;

    case "dynamic":
      return <DynamicVisual />;

    case "control":
      return <ControlVisual />;

    case "evidence":
      return <EvidenceVisual />;

    case "partnership":
      return <PartnershipVisual />;

    default:
      return null;
  }
}

export default function WhySolvinaSection() {
  return (
    <section id="why-solvina" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
        {/* Section intro */}
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#E3A526]" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase sm:text-xs">
              Why Solvina
            </span>
          </div>

          <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.5rem]">
            Engineering depth that connects systems, models and reality.
          </h2>
        </motion.div>

        {/* Differentiator grid */}
        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
          {whySolvina.map((item, index) => (
            <motion.article
              key={item.number}
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
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              // className={`group overflow-hidden border border-black/[0.08] bg-white transition-all duration-300 hover:border-[#B41448]/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.06)] ${
              //   index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              // } `}
              className={`group overflow-hidden border border-black/[0.08] bg-white transition-all duration-300 hover:border-[#B41448]/20 hover:shadow-[0_16px_45px_rgba(0,0,0,0.06)] `}
              >
              {/* Visual */}
              {/* <VisualDevice type={item.visual} /> */}

              {/* Content */}
              <div className="relative border-t border-black/[0.07] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="mt-2 text-lg leading-tight font-semibold tracking-[-0.02em] text-[#202020] transition-colors duration-300 group-hover:text-[#B41448] sm:text-xl">
                    {item.title}
                  </h3>

                  {/* <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className="mt-1 shrink-0 text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#B41448]"
                  /> */}
                </div>

                <p className="mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
