import { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  // Real pages, so they rank on their own rather than as a fragment of the home page.
  const studies: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `https://ikechukwupeter.com/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: "https://ikechukwupeter.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...studies,
    {
      url: "https://ikechukwupeter.com/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ikechukwupeter.com/#skills",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ikechukwupeter.com/#projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ikechukwupeter.com/#experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ikechukwupeter.com/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
