export default function handler(req, res) {
  const baseUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    issuer: baseUrl,
    authorization_endpoint: `${baseUrl}/oauth/authorize`,
    token_endpoint: `${baseUrl}/oauth/token`,
    jwks_uri: `${baseUrl}/.well-known/jwks.json`,
    grant_types_supported: ["authorization_code", "client_credentials"],
    response_types_supported: ["code"],
    scopes_supported: ["openid", "profile", "email"]
  });
}