// api/markdown.js
export default async function handler(req, res) {
  const accept = req.headers.accept || "";

  if (!accept.includes("text/markdown")) {
    return res.status(406).send("This endpoint is intended for Markdown requests.");
  }

  const markdown = `# Invictus Hub

Welcome to Invictus Hub - your trusted technology partner.

## About Us
Invictus Hub is a software development and digital transformation company...

## Our Services
- Artificial Intelligence & Data Analytics
- Web & Mobile Application Development
- E-Commerce Solutions
- UI/UX Design
- Cloud Technologies
- ERP/CRM Systems
- Digital Transformation

## Visit Our Website
https://invictushub.com

## Contact Us
https://invictushub.com/contact`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("Vary", "Accept");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.setHeader("x-markdown-tokens", "150");
  res.status(200).send(markdown);
}