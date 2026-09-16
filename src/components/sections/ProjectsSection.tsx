// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ChevronRight,
// } from "lucide-react";

// const projects = [
//   {
//     number: "01",
//     title: "Integrated Steam & Power System Study",
//     industry: "Industrial Utilities",
//     country: "India",
//     challenge:
//       "Understand the behaviour of a tightly coupled industrial utility system under important operating disturbances.",
//     scope:
//       "Integrated dynamic modelling of generation, steam/process users, electrical interfaces and controls.",
//     method: "Dynamic modelling · System study",
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "Island Operation & Disturbance Resilience",
//     industry: "Industrial Power Systems",
//     country: "India",
//     challenge:
//       "Assess whether an industrial system can separate from the external grid and maintain a stable internal power and utility balance.",
//     scope:
//       "Dynamic studies, control/protection review, testing or tuning as supported by the approved case.",
//     method: "Dynamic study · Testing · Validation",
//     featured: false,
//   },
//   {
//     number: "03",
//     title: "Grid Code / Generator Dynamic Performance",
//     industry: "Power Generation",
//     country: "India",
//     challenge:
//       "Demonstrate and improve generator response against applicable technical requirements.",
//     scope:
//       "Modelling, testing, response analysis and tuning/validation where supported.",
//     method: "Modelling · Testing · Tuning",
//     featured: false,
//   },
// ];

// function ProjectMeta({
//   project,
// }: {
//   project: (typeof projects)[number];
// }) {
//   return (
//     <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
//       <span>{project.industry}</span>

//       <span className="h-1 w-1 rounded-full bg-[#E3A526]" />

//       <span>{project.country}</span>

//       <span className="h-1 w-1 rounded-full bg-black/15" />

//       <span>{project.method}</span>
//     </div>
//   );
// }

// export default function ProjectsSection() {
//   const featured = projects[0];
//   const secondary = projects.slice(1);

//   return (
//     <section className="relative overflow-hidden bg-[#F7F7F4]">
//       <div className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 2xl:px-20">
//         {/* =====================================================
//             SECTION HEADER
//         ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 18,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             margin: "-80px",
//           }}
//           transition={{
//             duration: 0.55,
//           }}
//           className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
//         >
//           <div className="max-w-3xl">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-9 bg-[#E3A526]" />

//               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B41448] sm:text-xs">
//                 Reference Projects
//               </span>
//             </div>

//             <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-4xl lg:text-[3.35rem]">
//               Engineering evidence from
//               <span className="block text-black/40">
//                 real operating challenges.
//               </span>
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-6 text-black/50 lg:pb-1">
//             Selected examples of the complex power, utility, control and
//             system-behaviour questions Solvina engineers help customers
//             understand and resolve.
//           </p>
//         </motion.div>

//         {/* =====================================================
//             PROJECT SHOWCASE
//         ===================================================== */}

//         <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
//           {/* ===================================================
//               FEATURED PROJECT
//           =================================================== */}

//           <motion.article
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: "-80px",
//             }}
//             transition={{
//               duration: 0.6,
//             }}
//             className="
//               group
//               relative
//               flex
//               min-h-[520px]
//               flex-col
//               justify-between
//               overflow-hidden
//               bg-[#0D1724]
//               p-7
//               text-white
//               sm:p-9
//               lg:p-10
//             "
//           >
//             {/* Background technical detail */}
//             <div
//               aria-hidden="true"
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-32
//                 -top-32
//                 h-80
//                 w-80
//                 rounded-full
//                 bg-[#B41448]/10
//                 blur-[100px]
//               "
//             />

//             <div
//               aria-hidden="true"
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-0
//                 left-0
//                 h-px
//                 w-full
//                 bg-gradient-to-r
//                 from-[#E3A526]
//                 via-[#B41448]
//                 to-transparent
//               "
//             />

//             {/* Large project number */}
//             <div className="relative z-10 flex items-start justify-between">
//               <span className="font-mono text-[10px] tracking-[0.16em] text-white/30">
//                 {featured.number} / 03
//               </span>

//               <span className="border border-white/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50">
//                 Featured Project
//               </span>
//             </div>

//             {/* Main content */}
//             <div className="relative z-10 mt-20">
//               <ProjectMeta project={featured} />

