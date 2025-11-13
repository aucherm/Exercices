let currentQuery = "fantasy"; 
let startIndex = 0;
const maxResults = 10;

// Fonction appelée au chargement de la page
window.onload = fetchBooks;

async function fetchBooks() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(currentQuery)}&startIndex=${startIndex}&maxResults=${maxResults}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        data.items.forEach(item => {
            const book = item.volumeInfo;
            const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/128x180?text=Pas+d'image";
            const div = document.createElement("div");
            div.className = "book";
            div.innerHTML = `
            <img src="${thumbnail}" alt="Couverture">
            <h3>${book.title}</h3>
            <p>${book.authors ? book.authors.join(", ") : "Auteur inconnu"}</p>
          `;
            resultsDiv.appendChild(div);
        });

        document.getElementById("prevBtn").disabled = startIndex === 0;
        document.getElementById("nextBtn").disabled = data.items.length < maxResults;

    } catch (error) {
        console.error("Erreur :", error);
    }
}

async function searchBooks() {
    const query = document.getElementById("searchInput").value.trim();
    currentQuery = query || "fantasy"; 
    startIndex = 0;
    await fetchBooks();
}

function changePage(direction) {
    startIndex += direction * maxResults;
    if (startIndex < 0) startIndex = 0;
    fetchBooks();


    const page = Math.floor(startIndex / maxResults) + 1;
    const params = new URLSearchParams({ q: currentQuery, page });
    window.history.replaceState({}, "", `?${params.toString()}`);
}