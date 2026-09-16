import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Customer, customers } from "@/data/homepage";
import {
  projects,
  getCustomerLogo,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

import CustomerProjectsContent from "./CustomerProjectsContent";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


function getCustomerBySlug(slug: string): Customer | null {
  return (
    customers.find(
      (customer) =>
        customer.id.toLowerCase() === slug.toLowerCase(),
    ) ?? null
  );
}

export function generateStaticParams() {
  return customers.map((customer) => ({
    slug: customer.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);

  if (!customer) {
    return createPageMetadata({
      title: "Customer Projects Not Found",
      description: "The requested customer project page could not be found.",
      path: `/customer/${slug}/`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${customer.name} Projects | Solvina India Engineering References`,
    description: `Explore Solvina India's engineering projects, studies and references delivered for ${customer.name}.`,
    path: `/customer/${customer.id}/`,
    keywords: [
      customer.name,
      "Solvina projects",
      "engineering references India",
      "industrial engineering consultancy",
    ],
    ogImage: customer.logo,
  });
}


export default async function CustomerProjectsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const customer = getCustomerBySlug(slug);

  /*
   * Invalid customer slug.
   */
  if (!customer) {
    notFound();
  }

  /*
   * Get every project belonging to this customer.
   *
   * getCustomerLogo() handles customer variations such as:
   *
   * NTPC
   * NTPC Nabinagar
   * NTPC Dadri
   * NTPC Lara
   * NHPC
   * NHPC Chamera
   * SJVNL
   * SJVN
   * Grid India
   * POSOCO
   * etc.
   */
  const customerProjects = projects
    .filter((project) => {
      const mappedCustomer = getCustomerLogo(project.customer);

      return mappedCustomer?.id === customer.id;
    })
    .sort((a, b) => {
      /*
       * Ongoing projects first.
       */
      if (a.ongoing !== b.ongoing) {
        return a.ongoing ? -1 : 1;
      }

      /*
       * Newest projects first.
       */
      return b.yearStart - a.yearStart;
    });

  return (
    <CustomerProjectsContent
      customer={customer}
      customerProjects={customerProjects}
    />
  );
}