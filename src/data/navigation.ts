import { MegaMenuData } from "@/types/navigation";
import {
  Cpu,
  Factory,
  Boxes,
  FolderKanban,
  Building2,
  Zap,
  Activity,
  Gauge,
  ShieldCheck,
  Waves,
  Settings2,
  MonitorCog,
  Wrench,
  FlaskConical,
  Leaf,
  HardHat,
  CircuitBoard,
} from "lucide-react";

export const expertiseMenu: MegaMenuData = {
  label: "Expertise",
  href: "/expertise",
  icon: Cpu,
  description:
    "Engineering expertise organized around the questions complex industrial systems need to answer.",
  items: [
    {
      title: "Systems & Modelling",
      href: "#",
      icon: Activity,
      children: [
        {
          href: "/expertise/integrated-steam-power-systems/",
          title: "Integrated Steam & Power Systems",
          description: "Cross-domain steam, power and process interactions.",
        },
        {
          href: "/expertise/dynamic-simulation-system-modelling/",
          title: "Dynamic Simulation & System Modelling",
          description: "Dynamic behaviour, model development and validation.",
        },
      ],
    },
    {
      title: "Power Systems & Grid",
      href: "#",
      icon: Zap,
      children: [
        {
          href: "/expertise/power-system-studies/",
          title: "Power System Studies",
          description:
            "Load flow, short circuit, stability and related studies.",
        },
        {
          href: "/expertise/grid-code-compliance/",
          title: "Grid Code Compliance & Generator Testing",
          description: "Compliance studies, testing and model validation.",
        },
        {
          href: "/expertise/island-operation/",
          title: "Island Operation Studies, Testing & Optimization",
          description: "Island transition, balance, controls and resilience.",
        },
      ],
    },
    {
      title: "Control, Automation & Operability",
      href: "#",
      icon: Settings2,
      children: [
        {
          href: "/expertise/plant-control-optimization/",
          title: "Plant Control & Operability",
          description: "Control-system behaviour and optimization.",
          children: [
            {
              href: "/expertise/plant-control-optimization/governor-tuning/",
              title: "Governor Testing & Tuning",
              description: "Governor response and tuning.",
            },
            {
              href: "/expertise/plant-control-optimization/avr-pss/",
              title: "AVR & PSS Testing and Tuning",
              description: "Study, setting, test and tuning.",
            },
            {
              href: "/expertise/plant-control-optimization/boiler-turbine-control/",
              title: "Boiler, Turbine & Process Control",
              description: "Control design, tuning and optimization.",
            },
          ],
        },
        {
          href: "/expertise/industrial-automation-digital-engineering/",
          title: "Industrial Automation & Digital Engineering",
          description:
            "Automation, digital simulation and engineering tools where verified.",
        },
      ],
    },
    {
      title: "Protection, Quality & Optimization",
      href: "#",
      icon: ShieldCheck,
      children: [
        {
          href: "/expertise/protection-coordination/",
          title: "Protection Coordination",
          description: "Protection studies and coordination.",
        },
        {
          href: "/expertise/power-quality/",
          title: "Power Quality Studies & Monitoring",
          description: "Measurement, diagnosis, modelling and mitigation.",
        },
        {
          href: "/expertise/energy-utility-optimization/",
          title: "Energy & Utility Optimization",
          description: "Integrated utility performance and optimization.",
        },
      ],
    },
    {
      title: "Specialist Engineering",
      href: "#",
      icon: Wrench,
      children: [
        {
          href: "/expertise/engineering-consulting-support/",
          title: "Specialist Engineering Consulting",
          description: "Focused project, commissioning and technical support.",
        },
      ],
    },
  ],
  feature: {
    eyebrow: "Our Engineering Approach",
    title: "From system question to validated decision.",
    description:
      "Understand → Model → Simulate → Test → Diagnose → Optimize → Validate.",
    href: "/about/engineering-intelligence/",
    cta: "Explore Our Method",
  },
};

