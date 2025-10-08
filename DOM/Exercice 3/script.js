let count = 0; // Crée une variable pour compter

const numbers = document.getElementById("counter"); //Récupère le bouton
//const numbers = document.querySelector("#counter");

numbers.addEventListener("click", () => { //Ajoute un événement "click" sur le bouton

  count++; // Incrémente le compteur
  //count+=1
 
  numbers.innerText = `${count} clics!`;  // Modifie le texte du bouton
  
});