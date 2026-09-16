import type { Metadata } from "next";

import { expertiseListingSeo } from "@/data/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(expertiseListingSeo);

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
