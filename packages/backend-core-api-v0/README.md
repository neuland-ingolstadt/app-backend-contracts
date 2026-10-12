# `@neuland-ingolstadt/backend-core-api-v0`

TypeScript types (via `openapi-typescript`) and the OpenAPI 3.1 schema for
**Neuland Backend Core API v0**.

Published to [GitHub Packages](https://github.com/neuland-ingolstadt/app-backend-contracts/pkgs/npm/backend-core-api-v0)
alongside the Maven artifact `app.neuland:backend-core-api-v0`.

## Install

```bash
# .npmrc
@neuland-ingolstadt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

```bash
bun add @neuland-ingolstadt/backend-core-api-v0
# or: npm install @neuland-ingolstadt/backend-core-api-v0
```

`NODE_AUTH_TOKEN` needs `read:packages` (a classic PAT or `GITHUB_TOKEN` in Actions).

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
