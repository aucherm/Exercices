let count = 0; // Crée une variable pour compter

const myButon = document.getElementById("counter"); //Récupère le bouton
//const numbers = document.querySelector("#counter");

function clickCount() {
    count++;
    myButon.innerText = `${count} clics !`;
}

myButon.addEventListener("click", clickCount);