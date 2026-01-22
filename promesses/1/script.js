async function fetchPokemonWeight(pokemonName) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // fetch the api
    const data = await res.json(); // get the response as json
    return data.weight / 10; // convert weight to kg
}

async function checkLuggageLimit() {
    const startTime = performance.now();

    const pokemons = ["snorlax", "pikachu", "ditto", "bulbasaur"];

    try {
        const weights = await Promise.all(
            pokemons.map(name => fetchPokemonWeight(name.toLowerCase())));
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

        console.log(`Total weight: ${totalWeight}kg`);
        console.log(`Execution time: ${performance.now() - startTime}ms `);
    } catch (error) {
        console.error(`Erreur lors de la récupération des pokémon:`, error);
    }
}


checkLuggageLimit();
