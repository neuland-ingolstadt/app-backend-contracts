# `@neuland-ingolstadt/backend-core-api-v0`

TypeScript types (via `openapi-typescript`) and the OpenAPI 3.1 schema for
**Neuland Backend Core API v0**.

Versioned with the Maven artifact `app.neuland:backend-core-api-v0`. The npm
tarball is attached to each [GitHub Release](https://github.com/neuland-ingolstadt/app-backend-contracts/releases)
(no auth required). The same package is also published to
[GitHub Packages](https://github.com/neuland-ingolstadt/app-backend-contracts/pkgs/npm/backend-core-api-v0)
for consumers that already authenticate to `npm.pkg.github.com`.

## Install (recommended — no token)

Pin a release tarball. Replace `1.0.4` with the version you need:

```bash
bun add https://github.com/neuland-ingolstadt/app-backend-contracts/releases/download/v1.0.4/neuland-ingolstadt-backend-core-api-v0-1.0.4.tgz
```

```json
{
  "dependencies": {
    "@neuland-ingolstadt/backend-core-api-v0": "https://github.com/neuland-ingolstadt/app-backend-contracts/releases/download/v1.0.4/neuland-ingolstadt-backend-core-api-v0-1.0.4.tgz"
  }
}
```

## Install via GitHub Packages

Requires `NODE_AUTH_TOKEN` with `read:packages`:

```bash
# .npmrc
@neuland-ingolstadt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

```bash
bun add @neuland-ingolstadt/backend-core-api-v0@1.0.4
```

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
