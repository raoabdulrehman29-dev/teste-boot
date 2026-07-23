# Auth.md

# Invictus Hub Agent Authentication

This document describes how AI agents can discover authentication,
request access, and interact with protected resources exposed by
Invictus Hub.

---

## Website

Test Deployment

https://teste-boot.vercel.app

Production Website

https://invictushub.com

---

## Agent Registration

AI agents requesting authenticated access should use the contact
information below.

Registration Contact

https://teste-boot.vercel.app/contact

Production Contact

https://invictushub.com/contact

---

## Authentication

Invictus Hub supports:

- OAuth 2.0
- OpenID Connect (OIDC)

OAuth Authorization Server

https://teste-boot.vercel.app/.well-known/oauth-authorization-server

OAuth Protected Resource

https://teste-boot.vercel.app/.well-known/oauth-protected-resource

OpenID Configuration

https://teste-boot.vercel.app/.well-known/openid-configuration

API Catalog

https://teste-boot.vercel.app/.well-known/api-catalog

---

## Supported Identity Types

- anonymous
- identity_assertion
- service_auth

---

## Supported Credential Types

- oauth2

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

For onboarding or authentication assistance, contact:

https://teste-boot.vercel.app/contact