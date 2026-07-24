# auth.md

This document describes how AI agents discover authentication metadata and registration information for Invictus Hub.

---

## Resource Server

https://teste-boot.vercel.app

---

## Authorization Server

https://teste-boot.vercel.app

---

# Discovery

Agents should first retrieve the Protected Resource Metadata.

Protected Resource Metadata

https://teste-boot.vercel.app/.well-known/oauth-protected-resource

From that document the authorization server can be discovered.

Authorization Server Metadata

https://teste-boot.vercel.app/.well-known/oauth-authorization-server

OpenID Configuration

https://teste-boot.vercel.app/.well-known/openid-configuration

---

# Registration

Agents may register or request access using the following endpoint.

Registration URI

https://teste-boot.vercel.app/contact

---

# Supported Registration Methods

## identity_assertion

Supported assertion types

- urn:ietf:params:oauth:token-type:id-jag
- verified_email

Credential Type

- oauth2

---

## anonymous

Credential Type

- oauth2

Claim URI

https://teste-boot.vercel.app/contact

---

## service_auth

Claim URI

https://teste-boot.vercel.app/contact

---

# Supported Identity Types

- anonymous
- identity_assertion
- service_auth

---

# OAuth

Authorization Endpoint

https://teste-boot.vercel.app/oauth/authorize

Token Endpoint

https://teste-boot.vercel.app/oauth/token

JWKS

https://teste-boot.vercel.app/.well-known/jwks.json

---

# Scopes

- openid
- profile
- email

---

# API Catalog

https://teste-boot.vercel.app/.well-known/api-catalog

---

# Support

https://teste-boot.vercel.app/contact