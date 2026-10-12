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
| `oas/backend-core-api-v0.yaml` | `app.neuland:backend-core-api-v0:<version>` | `@neuland-ingolstadt/backend-core-api-v0@<version>` |

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

### npm (TypeScript / openapi-fetch)

```ini
# .npmrc
@neuland-ingolstadt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

```bash
npm install @neuland-ingolstadt/backend-core-api-v0@VERSION
```

```ts
import type { paths } from '@neuland-ingolstadt/backend-core-api-v0'
```

Authentication for GitHub Packages is required. See
[GitHub's npm registry documentation](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
and
[Maven registry documentation](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry).

## Legacy reference

Migrating from [neuland.app-backend](https://github.com/neuland-ingolstadt/neuland.app-backend) (GraphQL) to REST/OpenAPI.
