// Étape 1 : créer une fonciton qui vérifie la validité d'une date


// fonction maxDaysInMonth pour s'assurer que le nombre de jour par mois est valide
function maxDaysInMonth(month, year) {

    function maxDaysInMonth(month, year) {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31; // mois avec 31 jours

        if ([4, 6, 9, 11].includes(month)) return 30; // mois avec 30 jours

        if (month === 2) { // février

            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) { // Une année est bissextile si divisible par 4 mais pas par 100, ou divisible par 400
                return 29; // année bisextille
            } else {
                return 28; //année non bisextille
            }
        }
        return 0; // mois invalide
    }
}

//function isValidDate qui détermine si une date est valide
function isValidDate(dateString) {

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; // modèle : exactement 2 chiffres pour le jour, exactement 2 chiffres pour le mois, exactement 4 chiffres pour l'année
    const match = dateString.match(regex); // tente de faire correspondre la date avec le modèle regex 
    if (!match) return false; // si date invalide, retourne false

    const day = parseInt(match[1], 10); // extraction du jour en nombre entier avec base 10
    const month = parseInt(match[2], 10); // extraction du mois en nombre entier avec base 10
    const year = parseInt(match[3], 10); // extraction de l'année en nombre entier avec base 10

    if (month < 1 || month > 12) return false // vérifie que le mois est valide

    const maxDay = maxDaysInMonth(month, year);
    if (day < 1 || day > maxDay) return false; // vérifie que le jour est valide

    return true // si le format, le mois et le jour son bons, la date est validée
}


// Étape 2 : créer une fonction pour vérifier si la date est un palindrome

/*function isPalindrome(dateString) {

    if (!isValidDate(dateString)) return false; // vérifie que la date est valide

    const digitsOnly = dateString.replace(/\//g, ''); // supprime les / pour ne garder que les chiffres

    const reversed = digitsOnly.split('').reverse().join(''); //  transforme la chaîne de caractères en tableau / inverse l'ordre des éléments / combine le tableau de caractères en une chaîne
    return digitsOnly === reversed; //compare avec l'original
}

console.log(isPalindrome("12/02/2021")); // true
console.log(isPalindrome("11/02/2019")); // false */



// Étape 3 : créer une fonction donnant les prochaines dates palindromes

function getNextPalindromes(x) {
    const palindromes = []; //création d'un tableau vide qui contiendra les dates palindromes
    let date = new Date(); //  création d'un objet représentant la date et l'heure actuelles au moment de l'appel

    while (palindromes.length < x) {
        date.setDate(date.getDate() + 1); // avance d'un jour

        const day = String(date.getDate()).padStart(2, '0'); // récupère le jour, le convertie en chaîne, ajoute un 0 à gauche si besoin
        const month = String(date.getMonth() + 1).padStart(2, '0'); // en js les mois commencent à 0 donc on ajoute 1 pour obtenir le numéro du mois réel
        const year = date.getFullYear(); // récupère l'année sur 4 chiffres 
        const dateString = `${day}/${month}/${year}`; // concatène en format DD/MM/YYYY

        if (isPalindrome(dateString)) {
            palindromes.push(dateString);
        }
    }

    return palindromes;
}

// Exemple d’utilisation :
console.log(getNextPalindromes(8));


// Étape 4 : refactorer isPlaindrome

function isPalindrome(string) {
    const simpleString = string.toLowerCase().replace(/\s/g, ''); // enlève les espaces et met tout en minuscules
    const reversed = simpleString.split('').reverse().join(''); // crée la version inversée de la chaîne
    return simpleString === reversed; // compare les deux versions
}

// Nouvelle fonction pour vérifier un palindrome au format date
function isDatePalindrome(dateString) {
    // Vérifie d'abord si la date est valide (format DD/MM/YYYY)
    if (!isValidDate(dateString)) return false;

    // Supprime les "/" pour ne garder que les chiffres
    const digitsOnly = dateString.replace(/\//g, '');

    // Appelle la fonction générale isPalindrome
    return isPalindrome(digitsOnly);
}

