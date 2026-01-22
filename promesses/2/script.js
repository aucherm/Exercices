async function fetchDisneyCharacter(characterName) {
    const res = await fetch(`https://api.disneyapi.dev/character?name=${characterName}`);
    const data = await res.json(); 
    const character = data.data[0];
    return character.films.lenth;
}

async function checkAppearances() {
    const startTime = performance.now();

    const characters = [
        "Mickey Mouse",

    ];

    try {
        const moviesCounts = await Promise.all(
            characters.map(name => fetchDisneyCharacter(name))
        );
        const totalMovies = moviesCounts.reduce((sum, count) => sum + count, 0);

        console.log(`Nombre d'apparitions dans des films: ${totalMovies}`);
    } catch (error) {
        console.error(`Erreur lors de la récupération des données:`, error);
    }
}

fetchDisneyCharacter();