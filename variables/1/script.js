// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10;
let a2 = 20;
// Nous calculons le total
let tot = a1 + a2;
// Prix d'un troisieme article
let a3 = 50;
// Nous ajoutons a3 au total
tot = tot + a3;

console.log("Le prix total avant reduction est de : ", tot);


//Nous appliquons 20% de reduction
let tot2 = tot - tot*0.2 ;

console.log("Le prix total après reduction est de : ", tot2);

//erreurs :
//unexpeced number 2 => changer la virgule en point (0,2 =>0.2)
//changer la variable "const" en "let" ligne 6 afin de pouvoir faire le calcul suivant
//erreur de référence = déplacer le second console.log après le calcul de réduction afin de pouvoir le réaliser
//supprimer les guillemets ligne 8 autour du nombre 50
//ajouter partout des points virgules en fin de ligne