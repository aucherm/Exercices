let life = 20;
let magic = 0;
let mind = 10;

for (let i = 1; i <= 7; i++) {
    let response = prompt("What do you want to do today ?")

    if (response == "study") {
        magic += 3;
        mind -= 1;
        console.log(`You studies well, you gained ${magic} points of magic and ${mind} points of mind`);

    } else if (response == "duel") {
        let result = Math.random();    // créer entre 0 et 1 aléatoirment. getRandomInt (number)
        if (result > 0.5) {
            magic += 5;
            mind += 3;
            console.log(`Congrats you won ! You have now ${magic} points of magic and ${mind} points of mind`);

        } else {
            life -= 5;
            mind -= 3;
            console.log(`Crap, you lost ! You have now ${life} points of life and ${mind} points of mind`);
        }
    } else if (response == "sleep") {
        life += 5;
        mind += 3;
        console.log(`A good night of sleep is always a window, you have ${life} life points and ${mind} mind points`);
    } else {
        console.log("You did nothing today")
        if (life <= 0)
            console.log("You died");
    }
}
console.log(`Life : ${life}, magic : ${magic}, mind : ${mind}`);
//console.log(`The week is over, here are your points : ${magic} magic points, ${life} life points and ${mind} mind points`);
//magic > 10 ? console.log("You passed the week") : console.log("You have to take another week")

/*
// condition ternaire : condition ? uneAction : uneAutreAction;
c'est égale à :
if (magic > 10 && ){
console.log("You passed the week")
} else {
    console.log("You have to take another week")
}
