function repeatPhrase(phrase, nbRepetitions) {
    for (let i = 0; i < nbRepetitions; i++) {
        console.log(phrase);
    }
}

repeatPhrase("abracadabra", 3)


function calculPoints(pointsActuels,pointsAjoutés) { // function calculPoints(pointsActuels, pointsAjoutés) { 
    const total = pointsActuels + pointsAjoutés //rien
    console.log(`Vous avez ${total} points`) //return pointsActuels + pointsAjoutés

}//}

calculPoints(25, 56) //function calculPoints (pointsActuels,pointsAjoutés) {
//}

//const total = calculPoints(10,45)
//console.log(total)

function presentation(prenom,maison) {
    console.log(`${prenom} appartient à ${maison}`)

}

presentation ("Harry","Gryffondor") 

