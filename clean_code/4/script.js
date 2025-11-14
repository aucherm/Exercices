/* 

CODE DE BASE

    const fetchWeather = async () => {
    const LAT_PARIS = 48.8534;
    const LONG_PARIS = 2.3488;

    let resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT_PARIS}&longitude=${LONG_PARIS}&current=temperature_2m,rain`)

    let json = await resp.json()

    console.log(json.current.rain)
    document.getElementById("pluie_paris").innerHTML = "<strong>" + json.current.rain + "</strong>"
    document.getElementById("degres_paris").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"


    const LAT_LYON = 45.75;
    const LONG_LYON = 4.85;

    resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT_LYON}&longitude=${LONG_LYON}&current=temperature_2m,rain`)

    json = await resp.json()

    console.log(json.current.rain)
    document.getElementById("pluie_lyon").innerHTML = "<strong>" + json.current.rain + "</strong>"
    document.getElementById("degres_lyon").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"

    const LAT_NANTES = 47.2173;
    const LONG_NANTES = -1.5534;

    resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT_NANTES}&longitude=${LONG_NANTES}&current=temperature_2m,rain`)

    json = await resp.json()

    console.log(json.current.rain)
    document.getElementById("pluie_nantes").innerHTML = "<strong>" + json.current.rain + "</strong>"
    document.getElementById("degres_nantes").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"

    const LAT_MARSEILLE = 43.3;
    const LONG_MARSEILLE = 5.4;

    resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT_MARSEILLE}&longitude=${LONG_MARSEILLE}&current=temperature_2m,rain`)

    json = await resp.json()

    console.log(json.current.rain)
    document.getElementById("pluie_marseille").innerHTML = "<strong>" + json.current.rain + "</strong>"
    document.getElementById("degres_marseille").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"

    const LAT_LILLE = 50.633333;
    const LONG_LILLE = 3.066667;

    resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT_LILLE}&longitude=${LONG_LILLE}&current=temperature_2m,rain`)

    json = await resp.json()

    console.log(json.current.temperature_2m)
    document.getElementById("pluie_lille").innerHTML = "<strong>" + json.current.rain + "</strong>"
    document.getElementById("degres_lille").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
}

fetchWeather();
*/


/*
Ce qu'il faut faire pour refactorer 

1. Créer une constante cities qui regroupe toutes les villes dans un tableau avec nom, latitude et longitutde
2. Créer une fonction updateWeatherForCity(city) qui appelle l'API météo, récupère les données et met à jour le DOM
3. Créer une fonction fetchAllWeather() qui parcourt cities, appelle updateWatherForCity pour chaque ville
4. Appeler fetchAllWeather()
*/

const cities = [
    { name: "paris", lat: 48.8534, lon: 2.3488 },
    { name: "lyon", lat: 45.75, lon: 4.85 },
    { name: "nantes", lat: 47.2173, lon: -1.5534 },
    { name: "marseille", lat: 43.3, lon: 5.4 },
    { name: "lille", lat: 50.633333, lon: 3.066667 },
];

async function updateWeatherForCity(city) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,rain`;
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById(`pluie_${city.name}`).innerHTML =
            `<strong>${data.current.rain}</strong>`;

        document.getElementById(`degres_${city.name}`).innerHTML =
            `<strong>${data.current.temperature_2m}</strong>`;

    } catch (error) {
        console.error(`Erreur lors de la récupération pour ${city.name} :`,)
    }
}

async function fetchAllWeather() {
    for (const city of cities) {
        await updateWeatherForCity(city);
    }
}

fetchAllWeather();

