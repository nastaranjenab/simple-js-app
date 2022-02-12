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
for (let i=0; i < pokemonList.length; i++){
    if(pokemonList[i].height > 1){
      document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )" + "Wow it`s a big pokemon!!!")
    }else {
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + " )")
  }}