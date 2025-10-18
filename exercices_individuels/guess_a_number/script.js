//Step 1
function askNumber() {
  const input = prompt("Input your number");
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

function gamePlay(){
const givenNumber = askNumber();
console.log("givenNumber", givenNumber);
didIWin(givenNumber);
}

gamePlay();

//3

function didIWin(givenNumber) {
  const numberToGuess = 22;

  if (givenNumber === numberToGuess) {
    alert("Well done ! You have guessed the number !");
    return true;
  } else if (givenNumber < numberToGuess) {
    alert("Bigger !");
    return false;
  } else {
    alert("Smaller !");
    return false;
  }
}

function gamePlay(){
    let win = false;

    while (!win) {
const givenNumber = askNumber();
console.log("givenNumber", givenNumber);
win = didIWin(givenNumber);
}
console.log("Game over! You found the number");
}
gamePlay();
