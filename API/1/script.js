//Book Store API

//`<https://bookstore-api-six.vercel.app/api/books>` pour tous les livres;
//`<https://bookstore-api-six.vercel.app/api/books/1>` pour le livre #1;
//`<https://bookstore-api-six.vercel.app/api/books/5>` pour le livre #5;

// afficher informations livre numéro 5

async function displayBooks() {
    try {

        //récupération livre 1
        const response1 = await fetch('https://bookstore-api-six.vercel.app/api/books/1');
        const book1 = await response1.json();

        //récupération livre 5
        const response5 = await fetch('https://bookstore-api-six.vercel.app/api/books/5');
        const book5 = await response5.json();

        document.getElementById('book-list').innerHTML = `
      <li>
        Titre: ${book1.title}<br>
        Auteur: ${book1.author}<br>
        Date de publication: ${book1.publishedDate}<br>
        Description: ${book1.description}<br>
        Nombre de pages: ${book1.pageCount}<br>
      </li>

      <li>
        Titre: ${book5.title}<br>
        Auteur: ${book5.author}<br>
        Date de publication: ${book5.publishedDate}<br>
        Description: ${book5.description}<br>
        Nombre de pages: ${book5.pageCount}<br>
      </li>
    `;
    } catch (err) {
        console.error(err);
    }
}

displayBooks();