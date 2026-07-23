// test-middleware.js
// This simulates your middleware locally without Vercel

import http from 'http';

// Your actual markdown content (same as in middleware.js)
function getMarkdownResponse() {
  return `# Invictus Hub

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
}

// Create a simple HTTP server that simulates Vercel
const server = http.createServer((req, res) => {
  const accept = req.headers.accept || '';
  
  // Check if the request wants markdown
  if (accept.includes('text/markdown') && req.url === '/') {
    const markdown = getMarkdownResponse();
    
    res.writeHead(200, {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': '150',
      'Vary': 'Accept',
      'Cache-Control': 'public, max-age=3600',
    });
    res.end(markdown);
    console.log('✅ Markdown response sent!');
    return;
  }
  
  // For non-markdown requests
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head><title>Test Server</title></head>
      <body>
        <h1>Test Server Running</h1>
        <p>Try: curl -H "Accept: text/markdown" http://localhost:3000/</p>
        <p>Your middleware is being tested!</p>
      </body>
    </html>
  `);
  console.log('📄 HTML response sent (non-markdown request)');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('✅ Test server running at http://localhost:3000');
  console.log('📝 Test command: curl.exe -i -H "Accept: text/markdown" http://localhost:3000/');
  console.log('🔍 Press Ctrl+C to stop');
});