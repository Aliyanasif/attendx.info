import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://attendx.info";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/blog/best-attendance-management-software-pakistan`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/payroll-management-system-benefits`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/employee-attendance-tracking`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/gps-attendance-tracking-app-pakistan`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/small-business-payroll-automation`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/digital-attendance-vs-manual-register`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
      {
        url: `${baseUrl}/blog/attendance-system-for-schools-pakistan`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      },
  ];
}