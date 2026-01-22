let resultat = "";

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



