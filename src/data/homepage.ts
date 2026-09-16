import type { LucideIcon } from "lucide-react";
import { assetPath } from "@/lib/assets";
import {
  Cog,
  Gauge,
  GitBranch,
  Network,
  Activity,
  SlidersHorizontal,
  ShieldCheck,
  ScanSearch,
  Zap,
  FlaskConical,
  Cpu,
  Search,
  Box,
  Play,
  Stethoscope,
  BadgeCheck,
  CircuitBoard,
  Cable,
  Settings2,
} from "lucide-react";

export const trustProof = [
  {
    type: "text" as const,
    value: "Our Engineering Experience",
    description: "",
  },
  {
    type: "number" as const,
    value: 400,
    suffix: "+",
    title: "Grid India / POSOCO — pan-India frequency response programme",
    description: "Generating units tested for thermal hydro and gas based plants",
  },
  {
    type: "number" as const,
    value: 85,
    suffix: "+",
    title: "Grid compliance, island operation & power system studies",
    description: "Engineering projects delivered",
  },
  {
    type: "number" as const,
    value: 35,
    suffix: "+",
    title: "NTPC, Tata, Adani, Reliance, NHPC, JSW & more",
    description: "Satisfied customers across Power utilities, IPPs & CPPs",
  },
];

export type Customer = {
  id: string;
  name: string;
  logo?: string;
};

const customerDefinitions: Customer[] = [
  {
    id: "ntpc",
    name: "NTPC",
    logo: "./images/customers/ntpc.jpg",
  },
  {
    id: "grid-india",
    name: "Grid-India",
    logo: "./images/customers/grid-india.jpg",
  },
  {
    id: "nhpc",
    name: "NHPC",
    logo: "./images/customers/nhpc.jpg",
  },
  {
    id: "sjvn",
    name: "SJVN",
    logo: "./images/customers/sjvn.jpg",
  },
  {
    id: "thdc-india",
    name: "THDC India",
    logo: "./images/customers/thdc-india.jpg",
  },
  {
    id: "neepco",
    name: "NEEPCO",
    logo: "./images/customers/neepco.jpg",
  },
  {
    id: "tata-power",
    name: "Tata Power",
    logo: "./images/customers/tata-power.jpg",
  },
  {
    id: "tata-steel",
    name: "Tata Steel",
    logo: "./images/customers/tata-steel.jpg",
  },
  {
    id: "adani",
    name: "Adani",
    logo: "./images/customers/adani.jpg",
  },
  {
    id: "reliance-industries",
    name: "Reliance Industries",
    logo: "./images/customers/reliance-industries.png",
  },
  {
    id: "jsw",
    name: "JSW",
    logo: "./images/customers/jsw.jpg",
  },
  {
    id: "jindal-power",
    name: "Jindal Power",
    logo: "./images/customers/jindal-power.jpg",
  },
  {
    id: "vedanta",
    name: "Vedanta",
    logo: "./images/customers/vedanta.jpg",
  },
  {
    id: "balco",
    name: "BALCO",
    logo: "./images/customers/balco.jpg",
  },
  {
    id: "indianoil",
    name: "IndianOil",
    logo: "./images/customers/indianoil.jpeg",
  },
  {
    id: "cesc",
    name: "CESC",
    logo: "./images/customers/cesc.jpg",
  },
  {
    id: "nlc-india",
    name: "NLC India",
    logo: "./images/customers/nlc-india.jpg",
  },
  {
    id: "uprvunl",
    name: "UPRVUNL",
    logo: "./images/customers/uprvunl.jpg",
  },
  {
    id: "iffco",
    name: "IFFCO",
    logo: "./images/customers/iffco.jpg",
  },
];

export const customers = customerDefinitions.map((customer) => ({
  ...customer,
  logo: customer.logo ? assetPath(customer.logo) : undefined,
}));

