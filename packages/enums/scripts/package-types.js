import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const cjsDir = join(process.cwd(), 'dist', 'cjs');
const esmDir = join(process.cwd(), 'dist', 'esm');

mkdirSync(cjsDir, { recursive: true });
mkdirSync(esmDir, { recursive: true });

writeFileSync(
  join(cjsDir, 'package.json'),
  JSON.stringify({ type: 'commonjs' }, null, 2),
);
writeFileSync(
  join(esmDir, 'package.json'),
  JSON.stringify({ type: 'module' }, null, 2),
);
