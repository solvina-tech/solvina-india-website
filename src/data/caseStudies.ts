export type CaseStudy = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  expertise: string[];
};

import { assetPath } from "@/lib/assets";

const caseStudyDefinitions: CaseStudy[] = [
  {
    id: "reliance-integrated-steam-power",
    number: "01",
    title: "Integrated Steam & Power Dynamic Studies",
    category: "Integrated Steam & Power",
    description:
      "A comprehensive study of the integrated steam and power systems at Reliance Industries' Hazira and Dahej sites, covering islanded and grid-connected operation, network studies, transient stability, PSS validation, plant testing and safeguarding island operation capability.",
    image: "/images/case-studies/reliance-integrated-steam-power.jpg",
    href: "/projects/case-studies/reliance-integrated-steam-power/",
    expertise: [
      "Integrated Steam & Power Studies",
      "Power System Studies",
      "Transient Stability",
      "PSS Validation",
      "Plant Testing",
      "Island Operation",
    ],
  },
  {
    id: "borealis-dynamic-studies",
    number: "02",
    title: "Steam Network Dynamic Studies & Control Strategy",
    category: "Dynamic Studies & Control",
    description:
      "Dynamic simulation and control-system development for Borealis' cracker steam network, investigating the impact of an LD5 plant trip and developing control strategies to maintain acceptable steam pressures during transients.",
    image: "/images/case-studies/borealis-dynamic-studies.jpg",
    href: "/projects/case-studies/borealis-dynamic-studies/",
    expertise: [
      "Dynamic Simulation",
      "Steam Systems",
      "Control Strategy",
      "Transient Analysis",
      "Model Verification",
    ],
  },
  {
    id: "iggesund-dynamic-control-design",
    number: "03",
    title: "Dynamic Study & Steam Net Control Design",
    category: "Control Design & Tuning",
    description:
      "Dynamic modelling, control design and tuning for Iggesund Paperboard's complex steam network ahead of the installation of a new recovery boiler and turbine, including transient simulations, operator training and island-operation testing.",
    image: "/images/case-studies/iggesund-dynamic-control-design.jpg",
    href: "/projects/case-studies/iggesund-dynamic-control-design/",
    expertise: [
      "Steam Net Control",
      "Dynamic Simulation",
      "Control Tuning",
      "Operator Training",
      "Island Operation",
    ],
  },
  {
    id: "tata-steel-kalinganagar-dynamic-study",
    number: "04",
    title: "Power, Steam & Gas System Dynamic Study",
    category: "Power System Reliability",
    description:
      "A holistic dynamic study of Tata Steel Kalinganagar's tightly coupled power, steam and gas systems, addressing disturbance and island operation, transient stability, short-circuit conditions, control strategy and design gaps affecting plant reliability and stability.",
    image: "/images/case-studies/tata-steel-kalinganagar.jpg",
    href: "/projects/case-studies/tata-steel-kalinganagar-dynamic-study/",
    expertise: [
      "Power System Studies",
      "Island Operation",
      "Transient Stability",
      "Steam & Gas Systems",
      "Control Strategy",
      "Reliability & Stability",
    ],
  },
  {
    id: "power-plant-tests-350-generators",
    number: "05",
    title: "Power Plant Tests at Over 350 Generators",
    category: "Power Plant Testing & Tuning",
    description:
      "Global power plant testing and tuning experience covering more than 350 generators, with tests for voltage and frequency control, island-operation stability, PSS verification, load rejection, active power and reactive power control using Solvina's SolvSim Power Station Hardware-in-the-Loop method.",
    image: "/images/case-studies/power-plant-tests.jpg",
    href: "/projects/case-studies/power-plant-tests-350-generators/",
    expertise: [
      "Power Plant Testing",
      "Generator Testing",
      "Island Operation",
      "PSS Verification & Tuning",
      "Frequency & Voltage Control",
      "Hardware-in-the-Loop",
    ],
  },
];

export const caseStudies = caseStudyDefinitions.map((caseStudy) => ({
  ...caseStudy,
  image: assetPath(caseStudy.image),
}));
