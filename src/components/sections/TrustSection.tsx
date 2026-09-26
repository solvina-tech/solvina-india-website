"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trustProof } from "@/data/homepage";

type TrustItem = (typeof trustProof)[number];

function CountUp({
  value,
  duration = 1.5,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(value);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
    </span>
  );
}

function ProofCard({
  item,
  index,
  featured,
}: {
  item: TrustItem;
  index: number;
  featured: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={`group xs:w-[60%] relative w-[78%] shrink-0 snap-start px-6 py-8 sm:w-auto sm:px-7 sm:py-10 lg:px-8 lg:py-11 ${featured ? "bg-[#FAF4EC]" : "bg-white"} ${index > 0 ? "border-black/[0.08] sm:border-l" : ""} border-b border-black/[0.08] sm:border-b-0`}
    >
      <div className="absolute top-0 left-6 h-[2px] w-8 bg-[#E3A526] transition-all duration-300 group-hover:w-14 sm:left-7 lg:left-8" />
      <div className="relative flex items-baseline gap-1 pt-2">
        <span
          className={`leading-none font-bold tracking-[-0.035em] text-[#B41448] ${featured ? "text-4xl sm:text-4xl" : "text-3xl sm:text-[2.35rem]"}`}
        >
          {item.type === "number" ? <CountUp value={item.value} /> : item.value}
          {item.suffix && (
            <span className="absolute ml-1 mt-[-8] text-2xl font-bold text-[#B41448]">
              {item.suffix}
            </span>
          )}
        </span>
      </div>
      <p className="mt-4 max-w-[260px] text-sm leading-5 font-semibold text-[#252525] sm:text-[15px]">
        {item.description}
      </p>
      {/* {item.title && (
        <p className="mt-1.5 text-xs leading-5 text-black/45">{item.title}</p>
      )} */}
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section id="trust" className="border-b border-black/[0.07] bg-white">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="-mx-5 flex snap-x snap-mandatory overflow-x-auto sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {trustProof.map((item, index) => (
            <ProofCard
              key={item.description}
              item={item}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
