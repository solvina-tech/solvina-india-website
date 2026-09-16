import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { expertisePages } from "@/data/expertise";
import ExpertisePage from "@/components/sections/ExpertisePage";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return expertisePages.map((expertise) => ({
    slug: expertise.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const expertise = expertisePages.find(
    (item) => item.slug === slug
  );

  if (!expertise) {
    return createPageMetadata({
      title: "Expertise Not Found",
      description: "The requested expertise page could not be found.",
      path: `/expertise/${slug}/`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: expertise.seo.title,
    description: expertise.seo.description,
    path: expertise.seo.url,
    keywords: expertise.seo.keyword,
  });
}

export default async function ExpertiseDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const expertise = expertisePages.find(
    (item) => item.slug === slug
  );

  if (!expertise) {
    notFound();
  }

  return <ExpertisePage expertise={expertise} />;
}
