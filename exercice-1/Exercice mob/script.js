/ 1ère manière : sans fonction callback

// stocker l'élément que l'on veut cibler dans une variable
const monBouton = document.querySelector(".btn-1");

// Au clic du bouton, changer son texte :
// 1.cibler l'élément par la variable
// 2. puis préciser l'évenement que l'on écoute,
// 3. et enfin indiquer ce que l'on souhaite faire en écrivant directement la fonction
monBouton.addEventListener("click", function () {
    monBouton.innerText = "texte changé !";
});

// 2ème manière : avec fonction callback

// stocker l'élément que l'on veut cibler dans une variable
const mon2emeBouton = document.querySelector(".btn-2");

// Définir la fonction 
function changerHtml(){
    mon2emeBouton.innerHTML = "<b>HTML changé<b>"
}

// Au clic du bouton, changer son HTML  :
// 1. cibler l'élément par la variable
// 2. puis préciser l'événement que l'on écoute
// 3. et enfin appeller la fonction définie plus haut
mon2emeBouton.addEventListener("click", changerHtml);