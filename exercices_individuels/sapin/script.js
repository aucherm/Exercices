let resultat = "";

function afficherEtoiles(n, suffixe = "") {
    let ligne = '';
    for (let i = 0; i < n; i++) {
        ligne += '*';
    }
    resultat += ligne + suffixe + "\n";
}

function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i <= hauteur; i++) {
        afficherEtoiles(largeur);
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


document.getElementById("resultat").innerHTML = resultat;





/* 
    let troncEspaces = ' '.repeat(n);
    resultat += troncEspaces + "|\n"; */


































/* function afficherSapin(etages, hauteurEtage) {
    let largeurMax = etages + hauteurEtage;

    resultat += ' '.repeat(largeurMax + 1) + '+' + '\n';

    resultat += ' '.repeat(largeurMax) + '/|\\' + '\n';

    for (let e = 1; e <= etages; e++) {
        let baseEtage = e - 1;

        for (let h = 1; h <= hauteurEtage; h++) {
            if (e === 1 && h === 0) continue;
            let largeur = baseEtage + h;
            let espaces = ' '.repeat(largeurMax - largeur);
            let etoiles = '*'.repeat(largeur);

            resultat += espaces + '/' + etoiles + '|' + etoiles + '\\' + '\n';
        }
    }
}

afficherSapin(3, 3);
 */