export const customerChallenges = [
  {
    number: "01",
    title: "Interconnected Systems",
    description:
      "A change in one part of an industrial energy system can propagate through generation, steam networks, process loads, controls and protection.",
    icon: Network,
  },
  {
    number: "02",
    title: "Disturbance Behaviour",
    description:
      "The most important questions often appear during trips, islanding, frequency events, load changes and other transitions.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Control Interaction",
    description:
      "Individual control loops may be stable while the overall plant response remains poorly coordinated.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Grid Compliance",
    description:
      "Compliance requires credible evidence of actual generator and control-system behaviour, not only documentation.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Engineering Uncertainty",
    description:
      "Critical operating or investment decisions become stronger when assumptions are tested through modelling, simulation and validation.",
    icon: ScanSearch,
  },
] satisfies {
  number: string;
  title: string;
  image?: string;
  description: string;
  icon: LucideIcon;
}[];

export const homepageAbout = {
  eyebrow: "ABOUT SOLVINA",

  title: "Engineering intelligence for complex industrial systems.",

  description:
    "Solvina combines power-system, thermodynamic/process and control engineering to understand complex industrial-system behaviour and turn analysis into practical engineering action.",

  heritage:
    "With Swedish engineering heritage, Solvina brings a multidisciplinary approach to complex power, process and control systems.",

  cta: {
    label: "About Solvina",
    href: "/about/",
  },

  image: {
    src: assetPath("/images/about-engineer-plant.png"),
    alt: "Engineer working with industrial power and process systems",
  },
};

export const whySolvina = [
  {
    number: "01",
    title: "Integrated Systems Intelligence",
    description:
      "See power, steam, process, controls and protection as one interacting system.",
    visual: "systems",
  },
  {
    number: "02",
    title: "Model-to-Plant Engineering",
    description:
      "Connect engineering models to simulation, testing, tuning and validation.",
    visual: "model-to-plant",
  },
  {
    number: "03",
    title: "Dynamic Behaviour Expertise",
    description:
      "Understand what happens during transitions and disturbances, not only steady state.",
    visual: "dynamic",
  },
  {
    number: "04",
    title: "Control & Operability",
    description:
      "Translate analysis into coordinated control and practical operating recommendations.",
    visual: "control",
  },
  {
    number: "05",
    title: "Evidence-Led Engineering",
    description:
      "Build recommendations from models, measurements, tests and validated project evidence.",
    visual: "evidence",
  },
  {
    number: "06",
    title: "Engineering Partnership",
    description:
      "Work closely with plant/project teams on technically difficult problems.",
    visual: "partnership",
  },
] as const;

export const expertiseFamilies = [
  {
    number: "01",
    title: "Island Operation",
    description:
      "Feasibility studies and on-grid testing of island operation capability — generation-load balance, governor response and separation logic.",
    linkLabel: "Island Operation",
    href: "/expertise/island-operation/",
    icon: GitBranch,
  },
  {
    number: "02",
    title: "Grid code Compliance",
    description:
      "Simulation and on-site testing to demonstrate generator grid code compliance — frequency response, voltage response, AVR/PSS and governor behaviour.",
    linkLabel: "Grid Code Compliance",
    href: "/expertise/grid-code-compliance/",
    icon: Zap,
  },
  {
    number: "03",
    title: "Integrated Steam, Power & Control Systems",
    description:
      "Dynamic modelling of steam, turbines, boilers and electrical networks to understand how an integrated plant behaves under real disturbances.",
    linkLabel: "Integrated Steam & Power Systems",
    href: "/expertise/integrated-steam-power-systems/",
    icon: Network,
  },
  {
    number: "04",
    title: "Dynamic Simulation & System Modelling",
    description:
      "Time-domain modelling of power, steam and control systems to study disturbances, transitions and control interactions before they happen in the field.",
    linkLabel: "Dynamic Simulation & System Modelling",
    href: "/expertise/dynamic-simulation-system-modelling/",
    icon: Activity,
  },
  {
    number: "05",
    title: "Plant Control & Operability",
    description:
      "Improve coordinated boiler, turbine, governor, AVR/PSS and process-control behaviour.",
    linkLabel: "Plant Control & Operability",
    href: "/expertise/plant-control-optimization/",
    icon: SlidersHorizontal,
  },
  {
    number: "06",
    title: "Protection & Power Quality",
    description:
      "Support reliable electrical operation through coordination, measurement and analysis.",
    linkLabel: "Protection / Power Quality",
    href: "/expertise/protection-coordination/",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Energy & Utility Optimization",
    description:
      "Use integrated engineering insight to improve utility-system decisions.",
    linkLabel: "Energy & Utility Optimization",
    href: "/expertise/energy-utility-optimization/",
    icon: Gauge,
  },
  {
    number: "08",
    title: "Industrial Automation & Digital Engineering",
    description:
      "Automation, simulation and digital engineering applied to verified industrial workflows — presented against the problem solved, not the technology.",
    linkLabel: "Industrial Automation & Digital Engineering",
    href: "/expertise/industrial-automation-digital-engineering/",
    icon: Cog, 
  },
] as const;

