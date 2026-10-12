# `@neuland-ingolstadt/backend-core-api-v0`

TypeScript types (via `openapi-typescript`) and the OpenAPI 3.1 schema for
**Neuland Backend Core API v0**.

Published to [npmjs.com](https://www.npmjs.com/package/@neuland-ingolstadt/backend-core-api-v0)
(public, no auth). Versioned with the Maven artifact
`app.neuland:backend-core-api-v0`. Releases are published from GitHub Actions via
[npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) (OIDC — no
long-lived tokens).

## Install

```bash
bun add @neuland-ingolstadt/backend-core-api-v0
# or: npm install @neuland-ingolstadt/backend-core-api-v0
```

No `.npmrc` or token required.

## Usage

```ts
import createClient from 'openapi-fetch'
import type { paths } from '@neuland-ingolstadt/backend-core-api-v0'

const client = createClient<paths>({
  baseUrl: 'https://core.api.neuland.app'
})
```

Raw OpenAPI document:

```ts
import openApiUrl from '@neuland-ingolstadt/backend-core-api-v0/openapi.yaml'
```

Or read `node_modules/@neuland-ingolstadt/backend-core-api-v0/openapi.yaml`.
