# auth.md

## Agent Registration

This service supports agent registration. Agents can register by following the instructions below.

### Registration Endpoint

`https://teste-boot.vercel.app/agent/register`

### Supported Methods

- OAuth 2.0
- OpenID Connect

### How to Register

1. Send a POST request to the registration endpoint
2. Include your agent type and required scopes
3. You will receive a client ID and secret
4. Use these credentials to obtain an access token

### Credential Usage

Tokens are issued via OAuth 2.0 and should be sent in the `Authorization: Bearer <token>` header.

### Discovery

- OAuth Server: `https://teste-boot.vercel.app/.well-known/oauth-authorization-server`
- API Catalog: `https://teste-boot.vercel.app/.well-known/api-catalog`

### Contact

For assistance: `https://teste-boot.vercel.app/contact`