//1
//function carre(number) {
//    const result = number * number;
//    console.log(result);
//}

//carre(3);
//carre(2);

//2
//let x = 9;

//function carre(x) {
//  return x * x;
//}

//let resultatCarre = carre(x);

//function multiplierPar10(x) {
//  return x * 10;
//}

//let resultatFinal = multiplierPar10(resultatCarre);

//console.log(resultatFinal);


//3

let x = getHhumanChoice ();

// Fonction qui retourne le carré d'un nombre
function carre(x) {
    return x * x;
}

// Appel de la fonction avec la variable x
let resultatCarre = carre(x);

// Affichage du carré
console.log(resultatCarre);

// Fonction qui multiplie un nombre par 10
function multiplierPar10(x) {
    return x * 10;
}

// Appel de la deuxième fonction avec le résultat précédent
let resultatFinal = multiplierPar10(resultatCarre);

// Affichage du résultat final
console.log(resultatFinal);

function getHhumanChoice() {
    const choice = prompt("choisissez un nombre");
    return choice;

}