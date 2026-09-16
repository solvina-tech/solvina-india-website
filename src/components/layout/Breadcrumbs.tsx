"use client";

import Link from "next/link";
import { ChevronRight, House } from "lucide-react";
import { usePathname } from "next/navigation";

function formatSegment(segment: string) {
  return decodeURIComponent(segment)
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getSegmentHref(segments: string[], index: number) {
  const href = `/${segments.slice(0, index + 1).join("/")}`;

  if (href === "/projects/case-studies") {
    return "/projects#case-studies";
  }

  return href;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-[76px] border-b border-black/10 bg-white text-sm text-black/55"
    >
      <ol className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-hidden px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
        <li className="shrink-0">
          <Link
            href="/"
            aria-label="Home"
            className="inline-flex rounded-sm p-1 text-black/55 transition-colors hover:text-[#b0000a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b0000a]"
          >
            <House size={16} aria-hidden="true" />
          </Link>
        </li>

        {segments.map((segment, index) => {
          const isCurrentPage = index === segments.length - 1;
          const href = getSegmentHref(segments, index);

          return (
            <li key={href} className="flex min-w-0 items-center gap-2">
              <ChevronRight size={15} className="shrink-0 text-black/25" aria-hidden="true" />
              {isCurrentPage ? (
                <span aria-current="page" className="truncate font-medium text-black/80">
                  {formatSegment(segment)}
                </span>
              ) : (
                <Link href={href} className="shrink-0 transition-colors hover:text-[#b0000a]">
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
