//Start of IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

//add new pokemon to pokemonList
function add(pokemon) {
  // "add" function adds pokemon to the "pokemonList" via the "push" function
  pokemonList.push(pokemon);
}
//return all pokemons
  function getAll() {
    return pokemonList;
  }
  
  //creates a button list of pokemon
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("list-group-item");
    
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.setAttribute('data-target', '#exampleModal');
    button.setAttribute('data-toggle', 'modal');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function() {
    showDetails(pokemon);
    });
    }

  function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(item) {
    loadDetails(item).then(function () {
       //console.log(item);
        showModal(item); // once you updated this one the modal appeared on screen on Pokemon click
      });
    }

    function findPokemon() {
      // Clear all the buttons on the page when user types in search box
      document.querySelector('.pokemon-list').empty();
  
      // Add pokemon buttons for which the name includes the search string
      /*repository.forEach((pokemon) => {
        if (properCasing(pokemon.name).indexOf(properCasing(searchName)) > -1) {
          addListItem(pokemon);
          
        }
      });*/
    }
        //creating a modal to overlay pokemon details on page
//specifying a title and content for the Modal
function showModal(item) {

  let modalBody = document.querySelector('.modal-body');
  let modalTitle = document.querySelector('.modal-title');
  
  modalBody.innerHTML = '';
  modalTitle.innerHTML = '';
  
  let titleElement = document.createElement('h1');
  titleElement.innerText = item.name;
  let contentElement = document.createElement('p');
  contentElement.innerText = item.height;
  let imageElement = document.createElement('img');
  imageElement.setAttribute("src", item.imageUrl);
  
  modalTitle.appendChild(titleElement);
  modalBody.appendChild(titleElement);
  modalBody.appendChild(contentElement);
  modalBody.appendChild(imageElement);
  
  }

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      findPokemon: findPokemon
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});