//               <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-4xl">
//                 {featured.title}
//               </h3>

//               <div className="mt-7 max-w-2xl">
//                 <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E3A526]">
//                   Challenge
//                 </span>

//                 <p className="mt-2 text-sm leading-6 text-white/60 sm:text-[15px]">
//                   {featured.challenge}
//                 </p>
//               </div>

//               <div className="mt-6 max-w-2xl">
//                 <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E3A526]">
//                   Scope
//                 </span>

//                 <p className="mt-2 text-sm leading-6 text-white/45">
//                   {featured.scope}
//                 </p>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-5">
//               <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
//                 Integrated Systems
//               </span>

//               <Link
//                 href="/projects"
//                 className="
//                   group/link
//                   inline-flex
//                   items-center
//                   gap-2
//                   text-xs
//                   font-semibold
//                   text-white
//                   transition-colors
//                   hover:text-[#E3A526]
//                 "
//               >
//                 View Case Study

//                 <ArrowUpRight
//                   size={15}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover/link:-translate-y-0.5
//                     group-hover/link:translate-x-0.5
//                   "
//                 />
//               </Link>
//             </div>
//           </motion.article>

//           {/* ===================================================
//               SECONDARY PROJECTS
//           =================================================== */}

//           <div className="flex flex-col gap-5">
//             {secondary.map((project, index) => (
//               <motion.article
//                 key={project.number}
//                 initial={{
//                   opacity: 0,
//                   x: 20,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   margin: "-80px",
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.12,
//                 }}
//                 className="
//                   group
//                   flex
//                   flex-1
//                   flex-col
//                   justify-between
//                   border
//                   border-black/[0.08]
//                   bg-white
//                   p-6
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-black/[0.14]
//                   hover:shadow-[0_18px_45px_rgba(20,30,40,0.07)]
//                   sm:p-7
//                 "
//               >
//                 {/* Top */}
//                 <div>
//                   <div className="flex items-start justify-between">
//                     <span className="font-mono text-[10px] tracking-[0.16em] text-black/25">
//                       {project.number}
//                     </span>

//                     <ArrowUpRight
//                       size={17}
//                       strokeWidth={1.5}
//                       className="
//                         text-black/25
//                         transition-all
//                         duration-300
//                         group-hover:-translate-y-0.5
//                         group-hover:translate-x-0.5
//                         group-hover:text-[#B41448]
//                       "
//                     />
//                   </div>

//                   <div className="mt-7">
//                     <ProjectMeta project={project} />

//                     <h3 className="mt-4 max-w-xl text-xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#202020] sm:text-2xl">
//                       {project.title}
//                     </h3>
//                   </div>

//                   <div className="mt-5">
//                     <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#B41448]">
//                       Challenge
//                     </span>

//                     <p className="mt-1.5 max-w-xl text-sm leading-6 text-black/50">
//                       {project.challenge}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom */}
//                 <div className="mt-7 border-t border-black/[0.07] pt-4">
//                   <div className="flex items-center justify-between gap-5">
//                     <span className="max-w-[250px] text-[11px] leading-5 text-black/35">
//                       {project.scope}
//                     </span>

//                     <Link
//                       href="/projects"
//                       className="
//                         inline-flex
//                         shrink-0
//                         items-center
//                         gap-1.5
//                         text-[11px]
//                         font-semibold
//                         text-[#B41448]
//                       "
//                     >
//                       Case Study

