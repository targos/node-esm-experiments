const { join } = require('path');
const { readFileSync } = require('fs');

console.log(readFileSync(join(__dirname, 'data.csv'), 'utf8'));
