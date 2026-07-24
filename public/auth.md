# auth.md

This document describes how AI agents discover authentication metadata and register to access protected resources for Invictus Hub.

## Resource Server

https://teste-boot.vercel.app

## Authorization Server

https://teste-boot.vercel.app

## Discovery

Protected Resource Metadata

https://teste-boot.vercel.app/.well-known/oauth-protected-resource

OAuth Authorization Server Metadata

https://teste-boot.vercel.app/.well-known/oauth-authorization-server

OpenID Configuration

https://teste-boot.vercel.app/.well-known/openid-configuration

## Registration

Agents should register using

https://teste-boot.vercel.app/contact

Supported identity types

- anonymous
- identity_assertion
- service_auth

Supported credential types

- oauth2

Supported scopes

- openid
- profile
- email

Supported grant types

- authorization_code
- client_credentials

## OAuth Endpoints

Authorization Endpoint

https://teste-boot.vercel.app/oauth/authorize

Token Endpoint

https://teste-boot.vercel.app/oauth/token

JWKS

https://teste-boot.vercel.app/.well-known/jwks.json

## API Documentation

https://teste-boot.vercel.app/openapi.json

## Support

https://teste-boot.vercel.app/contact