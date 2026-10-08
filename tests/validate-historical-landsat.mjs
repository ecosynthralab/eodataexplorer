import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const source = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

assert.match(source, /id="date-start"[^>]*min="1980-01-01"/,
  'The date picker must support dates from 1980 onward.');
assert.match(source, /LHS:\s*\{[\s\S]*?archive:/,
  'The app must define a historical Landsat archive sensor.');
assert.match(source, /LANDSAT_ARCHIVE_COLLECTIONS\s*=\s*\{[\s\S]*?landsat-c2-l1/,
  'The historical Landsat archive must include legacy collection metadata.');
assert.match(source, /if \(!usedReal\s*&&\s*activeSensor\s*!==\s*['"]LHS['"]\)/,
  'Historical Landsat results must not use simulated scenes.');
assert.match(source, /Historical Landsat archive \(1980–\)/,
  'The UI must communicate the historical archive scope.');

console.log('Historical Landsat validation passed.');
