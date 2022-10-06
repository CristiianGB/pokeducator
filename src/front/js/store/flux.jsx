const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      pokemon_data: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      PokemonFind: () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((response) => response.json())
          .then((data) =>
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
          );
      },
    },
  };
};

export default getState;
