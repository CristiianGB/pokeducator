import { elementType } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import acero_img from "../../assets/img/tiposimg/acero.png";
import agua_img from "../../assets/img/tiposimg/agua.png";
import bicho_img from "../../assets/img/tiposimg/bicho.png";
import desconocido_img from "../../assets/img/tiposimg/desconocido.png";
import dragon_img from "../../assets/img/tiposimg/dragon.png";
import electrico_img from "../../assets/img/tiposimg/electrico.png";
import fantasma_img from "../../assets/img/tiposimg/fantasma.png";
import fuego_img from "../../assets/img/tiposimg/fuego.png";
import hada_img from "../../assets/img/tiposimg/hada.png";
import hielo_img from "../../assets/img/tiposimg/hielo.png";
import lucha_img from "../../assets/img/tiposimg/lucha.png";
import normal_img from "../../assets/img/tiposimg/normal.png";
import planta_img from "../../assets/img/tiposimg/planta.png";
import psiquico_img from "../../assets/img/tiposimg/psiquico.png";
import roca_img from "../../assets/img/tiposimg/roca.png";
import siniestro_img from "../../assets/img/tiposimg/siniestro.png";
import sombra_img from "../../assets/img/tiposimg/sombra.png";
import tierra_img from "../../assets/img/tiposimg/tierra.png";
import veneno_img from "../../assets/img/tiposimg/veneno.png";
import volador_img from "../../assets/img/tiposimg/volador.png";
import "../../styles/pokeducatorPokemonInfoStyles.css";
import { Context } from "../store/appContext.jsx";

// {
// let moves = [];  Hacerlo useState
//   store.single_pokemon_data?.moves?.map((movement) => {
//     store.move_data.map((move) => {
//       if (move.name == movement.move.name) {
//         moves.push(move);
//       }
//     });
//   });
// }

const PokeducatorPokemonInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [load, setLoad] = useState("true");

  useEffect(() => {
    if (!actions.pokemonFindOneInData(params.theid)) {
      actions.pokemonFindOne(
        "https://pokeapi.co/api/v2/pokemon/" + params.theid
      );
    }
  }, []);

  setTimeout(() => {
    setLoad(false);
    // console.log(debilidades);
  }, 2000);

  let moves = [];
  store.single_pokemon_data?.moves?.map((movement) => {
    store.move_data.map((move) => {
      if (move.name === movement.move.name) {
        moves.push(move);
      }
    });
  });

  let tipoPokemon = store.single_pokemon_data.types?.map((objeto) =>
    objeto.type.name == "normal" ? (
      <img src={normal_img} alt="tipo normal" />
    ) : objeto.type.name == "fighting" ? (
      <img src={lucha_img} alt="tipo lucha" />
    ) : objeto.type.name == "flying" ? (
      <img src={volador_img} alt="tipo volador" />
    ) : objeto.type.name == "poison" ? (
      <img src={veneno_img} alt="tipo veneno" />
    ) : objeto.type.name == "ground" ? (
      <img src={tierra_img} alt="tipo tierra" />
    ) : objeto.type.name == "rock" ? (
      <img src={roca_img} alt="tipo roca" />
    ) : objeto.type.name == "ghost" ? (
      <img src={fantasma_img} alt="tipo fantasma" />
    ) : objeto.type.name == "steel" ? (
      <img src={acero_img} alt="tipo acero" />
    ) : objeto.type.name == "fire" ? (
      <img src={fuego_img} alt="tipo fuego" />
    ) : objeto.type.name == "water" ? (
      <img src={agua_img} alt="tipo agua" />
    ) : objeto.type.name == "grass" ? (
      <img src={planta_img} alt="tipo planta" />
    ) : objeto.type.name == "electric" ? (
      <img src={electrico_img} alt="tipo electrico" />
    ) : objeto.type.name == "phsychic" ? (
      <img src={psiquico_img} alt="tipo psiquico" />
    ) : objeto.type.name == "ice" ? (
      <img src={hielo_img} alt="tipo hielo" />
    ) : objeto.type.name == "dragon" ? (
      <img src={dragon_img} alt="tipo dragon" />
    ) : objeto.type.name == "dark" ? (
      <img src={siniestro_img} alt="tipo siniestro" />
    ) : objeto.type.name == "fairy" ? (
      <img src={hada_img} alt="tipo hada" />
    ) : objeto.type.name == "unknown" ? (
      <img src={desconocido_img} alt="tipo desconocido" />
    ) : objeto.type.name == "shadow" ? (
      <img src={sombra_img} alt="tipo sombra" />
    ) : objeto.type.name == "bug" ? (
      <img src={bicho_img} alt="tipo bicho" />
    ) : (
      ""
    )
  );

  // let debilidades = store.type_data.map((objeto) =>
  //   objeto.damage_relations.double_damage_from.name == pokemonType
  //     ? objeto.name
  //     : ""
  // );

  let descriptionPokemon = store.grupo_huevo_data.map((objeto) =>
    objeto.pokemon_name == store.single_pokemon_data.name
      ? objeto.description
      : ""
  );

  let habilidadPokemon = store.single_pokemon_data.abilities?.map((objeto) =>
    objeto.slot == 1 ? objeto.ability.name : ""
  );

  return (
    <div className="container">
      {load ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* POKEMON BOTONES */}
          <div className="row justify-content-center mt-2">
            <div className="col-sm-6">
              <a
                href={`/pokemon/${parseInt(
                  params.theid == 1 ? (params.theid = 905) : params.theid - 1
                )}`}
              >
                <button className="buttonPokemonInfo">Anterior</button>
              </a>
            </div>

            <div className="col-sm-6 text-end">
              <a
                href={`/pokemon/${parseInt(
                  params.theid == 905 ? (params.theid = 1) : params.theid + 1
                )}`}
              >
                <button className="buttonPokemonInfo">siguiente</button>
              </a>
            </div>
          </div>

          {/* POKEMON NAME */}
          <div className="pokemon_name d-flex text-center text-uppercase">
            <span className="order_pokemon">
              {store.single_pokemon_data.id}
            </span>
            <h1>{store.single_pokemon_data.name}</h1>
          </div>

          <div className="row">
            {/* DIV IZQ */}
            <div className="col-md-6">
              {/* POKEMON IMAGEN */}
              <div className="pokemon_img text-center rounded-3">
                <img
                  className="img-fluid"
                  src={
                    store.single_pokemon_data.sprites?.other["official-artwork"]
                      .front_default
                  }
                  alt={store.single_pokemon_data.name + " official artwork"}
                />
              </div>
              {/* POKEMON STATS */}
              <div className="stats_pokemon mt-3 mb-3">
                <div className="table-responsive table-secondary rounded-3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <h4>ESTADISTICAS</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {store.single_pokemon_data.stats?.map((objeto) => (
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">{objeto.stat.name}</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${objeto.base_stat}%` }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">{objeto.base_stat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* DIV DRCH */}
            <div className="col-md-6 d-flex flex-column justify-content-around m-0 info_pokemon">
              <div className="description_pokemon rounded p-2 mb-1">
                <h6>{descriptionPokemon}</h6>
              </div>
              {/* INFO */}
              <div className="aditional_info_pokemon bg-info rounded-3 p-2">
                <h4 className="text-white">INFORMACION ADICIONAL</h4>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <p className="fw-bold text-white">Altura:</p>
                        <p>{store.single_pokemon_data.height} cm</p>
                      </li>
                      <li>
                        <p className="fw-bold text-white">Peso:</p>
                        <p>{store.single_pokemon_data.weight} kg</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        <p className="fw-bold text-white">Categoria</p>
                        <p>.......</p>
                      </li>
                      <li>
                        <p className="fw-bold text-white">Habilidad</p>
                        <p>{habilidadPokemon}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4>TIPO</h4>
                <div className="image_tipo">{tipoPokemon}</div>
              </div>
              <div>
                <h4>DEBILIDADES</h4>
                <div className="image_tipo">{tipoPokemon}</div>
              </div>
              <div>
                <h4>EVOLUCIONES</h4>
                <div className="d-flex flex-row justify-content-around">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: "150px", height: "150px" }}
                  ></div>
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: "150px", height: "150px" }}
                  ></div>
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: "150px", height: "150px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* POKEMON MOVIMIENTOS */}
          <div className="bg-light rounded-3">
            <div className="table-responsive table-secondary rounded-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h3>MOVIMIENTOS</h3>
                    </th>
                  </tr>
                  {/* <tr>
                    <th>NOMBRE</th>
                    <th>TIPO</th>
                    <th>PODER</th>
                    <th>PRECISION</th>
                    <th>PP</th>
                  </tr> */}
                </thead>
                <tbody>
                  {moves.map((objeto) => (
                    <tr>
                      <td>
                        <a className="links" href={`/movimiento/${objeto.id}`}>
                          {objeto.names.map((elemento) =>
                            elemento.language?.name == "es" ? elemento.name : ""
                          )}
                        </a>
                      </td>
                      <td>{tipoPokemon}</td>
                      <td>{objeto.power}</td>
                      <td>{objeto.accuracy}</td>
                      <td>{objeto.pp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokeducatorPokemonInfo;
