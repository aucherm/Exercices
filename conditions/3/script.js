/* 
Nous enregistrons une variable appelée tmp avec la valeur 15.
Si la variable tmp est inférieure à 0, la console affiche "Freezing weather".
Si elle est inférieure à 10, le programme affiche "Very cold weather".
Si elle est inférieure à 20, le programme affiche "Cold weather".
Si elle est inférieure à 30, le programme affiche " Normal in temp".
Si elle est inférieure à 40, le programme affiche "Its Hot".
Sinon, la console affiche "Its very hot".
Nous avons tmp = 15, c'est donc "Cold weather" qui sera affiché.
*/


let tmp = 15

if (tmp < 0) {
    console.log("Freezing weather.");
} else if (tmp < 10) {
    console.log("Very cold weather.");
} else if (tmp < 20) {
    console.log("Cold weather.");
} else if (tmp < 30) {
    console.log("Normal in temp.");
} else if (tmp < 40) {
    console.log("It's Hot.");
} else {
    console.log("It's very hot.");
}



let tmp2 = 15

switch (true) {
    case (tmp2 < 0):
        console.log("Freezing weather.");
        break;

    case (tmp2 < 10):
        console.log("Very cold weather.");
        break;

    case (tmp2 < 20):
        console.log("Cold weather.");
        break;

    case (tmp2 < 30):
        console.log("Normal in temp.");
        break;

    case (tmp2 < 40):
        console.log("It's Hot.");
        break;

    default:
        console.log("It's very hot.");
        break;   


}