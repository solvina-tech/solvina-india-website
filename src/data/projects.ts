import { Customer, customers } from "./homepage";

export type ProjectEvidenceStatus =
  | "permission-pending"
  | "public-approved"
  | "anonymized"
  | "internal-confidential";

export type ProjectOutcomeStatus =
  | "not-established"
  | "achieved"
  | "customer-reported"
  | "expected"
  | "intended"
  | "recommendation-only";

export type Project = {
  id: string;
  sourceRow: number;
  year: string;
  yearStart: number;
  yearEnd: number | null;
  ongoing: boolean;
  projectType: string;
  customer: string;
  location: string;
  country: string;
  industry: string;
  industryGroup: string;
  serviceFamily: string;
  expertise: string[];
  technologyTags: string[];
  description: string;
  evidenceStatus: ProjectEvidenceStatus;
  outcomeStatus: ProjectOutcomeStatus;
  customerNameApproved: boolean;
  projectNameApproved: boolean;
  logoApproved: boolean;
  customerVoiceApproved: boolean;
  publicTitle: string;
  publicCustomer: string;
  image: string | null;
  slug: string;
  featured: boolean;
};

const CUSTOMER_LOGO_MAP: Record<string, string> = {
  /* NTPC */
  ntpc: "ntpc",
  "ntpc nabinagar": "ntpc",
  "ntpc ramagundam": "ntpc",
  "ntpc talcher": "ntpc",
  "ntpc unchahar": "ntpc",
  "ntpc anta": "ntpc",
  "ntpc mouda": "ntpc",
  "ntpc gadarwara": "ntpc",
  "ntpc sipat": "ntpc",
  "ntpc darlipalli": "ntpc",
  "ntpc barh": "ntpc",
  "ntpc singrauli": "ntpc",
  "ntpc dadri": "ntpc",
  "ntpc dadri gps": "ntpc",
  "ntpc bongaigaon": "ntpc",
  "ntpc korba stps": "ntpc",
  "ntpc vindhyachal": "ntpc",
  "ntpc lara": "ntpc",

  /* Grid India / POSOCO */
  "grid india": "grid-india",
  "grid-india": "grid-india",
  "grid india (erstwhile posoco)": "grid-india",
  posoco: "grid-india",

  /* NHPC */
  nhpc: "nhpc",
  "nhpc chamera": "nhpc",
  "nhpc chamera-i": "nhpc",

  /* SJVN */
  sjvnl: "sjvn",
  sjvn: "sjvn",

  /* THDC */
  thdc: "thdc-india",
  "thdc india": "thdc-india",
  "thdc tehri": "thdc-india",

  /* NEEPCO */
  neepco: "neepco",

  /* Tata */
  "tata power": "tata-power",
  "tata steel": "tata-steel",
  "tata steel, kalinganagar": "tata-steel",

  /* Adani */
  adani: "adani",
  "adani power": "adani",
  "adani power limited": "adani",

  /* Reliance */
  "reliance industries": "reliance-industries",
  "reliance industries limited": "reliance-industries",
  "reliance power": "reliance-industries",

  /* JSW */
  jsw: "jsw",
  "jsw energy": "jsw",
  "jsw steel": "jsw",

  /* Jindal */
  "jindal power": "jindal-power",
  "jindal power limited": "jindal-power",

  /* Vedanta */
  vedanta: "vedanta",
  "cpp, vedanta": "vedanta",
  "ipp, vedanta": "vedanta",
  "vedanta limited": "vedanta",

  /* BALCO */
  balco: "balco",
  "bharat aluminium company": "balco",

  /* IndianOil */
  iocl: "indianoil",
  "indian oil": "indianoil",
  indianoil: "indianoil",
  "indian oil corporation": "indianoil",

  /* CESC */
  cesc: "cesc",

  /* NLC */
  "nlc india": "nlc-india",
  "nlc india limited": "nlc-india",
  nlc: "nlc-india",

  /* UPRVUNL */
  uprvunl: "uprvunl",
  "uprvunl ltd": "uprvunl",

  /* IFFCO */
  iffco: "iffco",
  "iffco limited": "iffco",
};

export function getCustomerLogo(
  customerName: string,
): Customer | null {
  const normalized = customerName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const customerId = CUSTOMER_LOGO_MAP[normalized];

  if (!customerId) {
    return null;
  }

  return (
    customers.find(
      (customer) => customer.id === customerId,
    ) ?? null
  );
}

/* ========================================================================== */
/* CONTROLLED TAXONOMY                                                       */
/* ========================================================================== */

export const INDUSTRIES = [
  "Power & Utilities",
  "Grid Operator",
  "Transmission System Operator",
  "Steel",
  "Metal & Mining",
  "Petrochemical",
  "Fertilizer",
  "Oil & Gas",
  "Refinery",
] as const;

export const INDUSTRY_GROUPS = [
  "Power & Utilities",
  "Steel & Metals",
  "Refining & Petrochemicals",
  "Oil & Gas",
  "Chemicals & Fertilizer",
  "Grid & Transmission",
] as const;

export const EXPERTISE = [
  "Grid Code Compliance",
  "Generator Testing",
  "Model Validation",
  "Primary Frequency Response",
  "Integrated Steam & Power",
  "Dynamic Simulation",
  "Island Operation",
  "Power System Studies",
  "Transient Stability",
  "Load Flow",
  "Protection Coordination",
  "PSS",
  "AVR Testing & Tuning",
  "Governor Testing & Tuning",
  "Steam System",
  "Gas System",
  "Control & Operability",
  "Instrumentation & Control",
  "Power System Resilience",
] as const;

