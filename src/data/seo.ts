import { expertiseOverview } from "@/data/expertise";
import { industriesOverview } from "@/data/industries";
import { softwareToolsOverview } from "@/data/products";

export const homepageSeo = {
  path: "/",
  title:
    "Solvina India | Engineering Intelligence for Complex Industrial Systems",
  description:
    "Solvina India combines power-system, thermodynamic, control and protection engineering to understand complex industrial systems and deliver practical engineering outcomes.",
  keywords:
    "industrial engineering consultancy India, power plant engineering, steam and power studies, grid code compliance, dynamic simulation",
} as const;

export const aboutSeo = {
  path: "/about/",
  title: "About Solvina India | Engineering Intelligence for Complex Systems",
  description:
    "Learn how Solvina India connects power, process, controls, protection and operations through integrated systems intelligence and model-to-plant engineering.",
  keywords:
    "about Solvina India, engineering consultancy India, integrated systems intelligence, industrial power engineering",
} as const;

export const projectsSeo = {
  path: "/projects/",
  title: "Projects & Case Studies | Solvina India Engineering References",
  description:
    "Explore Solvina India's engineering project references and case studies across power generation, steel, refining, chemicals and industrial utilities in India and internationally.",
  keywords:
    "Solvina projects, engineering case studies India, power system projects, industrial engineering references",
} as const;

export const expertiseListingSeo = {
  path: expertiseOverview.url,
  title: expertiseOverview.seo.title,
  description: expertiseOverview.seo.description,
  keywords: expertiseOverview.seo.keyword,
} as const;

export const industriesListingSeo = {
  path: industriesOverview.url,
  title: industriesOverview.seo.title,
  description: industriesOverview.seo.description,
  keywords: industriesOverview.seo.keyword,
} as const;

export const softwareToolsSeo = {
  path: softwareToolsOverview.url,
  title: softwareToolsOverview.seo.title,
  description: softwareToolsOverview.seo.description,
  keywords: softwareToolsOverview.seo.keyword,
} as const;
