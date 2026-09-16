export type IndustryValueItem = {
  title: string;
  description?: string;
};

export type IndustryPage = {
  slug: string;
  title: string;

  seo: {
    title: string;
    description: string;
    keyword: string;
    url: string;
  };

  hero: {
    heading: string;
    intro: string;
  };

  challenge: string;

  whereSolvinaAddsValue: IndustryValueItem[];

  typicalApplications: string[];

  relevantEvidence: string;

  relatedPages: string[];

  ctas: {
    primary: string;
    secondary: string;
  };

  publicationStatus?: string;
};

export const industriesOverview = {
  "url": "/industries/",
  "seo": {
    "url": "/industries/",
    "title": "Industries We Serve | Power, Steel, Refining & Process Plants | Solvina India",
    "description": "Solvina India serves power generation, steel & mining, refining & petrochemicals, chemicals & fertilizers, pulp & paper and EPC organisations.",
    "keyword": "industrial engineering consultancy industries India"
  },
  "h1": "Engineering Intelligence for Energy-Intensive and Mission-Critical Industries",
  "intro": "Different industries have different production priorities, but the underlying engineering challenge is often the same: power, steam, process, controls and protection all have to behave together under real operating conditions — not just on the datasheet.",
  "industries": [
    {
      "slug": "power-generation-utilities",
      "title": "Power Generation & Utilities",
      "description": "Grid response, stability, compliance, generator controls and changing operating conditions."
    },
    {
      "slug": "steel-metals-mining",
      "title": "Steel, Metals & Mining",
      "description": "Captive generation, large dynamic loads and tightly interconnected process utilities."
    },
    {
      "slug": "refining-petrochemicals",
      "title": "Refining & Petrochemicals",
      "description": "Tightly coupled steam, power, process and electrical systems."
    },
    {
      "slug": "chemicals-fertilizers",
      "title": "Chemicals & Fertilizers",
      "description": "Utility and process interactions where continuity directly affects production."
    },
    {
      "slug": "pulp-paper",
      "title": "Pulp & Paper",
      "description": "Steam/power integration, captive generation and island-operation relevance."
    },
    {
      "slug": "epc-project-organizations",
      "title": "EPC & Project Organisations",
      "description": "Specialist engineering support at high-risk technical interfaces."
    }
  ],
  "conditionalIndustries": [
    {
      "slug": "cement-manufacturing",
      "title": "Cement & Manufacturing",
      "status": "conditional",
      "reason": "Standalone publication requires sufficient validated evidence and dedicated content depth."
    },
    {
      "slug": "renewable-evolving-energy",
      "title": "Renewable & Evolving Energy Systems",
      "status": "conditional",
      "reason": "Standalone publication requires validated capabilities and references."
    }
  ],
  "ctas": {
    "primary": "Explore an Industry",
    "secondary": "Discuss Your Plant Challenge"
  }
};

