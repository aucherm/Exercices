function isPositive(number) {

    if (number > 0) {
        console.log(`${number} est positif`);
    } else if (number < 0) {
        console.log(`${number} est négatif`);
    } else {
        console.log(`${number} n'est ni positif, ni négatif`);
    }
}

isPositive(6);
isPositive(0);
isPositive(-8);


