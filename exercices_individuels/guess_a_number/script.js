//Step 1
function askNumber() {
    const input = prompt('Input your number');
    const inputNumber = Number(input);
    console.log(inputNumber);
    return inputNumber;
}

//Step 2
function didIWin(givenNumber) {
    const numberToGuess = 22;

    if (givenNumber === numberToGuess) {
alert("Well done ! You have guessed the number !");
    } else if (givenNumber < numberToGuess) {
        alert("Bigger !");
    } else {
        alert("Smaller !");
    }
}

const givenNumber = askNumber();
console.log('givenNumber', givenNumber);
didIWin(givenNumber);

