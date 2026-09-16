export type ProductPage = Record<string, any>;

export const softwareToolsOverview = {
  "url": "/software-tools/",
  "seo": {
    "title": "Software & Engineering Tools | Solvina India",
    "description": "Engineering software, simulation platforms and testing assets used to make complex industrial system behaviour visible and testable.",
    "keyword": "industrial engineering software simulation tools"
  },
  "h1": "Engineering Tools That Make Complex System Behaviour Visible and Testable",
  "intro": "Solvina's software and test-tool portfolio should be presented as an extension of engineering expertise. The important question is not which technology is being promoted, but what engineering problem it helps solve. The public portfolio must distinguish Solvina-owned products, engineering methods, partner technologies and third-party tools used in delivery.",
  "governanceIntro": "Product names, ownership, current commercial availability and reference applications require current technical and commercial validation before publication. The data therefore preserves evidence status rather than turning conditional source material into unsupported product claims."
};

export const productPages: ProductPage[] = [
  {
    "slug": "bixtree",
    "name": "BIXTREE",
    "category": "Industrial Performance & Monitoring",
    "status": "conditional",
    "relationship": "Solvina product",
    "description": "Realtime Asset Performance & Supply Chain Management.",
    "engineeringPurpose": "A product direction focused on real-time asset performance and supply-chain management in industrial operations.",
    "capabilities": [
      "Real-time asset performance management",
      "Supply-chain management"
    ],
    "applications": [
      "Industrial asset-performance visibility",
      "Operational performance monitoring",
      "Supply-chain information management"
    ],
    "evidence": "The Solvina company profile lists BIXTREE as Realtime Asset Performance & Supply Chain Management.",
    "governance": "Current product scope, ownership, commercial availability and reference applications must be verified before detailed public publication.",
    "relatedExpertise": [
      "industrial-automation-digital-engineering",
      "energy-utility-optimization"
    ]
  },
  {
    "slug": "simpow",
    "name": "SIMPOW",
    "category": "Power-System Simulation",
    "status": "conditional",
    "relationship": "Solvina product",
    "description": "Power System Simulation Software.",
    "engineeringPurpose": "Power-system simulation supporting network modelling and engineering analysis within the applicable study scope.",
    "capabilities": [
      "Power-system simulation",
      "Network modelling",
      "Study support for relevant power-system analyses"
    ],
    "applications": [
      "Load-flow studies",
      "Short-circuit studies",
      "Transient/dynamic stability analysis",
      "Grid-islanding studies",
      "Integrated steam-and-power study workflows"
    ],
    "evidence": "The company profile lists SIMPOW as Power System Simulation Software. Solvina's Power System Studies material also names Simpow among the simulation tools used for modelling and simulation.",
    "governance": "Current product status, ownership, licensing and detailed features require verification before commercial positioning.",
    "relatedExpertise": [
      "power-system-studies",
      "dynamic-simulation-system-modelling",
      "grid-code-compliance",
      "island-operation"
    ]
  },
  {
    "slug": "solvsim",
    "name": "SolvSim",
    "category": "Operator Training & Simulation",
    "status": "conditional",
    "relationship": "Solvina product",
    "description": "Operator Training Simulator (OTS), with source material also showing an original-DCS demonstration context.",
    "engineeringPurpose": "Simulation for operator training, scenario practice and engineering understanding where the current implementation is verified.",
    "capabilities": [
      "Operator training simulation",
      "Scenario-based training",
      "Plant-behaviour simulation for training"
    ],
    "applications": [
      "Operator training",
      "Abnormal/disturbed operating-scenario practice",
      "Control-room familiarisation",
      "Engineering and operational learning"
    ],
    "evidence": "The company profile lists SolvSim as an Operator Training Simulator. A reference case documents operator training with a training simulator.",
    "governance": "Current product scope, commercial availability, ownership and demo status require verification before publication as a current offering.",
    "relatedExpertise": [
      "dynamic-simulation-system-modelling",
      "industrial-automation-digital-engineering",
      "plant-control-optimization"
    ]
  },
  {
    "slug": "solvit",
    "name": "SolvIT",
    "category": "Industrial Performance & Monitoring",
    "status": "conditional",
    "relationship": "Solvina product",
    "description": "Centralized Monitoring of Protection Relays / Energy Meters / PQ Meters.",
    "engineeringPurpose": "Centralised monitoring of protection and measurement assets to support operational awareness and engineering analysis.",
    "capabilities": [
      "Protection-relay monitoring",
      "Energy-meter monitoring",
      "Power-quality meter monitoring"
    ],
    "applications": [
      "Protection-device monitoring",
      "Energy measurement visibility",
      "Power-quality monitoring",
      "Troubleshooting support"
    ],
    "evidence": "The company profile lists SolvIT as Centralized Monitoring of Protection Relays / Energy Meters / PQ Meters.",
    "governance": "Current product scope, ownership, integrations and commercial availability require verification before detailed publication.",
    "relatedExpertise": [
      "protection-coordination",
      "power-quality",
      "power-system-studies"
    ]
  },
  {
    "slug": "ssps",
    "name": "SolvSim Power Station (SSPS)",
    "category": "Power-Plant Testing / Hardware-in-the-Loop",
    "status": "verified-reference",
    "relationship": "Engineering method / test asset",
    "description": "Hardware-in-the-Loop method and test equipment for island-operation capability and governor-response testing.",
    "engineeringPurpose": "SSPS simulates an island grid in real time and provides a simulated frequency signal to the governor, allowing the unit's frequency-control behaviour to be assessed while the generator remains synchronised to the external grid.",
    "capabilities": [
      "Real-time simulated island grid",
      "Hardware-in-the-Loop governor connection",
      "Simulated frequency input",
      "Simulated load changes",
      "Response monitoring and evaluation",
      "Governor tuning support",
      "Simulation stop/safety functions"
    ],
    "applications": [
      "Island-operation capability testing",
      "Governor frequency-response evaluation",
      "Stability-margin assessment",
      "Control-malfunction investigation",
      "Governor parameter tuning"
    ],
    "evidence": "Solvina's island-operation test documentation describes SSPS as a Hardware-in-the-Loop method in which a simulator representing an island grid is connected to the governor and provides a simulated frequency signal. The documentation also describes controlled stop functions and return to actual frequency.",
    "governance": "The SSPS methodology is technically documented, but current commercial delivery format and equipment availability should still be confirmed for a specific enquiry. Avoid unsupported scale or 'first in the world' claims.",
    "relatedExpertise": [
      "island-operation",
      "governor-tuning",
      "grid-code-compliance",
      "dynamic-simulation-system-modelling"
    ]
  },
  {
    "slug": "engineering-software",
    "name": "Engineering Software & Tools",
    "category": "Third-Party Engineering Software",
    "status": "verified-reference",
    "relationship": "Third-party engineering software",
    "description": "Engineering software used within Solvina's technical workflows; named tools include ETAP, PSS/E, Simpow, Matlab and PowerFactory.",
    "engineeringPurpose": "Computational environments for network modelling, simulation and analysis. The tools support Solvina's engineering method and should not be presented as Solvina-owned products unless separately verified.",
    "capabilities": [
      "Power-system modelling",
      "Load-flow analysis",
      "Short-circuit analysis",
      "Dynamic/stability simulation",
      "Harmonic analysis where appropriate"
    ],
    "applications": [
      "Power-system studies",
      "Transient stability analysis",
      "Load-flow and short-circuit studies",
      "Integrated steam-and-power study workflows",
      "Power-quality/harmonic analysis"
    ],
    "evidence": "Solvina's Power System Studies brochure explicitly names ETAP, PSS/E, Simpow, Matlab and PowerFactory as simulation tools used for modelling and simulations. Power-quality material documents ETAP use for harmonic studies.",
    "governance": "Distinguish third-party tools from Solvina-owned products. Do not imply ownership, exclusive partnership or current licensing status without verification.",
    "relatedExpertise": [
      "power-system-studies",
      "dynamic-simulation-system-modelling",
      "power-quality",
      "integrated-steam-power-systems"
    ]
  }
];

export default productPages;