export const industriesMenu: MegaMenuData = {
  label: "Industries",
  href: "/industries",
  icon: Factory,
  description:
    "Engineering intelligence for energy-intensive and mission-critical industrial environments.",
  items: [
    {
      href: "/industries/power-generation-utilities/",
      title: "Power Generation & Utilities",
      description:
        "Grid response, stability, compliance, generator controls and changing operating conditions.",
      icon: Zap,
    },
    {
      href: "/industries/steel-metals-mining/",
      title: "Steel, Metals & Mining",
      description:
        "Captive generation, large dynamic loads and interconnected process utilities.",
      icon: Factory,
    },
    {
      href: "/industries/refining-petrochemicals/",
      title: "Refining & Petrochemicals",
      description:
        "Tightly coupled steam, power, process and electrical systems.",
      icon: FlaskConical,
    },
    {
      href: "/industries/chemicals-fertilizers/",
      title: "Chemicals & Fertilizers",
      description: "Utility/process interactions and production continuity.",
      icon: Boxes,
    },
    {
      href: "/industries/pulp-paper/",
      title: "Pulp & Paper",
      description:
        "Steam/power integration, captive generation and island-operation relevance.",
      icon: Waves,
    },
    {
      href: "/industries/cement-manufacturing/",
      title: "Cement & Manufacturing",
      description:
        "Industrial applications presented where sufficient validated evidence supports the scope.",
      icon: HardHat,
      badge: "Conditional",
    },
    {
      href: "/industries/renewable-evolving-energy/",
      title: "Renewable & Evolving Energy Systems",
      description:
        "Grid integration, stability, model validation and related engineering applications.",
      icon: Leaf,
      badge: "Conditional",
    },
    {
      href: "/industries/epc-project-organizations/",
      title: "EPC & Project Organizations",
      description:
        "Specialist engineering support at technically critical project interfaces.",
      icon: Wrench,
    },
  ],
  feature: {
    eyebrow: "Engineering Across Industries",
    title: "Different industries. Connected system behaviour.",
    description:
      "Power, steam, process, controls and protection must behave together under real operating conditions.",
    href: "/industries/",
    cta: "Explore All Industries",
  },
};

export const productsMenu: MegaMenuData = {
  label: "Products",
  href: "/products/",
  icon: CircuitBoard,
  description:
    "Engineering tools and platforms that make complex system behaviour visible, testable and easier to understand.",
  items: [
    {
      href: "/products/operator-training-simulator/",
      title: "Operator Training Simulator",
      description:
        "Training and simulation capability subject to current product and scope validation.",
      icon: MonitorCog,
    },
    // {
    //   href: "/products/digital-twin-simulation/",
    //   title: "Digital Twin & Simulation Platforms",
    //   description:
    //     "Verified digital models and simulation environments for defined engineering purposes.",
    //   icon: Cpu,
    // },
    // {
    //   href: "/products/ssps/",
    //   title: "SSPS Power Plant Testing Equipment",
    //   description:
    //     "Power-plant testing and HIL methodologies where supported by current technical material.",
    //   icon: Gauge,
    // },
    // {
    //   href: "/products/engineering-software/",
    //   title: "Engineering Products",
    //   description:
    //     "Modelling, power-system, process and control tools used within verified engineering workflows.",
    //   icon: CircuitBoard,
    // },
  ],
  feature: {
    eyebrow: "Digital Engineering",
    title: "Tools with an engineering purpose.",
    description:
      "Digital tools support analysis, training, testing, decision support and model-based validation.",
    href: "/products/",
    cta: "Explore Products",
  },
};

export const projectsMenu: MegaMenuData = {
  label: "Projects & Case Studies",
  href: "/projects/",
  icon: FolderKanban,
  description:
    "Engineering evidence from real systems and real operating challenges.",
  items: [
    {
      href: "/projects/",
      title: "Projects",
      description:
        "Browse controlled reference experience across industries and engineering capabilities.",
      icon: FolderKanban,
    },
    {
      href: "/projects#case-studies",
      title: "Case Studies",
      description:
        "Detailed engineering cases covering challenge, method, findings and outcome classification.",
      icon: Boxes,
    },
  ],
  feature: {
    eyebrow: "Engineering Evidence",
    title: "See how complex challenges are approached.",
    description:
      "Browse projects and approved case evidence by industry and expertise.",
    href: "/projects/",
    cta: "Explore Projects",
  },
};

export const aboutMenu: MegaMenuData = {
  label: "About",
  href: "/about/",
  icon: Building2,
  description:
    "The people, philosophy, heritage and governance behind Solvina's engineering approach.",
  items: [
    {
      href: "/about#company",
      title: "Company",
      description:
        "Who Solvina is and how the engineering organization is positioned.",
    },
    {
      href: "/about#engineering-intelligence",
      title: "Engineering Intelligence",
      description:
        "Integrated systems thinking and the model-to-plant engineering approach.",
    },
    {
      href: "/about#history-heritage",
      title: "History & Heritage",
      description:
        "Swedish engineering heritage presented through approved corporate language.",
    },
    {
      href: "/about#leadership-experts",
      title: "Leadership & Experts",
      description: "Management and subject-matter engineering expertise.",
    },
    {
      href: "/about#global-presence",
      title: "Global Presence",
      description:
        "Current validated locations, relationships and project reach.",
    },
    {
      href: "/about#values-governance",
      title: "Values & Governance",
      description:
        "Technical excellence, integrity, collaboration and evidence discipline.",
    },
  ],
};