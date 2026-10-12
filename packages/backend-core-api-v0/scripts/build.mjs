import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = join(pkgRoot, '../..')
const openApiSrc = join(repoRoot, 'oas/backend-core-api-v0.yaml')
const openApiDest = join(pkgRoot, 'openapi.yaml')
const schemaDest = join(pkgRoot, 'schema.d.ts')

mkdirSync(pkgRoot, { recursive: true })
copyFileSync(openApiSrc, openApiDest)

execFileSync(
	'npx',
	['--yes', 'openapi-typescript@7.13.0', openApiSrc, '-o', schemaDest],
	{ stdio: 'inherit', cwd: repoRoot }
)

console.log(`Built ${openApiDest}`)
console.log(`Built ${schemaDest}`)
