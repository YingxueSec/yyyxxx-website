#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src');
const ALLOW_FILES = [
  path.join(ROOT, 'src', 'data', 'downloads.ts'),
  path.join(ROOT, 'src', 'components', 'DownloadCTA.astro'),
];

/** @param {string} p */
function isAllowed(p) {
  const norm = path.normalize(p);
  return ALLOW_FILES.includes(norm);
}

/** @param {string} dir */
function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(full);
    } else if (e.isFile()) {
      yield full;
    }
  }
}

const patterns = [
  /pan\.baidu\.com/,
  /c\.wss\.cc/,
];

/** @type {{file:string, line:number, match:string}[]} */
const violations = [];

for (const file of walk(SRC_DIR)) {
  if (isAllowed(file)) continue;
  const ext = path.extname(file).toLowerCase();
  if (!['.astro', '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx'].includes(ext)) continue;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  lines.forEach((line, idx) => {
    for (const re of patterns) {
      const m = line.match(re);
      if (m) {
        violations.push({ file: path.relative(ROOT, file), line: idx + 1, match: m[0] });
      }
    }
  });
}

if (violations.length) {
  console.error('\nFound hardcoded download links outside centralized config:');
  for (const v of violations) {
    console.error(` - ${v.file}:${v.line} -> ${v.match}`);
  }
  process.exit(1);
} else {
  console.log('OK: No hardcoded download links found outside allowed files.');
}
