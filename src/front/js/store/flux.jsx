const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      pokemon_data: [],
    },
    actions: {
      PokemonFind: () => {//limit cambiarlo a 1154
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
          .then((response) => response.json())
          .then((data) =>{
              let pokemonsAll = getStore().pokemon
            pokemonsAll.push(data)
            setStore({pokemon: pokemonsAll})
            data.results.map((pokemon, i) => {
              let new_pokemon_data = getStore().pokemon_data;
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((allpokemon) => {
                  new_pokemon_data.push(allpokemon);
                  if(i+1 == new_pokemon_data.length){
                    new_pokemon_data = new_pokemon_data.sort((a, b) => a.id - b.id)
                    }
                  return setStore({ pokemon_data: new_pokemon_data });
                });
            })
        });
      },
    },
  };
};

export default getState;
