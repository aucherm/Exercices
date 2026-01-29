/* let resultat = "";

function afficherEtoiles(n, suffixe = "") {
    let ligne = '';
    for (let i = 0; i < n; i++) {
        ligne += '*';
    }
    resultat += ligne + suffixe + "\n";
}

function afficherRectangle(hauteur, largeur, margeGauche = 0) {
    for (let i = 0; i <= hauteur; i++) {
        resultat += ' '.repeat(margeGauche) + '#'.repeat(largeur) + "\n";
    }
}

afficherRectangle(5, 5);


function afficherTriangleDroite(n) {
    for (let i = 1; i <= n; i++) {
        afficherEtoiles(i, "\\");
    }
}
afficherTriangleDroite(5);


function afficherTriangleGauche(n) {
    for (let i = 1; i <= n; i++) {
        let espaces = ' '.repeat(n - i);
        let etoiles = '*'.repeat(i - 1);
        resultat += (espaces + '/' + etoiles + "\n");
    }
}
afficherTriangleGauche(5)

function afficherPointSapin(n) {
    let espaces = ' '.repeat(n);
    resultat += espaces + "+\n";

    for (let i = 1; i <= n; i++) {
        let espaces = ' '.repeat(n - i);


        if (i === 1) {
            resultat += espaces + "/|\\" + "\n";
        } else {
            let etoiles = '*'.repeat(i - 1);
            resultat += espaces + '/' + etoiles + "|" + etoiles + '\\' + "\n";
        }
    }
}

afficherPointSapin(4);


function afficherEtage1(hauteur, pointe_offset) {
    let n = hauteur + pointe_offset;

    for (let i = 1 + pointe_offset; i <= hauteur + pointe_offset; i++) {
        let espaces = ' '.repeat(n - i);
        let etoiles = '*'.repeat(i - 1);

        resultat += espaces + '/' + etoiles + "|" + etoiles + '\\' + "\n";
    }
}

afficherEtage1(3, 0);
afficherEtage1(3, 1);
afficherEtage1(3, 2);


function afficherEtage(hauteur, pointe_offset, espacement) {
    let n = hauteur + pointe_offset;

    for (let i = 1 + pointe_offset; i <= hauteur + pointe_offset; i++) {
        let marge = ' '.repeat(espacement);
        let espaces = ' '.repeat(n - i);

        let interieur = "";
        let largeur = i - 1;

        for (let k = 0; k < largeur; k++) {
            let r = Math.random();

            if (r < 0.15) {
                interieur += 'o';
            } else if (r < 0.30) {
                interieur += '+';
            } else {
                interieur += '*';
            }
        }

        resultat += marge + espaces + '/' + interieur + "|" + interieur + '\\' + "\n";
    }
}

afficherEtage(3, 0, 3);
afficherEtage(3, 1, 2);
afficherEtage(3, 2, 1);
afficherEtage(3, 3, 0);


function afficherSapin(etages, hauteur_etage) {
    let pointe_offset = 0;
    let espacement = etages;

    let totalLargeur = hauteur_etage + etages - 1;
    let margeCentre = totalLargeur + 1;

    resultat += ' '.repeat(margeCentre) + "+\n";

    for (let e = 0; e < etages; e++) {
        afficherEtage(hauteur_etage, pointe_offset, espacement);
        pointe_offset += 1;
        espacement -= 1;
    }
    return margeCentre;
}

let centre = afficherSapin(3, 4);
afficherRectangle(2, 3, centre - Math.floor(3 / 2));

document.getElementById("resultat").innerHTML = resultat;


 */
///////////

/////////////////////
//////Etape 1.1//////
/////////////////////

function afficherEtoiles(n) {
    // console.log('*') pour afficher une etoile
    let etoile = "*".repeat(n);

    // à faire pour chaque n étoile !
    return etoile;
}

console.log(afficherEtoiles(2));
console.log(afficherEtoiles(5));

/////////////////////
//////Etape 1.2//////
/////////////////////

