"use client";

import { solutions } from "@/data/homepage";
import { motion } from "framer-motion";
import { useState } from "react";

const RADIUS = 42;
const N = solutions.length;
const nodePositions = solutions.map((_, i) => {
  const angleDeg = -90 + i * (360 / N);
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.cos(angleRad),
    y: 50 + RADIUS * Math.sin(angleRad),
  };
});

function OrbitDiagram({
  activeId,
  setActiveId,
}: {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
        {/* orbit ring */}
        <circle
          cx="50" cy="50" r={RADIUS}
          fill="none" stroke="#25252512" strokeWidth="0.5"
        />
        {solutions.map((item, i) => {
          const pos = nodePositions[i];
          const isActive = activeId === item.id;
          return (
            <motion.line
              key={item.id}
              x1="50" y1="50" x2={pos.x} y2={pos.y}
              stroke={isActive ? "#B41448" : "#B4144822"}
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            />
          );
        })}
      </svg>

      {/* center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#B41448]/20 bg-white text-center shadow-[0_10px_30px_rgba(180,20,72,0.12)]"
      >
        <span className="text-[10px] font-semibold uppercase leading-tight tracking-wide text-black/40">
          Engineering
          <br />
          Capability
        </span>
      </motion.div>

      {solutions.map((item, i) => {
        const pos = nodePositions[i];
        const Icon = item.icon;
        const isActive = activeId === item.id;
        return (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease: "easeOut" }}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(item.id)}
            onBlur={() => setActiveId(null)}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            className={`
              absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center
              rounded-full border-2 bg-white transition-all duration-300
              ${
                isActive
                  ? "border-[#B41448] shadow-[0_8px_20px_rgba(180,20,72,0.2)] scale-110"
                  : "border-[#B41448]/25 shadow-sm"
              }
            `}
          >
            <Icon
              strokeWidth={1.5}
              className={`h-6 w-6 transition-colors duration-300 ${
                isActive ? "text-[#B41448]" : "text-[#B41448]/60"
              }`}
            />
            {/* <span
              className={`absolute -top-1.5 -right-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold transition-colors duration-300 ${
                isActive ? "bg-[#B41448] text-white" : "bg-black/10 text-black/40"
              }`}
            >
              {item.number}
            </span> */}
          </motion.button>
        );
      })}
    </div>
  );
}

function SolutionCards({
  activeId,
  setActiveId,
}: {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-3">
      {solutions.map((item, i) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`
              rounded-2xl border bg-white p-6 transition-all duration-300
              ${
                isActive
                  ? "border-[#B41448]/40 shadow-[0_10px_28px_rgba(180,20,72,0.12)] -translate-y-1"
                  : "border-black/[0.08] shadow-sm"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive ? "bg-[#B41448]/10" : "bg-black/[0.04]"
                }`}
              >
                <Icon
                  strokeWidth={1.5}
                  className={`h-5 w-5 transition-colors duration-300 ${
                    isActive ? "text-[#B41448]" : "text-black/40"
                  }`}
                />
              </span>
              {/* <span className="text-[11px] font-semibold text-black/30">{item.number}</span> */}
            </div>
            <h4 className="mt-4 text-[15px] font-bold leading-snug text-[#252525]">
              {item.theme}
            </h4>
            <p className="mt-2 text-[13.5px] leading-6 text-black/60">
              {item.valueDirection}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function SolutionsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-[#FAF9F7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B41448]">
            Solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
            Capability, applied to what matters to your business
          </h2>
          <p className="mt-4 text-base text-black/55 sm:text-lg">
            Six directions our engineering work is applied toward — each grounded in
            analysis, modelling and testing, not assumption.
          </p>
        </motion.div>

        {/* desktop: orbit diagram + cards side by side; mobile: cards only, diagram hidden */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="hidden lg:block">
            <OrbitDiagram activeId={activeId} setActiveId={setActiveId} />
          </div>
          <SolutionCards activeId={activeId} setActiveId={setActiveId} />
        </div>
      </div>
    </section>
  );
}