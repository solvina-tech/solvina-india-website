"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Customer, customers } from "@/data/homepage";

function CustomerGridMark({ customer }: { customer: Customer }) {
  const [logoStatus, setLogoStatus] = useState<"loading" | "loaded" | "error">(
    customer.logo ? "loading" : "error",
  );

  useEffect(() => {
    if (!customer.logo) {
      setLogoStatus("error");
      return;
    }

    const image = new window.Image();

    image.onload = () => setLogoStatus("loaded");
    image.onerror = () => setLogoStatus("error");

    image.src = customer.logo;

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [customer.logo]);

  const showLogo = logoStatus === "loaded";

  return (
    <div className="group flex h-[110px] w-full items-center justify-center bg-white px-8 transition-all duration-300 hover:bg-white hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:h-[125px]">
      {showLogo ? (
        <div className="flex h-[64px] w-[160px] items-center justify-center">
          <img
            src={customer.logo}
            alt={`${customer.name} logo`}
            className="block max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <span className="text-center text-sm font-semibold tracking-[-0.01em] text-[#27313D]/55 transition-colors duration-300 group-hover:text-[#B41448]">
          {customer.name}
        </span>
      )}
    </div>
  );
}

function CustomerGrid({ items }: { items: Customer[] }) {
  return (
    <div className="grid grid-cols-2 bg-black/[0.08] sm:grid-cols-3 lg:grid-cols-4">
      {items.map((customer) => (
        <Link
          key={customer.id}
          href={`/customer/${customer.id}`}
          aria-label={`View projects for ${customer.name}`}
          className="block bg-white"
        >
          <CustomerGridMark customer={customer} />
        </Link>
      ))}
    </div>
  );
}

export default function CustomerGridSection() {
  const firstRow = customers.slice(0, 10);
  const secondRow = customers.slice(10, 20);

  return (
    <section id="customers" className="overflow-hidden bg-[#F7F7F4]">
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
              <br />
              <span className="text-black/40">industrial landscape.</span>
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
        >
          <CustomerGrid items={customers} />
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
