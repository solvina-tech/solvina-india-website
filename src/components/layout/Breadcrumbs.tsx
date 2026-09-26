"use client";

import Link from "next/link";
import { ChevronRight, House } from "lucide-react";
import { usePathname } from "next/navigation";
import { knowledgeItems } from "@/data/knowledgeSection";

function formatSegment(segment: string) {
  const formatted = decodeURIComponent(segment)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Special case for knowledge
  if (formatted === "Knowledge") {
    return "Knowledge Centre";
  }

  return formatted;
}

function getSegmentHref(segments: string[], index: number) {
  const href = `/${segments.slice(0, index + 1).join("/")}`;

  if (href === "/projects/case-studies") {
    return "/projects#case-studies";
  }

  if (href === "/knowledge") {
    return "/#knowledge-center";
  }

  if (href === "/products") {
    return "/#products";
  }

  return href;
}

function getArticleTitle(slug: string): string | undefined {
  const article = knowledgeItems.find((item) => item.slug === slug);
  return article?.title;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="sticky top-[76px] mt-[76px] z-10 border-b border-black/10 bg-white text-sm text-black/55"
    >
      <ol className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-hidden px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
        <li className="shrink-0">
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex rounded-sm p-1 text-black/55 transition-colors hover:text-[#B41448] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B41448]"
          >
            <House size={16} aria-hidden="true" />
          </Link>
        </li>

        {segments.map((segment, index) => {
          const isCurrentPage = index === segments.length - 1;
          const href = getSegmentHref(segments, index);

          // Check if this is a knowledge article slug
          const isKnowledgeArticle = segments[0] === "knowledge" && segments.length > 1 && index === 1;
          const articleTitle = isKnowledgeArticle ? getArticleTitle(segment) : undefined;

          return (
            <li key={href} className="flex min-w-0 items-center gap-2">
              <ChevronRight size={15} className="shrink-0 text-black/25" aria-hidden="true" />
              {isCurrentPage ? (
                <span aria-current="page" className="truncate font-medium text-black/80">
                  {articleTitle || formatSegment(segment)}
                </span>
              ) : (
                <Link href={href} className="shrink-0 transition-colors hover:text-[#B41448] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B41448]">
                  {formatSegment(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
