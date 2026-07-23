# Auth.md

## Invictus Hub Agent Authentication

This document describes how AI agents discover authentication metadata and register to access protected resources exposed by Invictus Hub.

---

## Production Website

https://invictushub.com

## Test Deployment

https://teste-boot.vercel.app

---

## Agent Registration

Registration URI

https://teste-boot.vercel.app/contact

---

## Authentication

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

https://teste-boot.vercel.app/contact