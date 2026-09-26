export interface ProductSection {
  title: string;
  eyebrow?: string;
  lead?: string;
  items?: string[];
  paragraphs?: string[];
}

export interface ProductCapability {
  title: string;
  description: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  category: string;

  description: string;

  images: string[];

  externalLink?: {
    label: string;
    href: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
  };

  engineeringProblem: ProductSection;
  engineeringPurpose: ProductSection;
  workflow: ProductSection;
  technicalScope: ProductSection;
  engineeringQuestionCta: ProductSection;

  capabilities?: ProductCapability[];

  validation: {
    productName: string;
    scope: string;
    ownershipRelationship: string;
    referenceApplications: string;
    commercialStatus: string;
  };
}

export const products: Product[] = [
  {
    id: "operator-training-simulator",
    name: "Operator Training Simulator",
    shortName: "OTS",
    category: "Simulation & Training",

    description:
      "Browser-based, physics-driven operator training simulation for controlled scenario exercises, fault injection and operational readiness.",

    images: [
      "/images/products/ots/ots1.png",
      "/images/products/ots/ots2.png",
      "/images/products/ots/ots3.png",
      "/images/products/ots/ots4.png",
      "/images/products/ots/ots5.png",
      "/images/products/ots/ots6.png",
      "/images/products/ots/ots7.png",
    ],

    hero: {
      eyebrow: "ENGINEERING INTELLIGENCE",
      headline:
        // "Operator Training Simulation with a Defined Engineering Purpose",
        "Operator Training Simulator",
      supportingCopy:
        "A centralized, browser-based simulation platform designed to build confident, operationally ready personnel through realistic, physics-based training.",
      primaryCta: "Book a Demo",
      secondaryCta: "Discuss Your Engineering Challenge",
    },

    engineeringProblem: {
      title: "Engineering Problem",
      lead:
        "How can operators prepare for critical situations and fault conditions without exposing a live system to operational risk?",
      paragraphs: [
        "Training needs to provide repeatable and measurable exposure to situations that may be difficult or unsafe to reproduce on a live system.",
        "OTS provides a controlled environment for scenario-based exercises, fault injection, operator actions and post-session evaluation.",
      ],
    },

    engineeringPurpose: {
      title: "Engineering Purpose",
      lead:
        "OTS provides a centralized environment for physics-based operator training and operational readiness exercises.",
      paragraphs: [
        "The platform combines an FMU-based dynamic simulation engine with a configurable SCADA environment, scenario-based training, real-time monitoring, alarm management and event logging.",
        "Training can be structured around defined scenarios, timed events, faults, alarms, operator actions and system responses.",
      ],
    },

    workflow: {
      title: "Typical Workflow",
      items: [
        "Define the engineering question",
        "Select or prepare the appropriate model or test configuration",
        "Run relevant scenarios or controlled tests",
        "Analyse response and limitations",
        "Connect results to engineering decisions and validation",
      ],
    },

    technicalScope: {
      title: "Technical Scope",
      items: [
        "Training objective and target users",
        "Plant/process model scope",
        "Simulation and operator scenarios",
        "Training workflow",
        "Dynamic simulation and parameter injection",
        "SCADA design and monitoring",
        "Alarm and event logging",
      ],
    },

    engineeringQuestionCta: {
      title: "Use the Tool in the Context of an Engineering Question",
      lead:
        "Discuss the engineering problem, training objective, process or plant context and validation requirements with the relevant technical specialist.",
      paragraphs: [
        "The appropriate next step is an engineering discussion rather than a generic product demonstration.",
      ],
    },

    capabilities: [
      {
        title: "Dynamic Simulation",
        description:
          "FMU-based physics simulation with controlled simulation states and real-time parameter injection.",
      },
      {
        title: "SCADA Design",
        description:
          "Configurable SCADA environment with component mapping and visualization.",
      },
      {
        title: "Scenario Training",
        description:
          "Multi-step training sequences with timed events, fault injection and reusable scenarios.",
      },
      {
        title: "Monitoring & Alarms",
        description:
          "Real-time monitoring, configurable alarms and timestamped operational information.",
      },
      {
        title: "Event Logging",
        description:
          "Audit trail of operator actions, sequence events and system states for post-session review.",
      },
      {
        title: "Browser-Based Access",
        description:
          "Training environment designed to operate through a browser without local installation.",
      },
    ],

    validation: {
      productName: "Operator Training Simulator (OTS)",
      scope:
        "Centralized, browser-based operator training simulation platform with FMU-based physics simulation, SCADA design, scenario training, monitoring, alarm management and event logging.",
      ownershipRelationship: "Validation required.",
      referenceApplications:
        "Not specified in the current product source.",
      commercialStatus:
        "The supplied flyer identifies Phase 1 capabilities as Available Now. Current commercial and ownership status should be validated before making a commercial offering or demo claim.",
    },
  },

  {
    id: "power-quality-energy-measurement",
    name: "Power Quality & Energy Measurement",
    shortName: "PQ & Energy",
    category: "Power Quality & Energy Measurement",

    description:
      "Measurement equipment for electrical power-quality and energy monitoring across industrial and infrastructure applications.",

    images: [
      "/images/products/pq-energy-1.png",
      "/images/products/pq-energy-2.png",
    ],

    externalLink: {
      label: "View Product Range at Camille Bauer",
      href: "https://camillebauer.com/en/products/",
    },

    hero: {
      eyebrow: "ENGINEERING MEASUREMENT",
      headline: "Power Quality & Energy Measurement",
      supportingCopy:
        "Electrical measurement equipment supporting power-quality monitoring, energy measurement and reporting across industrial and infrastructure applications.",
      primaryCta: "Talk to Our Engineers",
      secondaryCta: "Discuss Your Engineering Challenge",
    },

    engineeringProblem: {
      title: "Engineering Problem",
      lead:
        "How can electrical systems be measured consistently enough to support power-quality assessment, energy monitoring and engineering decisions?",
      paragraphs: [
        "The supplied product information covers electrical measurement, power-quality compliance and communication requirements for connected monitoring applications.",
      ],
    },

    engineeringPurpose: {
      title: "Engineering Purpose",
      lead:
        "The product range provides measurement capabilities for electrical networks where power-quality and energy information needs to be captured and communicated.",
      paragraphs: [
        "The supplied specifications reference IEC 61000-4-30 Ed.3 Class A, EN 50160 reporting and Class 0.5S energy accuracy.",
        "The equipment supports direct, CT and Rogowski/LCPT measurement configurations, with communications including Ethernet, RS485, Modbus and REST API options.",
      ],
    },

    workflow: {
      title: "Typical Workflow",
      items: [
        "Define the measurement requirement",
        "Select the appropriate measurement configuration",
        "Connect and acquire electrical measurements",
        "Analyse power-quality and energy information",
        "Connect the results to the engineering application",
      ],
    },

    technicalScope: {
      title: "Technical Scope",
      items: [
        "Power-quality and energy measurement",
        "IEC 61000-4-30 Ed.3 Class A compliance",
        "EN 50160 reporting",
        "Class 0.5S energy accuracy",
        "Direct, CT and Rogowski/LCP measurement",
        "Ethernet, RS485, Modbus and REST API communications",
      ],
    },

    engineeringQuestionCta: {
      title: "Use the Measurement in the Context of an Engineering Question",
      lead:
        "Discuss the electrical measurement requirement, network configuration and intended engineering application with the relevant technical specialist.",
      paragraphs: [
        "For detailed product specifications and the manufacturer's current product range, refer to Camille Bauer.",
      ],
    },

    validation: {
      productName: "Power Quality & Energy Measurement",
      scope:
        "Electrical measurement equipment covering power-quality and energy measurement, with the specifications shown in the supplied product reference.",
      ownershipRelationship:
        "Manufacturer reference: Camille Bauer Metrawatt AG. Solvina relationship requires validation.",
      referenceApplications:
        "The supplied reference identifies data centres, critical facilities, utilities, distribution networks, renewables, storage, industrial and E-mobility applications.",
      commercialStatus:
        "Current Solvina commercial status and exact product configurations require validation.",
    },
  },

  {
    id: "position-sensors",
    name: "Position Sensors",
    shortName: "Position Sensors",
    category: "Position Measurement",

    description:
      "Non-contact capacitive and magnetoresistive sensors for angle and inclination measurement across industrial and infrastructure applications.",

    images: [
      "/images/products/position-sensor-1.png",
      "/images/products/position-sensor-2.png",
    ],

    externalLink: {
      label: "View Product Range at Camille Bauer",
      href: "https://camillebauer.com/en/products/",
    },

    hero: {
      eyebrow: "ENGINEERING MEASUREMENT",
      headline: "Position Sensors for Industrial Measurement",
      supportingCopy:
        "Non-contact capacitive and magnetoresistive sensing for angle and inclination measurement in demanding industrial environments.",
      primaryCta: "Talk to Our Engineers",
      secondaryCta: "Discuss Your Engineering Challenge",
    },

    engineeringProblem: {
      title: "Engineering Problem",
      lead:
        "How can mechanical position, angle or inclination be measured reliably where direct contact may be undesirable?",
      paragraphs: [
        "The supplied product reference covers non-contact sensing technologies for angle and inclination measurement, with applications spanning power, water, heavy machinery, mobility and hazardous areas.",
      ],
    },

    engineeringPurpose: {
      title: "Engineering Purpose",
      lead:
        "The sensor range provides position feedback for equipment and processes where angular or inclination measurement is required.",
      paragraphs: [
        "The supplied specifications reference capacitive and magnetoresistive measuring principles, basic accuracy up to ±0.2°, 14-bit resolution and measurement ranges from 0–5° up to 0–360°.",
      ],
    },

    workflow: {
      title: "Typical Workflow",
      items: [
        "Define the required position or angle measurement",
        "Select the appropriate sensing principle and range",
        "Install and configure the sensor",
        "Acquire and assess position feedback",
        "Connect the measurement to the engineering application",
      ],
    },

    technicalScope: {
      title: "Technical Scope",
      items: [
        "Non-contact capacitive and magnetoresistive sensing",
        "Angle and inclination measurement",
        "Basic accuracy up to ±0.2°",
        "14-bit resolution",
        "Measurement ranges from 0–5° up to 0–360°",
        "4–20 mA and SSI outputs",
        "CANopen and HART communication options",
        "IP66–IP69K housing options",
        "Operating temperature from −40°C to +85°C",
      ],
    },

    engineeringQuestionCta: {
      title: "Use the Sensor in the Context of an Engineering Question",
      lead:
        "Discuss the required measurement range, installation environment, interface and engineering application with the relevant technical specialist.",
      paragraphs: [
        "For detailed product specifications and the manufacturer's current product range, refer to Camille Bauer.",
      ],
    },

    validation: {
      productName: "Position Sensors",
      scope:
        "Position sensors covering non-contact angle and inclination measurement using capacitive and magnetoresistive principles.",
      ownershipRelationship:
        "Manufacturer reference: Camille Bauer Metrawatt AG. Solvina relationship requires validation.",
      referenceApplications:
        "The supplied reference identifies power and grid, water and fluid control, heavy machinery and robotics, mobility and hazardous-area applications.",
      commercialStatus:
        "Current Solvina commercial status and exact product configurations require validation.",
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};