export const modelToPlantMethod = [
  {
    number: "01",
    step: "Understand",
    description:
      "Define the system, operating problem, interfaces and decision context.",
  },
  {
    number: "02",
    step: "Model",
    description:
      "Build or validate the engineering representation needed for the question.",
  },
  {
    number: "03",
    step: "Simulate",
    description:
      "Explore normal, disturbed and alternative operating scenarios.",
  },
  {
    number: "04",
    step: "Test",
    description:
      "Use controlled testing, measurement or HIL approaches where applicable and supported.",
  },
  {
    number: "05",
    step: "Diagnose",
    description: "Identify interactions, limitations and root causes.",
  },
  {
    number: "06",
    step: "Optimize",
    description:
      "Develop settings, control strategies or engineering recommendations.",
  },
  {
    number: "07",
    step: "Validate",
    description:
      "Confirm that the model, settings or recommended behaviour are supported by appropriate evidence.",
  },
] as const;

export const modelToPlantMethods = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    meaning:
      "Define the system, operating problem, interfaces and decision context.",
    icon: Network,
  },
  {
    id: "model",
    number: "02",
    title: "Model",
    meaning:
      "Build or validate the engineering representation needed for the question.",
    icon: CircuitBoard,
  },
  {
    id: "simulate",
    number: "03",
    title: "Simulate",
    meaning: "Explore normal, disturbed and alternative operating scenarios.",
    icon: Activity,
  },
  {
    id: "test",
    number: "04",
    title: "Test",
    meaning:
      "Use controlled testing, measurement or HIL approaches where applicable and supported.",
    icon: Gauge,
  },
  {
    id: "diagnose",
    number: "05",
    title: "Diagnose",
    meaning: "Identify interactions, limitations and root causes.",
    icon: Cable,
  },
  {
    id: "optimize",
    number: "06",
    title: "Optimize",
    meaning:
      "Develop settings, control strategies or engineering recommendations.",
    icon: Settings2,
  },
  {
    id: "validate",
    number: "07",
    title: "Validate",
    meaning:
      "Confirm that the model, settings or recommended behaviour are supported by appropriate evidence.",
    icon: ShieldCheck,
  },
];

const industryDefinitions = [
  {
    number: "01",
    title: "Power Generation & Utilities",
    description:
      "Grid response, stability, compliance and coordinated generation controls.",
    href: "/industries/power-generation-utilities/",
    image: "./images/power-generation-utilities.jpeg",
  },
  {
    number: "02",
    title: "Steel, Metals & Mining",
    description:
      "Captive generation, large dynamic loads and interconnected process utilities.",
    href: "/industries/steel-metals-mining/",
    image: "./images/steel-metals-mining.jpeg",
  },
  {
    number: "03",
    title: "Refining & Petrochemicals",
    description:
      "Tightly coupled steam, power, process and electrical networks.",
    href: "/industries/refining-petrochemicals/",
    image: "./images/refining-petrochemicals.jpeg",
  },
  {
    number: "04",
    title: "Chemicals & Fertilizers",
    description:
      "Utility disturbances and control interactions that can affect production.",
    href: "/industries/chemicals-fertilizers/",
    image: "./images/chemicals-fertilizers.png",
  },
  {
    number: "05",
    title: "Pulp & Paper",
    description:
      "Steam/power integration, production continuity and island-operation behaviour.",
    href: "/industries/pulp-paper/",
    image: "./images/pulp-paper.png",
  },
  {
    number: "06",
    title: "EPC & Project Organizations",
    description:
      "Specialist analysis and validation at technically critical project interfaces.",
    href: "/industries/epc-project-organizations/",
    image: "./images/epc-project-organizations.png",
  },
] as const;

