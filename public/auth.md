# auth.md

## Invictus Hub Agent Registration

This service supports agent registration. Agents can register by following the instructions below.

### Registration Endpoint

`https://teste-boot.vercel.app/agent/register`

### Supported Methods

- OAuth 2.0
- OpenID Connect

### Credential Usage

Tokens are issued via OAuth 2.0 and should be sent in the `Authorization: Bearer <token>` header.

### Discovery

- OAuth Server: `https://teste-boot.vercel.app/.well-known/oauth-authorization-server`
- API Catalog: `https://teste-boot.vercel.app/.well-known/api-catalog`

### Contact

For assistance: `https://teste-boot.vercel.app/contact`