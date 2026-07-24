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
    scopes_supported: ["openid", "profile", "email"],
    agent_auth: {
      skill: `${baseUrl}/auth.md`,
      register_uri: `${baseUrl}/agent/register`,
      claim_uri: `${baseUrl}/agent/register/claim`,
      revocation_uri: `${baseUrl}/agent/register/revoke`,
      identity_types_supported: ["identity_assertion", "anonymous"],
      identity_assertion: {
        assertion_types_supported: ["urn:ietf:params:oauth:token-type:id-jag"],
        credential_types_supported: ["access_token"]
      },
      anonymous: { credential_types_supported: ["api_key"] },
      events_supported: [
        "https://schemas.workos.com/events/agent/auth/identity/assertion/revoked"
      ]
    }
  });
}