import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { industryPages } from "@/data/industries";
import IndustryDetailLayout from "@/components/sections/industries/IndustryDetailLayout";
import { createPageMetadata } from "@/lib/seo";

/**
 * Only slugs returned by generateStaticParams are valid for this route.
 *
 * With dynamicParams = false:
 *   /industries/power-generation-utilities        -> valid
 *   /industries/steel-metals-mining               -> valid
 *   /industries/xyz                               -> 404
 *
 * We also keep the explicit notFound() check below so the route remains
 * protected even if the rendering strategy changes later.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((industry) => ({
    slug: industry.slug,
  }));
}

type IndustryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: IndustryRouteProps): Promise<Metadata> {
  const { slug } = await params;

  const industry = industryPages.find(
    (item) => item.slug === slug
  );

  if (!industry) {
    return createPageMetadata({
      title: "Industry Not Found",
      description: "The requested industry page could not be found.",
      path: `/industries/${slug}/`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: industry.seo.url,
    keywords: industry.seo.keyword,
  });
}

export default async function IndustryPage({
  params,
}: IndustryRouteProps) {
  const { slug } = await params;

  const industry = industryPages.find(
    (item) => item.slug === slug
  );

  /**
   * This is the important protection.
   *
   * If someone manually enters:
   * /industries/xyz
   *
   * and "xyz" does not exist in industries.ts,
   * Next.js renders the project's not-found.tsx / 404 page.
   */
  if (!industry) {
    notFound();
  }

  return <IndustryDetailLayout industry={industry} />;
}
