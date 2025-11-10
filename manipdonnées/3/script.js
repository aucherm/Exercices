const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);

// 1

/* import data from './data.json' assert { type: 'json' };

console.log(typeof data); // "object"
console.log(Array.isArray(data)); // true
 */

// 2
import data from './data.json' assert { type: 'json' };

// Afficher le premier objet
console.log(data[0]);