//                       <ChevronRight
//                         size={14}
//                         className="
//                           transition-transform
//                           duration-300
//                           group-hover:translate-x-1
//                         "
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         {/* =====================================================
//             SECTION CTA
//         ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           viewport={{
//             once: true,
//             margin: "-50px",
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.2,
//           }}
//           className="mt-7 flex justify-end"
//         >
//           <Link
//             href="/projects"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-2
//               text-xs
//               font-semibold
//               text-[#B41448]
//               transition-colors
//               duration-300
//               hover:text-[#9F103F]
//             "
//           >
//             Explore Projects & Case Studies

//             <ArrowRight
//               size={15}
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Layers,
  MapPin,
} from "lucide-react";

const projects = [
  {
    id: "reliance-integrated-steam-power",
    title: "Integrated Steam & Power Dynamic Studies",
    industryCountry: "Reliance Industries · Hazira & Dahej",
    challenge:
      "Ensure the integrated steam and power systems could effectively handle specific operating conditions and upset scenarios across the plants.",
    scope:
      "Integrated steam and power studies for islanded and grid-connected operation, relay coordination and load flow studies, transient stability, PSS validation and plant testing.",
    outcomeText:
      "The study supported improved control structures, protection coordination, stability and safeguarding of island operation capability.",
    href: "/projects/case-studies/reliance-integrated-steam-power/",
  },

  {
    id: "borealis-dynamic-studies",
    title: "Steam Network Dynamic Studies & Control Strategy",
    industryCountry: "Borealis · Stenungsund, Sweden",
    challenge:
      "Assess how the cracker steam network would respond to a trip of the new LD5 polyethylene plant, including the resulting loss of LP steam and additional HP steam consumption.",
    scope:
      "Dynamic modelling of the existing steam network and control system, simulation of LD5 trips under different operating conditions and evaluation of new control strategies.",
    outcomeText:
      "A new control strategy was developed to keep steam pressure within acceptable limits. The strategy was later proven to work in practice during LD5 trips and restarts.",
    href: "/projects/case-studies/borealis-dynamic-studies/",
  },

  {
    id: "iggesund-dynamic-control-design",
    title: "Dynamic Study & Steam Net Control Design",
    industryCountry: "Iggesund Paperboard · Sweden",
    challenge:
      "Design and tune the steam-net control system ahead of commissioning a new recovery boiler and turbine while maintaining stable steam conditions during operational transients.",
    scope:
      "Steam-net control design, dynamic simulation of thermodynamic and electrical systems, operator training with a training simulator and testing of island-operation capability.",
    outcomeText:
      "The resulting control strategy was robust in commissioning tests, enabling a smooth and efficient startup and stable operation during demanding transients.",
    href: "/projects/case-studies/iggesund-dynamic-control-design/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B41448]/25 hover:shadow-[0_16px_36px_rgba(180,20,72,0.10)] sm:p-7"
    >
      {/* Industry / location */}
      <div className="flex items-center gap-1.5 text-xs font-medium text-black/45">
        <MapPin
          className="h-3.5 w-3.5 shrink-0"
          strokeWidth={1.75}
        />

        <span>{project.industryCountry}</span>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-bold leading-snug text-[#252525] sm:text-xl">
        {project.title}
      </h3>

      {/* Challenge */}
      <div className="mt-5 flex gap-2.5">
        <Compass
          className="mt-0.5 h-4 w-4 shrink-0 text-[#B41448]/60"
          strokeWidth={1.75}
        />

        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-black/35">
            Challenge
          </span>

          <p className="mt-1 text-sm leading-6 text-black/65">
            {project.challenge}
          </p>
        </div>
      </div>

      {/* Scope */}
      <div className="mt-4 flex gap-2.5">
        <Layers
          className="mt-0.5 h-4 w-4 shrink-0 text-[#B41448]/60"
          strokeWidth={1.75}
        />

        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-black/35">
            Scope
          </span>

          <p className="mt-1 text-sm leading-6 text-black/65">
            {project.scope}
          </p>
        </div>
      </div>

      {/* Outcome */}
      <div className="mt-5 rounded-xl bg-[#FAF9F7] p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-black/35">
          Outcome
        </span>

        <p className="mt-1 text-[13px] leading-5 text-black/55">
          {project.outcomeText}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-1 items-end border-t border-black/[0.06] pt-5">
        <a
          href={project.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B41448] transition-all duration-200 group-hover:gap-2.5"
        >
          View Case Study

          <ArrowRight
            className="h-4 w-4"
            strokeWidth={2}
          />
        </a>
      </div>
    </motion.article>
  );
}

export default function ProjectsAndCaseStudiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B41448]">
            Projects &amp; Case Studies
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl">
            Engineering experience from real operating challenges
          </h2>

          <p className="mt-4 text-base leading-7 text-black/55 sm:text-lg">
            Explore selected Solvina engineering studies covering dynamic
            simulation, steam and power systems, control design and plant
            operation.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#252525] transition-all duration-300 hover:border-[#B41448]/30 hover:text-[#B41448]"
          >
            Explore Projects & Case Studies

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}