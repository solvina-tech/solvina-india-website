export type KnowledgeType =
  | "Technical Article"
  | "Case Study"
  | "Standards / Grid Code Update"
  | "Whitepaper"
  | "Publication";

export interface KnowledgeSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface KnowledgeItem {
  id: string;
  slug: string;

  // Classification
  type: KnowledgeType;
  category: string;

  // Homepage / listing content
  title: string;
  shortTitle?: string;
  teaser: string;
  excerpt: string;

  // Article metadata
  author?: string | string[];
  publication?: string;
  publicationYear?: number;
  readingTime?: string;

  // Visuals
  image?: string;

  // Taxonomy
  expertise: string[];
  industries: string[];
  tags: string[];

  // Optional highlighting
  featured?: boolean;

  // Full article content
  article: {
    eyebrow?: string;
    title: string;
    subtitle?: string;

    abstract?: string;

    introduction?: KnowledgeSection;

    sections: KnowledgeSection[];

    keyTakeaways?: string[];

    conclusion?: string;
  };
}

/* -------------------------------------------------------------------------- */
/* Knowledge Center Content                                                   */
/* -------------------------------------------------------------------------- */

export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "iggesund-operational-excellence",
    slug: "striving-for-operational-excellence-iggesund",

    type: "Technical Article",
    category: "Dynamic Simulation & Performance Testing",

    title:
      "Striving for Operational Excellence: A Holistic Approach through Dynamic Study & Performance Test",

    shortTitle:
      "Operational Excellence through Dynamic Study & Performance Test",

    teaser:
      "How dynamic simulation, control-system design and performance testing helped prepare Iggesund Paperboard for complex steam and power transients.",

    excerpt:
      "A case study from Iggesund Paperboard, Sweden, demonstrating how dynamic simulation and comprehensive testing were used to design and tune steam-network control before commissioning.",

    author: "Deepesh Yadav & Ajit Singh",

    publication:
      "IPPTA: Quarterly Journal of Indian Pulp and Paper Technical Association",

    publicationYear: 2024,

    readingTime: "7 min read",

    image:
      "/images/knowledge/iggesund-operational-excellence.jpg",

    expertise: [
      "Dynamic Simulation",
      "Thermodynamics",
      "Control & Protection",
      "Power Systems",
    ],

    industries: [
      "Pulp & Paper",
      "Power & Utilities",
      "Process Industries",
    ],

    tags: [
      "Dynamic Simulation",
      "Steam Network",
      "Island Operation",
      "Control Systems",
      "Performance Testing",
    ],

    featured: true,

    article: {
      eyebrow: "TECHNICAL ARTICLE",

      title:
        "Striving for Operational Excellence: A Holistic Approach through Dynamic Study & Performance Test",

      subtitle:
        "A case study of an integrated steam and power system at Iggesund Paperboard, Sweden.",

      abstract:
        "This paper details a case study of the project at Iggesund Paperboard, Sweden, where an innovative holistic methodology was used to carry out dynamic simulation studies and comprehensive testing of an Integrated Steam and Power System network. The primary objective was to identify and address system bottlenecks, leading to improved productivity and increased reliability with a short return on investment.",

      introduction: {
        heading: "Introduction",

        paragraphs: [
          "Iggesund Paperboard, a top-quality board producer situated on the east coast of Sweden, places strong importance on steam network pressures because of their impact on product quality.",

          "Solvina was asked to design and tune the steam-network control before the installation of a new boiler and turbine.",

          "The plant modification included a new recovery boiler, a new 110 bar steam header, a new back-pressure turbine with several extractions replacing two existing turbines, and steam reduction valves.",
        ],

        bullets: [
          "New recovery boiler",
          "New steam header HT1 at 110 bar",
          "New back-pressure turbine with several extractions",
          "Steam reduction valves",
        ],
      },

      sections: [
        {
          heading: "Control Design Scope",

          paragraphs: [
            "Solvina was asked to design and tune the steam-network control for demanding operating conditions and transients.",
          ],

          bullets: [
            "Large steam-load transients",
            "Turbine trip",
            "Start and stop of large electric motors during island operation",
          ],
        },

        {
          heading: "Purpose",

          paragraphs: [
            "The purpose was to assure efficient and safe commissioning, a well-functioning plant and trained operators for operational transients associated with the installation of the new recovery boiler and turbine.",
          ],
        },

        {
          heading: "Scope of Work",

          bullets: [
            "Design of steam-network control for three boilers, a turbine with six valves and 35 bypass valves.",
            "Simulation of transients using models describing thermodynamics and the electrical power system.",
            "Training of operators using a training simulator for different emergency situations.",
            "Testing of island-operation capability.",
          ],
        },

        {
          heading: "Method",

          paragraphs: [
            "The boilers, turbine with several extractions, steam accumulator, six steam headers with different pressure levels, pressure-reducing valves and the electrical power system were modelled.",

            "A control strategy for maintaining pressure in the different steam networks was developed and tested through multiple simulation scenarios in both grid-connected and island operation.",

            "Switching from grid operation to island operation was also included among the scenarios, and the control system was tuned before commissioning.",
          ],
        },

        {
          heading: "Results",

          paragraphs: [
            "The design and tuning of the control strategy required extensive simulations to meet the steam consumers' requirements for steam conditions under different scenarios.",

            "Commissioning tests showed that the resulting control design and tuning was functioning effectively, contributing to a smooth and efficient startup.",
          ],
        },

        {
          heading: "Board Machine Stop & Restart in Island Operation",

          paragraphs: [
            "One of the simulated scenarios involved a board-machine stop followed by a restart while operating in island mode.",

            "At approximately 800 seconds, the board machine stopped, producing a large instantaneous steam-load reduction. The bark boiler responded gradually while the steam accumulator was charged.",

            "The steam flow through the turbine was redistributed during the transient. The control system handled both the changed steam-load condition and the electrical disturbances.",

            "At approximately 2000 seconds, the board machine restarted and steam loads returned towards normal. The bark boiler increased its output while the steam accumulator was discharged.",
          ],
        },

        {
          heading: "Conclusion",

          paragraphs: [
            "Through dynamic modelling and simulation, the control system could be effectively designed before commissioning, allowing startup to be fast and efficient.",

            "The resulting control strategy proved robust during different transients. The turbine trip, identified as the biggest concern, was handled effectively while steam pressures remained stable and within acceptable limits.",
          ],
        },
      ],

      keyTakeaways: [
        "Dynamic simulation enabled control-system design before commissioning.",
        "Grid-connected and island-operation scenarios were evaluated.",
        "Operator training was integrated into the project scope.",
        "Performance testing was used to validate the control strategy.",
        "The resulting control system handled major transients effectively.",
      ],

      conclusion:
        "Through dynamic modelling and simulation, the control system could be effectively designed before commissioning, allowing startup to be fast and efficient. The resulting control strategy proved robust during different transients. The turbine trip, identified as the biggest concern, was handled effectively while steam pressures remained stable and within acceptable limits.",
    },
  },
  {
    id: "integrated-steam-power-studies",
    slug: "integrated-steam-power-studies",

    type: "Technical Article",
    category: "Dynamic Simulation & Performance Testing",

    title:
      "Striving for Operational Excellence: A Holistic Approach through Integrated Steam and Power Studies",

    shortTitle:
      "Integrated Steam & Power Studies",

    teaser:
      "How dynamic simulation and testing can strengthen control strategies, emergency preparedness and operational flexibility in integrated steam and power systems.",

    excerpt:
      "A technical overview of Solvina's holistic approach to integrated steam and power systems, combining dynamic modelling, simulation and testing to understand plant behaviour under transient conditions.",

    author: "Solvina India",

    publicationYear: 2024,

    readingTime: "6 min read",

    image:
      "/images/knowledge/integrated-steam-power-studies.jpg",

    expertise: [
      "Dynamic Simulation",
      "Thermodynamics",
      "Power Systems",
      "Control & Protection",
    ],

    industries: [
      "Power & Utilities",
      "Process Industries",
      "Pulp & Paper",
    ],

    tags: [
      "Integrated Steam & Power",
      "Dynamic Simulation",
      "Control Systems",
      "Grid Operation",
      "Island Operation",
      "Performance Testing",
    ],

    featured: false,

    article: {
      eyebrow: "TECHNICAL ARTICLE",

      title:
        "Striving for Operational Excellence: A Holistic Approach through Integrated Steam and Power Studies",

      subtitle:
        "A holistic methodology for understanding and improving integrated steam and power system behaviour.",

      abstract:
        "This article introduces Solvina's holistic methodology involving dynamic simulation studies and comprehensive testing of an Integrated Steam and Power System. The objective is to identify and address system bottlenecks, leading to improved productivity and increased reliability within utility plants.",

      introduction: {
        heading: "Introduction",

        paragraphs: [
          "Steam and power generation systems frequently experience disruptions caused by unforeseen equipment failures such as pump, turbine, fan and boiler failures.",

          "Even during routine operation, process parameters can vary because of changes in production demand, seasonal fluctuations, day-night temperature variations, system resistance, inertia and controller responses.",

          "Planned transitions between operating modes can also produce transient changes in process parameters. Startup and shutdown procedures introduce additional challenges when maintaining plant stability.",

          "Understanding equipment and control-system behaviour in advance allows potential issues to be identified during both design and operation. Dynamic simulation provides a means of predicting plant performance and developing control strategies for transient conditions.",
        ],
      },

      sections: [
        {
          heading: "Grid-Connected Mode",

          paragraphs: [
            "In grid-connected operation, fuel availability is a primary determinant of steam and power production.",

            "When fuel is in short supply, power production decreases and the plant may need to increase power import.",
          ],
        },

        {
          heading: "Islanded Mode",

          paragraphs: [
            "In islanded operation, power demand takes precedence and stable power output must be maintained.",

            "Operator intervention, such as reducing island power consumption, may become necessary to ensure adequate fuel supply.",

            "During the transition to islanded operation, automatic adjustment of control settings for selected process parameters allows operators to focus on maintaining the fuel balance.",
          ],
        },

        {
          heading: "Dynamic & Static Modelling",

          paragraphs: [
            "Solvina develops comprehensive dynamic and static models for integrated steam and power systems.",

            "The models can include complex steam networks, steam headers, boilers, turbines and the complete electrical system.",

            "Models are validated using testing equipment to align their behaviour with the actual plant. While the models follow international standards and established theories, they are tailored and calibrated for specific objectives.",
          ],
        },

        {
          heading: "Governor Testing under Islanded Conditions",

          paragraphs: [
            "Solvina has developed a testing method and equipment for evaluating and fine-tuning governors under islanded conditions.",

            "The approach evaluates turbine frequency-control and load-handling capabilities together with the response of boilers, live steam pressure, governor valves and related parameters.",

            "The tests can be conducted while the unit is connected to the grid without disrupting normal production, reducing the risk of system interruptions.",
          ],
        },

        {
          heading: "Benefits",

          bullets: [
            "Enhanced control strategies for contingency and upset scenarios.",
            "Improved emergency preparedness through steam and power load-shedding schemes.",
            "Optimized plant performance through dynamic simulation and testing.",
            "Early identification and mitigation of potential operational risks.",
            "Greater operational flexibility between grid-connected and islanded modes.",
          ],
        },

        {
          heading: "Operational Flexibility",

          paragraphs: [
            "The ability to switch between grid-connected and islanded operation, together with suitable load-shedding schemes, enhances the plant's ability to maintain stable operation under changing conditions.",
          ],
        },

        {
          heading: "Conclusion",

          paragraphs: [
            "A holistic approach to steam and power generation strengthens the design and control of integrated systems while improving their ability to respond to unexpected events and emergencies.",

            "Combining dynamic simulation studies with testing provides a basis for proactive control-system adjustments, improved operational preparedness and increased plant reliability.",
          ],
        },
      ],

      keyTakeaways: [
        "Steam and electrical systems should be considered together when studying transient behaviour.",
        "Dynamic simulation helps predict plant performance before critical operating conditions occur.",
        "Models can be validated against actual plant behaviour through dedicated testing.",
        "Governor testing can evaluate frequency control and load-handling capability under islanded conditions.",
        "Simulation and testing support improved control, emergency preparedness and operational flexibility.",
      ],

      conclusion:
        "A holistic approach to steam and power generation strengthens the design and control of integrated systems while improving their ability to respond to unexpected events and emergencies. Combining dynamic simulation studies with testing provides a basis for proactive control-system adjustments, improved operational preparedness and increased plant reliability.",
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Homepage / Minimized Version                                               */
/* -------------------------------------------------------------------------- */

export const knowledgeOverview = knowledgeItems.map(
  ({
    id,
    slug,
    type,
    category,
    title,
    shortTitle,
    teaser,
    excerpt,
    author,
    publicationYear,
    readingTime,
    image,
    expertise,
    industries,
    tags,
    featured,
  }) => ({
    id,
    slug,
    type,
    category,
    title,
    shortTitle,
    teaser,
    excerpt,
    author,
    publicationYear,
    readingTime,
    image,
    expertise,
    industries,
    tags,
    featured,
  }),
);

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function getKnowledgeBySlug(
  slug: string,
): KnowledgeItem | undefined {
  return knowledgeItems.find((item) => item.slug === slug);
}

export function getFeaturedKnowledge(): KnowledgeItem[] {
  return knowledgeItems.filter((item) => item.featured);
}

export function getKnowledgeByType(
  type: KnowledgeType,
): KnowledgeItem[] {
  return knowledgeItems.filter((item) => item.type === type);
}

export function getKnowledgeByExpertise(
  expertise: string,
): KnowledgeItem[] {
  return knowledgeItems.filter((item) =>
    item.expertise.includes(expertise),
  );
}

export function getKnowledgeByIndustry(
  industry: string,
): KnowledgeItem[] {
  return knowledgeItems.filter((item) =>
    item.industries.includes(industry),
  );
}
