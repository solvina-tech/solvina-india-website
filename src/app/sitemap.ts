import type { MetadataRoute } from "next";

import { customers } from "@/data/homepage";
import { caseStudyDetails } from "@/data/caseStudyDetails";
import { expertisePages } from "@/data/expertise";
import { industryPages } from "@/data/industries";
import { products } from "@/data/product_details";
import {
  aboutSeo,
  expertiseListingSeo,
  homepageSeo,
  industriesListingSeo,
  projectsSeo,
} from "@/data/seo";
import { absoluteUrl } from "@/lib/seo";

function createSitemapEntry(path: string): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    homepageSeo.path,
    aboutSeo.path,
    expertiseListingSeo.path,
    industriesListingSeo.path,
    projectsSeo.path,
  ];

  const expertiseUrls = expertisePages.map((page) => page.seo.url);
  const industryUrls = industryPages.map((page) => page.seo.url);
  const productUrls = products.map((product) => `/products/${product.id}/`);
  const customerUrls = customers.map((customer) => `/customer/${customer.id}/`);
  const caseStudyUrls = caseStudyDetails.map(
    (study) => `/projects/case-studies/${study.id}/`,
  );

  return [
    ...staticPages,
    ...expertiseUrls,
    ...industryUrls,
    ...productUrls,
    ...customerUrls,
    ...caseStudyUrls,
  ].map(createSitemapEntry);
}
