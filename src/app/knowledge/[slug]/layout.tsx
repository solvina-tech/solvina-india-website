import type { Metadata } from "next";
import { knowledgeItems } from "@/data/knowledgeSection";
import { createPageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const item = knowledgeItems.find((item) => item.slug === slug);

  if (!item) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested knowledge article could not be found.",
      path: `/knowledge/${slug}/`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/knowledge/${slug}/`,
  });
}

export default function KnowledgeArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
