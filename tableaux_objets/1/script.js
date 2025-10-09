const books = [

    {
        id: 1,
        title: "JavaScript for Beginners",
        author: "Alice Martin",
        year: 2020,
        pages: 300,
        genre: "programming",
        rating: 4.2
    },

    {
        id: 2,
        title: "Advanced React",
        author: "Bob Dupont",
        year: 2021,
        pages: 450,
        genre: "programming",
        rating: 4.5
    },


    {
        id: 3,
        title: "Art History",
        author: "Claire Leroy",
        year: 2019,
        pages: 280,
        genre: "art",
        rating: 3.8
    },

    {
        id: 4,
        title: "Python Data Science",
        author: "David Moreau",
        year: 2022,
        pages: 520,
        genre: "programming",
        rating: 4.7
    },

    {
        id: 5,
        title: "Design Patterns",
        author: "Alice Martin",
        year: 2018,
        pages: 320,
        genre: "programming",
        rating: 4.1
    },

    {
        id: 6,
        title: "Modern Painting",
        author: "Emma Laurent",
        year: 2020,
        pages: 190,
        genre: "art",
        rating: 3.9
    }
];

//1 Trouver tous les livres d'une autrice donné (Alice Martin)
function findBooksByAuthor(author) {

    for (i = 0; i < books.length; i++) {
        if (books[i].author === author) {
            console.log(books[i].title);
        }
    }
}
findBooksByAuthor("Alice Martin");

//2 Calculer la moyenne des pages par genre
function averagePagesByGenre(genre) {
    let moyenne = 0; //départ de la recherche, on débute à 0
    let nb = 0; //départ de la recherche, on débute à 0

    for (i = 0; i < books.length; i++) {
        if (books[i].genre === (genre)) {
            moyenne += books[i].pages;
            nb++;
        }
    }
    console.log(moyenne / nb);
}

averagePagesByGenre("programming");
averagePagesByGenre("art");

//3 Trouver le livre le plus récent
function newestBook() {
    let temp = 0;
    let result;

    for (i = 0; i < books.length; i++) {
        if (books[i].year > temp) {
            temp = books[i].year;
            result = books[i].title;
        }
    }
    console.log(result, temp);
}

newestBook();

//4 Créer une liste unique de tou.te.s les auteur.ice.s
function listOfAllAuthors(author) {
    let list = []; //création d'une liste vide qu'on rempliera
    for (i = 0; i < books.length; i++) {
        list.push(books[i].author);
    }
    console.log(list);
}
listOfAllAuthors();


//5 Grouper les livres par genre
function booksByGenre(genre){
  for(i = 0; i < books.length; i++){
    if(books[i].genre === (genre))
        {
      console.log(books[i].title)
    }
  }
}

booksByGenre("programming")
booksByGenre("art")