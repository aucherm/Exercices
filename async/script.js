// Exercice 1 : Générer du HTML à partir de la donnée

// Exercice 2 : Gérer l'état de chargement : ajouter message ("container.innerHTML")

async function fetchOffers() {

    const container = document.getElementById("offers-container");

    container.innerHTML = "<p>Chargement des offres...</p>"

    const response = await fetch("https://codepassport.dev/api/offers", {
        method: "GET", //récupération des données
        mode: "cors", // politique de cross-origin (appelle une API sur un autre domaine)
        headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()); //extrait le corps de la réponse et le transforme en objet JavaScript

    console.log(response); //affiche la valeur de response pour voir ce que renvoie l'API

    container.innerHTML = "";

    // Génération du HTML à partir de la donnée
    response.forEach((offer) => {
        container.innerHTML += `
          <div class="offer">
            <p>${offer.description}</p>
          </div>
        `;
    });
}
fetchOffers();