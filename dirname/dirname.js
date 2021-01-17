import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(readFileSync(join(__dirname, 'data.csv'), 'utf8'));
