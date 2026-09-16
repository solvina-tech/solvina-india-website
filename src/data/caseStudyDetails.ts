export type CaseStudySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseStudyDetail = {
  id: string;
  number: string;
  title: string;
  category: string;
  client: string;
  location?: string;
  image: string;
  heroDescription: string;
  sections: CaseStudySection[];
};

export const caseStudyDetails: CaseStudyDetail[] = [
  {
    id: "reliance-integrated-steam-power",
    number: "01",
    title: "Integrated Steam & Power Dynamic Studies",
    category: "Integrated Steam & Power",
    client: "Reliance Industries Limited",
    location: "Hazira and Dahej, Gujarat, India",
    image: "/images/case-studies/reliance-integrated-steam-power.jpg",
    heroDescription:
      "Reliance Industries Limited invested in new power generation facilities at the petrochemical production units in Hazira and Dahej, Gujarat. These power plants replaced the existing steam and gas turbines at the sites and were designed to produce both steam and electricity. Reliance Industries Limited engaged Solvina to conduct a comprehensive study of the steam and power system to ensure it could handle specific operating conditions effectively.",
    sections: [
      {
        heading: "Scope of Work",
        paragraphs: [
          "The study considered upset conditions in both the steam and power systems and highlighted how these conditions impacted the entire plant.",
        ],
        bullets: [
          "Integrated Steam and Power Studies both for Islanded and Grid connected operation",
          "Relay coordination and load flow studies of entire network",
          "Transient stability study and Validation of PSS tuning",
          "Power plant tests for stable control in normal and islanded operation",
          "Safeguard the island operation capability",
        ],
      },
      {
        heading: "Method and Results",
        paragraphs: [
          "Detailed dynamic and static models for both plants were developed, encompassing the water/steam systems, steam headers, turbines, boilers, and the complete electrical system. These models were based on international standards and well-established theories but were custom-tailored and fine-tuned by Solvina to meet the specific requirements of the project.",
          "All scenarios and transients were thoroughly simulated and analysed to deliver a comprehensive control solution for both sites and to recommend new settings for the existing control structures to enhance efficiency, reliability, and availability.",
          "State-of-the-art tools were utilized for protection coordination settings to ensure the proper functioning of all protection relays within the system. Transient stability studies and PSS tuning were conducted to prevent instability of the generating units during grid faults.",
          "Onsite tests of power plant stability and tuning of power plant turbine controllers were conducted to verify and validate the simulation results, using Solvina's uniquely developed in-house method for testing the dynamic stability of generators in island operation.",
        ],
      },
    ],
  },
  {
    id: "borealis-dynamic-studies",
    number: "02",
    title: "Steam Network Dynamic Studies & Control Strategy",
    category: "Dynamic Studies & Control",
    client: "Borealis",
    location: "Stenungsund, Sweden",
    image: "/images/case-studies/borealis-dynamic-studies.jpg",
    heroDescription:
      "At Borealis' cracker site in Stenungsund on the west coast of Sweden, steam is used at three different pressure levels. At the HP level, the steam net was partly connected to Borealis' polyethylene site. Prior to construction of a new polyethylene plant (LD5), the further connection of the two sites meant that a significant amount of LP steam would be fed from LD5 into the cracker steam net. Solvina was asked to investigate how the cracker steam net would be affected by transients in LD5.",
    sections: [
      {
        heading: "Purpose",
        paragraphs: [
          "The main purposes with the study was to examine how the cracker steam net could handle a trip of the new plant with the falling-off of LP steam and an extra consumption of HP steam, and how the control system could be modified to effectively control the pressure in the LP steam net with the new conditions.",
        ],
      },
      {
        heading: "Scope of Work",
        paragraphs: [
          "Solvina's scope of work was to model the existing steam net and control system at the cracker site and investigate the resulting transients and control requirements associated with LD5.",
        ],
        bullets: [
          "Development of a dynamic model",
          "Simulation of LD5 trip under various operational conditions",
          "Test and evaluation of new control strategies",
        ],
      },
      {
        heading: "Method",
        paragraphs: [
          "A dynamic simulation model of the cracker steam net was developed and verified against results from tests on the cracker steam net. The model included boilers, furnaces, turbines, letdown valves, a steam dump condenser and steam headers.",
          "Boiler and turbine model dynamic responses were adapted to match component plant data. The 3 kilometres long low-pressure steam header from the new plant to the Cracker and interface to the new plant was added to the model. The model was then used to analyse transients emanating from a trip of LD5.",
          "From dynamic simulations using the model, a new control strategy was developed.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Simulations showed that the existing control strategy was unable to handle a trip in LD5. In the worst case the pressure dip in the HP steam header would impact steam flow to the new plant and would risk turbines to trip.",
          "Different control strategy changes were included in the model and evaluated. The best alternative was to include a feedforward signal to increase the load on the boilers faster when the new plant is tripping and to have automatic set point value changes for the extraction pressure for one of the turbines.",
          "A new control strategy for steam dump condenser and air blow valves on the low-pressure steam net was also developed. Functional check of all control loops was performed in a safe simulation environment, prior to implementation and start-up of LD5.",
        ],
      },
      {
        heading: "Simulation of LD5",
        bullets: [
          "The simulations revealed that the dip in the HP steam header with the original control strategy is not within the acceptable limit.",
          "With the new control strategy the pressure is kept well within the acceptable limit.",
        ],
      },
      {
        heading: "Conclusions",
        paragraphs: [
          "Through dynamic simulations, future problems, emanating from a trip of LD5, could be analysed. Problems identified during the analyses were effectively prevented and critical operating conditions avoided. The new control strategy has also proven to work very well in practice during trips and re-starts of LD5.",
        ],
      },
      {
        heading: "Extended Dynamic Study",
        paragraphs: [
          "After the start-up of LD5, there have been a few times when a trip of LD5 resulted in the plant having trouble keeping the pressures at normal values due to a steam deficit, eventually leading to pressures decreasing below accepted values for other sub plants. Solvina was asked to make a dynamic study and develop proposals on how the steam deficit could be avoided.",
          "The steam net model was extended with a model of the steam net at the PE plant.",
        ],
      },
      {
        heading: "Extended Study Purpose",
        bullets: [
          "To make a survey of the existing steam system and to develop a basis to evaluate what measure that is most advantageous to improve the operation conditions.",
          "Dynamically evaluate the effect of possible measures such as process changes and/or change of the control system.",
        ],
      },
      {
        heading: "Extended Study Method",
        paragraphs: [
          "Solvina created and verified a dynamic model of the quite complex design of the steam net at the polyethylene plant consisting of one HP net, two MP nets, two LP nets, reducing valves, boilers, boundaries to various sub plants (with both consumption and production of steam) and boundary to district heating.",
          "The model was connected to Solvina's existing model of the cracker and then used to simulate different scenarios. Different possible measures to improve the operational situation were evaluated dynamically.",
        ],
      },
      {
        heading: "Extended Study Results",
        paragraphs: [
          "Simulations of the current plant displayed the same phenomena which have been observed in reality. A steam deficit occurs after approximately 45 min. The delay is caused by a buffering effect in the steam nets.",
          "The model was used to come up with a strategy that solves the problems the plant is having with steam deficits, and by doing so keeping the pressures at accepted levels.",
        ],
      },
    ],
  },
  {
    id: "iggesund-dynamic-control-design",
    number: "03",
    title: "Dynamic Study & Steam Net Control Design",
    category: "Control Design & Tuning",
    client: "Iggesund Paperboard",
    location: "Sweden",
    image: "/images/case-studies/iggesund-dynamic-control-design.jpg",
    heroDescription:
      "Iggesund Paperboard, the Top Quality Board producer, situated on the east coast of Sweden, highly recognizes their steam net pressures: 'Steam Net pressures are essential to product quality'. Solvina was asked to design and tune the steam net control before the complex installation of a new boiler and a new turbine.",
    sections: [
      {
        heading: "Purpose",
        paragraphs: [
          "The purpose was to assure an efficient and safe commissioning as well as a well-functioning plant and trained operators for all operational transients at the installation of new recovery boiler and turbine.",
        ],
      },
      {
        heading: "Scope of Work",
        bullets: [
          "Design of Steam Net Control (3 boilers, turbine with 6 valves, 35 bypass valves) for steam pressure and steam temperatures during all transients",
          "Simulation of all transients with model describing thermodynamics and electrical power system",
          "Training of operators with training simulator",
          "Test of island operations capability",
        ],
      },
      {
        heading: "Method",
        paragraphs: [
          "Boilers, the turbine with several extractions, a steam accumulator, six steam headers with different pressure levels, several pressure reducing valves as well as the electrical power system keeping the pressures in the six different steam nets was developed and tested in various simulation scenarios in grid operation as well as island operation.",
          "Switching from grid operation to island operation was included among the scenarios. The control system was also tuned before commissioning.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "The task to design the control strategy and tune the control system of the new complex steam net required extensive simulations to meet the steam consumers high requirements on steam conditions for the various scenarios.",
          "The commissioning tests revealed that the resulting control design and tuning was well-functioning and the startup was smooth and efficient.",
        ],
      },
      {
        heading: "Simulation of Board Machine Stop and Restart in Island Operation",
        bullets: [
          "At about 800 seconds in the diagrams, a board machine stops and gives a large instant steam load drop.",
          "The bark boiler slowly reduces and the steam accumulator is charged, while the recovery boiler is affected only by the electrical motor starts.",
          "The steam flow through the turbine is redistributed in a complex way during transients. The control system handles both the adaptions to the new steam load condition and the electrical interferences.",
          "The control strategy is designed to handle this trip with priority between different steam nets and with the aim to minimize losses in air blow.",
          "At about 2000 seconds the board machine is restarted and the steam loads go back to normal. The bark boiler slowly increases, and the steam accumulator is discharged.",
        ],
      },
      {
        heading: "Conclusions",
        paragraphs: [
          "Through dynamic modelling and simulations the control system could be effectively designed before commissioning so that the startup could be fast and efficient. The resulting control strategy is robust and proven to work very well in practice during different transients. Turbine trip, which was the biggest fear, is very well handled by the control system and the pressures are stable and within acceptable limits.",
        ],
      },
    ],
  },
  {
    id: "tata-steel-kalinganagar-dynamic-study",
    number: "04",
    title: "Power, Steam & Gas System Dynamic Study",
    category: "Power System Reliability",
    client: "Tata Steel Kalinganagar",
    location: "Kalinganagar Industrial Complex, Odisha, India",
    image: "/images/case-studies/tata-steel-kalinganagar.jpg",
    heroDescription:
      "Tata Steel Kalinganagar (TSK) has set an integrated steel plant with an ultimate capacity of 6MTPA, with captive generation at Kalinga Nagar Industrial Complex in Odisha. The project is carried out in two phases, and phase 1 was completed around 2015. The estimated load demand of the steel plant after phase 1 is about 244 MW.",
    sections: [
      {
        heading: "Plant Configuration",
        paragraphs: [
          "The power sources to the steel plant in Phase-1 are 2X67.5 MW gas based captive power plant (CPP1), 1X22 MW Top gas recovery turbine (TRT) and 1X12MW coke dry quenching (CDQ), 5X8MW DG sets and grid.",
          "TSK Power system is tightly coupled & highly interdependent with respect to Gas, Steam & Power system. A single weak link can trigger a complete system breakdown.",
        ],
      },
      {
        heading: "Purpose",
        paragraphs: [
          "Frequent tripping's leading to complete blackouts, due to cascade effect, mostly during transition to island operation, resulting in major downtime. Solvina was asked to illustrate various dynamic issues & design gaps in the power system that may cause plant outages, and to verify suggested remedies to improve the overall plant reliability and stability.",
        ],
      },
      {
        heading: "Scope of Work",
        paragraphs: [
          "The study considered the following aspects:",
        ],
        bullets: [
          "Power System Studies: Disturbance and Island operations study; Transient stability studies; Short-circuit studies; Conclusion and Recommendations",
          "Steam and Gas network: Basic Control strategy; Design Gaps and Recommendations; Suggestions for efficient operations of CDQ-turbine",
        ],
      },
      {
        heading: "Method and Results",
        paragraphs: [
          "The holistic approach was applied with a focus on electrical study and power generation response.",
          "The recommendations for power system reliability are as follows:",
        ],
        bullets: [
          "Create redundancy and margin in the integrated plant.",
          "Improve the boiler and steam net control to improve the stability of CPP.",
          "Implement new criteria for active grid islanding when grid properties are outside boundaries.",
          "Focus on running the complete large island only.",
          "Run both CPP turbines in frequency control.",
          "Start and synchronize DGs in island operation.",
          "Allow restart of electric load in island mode that has tripped.",
          "Consider not to initiate shutdown of BF when islanding occurs.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Recommendations were found very thoughtful & deep diving. Improved the performance of existing system w.r.t both reliability & availability.",
        ],
      },
    ],
  },
  {
    id: "power-plant-tests-350-generators",
    number: "05",
    title: "Power Plant Tests at Over 350 Generators",
    category: "Power Plant Testing & Tuning",
    client: "Solvina Global Power Plant Testing Experience",
    image: "/images/case-studies/power-plant-tests.jpg",
    heroDescription:
      "Solvina performs tests and tuning of power plants globally, using unique and vast experiences from all kinds of power plants. Solvina is the first company in the world to provide safe tests and provide advanced tuning of island operation at power plants under totally safe conditions.",
    sections: [
      {
        heading: "Scope of Work",
        paragraphs: [
          "Power plant tests performed include:",
        ],
        bullets: [
          "Gas turbines",
          "Steam turbines",
          "Hydro turbines",
          "Reciprocal engines",
          "CCPP",
          "CPP",
          "IPP",
        ],
      },
      {
        heading: "Tests Performed",
        bullets: [
          "Voltage control tests",
          "Frequency control tests",
          "Island operation stability tests",
          "PSS verification and tuning tests",
          "Load rejection tests",
          "Active power control tests",
          "Reactive power control tests",
        ],
      },
      {
        heading: "Method and Results",
        paragraphs: [
          "The method and equipment developed by Solvina is called SolvSim Power Station (SSPS) and is a Hardware-in-the-Loop method that combines a real-time simulator, data acquisition system and signal generator.",
          "Principally the normal frequency feedback of the governor, i.e. the real frequency, is replaced by a frequency generated by the test equipment.",
          "During tests control systems, governors, turbines and valves have been adjusted so to meet requirements and increase efficiency, stability and availability.",
          "Some examples on measures for enhanced performance have been identifying and tuning of control parameters, rectifying malfunctioning valves, transmitters and protections, adjusting non-linearities in governing systems and valves, and implementing changes to control strategies.",
        ],
      },
      {
        heading: "Reference Customers",
        paragraphs: [
          "Customers include, but is not limited to: Grid India (POSOCO), Reliance, Vedanta, Balco, IFFCO, Alstom, ABB, Vattenfall, E.On, Swedish TSO, Norwegian TSO, Wärtsilä, CNIM, SSAB, SmurfitKappa, NTPC, NHPC, NEEPCO, NLC, DVC, Adani, Tata Power, etc.",
        ],
      },
      {
        heading: "Turbine and Generator Brands",
        paragraphs: [
          "Turbine and generator brands include, but is not limited to: Hitachi, GE, Alstom, Siemens, ABB, Rolls Royce, China Electric, Wärtsilä, MAN, KMW.",
        ],
      },
    ],
  },
];