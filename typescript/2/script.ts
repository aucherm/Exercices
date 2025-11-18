let firstName: string = "Alice";
let score: number = 12;
let isActive: boolean = true;

function displayInfo(name: string, score: number, active: boolean): string {
  return `${name} a un score de ${score}. Actif : ${active}`;
}

console.log(displayInfo(firstName, score, isActive)); 
console.log("TypeScript fonctionne !");
console.log("sos");