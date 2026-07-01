import type {MetadataRoute} from "next";
import {getAllProjects, getAllPosts} from "@/lib/mdx";
import {siteConfig} from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    {url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1},
    {url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8},
    {url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.8},
    {url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.6},
    {url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5}
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map(
    project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.6
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
