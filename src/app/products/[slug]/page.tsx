import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductById, products } from "@/data/product_details";
import { createPageMetadata } from "@/lib/seo";
import ProductPageLayout from "./ProductPageLayout";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    return createPageMetadata({
      title: "Product Not Found",
      description: "The requested product page could not be found.",
      path: `/products/${slug}/`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${product.name} | Solvina India Engineering Tools`,
    description: product.hero.supportingCopy,
    path: `/products/${product.id}/`,
    keywords: [
      product.shortName,
      product.name,
      "Solvina engineering software",
      "industrial simulation tools",
    ],
  });
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = getProductById(slug);

  if (!product) {
    notFound();
  }

  return <ProductPageLayout product={product} />;
}
