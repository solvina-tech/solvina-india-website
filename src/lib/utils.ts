import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRouteHref = (type: string, pathname: string) =>
    `/form?type=${encodeURIComponent(
      type,
    )}&from=${encodeURIComponent(pathname)}`;