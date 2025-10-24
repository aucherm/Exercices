// Demande le prénom
let firstname = prompt("Quel est ton prénom ?");

// Demande l'heure actuelle (optionnel, pour tester la condition)
let hour = new Date().getHours(); // récupère l'heure du système

function sayHello(firstname, hour) {
    let greeting;

    if (hour >= 18) {
        greeting = "Bonsoir";
    } else {
        greeting = "Bonjour";
    }

    let message = `${greeting} ${firstname} !`;
    document.querySelector("h1").innerText = message;
}

sayHello(firstname, hour);