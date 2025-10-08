//version sans fonction
let number = 6;
let isMyNumberPositive = number >= 0;

if (isMyNumberPositive) {
    console.log("Mon chiffre est positif")
} else {
    console.log("Mon chiffre est négatif")
}

// pour les chiffres 0 et -8, il faut remplacer la valeur de "let number ="

//version avec fonction
function isPositive (number){
let positive = number >= 0 ;

if (positive){
    console.log(`${number} est positif`);
 } else {
    console.log(`${number} est négatif`)
}
}

isPositive (6);
isPositive (0);
isPositive (-8);


