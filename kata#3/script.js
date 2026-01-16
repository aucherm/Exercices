const penCalendar = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

function drawMyPen (month) {

    const stages = penCalendar[month];

    const monthWithTwoErasers =['septembre','octobre','novembre','décembre','janvier','février'];
    const eraserTwoStages = monthWithTwoErasers.includes(month);

    let pen = ' /\\\n';
    pen += '/__\\\n';

    for (let i = 0; i < stages; i++) {
        pen += '||||\n';
    }

    pen +='|__|\n';
    if (eraserTwoStages) {
        pen += '|  |\n';
        pen += '|__|';
    } else {
        pen += '|__|';
    }
return pen;
}

  function updateCrayon(mois) {
            const crayonDisplay = document.getElementById('crayon-display');
            const titreMois = document.getElementById('titre-mois');
            const infoCrayon = document.getElementById('info-crayon');
            
            const crayon = drawMyPen(mois);
            crayonDisplay.textContent = crayon;
            
            const moisCapitalize = mois.charAt(0).toUpperCase() + mois.slice(1);
            titreMois.textContent = `Crayon en ${moisCapitalize}`;
            
            const etages = calendrierDuCrayon[mois];
            const moisAvecGomme2Etages = ['septembre', 'octobre', 'novembre', 'decembre', 'janvier', 'fevrier'];
            const nbEtagesGomme = moisAvecGomme2Etages.includes(mois) ? 2 : 1;
            
            infoCrayon.textContent = `${etages} étage${etages > 1 ? 's' : ''} • Gomme à ${nbEtagesGomme} étage${nbEtagesGomme > 1 ? 's' : ''}`;
        }

        const selectElement = document.getElementById('mois-select');
        selectElement.addEventListener('change', (e) => {
            updateCrayon(e.target.value);
        });