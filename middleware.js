export function middleware(request) {
  const accept = request.headers.get("accept") || "";
  
  // Only intercept if the request wants markdown AND it's the homepage
  if (accept.includes("text/markdown")) {
    const url = new URL(request.url);
    
    if (url.pathname === "/") {
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
https://invictushub.com

## Contact Us
https://invictushub.com/contact

## Additional Resources
- Sitemap: https://invictushub.com/sitemap.xml
- Robots: https://invictushub.com/robots.txt
- API Catalog: https://invictushub.com/.well-known/api-catalog
- OAuth Server: https://invictushub.com/.well-known/oauth-authorization-server`;

      return new Response(markdown, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "Vary": "Accept",
          "x-markdown-tokens": "150",
        },
      });
    }
  }
  
  // For non-markdown requests, continue normally
  return fetch(request);
}

export const config = {
  matcher: '/',
};