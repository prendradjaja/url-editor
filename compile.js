const fs = require('fs');
const sourceCode = fs.readFileSync('src.txt', {encoding: 'utf-8'});
const compiledOutput = sourceCode
      .split('\n')
      .map(line => line.trimLeft())
      .filter(line => !line.startsWith(';'))
      .join('');
fs.writeFileSync('dist.txt', compiledOutput);
