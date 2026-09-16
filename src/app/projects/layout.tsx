import type { Metadata } from "next";

import { projectsSeo } from "@/data/seo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(projectsSeo);

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
