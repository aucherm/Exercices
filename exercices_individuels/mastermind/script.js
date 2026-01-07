const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
let attempts = 12;
let currentGuess = [];

function generateSolution() {
    let result = [];
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        result.push(colors[randomIndex]);
    }
    return result;
}

const solution = generateSolution();
console.log(solution);

function addColor(color) {
    if (currentGuess.length >= 4) return;
    currentGuess.push(color);
    updateBoard();
}

function resetGuess() {
    currentGuess = [];
    updateBoard();
}

function updateBoard() {
    const slots = document.querySelectorAll(".slot");
    slots.forEach((slot, i) => {
        slot.style.background = currentGuess[i] || "lightgray";
    });
}

function isCorrectGuess(guess) {
    return guess.every((c, i) => c === solution[i]);

}

function playTurn() {
    const messageEl = document.getElementById("message");
    const attemptsEL = document.getElementById("attemptsLeft");

    if (currentGuess.length !== 4) {
        messageEl.textContent = "Choisis 4 couleurs.";
        return;
    }

    attempts--;

    if (isCorrectGuess(currentGuess)) {
        messageEl.textContent = `🥳 Bravo ! Tu as trouvé la bonne combinaison ! 🥳`;
        return;

    }

    if (attempts === 0) {
        messageEl.textContent = `Game over ! La bonne combinaison était : ${solution.join(",")}.`;
        attemptsEL.textContent = "";
        resetGuess();
        return;
    }

    messageEl.textContent = `Mauvaise combinaison, retente ta chance !`;
    attemptsEL.textContent = ` Essais restants : ${attempts}`;

}

document.getElementById("attemptsLeft").textContent =
    `Essais restants : ${attempts}`;


