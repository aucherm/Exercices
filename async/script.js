async function fetchOffers() {
    const response = await fetch("https://codepassport.dev/api/offers", {
        method: "GET", //récupération des données
        mode: "cors", // politique de cross-origin (appelle une API sur un autre domaine)
        headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()); //extrait le corps de la réponse et le transforme en objet JavaScript

    console.log(response); //affiche la valeur de response pour voir ce que renvoie l'API

    const container = document.getElementById("offers-container");

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