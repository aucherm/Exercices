/* let number = parseInt(prompt("Veuillez saisir un chiffre entier entre 0 et 10 :"));

if (number >= 0 && number <= 10) {
    for (let i = number; i >=0; i--){
        console.log(i);
    }

} else {
console.log("Le nombre saisi doit être compris entre 0 et 10.");

} */

let number = parseInt(prompt("Veuillez saisir un chiffre entier entre 0 et 10 :"));

if (!isNaN(number) && number >= 0 && number <= 10) {

    for (let i = number; i >= 0; i--) {

        console.log(i);

    }

} else {

    console.log("Erreur : merci de saisir un nombre entier entre 0 et 10.");

}