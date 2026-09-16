import { motion } from "framer-motion";
import Link from "next/link";

const EXPERTISE = [
  { angle: -90, label: "Island Operation Testing & Optimization", href: "/expertise/island-operation/" },
  { angle: -18, label: "Integrated Steam, Power & Control Systems", href: "/expertise/integrated-steam-power-systems/" },
  { angle: 54, label: "Solar, Wind & BESS", href: "/expertise/solar-wind-bess/" },
  { angle: 126, label: "Industrial Automation & Digitization", href: "/expertise/industrial-automation-digital-engineering/", },
  { angle: 198, label: "Grid Code Compliance", href: "/expertise/grid-code-compliance/" },
] as const;

export default function HeroExpertSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
      className="hero-expertise relative hidden h-[600px] w-[600px] lg:block"
    >
      {/* =====================================================
          ORBIT RING — rotates continuously, paused on hover
      ===================================================== */}

      <div className="orbit-ring absolute inset-0">
        {EXPERTISE.map((item, i) => (
          <div
            key={item.label}
            className="satellite absolute top-1/2 left-1/2 h-0 w-0"
            style={{ ["--angle" as string]: `${item.angle}deg` }}
          >
            <div className="counter-static">
              <motion.div
                className="counter-spin"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.55 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                {/* <div className="group -mt-[84px] -ml-[84px] flex h-[168px] w-[168px] cursor-default items-center justify-center rounded-full border border-[#1E2A33]/10 bg-gradient-to-r from-[#E3A526] to-orange-500 p-5 text-center transition-all duration-300 hover:scale-[1.08] hover:border-[#E3A526]"> */}
                <Link href={item.href} className="group -mt-[84px] -ml-[84px] flex h-[168px] w-[168px] cursor-default items-center justify-center rounded-full border border-[#1E2A33]/10 bg-white p-5 text-center transition-all duration-300 hover:scale-[1.08] hover:border-[#E3A526]">
                  <div>
                    <span className="text-[14px] leading-[1.35] font-semibold text-[#1E2A33] transition-colors duration-300 group-hover:text-[#B41448]">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          CENTER HUB
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 z-20 flex h-[168px] w-[168px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAF8F3]"
      >
        <div className="text-center">
          <span className="block text-[9px] font-semibold tracking-[0.26em] text-[#B41448] uppercase">
            Solvina
          </span>

          <span className="mt-2 block text-[22px] leading-[1.1] font-semibold tracking-[-0.02em] text-[#202020]">
            Expert
            <br />
            Areas
          </span>

          <span className="mx-auto mt-3 block h-[2px] w-7 bg-[#E3A526]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
