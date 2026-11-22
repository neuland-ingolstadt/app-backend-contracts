# `@neuland-ingolstadt/backend-food-api`

TypeScript types (via `openapi-typescript`) and the OpenAPI 3.1 schema for
**Neuland Backend Food API v0**.

Published to [npmjs.com](https://www.npmjs.com/package/@neuland-ingolstadt/backend-food-api)
(public, no auth). Versioned with the Maven artifact
`app.neuland:backend-food-api`.

## Install

```bash
bun add @neuland-ingolstadt/backend-food-api
# or: npm install @neuland-ingolstadt/backend-food-api
```

## Usage

```ts
import createClient from 'openapi-fetch'
import type { paths } from '@neuland-ingolstadt/backend-food-api'

const client = createClient<paths>({
  baseUrl: 'https://api.neuland.app/food/v1'
})
```
