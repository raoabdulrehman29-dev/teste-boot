# Auth.md

## Invictus Hub Agent Registration

This document describes how AI agents can discover authentication and register for access to Invictus Hub services.

## Agent Audience

This service is intended for AI agents that need to access Invictus Hub content and services on behalf of users.

## Registration

To register, agents should visit:

**Registration URI:** https://teste-boot.vercel.app/contact

For automated registration, agents can use the following endpoint:

**Registration Endpoint:** https://teste-boot.vercel.app/agent/register

## Supported Methods

- **OpenID Connect (OIDC)**: For agents that support OIDC
- **OAuth 2.0**: For agents that support OAuth 2.0
- **API Key**: For simple agent access

## Credential Usage

- Access tokens are issued via OAuth 2.0
- Tokens are short-lived and should be refreshed
- Tokens should be sent in the `Authorization: Bearer <token>` header

## Discovery Metadata

- API Catalog: https://teste-boot.vercel.app/.well-known/api-catalog
- OpenAPI Specification: https://teste-boot.vercel.app/openapi.json
- OAuth Server: https://teste-boot.vercel.app/.well-known/oauth-authorization-server

## Contact

For registration assistance: https://teste-boot.vercel.app/contact