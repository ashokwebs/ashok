// Build-time guard: fails the build if private contact details or retired brand
// names appear anywhere that ships. Runs as `prebuild`, so Vercel runs it too.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const BANNED = [
  /zenvarq/i,
  /janeory/i,
  /whats\s*app/i,
  /wa\.me/i,
  /[removed]/,
  /@ybl\b/i,
  /\bupi\b/i,
  /@gmail\.com/i,
  /\+91[\s-]?\d/,
]
const ROOTS = ['app', 'components', 'lib', 'public', 'scripts', 'next.config.mjs', 'README.md']
const SKIP = new Set(['check-banned.mjs'])
const BINARY = /\.(png|jpe?g|gif|webp|ico|woff2?|ttf)$/i

function* walk(p) {
  const st = statSync(p, { throwIfNoEntry: false })
  if (!st) return
  if (st.isDirectory()) for (const f of readdirSync(p)) yield* walk(join(p, f))
  else yield p
}

function text(file) {
  if (file.endsWith('.pdf')) {
    try {
      return execFileSync('pdftotext', [file, '-'], { encoding: 'utf8' })
    } catch {
      return readFileSync(file, 'latin1') // no pdftotext: scan raw bytes
    }
  }
  return readFileSync(file, 'utf8')
}

const hits = []
for (const root of ROOTS)
  for (const file of walk(root)) {
    if (BINARY.test(file) || SKIP.has(file.split('/').pop())) continue
    text(file).split('\n').forEach((line, i) => {
      for (const re of BANNED) if (re.test(line)) hits.push(`${file}:${i + 1}  ${re}  ${line.trim().slice(0, 120)}`)
    })
  }

if (hits.length) {
  console.error(`Banned strings found (${hits.length}):\n` + hits.join('\n'))
  process.exit(1)
}
console.log('check-banned: clean')
