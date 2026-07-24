# Auth.md

## Invictus Hub Agent Registration

You are an agent. This service supports **agentic registration**:

1. **Discover** the registration endpoint
2. **Register** your agent
3. **Exchange** for an access token
4. **Call** the API

## Registration

**Registration Endpoint:** `https://teste-boot.vercel.app/agent/register`

**Registration URI:** `https://teste-boot.vercel.app/auth.md`

## Supported Methods

- **OpenID Connect (OIDC)**
- **OAuth 2.0**

## How to Register

1. Send a `POST` request to `https://teste-boot.vercel.app/agent/register`
2. Include your agent type and scope requirements
3. You will receive a client ID and secret
4. Use these to obtain an access token

## Credential Usage

- Use `Authorization: Bearer <token>` header
- Tokens expire in 3600 seconds
- Refresh tokens are available

## Discovery

- **OAuth Server:** `https://teste-boot.vercel.app/.well-known/oauth-authorization-server`
- **API Catalog:** `https://teste-boot.vercel.app/.well-known/api-catalog`
- **OpenAPI:** `https://teste-boot.vercel.app/openapi.json`

## Contact

For registration assistance: `https://teste-boot.vercel.app/contact`