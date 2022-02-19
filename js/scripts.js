let pokemonList=[
    {name:'Squirtle',
    height:0.5,
    types:['water']
},
{name:'Watchdog',
height:1.1,
types:['Normal']
},
{name:'Tepig',
height:0.5,
types:['Fire']
},
{name:'Minccino',
height:0.4,
types:['Normal']
},
]


let pokemonRepository = (function () {

let pokemonList=[
{name:'Squirtle',
height:0.5,
types:['water']
},
{name:'Watchdog',
height:1.1,
types:['Normal']
},
{name:'Tepig',
height:0.5,
types:['Fire']
},
{name:'Minccino',
height:0.4,
types:['Normal']
},
]

function getAll () {
  return pokemonList;
}
function add (pokemon) {
  pokemonList.push(pokemon);
}

  return {
    getAll: getAll,
    add: add
  }

  })()

  pokemonRepository.getAll().forEach(function(pokemon){
    document.write(pokemon.name + " with type: (" + pokemon.type + ") " + "and" + " (height :" + pokemon.height + ") <br>")
    });
    
    
    console.log(pokemonRepository.getAll());
    pokemonRepository.add({ name: 'Mareep' });
    console.log(pokemonRepository.getAll());