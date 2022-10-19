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
      single_type_data: {},
      grupo_huevo: [], //nombre del grupo y url del grupo
      grupo_huevo_data: [],
      nature: [],
      nature_data: [],
      ability: [],
      ability_data: [],
    },
    actions: {
      pokemonFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/pokemon/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ pokemon: data.results });
            setStore({ pokemon_data: [] });
            data.results.map((pokemon, i) => {
              let new_pokemon_data = getStore().pokemon_data;

              fetch(pokemon.url)
                .then((response) => response.json())
                .then((allpokemon) => {
          

                  new_pokemon_data.push(allpokemon);
                  if (i + 1 == new_pokemon_data.length) {
                    new_pokemon_data = new_pokemon_data.sort(
                      (a, b) => a.id - b.id
                    );
                  }
                 
                 
                  setStore({ pokemon_data: new_pokemon_data });
                });
            });
          });
      },
      groupFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
          .then((response) => response.json())
          .then((data) => {
        
            data.results.map((pokemon, i) => {

              fetch(pokemon.url)
                .then((response) => response.json())
                .then((allpokemon) => {
                  let sprites = allpokemon.sprites;
                  let pokemon_name = allpokemon.name;
                  let pokemon_id = allpokemon.id
                  
                  let new_pokemon_group = getStore().grupo_huevo_data;
               
                  fetch(allpokemon.species.url)
                    .then((response) => response.json())
                    .then((egg_group) => {
                      let description = ""
                      let group_name = [];
                      egg_group.egg_groups.map((group, i) => {
                        group_name.push(group.name);
                      });
                      egg_group.flavor_text_entries.map((desc, i) => {
                        if(desc.language.name == "es" && desc.version.name == "shield"){
                          description = desc.flavor_text
                        }
                      });
                      let grou = {
                        img: sprites,
                        group_name: group_name,
                        pokemon_name: pokemon_name,
                        pokemon_id: pokemon_id,
                        description: description
                      };
                   
                      new_pokemon_group.push(grou);
                    
                      setStore({ grupo_huevo_data: new_pokemon_group });
                    });
                });
            });
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
        let pokemon = getStore().pokemon_data.find((e) => e == id);
        setStore({ pokemonFounded: pokemon });
        if (pokemon) return true;
        else return false;
      },
      pokemonDataLocalStorage: (pokemon_data) => {
        setStore({ pokemon_data });
      },
      groupDataLocalStorage: (grupo_huevo_data) => {
        setStore({ grupo_huevo_data });
      },
      pokemonLocalStorage: (pokemon) => {
        setStore({ pokemon });
      },
      itemFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/item/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ item: data });
            setStore({ item_data: [] });
            data.results.map((item, i) => {
              let new_item_data = getStore().item_data;
              fetch(item.url)
                .then((response) => response.json())
                .then((allitem) => {
                  new_item_data.push(allitem);
                  if (i + 1 == new_item_data.length) {
                    new_item_data = new_item_data.sort((a, b) => a.id - b.id);
                  }
                  
        
                  setStore({ item_data: new_item_data });
                });
            });
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
        let item = getStore().item_data.find((e) => e == id);
        setStore({ itemFounded: item });
        if (item) return true;
        else return false;
      },
      itemDataLocalStorage: (item_data) => {
        setStore({ item_data });
      },
      itemLocalStorage: (item) => {
        setStore({ item });
      },
      moveFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/move/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ move: data });
            setStore({ move_data: [] });
            data.results.map((move, i) => {
              let new_move_data = getStore().move_data;
              fetch(move.url)
                .then((response) => response.json())
                .then((allmove) => {
                  new_move_data.push(allmove);
                  if (i + 1 == new_move_data.length) {
                    new_move_data = new_move_data.sort((a, b) => a.id - b.id);
                  }
                
               
                  setStore({ move_data: new_move_data });
                });
            });
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
        let move = getStore().move_data.find((e) => e == id);
        setStore({ moveFounded: move });
        if (move) return true;
        else return false;
      },
      moveDataLocalStorage: (move_data) => {
        setStore({ move_data });
      },
      moveLocalStorage: (move) => {
        setStore({ move });
      },
      typeFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/type/")
          .then((response) => response.json()) //asd
          .then((data) => {
            setStore({ type: data });
            setStore({ type_data: [] });
            data.results.map((type, i) => {
              let new_type_data = getStore().type_data;
              fetch(type.url)
                .then((response) => response.json())
                .then((alltype) => {
                  new_type_data.push(alltype);
                  if (i + 1 == new_type_data.length) {
                    new_type_data = new_type_data.sort((a, b) => a.id - b.id);
                  }
                
                  
                  setStore({ type_data: new_type_data });
                });
            });
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
        setStore({ type_data });
      },
      typeLocalStorage: (type) => {
        setStore({ type });
      },
      natureFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/nature/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ nature: data.results });
            setStore({ nature_data: [] });
            data.results.map((nature, i) => {
              let new_nature_data = getStore().nature_data;

              fetch(nature.url)
                .then((response) => response.json())
                .then((allnature) => {
          

                  new_nature_data.push(allnature);
                  if (i + 1 == new_nature_data.length) {
                    new_nature_data = new_nature_data.sort(
                      (a, b) => a.id - b.id
                    );
                  }
                 
                 
                  setStore({ nature_data: new_nature_data });
                });
            });
          });
      },
      abilityFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/ability/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ ability: data.results });
            setStore({ ability_data: [] });
            data.results.map((ability, i) => {
              let new_ability_data = getStore().ability_data;

              fetch(ability.url)
                .then((response) => response.json())
                .then((allability) => {
          

                  new_ability_data.push(allability);
                  if (i + 1 == new_ability_data.length) {
                    new_ability_data = new_ability_data.sort(
                      (a, b) => a.id - b.id
                    );
                  }
                 
                 
                  setStore({ ability_data: new_ability_data });
                });
            });
          });
      }
    },
  };
};

export default getState;
