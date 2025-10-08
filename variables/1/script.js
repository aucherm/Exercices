// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let price1 = 10;
let price2 = 20;
// Nous calculons le total
let total = price1 + price2;
// Prix d'un troisieme article
let price3 = 50;
// Nous ajoutons a3 au total
total = total + price3;

console.log("Le prix total avant reduction est de : ", total);


//Nous appliquons 20% de reduction
let total2 = total - total*0.2 ;

console.log("Le prix total après reduction est de : ", total2);

//erreurs :
//unexpeced number 2 => changer la virgule en point (0,2 =>0.2)
//changer la variable "const" en "let" ligne 6 afin de pouvoir faire le calcul suivant
//erreur de référence = déplacer le second console.log après le calcul de réduction afin de pouvoir le réaliser
//supprimer les guillemets ligne 8 autour du nombre 50
//ajouter partout des points virgules en fin de ligne