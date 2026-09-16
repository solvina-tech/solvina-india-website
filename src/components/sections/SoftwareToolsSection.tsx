"use client";

import { motion } from "framer-motion";
import { Activity, Zap, MonitorPlay, Radio } from "lucide-react";
import { useRouter } from "next/navigation";

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
    frame: "schematic", // SCADA/schematic mockup
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

/** Minimal, generic device-frame mockup — abstract, not a real screenshot. */
function DeviceMock({ frame, href }: { frame: string, href: string }) {
  const router = useRouter();

  return (
    <div className="relative aspect-[16/10] cursor-pointer w-full overflow-hidden rounded-lg border border-white/10 bg-[#12131A]" onClick={() => router.push(href)}>
      {/* faux browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      </div>

      <div className="grid h-[calc(100%-28px)] grid-cols-3 gap-1.5 p-2.5">
        {frame === "dashboard" && (
          <>
            <div className="col-span-4 grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-8 rounded bg-white/[0.05]" />
              ))}
            </div>
            <div className="col-span-4 mt-1 rounded bg-white/[0.04]" />
          </>
        )}
        {frame === "chart" && (
          <div className="col-span-4 flex h-full items-end gap-1 rounded bg-white/[0.03] p-3">
            {[40, 65, 30, 80, 55, 70, 45, 60].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 rounded-sm bg-[#B41448]/30"
              />
            ))}
          </div>
        )}
        {frame === "schematic" && (
          <div className="col-span-4 h-full rounded bg-white/[0.03] p-3">
            <div className="flex h-full items-center justify-around">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border border-[#E3A526]/40"
                />
              ))}
            </div>
          </div>
        )}
        {frame === "grid" && (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded bg-white/[0.05]" />
            ))}
          </>
        )}
      </div>

      {/* subtle vignette so the mock never competes with real content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/40 via-transparent to-transparent" />
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
      <DeviceMock frame={tool.frame} href={tool.href} />
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
