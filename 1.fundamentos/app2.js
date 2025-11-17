const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf8');

const wordCount = data.split(' ');
const regex = /React/ig;

const reactWordsCount = (data.match(regex).length ?? []);

console.log('palabras-react:', reactWordsCount);