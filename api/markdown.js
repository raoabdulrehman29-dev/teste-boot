// api/markdown.js
// Serverless function for markdown content negotiation

export default async function handler(req, res) {
  const accept = req.headers.accept || "";
  const baseUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  if (!accept.includes("text/markdown")) {
    return res.status(406).send("This endpoint is intended for Markdown requests.");
  }

  const markdown = `# Invictus Hub

Welcome to Invictus Hub - your trusted technology partner.

## About Us
Invictus Hub is a software development and digital transformation company that helps startups, enterprises, and growing businesses build scalable digital products and modern technology solutions.

## Our Services
- Artificial Intelligence & Data Analytics
- Web & Mobile Application Development
- E-Commerce Solutions
- UI/UX Design
- Cloud Technologies
- ERP/CRM Systems
- Digital Transformation

## Our Expertise
- Generative AI Solutions
- Data Analytics & Business Intelligence
- E-Commerce Design & Development
- Mobile App Development
- UX/UI Design
- Software Development

## Visit Our Website
${baseUrl}

## Contact Us
${baseUrl}/contact

## Additional Resources
- Sitemap: ${baseUrl}/sitemap.xml
- Robots: ${baseUrl}/robots.txt
- API Catalog: ${baseUrl}/.well-known/api-catalog
- OAuth Server: ${baseUrl}/.well-known/oauth-authorization-server`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("Vary", "Accept");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.setHeader("x-markdown-tokens", "150");
  res.status(200).send(markdown);
}