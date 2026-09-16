"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnquiryCTAProps {
  label?: string;
  type?: string;
  className?: string;
}

export default function EnquiryCTA({
  label = "Send an Enquiry",
  type = "General Enquiry",
  className = "",
}: EnquiryCTAProps) {
  const pathname = usePathname();

  const href = `/form?type=${encodeURIComponent(
    type
  )}&from=${encodeURIComponent(pathname)}`;

  return (
    <Link href={href}>
      <Button
        className={`h-11 rounded-md bg-[#B41448] px-5 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#9F103F] hover:shadow-md ${className}`}
      >
        {label}

        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
}
