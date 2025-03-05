const baseURL = "https://www.cmgbaldessarelli.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
