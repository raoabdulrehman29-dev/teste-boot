# Auth.md

## Invictus Hub Agent Authentication

This document describes how AI agents discover authentication metadata,
understand supported authentication methods, and access protected
resources exposed by Invictus Hub.

---

## Website

Production

https://invictushub.com

Testing

https://teste-boot.vercel.app

---

## Authentication Standards

Invictus Hub supports:

- OAuth 2.0
- OpenID Connect (OIDC)

---

## Authentication Metadata

OAuth Authorization Server

https://teste-boot.vercel.app/.well-known/oauth-authorization-server

OAuth Protected Resource

https://teste-boot.vercel.app/.well-known/oauth-protected-resource

OpenID Configuration

https://teste-boot.vercel.app/.well-known/openid-configuration

API Catalog

https://teste-boot.vercel.app/.well-known/api-catalog

---

## Agent Registration

Agents requiring authenticated access should follow the authentication
metadata published by this site.

Registration URI

https://teste-boot.vercel.app/contact

---

## Supported Identity Types

- anonymous
- identity_assertion
- service_auth

---

## Supported Credential Types

- oauth2

---

## Supported OAuth Grants

- authorization_code
- client_credentials

---

## Supported Scopes

- openid
- profile
- email

---

## API Documentation

https://teste-boot.vercel.app/openapi.json

---

## Support

General Contact

https://teste-boot.vercel.app/contact

Production Website

https://invictushub.com