export const industryPages: IndustryPage[] = [
  {
    "slug": "power-generation-utilities",
    "title": "Power Generation & Utilities",
    "seo": {
      "title": "Power Generation & Utilities Engineering | Solvina India",
      "description": "Grid code compliance, governor and PSS tuning, island operation and power system studies for generators and utility operators in India.",
      "keyword": "power plant grid compliance engineering India",
      "url": "/industries/power-generation-utilities/"
    },
    "hero": {
      "heading": "Engineering for Grid-Connected Generation and System Response",
      "intro": "As grid codes tighten and the generation mix changes, conventional plant is increasingly expected to respond faster and more predictably than it was originally designed for. Solvina supports generators and utility operators in proving — and improving — that response."
    },
    "challenge": "A generator that met its grid code requirements at commissioning can drift out of alignment as equipment ages, settings are changed informally, or grid conditions evolve. Frequency response, voltage support and fault ride-through are dynamic properties, not one-time certifications, and they need to be revisited as conditions change.",
    "whereSolvinaAddsValue": [
      {
        "title": "Grid Code Compliance & Generator Testing",
        "description": "evidence-based compliance demonstration"
      },
      {
        "title": "Governor Testing & Tuning and AVR & PSS Testing and Tuning",
        "description": "validated dynamic response"
      },
      {
        "title": "Island Operation",
        "description": "proven separation and ride-through capability"
      },
      {
        "title": "Power System Studies",
        "description": "network-level confidence under contingency"
      }
    ],
    "typicalApplications": [
      "Fault-ride-through and frequency-response compliance testing and evidence",
      "Governor and voltage-control tuning ahead of a compliance deadline",
      "Transient stability and PSS validation across changing grid conditions",
      "Island operation capability testing for captive or embedded generation"
    ],
    "relevantEvidence": "Solvina's integrated steam and power dynamic-study work — including engagements covering relay coordination, load-flow studies, transient stability, PSS tuning validation and on-site power-plant testing for stable control in both normal and islanded operation — provides the technical basis for this work. Customer-specific outcomes are referenced only where publication permission has been confirmed.",
    "relatedPages": [
      "Grid Code Compliance & Generator Testing",
      "Governor Testing & Tuning",
      "Island Operation"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "steel-metals-mining",
    "title": "Steel, Metals & Mining",
    "seo": {
      "title": "Steel, Metals & Mining Power Engineering | Solvina India",
      "description": "Captive power system studies, island operation and protection coordination for steel, metals and mining plants with integrated generation.",
      "keyword": "captive power plant engineering steel industry",
      "url": "/industries/steel-metals-mining/"
    },
    "hero": {
      "heading": "Integrated Power and Utility Engineering for Continuous Production",
      "intro": "Integrated steel, metals and mining plants often run captive power alongside heavy, dynamic process loads. When the two systems aren't engineered together, a single disturbance in one can cascade into the other."
    },
    "challenge": "Captive power systems in this sector are frequently tightly coupled — a captive power plant, a top-gas recovery turbine, a coke-dry-quenching unit and the grid connection may all interact during a disturbance. Frequent trips leading to complete blackouts, particularly during transition to island operation, are a recognised risk when this coupling isn't explicitly engineered for.",
    "whereSolvinaAddsValue": [
      {
        "title": "Integrated Steam & Power Systems",
        "description": "modelling the captive power, steam and process system together"
      },
      {
        "title": "Island Operation",
        "description": "proven ride-through when the grid connection is lost"
      },
      {
        "title": "Protection Coordination",
        "description": "settings that reflect the real, interconnected network"
      },
      {
        "title": "Power Quality Studies & Monitoring",
        "description": "for large nonlinear loads such as arc furnaces and rolling mills"
      }
    ],
    "typicalApplications": [
      "Captive power system dynamic studies covering CPP, TRT, CDQ and DG sets",
      "Disturbance and island-operation studies to reduce cascading blackout risk",
      "Protection coordination across captive generation and grid interface",
      "Power-quality assessment for large, non-linear industrial loads"
    ],
    "relevantEvidence": "Solvina's dynamic study work for an integrated steel plant's captive power, steam and gas system — covering disturbance and island-operation studies, transient stability, short-circuit studies and control-strategy recommendations for CPP frequency control — illustrates the depth of this engagement type. Company-specific results are published only with confirmed permission.",
    "relatedPages": [
      "Integrated Steam & Power Systems",
      "Island Operation",
      "Protection Coordination"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "refining-petrochemicals",
    "title": "Refining & Petrochemicals",
    "seo": {
      "title": "Refining & Petrochemical Utility Engineering | Solvina India",
      "description": "Multi-header steam net modelling, dynamic studies and control strategy for refining and petrochemical plants with integrated power generation.",
      "keyword": "petrochemical steam power dynamic study",
      "url": "/industries/refining-petrochemicals/"
    },
    "hero": {
      "heading": "Understand the Interactions Across Steam, Power and Process Utilities",
      "intro": "Refining and petrochemical sites typically run steam at several pressure levels, tightly coupled to power generation and safety-critical process trains. A trip in one part of the utility system can propagate through the whole site if the interactions aren't understood in advance."
    },
    "challenge": "New capacity is often tied into an existing steam and power network without fully re-modelling how the combined system will behave in an upset condition — a new plant tripping off, for example, and pulling down HP steam header pressure across the whole site faster than existing controls can respond.",
    "whereSolvinaAddsValue": [
      {
        "title": "Integrated Steam & Power Systems",
        "description": "multi-header steam net and electrical system modelling"
      },
      {
        "title": "Dynamic Simulation & System Modelling",
        "description": "transient behaviour of tie-ins and upset conditions"
      },
      {
        "title": "Boiler, Turbine & Process Control",
        "description": "control-strategy changes validated before implementation"
      }
    ],
    "typicalApplications": [
      "Multi-header steam net dynamic modelling across HP, MP and LP levels",
      "Transient studies for new-plant tie-ins, including trip and restart scenarios",
      "Steam deficit or surplus strategy development for extended operation",
      "Turbine trip and steam-load-swing simulation for control validation"
    ],
    "relevantEvidence": "This work is directly evidenced by integrated steam and power dynamic studies conducted for large petrochemical production units, covering islanded and grid-connected operation, relay coordination, transient stability and validation of PSS tuning, together with on-site testing of power plant controls for both normal and islanded conditions.",
    "relatedPages": [
      "Integrated Steam & Power Systems",
      "Boiler, Turbine & Process Control",
      "Dynamic Simulation & System Modelling"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "chemicals-fertilizers",
    "title": "Chemicals & Fertilizers",
    "seo": {
      "title": "Chemicals & Fertilizer Plant Utility Engineering | Solvina India",
      "description": "Utility balance, captive generation and disturbance-response studies for chemical and fertilizer plants where continuity is critical.",
      "keyword": "chemical plant utility engineering",
      "url": "/industries/chemicals-fertilizers/"
    },
    "hero": {
      "heading": "Utility-System Engineering for Process Continuity",
      "intro": "Continuous chemical and fertilizer processes are highly sensitive to utility interruptions — the steam and power balance directly affects yield, product quality and, in some processes, safety."
    },
    "challenge": "Utility systems in this sector are frequently sized and controlled around a nominal operating point, with limited engineering attention to how they respond to a genuine disturbance — a compressor trip, a boiler upset or a captive generation event — until that disturbance actually occurs.",
    "whereSolvinaAddsValue": [
      {
        "title": "Energy & Utility Optimization",
        "description": "understanding constraints across the utility system"
      },
      {
        "title": "Integrated Steam & Power Systems",
        "description": "captive generation modelled together with the process"
      },
      {
        "title": "Protection Coordination",
        "description": "settings aligned with utility-island operating philosophy"
      }
    ],
    "typicalApplications": [
      "Utility balance and dispatch studies across steam, power and process demand",
      "Captive generation dynamic modelling and disturbance-response analysis",
      "Trip-response and restart-sequence studies for critical utility islands",
      "Control-strategy review for utility systems supporting continuous production"
    ],
    "relevantEvidence": "Methodology for this work draws on Solvina's dynamic modelling of multi-pressure-level steam networks and their interaction with connected production units, including feed-forward and setpoint control strategies developed to keep pressures within acceptable limits during a connected plant's trip — an approach directly transferable to chemical and fertilizer utility systems.",
    "relatedPages": [
      "Energy & Utility Optimization",
      "Integrated Steam & Power Systems",
      "Protection Coordination"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "pulp-paper",
    "title": "Pulp & Paper",
    "seo": {
      "title": "Pulp & Paper Steam Net Control Engineering | Solvina India",
      "description": "Steam net control design, dynamic studies and island operation testing for pulp and paper mills where steam pressure affects product quality.",
      "keyword": "pulp paper steam net control engineering",
      "url": "/industries/pulp-paper/"
    },
    "hero": {
      "heading": "Dynamic Utility Engineering for Steam-Intensive Production",
      "intro": "In pulp and paper production, steam net pressure is directly tied to product quality, not just energy efficiency. Multiple steam headers, recovery boilers and back-pressure turbines all need to be coordinated carefully — especially around new equipment installations."
    },
    "challenge": "Installing a new recovery boiler or turbine changes the dynamic behaviour of the entire steam net, not just the equipment being added. Without dynamic modelling ahead of commissioning, mills risk a difficult startup, or control instability that shows up during the next large load transient — such as a board machine stopping and restarting.",
    "whereSolvinaAddsValue": [
      {
        "title": "Boiler, Turbine & Process Control",
        "description": "steam net control designed and tuned before commissioning"
      },
      {
        "title": "Integrated Steam & Power Systems",
        "description": "multi-header steam net modelled as one system"
      },
      {
        "title": "Island Operation",
        "description": "captive power tested for island-operation capability"
      }
    ],
    "typicalApplications": [
      "Steam net control design and tuning ahead of new boiler or turbine installation",
      "Board-machine-stop and restart transient simulation",
      "Recovery boiler and bark boiler load-sharing strategy development",
      "Island operation testing for mills running captive power generation"
    ],
    "relevantEvidence": "Solvina has designed and tuned steam net control for a paper mill through the installation of a new recovery boiler and back-pressure turbine — covering large steam-load transients, turbine trip response, start/stop of large electric motors in island operation, and simulation validated through commissioning testing.",
    "relatedPages": [
      "Boiler, Turbine & Process Control",
      "Integrated Steam & Power Systems",
      "Island Operation"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "epc-project-organizations",
    "title": "EPC & Project Organizations",
    "seo": {
      "title": "Engineering Support for EPCs & Project Organizations | Solvina India",
      "description": "Independent technical support for EPCs and project owners at grid connection, control integration and commissioning interfaces.",
      "keyword": "EPC engineering support commissioning India",
      "url": "/industries/epc-project-organizations/"
    },
    "hero": {
      "heading": "Specialist Engineering Support for Complex Project Interfaces",
      "intro": "EPCs and project owners often need specialist input at a small number of genuinely high-risk technical interfaces — grid connection, control-system integration, commissioning — without carrying that specialist expertise in-house permanently."
    },
    "challenge": "The interfaces where projects most often lose schedule or budget — a grid connection test that wasn't planned correctly, a control system integration issue discovered at commissioning — are usually specialist, cross-disciplinary problems that a generalist project team isn't resourced to solve alone.",
    "whereSolvinaAddsValue": [
      {
        "title": "Specialist Engineering Consulting",
        "description": "focused technical support at the interface that matters"
      },
      {
        "title": "Power System Studies and Grid Code Compliance",
        "description": "de-risking the grid connection milestone"
      },
      {
        "title": "Dynamic Simulation & System Modelling",
        "description": "testing integration assumptions before commissioning"
      }
    ],
    "typicalApplications": [
      "Technical requirement specification support during FEED or detailed design",
      "Independent technical evaluation of bids or equipment offers",
      "Commissioning test planning and on-site execution support",
      "Independent design review at critical control or grid-connection interfaces"
    ],
    "relevantEvidence": "This role reflects Solvina's established practice of taking part in every phase of a project — ensuring correct technical requirement specifications, evaluating offers, and handling project management, commissioning and commissioning analysis alongside the EPC or owner's team.",
    "relatedPages": [
      "Specialist Engineering Consulting",
      "Power System Studies",
      "Dynamic Simulation & System Modelling"
    ],
    "ctas": {
      "primary": "Explore Relevant Expertise",
      "secondary": "Discuss Your Engineering Challenge"
    },
    "publicationStatus": "approved-draft"
  }
];

export default industryPages;
