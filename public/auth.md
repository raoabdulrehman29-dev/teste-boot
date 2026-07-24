# auth.md

## Invictus Hub — Agent Registration

This file describes how an AI agent registers with Invictus Hub on behalf of a user. Resource server and authorization server are both hosted at `https://teste-boot.vercel.app`.

## Discover

Before registering, fetch these two documents:

1. Protected Resource Metadata:
```http
GET /.well-known/oauth-protected-resource
```
Returns `resource`, `authorization_servers`, `scopes_supported`, `bearer_methods_supported`.

2. Authorization Server metadata:
```http
GET /.well-known/oauth-authorization-server
```
Returns `issuer`, `token_endpoint`, and an `agent_auth` block containing `skill`, `register_uri`, `identity_types_supported`, `identity_assertion`, `anonymous`, and `events_supported`.

## Pick a method

- If your agent provider can mint an ID-JAG identity assertion for this audience, use **identity_assertion**.
- If you have no identity assertion available, use **anonymous** — you'll receive limited scopes until the user claims the registration.

Cross-check your chosen method against `identity_types_supported` in the Authorization Server metadata before sending a request.

## Register

### identity_assertion

```http
POST /agent/register
Content-Type: application/json

{
  "type": "identity_assertion",
  "assertion_type": "urn:ietf:params:oauth:token-type:id-jag",
  "assertion": "<id-jag-token>"
}
```

Response:
```json
{
  "credential_type": "access_token",
  "access_token": "<token>",
  "expires_in": 3600,
  "scope": "openid profile email"
}
```

### anonymous

```http
POST /agent/register
Content-Type: application/json

{
  "type": "anonymous"
}
```

Response:
```json
{
  "credential_type": "api_key",
  "api_key": "<key>",
  "claim_token": "<claim_token>"
}
```

## Claim ceremony (anonymous only)

```http
POST /agent/register/claim
Content-Type: application/json

{
  "claim_token": "<claim_token>",
  "email": "<user_email>"
}
```

The user completes verification via the emailed link. Once claimed, the pre-claim `api_key` gains full scope.

## Use your credentials

Send the issued credential on every request:

```http
Authorization: Bearer <access_token or api_key>
```

## Errors

| Code | Meaning |
|---|---|
| `invalid_request` | Malformed registration body |
| `invalid_assertion` | ID-JAG failed verification |
| `claim_expired` | Claim token window lapsed — re-register |

## Revocation

```http
POST /agent/register/revoke
Content-Type: application/json

{ "token": "<access_token>" }
```

Revocation events are also published at the `events_supported` URL in the Authorization Server metadata.

## Contact

`https://teste-boot.vercel.app/contact`