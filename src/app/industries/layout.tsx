import type { Metadata } from "next";

import { industriesListingSeo } from "@/data/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(industriesListingSeo);

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
