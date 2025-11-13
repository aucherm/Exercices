function generateUserReport(name, age, city, profession, isSubscriber) {
    const status = isSubscriber ? "Abonné.e" : "Non abonné.e";
    const category = age < 18
        ? "Jeune"
        : age < 69
            ? "Adulte"
            : "Senior";

    return `Rapport utilisateur.ice :
    Nom : ${name}
    Âge : ${age} ans 
    Ville : ${city}
    Profession : ${profession}
    Statut : ${status}
    Catégorie : ${category}
    `;

};

// test
const report = generateUserReport("Maëlle", 33, "Nantes", "Apprenante développeuse", false);
console.log(report);

