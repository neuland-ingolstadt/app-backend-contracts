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

## Generated Maven artifacts

Each OpenAPI specification is generated as a separate Maven library containing
Jakarta REST server interfaces and DTOs. The libraries are published to GitHub
Packages whenever a Conventional Commit merged into `main` produces a semantic
release.

| OpenAPI specification | Maven coordinates |
| --- | --- |
| `oas/backend-core-api-v0.yaml` | `app.neuland:backend-core-api-v0:<version>` |

To consume an artifact, configure the GitHub Packages repository and add the
dependency:

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

Authentication for GitHub Packages is required for private repositories. See
[GitHub's Maven registry documentation](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry).

## Legacy reference

Migrating from [neuland.app-backend](https://github.com/neuland-ingolstadt/neuland.app-backend) (GraphQL) to REST/OpenAPI.