export const solutions = [
  {
    id: "reliability-resilience",
    number: "01",
    theme: "Reliability & Resilience",
    valueDirection:
      "Understand vulnerabilities and system response before critical disturbances.",
    icon: ShieldCheck,
  },
  {
    id: "grid-compliance-integration",
    number: "02",
    theme: "Grid Compliance & Integration",
    valueDirection:
      "Translate requirements into technically credible studies, tests, models and validated response.",
    icon: Network,
  },
  {
    id: "plant-control-operability",
    number: "03",
    theme: "Plant Control & Operability",
    valueDirection:
      "Improve understanding and coordination of interacting plant-control systems.",
    icon: SlidersHorizontal,
  },
  {
    id: "energy-utility-performance",
    number: "04",
    theme: "Energy & Utility Performance",
    valueDirection:
      "Use integrated system insight to identify technically grounded operating and optimization opportunities.",
    icon: Gauge,
  },
  {
    id: "engineering-risk-reduction",
    number: "05",
    theme: "Engineering Risk Reduction",
    valueDirection:
      "Test assumptions and critical scenarios before field decisions, where simulation or testing is applicable.",
    icon: FlaskConical,
  },
  {
    id: "digital-engineering-simulation",
    number: "06",
    theme: "Digital Engineering & Simulation",
    valueDirection:
      "Use models and verified digital tools to support safer, more informed engineering decisions.",
    icon: Cpu,
  },
];

export const industriesServed = industryDefinitions.map((industry) => ({
  ...industry,
  image: assetPath(industry.image),
}));

export const softwareTools = [
  {
    number: "01",
    name: "SolvTREE",
    category: "ENGINEERING PLATFORM",
    description:
      "Real-time asset performance and supply-chain management for furnace, caster and rolling operations.",
    video: "/videos/bixtree.mp4",
    poster: "/images/bixtree-poster.jpg",
    href: "/products/",
  },
  {
    number: "02",
    name: "SIMPOW",
    category: "POWER SYSTEM SIMULATION",
    description:
      "Power system simulation software for load-flow, short-circuit and dynamic stability studies.",
    video: "/videos/simpow.mp4",
    poster: "/images/simpow-poster.jpg",
    href: "/products/",
  },
  {
    number: "03",
    name: "SolvOTS",
    category: "OPERATOR TRAINING",
    description:
      "Browser-based, physics-driven operator training simulator with scenario and fault-injection libraries.",
    video: "/videos/solvsim.mp4",
    poster: "/images/solvsim-poster.jpg",
    href: "/products/",
  },
  {
    number: "04",
    name: "SolvIT",
    category: "MONITORING & DIAGNOSTICS",
    description:
      "Centralised monitoring of protection relays, energy meters and power-quality meters across sites.",
    video: "/videos/solvit.mp4",
    poster: "/images/solvit-poster.jpg",
    href: "/products/",
  },
] as const;

export const globalProof = [
  {
    value: "1,000",
    suffix: "+",
    label: "Projects delivered since 1997",
    position: "top-left",
    accent: "gold",
  },
  {
    value: "200",
    suffix: "+",
    label: "Customers worldwide",
    position: "right-middle",
    accent: "magenta",
  },
  {
    value: "25",
    suffix: "+",
    label: "Countries served",
    position: "bottom-center",
    accent: "gold",
  },
] as const;
