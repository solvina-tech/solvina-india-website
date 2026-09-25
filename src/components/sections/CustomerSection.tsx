"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Customer, customers } from "@/data/homepage";

function CustomerMark({ customer }: { customer: Customer }) {
  const [logoStatus, setLogoStatus] = useState<"loading" | "loaded" | "error">(
    customer.logo ? "loading" : "error",
  );

  useEffect(() => {
    if (!customer.logo) {
      setLogoStatus("error");
      return;
    }

    const image = new window.Image();

    image.onload = () => {
      setLogoStatus("loaded");
    };

    image.onerror = () => {
      setLogoStatus("error");
    };

    image.src = customer.logo;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [customer.logo]);

  const showLogo = logoStatus === "loaded";
  const showName = logoStatus === "error";

  return (
    <div className="group relative flex h-[86px] w-[180px] shrink-0 items-center justify-center border border-black/[0.07] bg-white px-6 transition-all duration-300 hover:border-[#E3A526]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:h-[92px] sm:w-[210px]">
      {/* Logo */}
      {showLogo && (
        <img
          src={customer.logo}
          alt={`${customer.name} logo`}
          className="max-h-15 max-w-[145px] object-contain opacity-100 transition-all duration-300"
        />
      )}

      {/* Name fallback */}
      {showName && (
        <div className="flex items-center justify-center text-center">
          <span className="text-sm font-semibold tracking-[-0.01em] text-[#27313D]/65 transition-colors duration-300 group-hover:text-[#B41448] sm:text-[15px]">
            {customer.name}
          </span>
        </div>
      )}
    </div>
  );
}

function CustomerRow({
  items,
  reverse = false,
}: {
  items: Customer[];
  reverse?: boolean;
}) {
  const repeatedItems = [...items, ...items];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F7F4] to-transparent sm:w-28" />

      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F7F4] to-transparent sm:w-28" />

      <div
        className={`flex w-max gap-3 py-1 ${
          reverse
            ? "animate-customer-marquee-reverse"
            : "animate-customer-marquee"
        }`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {repeatedItems.map((customer, index) => (
          <Link
            key={`${customer.id}-${index}`}
            href={`/customer/${customer.id}`}
            aria-label={`View projects for ${customer.name}`}
            className="block shrink-0"
          >
            <CustomerMark customer={customer} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CustomerSection() {
  /*
   * Split the 20 customers into two balanced rows.
   */
  const firstRow = customers.slice(0, 10);
  const secondRow = customers.slice(10, 20);

  return (
    <section className="overflow-hidden border-y border-black/[0.06] bg-[#F7F7F4]">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
          className="mb-9 flex flex-col gap-5 sm:mb-11 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E3A526]" />

              <span className="text-[10px] font-bold tracking-[0.2em] text-[#B41448] uppercase">
                Customers
              </span>
            </div>

            <h2 className="max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.03em] text-[#202020] sm:text-3xl lg:text-4xl">
              Engineering experience across
              <span className="text-black/40">
                {" "}
                 industrial landscape.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45 lg:text-right">
            Supporting utilities, power producers and energy-intensive
            industries across complex engineering challenges.
          </p>
        </motion.div>

        {/* =====================================================
            CUSTOMER MARQUEE
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
            duration: 0.6,
            delay: 0.1,
          }}
          className="space-y-3"
        >
          {/* Row 1 → */}

          <CustomerRow items={firstRow} />

          {/* Row 2 ← */}

          <CustomerRow items={secondRow} reverse />
        </motion.div>

        {/* =====================================================
            FOOTER LINK
        ===================================================== */}

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#B41448] transition-colors duration-300 hover:text-[#9F103F]"
          >
            Explore Reference Projects
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
