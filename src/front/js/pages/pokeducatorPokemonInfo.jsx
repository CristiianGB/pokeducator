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

  let tipoPokemon = store.single_pokemon_data.pokemon?.type.map((elemento) => (
    <button className={`type-pokemon ${elemento}-background`}>
      {elemento}
    </button>
  ));

  return (
    <div className="containe container_section">
      {store.single_pokemon_data ? (
        load ? (
          <div className="container align-items-center">
            <img
              className="centred img-fluid"
              src={loading}
              alt="Cargando..."
            />
          </div>
        ) : (
          <>
            <div className="container align-items-center">
              {/* POKEMON BOTONES */}

              <div className="row justify-content-center mt-3">
                <div className="col-sm-6">
                  {params.theid == 1 ? (
                    ""
                  ) : (
                    <a
                      href={
                        params.theid > 1
                          ? `/pokemon/${parseInt(params.theid - 1)}`
                          : ""
                      }
                    >
                      <button className="buttonPokemonInfo">Anterior</button>
                    </a>
                  )}
                </div>

                <div className="col-sm-6 text-end">
                  <a
                    href={
                      params.theid < 1154
                        ? `/pokemon/${parseInt(params.theid) + 1}`
                        : ""
                    }
                  >
                    <button className="buttonPokemonInfo">siguiente</button>
                  </a>
                </div>
              </div>

              {/* POKEMON NAME */}
              <div className="pokemon_name d-flex text-center text-uppercase">
                <span className="order_pokemon">
                  {store.single_pokemon_data.pokemon.id}
                </span>
                <h1 className="fw-bold">
                  {store.single_pokemon_data.pokemon.name}
                </h1>
              </div>

              <div className="row">
                {/* DIV IZQ */}
                <div className="col-md-6">
                  {/* POKEMON IMAGEN */}
                  <div className="pokemon_img">
                    <img
                      className="img-fluid"
                      src={store.single_pokemon_data.pokemon.img}
                      alt={
                        store.single_pokemon_data.pokemon.name +
                        " official artwork"
                      }
                    />
                  </div>
                  {/* POKEMON STATS */}
                  <div className="stats_pokemon mt-3 mb-3 div_estadisticas">
                    <div className="table-responsive table-secondary rounded-3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <h4 className="fw-bold">ESTADISTICAS</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {store.single_pokemon_data.pokemon.stats?.map(
                            (objeto) => (
                              <tr className="d-flex text-center align-items-center">
                                <td className="col-3 fs-6">{objeto.name}</td>
                                <td className="col-6">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{
                                        width: `${objeto.base_stat}%`,
                                      }}
                                    ></div>
                                  </div>
                                </td>
                                <td className="col-3 fs-6">
                                  {objeto.base_stat}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* DIV DRCH */}
                <div className="col-md-6 d-flex flex-column justify-content-around m-0 info_pokemon">
                  <div className="bg-light rounded-4 p-2 div_descripcion">
                    <h5>{store.single_pokemon_data.pokemon.description}</h5>
                  </div>
                  {/* INFO ADICIONAL */}
                  <div
                    className={`bg-primary bg-gradient rounded-4 p-2 div_info_adicional`}
                  >
                    <h4 className="fw-bold text-white">
                      INFORMACION ADICIONAL
                    </h4>
                    <div className="row">
                      <div className="col-6">
                        <ul>
                          <li>
                            <p className="fw-bold fs-5 text-white">Altura</p>
                            <p className="fw-bold">
                              {store.single_pokemon_data.pokemon.height} cm
                            </p>
                          </li>
                          <li>
                            <p className="fw-bold fs-5 text-white">Peso</p>
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
                            {store.single_pokemon_data.abilities?.map(
                              (elemento) => (
                                <p className="fw-bold">{elemento.name}</p>
                              )
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light p-2 rounded-4 div_tipo">
                    <h4 className="fw-bold">TIPO</h4>
                    <div>{tipoPokemon}</div>
                  </div>
                  <div className="bg-light p-2 rounded-4 div_debilidades">
                    <h4 className="fw-bold">DEBILIDADES</h4>
                    <div>tipo</div>
                  </div>
                  <div className="bg-light p-2 rounded-4 div_tipo">
                    <h4 className="fw-bold">EVOLUCIONES</h4>
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

              <div className="bg-light rounded-4">
                <div className="table-responsive table-secondary rounded-3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          <h4 className="fw-bold">MOVIMIENTOS</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {store.single_pokemon_data.moves.map((objeto) => (
                        <tr data-index={objeto.id}>
                          <td className="fs-6">
                            <a
                              className="links"
                              href={`/movimiento/${objeto.id}`}
                            >
                              {objeto.name}
                            </a>
                          </td>
                          <td>
                            <button
                              className={`type-pokemon ${objeto.type}-background`}
                            >
                              {objeto.type}
                            </button>
                          </td>
                          <td className="fs-6">
                            {objeto.power ? objeto.power : "-"}
                          </td>
                          <td className="fs-6">
                            {objeto.accuracy ? objeto.accuracy : "-"}
                          </td>
                          <td className="fs-6">
                            {objeto.pp ? objeto.pp : "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default PokeducatorPokemonInfo;
