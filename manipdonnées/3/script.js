const fs = require('fs');
const filepath = "manipdonnées/3/data.json";


const content = fs.readFileSync(filepath, { encoding: 'utf8', flag: 'r' });
const data = JSON.parse(content);
// write your code bellow

// 1 type de données
console.log("Type of data : ", typeof data)

// 2 afficher élément 0
console.log(data[0])

// 3 nombre d'objets dans le tableau
console.log("nombre d'objets dans le tableau", data.length);

// 4 informations de la quatrième candidate
console.log("informations quatrième objet", data[4]);

//5 l’âge moyen des candidates
let sommeAge = 0
for (let i = 0; i < data.length; i++) {
  sommeAge += data[i].age
}
const avg = sommeAge / data.length
console.log("Moyenne d'age des candidates : ", avg) 