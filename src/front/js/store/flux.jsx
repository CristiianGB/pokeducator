import React, { useContext, useEffect, useState } from "react";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      pokemon_data: [],
      single_pokemon_data: [],
      item_data: [],
      single_item_data: [],
      move_data: [],
      single_move_data: [],
      nature_data: [],
      ability_data: [],
      single_ability_data: [],
      pokemon_fusion_data: [],
      single_fusion_data: [],
      votes: [],
      favorites: [],
      user_id: null,
      equipos: [],
    },
    actions: {
      login: async (username, password) => {
        const store = getStore();


        const resp =  fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/login/"+username+"/"+password
     
          
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
          
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
 
            setStore({ token: data.token });
            setStore({ user_id: data.user_id });
          });

      },
      getProfile: () => {
        
        
        const token = localStorage.token;
        console.log(token)
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/protected",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.token,
            },
           
          }
        )
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            data.msg ? "" : getActions().idStorage(localStorage.user_id);
            
            return setStore({ user: data });
          });
      },
      pokemonFindDb: () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
          .then((response) => response.json())
          .then((data) => {
            data.results.map((pokemon) => {
              let new_pokemon_data = getStore().pokemon_data;

              fetch(pokemon.url)
                .then((response) => response.json())
                .then((pokeinfo) => {
                  let description;
                  let group_name = [];
                  let evolution;
                  let weakness;

                  pokeinfo.types.map((elemento) =>
                    elemento.slot == 1
                      ? fetch(elemento.type.url)
                          .then((response) => response.json())
                          .then((debilidad) => {
                            let debil = [];
                            debilidad.damage_relations.double_damage_from.map(
                              (elemento) => debil.push(elemento.name)
                            );
                            weakness = { weakness: debil };
                          })
                      : ""
                  );

                  fetch(pokeinfo.species.url)
                    .then((response) => response.json())
                    .then((speci) => {
                      let evol = [];
                      fetch(speci.evolution_chain.url)
                        .then((response) => response.json())
                        .then((evoluciones) => {
                          evoluciones.chain.species.name
                            ? evol.push(evoluciones.chain.species.name)
                            : "";
                          evoluciones.chain.evolves_to[0]?.species?.name
                            ? evol.push(
                                evoluciones.chain.evolves_to[0]?.species?.name
                              )
                            : "";
                          evoluciones.chain.evolves_to[0]?.evolves_to[0]
                            ?.species?.name
                            ? evol.push(
                                evoluciones.chain.evolves_to[0]?.evolves_to[0]
                                  ?.species?.name
                              )
                            : console.log(evoluciones.chain);
                        });

                      evolution = { evolution: evol };

                      speci.flavor_text_entries.map((descri) => {
                        if (
                          descri.language.name == "es" &&
                          (descri.version.name == "shield" ||
                            descri.version.name == "y" ||
                            descri.version.name == "sun")
                        ) {
                          description = { description: descri.flavor_text };
                        }
                      });
                      speci.egg_groups.map((group, i) => {
                        group_name.push(group.name);
                      });
                      group_name = { group_name: group_name };
                    })

                    .finally(() => {
                      Object.assign(pokeinfo, description);
                      Object.assign(pokeinfo, group_name);
                      Object.assign(pokeinfo, evolution);
                      Object.assign(pokeinfo, weakness);

                      new_pokemon_data.push(pokeinfo);
                      setStore({ pokemon_data: new_pokemon_data });
                    });
                });
            });
          })
          .finally(() => {
            setTimeout(() => {
              getActions().savePokemonOnDb();
            }, 9000);
          });
      },
      savePokemonOnDb: () => {
        let new_pokemon_data = getStore().pokemon_data;

        const sortedData = new_pokemon_data.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });

        console.log(sortedData.length);

        sortedData.map((pokemon) => {
          let description = pokemon.description;
          let group_name = pokemon.group_name;
          let evolution = pokemon.evolution;
          let weakness = pokemon.weakness;
          let height = pokemon.height;
          let order = pokemon.order;
          let atk;
          let defens;
          let sp_atk;
          let sp_defens;
          let ps;
          let spd;
          let learning = [];

          pokemon.stats.map((element) => {
            let name = element.stat.name;
            let base = element.base_stat;
            name == "hp"
              ? (ps = base)
              : name == "attack"
              ? (atk = base)
              : name == "defense"
              ? (defens = base)
              : name == "special-attack"
              ? (sp_atk = base)
              : name == "special-defense"
              ? (sp_defens = base)
              : name == "speed"
              ? (spd = base)
              : "";
          });

          let weight = pokemon.weight;
          let types = [];
          let id = pokemon.id;
          let shiny = pokemon.sprites?.front_shiny;
          let url = "https://pokeapi.co/api/v2/pokemon/" + id;
          let img = pokemon.sprites?.other?.["official-artwork"]?.front_default
            ? pokemon.sprites?.other?.["official-artwork"]?.front_default
            : pokemon.sprites?.versions?.["generation-vii"]?.[
                "ultra-sun-ultra-moon"
              ].front_default
            ? pokemon.sprites?.versions?.["generation-vii"]?.[
                "ultra-sun-ultra-moon"
              ].front_default
            : pokemon.sprites?.versions?.["generation-vi"]?.["x-y"]
                .front_default
            ? pokemon.sprites?.versions?.["generation-vi"]?.["x-y"]
                .front_default
            : pokemon.sprites?.other?.home?.front_default
            ? pokemon.sprites?.other?.home?.front_default
            : "";

          pokemon.types.forEach((element) => {
            types.push(element.type.name);
          });

          pokemon.moves.map((obj) => {
            let mo = obj.move.url.split("/");
            learning.push(mo[mo.length - 2]);
          });

          const resp = fetch(
            "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/createPokemon",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: id,
                name: pokemon.name,
                img: img,
                shiny: shiny,
                type: types,
                url: url,
                weight: weight,
                height: height,
                ps: ps,
                atk: atk,
                sp_atk: sp_atk,
                defens: defens,
                sp_defens: sp_defens,
                spd: spd,
                description: description,
                order: order,
                learning: learning,
                group_name: group_name,
                evolution: evolution,
                weakness: weakness,
              }),
            }
          );
        });
      },

      saveItemonDb: () => {
        fetch("https://pokeapi.co/api/v2/item/?offset=0&limit=1608")
          .then((response) => response.json())
          .then((allitem) => {
            allitem.results.map((item) => {
              let description;
              let name;
              let id;
              let cost;
              let img;
              fetch(item.url)
                .then((response) => response.json())
                .then((data) => {
                  data.flavor_text_entries.map((desc) => {
                    desc.language.name == "es" ? (description = desc.text) : "";
                  });
                  id = data.id;
                  cost = data.cost;
                  data.names.map((elem) => {
                    elem.language.name == "es" ? (name = elem.name) : "";
                  });
                  name == null ? (name = "nullo") : "";
                  img = data.sprites.default;
                })
                .finally(() => {
                  fetch(
                    "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/createItem",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        id: id,
                        name: name,
                        description: description,
                        img: img,
                        cost: cost,
                      }),
                    }
                  );
                });
            });
          });
      },

      saveDbonStore: () => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/store"
        )
          .then((response) => response.json())
          .then((store) => {
            store.pokemons.map((poke) => {
              let stat = [];
              for (let i in poke.stats) {
                stat.push(poke.stats[i]);
              }
              poke.stats = stat;
            });

            store.pokemonsfusion.map((poke) => {
              let stat = [];
              for (let i in poke.stats) {
                stat.push(poke.stats[i]);
              }
              poke.stats = stat;
            });

            setStore({ pokemon_data: store.pokemons });
            setStore({ pokemon_fusion_data: store.pokemonsfusion });
            setStore({ votes: store.votes });
            setStore({ favorites: store.favorites });
            setStore({ move_data: store.moves });
            setStore({ ability_data: store.abilities });
            setStore({ item_data: store.items });
            setStore({ nature_data: store.natures });
          });
      },
      addAll: () => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/storeid/" +
            1
        )
          .then((response) => response.json())
          .then((store) => {
            console.log(store);
            let votes = [];
            store.votes.map((object) => {
              votes.push(object.pokemon_id);
            });
            let favorites = [];
            store.favorites.map((object) => {
              favorites.push(object.pokemon_id);
            });
            setStore({ votes: votes });
            setStore({ favorites: store.favorites });
          });
      },

      FindOnePokemon: (pokemon_id) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/allmovabi/" +
            pokemon_id
        )
          .then((response) => response.json())
          .then((pokemon) => {
            let stat = [];
            for (let i in pokemon.pokemon.stats) {
              stat.push(pokemon.pokemon.stats[i]);
            }
            pokemon.pokemon.stats = stat;
            setStore({ single_pokemon_data: pokemon });
          });
      },

      addequipofus: (pokemon_fusion_id, num) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/addequipofus",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: getStore().user_id,
              pokemon_fusion_id: pokemon_fusion_id,
              num: num,
            }),
          })
      },
      addequipo: (pokemon_id, num) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/addequipo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              user_id: getStore().user_id,
              pokemon_id: pokemon_id,
              num: num,
            }),
          })
      },
      
      FindOneFusion: (pokemon_id) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/allmovabifus/" +
            pokemon_id
        )
          .then((response) => response.json())
          .then((pokemon) => {
            let stat = [];
            for (let i in pokemon.pokemon.stats) {
              stat.push(pokemon.pokemon.stats[i]);
            }
            pokemon.pokemon.stats = stat;
            setStore({ single_fusion_data: pokemon });
          });
      },
      FindOneItem: (item_id) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/item/" +
            item_id
        )
          .then((response) => response.json())
          .then((item) => {
            setStore({ single_item_data: item.item });
          });
      },
      FindOneMove: (move_id) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/move/" +
            move_id
        )
          .then((response) => response.json())
          .then((move) => {
            setStore({ single_move_data: move.move });
          });
      },
      addfus: (object) => {
        let fus = getStore().pokemon_fusion_data;
        fus.push(object);
        setStore({ pokemon_fusion_data: fus });
      },
      tokenStorage: (token) => {
        setStore({ token: token });
      },
      idStorage: (id) => {
        setStore({ user_id: id });
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/storeid/" +
            id
        )
          .then((response) => response.json())
          .then((store) => {

            let votes = [];
            store.votes.map((object) => {
              votes.push(object.pokemon_id);
            });
            let favorites = [];
            store.favorites.map((object) => {
              favorites.push(object.pokemon_id);
            });
            setStore({ votes: votes });
            setStore({ favorites: favorites });
            setStore({ equipos: store.equipos})
          });
      },
      addVote: async (pokemon_id) => {
        const vote = getStore().votes;
        let id = getStore().user_id;
        const resp = await fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/addvote",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pokemon_id: pokemon_id,
              user_id: id,
            }),
          }
        );

        const data = await resp.json();
        vote.push(data.vote);
        setStore({ votes: vote });
        return true;
      },
      deleteVote: async (pokemon_id) => {
        let user_id = getStore().user_id;

        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/deletevote/" +
            pokemon_id +
            "/" +
            user_id
        )
          .then((response) => response.json())
          .then((store) => {
       
            setStore({ votes: store.votes });
          });
      },
      deletefavorite: async (pokemon_id) => {
        let user_id = getStore().user_id;
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/deletefavorite/" +
            pokemon_id +
            "/" +
            user_id
        )
          .then((response) => response.json())
          .then((store) => {
            setStore({ favorites: store.favorites });
          });
      },

      addfavorite: async (pokemon_id, user_id) => {
        const favorite = getStore().favorites;
        let id = getStore().user_id;
        const resp = await fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/addfavorite",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pokemon_id: pokemon_id,
              user_id: id,
            }),
          }
        );

        const data = await resp.json();
        favorite.push(data.vote);
        setStore({ favorites: favorite });
        return true;
      },
      FindOneAbility: (ability_id) => {
        fetch(
          "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/ability/" +
            ability_id
        )
          .then((response) => response.json())
          .then((ability) => {
            console.log(ability);
            let img =
              ability.ability.generation == "generation-i"
                ? "https://static.wikia.nocookie.net/espokemon/images/2/2a/Primera_generaci%C3%B3n.png"
                : ability.ability.generation == "generation-ii"
                ? "https://static.wikia.nocookie.net/espokemon/images/f/f7/Segunda_generaci%C3%B3n.png"
                : ability.ability.generation == "generation-iii"
                ? "https://static.wikia.nocookie.net/espokemon/images/5/54/Tercera_generaci%C3%B3n.png"
                : ability.ability.generation == "generation-iv"
                ? "https://static.wikia.nocookie.net/espokemon/images/0/0a/Cuarta_generaci%C3%B3n.png"
                : ability.ability.generation == "generation-v"
                ? "https://static.wikia.nocookie.net/espokemon/images/6/61/Quinta_generaci%C3%B3n.png/"
                : ability.ability.generation == "generation-vi"
                ? "https://static.wikia.nocookie.net/espokemon/images/1/1a/Sexta_generaci%C3%B3n.png/"
                : ability.ability.generation == "generation-vii"
                ? "https://static.wikia.nocookie.net/espokemon/images/0/0a/S%C3%A9ptima_generaci%C3%B3n.png/"
                : habilidad.generation == "generation-viii"
                ? "https://static.wikia.nocookie.net/espokemon/images/b/b4/Octava_generaci%C3%B3n.png/"
                : "";
            let src = { img: img };
            Object.assign(ability.ability, src);
            setStore({ single_ability_data: ability });
          });
      },
      saveMoveonDb: () => {
        //hacer un bucle for aqui que el offset sea i y aumente de 50 en 50
        fetch("https://pokeapi.co/api/v2/move/?offset=800&limit=100")
          .then((response) => response.json())
          .then((data) => {
            return getActions().saveDb(data);
          });
      },
      saveDb: async (data) => {
        return await data.results.map(async (move) => {
          let name;
          let type;
          let power;
          let id;
          let damage_class;
          let accuracy;
          let pp;
          let priority;
          let description;
          let generation;
          let learning = [];

          await fetch(move.url)
            .then((response) => response.json())
            .then((data) => {
              damage_class = data.damage_class.name;
              data.flavor_text_entries.map((text) => {
                text.language.name == "es"
                  ? (description = text.flavor_text)
                  : "";
              });
              id = data.id;
              generation = data.generation.name;
              data.names.map((elem) => {
                elem.language.name == "es" ? (name = elem.name) : "";
              });
              data.learned_by_pokemon.map((pokes) => {
                learning.push(pokes.name);
              });
              power = data.power;
              pp = data.pp;
              priority = data.priority;
              type = data.type.name;
              accuracy = data.accuracy;
            });
          setTimeout(() => {
            fetch(
              "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/createMove",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  id: id,
                  name: name,
                  accuracy: accuracy,
                  pp: pp,
                  type: type,
                  damage_class: damage_class,
                  power: power,
                  priority: priority,
                  description: description,
                  generation: generation,
                  learning: learning,
                }),
              }
            );
          }, 500);
        });
      },

      saveNatureonDb: () => {
        fetch("https://pokeapi.co/api/v2/nature/?offset=0&limit=26")
          .then((response) => response.json())
          .then((allnature) => {
            allnature.results.map((nature) => {
              let increase_stat;
              let name;
              let id;
              let decrease_stat;

              fetch(nature.url)
                .then((response) => response.json())
                .then((data) => {
                  id = data.id;
                  data.names.map((elem) => {
                    elem.language.name == "es" ? (name = elem.name) : "";
                  });
                  decrease_stat = data.decreased_stat.name;
                  increase_stat = data.increased_stat.name;
                })
                .finally(() => {
                  fetch(
                    "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/createNature",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        id: id,
                        name: name,
                        decrease_stat: decrease_stat,
                        increase_stat: increase_stat,
                      }),
                    }
                  );
                });
            });
          });
      },
      saveAbilityonDb: () => {
        fetch("https://pokeapi.co/api/v2/ability/?offset=0&limit=328")
          .then((response) => response.json())
          .then((allability) => {
            allability.results.map((ability) => {
              let description;
              let id;
              let generation;
              let learning = [];
              let name;

              fetch(ability.url)
                .then((response) => response.json())
                .then((data) => {
                  data.flavor_text_entries.map((text) => {
                    text.language.name == "es"
                      ? (description = text.flavor_text)
                      : "";
                  });
                  id = data.id;
                  generation = data.generation.name;
                  data.names.map((elem) => {
                    elem.language.name == "es" ? (name = elem.name) : "";
                  });
                  data.pokemon.map((pokes) => {
                    learning.push(pokes.pokemon.name);
                  });
                })
                .finally(() => {
                  fetch(
                    "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/createAbility",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        id: id,
                        name: name,
                        description: description,
                        generation: generation,
                        learning: learning,
                      }),
                    }
                  );
                });
            });
          });
      },

      /*  pokemonFind: (next) => {
        fetch(next ? next : "https://pokeapi.co/api/v2/pokemon/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ pokemon: data });
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
        fetch(
          next ? next : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154"
        )
          .then((response) => response.json())
          .then((data) => {
            data.results.map((pokemon, i) => {
              fetch(pokemon.url)
                .then((response) => response.json())
                .then((allpokemon) => {
                  let sprites = allpokemon.sprites;
                  let pokemon_name = allpokemon.name;
                  let pokemon_id = allpokemon.id;

                  let new_pokemon_group = getStore().grupo_huevo_data;

                  fetch(allpokemon.species.url)
                    .then((response) => response.json())
                    .then((egg_group) => {
                      let description = "";
                      let group_name = [];
                      egg_group.egg_groups.map((group, i) => {
                        group_name.push(group.name);
                      });
                      egg_group.flavor_text_entries.map((desc, i) => {
                        if (
                          desc.language.name == "es" &&
                          desc.version.name == "shield"
                        ) {
                          description = desc.flavor_text;
                        }
                      });
                      let grou = {
                        img: sprites,
                        group_name: group_name,
                        pokemon_name: pokemon_name,
                        pokemon_id: pokemon_id,
                        description: description,
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
            setStore({ nature: data });
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
            setStore({ ability: data});
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
      },
      abilityFindOne: (url) => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setStore({ single_ability_data: data });
          });
      },
      abilityFindOneInData: (id) => {
        let ability = getStore().ability_data.find((e) => e == id);
        setStore({ abilityFounded: ability });
        if (ability) return true;
        else return false;
      },*/
    },
  };
};

export default getState;
