export interface ExpertiseFAQ {
  question: string;
  answer: string;
}

export interface ExpertiseSEO {
  title: string;
  description: string;
  keyword: string;
  url: string;
}

export interface ExpertiseHero {
  heading: string;
  intro: string;
}

export interface ExpertiseCTAs {
  primary: string;
  secondary: string;
}

export interface ExpertisePage {
  slug: string;
  title: string;
  category: string;

  seo: ExpertiseSEO;

  hero: ExpertiseHero;

  challenge: string;

  scope: string[];

  methodAndDeliverables: string;

  value: string[];

  faqs: ExpertiseFAQ[];

  relatedPages: string[];

  ctas: ExpertiseCTAs;

  publicationStatus: string;
}

export const expertiseOverview = {
  "url": "/expertise/",
  "seo": {
    "url": "/expertise/",
    "title": "Engineering Expertise | Power, Steam & Control Systems | Solvina India",
    "description": "Solvina India's engineering expertise: integrated steam & power studies, grid code compliance, island operation, control tuning and protection coordination.",
    "keyword": "power plant engineering consultancy India"
  },
  "h1": "Engineering Expertise for Systems That Must Perform Under Real Conditions",
  "intro": "Solvina's expertise is organised around the engineering questions our customers actually need answered — not around a generic service list. Whether the question is how a steam net responds to a trip, how a generator behaves during a grid fault, or how a control loop should be tuned, our teams bring together simulation, testing and hands-on plant experience to answer it.",
  "families": [
    {
      "title": "Integrated Systems & Simulation",
      "description": "The foundation discipline: understanding how steam, power, process and controls interact as one system.",
      "items": [
        "Integrated Steam & Power Systems",
        "Dynamic Simulation & System Modelling"
      ]
    },
    {
      "title": "Power Systems & Grid",
      "description": "Electrical network behaviour, grid connection requirements and generator response.",
      "items": [
        "Power System Studies",
        "Grid Code Compliance & Generator Testing",
        "Island Operation",
        "Solar, Wind & BESS"
      ]
    },
    {
      "title": "Control & Operability",
      "description": "Coordinated tuning of the loops that keep a plant stable under real disturbances.",
      "items": [
        "Plant Control & Operability",
        "Governor Testing & Tuning",
        "AVR & PSS Testing and Tuning",
        "Boiler, Turbine & Process Control"
      ]
    },
    {
      "title": "Protection, Power Quality & Optimisation",
      "description": "Protecting the system correctly and getting more from the utility assets already installed.",
      "items": [
        "Protection Coordination",
        "Power Quality Studies & Monitoring",
        "Energy & Utility Optimization"
      ]
    },
    {
      "title": "Digital & Specialist Engineering",
      "description": "Automation, simulation tooling and focused specialist support at critical project moments.",
      "items": [
        "Industrial Automation & Digital Engineering",
        "Specialist Engineering Consulting"
      ]
    }
  ],
  "ctas": {
    "primary": "Explore a Capability",
    "secondary": "Talk to Our Engineers"
  }
};

