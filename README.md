# app-backend-contracts

OpenAPI contracts and generated models for **Neuland Backend 2.0**.

## Role

Contract-first API specifications shared by:

- [app-backend-core](https://github.com/neuland-ingolstadt/app-backend-core)
- [app-backend-food](https://github.com/neuland-ingolstadt/app-backend-food)
- [app-backend-cloud-gateway](https://github.com/neuland-ingolstadt/app-backend-cloud-gateway)

## Contents (planned)

- OpenAPI 3.1 specs for all new backend services
- Generated Java DTOs and server interfaces
- Contract test harness

## Generated artifacts

Each OpenAPI specification is published to GitHub Packages whenever a
Conventional Commit merged into `main` produces a semantic release (`feat`,
`fix`, or breaking changes). Commits such as `chore` or `docs` do not publish
a new artifact version.

| OpenAPI specification | Maven | npm |
| --- | --- | --- |
| `oas/backend-core-api-v0.yaml` | `app.neuland:backend-core-api-v0:<version>` | `@neuland-ingolstadt/backend-core-api@<version>` |

### Maven (Java / Quarkus)

```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/neuland-ingolstadt/app-backend-contracts</url>
  </repository>
</repositories>

<dependency>
  <groupId>app.neuland</groupId>
  <artifactId>backend-core-api-v0</artifactId>
  <version>VERSION</version>
</dependency>
```

Maven uses GitHub Packages (token with `read:packages`). See
[Maven registry documentation](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry).

### npm (TypeScript / openapi-fetch)

Public on npmjs.org — no auth required:

```bash
bun add @neuland-ingolstadt/backend-core-api@VERSION
# or: npm install @neuland-ingolstadt/backend-core-api@VERSION
```

```ts
import type { paths } from '@neuland-ingolstadt/backend-core-api'
```

## Legacy reference

Migrating from [neuland.app-backend](https://github.com/neuland-ingolstadt/neuland.app-backend) (GraphQL) to REST/OpenAPI.
