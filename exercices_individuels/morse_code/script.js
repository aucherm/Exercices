let result = prompt("Quel est ton prénom ?");

function sayHello(firstname, hour) {

    let greeting;

    if (hour >= 18) {
        greeting = "Bonsoir";
    } else {
        greeting = "Bonjour";
    }

    let message = (`${greeting} ${firstname} !`)
    document.querySelector('h1').innerText = message;
}

sayHello(result)