/* ========================================================================== */
/* REUSABLE TAXONOMY ARRAYS                                                   */
/* ========================================================================== */

const GRID_CODE_EXPERTISE = [
  "Grid Code Compliance",
  "Generator Testing",
  "Model Validation",
  "Primary Frequency Response",
];

const ISLANDING_EXPERTISE = [
  "Island Operation",
  "Power System Resilience",
];

const INTEGRATED_STEAM_POWER_EXPERTISE = [
  "Integrated Steam & Power",
  "Dynamic Simulation",
  "Island Operation",
  "Transient Stability",
  "Load Flow",
  "Protection Coordination",
];

const POWER_STUDY_EXPERTISE = [
  "Power System Studies",
  "Dynamic Simulation",
  "Island Operation",
  "Transient Stability",
];

const CONTROL_EXPERTISE = [
  "Control & Operability",
  "Instrumentation & Control",
];

/* ========================================================================== */
/* HELPER                                                                     */
/* ========================================================================== */

const baseGovernance = {
  evidenceStatus: "permission-pending" as ProjectEvidenceStatus,
  outcomeStatus: "not-established" as ProjectOutcomeStatus,
  customerNameApproved: false,
  projectNameApproved: false,
  logoApproved: false,
  customerVoiceApproved: false,
  image: null,
  featured: false,
};

/* ========================================================================== */
/* PROJECT DATABASE — 86 INDIA REFERENCE RECORDS                              */
/* ========================================================================== */

