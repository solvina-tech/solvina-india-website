"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Gauge,
  RadioTower,
  MonitorPlay,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { assetPath } from "@/lib/assets";

const tools = [
  {
    id: "operator-training-simulator",
    name: "SolvOTS",
    category: "Simulation & Training",
    description:
      "Browser-based operator training simulation for controlled scenarios and operational readiness.",
    icon: MonitorPlay,
    href: "/products/operator-training-simulator",
    image: "/images/products/ots/ots2.png",
  },

  {
    id: "power-quality-energy-measurement",
    name: "Power Quality & Energy Measurement",
    category: "Power Quality & Energy",
    description:
      "Electrical measurement equipment for power-quality monitoring and energy measurement.",
    icon: Gauge,
    href: "/products/power-quality-energy-measurement",
    image:
      "/images/products/pq-energy-1.png",
  },

  {
    id: "position-sensors",
    name: "Position Sensors",
    category: "Position Measurement",
    description:
      "Non-contact sensing for angle and inclination measurement in demanding applications.",
    icon: RadioTower,
    href: "/products/position-sensors",
    image:
      "/images/products/position-sensor-1.png",
  },
];

function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[number];
  index: number;
}) {
  const router = useRouter();
  const Icon = tool.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      onClick={() => router.push(tool.href)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04]"
    >
      {/* Product image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#12131A]">
        <img
          src={assetPath(tool.image)}
          alt={tool.name}
          className="h-full w-full object-full transition-transform duration-500 group-hover:scale-[1.025]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/65 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-sm">
            <Icon
              strokeWidth={1.5}
              className="h-4 w-4 text-white/80"
            />
          </span>

          <span className="text-[10px] font-semibold tracking-[0.16em] text-white/70 uppercase">
            {tool.category}
          </span>
        </div>
      </div>

      {/* Product information */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h4 className="text-base font-semibold leading-6 text-white/95 sm:text-lg">
              {tool.name}
            </h4>

            <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
              {tool.description}
            </p>
          </div>

          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-300 group-hover:border-white/20 group-hover:text-white/80">
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>

        <div className="mt-5 border-t border-white/[0.07] pt-4">
          <span className="text-xs font-semibold tracking-[0.12em] text-[#E3A526] uppercase">
            View product
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function SoftwareToolsSection() {
  return (
    <section id="products" className="bg-[#0A0B0F] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#E3A526]" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#E3A526] uppercase sm:text-xs">
              Products &amp; Engineering Tools
            </span>
          </div>

          <h3 className="text-xl font-bold text-white/90 sm:text-2xl">
            Tools supporting the engineering
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
            Selected products and engineering tools used in the context of
            measurement, simulation and industrial applications.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}