function afficherRectangle(hauteur, largeur) {
    // pour chaque "étage" de la hauteur
    let rectangle = "";
    for (let i = 0; i < hauteur; i++) {
        rectangle += afficherEtoiles(largeur) + "\n";
    }
    //    appeler printEtoile
    return rectangle;
}

console.log(afficherRectangle(5, 5));

/////////////////////
//////Etape 1.3//////
/////////////////////

function afficherTriangleDroite(n) {
    let triangleDroite = "";
    // En s'inspirant de la fonction afficherRectangle(),
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    for (let i = 0; i < n; i++) {
        triangleDroite += "*".repeat(i) + "\\\n";
    }
    return triangleDroite;
}

console.log(afficherTriangleDroite(5));

/////////////////////
//////Etape 1.4//////
/////////////////////

function afficherTriangleGauche(n) {
    // En s'inspirant de la fonction afficherTriangleDroite(),
    // comment aligner correctement les etoiles sur le bord de droite ?
    let triangleGauche = "";

    // En s'inspirant de la fonction afficherRectangle(),
    // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
    for (let i = 0; i < n; i++) {
        triangleGauche += " ".repeat(n - i) + "/" + "*".repeat(i) + "\n";
    }
    return triangleGauche;
}

console.log(afficherTriangleGauche(5));

/////////////////////
//////Etape 1.5//////
/////////////////////

function afficherPointeSapin(hauteur, pointe_offset) {
    let sapin = ""; //création une variable sapin qui est une chaine de caractère vide
    //    sapin += " ".repeat(hauteur + 1) + "+\n"; // affiche la pointe du sapin
    const trueHauteur = hauteur + pointe_offset
    for (let i = 0; i < trueHauteur; i++) {
        let space = " ".repeat(trueHauteur - i); //calcule le nombre d'esapces à gauche pour centrer la ligne
        let etoiles = "*".repeat(i); // création d'étoiles sur chaque position de i
        sapin += space + "/" + etoiles + "|" + etoiles + "\\\n"; // construction d'un ligne complète du sapin
    }

    return sapin; // renvoie tout le dessin du sapins sous forme de texte
}

console.log(afficherPointeSapin(3, 0));
console.log(afficherPointeSapin(3, 1));
console.log(afficherPointeSapin(3, 2));

////////////////////////////
//////Etape 2.1 + 2.2//////
//////////////////////////

function afficherEtage(hauteur, pointe_offset, espacement) {
    let sapin = ""; //création une variable sapin qui est une chaine de caractère vide
    //    sapin += " ".repeat(hauteur + 1) + "+\n"; // affiche la pointe du sapin
    if (pointe_offset < 0) {
        console.error("pointe offset doit être positif");
        return sapin;
    }
    const trueHauteur = hauteur + pointe_offset
    for (let i = pointe_offset; i < trueHauteur; i++) {
        let space = " ".repeat(trueHauteur - i + espacement); //calcule le nombre d'esapces à gauche pour centrer la ligne + ajout de l'espacement pour centrer
        let etoiles = "*".repeat(i); // création d'étoiles sur chaque position de i
        sapin += space + "/" + etoiles + "|" + etoiles + "\\\n"; // construction d'un ligne complète du sapin
    }

    return sapin; // renvoie tout le dessin du sapins sous forme de texte
};

/* console.log(afficherEtage(3, 0, 3) + afficherEtage(3, 1, 2) + afficherEtage(3, 2, 1) + afficherEtage(3, 3, 0)); */

//////////////////////
//////Etape 2.3//////
////////////////////

function afficherSapin(etages, hauteur_etage) {
let sapin = "";
    
    // Calculer l'espacement maximal nécessaire (basé sur le dernier étage le plus large)
    const espacement_max = hauteur_etage + etages - 1;
    
    // Pour chaque étage
    for (let i = 0; i < etages; i++) {
        // L'espacement diminue à mesure que les étages s'élargissent
        const espacement = espacement_max - (hauteur_etage + i - 1);
        
        // Appeler afficherEtage avec le bon pointe_offset et espacement
        sapin += afficherEtage(hauteur_etage, i, espacement);
    }
    
    return sapin;
}


console.log(afficherSapin(3, 3));