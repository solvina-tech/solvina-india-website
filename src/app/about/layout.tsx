import type { Metadata } from "next";

import { aboutSeo } from "@/data/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(aboutSeo);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
