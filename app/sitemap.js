import { products } from "../lib/products.js";
import { news } from "../lib/news.js";

const baseURL = "https://www.cmgbaldessarelli.com";

const categories = [
  { slug: "tenditori" },
  { slug: "accessori-di-testata" },
  { slug: "collari-di-testata" },
  { slug: "collari-intermedi" },
  { slug: "cavallotti" },
  { slug: "accessori-speciali" },
];

export default function sitemap() {
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    {
      url: `${baseURL}/`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseURL}/catalogo`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/news`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/contatti`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseURL}/privacy-cookie`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const categoryRoutes = categories.map((category) => ({
    url: `${baseURL}/catalogo/${category.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${baseURL}/catalogo/${product.categorySlug}/${product.slug}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const newsRoutes = news.map((newsItem) => ({
    url: `${baseURL}/news/${newsItem.slug}`,
    lastModified: today,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...newsRoutes];
}
