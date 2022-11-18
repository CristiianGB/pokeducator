import React, { useState, useEffect, useContext } from "react";
import medalla1 from "../../assets/img/medalla1.png";
import medalla2 from "../../assets/img/medalla2.png";
import medalla3 from "../../assets/img/medalla3.png";
import fusion from "../../assets/img/fusion.png";
import { Context } from "../store/appContext.jsx";

function PokeducatorLandingPage() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.votes();
  }, []);

  return (
    <div className="container align-items-center maincontainer">
      <div className="">
        <div className="fondo mt-3 rounded text-center ">
          <div className=" margin1 mt-3 ">
            <p className="alert alert-warning w-75 text-center m-auto">
              Con Pokeducator podrás criar diferentes tipos de pokemons y
              fusionarlos, consiguiendo aprender gracias a nuestra propia
              inteligencia artificial.
            </p>
          </div>
          <div>
            <div className="col-md-4 btn border-0 shadow-none mt-4">
              <a href="/fusion">
                <div class="pokeball pokeball-animated">
                  <h1 className="fusionButton mt-4">
                    <img src={fusion} alt="" className="fusionImg" />
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div className="mb-3 me-5 text-end">
            <a href="/info">
              <button className="buttonPokemonInfo">Mas información...</button>
            </a>
          </div>
        </div>
      </div>
      <div className="fondoBlanco">
        <div className="row margin">
          <div className="col-md-4 divPadre2">
            <div className="image-box1 divFotoPodio">
              {store.votes_pokemons[1] ? (
                <a href={`/fusioninfo/${store.votes_pokemons[1]?.pokemon_id}`}>
                  <img
                    className="card-img-top imagenPodio3 img-fluid"
                    src={store.votes_pokemons[1]?.img}
                    alt="guardería Pokémon en Pokémon Negro y Blanco"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="podium2 divMedalla">
              <img src={medalla2} className="medalla2" />
            </div>
          </div>

          <div className="col-md-4 divPadre1 ">
            <div className="image-box2 divFotoPodio1">
              {store.votes_pokemons[0] ? (
                <a href={`/fusioninfo/${store.votes_pokemons[0]?.pokemon_id}`}>
                  <img
                    className="card-img-top imagenPodio3 img-fluid"
                    src={store.votes_pokemons[0]?.img}
                    alt="guardería Pokémon en Pokémon Negro y Blanco"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="podium1 divMedalla">
              <img src={medalla1} className="medalla1" />
            </div>
          </div>
          <div className="col-md-4 divPadre3">
            <div className="image-box3 divFotoPodio3">
              {store.votes_pokemons[2] ? (
                <a href={`/fusioninfo/${store.votes_pokemons[2]?.pokemon_id}`}>
                  <img
                    className="card-img-top imagenPodio3 img-fluid"
                    src={store.votes_pokemons[2]?.img}
                    alt="guardería Pokémon en Pokémon Negro y Blanco"
                  />
                </a>
              ) : (
                ""
              )}
            </div>
            <div className="podium3 divMedalla">
              <img src={medalla3} className="medalla3" />
            </div>
          </div>
        </div>

        <div className="equipos">
          {store.teams
            ? store.teams.map((team) =>
                team.length > 0 ? (
                  <div className="row teamRow">
                    {team.map((pokemon) => (
                      pokemon.father ? (
                        <div className="col-sm card cardTeam text-center">
                        <a href={"fusion/"+pokemon.pokemon_id}>
                          <img
                            src={pokemon.img}
                            alt=""
                            className="fotoPokemonEquipos"
                          />
                        </a>
                      </div>
                      ) : (
                        <div className="col-sm card cardTeam text-center">
                        <a href={"pokemon/"+pokemon.id}>
                          <img
                            src={pokemon.img}
                            alt=""
                            className="fotoPokemonEquipos"
                          />
                        </a>
                      </div>
                      )
                  
                    ))}
                   { /*<div className="col-sm perfilPadre card cardTeam text-center cardPerfil">
                      <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png"
                        alt=""
                        className="fotoPerfilEquipos"
                      />
                    </div>*/}
                  </div>
                ) : (
                  ""
                )
              )
            : ""}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PokeducatorLandingPage;