export const projects: Project[] = [
  /* ---------------------------------------------------------------------- */
  /* REF-001                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-001",
    sourceRow: 1,
    year: "2021–2023",
    yearStart: 2021,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NLC",
    location: "Neyveli",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x500MW STG (BHEL make), 2x250MW STG (BHEL make) & 3x210MW STG (BHEL & ANSALDO make) at NLC Neyveli.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NLC",
    slug: "ref-001-grid-code-compliance-nlc-neyveli",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-002                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-002",
    sourceRow: 2,
    year: "2020–ongoing",
    yearStart: 2020,
    yearEnd: null,
    ongoing: true,
    projectType: "Grid Code Compliance",
    customer: "Grid India (erstwhile POSOCO)",
    location: "Pan India",
    country: "India",
    industry: "Grid Operator",
    industryGroup: "Grid & Transmission",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: [
      "PFR",
      "Gas System",
      "Model Validation",
    ],
    description:
      "Carried out Grid Code Compliance test with respect to Primary Frequency Response tests on 200 generating units (Thermal, Hydro & Gas) connected to the national grid across pan India to ascertain behaviour as per Indian Electricity Grid Code (IEGC). Work included preparation of test programs, onsite testing and model validation in simulation software Simpow.",
    publicTitle: "Grid Code Compliance Testing Across Generating Units",
    publicCustomer: "Grid India",
    slug: "ref-002-grid-code-compliance-grid-india",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-003                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-003",
    sourceRow: 3,
    year: "2020–2022",
    yearStart: 2020,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Ramagundam",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x500MW STG (BHEL make) & 1x200MW STG (ANSALDO make) at NTPC Ramagundam.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-003-grid-code-compliance-ntpc-ramagundam",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-004                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-004",
    sourceRow: 4,
    year: "2020–2022",
    yearStart: 2020,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Talcher & TSTPP",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x500MW STG (BHEL make) & 2x500MW STG (ABB make) at NTPC Talcher & TSTPP.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-004-grid-code-compliance-ntpc-talcher",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-005                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-005",
    sourceRow: 5,
    year: "2020–2022",
    yearStart: 2020,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NEEPCO",
    location: "Kopili & Khandong",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x25MW Hydro (BHEL make) at Kopili & Khandong.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NEEPCO",
    slug: "ref-005-grid-code-compliance-neepco-kopili-khandong",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-006                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-006",
    sourceRow: 6,
    year: "2017–2019",
    yearStart: 2017,
    yearEnd: 2019,
    ongoing: false,
    projectType: "Integrated Steam & Power system studies & Tests",
    customer: "Reliance Industries Limited",
    location: "Hazira",
    country: "India",
    industry: "Petrochemical",
    industryGroup: "Refining & Petrochemicals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: INTEGRATED_STEAM_POWER_EXPERTISE,
    technologyTags: [
      "PSS",
      "Load Flow",
      "Transient Stability",
      "Relay Coordination",
      "Islanding",
      "Steam System",
    ],
    description:
      "For 3 STG & 4 Boilers CPP, carried out integrated steam and power studies for islanded and grid-connected operation, relay coordination and load flow studies of the entire network, transient stability study and validation of PSS tuning, power plant tests for stable control in normal and islanded operation, and tests to safeguard island operation capability.",
    publicTitle: "Integrated Steam & Power Studies and Testing",
    publicCustomer: "Reliance Industries Limited",
    slug: "ref-006-integrated-steam-power-reliance-hazira",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-007                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-007",
    sourceRow: 7,
    year: "2016–2019",
    yearStart: 2016,
    yearEnd: 2019,
    ongoing: false,
    projectType: "Integrated Steam & Power system studies & Tests",
    customer: "Reliance Industries Limited",
    location: "Dahej",
    country: "India",
    industry: "Petrochemical",
    industryGroup: "Refining & Petrochemicals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: INTEGRATED_STEAM_POWER_EXPERTISE,
    technologyTags: [
      "PSS",
      "Load Flow",
      "Transient Stability",
      "Relay Coordination",
      "Islanding",
      "Steam System",
    ],
    description:
      "For 4 STG & 5 Boilers CPP, carried out integrated steam and power studies for islanded and grid-connected operation, relay coordination and load flow studies of the entire network, transient stability study and validation of PSS tuning, power plant tests for stable control in normal and islanded operation, and tests to safeguard island operation capability.",
    publicTitle: "Integrated Steam & Power Studies and Testing",
    publicCustomer: "Reliance Industries Limited",
    slug: "ref-007-integrated-steam-power-reliance-dahej",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-008                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-008",
    sourceRow: 8,
    year: "2016–2017",
    yearStart: 2016,
    yearEnd: 2017,
    ongoing: false,
    projectType: "Island Operation tests & Power system studies",
    customer: "CPP, Vedanta",
    location: "Jharsuguda",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: ISLANDING_EXPERTISE,
    technologyTags: ["AVR", "Governor", "Islanding"],
    description:
      "Island operation test. Governor & AVR testing and tuning for 9x135MW units.",
    publicTitle: "Island Operation Testing, Governor & AVR Tuning",
    publicCustomer: "Vedanta",
    slug: "ref-008-island-operation-vedanta-jharsuguda",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-009                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-009",
    sourceRow: 9,
    year: "2016–2017",
    yearStart: 2016,
    yearEnd: 2017,
    ongoing: false,
    projectType: "Island Operation test & study",
    customer: "Vedanta",
    location: "India",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: ISLANDING_EXPERTISE,
    technologyTags: ["Governor", "Islanding"],
    description:
      "Island operation tests and governor tuning.",
    publicTitle: "Island Operation Testing & Governor Tuning",
    publicCustomer: "Vedanta",
    slug: "ref-009-island-operation-vedanta",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-010                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-010",
    sourceRow: 10,
    year: "2024",
    yearStart: 2024,
    yearEnd: 2024,
    ongoing: false,
    projectType: "Study for Patna Islanding Scheme",
    customer: "NTPC Nabinagar",
    location: "Nabinagar",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Dynamic Simulation",
      "Power System Resilience",
    ],
    technologyTags: ["Governor", "Islanding"],
    description:
      "Detailed dynamic study on the capability and feasibility of the 660MW GE make units for island mode of operation considering actual models of turbine governor and excitation system.",
    publicTitle: "Dynamic Study for Island Mode Operation",
    publicCustomer: "NTPC Nabinagar",
    slug: "ref-010-patna-islanding-scheme",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-011 → REF-072                                                     */
  /* Grid Code Compliance records                                           */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-011",
    sourceRow: 11,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "THDC",
    location: "Tehri",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x250MW Hydro (LMZ make) at THDC Tehri.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "THDC",
    slug: "ref-011-grid-code-thdc-tehri",
    ...baseGovernance,
  },

  {
    id: "REF-012",
    sourceRow: 12,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Tanda Stage-II",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x660MW STG (GE make) at NTPC Tanda Stage-II.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-012-grid-code-ntpc-tanda",
    ...baseGovernance,
  },

  {
    id: "REF-013",
    sourceRow: 13,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Koldam",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x200MW Hydro (BHEL make) at NTPC Koldam.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-013-grid-code-ntpc-koldam",
    ...baseGovernance,
  },

  {
    id: "REF-014",
    sourceRow: 14,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NHPC",
    location: "Dulhasti",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x128MW Hydro (ALSTOM make) at NHPC Dulhasti.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NHPC",
    slug: "ref-014-grid-code-nhpc-dulhasti",
    ...baseGovernance,
  },

  {
    id: "REF-015",
    sourceRow: 15,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Tata Power",
    location: "CGPL Tunda",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x830MW STG (TOSHIBA make) at Tata Power CGPL Tunda.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Tata Power",
    slug: "ref-015-grid-code-tata-power-tunda",
    ...baseGovernance,
  },

  {
    id: "REF-016",
    sourceRow: 16,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Adani",
    location: "Adani GMR Chhattisgarh Energy",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x685MW STG (DOOSAN make) at Adani GMR Chhattisgarh Energy Ltd.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Adani",
    slug: "ref-016-grid-code-adani-gmr",
    ...baseGovernance,
  },

  {
    id: "REF-017",
    sourceRow: 17,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Khargone",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x660MW STG (L&T MHPS make) at NTPC Khargone.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-017-grid-code-ntpc-khargone",
    ...baseGovernance,
  },

  {
    id: "REF-018",
    sourceRow: 18,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "ACBIL",
    location: "ACBIL-MCCPL",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x300MW STG (Beijing BEIZHONG make) at ACBIL-MCCPL.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "ACBIL",
    slug: "ref-018-grid-code-acbil",
    ...baseGovernance,
  },

  {
    id: "REF-019",
    sourceRow: 19,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Kudgi",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x800MW STG (TOSHIBA make) at NTPC Kudgi.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-019-grid-code-ntpc-kudgi",
    ...baseGovernance,
  },

  {
    id: "REF-020",
    sourceRow: 20,
    year: "2023",
    yearStart: 2023,
    yearEnd: 2023,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "OTPCL",
    location: "Palatana",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x232MW GTG & 1x130MW STG (BHEL make) at OTPCL Palatana (Combined cycle).",
    publicTitle: "Combined-Cycle PFR Testing & Model Validation",
    publicCustomer: "OTPCL",
    slug: "ref-020-grid-code-otpcl-palatana",
    ...baseGovernance,
  },

  {
    id: "REF-021",
    sourceRow: 21,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Unchahar",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x210MW & 1x500MW STG (BHEL make) at NTPC Unchahar.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-021-grid-code-ntpc-unchahar",
    ...baseGovernance,
  },

  {
    id: "REF-022",
    sourceRow: 22,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Anta",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x88MW GTG & 1x153MW STG (ABB make) at NTPC Anta.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-022-grid-code-ntpc-anta",
    ...baseGovernance,
  },

  {
    id: "REF-023",
    sourceRow: 23,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Mouda",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x500MW & 2x600MW STG (BHEL & SIEMENS make) at NTPC Mouda.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-023-grid-code-ntpc-mouda",
    ...baseGovernance,
  },

  {
    id: "REF-024",
    sourceRow: 24,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Gadarwara",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x800MW STG (BHEL make) at NTPC Gadarwara.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-024-grid-code-ntpc-gadarwara",
    ...baseGovernance,
  },

  {
    id: "REF-025",
    sourceRow: 25,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "DB Power",
    location: "India",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x600MW STG (BHEL make) at DB Power.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "DB Power",
    slug: "ref-025-grid-code-db-power",
    ...baseGovernance,
  },

  {
    id: "REF-026",
    sourceRow: 26,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Dhariwal-Infra",
    location: "Maharashtra",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x300MW STG (Shanghai Electric make) at Dhariwal-Infra Maharashtra.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Dhariwal-Infra",
    slug: "ref-026-grid-code-dhariwal-infra",
    ...baseGovernance,
  },

  {
    id: "REF-027",
    sourceRow: 27,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Sipat I & II",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x660MW & 1x500MW STG (BHEL make) at NTPC Sipat I & II.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-027-grid-code-ntpc-sipat",
    ...baseGovernance,
  },

  {
    id: "REF-028",
    sourceRow: 28,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Jindal Power",
    location: "Tamnar",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x600MW & 3x250MW STG (BHEL make) at Jindal Power Tamnar.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Jindal Power",
    slug: "ref-028-grid-code-jindal-tamnar",
    ...baseGovernance,
  },

  {
    id: "REF-029",
    sourceRow: 29,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "KSK Mahanadi",
    location: "India",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x600MW STG (DONGFANG ELECTRIC make) at KSK Mahanadi.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "KSK Mahanadi",
    slug: "ref-029-grid-code-ksk-mahanadi",
    ...baseGovernance,
  },

  {
    id: "REF-030",
    sourceRow: 30,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Adani",
    location: "Raigarh",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x600MW STG (BHEL make) at Adani Raigarh Thermal Power Plant.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Adani",
    slug: "ref-030-grid-code-adani-raigarh",
    ...baseGovernance,
  },

  {
    id: "REF-031",
    sourceRow: 31,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Lanco",
    location: "Amarkantak",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x300MW STG (DONGFANG ELECTRIC make) at Lanco Amarkantak.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Lanco",
    slug: "ref-031-grid-code-lanco-amarkantak",
    ...baseGovernance,
  },

  {
    id: "REF-032",
    sourceRow: 32,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "RKM Powergen",
    location: "India",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x360MW STG (HARBIN ELECTRIC make) at RKM Powergen.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "RKM Powergen",
    slug: "ref-032-grid-code-rkm-powergen",
    ...baseGovernance,
  },

  {
    id: "REF-033",
    sourceRow: 33,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Reliance Power",
    location: "Sasan",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x660MW STG (SHANGHAI ELECTRIC make) at Reliance Power Sasan.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Reliance Power",
    slug: "ref-033-grid-code-reliance-sasan",
    ...baseGovernance,
  },

  {
    id: "REF-034",
    sourceRow: 34,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Torrent Power",
    location: "DGEN",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x400MW STG (SIEMENS make) at Torrent Power - DGEN.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Torrent Power",
    slug: "ref-034-grid-code-torrent-dgen",
    ...baseGovernance,
  },

  {
    id: "REF-035",
    sourceRow: 35,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Narmada Control Authority",
    location: "SSP RBPH & CHPH",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x200MW (TOSHIBA make) & 3x50MW Hydro (BHEL make) at NCA SSP RBPH & CHPH.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Narmada Control Authority",
    slug: "ref-035-grid-code-narmada-control-authority",
    ...baseGovernance,
  },

  {
    id: "REF-036",
    sourceRow: 36,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "IL&FS",
    location: "Tamil Nadu",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x600MW STG (DONGFANG ELECTRIC make) at IL&FS Tamil Nadu Power Company (ITPCL).",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "IL&FS",
    slug: "ref-036-grid-code-ilfs-itpcl",
    ...baseGovernance,
  },

  {
    id: "REF-037",
    sourceRow: 37,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Darlipalli",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x800MW STG (TOSHIBA make) at NTPC Darlipalli.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-037-grid-code-ntpc-darlipalli",
    ...baseGovernance,
  },

  {
    id: "REF-038",
    sourceRow: 38,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Barh",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x660MW STG (BHEL & SIEMENS make) at NTPC Barh.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-038-grid-code-ntpc-barh",
    ...baseGovernance,
  },

  {
    id: "REF-039",
    sourceRow: 39,
    year: "2022",
    yearStart: 2022,
    yearEnd: 2022,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NEEPCO",
    location: "Monarchak",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x65MW GTG & 1x35MW STG (BHEL make) at NEEPCO Monarchak (Combined cycle).",
    publicTitle: "Combined-Cycle PFR Testing & Model Validation",
    publicCustomer: "NEEPCO",
    slug: "ref-039-grid-code-neepco-monarchak",
    ...baseGovernance,
  },

  {
    id: "REF-040",
    sourceRow: 40,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Singrauli",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x500MW & 1x200MW STG (BHEL & LMZ make) at NTPC Singrauli.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-040-grid-code-ntpc-singrauli",
    ...baseGovernance,
  },

  {
    id: "REF-041",
    sourceRow: 41,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Dadri",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x210MW & 2x490MW STG (BHEL make) at NTPC Dadri.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-041-grid-code-ntpc-dadri",
    ...baseGovernance,
  },

  {
    id: "REF-042",
    sourceRow: 42,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Dadri GPS",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x130MW GTG (Siemens make) at NTPC Dadri GPS.",
    publicTitle: "Gas Turbine PFR Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-042-grid-code-ntpc-dadri-gps",
    ...baseGovernance,
  },

  {
    id: "REF-043",
    sourceRow: 43,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Auraiya",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x111MW GTG (MHI make) at NTPC Auraiya.",
    publicTitle: "Gas Turbine PFR Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-043-grid-code-ntpc-auraiya",
    ...baseGovernance,
  },

  {
    id: "REF-044",
    sourceRow: 44,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "APCPL",
    location: "Jhajjar",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x500MW STG (BHEL make) at APCPL Jhajjar.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "APCPL",
    slug: "ref-044-grid-code-apcpl-jhajjar",
    ...baseGovernance,
  },

  {
    id: "REF-045",
    sourceRow: 45,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "SJVNL",
    location: "Nathpa Jhakri",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 6x250MW Hydro (ANDRITZ make) at SJVNL Nathpa Jhakri.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "SJVNL",
    slug: "ref-045-grid-code-sjvnl-nathpa-jhakri",
    ...baseGovernance,
  },

  {
    id: "REF-046",
    sourceRow: 46,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "SJVNL",
    location: "Rampur",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 5x68MW Hydro (ANDRITZ make) at SJVNL Rampur.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "SJVNL",
    slug: "ref-046-grid-code-sjvnl-rampur",
    ...baseGovernance,
  },

  {
    id: "REF-047",
    sourceRow: 47,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "JSW",
    location: "Karcham",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x250MW Hydro (ANDRITZ make) at JSW Karcham.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "JSW",
    slug: "ref-047-grid-code-jsw-karcham",
    ...baseGovernance,
  },

  {
    id: "REF-048",
    sourceRow: 48,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "THDC",
    location: "Koteshwar",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x100MW Hydro (BHEL make) at THDC Koteshwar.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "THDC",
    slug: "ref-048-grid-code-thdc-koteshwar",
    ...baseGovernance,
  },

  {
    id: "REF-049",
    sourceRow: 49,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Korba STPS",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x200MW & 4x500MW STG (BHEL make) at NTPC Korba STPS.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-049-grid-code-ntpc-korba",
    ...baseGovernance,
  },

  {
    id: "REF-050",
    sourceRow: 50,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Vindhyachal",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 7x500MW (BHEL make) & 1x210MW STG (LMZ make) at NTPC Vindhyachal.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-050-grid-code-ntpc-vindhyachal",
    ...baseGovernance,
  },

  {
    id: "REF-051",
    sourceRow: 51,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Lara",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x800MW STG (HITACHI make) at NTPC Lara.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-051-grid-code-ntpc-lara",
    ...baseGovernance,
  },

  {
    id: "REF-052",
    sourceRow: 52,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Balco",
    location: "Korba",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x300MW STG (DONGFANG ELECTRIC make) at Balco Korba.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Balco",
    slug: "ref-052-grid-code-balco-korba",
    ...baseGovernance,
  },

  {
    id: "REF-053",
    sourceRow: 53,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "GMR",
    location: "Warora Energy",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x300MW STG (Shanghai Electric make) at GMR Warora Energy (GWEL).",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "GMR",
    slug: "ref-053-grid-code-gmr-warora",
    ...baseGovernance,
  },

  {
    id: "REF-054",
    sourceRow: 54,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Jhabua Power",
    location: "India",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x600MW STG (BHEL make) at Jhabua Power.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Jhabua Power",
    slug: "ref-054-grid-code-jhabua-power",
    ...baseGovernance,
  },

  {
    id: "REF-055",
    sourceRow: 55,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Ratnagiri Gas and Power",
    location: "RGPPL",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x400MW STG (SIEMENS make) at RGPPL.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Ratnagiri Gas and Power",
    slug: "ref-055-grid-code-rgppl",
    ...baseGovernance,
  },

  {
    id: "REF-056",
    sourceRow: 56,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Sembcorp",
    location: "SEIL P1 & P2",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 4x660MW STG (DONGFANG ELECTRIC & HARBIN ELECTRIC make) at Sembcorp Energy SEIL P1 & P2.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Sembcorp",
    slug: "ref-056-grid-code-sembcorp-seil",
    ...baseGovernance,
  },

  {
    id: "REF-057",
    sourceRow: 57,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "NTECL Vallur",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x500MW STG (BHEL make) at NTECL Vallur.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-057-grid-code-ntecl-vallur",
    ...baseGovernance,
  },

  {
    id: "REF-058",
    sourceRow: 58,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NLC",
    location: "Tamilnadu Power",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x500MW STG (BHEL make) at NLC Tamilnadu Power (NTPL).",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NLC",
    slug: "ref-058-grid-code-nlc-ntpl",
    ...baseGovernance,
  },

  {
    id: "REF-059",
    sourceRow: 59,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Farakka",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x500MW & 2x200MW STG (BHEL make) at NTPC Farakka.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-059-grid-code-ntpc-farakka",
    ...baseGovernance,
  },

  {
    id: "REF-060",
    sourceRow: 60,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Kahalgaon",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x500MW STG (BHEL make) & 1x210MW STG (LMZ make) at NTPC Kahalgaon.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-060-grid-code-ntpc-kahalgaon",
    ...baseGovernance,
  },

  {
    id: "REF-061",
    sourceRow: 61,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Adhunik Power",
    location: "APNRL",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x270MW STG (BHEL make) at APNRL.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "Adhunik Power",
    slug: "ref-061-grid-code-adhunik-power",
    ...baseGovernance,
  },

  {
    id: "REF-062",
    sourceRow: 62,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "BRBCL",
    location: "India",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x250MW STG (BHEL make) at BRBCL.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "BRBCL",
    slug: "ref-062-grid-code-brbcl",
    ...baseGovernance,
  },

  {
    id: "REF-063",
    sourceRow: 63,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NPGC",
    location: "Nabinagar Power Generation",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x660MW STG (GE make) at Nabinagar Power Generation.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NPGC",
    slug: "ref-063-grid-code-npgc-nabinagar",
    ...baseGovernance,
  },

  {
    id: "REF-064",
    sourceRow: 64,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NHPC",
    location: "Teesta V",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 1x170MW Hydro (TOSHIBA make) at NHPC Teesta V.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NHPC",
    slug: "ref-064-grid-code-nhpc-teesta-v",
    ...baseGovernance,
  },

  {
    id: "REF-065",
    sourceRow: 65,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Teesta Urja",
    location: "TUL Teesta III",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 5x200MW Hydro (ANDRITZ make) at TUL Teesta III.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "Teesta Urja",
    slug: "ref-065-grid-code-teesta-urja",
    ...baseGovernance,
  },

  {
    id: "REF-066",
    sourceRow: 66,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Sneha Kinetic",
    location: "Dikchu",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x48MW Hydro (ALSTOM-NEYRPIC T.SLG make) at Sneha Kinetic Dikchu.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "Sneha Kinetic",
    slug: "ref-066-grid-code-sneha-kinetic",
    ...baseGovernance,
  },

  {
    id: "REF-067",
    sourceRow: 67,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NTPC",
    location: "Bongaigaon",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x250MW STG (BHEL make) at NTPC Bongaigaon.",
    publicTitle: "Primary Frequency Response Testing & Model Validation",
    publicCustomer: "NTPC",
    slug: "ref-067-grid-code-ntpc-bongaigaon",
    ...baseGovernance,
  },

  {
    id: "REF-068",
    sourceRow: 68,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NEEPCO",
    location: "Tuirial",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x30MW Hydro (BHEL make) at Tuirial.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NEEPCO",
    slug: "ref-068-grid-code-neepco-tuirial",
    ...baseGovernance,
  },

  {
    id: "REF-069",
    sourceRow: 69,
    year: "2021",
    yearStart: 2021,
    yearEnd: 2021,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NHPC",
    location: "Loktak",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x35MW Hydro (LMZ make) at Loktak.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NHPC",
    slug: "ref-069-grid-code-nhpc-loktak",
    ...baseGovernance,
  },

  {
    id: "REF-070",
    sourceRow: 70,
    year: "2020",
    yearStart: 2020,
    yearEnd: 2020,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NHPC",
    location: "Chamera",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x180MW, 2x77MW & 3x98MW Hydro (GE make) at NHPC Chamera.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NHPC",
    slug: "ref-070-grid-code-nhpc-chamera",
    ...baseGovernance,
  },

  {
    id: "REF-071",
    sourceRow: 71,
    year: "2020",
    yearStart: 2020,
    yearEnd: 2020,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NEEPCO",
    location: "Ranganadi",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 3x55MW Hydro (BHEL make) at Ranganadi.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NEEPCO",
    slug: "ref-071-grid-code-neepco-ranganadi",
    ...baseGovernance,
  },

  {
    id: "REF-072",
    sourceRow: 72,
    year: "2020",
    yearStart: 2020,
    yearEnd: 2020,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "NEEPCO",
    location: "Pare",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: GRID_CODE_EXPERTISE,
    technologyTags: ["PFR", "Model Validation"],
    description:
      "Primary Frequency Response test and model validation as per IEGC standards, for 2x55MW Hydro (ANDRITZ make) at Pare.",
    publicTitle: "Hydro Generator PFR Testing & Model Validation",
    publicCustomer: "NEEPCO",
    slug: "ref-072-grid-code-neepco-pare",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-073                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-073",
    sourceRow: 73,
    year: "2019",
    yearStart: 2019,
    yearEnd: 2019,
    ongoing: false,
    projectType: "Power system study",
    customer: "TATA Steel, Kalinganagar",
    location: "Kalinganagar",
    country: "India",
    industry: "Steel",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Dynamic Simulation",
      "Control & Operability",
      "Power System Resilience",
    ],
    technologyTags: [
      "Islanding",
      "Steam System",
      "Gas System",
    ],
    description:
      "Create redundancy and margin in the integrated plant by utilizing by-product gases, reserve fuel and DGs as reserve generation in case of disturbances in either part. Improve boiler and steam-net control to improve CPP stability. Implement new criteria for active grid islanding when grid properties are outside boundaries. Carry out control/protection implementation and tuning step by step to reach full reliability in a controlled way.",
    publicTitle: "Integrated Plant Power, Steam & Gas System Study",
    publicCustomer: "TATA Steel",
    slug: "ref-073-power-system-study-tata-steel-kalinganagar",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-074                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-074",
    sourceRow: 74,
    year: "2019",
    yearStart: 2019,
    yearEnd: 2019,
    ongoing: false,
    projectType: "Power system study",
    customer: "TATA Steel, Kalinganagar",
    location: "Kalinganagar",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Dynamic Simulation",
      "Power System Studies",
      "Power System Resilience",
    ],
    technologyTags: [
      "Islanding",
      "Steam System",
      "Gas System",
    ],
    description:
      "Steam, gas and power system gap study. Dynamic power system study for islanding and fault management.",
    publicTitle: "Steam, Gas & Power System Gap Study",
    publicCustomer: "TATA Steel",
    slug: "ref-074-power-system-study-tata-steel-gap-study",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-075                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-075",
    sourceRow: 75,
    year: "2017",
    yearStart: 2017,
    yearEnd: 2017,
    ongoing: false,
    projectType: "Island Operation tests & Power system studies",
    customer: "BALCO",
    location: "Korba",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Governor Testing & Tuning",
      "AVR Testing & Tuning",
    ],
    technologyTags: [
      "AVR",
      "Governor",
      "Islanding",
    ],
    description:
      "Island operation test. Governor & AVR testing and tuning for 4x300MW & 4x135MW units.",
    publicTitle: "Island Operation, Governor & AVR Testing",
    publicCustomer: "BALCO",
    slug: "ref-075-island-operation-balco-korba",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-076                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-076",
    sourceRow: 76,
    year: "2017",
    yearStart: 2017,
    yearEnd: 2017,
    ongoing: false,
    projectType: "Island Operation tests & Power system studies",
    customer: "IPP, Vedanta",
    location: "Jharsuguda",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Governor Testing & Tuning",
      "AVR Testing & Tuning",
    ],
    technologyTags: [
      "AVR",
      "Governor",
      "Islanding",
    ],
    description:
      "Island operation test. Governor & AVR testing and tuning for 4x600MW units.",
    publicTitle: "Island Operation, Governor & AVR Testing",
    publicCustomer: "Vedanta",
    slug: "ref-076-island-operation-vedanta-jharsuguda",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-077                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-077",
    sourceRow: 77,
    year: "2017",
    yearStart: 2017,
    yearEnd: 2017,
    ongoing: false,
    projectType: "Island Operation test & study",
    customer: "IFFCO",
    location: "India",
    country: "India",
    industry: "Fertilizer",
    industryGroup: "Chemicals & Fertilizer",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Control & Operability",
    ],
    technologyTags: [
      "Islanding",
      "Gas System",
    ],
    description:
      "Power plant tests and optimization of power plant control for normal and island operation of a co-generation gas turbine.",
    publicTitle: "Cogeneration Gas Turbine Island Operation Testing",
    publicCustomer: "IFFCO",
    slug: "ref-077-island-operation-iffco",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-078                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-078",
    sourceRow: 78,
    year: "2016",
    yearStart: 2016,
    yearEnd: 2016,
    ongoing: false,
    projectType: "Island Operation test & study",
    customer: "Vedanta",
    location: "India",
    country: "India",
    industry: "Metal & Mining",
    industryGroup: "Steel & Metals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Control & Operability",
    ],
    technologyTags: [
      "Islanding",
      "Steam System",
    ],
    description:
      "Power plant tests and optimization of power plant control for normal and island operation at 6 steam turbine units at an aluminum smelter.",
    publicTitle: "Steam Turbine Island Operation Testing & Control Optimization",
    publicCustomer: "Vedanta",
    slug: "ref-078-island-operation-vedanta-aluminum",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-079                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-079",
    sourceRow: 79,
    year: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "Grid India (erstwhile POSOCO)",
    location: "Northern India",
    country: "India",
    industry: "Transmission System Operator (TSO)",
    industryGroup: "Grid & Transmission",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: [
      "Grid Code Compliance",
      "Generator Testing",
      "Island Operation",
      "Primary Frequency Response",
    ],
    technologyTags: ["Islanding"],
    description:
      "Testing of primary response and islanding capability of five generating units in northern India.",
    publicTitle: "Primary Response & Islanding Capability Testing",
    publicCustomer: "Grid India",
    slug: "ref-079-grid-code-grid-india-northern",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-080                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-080",
    sourceRow: 80,
    year: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    ongoing: false,
    projectType: "Grid Code Compliance",
    customer: "POSOCO",
    location: "India",
    country: "India",
    industry: "Grid Operator",
    industryGroup: "Grid & Transmission",
    serviceFamily: "Grid Code Compliance & Model Validation",
    expertise: [
      "Grid Code Compliance",
      "Generator Testing",
      "Primary Frequency Response",
      "Control & Operability",
    ],
    technologyTags: [
      "PFR",
      "Gas System",
    ],
    description:
      "Evaluation of power plant control ability and primary frequency response strategy in the national grid of India. The project included power plant tests and optimization of hydro power plants, thermal power plants and gas turbines. It also involved review and improvement suggestions on the Indian grid code for primary frequency response.",
    publicTitle: "Power Plant Control & Primary Frequency Response Evaluation",
    publicCustomer: "POSOCO",
    slug: "ref-080-grid-code-posoco",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-081                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-081",
    sourceRow: 81,
    year: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    ongoing: false,
    projectType: "Island Operation Test",
    customer: "NHPC Chamera-I",
    location: "Chamera-I",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Governor Testing & Tuning",
    ],
    technologyTags: [
      "Governor",
      "Islanding",
    ],
    description:
      "Island operation test, governor testing & tuning for 1x180MW unit.",
    publicTitle: "Island Operation & Governor Testing",
    publicCustomer: "NHPC",
    slug: "ref-081-island-operation-nhpc-chamera",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-082                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-082",
    sourceRow: 82,
    year: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    ongoing: false,
    projectType: "Island Operation Test",
    customer: "THDC Tehri",
    location: "Tehri",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Governor Testing & Tuning",
    ],
    technologyTags: [
      "Governor",
      "Islanding",
    ],
    description:
      "Island operation test, governor testing & tuning for 1x250MW unit.",
    publicTitle: "Island Operation & Governor Testing",
    publicCustomer: "THDC",
    slug: "ref-082-island-operation-thdc-tehri",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-083                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-083",
    sourceRow: 83,
    year: "2014",
    yearStart: 2014,
    yearEnd: 2014,
    ongoing: false,
    projectType: "Island Operation Test",
    customer: "NTPC Dadri",
    location: "Dadri",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Island Operation",
      "Governor Testing & Tuning",
    ],
    technologyTags: [
      "Governor",
      "Islanding",
    ],
    description:
      "Island operation test, governor testing & tuning for 1x490MW & 1x210MW units.",
    publicTitle: "Island Operation & Governor Testing",
    publicCustomer: "NTPC",
    slug: "ref-083-island-operation-ntpc-dadri",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-084                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-084",
    sourceRow: 84,
    year: "2013",
    yearStart: 2013,
    yearEnd: 2013,
    ongoing: false,
    projectType: "Power system study",
    customer: "Cairn",
    location: "India",
    country: "India",
    industry: "Oil & Gas",
    industryGroup: "Oil & Gas",
    serviceFamily: "Power System Studies",
    expertise: [
      "Power System Studies",
      "Control & Operability",
    ],
    technologyTags: [],
    description:
      "Incident analysis of generator failures and mitigation of further problems by retuning and resetting of control and protection systems.",
    publicTitle: "Generator Failure Analysis & Control/Protection Review",
    publicCustomer: "Cairn",
    slug: "ref-084-power-system-study-cairn",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-085                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-085",
    sourceRow: 85,
    year: "2025",
    yearStart: 2025,
    yearEnd: 2025,
    ongoing: false,
    projectType: "Feasibility Study for I&C",
    customer: "NEEPCO",
    location: "PLHPS",
    country: "India",
    industry: "Power & Utilities",
    industryGroup: "Power & Utilities",
    serviceFamily: "Other / Source-Specific Engineering",
    expertise: CONTROL_EXPERTISE,
    technologyTags: [
      "Instrumentation & Control systems",
    ],
    description:
      "Engagement for complete study of existing plant equipment and control system for upgradation of DCS system in NEEPCO PLHPS.",
    publicTitle: "Plant Equipment & Control System Feasibility Study",
    publicCustomer: "NEEPCO",
    slug: "ref-085-feasibility-study-neepco-plhps",
    ...baseGovernance,
  },

  /* ---------------------------------------------------------------------- */
  /* REF-086                                                               */
  /* ---------------------------------------------------------------------- */

  {
    id: "REF-086",
    sourceRow: 86,
    year: "2024",
    yearStart: 2024,
    yearEnd: 2024,
    ongoing: false,
    projectType: "Power system study",
    customer: "IOCL",
    location: "Mathura Refinery",
    country: "India",
    industry: "Refinery",
    industryGroup: "Refining & Petrochemicals",
    serviceFamily: "Island Operation & Power System Resilience",
    expertise: [
      "Power System Studies",
      "Island Operation",
      "Dynamic Simulation",
      "Transient Stability",
      "Protection Coordination",
    ],
    technologyTags: [
      "Load Flow",
      "Short Circuit",
      "Transient Stability",
      "Islanding",
    ],
    description:
      "Electrical system study at IOCL Mathura Refinery including load flow study, short circuit study, islanding study, transient stability study, UV, UF and fast load shedding & reacceleration scheme study, relay coordination settings and ACDB/DCDB fuse coordination, unit protection related studies, motor starting analysis, PF improvement and grounding studies.",
    publicTitle: "Integrated Electrical System Study for Refinery Operations",
    publicCustomer: "IOCL",
    slug: "ref-086-power-system-study-iocl-mathura",
    ...baseGovernance,
  },
];

/* ========================================================================== */
/* VALIDATION                                                                 */
/* ========================================================================== */

/**
 * Development-time sanity check.
 *
 * This ensures we never accidentally remove a reference record.
 */
if (process.env.NODE_ENV !== "production") {
  if (projects.length !== 86) {
    console.warn(
      `[Solvina Projects] Expected 86 reference records, found ${projects.length}.`
    );
  }
}