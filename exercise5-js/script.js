// <!-- Ana Cristina Silva de Oliveira 11965630
// Paulo Henrique dos Santos Almeida 12543926
// Turma 2 -->
let cities = [
    {
        "name": "Rio de Janeiro",
        "population": 1000000,
        "temperature": 30,
        "weatherDescription": "Sunny"
    },

    {
        "name": "Catanduva",
        "population": 50000,
        "temperature": 25,
        "weatherDescription": "Winter"
    },

    {
        "name": "Osasco",
        "population": 122000,
        "temperature": 50,
        "weatherDescription": "Haze"
    }
];

function sortCities(cities) {
    cities.sort((a, b) => a.name < b.name ? -1 : 1);
    return cities
}

function displayCities(cities) {
    document.getElementById("demo").innerHTML =
    cities[0].name + "<br>" +
    cities[1].name +  "<br>" +
    cities[2].name;
}

let sortedCities = sortCities(cities);
displayCities(sortedCities);