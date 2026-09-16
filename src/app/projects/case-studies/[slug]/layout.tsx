import type { Metadata } from "next";

import { caseStudies } from "@/data/caseStudies";
import { caseStudyDetails } from "@/data/caseStudyDetails";
import { createPageMetadata } from "@/lib/seo";

// Static exports can only include routes whose dynamic segments are known at
// build time. Keep this in the server layout because the page is a Client
// Component.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyDetails.map((caseStudy) => ({
    slug: caseStudy.id,
  }));
}

type CaseStudyLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Pick<CaseStudyLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = caseStudyDetails.find((study) => study.id === slug);

  if (!caseStudy) {
    return createPageMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      path: `/projects/case-studies/${slug}/`,
      noIndex: true,
    });
  }

  const summary = caseStudies.find((study) => study.id === slug);

  return createPageMetadata({
    title: `${caseStudy.title} | ${caseStudy.client} Case Study`,
    description: summary?.description ?? caseStudy.heroDescription,
    path: `/projects/case-studies/${caseStudy.id}/`,
    keywords: [
      caseStudy.category,
      caseStudy.client,
      "Solvina case study",
      "engineering project reference",
    ],
    ogImage: caseStudy.image,
  });
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