export const expertisePages: ExpertisePage[] = [
  {
    "slug": "integrated-steam-power-systems",
    "title": "Integrated Steam & Power Systems",
    "category": "Integrated Systems & Simulation",
    "seo": {
      "title": "Integrated Steam & Power System Studies | Solvina India",
      "description": "Dynamic modelling of steam, turbines, boilers and electrical networks to understand how an integrated plant behaves under real disturbances.",
      "keyword": "integrated steam and power system studies",
      "url": "/expertise/integrated-steam-power-systems/"
    },
    "hero": {
      "heading": "Understand the Plant as One Interconnected Utility System",
      "intro": "Steam, generation, the electrical network, process consumers and controls all influence each other continuously in an industrial plant. Solvina builds integrated dynamic and static models to make those interactions visible — in normal operation, during disturbances, and across both grid-connected and islanded conditions."
    },
    "challenge": "Most steam and power systems are commissioned and documented as if each part operates independently. In practice, a turbine trip changes steam header pressure, which changes boiler firing, which can affect fuel use and emissions — and, where the plant runs captive generation, it can also change grid stability. Decisions made without seeing this whole picture tend to under-perform once the plant is running.",
    "scope": [
      "Integrated dynamic and static modelling of steam, power and process systems",
      "Steam headers, boilers, turbines and downstream process consumers",
      "Electrical network interaction, including captive generation and grid interface",
      "Islanded and grid-connected operating scenarios",
      "Control strategy review and settings recommendations",
      "Load flow and relay coordination, where included in scope",
      "Simulation-to-field validation where testing forms part of the assignment"
    ],
    "methodAndDeliverables": "We start by defining the engineering question and the boundary of the system, then review the data and models already available before building or validating the representation needed to answer it. Relevant transients and operating scenarios are simulated, sensitivities and root causes are diagnosed, and recommendations are developed and checked against the evidence available. Depending on scope, deliverables can include a validated model, a study report, test plans and results, revised control settings, and practical implementation guidance.",
    "value": [
      "Reduced risk of cascading trips across steam and power systems",
      "Evidence-based control settings instead of commissioning defaults",
      "A clearer technical basis for capital and operating decisions",
      "Faster, better-informed troubleshooting when something does go wrong"
    ],
    "faqs": [
      {
        "question": "Do you need to shut our plant down to build the model?",
        "answer": "No — model development is based on design data, commissioning records and operating measurements. Any on-site testing is planned separately and, where governor or frequency response is involved, can typically be carried out without disconnecting the unit from the grid."
      },
      {
        "question": "How is this different from a standard power system study?",
        "answer": "A standard electrical study usually stops at the generator terminals. Integrated steam and power work extends the model into the boiler, turbine and steam network so that thermal and electrical behaviour are analysed together — which is where many real disturbances actually originate."
      }
    ],
    "relatedPages": [
      "Dynamic Simulation & System Modelling",
      "Power System Studies",
      "Island Operation"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "dynamic-simulation-system-modelling",
    "title": "Dynamic Simulation & System Modelling",
    "category": "Integrated Systems & Simulation",
    "seo": {
      "title": "Dynamic Simulation & Power System Modelling | Solvina India",
      "description": "Time-domain modelling of power, steam and control systems to study disturbances, transitions and control interactions before they happen in the field.",
      "keyword": "dynamic simulation power plant modelling",
      "url": "/expertise/dynamic-simulation-system-modelling/"
    },
    "hero": {
      "heading": "See How the System Behaves Over Time",
      "intro": "Steady-state calculations show where a system is operating; they don't show what happens in the seconds afterwards. Solvina uses time-domain models to study transitions, disturbances and control interactions — before, or alongside, field implementation."
    },
    "challenge": "Decisions about control settings, protection margins and operating limits are often made from single-point calculations that assume the system is already at rest. Most of the real risk in a plant, however, sits in the transient — the first seconds after a trip, a fault or a large load step — which a steady-state number cannot describe.",
    "scope": [
      "Model architecture and data review",
      "Physical and process dynamics — thermal, mechanical and fluid",
      "Electrical and control-system dynamics",
      "Scenario definition, covering the disturbances that matter to your plant",
      "Model calibration and validation against measured data",
      "Sensitivity and root-cause analysis",
      "Decision support and engineering recommendations"
    ],
    "methodAndDeliverables": "The same structured path applies as in any Solvina study: define the question, review the data, build or validate the model, simulate the scenarios that matter, and diagnose what the results actually mean before recommending a change. Where field testing is available, model outputs are checked against it so the model's limits are known, not assumed.",
    "value": [
      "See failure modes before they happen instead of after",
      "Test 'what if' operating scenarios safely, without risking the real plant",
      "Build confidence in control and protection settings before they are relied upon",
      "Create a reusable model asset that supports future studies"
    ],
    "faqs": [
      {
        "question": "How accurate does a dynamic model need to be?",
        "answer": "Accurate enough to answer the specific engineering question in scope. We calibrate and validate the model against real plant data wherever it is available, and state its limits clearly rather than presenting it as more general-purpose than it is."
      },
      {
        "question": "Can you model equipment from any manufacturer?",
        "answer": "Yes. Our modelling approach represents how the physical system and controls behave, independent of which OEM supplied the equipment — so results are not tied to a single vendor's platform."
      }
    ],
    "relatedPages": [
      "Integrated Steam & Power Systems",
      "Power System Studies",
      "Plant Control & Operability"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "power-system-studies",
    "title": "Power System Studies",
    "category": "Power Systems & Grid",
    "seo": {
      "title": "Power System Studies — Load Flow, Short-Circuit & Stability | Solvina India",
      "description": "Load flow, short-circuit, transient stability and contingency studies connected to how generation, controls and protection actually operate.",
      "keyword": "power system studies India",
      "url": "/expertise/power-system-studies/"
    },
    "hero": {
      "heading": "Power-System Analysis Grounded in Industrial Operating Reality",
      "intro": "Electrical studies are most useful when the calculations are connected to how generation, controls, protection and process loads actually operate — not treated as an isolated network exercise. Solvina supports industrial and generation systems with network and dynamic analysis that reflects real plant behaviour."
    },
    "challenge": "A load-flow or short-circuit report that ignores generator dynamics, governor behaviour or protection philosophy can look complete on paper and still miss the interaction that causes a real outage. Studies that stay isolated from how the plant is actually controlled tend to surface their gaps at commissioning — the most expensive place to find them.",
    "scope": [
      "Load flow",
      "Short-circuit analysis",
      "Transient and dynamic stability",
      "Generator and controller modelling",
      "Contingency analysis",
      "Industrial and captive-grid behaviour",
      "Interfaces with protection and control systems"
    ],
    "methodAndDeliverables": "Scope is defined for the specific engineering question — we do not include analysis types that aren't relevant to your system just to lengthen the report. Models are built or reviewed, contingencies and scenarios of interest are analysed, and findings are translated into settings, design changes or evidence a customer or authority can act on.",
    "value": [
      "Confidence the network will perform as designed under contingency",
      "Fewer surprises at commissioning or grid-connection testing",
      "A defensible technical basis for protection and control settings",
      "Clear input for capacity planning and expansion decisions"
    ],
    "faqs": [
      {
        "question": "Do you run every type of study on every project?",
        "answer": "No — scope is defined for the engineering question at hand. We are direct about which analyses are relevant to your system and which are not."
      },
      {
        "question": "Can these studies support a grid connection application?",
        "answer": "Yes — where required, they feed directly into grid code compliance and generator testing work."
      }
    ],
    "relatedPages": [
      "Grid Code Compliance & Generator Testing",
      "Protection Coordination",
      "Integrated Steam & Power Systems"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "grid-code-compliance",
    "title": "Grid Code Compliance & Generator Testing",
    "category": "Power Systems & Grid",
    "seo": {
      "title": "Grid Code Compliance & Generator Testing | Solvina India",
      "description": "Simulation and on-site testing to demonstrate generator grid code compliance — frequency response, voltage response, AVR/PSS and governor behaviour.",
      "keyword": "grid code compliance testing India",
      "url": "/expertise/grid-code-compliance/"
    },
    "hero": {
      "heading": "Move from Compliance Requirement to Validated Generator Response",
      "intro": "Grid compliance is ultimately about how a generator actually behaves — not just what its datasheet claims. Solvina supports generators and utilities in understanding the applicable requirements, preparing models and tests, analysing the response, and developing tuning recommendations where needed."
    },
    "challenge": "Compliance is sometimes treated as a paperwork exercise rather than an engineering one. But requirements such as fault-ride-through, rate-of-change-of-frequency response and reactive capability describe real dynamic behaviour — and a generator that hasn't been properly modelled or tested against them can fail a connection application, or worse, underperform during an actual grid event.",
    "scope": [
      "Requirement and scoping review against the applicable grid code",
      "Model and parameter review",
      "Primary frequency response",
      "Governor response",
      "Voltage and excitation response",
      "AVR / PSS studies and tuning where applicable",
      "Testing, analysis and reporting"
    ],
    "methodAndDeliverables": "We review which requirements genuinely apply to your connection and generator type, then determine whether each is best shown by simulation, by test, or by both. Models and settings are reviewed and, where testing is required, it is planned to the standard a TSO or SLDC expects. Results are documented so the evidence trail from requirement to demonstrated response is clear.",
    "value": [
      "Evidence a TSO or SLDC can accept, prepared to the standard they expect",
      "Fewer rejected or delayed connection applications",
      "A validated basis for any tuning changes recommended",
      "A clear documentation trail from requirement to test result"
    ],
    "faqs": [
      {
        "question": "Is testing always required, or can compliance be shown by simulation alone?",
        "answer": "It depends on the requirement and the applicable grid code. Some properties are safely and efficiently proven by simulation; others — certain protection or frequency-response characteristics, for example — are better demonstrated by test. We help identify which applies before work begins."
      },
      {
        "question": "Does Solvina represent the TSO or the generator?",
        "answer": "We work on behalf of the generator or plant owner to prepare and demonstrate compliance. We do not act as, and cannot speak on behalf of, the grid operator or regulator."
      }
    ],
    "relatedPages": [
      "Island Operation",
      "Governor Testing & Tuning",
      "AVR & PSS Testing and Tuning"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "island-operation",
    "title": "Island Operation",
    "category": "Power Systems & Grid",
    "seo": {
      "title": "Island Operation Testing & Studies | Solvina India",
      "description": "Feasibility studies and on-grid testing of island operation capability — generation-load balance, governor response and separation logic.",
      "keyword": "island operation testing power plant",
      "url": "/expertise/island-operation/"
    },
    "hero": {
      "heading": "Engineer for the Moment the Grid Is No Longer There",
      "intro": "Island operation places the whole plant under a different dynamic balance. Generation, load, steam or process demand, controls, protection and separation logic all have to work together fast enough to hold a viable internal system — with no support from the wider grid."
    },
    "challenge": "Most governors and control systems are never tested against a realistic islanding event before the day they actually need to perform one. When that day comes without prior validation, plants often lose production they could have kept running, or suffer a second, avoidable blackout on top of the first disturbance.",
    "scope": [
      "Island feasibility and dynamic studies",
      "Generation-load balance analysis",
      "Separation philosophy and logic",
      "Governor and voltage-control response in island mode",
      "Steam and process interaction during islanding",
      "Protection interfaces",
      "Testing, hardware-in-the-loop or online validation where supported"
    ],
    "methodAndDeliverables": "Feasibility is established through dynamic simulation first, so limits and risks are understood before anything is attempted on the real plant. Where field validation is included, methods exist that keep the generating unit synchronised to the live grid throughout the test — with the ability to abort back to normal operation immediately if a result moves outside safe limits.",
    "value": [
      "Proven island capability instead of an assumed one",
      "Faster, safer recovery from grid disturbances",
      "Reduced production loss when the plant needs to hold itself up",
      "A tested basis for insurance, audit or internal governance requirements"
    ],
    "faqs": [
      {
        "question": "Does testing require disconnecting our plant from the grid?",
        "answer": "Not necessarily. Certain testing methods keep the unit synchronised to the real grid throughout, using a simulated island signal in place of an actual disconnection, with the ability to abort back to normal operation immediately."
      },
      {
        "question": "How do you decide what load step size is safe to test?",
        "answer": "We build up from small, well-understood steps informed by the dynamic model and the plant's own operating history, rather than starting at the largest disturbance the plant might one day see."
      }
    ],
    "relatedPages": [
      "Governor Testing & Tuning",
      "Integrated Steam & Power Systems",
      "Grid Code Compliance & Generator Testing"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "plant-control-optimization",
    "title": "Plant Control & Operability",
    "category": "Control & Operability",
    "seo": {
      "title": "Plant Control & Operability Engineering | Solvina India",
      "description": "Coordinated review of boiler, turbine, generator and process controls to diagnose interactions that single-loop tuning misses.",
      "keyword": "plant control optimization engineering",
      "url": "/expertise/plant-control-optimization/"
    },
    "hero": {
      "heading": "Improve the Way the Plant Responds as a System",
      "intro": "Good control performance is not simply a collection of individually tuned loops. Solvina studies the coordinated response of boilers, turbines, generators, steam networks and process controls together, to find interactions that loop-by-loop tuning tends to miss."
    },
    "challenge": "Individual loops are often tuned in isolation at commissioning and left alone afterwards. Interactions between them — a pressure loop fighting a load loop, for example — can surface months or years later as oscillations, slow recovery from disturbances, or instability that no single-loop retune actually fixes.",
    "scope": [
      "Control-structure review",
      "Dynamic-response analysis across interacting loops",
      "Interaction diagnosis",
      "Operating-scenario testing",
      "Controller tuning and setting recommendations",
      "Plant-response validation",
      "Operating-philosophy support"
    ],
    "methodAndDeliverables": "We review how the control structure is meant to behave, then test it — in simulation and, where included, on the real plant — against the operating scenarios that matter most. Interactions are diagnosed at the system level rather than loop by loop, and tuning or structural recommendations are validated before being handed over.",
    "value": [
      "Smoother response to load changes and disturbances",
      "Fewer operator interventions during transients",
      "A documented, evidence-based basis for control settings",
      "A foundation for the specialist tuning work below — governor, AVR/PSS and boiler-turbine control"
    ],
    "faqs": [
      {
        "question": "Does the DCS or automation vendor matter for this work?",
        "answer": "No. Our review is independent of the underlying automation platform — we work with the control behaviour the plant actually exhibits, whichever vendor's system implements it."
      },
      {
        "question": "Can this be done without disrupting production?",
        "answer": "Most of the diagnostic work is based on existing operating data and simulation. Any on-plant testing is planned and scoped separately, with production impact discussed and agreed in advance."
      }
    ],
    "relatedPages": [
      "Governor Testing & Tuning",
      "AVR & PSS Testing and Tuning",
      "Boiler, Turbine & Process Control"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "governor-tuning",
    "title": "Governor Testing & Tuning",
    "category": "Control & Operability",
    "seo": {
      "title": "Governor Testing & Tuning Services | Solvina India",
      "description": "Model review, response testing and tuning of turbine governors for frequency response, load control and island-operation performance.",
      "keyword": "governor testing tuning turbine",
      "url": "/expertise/plant-control-optimization/governor-tuning/"
    },
    "hero": {
      "heading": "Validate and Improve Governor Response",
      "intro": "Governor behaviour shapes frequency response, load control, island operation and overall generator performance — yet many governors are never tested against a realistic disturbance after commissioning. Solvina combines model understanding, response analysis, testing and tuning to support settings that are technically defensible."
    },
    "challenge": "Droop, deadband and limit settings are frequently left at factory defaults or values chosen years ago for a plant configuration that has since changed. Without testing, there is no way to know whether the governor will actually respond the way the settings imply.",
    "scope": [
      "Governor model review",
      "Droop, deadband and limit verification",
      "Response testing",
      "Primary-frequency-response-related analysis where applicable",
      "Island-operation implications",
      "Tuning recommendations",
      "Validation and documentation"
    ],
    "methodAndDeliverables": "The governor model and its parameters are reviewed against the physical equipment first. Response is then tested — in simulation and, where scoped, on the live unit — against representative disturbances, and any retuning is validated against the same tests before being documented as final.",
    "value": [
      "Frequency and load response that matches what the settings claim",
      "A tested basis for grid code and island-operation requirements",
      "Fewer unexplained hunting or oscillation issues",
      "Clear documentation for audit, compliance or handover purposes"
    ],
    "faqs": [
      {
        "question": "How often should governor tuning be reviewed?",
        "answer": "There is no fixed interval — but a review is worth considering after any change to the plant, the fuel, the grid connection, or if operators report unexplained frequency or load behaviour."
      },
      {
        "question": "Is this the same as grid code compliance testing?",
        "answer": "Related but distinct. Governor tuning focuses on getting the response right; grid code compliance focuses on proving that response meets a specific regulatory requirement. Many projects involve both."
      }
    ],
    "relatedPages": [
      "Island Operation",
      "Grid Code Compliance & Generator Testing",
      "AVR & PSS Testing and Tuning"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "avr-pss",
    "title": "AVR & PSS Testing and Tuning",
    "category": "Control & Operability",
    "seo": {
      "title": "AVR & PSS Testing and Tuning | Solvina India",
      "description": "Excitation system and power system stabilizer review, testing and tuning to improve voltage response and electromechanical damping.",
      "keyword": "AVR PSS tuning generator",
      "url": "/expertise/plant-control-optimization/avr-pss/"
    },
    "hero": {
      "heading": "Strengthen Voltage Control and Dynamic Stability",
      "intro": "Excitation systems and power system stabilizers influence voltage response and electromechanical damping — two properties that matter every time the grid experiences a disturbance. Solvina supports model validation, stability analysis, testing and tuning to improve confidence in generator dynamic behaviour."
    },
    "challenge": "A PSS that was tuned once, at commissioning, on a system that has since changed can do more harm than good — poorly tuned stabilizers have been known to introduce oscillations rather than damp them. Excitation limits that were never verified can also leave a generator exposed during a genuine fault.",
    "scope": [
      "AVR / excitation system review",
      "PSS model and settings",
      "Transient stability assessment",
      "Disturbance-response analysis",
      "Testing where applicable",
      "Tuning recommendations",
      "Validation and reporting"
    ],
    "methodAndDeliverables": "The excitation and PSS models are reviewed against the physical system, transient stability is assessed for the disturbances relevant to your network, and — where testing is included — response is verified on the real machine. Any retuning is checked against the same scenarios before it is finalised.",
    "value": [
      "Voltage response that supports the grid rather than working against it",
      "Reduced risk of PSS-induced oscillation",
      "A validated basis for excitation limiter settings",
      "Evidence that supports grid code and stability requirements"
    ],
    "faqs": [
      {
        "question": "What's the difference between AVR tuning and PSS tuning?",
        "answer": "The AVR controls terminal voltage; the PSS adds a supplementary signal specifically to damp electromechanical oscillations. They interact, so both are usually reviewed together rather than in isolation."
      },
      {
        "question": "Can this work be combined with grid code compliance testing?",
        "answer": "Yes — AVR/PSS response is often part of the evidence a grid code requires, so the two are frequently scoped together."
      }
    ],
    "relatedPages": [
      "Governor Testing & Tuning",
      "Grid Code Compliance & Generator Testing",
      "Power System Studies"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "boiler-turbine-process-control",
    "title": "Boiler, Turbine & Process Control",
    "category": "Control & Operability",
    "seo": {
      "title": "Boiler & Turbine Control Design | Solvina India",
      "description": "Dynamic modelling and control engineering for boiler pressure, turbine load and steam-network response in integrated industrial plants.",
      "keyword": "boiler turbine control design",
      "url": "/expertise/plant-control-optimization/boiler-turbine-control/"
    },
    "hero": {
      "heading": "Coordinate Boiler, Turbine and Process Response",
      "intro": "In integrated plants, boiler pressure, turbine power, steam demand and process conditions can interact strongly. Solvina applies dynamic modelling and control engineering to understand these relationships and develop practical control improvements."
    },
    "challenge": "A boiler and turbine that were individually well-designed can still behave poorly together — a fast load change on the turbine can outrun the boiler's ability to respond, or a steam-network disturbance can be misread by a control loop that was never designed with the wider network in mind.",
    "scope": [
      "Boiler pressure control",
      "Turbine power and load control",
      "Steam-network response",
      "Process-control interactions",
      "Contingency behaviour",
      "Control algorithm and settings review",
      "Testing and tuning where applicable"
    ],
    "methodAndDeliverables": "A dynamic model of the boiler, turbine and connected steam network is built or validated, representative disturbances are simulated, and control strategy or settings changes are developed from the results. Where testing is included, findings are checked against the real plant before recommendations are finalised.",
    "value": [
      "More stable steam pressure and turbine load through disturbances",
      "Fewer trips triggered by control interaction rather than genuine faults",
      "A control strategy designed for the plant as installed, not a generic default",
      "Groundwork for safe commissioning of new boiler or turbine equipment"
    ],
    "faqs": [
      {
        "question": "Is this relevant if we're installing a new boiler or turbine?",
        "answer": "Yes — this is exactly the kind of work best done before a new unit is tied in, so the control strategy is designed for the combined system rather than adjusted afterwards."
      },
      {
        "question": "Can you work with our existing DCS configuration?",
        "answer": "Yes. Recommendations are developed to be implemented within your existing control system rather than requiring a platform change."
      }
    ],
    "relatedPages": [
      "Integrated Steam & Power Systems",
      "Plant Control & Operability",
      "Energy & Utility Optimization"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "protection-coordination",
    "title": "Protection Coordination",
    "category": "Protection, Power Quality & Optimisation",
    "seo": {
      "title": "Protection Coordination Studies | Solvina India",
      "description": "Relay coordination and protection settings review connected to real network configuration, generation and islanding requirements.",
      "keyword": "protection coordination relay studies",
      "url": "/expertise/protection-coordination/"
    },
    "hero": {
      "heading": "Protection That Reflects the Real System",
      "intro": "Protection must isolate faults selectively while supporting the operating philosophy of the wider plant. Solvina connects protection studies with network configuration, generation and islanding requirements, rather than treating settings as a standalone exercise."
    },
    "challenge": "Protection settings calculated in isolation from how the plant actually operates — including captive generation, islanding and process-critical loads — can either fail to trip when they should, or trip more of the plant than the fault actually requires.",
    "scope": [
      "Short-circuit basis",
      "Relay coordination",
      "Protection settings review",
      "Selectivity assessment",
      "Generation and utility interfaces",
      "Islanding implications",
      "Documentation and recommendations"
    ],
    "methodAndDeliverables": "Short-circuit levels are established across the relevant network conditions, existing settings are reviewed for coordination and selectivity, and recommendations are developed with the plant's generation and islanding requirements explicitly in view rather than as an afterthought.",
    "value": [
      "Faults isolated selectively, without unnecessary plant-wide trips",
      "Settings that reflect the network as it actually operates today",
      "A documented coordination basis for audit and future changes",
      "Alignment between protection philosophy and islanding capability"
    ],
    "faqs": [
      {
        "question": "Do you review settings for equipment from any manufacturer?",
        "answer": "Yes — the review is based on the network's electrical behaviour and the relay's functional settings, independent of the relay manufacturer."
      },
      {
        "question": "How does this connect to island operation work?",
        "answer": "Protection philosophy has to support whatever separation and islanding strategy the plant uses — the two are reviewed together wherever both are in scope."
      }
    ],
    "relatedPages": [
      "Power System Studies",
      "Island Operation",
      "Power Quality Studies & Monitoring"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "power-quality",
    "title": "Power Quality Studies & Monitoring",
    "category": "Protection, Power Quality & Optimisation",
    "seo": {
      "title": "Power Quality Studies & Monitoring | Solvina India",
      "description": "Measurement, harmonic assessment and root-cause diagnosis of power-quality problems, with practical mitigation options.",
      "keyword": "power quality study harmonics monitoring",
      "url": "/expertise/power-quality/"
    },
    "hero": {
      "heading": "Measure, Diagnose and Understand Power-Quality Problems",
      "intro": "Power-quality issues can originate from network conditions, large loads, converters, switching events or interactions among plant systems. Solvina combines measurement and engineering analysis to identify causes and evaluate mitigation options."
    },
    "challenge": "Power-quality complaints — nuisance tripping, equipment heating, flicker complaints from a grid operator — are often treated symptomatically, with mitigation equipment purchased before the actual source of the disturbance has been confirmed.",
    "scope": [
      "Measurement planning",
      "Harmonic and disturbance assessment",
      "Data analysis",
      "Network modelling where required",
      "Root-cause diagnosis",
      "Mitigation assessment",
      "Monitoring and reporting"
    ],
    "methodAndDeliverables": "Measurement is planned around the specific complaint or requirement, data is analysed against relevant standards and limits, and — where the cause isn't obvious from measurement alone — network modelling is used to trace the disturbance back to its source before mitigation options are evaluated.",
    "value": [
      "A confirmed root cause instead of a guess",
      "Mitigation recommendations sized to the actual problem",
      "Evidence suitable for discussions with a grid operator or equipment supplier",
      "A monitoring basis for tracking whether a fix actually worked"
    ],
    "faqs": [
      {
        "question": "Do you supply and install monitoring equipment?",
        "answer": "Scope varies by project — the priority is accurate measurement and correct diagnosis; equipment and mitigation options are discussed based on what the diagnosis shows."
      },
      {
        "question": "Can this help with a grid operator's power-quality complaint?",
        "answer": "Yes — confirmed root-cause analysis is usually the starting point for any productive conversation with a grid operator about a power-quality issue."
      }
    ],
    "relatedPages": [
      "Protection Coordination",
      "Power System Studies",
      "Energy & Utility Optimization"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "energy-utility-optimization",
    "title": "Energy & Utility Optimization",
    "category": "Protection, Power Quality & Optimisation",
    "seo": {
      "title": "Energy & Utility Optimization Engineering | Solvina India",
      "description": "Engineering analysis of generation, steam and control interactions to identify practical utility performance improvement opportunities.",
      "keyword": "energy utility optimization industrial plant",
      "url": "/expertise/energy-utility-optimization/"
    },
    "hero": {
      "heading": "Turn Integrated System Understanding into Better Utility Decisions",
      "intro": "Optimization begins with understanding constraints and interactions. Solvina uses engineering models, operating data and scenario analysis to evaluate how generation, steam and process utilities, and controls can be operated more effectively."
    },
    "challenge": "Utility performance improvements are often proposed as generic best practices without being checked against the specific constraints of a given plant — its steam balance, its control interactions, its contractual or operational limits — which is why they don't always deliver in practice.",
    "scope": [
      "System baseline",
      "Constraint identification",
      "Operating-scenario analysis",
      "Steam / power balance review",
      "Control and dispatch interactions",
      "Improvement-opportunity identification",
      "Technical validation"
    ],
    "methodAndDeliverables": "A baseline of current performance and its real constraints is established first. Opportunities are identified and evaluated against operating scenarios specific to the plant, and findings are presented as opportunities to test and validate — not as guaranteed outcomes, since actual results depend on implementation and operating conditions.",
    "value": [
      "Improvement opportunities grounded in this plant's actual constraints",
      "A technical basis for prioritising which changes to pursue first",
      "Reduced risk of implementing a change that looks good on paper but conflicts with an operating constraint",
      "A validated case to support an investment decision"
    ],
    "faqs": [
      {
        "question": "Can you guarantee a specific energy saving?",
        "answer": "No — we present improvement opportunities with their technical basis and expected direction of benefit; actual outcomes depend on implementation, operating discipline and conditions outside our control."
      },
      {
        "question": "Does this require new capital equipment?",
        "answer": "Not necessarily. Many opportunities relate to control strategy, dispatch or operating philosophy rather than new hardware; capital options are only recommended where the analysis supports them."
      }
    ],
    "relatedPages": [
      "Boiler, Turbine & Process Control",
      "Integrated Steam & Power Systems",
      "Plant Control & Operability"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "industrial-automation-digital-engineering",
    "title": "Industrial Automation & Digital Engineering",
    "category": "Digital & Specialist Engineering",
    "seo": {
      "title": "Industrial Automation & Digital Engineering | Solvina India",
      "description": "Automation, simulation and digital engineering applied to verified industrial workflows — presented against the problem solved, not the technology.",
      "keyword": "industrial automation digital engineering",
      "url": "/expertise/industrial-automation-digital-engineering/"
    },
    "hero": {
      "heading": "Digital Engineering with a Clear Industrial Purpose",
      "intro": "Automation, digital models and engineering software are only useful when they support a real engineering workflow. This page explains the problem each capability solves — rather than leading with technology terminology for its own sake."
    },
    "challenge": "",
    "scope": [
      "We support control and automation engineering scope that is currently active and verified — from control narrative and logic review to integration support at the plant level. Capability here is described conservatively and updated as offerings are confirmed."
    ],
    "methodAndDeliverables": "",
    "value": [],
    "faqs": [],
    "relatedPages": [],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "conditional"
  },
  {
    "slug": "specialist-engineering-consulting",
    "title": "Specialist Engineering Consulting",
    "category": "Digital & Specialist Engineering",
    "seo": {
      "title": "Specialist Engineering Consulting & Commissioning Support | Solvina India",
      "description": "Independent engineering support for project studies, commissioning, troubleshooting and technical advisory at complex plant interfaces.",
      "keyword": "engineering consulting commissioning support",
      "url": "/expertise/engineering-consulting-support/"
    },
    "hero": {
      "heading": "Focused Technical Depth at Critical Project Interfaces",
      "intro": "Solvina supports project owners, EPCs and operating organisations where a complex technical question requires specialist modelling, studies, testing, commissioning support or multidisciplinary engineering judgement that is hard to hold in-house full-time."
    },
    "challenge": "",
    "scope": [
      "Specialist analysis embedded within larger design or modification programmes — brought in for the specific technical question rather than the whole project scope."
    ],
    "methodAndDeliverables": "",
    "value": [],
    "faqs": [],
    "relatedPages": [
      "Grid Code Compliance & Generator Testing",
      "Governor Testing & Tuning",
      "Island Operation"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Study Scope"
    },
    "publicationStatus": "approved-draft"
  },
  {
    "slug": "solar-wind-bess",
    "title": "Solar, Wind & BESS",
    "category": "Power Systems & Grid",
    "seo": {
      "title": "Solar, Wind & BESS Engineering | Solvina India",
      "description": "Grid code compliance, controller testing, dynamic model validation and grid integration studies for solar PV, wind power and battery energy storage systems.",
      "keyword": "solar wind BESS grid compliance testing",
      "url": "/expertise/solar-wind-bess/"
    },
    "hero": {
      "heading": "Engineering for Renewable Generation and Energy Storage Integration",
      "intro": "Solar PV, wind power and battery energy storage systems bring new grid integration challenges — fast inverter dynamics, grid-forming requirements, and hybrid plant coordination. Solvina supports testing, model validation and grid compliance for these evolving technologies."
    },
    "challenge": "Renewable generation and storage systems are often required to demonstrate grid code compliance and dynamic performance capabilities that differ significantly from conventional generation. Inverter-based resources, grid-forming controllers and hybrid plant coordination require specialised testing and validation approaches that go beyond traditional power plant methodologies.",
    "scope": [
      "Solar PV: PPC & SCADA Testing, Inverter Communication Testing, Active & Reactive Power Control Verification, LVRT / HVRT Testing, Ramp Rate Verification, Power Quality Assessment, Dynamic Model Validation",
      "Wind Power: WTG Communication Testing, PPC Verification, Frequency Response Testing, Reactive Power Capability, Voltage Control Testing, Dynamic Performance Studies, Grid Integration Studies",
      "Battery Energy Storage Systems (BESS): BESS Controller Testing, EMS / PPC Communication, Charge / Discharge Performance Testing, Grid Forming / Grid Following Validation, Frequency Regulation Studies, Dynamic Stability Studies, Hybrid Plant Integration Studies"
    ],
    "methodAndDeliverables": "Testing and validation scope is defined around the specific grid code requirements and operational challenges for each technology. For solar PV, we focus on inverter-level and plant-level controller response and communication verification. For wind power, we address turbine-level performance and plant coordination. For BESS, we cover controller behaviour, grid-forming/following modes and hybrid plant integration. Testing is combined with dynamic model validation where required to support grid connection applications.",
    "value": [
      "Demonstrated compliance with renewable-specific grid code requirements",
      "Validated controller settings for inverter-based resources and storage systems",
      "Evidence of dynamic performance for grid connection applications",
      "Reduced risk of integration issues in hybrid renewable plants"
    ],
    "faqs": [
      {
        "question": "Do you test individual inverters or the entire solar plant?",
        "answer": "Both are possible depending on the requirement. Plant-level testing focuses on the overall response to grid events, while inverter-level testing can be used for type certification or detailed model validation."
      },
      {
        "question": "How does BESS testing differ from conventional generator testing?",
        "answer": "BESS systems have unique modes — grid-forming versus grid-following, charge/discharge transitions, and hybrid coordination — that require specialised test sequences beyond what's used for synchronous generators."
      }
    ],
    "relatedPages": [
      "Grid Code Compliance & Generator Testing",
      "Power System Studies",
      "Dynamic Simulation & System Modelling"
    ],
    "ctas": {
      "primary": "Talk to Our Engineers",
      "secondary": "Review Your Testing Scope"
    },
    "publicationStatus": "approved-draft"
  }
];

export default expertisePages;
