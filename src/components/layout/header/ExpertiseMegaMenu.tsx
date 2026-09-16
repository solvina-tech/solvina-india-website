"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  Settings2,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

type ExpertiseGroup = {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: {
    href: string;
    title: string;
    description?: string;
  }[];
};

type ExpertiseMegaMenuProps = {
  groups: ExpertiseGroup[];
  closeMenu: () => void;
};

export default function ExpertiseMegaMenu({
  groups,
  closeMenu,
}: ExpertiseMegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = groups[activeIndex];

  return (
    <div className="grid min-h-[390px] grid-cols-[400px_1fr]">
      {/* LEFT - Capability Families */}
      <div className="border-r border-black/[0.07] bg-[#F8F8F8] p-4">
        <div className="mb-3 px-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
            Capability Architecture
          </span>
        </div>

        <div className="space-y-1">
          {groups.map((group, index) => {
            const Icon = group.icon || Activity;
            const active = index === activeIndex;

            return (
              <button
                key={group.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-3.5 text-left transition-all duration-200 ${
                  active
                    ? "bg-white text-[#B41448] shadow-sm"
                    : "text-[#252525] hover:bg-white/70 hover:text-[#B41448]"
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r-full bg-[#B41448] transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors ${
                    active
                      ? "bg-[#B41448] text-white"
                      : "bg-white text-[#B41448] group-hover:bg-[#B41448] group-hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-semibold leading-4">
                    {group.title}
                  </span>

                  <span
                    className={`mt-0.5 block text-[9px] ${
                      active ? "text-black/45" : "text-black/35"
                    }`}
                  >
                    {group.children?.length || 0} capabilities
                  </span>
                </span>

                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active
                      ? "translate-x-0.5 text-[#B41448]"
                      : "text-black/20"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT - Active Capability */}
      <div className="relative overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.title}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
            className="h-full p-7"
          >
            {/* Right-side heading */}
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E3A526]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#B41448]">
                    Expertise
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#252525]">
                  {activeGroup.title}
                </h3>
              </div>

              <Link
                href={activeGroup.href}
                onClick={closeMenu}
                className="group hidden shrink-0 items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors hover:text-[#8F103B] sm:flex"
              >
                Explore all
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Capability items */}
            <div className="grid grid-cols-2 gap-3">
              {activeGroup.children?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group rounded-xl border border-black/[0.07] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E3A526]/50 hover:bg-[#FFFCF5] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-[13px] font-semibold leading-5 text-[#252525] transition-colors group-hover:text-[#B41448]">
                      {item.title}
                    </h4>

                    <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-black/20 transition-all group-hover:translate-x-1 group-hover:text-[#B41448]" />
                  </div>

                  {item.description && (
                    <p className="mt-2 text-[11px] leading-[1.6] text-black/50">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile/compact overview */}
            <Link
              href={activeGroup.href}
              onClick={closeMenu}
              className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] sm:hidden"
            >
              Explore {activeGroup.title}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}