const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemon:[], // Éder esta buenorro
			pokemon_data: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
			fetchPokeapiPokemon: () => {
				fetch("https://pokeapi.co/api/v2/pokemon", {
				  method: "GET",
				  headers: { "Content-type": "application/json" },
				})
				.then((response) => {
					if (response.ok){
						return response.json()

					}
					throw new Error("no se ha podido acceder a la api")
				  })
				  .then((data) => {
					data.results.map( async (pokemon) => {
						await getActions().fetchPokeapiPokemonId(pokemon.url)
					})
					setStore({ pokemon: data.results })})
				  .catch((err) => console.error(err.message))
			},
			fetchPokeapiPokemonId: (url) => {
				fetch(url, {
				  method: "GET",
				  headers: { "Content-type": "application/json" },
				})
				  .then((response) => {
					if (response.ok){
						return response.json()
					}
					throw new Error("no se ha podido acceder a la api")
				  })
				  .then((data) => {
					let new_pokemon_data = getStore().pokemon_data
					new_pokemon_data.push(data)
					setStore({ pokemon_data: new_pokemon_data })
				})
				  .catch((err) => console.error(err.message));
			}
		}
	};
};

export default getState;
