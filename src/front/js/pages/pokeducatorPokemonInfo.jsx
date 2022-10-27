import { elementType } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../../styles/pokeducatorPokemonInfoStyles.css";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";
import "../../styles/pokemonTypes.css";

const PokeducatorPokemonInfo = () => {
  const { store, actions } = useContext(Context);
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  const params = useParams();
  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  setTimeout(() => {
   

   
    setLoad(false);
  }, time[randomtime]);

  useEffect(() => {
  
    actions.FindOnePokemon(params.theid);

  }, []);
  


 



  // let tipoPokemon = store.single_pokemon_data.types?.map((objeto) =>
  //   objeto.type.name == "normal" ? (
  //     <img src={normal_img} alt="tipo normal" />
  //   ) : objeto.type.name == "fighting" ? (
  //     <img src={lucha_img} alt="tipo lucha" />
  //   ) : objeto.type.name == "flying" ? (
  //     <img src={volador_img} alt="tipo volador" />
  //   ) : objeto.type.name == "poison" ? (
  //     <img src={veneno_img} alt="tipo veneno" />
  //   ) : objeto.type.name == "ground" ? (
  //     <img src={tierra_img} alt="tipo tierra" />
  //   ) : objeto.type.name == "rock" ? (
  //     <img src={roca_img} alt="tipo roca" />
  //   ) : objeto.type.name == "ghost" ? (
  //     <img src={fantasma_img} alt="tipo fantasma" />
  //   ) : objeto.type.name == "steel" ? (
  //     <img src={acero_img} alt="tipo acero" />
  //   ) : objeto.type.name == "fire" ? (
  //     <img src={fuego_img} alt="tipo fuego" />
  //   ) : objeto.type.name == "water" ? (
  //     <img src={agua_img} alt="tipo agua" />
  //   ) : objeto.type.name == "grass" ? (
  //     <img src={planta_img} alt="tipo planta" />
  //   ) : objeto.type.name == "electric" ? (
  //     <img src={electrico_img} alt="tipo electrico" />
  //   ) : objeto.type.name == "phsychic" ? (
  //     <img src={psiquico_img} alt="tipo psiquico" />
  //   ) : objeto.type.name == "ice" ? (
  //     <img src={hielo_img} alt="tipo hielo" />
  //   ) : objeto.type.name == "dragon" ? (
  //     <img src={dragon_img} alt="tipo dragon" />
  //   ) : objeto.type.name == "dark" ? (
  //     <img src={siniestro_img} alt="tipo siniestro" />
  //   ) : objeto.type.name == "fairy" ? (
  //     <img src={hada_img} alt="tipo hada" />
  //   ) : objeto.type.name == "unknown" ? (
  //     <img src={desconocido_img} alt="tipo desconocido" />
  //   ) : objeto.type.name == "shadow" ? (
  //     <img src={sombra_img} alt="tipo sombra" />
  //   ) : objeto.type.name == "bug" ? (
  //     <img src={bicho_img} alt="tipo bicho" />
  //   ) : (
  //     ""
  //   )
  // );

  
  return (
    <div className="containe container_section">
      
      {store.single_pokemon_data?
      
      load ? (
        <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (
        <>
          <div className="container align-items-center">
            {/* POKEMON BOTONES */console.log(store.single_pokemon_data)}

            <div className="row justify-content-center mt-3">
              <div className="col-sm-6">
                {params.theid == 1 ? (
                  ""
                ) : (
                  <a href={params.theid>1?`/pokemon/${parseInt(params.theid - 1)}`:""}>
                    <button className="buttonPokemonInfo">Anterior</button>
                  </a>
                )}
              </div>

              <div className="col-sm-6 text-end">
                <a href={params.theid<1154?`/pokemon/${parseInt(params.theid) + 1}`:""}>
                  <button className="buttonPokemonInfo">siguiente</button>
                </a>
              </div>
            </div>

            {/* POKEMON NAME */}
            <div className="pokemon_name d-flex text-center text-uppercase">
              <span className="order_pokemon">
                {store.single_pokemon_data.pokemon.id}
              </span>
              <h1>{store.single_pokemon_data.pokemon.name}</h1>
            </div>

            <div className="row">
              {/* DIV IZQ */}
              <div className="col-md-6">
                {/* POKEMON IMAGEN */}
                <div className="pokemon_img">
                  <img
                    className="img-fluid"
                    src={
                      store.single_pokemon_data.pokemon.img
                    }
                    alt={store.single_pokemon_data.pokemon.name + " official artwork"}
                  />
                </div>
                {/* POKEMON STATS */}
                <div className="stats_pokemon mt-3 mb-3 div_estadisticas">
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
                        {store.single_pokemon_data.pokemon.stats?.map((objeto) => (
                          <tr className="d-flex text-center align-items-center">
                            <td className="col-3">{objeto.name}</td>
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
                <div className="bg-light rounded-4 p-2 div_descripcion">
                  <h5>{store.single_pokemon_data?.pokemon.description}</h5>
                </div>
                {/* INFO ADICIONAL */}
                {/* <div className="bg-info rounded-4 p-2 div_info_adicional"> */}
                <div
                  className={`rounded-4 p-2 div_info_adicional ${store.single_pokemon_data.pokemon.type[0]}-background`}
                >
                  <h4 className="text-white">INFORMACION ADICIONAL</h4>
                  <div className="row">
                    <div className="col-6">
                      <ul>
                        <li>
                          <p className="fw-bold fs-5 text-white">Altura:</p>
                          <p className="fw-bold">
                            {store.single_pokemon_data.pokemon.height} cm
                          </p>
                        </li>
                        <li>
                          <p className="fw-bold fs-5 text-white">Peso:</p>
                          <p className="fw-bold">
                            {store.single_pokemon_data.pokemon.weight} kg
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul>
                        <li>
                          <p className="fw-bold fs-5 text-white">Categoria</p>
                          <p className="fw-bold">.......</p>
                        </li>
                        <li>
                          <p className="fw-bold fs-5 text-white">Habilidad</p>
                          <p className="fw-bold">{store.single_pokemon_data.abilities[0].name}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-2 rounded-4 div_tipo">
                  <h4>TIPO</h4>
                  <div>{store.single_pokemon_data.pokemon.type[0]}</div>
                </div>
                <div className="bg-light  p-2 rounded-4 div_debilidades">
                  <h4>DEBILIDADES</h4>
                  <div>{store.single_pokemon_data.pokemon.type[0]}</div>
                </div>
                <div className="bg-light p-2 rounded-4 div_evoluciones">
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
            
            <div className="bg-light rounded-4 div_moves">
              <div className="table-responsive table-secondary rounded-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <h3>MOVIMIENTOS</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.single_pokemon_data.moves.map((objeto) => (
                      <tr>
                        <td>
                          <a
                            className="links"
                            href={`/movimiento/${objeto.id}`}
                          >
                            {objeto.name
                            }
                          </a>
                        </td>
                        <td>
                          <button
                            className={`type-pokemon ${objeto.type}-background`}
                          >
                            {objeto.type}
                          </button>
                        </td>
                        <td>{objeto.power}</td>
                        <td>{objeto.accuracy}</td>
                        <td>{objeto.pp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </>
      )
      :"" }
                        
    </div>
  );
};

export default PokeducatorPokemonInfo;
