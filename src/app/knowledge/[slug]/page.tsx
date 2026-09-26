import { notFound } from "next/navigation";
import { knowledgeItems } from "@/data/knowledgeSection";
import KnowledgeArticlePage from "@/components/sections/KnowledgeArticlePage";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return knowledgeItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function KnowledgeDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const item = knowledgeItems.find((item) => item.slug === slug);

  if (!item) {
    notFound();
  }

  return <KnowledgeArticlePage item={item} />;
}
