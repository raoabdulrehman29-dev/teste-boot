export default function handler(req, res) {
  const baseUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  res.setHeader("Content-Type", "application/linkset+json");
  res.status(200).json({
    linkset: [{
      anchor: baseUrl,
      links: [
        { rel: "service-desc", href: `${baseUrl}/openapi.json`, type: "application/openapi+json;version=3.0" },
        { rel: "service-doc", href: baseUrl, type: "text/html" }
      ]
    }]
  });
}