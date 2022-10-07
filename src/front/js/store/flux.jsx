const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      pokemon_data: [],
      single_pokemon_data: {}
    },
    actions: {
      pokemonFind: (next) => {//limit cambiarlo a 1154
        fetch(next ? next : "https://pokeapi.co/api/v2/pokemon/")
          .then((response) => response.json())
          .then((data) =>{
            setStore({pokemon: data})
            setStore({pokemon_data:[]})
            data.results.map((pokemon, i) => {
              let new_pokemon_data = getStore().pokemon_data;
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((allpokemon) => {
                  new_pokemon_data.push(allpokemon);
                  if(i+1 == new_pokemon_data.length){
                    new_pokemon_data = new_pokemon_data.sort((a, b) => a.id - b.id)
                    }
                    localStorage.setItem("pokemon_data" , JSON.stringify(new_pokemon_data))
                    localStorage.setItem("pokemon" , JSON.stringify(data))
                  setStore({ pokemon_data: new_pokemon_data });
                });
            })
        });
      },
      pokemonFindOne: (url) => {
        fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  setStore({ single_pokemon_data: data });
                });
      },
      pokemonFindOneInData: (id) => {
        let pokemon = getStore().pokemon_data.find((e)=>e==id)
        setStore({pokemonFounded: pokemon})
        if(pokemon)return true
        else return false
        
      },
      pokemonDataLocalStorage: (pokemon_data) => {
        setStore({pokemon_data})
      },
      pokemonLocalStorage: (pokemon) => {
        setStore({pokemon})
      }
    },
  };
};

export default getState;
