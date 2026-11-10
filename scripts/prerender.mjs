// Runs after `vite build` + the SSR build: renders <App /> to HTML and injects it,
// plus the JSON-LD structured data, into dist/index.html.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const indexPath = path.join(root, 'dist/index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render, schema } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

let html = await readFile(indexPath, 'utf8')

const appHtml = render()
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found')
html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

const jsonLd = JSON.stringify(schema()).replace(/</g, '\\u003c')
if (!html.includes('<!--schema-->')) throw new Error('schema placeholder not found')
html = html.replace('<!--schema-->', `<script type="application/ld+json">${jsonLd}</script>`)

await writeFile(indexPath, html)
await rm(ssrDir, { recursive: true, force: true })
console.log(`prerendered ${appHtml.length} chars of HTML + JSON-LD into dist/index.html`)
