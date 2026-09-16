"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { footerNavigation } from "@/data/footerNavigation";

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy/",
  },
  {
    label: "Cookie Policy",
    href: "/cookie-policy/",
  },
  {
    label: "Terms / Legal Notice",
    href: "/legal/",
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3 className="text-[9px] font-bold tracking-[0.18em] text-[#E3A526] uppercase">
        {title}
      </h3>

      <ul className="mt-3 space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-[11px] leading-4 text-white/40 transition-colors duration-200 hover:text-white"
            >
              {link.label}

              <ArrowUpRight
                size={9}
                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-60"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1520] text-white">
      {/* subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      {/* subtle ambient accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#B41448]/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* =====================================================
            TOP BRAND ROW
        ===================================================== */}

        <div className="flex flex-col gap-5 border-b border-white/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" aria-label="Solvina India home">
              <Image
                src="./images/solvina-logo-negative.png"
                alt="Solvina India"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden h-5 w-px bg-white/10 sm:block" />

            <p className="hidden max-w-md text-[11px] leading-4 text-white/35 md:block">
              Specialist Engineering Intelligence for complex industrial energy
              and power systems.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/solvina-ab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solvina on LinkedIn"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white/45 transition-all duration-300 hover:border-[#E3A526]/50 hover:bg-[#E3A526] hover:text-[#0B1520]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[17px] w-[17px]"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.57V8.99H3.56v11.46zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.23 24 24.22 23.23 24.22 22.28V1.72C24.22.77 23.23 0 22.22 0z" />
            </svg>
          </a>

          <Link
            href="/contact/"
            className="group inline-flex w-fit items-center gap-2 bg-[#B41448] px-4 py-2.5 text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-[#9F103F]"
          >
            Talk to an Engineer
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-b border-white/[0.07] py-8 lg:grid-cols-4 lg:gap-x-10">
          <FooterColumn title="Expertise" links={footerNavigation.expertise} />

          <FooterColumn
            title="Industries"
            links={footerNavigation.industries}
          />

          <FooterColumn title="Resources" links={footerNavigation.resources} />

          <div>
            <FooterColumn title="Company" links={footerNavigation.company} />

            {/* Compact contact */}

            <div className="mt-5 border-t border-white/[0.06] pt-4">
              <p className="text-[8px] font-bold tracking-[0.16em] text-white/20 uppercase">
                India Enquiries
              </p>

              <a
                href="mailto:enquiry@solvina.in"
                className="mt-2 flex items-center gap-2 text-[10px] text-white/35 transition-colors hover:text-white"
              >
                <Mail size={11} />
                enquiry@solvina.in
              </a>

              <a
                href="tel:+919873302435"
                className="mt-1.5 flex items-center gap-2 text-[10px] text-white/35 transition-colors hover:text-white"
              >
                <Phone size={11} />
                +91 98733 02435 
              </a>
              <a
                href="tel:+919540728444"
                className="mt-1.5 flex items-center gap-2 text-[10px] text-white/35 transition-colors hover:text-white"
              >
                <Phone size={11} />
                +91 95407 28444
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} Solvina India Private Limited. All
            rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[9px] text-white/20 transition-colors hover:text-white/50"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="text-[9px] font-medium text-white/20 transition-colors hover:text-[#E3A526]"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const exploreLinks = [
//   { label: "Expertise", href: "/expertise/" },
//   { label: "Industries", href: "/industries/" },
//   { label: "Projects & Case Studies", href: "/projects/" },
//   { label: "Knowledge Centre", href: "/knowledge-centre/" },
//   { label: "Careers", href: "/careers/" },
// ];

// const offices = [
//   {
//     label: "Noida",
//     type: "Corporate Office",
//     address:
//       "B-918, Advant Navis Business Park, Plot No. 7, Sector 142, Expressway Noida, U.P. 201305, India",
//   },
//   {
//     label: "New Delhi",
//     type: "Registered Office",
//     address:
//       "4637/20 Room No. 214, Munish Plaza, Ansari Road, Daryaganj, New Delhi – 110002, India",
//   },
//   {
//     label: "Mölndal, Sweden",
//     type: "Group HQ — Solvina International",
//     address: "Krokslätts Fabriker 45, 431 37 Mölndal, Sweden",
//   },
// ];

// const legalLinks = [
//   { label: "Privacy Policy", href: "/legal/privacy/" },
//   { label: "Terms of Use", href: "/legal/terms/" },
//   { label: "Cookie Policy", href: "/legal/cookies/" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="border-t border-white/[0.06] bg-[#0A0B0F]">
//       <div className="mx-auto w-full px-5 pt-16 pb-10 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr_1.3fr_1fr] lg:gap-8">
//           {/* Brand */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.4 }}
//           >
//             <div className="flex items-center gap-2">
//               {/* swap for actual logo mark */}
//               <Link href="/" aria-label="Solvina India home">
//                 <Image
//                   src="./images/solvina-logo-neg.png"
//                   alt="Solvina India"
//                   width={150}
//                   height={40}
//                   className="h-8 w-auto"
//                 />
//               </Link>
//             </div>
//             <p className="mt-4 max-w-xs text-sm leading-6 text-white/45">
//               Finding the problem in order to find the solution.
//               {/*
//                 Alternate, if the group-history date should stay but be
//                 correctly attributed to Solvina International, not India:
//                 "Finding the problem in order to find the solution —
//                 Solvina International, since 1997."
//               */}
//             </p>
//             <p className="mt-4 text-xs leading-5 text-white/30">
//               A subsidiary of Solvina International, Sweden.
//             </p>
//           </motion.div>

//           {/* Explore */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.4, delay: 0.05 }}
//           >
//             <h4 className="text-xs font-semibold tracking-widest text-white/35 uppercase">
//               Explore
//             </h4>
//             <ul className="mt-5 space-y-3">
//               {exploreLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     href={link.href}
//                     className="group inline-flex items-center gap-1 text-sm text-white/60 transition-colors duration-200 hover:text-white"
//                   >
//                     {link.label}
//                     <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-60" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Offices */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//           >
//             <h4 className="text-xs font-semibold tracking-widest text-white/35 uppercase">
//               Offices
//             </h4>
//             <ul className="mt-5 space-y-5">
//               {offices.map((office) => (
//                 <li key={office.label} className="flex gap-2.5">
//                   <MapPin
//                     className="mt-0.5 h-4 w-4 shrink-0 text-white/25"
//                     strokeWidth={1.75}
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-white/75">
//                       {office.label}
//                       <span className="ml-1.5 text-xs font-normal text-white/35">
//                         · {office.type}
//                       </span>
//                     </p>
//                     <p className="mt-0.5 max-w-[280px] text-[13px] leading-5 text-white/40">
//                       {office.address}
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact */}
//           <motion.div
//             initial={{ opacity: 0, y: 12 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.4, delay: 0.15 }}
//           >
//             <h4 className="text-xs font-semibold tracking-widest text-white/35 uppercase">
//               Contact
//             </h4>
//             <ul className="mt-5 space-y-3.5">
//               <li>
//                 <a
//                   href="mailto:info@solvina.se"
//                   className="flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-200 hover:text-white"
//                 >
//                   <Mail className="h-4 w-4 text-white/30" strokeWidth={1.75} />
//                   info@solvina.se
//                   {/* verify this should be an India-specific address */}
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="tel:+911204516596"
//                   className="flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-200 hover:text-white"
//                 >
//                   <Phone className="h-4 w-4 text-white/30" strokeWidth={1.75} />
//                   +91 120-4516596
//                 </a>
//               </li>
//             </ul>

//             <a
//               href="/contact/discuss-engineering-challenge/"
//               className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-[#E3A526]/50 hover:text-[#E3A526]"
//             >
//               Discuss Your Engineering Challenge
//             </a>
//           </motion.div>
//         </div>

//         {/* legal bar */}
//         <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs leading-5 text-white/30">
//             © {year} Solvina India Private Limited, a subsidiary of Solvina
//             International. CIN available on request.
//           </p>
//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//             {legalLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-xs text-white/40 transition-colors duration-200 hover:text-white/70"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
