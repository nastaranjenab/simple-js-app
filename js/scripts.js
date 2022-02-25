let pokemonRepository = (function () {

    let pokemonList = [{
        name: 'Squirtle',
        height: 0.5,
        types: ['water']
    },
    {
        name: 'Watchdog',
        height: 1.1,
        types: ['Normal']
    },
    {
        name: 'Tepig',
        height: 0.5,
        types: ['Fire']
    },
    {
        name: 'Minccino',
        height: 0.4,
        types: ['Normal']
    },
    ]

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //the showDetails() function is executed when a user clicks on a Pokémon and you get the Pokémon’s details from Array
    function showDetails(pokemon) {
        console.log(pokemon.name);
    };

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

console.log(pokemonRepository.getAll());

//add one more object to the array
pokemonRepository.add({
    name: 'Mareep'
});
console.log(pokemonRepository.getAll());

//manipulation DOM
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
