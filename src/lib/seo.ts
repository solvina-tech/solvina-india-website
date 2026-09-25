import type { Metadata } from "next";

export const siteConfig = {
  name: "Solvina India",
  legalName: "Solvina India",

  description:
    "Specialist engineering consultancy for complex industrial power, steam, process and control systems in India.",

  locale: "en_IN",

  defaultOgImage: "/images/solvina-logo.png",

  twitterHandle: "@SolvinaIndia",

  googleVerification: "HRRwumv1lUmCYghwg-jfr5ayNdefPnGM47PKr-A2Rd8",
} as const;

export function getSiteUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "https://solvina.in";

  return url;
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${getSiteUrl()}${normalizedPath}`;
}

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string | string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = siteConfig.defaultOgImage,
  noIndex = false,
}: PageSeoInput): Metadata {
  const canonicalPath = path.endsWith("/") ? path : `${path}/`;

  const canonicalUrl = absoluteUrl(canonicalPath);

  const keywordList =
    typeof keywords === "string"
      ? keywords.split(",").map((keyword) => keyword.trim())
      : keywords;

  return {
    title: {
      absolute: title,
    },

    description,

    keywords: keywordList,

    alternates: {
      canonical: canonicalPath,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,

      images: [
        {
          url: absoluteUrl(ogImage),
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function createDefaultMetadata(): Metadata {
  const defaultTitle =
    `${siteConfig.name} | Engineering Intelligence for Complex Industrial Systems`;

  return {
    metadataBase: new URL(getSiteUrl()),

    title: {
      default: defaultTitle,
      template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    applicationName: siteConfig.name,

    authors: [
      {
        name: siteConfig.legalName,
      },
    ],

    creator: siteConfig.legalName,

    publisher: siteConfig.legalName,

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    alternates: {
      canonical: "/",
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    verification: {
      google: siteConfig.googleVerification,
    },

    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl("/"),
      siteName: siteConfig.name,
      title: defaultTitle,
      description: siteConfig.description,

      images: [
        {
          url: absoluteUrl(siteConfig.defaultOgImage),
          alt: siteConfig.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: siteConfig.description,
      images: [absoluteUrl(siteConfig.defaultOgImage)],
    },
  };
}