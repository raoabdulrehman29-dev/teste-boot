export default function handler(req, res) {
  const baseUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    resource: baseUrl,
    authorization_servers: [baseUrl],
    scopes_supported: ["openid", "profile", "email"],
    bearer_methods_supported: ["header"]
  });
}