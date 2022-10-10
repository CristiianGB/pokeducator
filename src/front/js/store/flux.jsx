const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      pokemon_data: [],
      single_pokemon_data: {},
      item: [],
      item_data: [],
      single_item_data: {},
      move: [],
      move_data: [],
      single_move_data: {}, 
      type: [],
      type_data: [], 
      single_type_data: {}
    },
    actions: {
      pokemonFind: (next) => {
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
      }, 
      itemFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/item/")
          .then((response) => response.json())
          .then((data) =>{
            setStore({item: data})
            setStore({item_data:[]})
            data.results.map((item, i) => {
              let new_item_data = getStore().item_data;
              fetch(item.url)
                .then((response) => response.json())
                .then((allitem) => {
                  new_item_data.push(allitem);
                  if(i+1 == new_item_data.length){
                    new_item_data = new_item_data.sort((a, b) => a.id - b.id)
                    }
                    localStorage.setItem("item_data" , JSON.stringify(new_item_data))
                    localStorage.setItem("item" , JSON.stringify(data))
                  setStore({ item_data: new_item_data });
                });
            })
        });
      },
      itemFindOne: (url) => {
        fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  setStore({ single_item_data: data });
                });
      },
      itemFindOneInData: (id) => {
        let item = getStore().item_data.find((e)=>e==id)
        setStore({itemFounded: item})
        if(item) return true
        else return false
        
      },
      itemDataLocalStorage: (item_data) => {
        setStore({item_data})
      },
      itemLocalStorage: (item) => {
        setStore({item})
      },
      moveFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/move/")
          .then((response) => response.json())
          .then((data) =>{
            setStore({move: data})
            setStore({move_data:[]})
            data.results.map((move, i) => {
              let new_move_data = getStore().move_data;
              fetch(move.url)
                .then((response) => response.json())
                .then((allmove) => {
                  new_move_data.push(allmove);
                  if(i+1 == new_move_data.length){
                    new_move_data = new_move_data.sort((a, b) => a.id - b.id)
                    }
                    localStorage.setItem("move_data" , JSON.stringify(new_move_data))
                    localStorage.setItem("move" , JSON.stringify(data))
                  setStore({ move_data: new_move_data });
                });
            })
        });
      },
      moveFindOne: (url) => {
        fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  setStore({ single_move_data: data });
                });
      },
      moveFindOneInData: (id) => {
        let move = getStore().move_data.find((e)=>e==id)
        setStore({moveFounded: move})
        if(move) return true
        else return false
        
      },
      moveDataLocalStorage: (move_data) => {
        setStore({move_data})
      },
      moveLocalStorage: (move) => {
        setStore({move})
      },
      typeFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/type/")
          .then((response) => response.json())//asd
          .then((data) =>{
            setStore({type: data})
            setStore({type_data:[]})
            data.results.map((type, i) => {
              let new_type_data = getStore().type_data;
              fetch(type.url)
                .then((response) => response.json())
                .then((alltype) => {
                  new_type_data.push(alltype);
                  if(i+1 == new_type_data.length){
                    new_type_data = new_type_data.sort((a, b) => a.id - b.id)
                    }
                    localStorage.setItem("type_data" , JSON.stringify(new_type_data))
                    localStorage.setItem("type" , JSON.stringify(data))
                  setStore({ type_data: new_type_data });
                });
            })
        });
      },
      typeFindOne: (url) => {
        fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  setStore({ single_type_data: data });
                });
      },
      typeDataLocalStorage: (type_data) => {
        setStore({type_data})
      },
      typeLocalStorage: (type) => {
        setStore({type})
      }
    },
  };
};

export default getState;
