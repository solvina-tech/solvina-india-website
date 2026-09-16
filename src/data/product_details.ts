export interface ProductSection {
  title: string;
  eyebrow?: string;
  lead?: string;
  items?: string[];
  paragraphs?: string[];
}

export interface Product {
  id: string;
  name: string;
  shortName: string;

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
  governance: ProductSection;
  engineeringQuestionCta: ProductSection;

  capabilities: {
    title: string;
    description: string;
  }[];

  advantage: string[];

  roadmap: {
    phase: string;
    status: string;
    items: string[];
  }[];

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

    hero: {
      eyebrow: "ENGINEERING INTELLIGENCE",

      headline:
        "Operator Training Simulation with a Defined Engineering Purpose",

      supportingCopy:
        "A centralized, browser-based simulation platform designed to build confident, operationally ready personnel through realistic, physics-based training.",

      primaryCta: "Talk to Our Engineers",

      secondaryCta: "Discuss Your Engineering Challenge",
    },

    engineeringProblem: {
      title: "Engineering Problem",

      lead:
        "How can operators prepare for critical situations and fault conditions without exposing a live system to operational risk?",

      paragraphs: [
        "Operator training often needs to go beyond classroom instruction and limited hands-on practice. Critical scenarios need to be repeatable, measurable, and safe to exercise before they occur in an operating environment.",
        "The OTS addresses this training problem through controlled simulation, scenario-based exercises, fault injection, monitoring, and post-session evaluation.",
      ],
    },

    engineeringPurpose: {
      title: "Engineering Purpose",

      lead:
        "OTS provides a centralized, browser-based environment for physics-based operator training and operational readiness exercises.",

      paragraphs: [
        "The platform combines an FMU-based dynamic simulation engine with a configurable SCADA environment, scenario-based training, real-time monitoring, alarm management, and event logging.",
        "Training activities can be structured around defined scenarios, controlled events, faults, alarms, operator actions, and system responses. The resulting session information can then be used for evaluation and improvement.",
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
        "Current commercial and ownership status — validation required",
      ],
    },

    governance: {
      title: "Evidence and Governance",

      lead:
        "Product information should be presented together with its current engineering and commercial context.",

      items: [
        "Current product name and scope must be verified",
        "Ownership or relationship with the product must be verified",
        "Reference applications must be verified before publication",
        "Applicable Solvina engineering services must be established for each use case",
        "Current commercial status must be verified before making offering or demo claims",
        "Product capabilities and roadmap statements should remain aligned with the current product status",
      ],
    },

    engineeringQuestionCta: {
      title:
        "Use the Tool in the Context of an Engineering Question",

      lead:
        "Discuss the engineering problem, training objective, process or plant context, and validation requirements with the relevant technical specialist.",

      paragraphs: [
        "The appropriate next step is an engineering discussion rather than a generic product demonstration. A demo CTA should only be introduced when the current offering and commercial status have been verified.",
      ],
    },

    capabilities: [
      {
        title: "Dynamic Simulation Engine",
        description:
          "FMU-based physics simulation with start, stop, pause, resume, snapshot, and real-time parameter injection.",
      },

      {
        title: "SCADA Design Studio",
        description:
          "Drag-and-drop canvas with component library, property mapping, and theme customization.",
      },

      {
        title: "Scenario-Based Training",
        description:
          "Multi-step training sequences with timed events, fault injection, and reusable scenario libraries.",
      },

      {
        title: "Real-Time Monitoring",
        description:
          "Live variable graphs, WebSocket updates, and configurable data windows for operational analysis.",
      },

      {
        title: "Alarm Management",
        description:
          "Configurable threshold alarms with severity levels, acknowledgement, and timestamped history.",
      },

      {
        title: "Event Logging",
        description:
          "Complete audit trail of operator actions, sequence events, and system states for post-session review.",
      },
    ],

    advantage: [
      "Safe, risk-free training with no live system impact",
      "Physics-based FMU simulation for realism",
      "Repeatable, measurable scenario exercises",
      "Advanced SCADA drag-and-drop design",
      "Alarm and event log with full audit trail",
      "Role-based Admin and Operator views",
      "Browser-based with no installation required",
      "Reusable training libraries",
    ],

    roadmap: [
      {
        phase: "Phase 1",
        status: "Available Now",
        items: [
          "Dynamic Simulation",
          "SCADA Design Studio",
          "Scenario Training",
          "Alarm Management",
          "Event Logging",
        ],
      },

      {
        phase: "Phase 2",
        status: "Coming Next",
        items: [
          "Simulation Replay",
          "Session Recording",
          "Training Reports",
          "Competency Tracking",
        ],
      },

      {
        phase: "Phase 3",
        status: "Roadmap",
        items: [
          "Role-Based Certification",
          "Analytics Dashboard",
          "Mobile Monitoring",
        ],
      },
    ],

    validation: {
      productName: "Operator Training Simulator (OTS)",

      scope:
        "Centralized, browser-based operator training simulation platform with FMU-based physics simulation, SCADA design, scenario training, monitoring, alarm management, and event logging.",

      ownershipRelationship:
        "Validation required.",

      referenceApplications:
        "Not specified in the current product source.",

      commercialStatus:
        "Phase 1 capabilities are identified as Available Now in the supplied product flyer; current commercial/ownership status should be validated before making a commercial offering or demo claim.",
    },
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};