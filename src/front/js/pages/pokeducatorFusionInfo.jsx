import { elementType } from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/pokeducatorPokemonInfoStyles.css";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";
import acero_img from "../../assets/img/tiposimg/acero.png";
import agua_img from "../../assets/img/tiposimg/agua.png";
import bicho_img from "../../assets/img/tiposimg/bicho.png";
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
import tierra_img from "../../assets/img/tiposimg/tierra.png";
import veneno_img from "../../assets/img/tiposimg/veneno.png";
import volador_img from "../../assets/img/tiposimg/volador.png";
import desconocido_img from "../../assets/img/tiposimg/desconocido.png";
import sombra_img from "../../assets/img/tiposimg/sombra.png";

const PokeducatorFusionInfo = () => {
  const { store, actions } = useContext(Context);
  const [num, setNum] = useState(0);
  const [father, setFather] = useState(0);
  const [mom, setMom] = useState(0);
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
    actions.FindOneFusion(params.theid);
  }, []);
  let tipoPokemon = store.single_fusion_data.pokemon?.type.map((elemento) =>
    elemento == "normal" ? (
      <img className="tipoImg mx-1" src={normal_img} alt="normal" />
    ) : elemento == "fighting" ? (
      <img className="tipoImg mx-1" src={lucha_img} alt="normal" />
    ) : elemento == "flying" ? (
      <img className="tipoImg mx-1" src={volador_img} alt="normal" />
    ) : elemento == "poison" ? (
      <img className="tipoImg mx-1" src={veneno_img} alt="normal" />
    ) : elemento == "ground" ? (
      <img className="tipoImg mx-1" src={tierra_img} alt="normal" />
    ) : elemento == "rock" ? (
      <img className="tipoImg mx-1" src={roca_img} alt="normal" />
    ) : elemento == "ghost" ? (
      <img className="tipoImg mx-1" src={fantasma_img} alt="normal" />
    ) : elemento == "steel" ? (
      <img className="tipoImg mx-1" src={acero_img} alt="normal" />
    ) : elemento == "fire" ? (
      <img className="tipoImg mx-1" src={fuego_img} alt="normal" />
    ) : elemento == "water" ? (
      <img className="tipoImg mx-1" src={agua_img} alt="normal" />
    ) : elemento == "grass" ? (
      <img className="tipoImg mx-1" src={planta_img} alt="normal" />
    ) : elemento == "electric" ? (
      <img className="tipoImg mx-1" src={electrico_img} alt="normal" />
    ) : elemento == "psychic" ? (
      <img className="tipoImg mx-1" src={psiquico_img} alt="normal" />
    ) : elemento == "ice" ? (
      <img className="tipoImg mx-1" src={hielo_img} alt="normal" />
    ) : elemento == "dragon" ? (
      <img className="tipoImg mx-1" src={dragon_img} alt="normal" />
    ) : elemento == "dark" ? (
      <img className="tipoImg mx-1" src={siniestro_img} alt="normal" />
    ) : elemento == "fairy" ? (
      <img className="tipoImg mx-1" src={hada_img} alt="normal" />
    ) : elemento == "unknown" ? (
      <img className="tipoImg mx-1" src={desconocido_img} alt="normal" />
    ) : elemento == "shadow" ? (
      <img className="tipoImg mx-1" src={sombra_img} alt="normal" />
    ) : elemento == "bug" ? (
      <img className="tipoImg mx-1" src={bicho_img} alt="normal" />
    ) : (
      ""
    )
  );

  let tipoDebilidad = store.single_fusion_data.pokemon?.weakness?.map(
    (elemento) =>
      elemento == "normal" ? (
        <img className="tipoImg mx-1" src={normal_img} alt="normal" />
      ) : elemento == "fighting" ? (
        <img className="tipoImg mx-1" src={lucha_img} alt="normal" />
      ) : elemento == "flying" ? (
        <img className="tipoImg mx-1" src={volador_img} alt="normal" />
      ) : elemento == "poison" ? (
        <img className="tipoImg mx-1" src={veneno_img} alt="normal" />
      ) : elemento == "ground" ? (
        <img className="tipoImg mx-1" src={tierra_img} alt="normal" />
      ) : elemento == "rock" ? (
        <img className="tipoImg mx-1" src={roca_img} alt="normal" />
      ) : elemento == "ghost" ? (
        <img className="tipoImg mx-1" src={fantasma_img} alt="normal" />
      ) : elemento == "steel" ? (
        <img className="tipoImg mx-1" src={acero_img} alt="normal" />
      ) : elemento == "fire" ? (
        <img className="tipoImg mx-1" src={fuego_img} alt="normal" />
      ) : elemento == "water" ? (
        <img className="tipoImg mx-1" src={agua_img} alt="normal" />
      ) : elemento == "grass" ? (
        <img className="tipoImg mx-1" src={planta_img} alt="normal" />
      ) : elemento == "electric" ? (
        <img className="tipoImg mx-1" src={electrico_img} alt="normal" />
      ) : elemento == "psychic" ? (
        <img className="tipoImg mx-1" src={psiquico_img} alt="normal" />
      ) : elemento == "ice" ? (
        <img className="tipoImg mx-1" src={hielo_img} alt="normal" />
      ) : elemento == "dragon" ? (
        <img className="tipoImg mx-1" src={dragon_img} alt="normal" />
      ) : elemento == "dark" ? (
        <img className="tipoImg mx-1" src={siniestro_img} alt="normal" />
      ) : elemento == "fairy" ? (
        <img className="tipoImg mx-1" src={hada_img} alt="normal" />
      ) : elemento == "unknown" ? (
        <img className="tipoImg mx-1" src={desconocido_img} alt="normal" />
      ) : elemento == "shadow" ? (
        <img className="tipoImg mx-1" src={sombra_img} alt="normal" />
      ) : elemento == "bug" ? (
        <img className="tipoImg mx-1" src={bicho_img} alt="normal" />
      ) : (
        ""
      )
  );

  const alturaMetros = (altura) => {
    let height_obtained = parseFloat(altura) * 0.1;
    return height_obtained.toFixed(2);
  };

  const pesoKilos = (peso) => {
    let weight_obtained = parseFloat(peso) * 0.1;
    return weight_obtained.toFixed(2);
  };

  return (
    <div className="containe container_section">
      {store.single_fusion_data ? (
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
              <div className="d-flex justify-content-between mt-3">
                <div className="col-sm-6 text-start">
                  {params.theid == 1 ? (
                    ""
                  ) : (
                    <a
                      href={
                        params.theid > 1
                          ? `/fusioninfo/${parseInt(params.theid - 1)}`
                          : ""
                      }
                    >
                      <button className="buttonPokemonInfo">Anterior</button>
                    </a>
                  )}
                </div>

                <div className="col-sm-6 text-end">
                  {params.theid >= store.pokemon_fusion_data.length ? (
                    ""
                  ) : (
                    <a
                      href={
                        params.theid < store.pokemon_fusion_data.length
                          ? `/fusioninfo/${parseInt(params.theid) + 1}`
                          : ""
                      }
                    >
                      <button className="buttonPokemonInfo">siguiente</button>
                    </a>
                  )}
                </div>
              </div>

              {/* POKEMON NAME */}
              <div className="pokemon_name d-flex text-center text-uppercase">
                <span className="order_pokemon">
                  {store.single_fusion_data?.pokemon.id}
                </span>
                <h1 className="fw-bold">
                  {store.single_fusion_data?.pokemon.name}
                </h1>
              </div>

              <div className="row">
                {/* DIV IZQ */}
                <div className="col-md-6">
                  {/* POKEMON IMAGEN */}
                  <div
                    className={`rounded-circle text-center background_${store.single_fusion_data.pokemon.type[0]}`}
                  >
                    <img
                      className="img-fluid"
                      style={{ width: "400px" }}
                      src={store.single_fusion_data.pokemon.img}
                      alt={
                        store.single_fusion_data.pokemon.name +
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
                          {store.single_fusion_data.pokemon.stats?.map(
                            (objeto) => (
                              <tr className="d-flex text-center align-items-center">
                                <td className="col-3 fs-6">
                                  {objeto.name == "atk"
                                    ? "Ataque"
                                    : objeto.name == "defens"
                                    ? "Defensa"
                                    : objeto.name == "ps"
                                    ? "HP"
                                    : objeto.name == "sp_atk"
                                    ? "Ataque Esp."
                                    : objeto.name == "sp_defens"
                                    ? "Defensa Esp."
                                    : objeto.name == "spd"
                                    ? "Velocidad"
                                    : ""}
                                </td>
                                <td className="col-6">
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{
                                        width: `${objeto.base_stat / 1.5}%`,
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
                <div className="col-md-6 d-flex flex-column m-0 info_pokemon">
                  
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
                              {pesoKilos(
                                store.single_fusion_data.pokemon.weight
                              )}{" "}
                              Kg
                            </p>
                          </li>
                          <li>
                            <p className="fw-bold fs-5 text-white">Peso</p>
                            <p className="fw-bold">
                              {alturaMetros(
                                store.single_fusion_data.pokemon.height
                              )}{" "}
                              m
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>
                            <p className="fw-bold fs-5 text-white">Habilidad</p>
                            {
                              <a
                                className="linksPokemon"
                                href={`/habilidad/${store.single_fusion_data.ability?.id}`}
                              >
                                <p className="fw-bold">
                                  {store.single_fusion_data.ability?.name}
                                </p>
                              </a>
                            }
                            <p className="fw-bold fs-5 text-white">
                              Naturaleza
                            </p>
                            <p className="fw-bold">
                              {store.single_fusion_data.nature?.name}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light p-2 rounded-4 div_tipo">
                    <h4 className="fw-bold">Tipo</h4>
                    <div>{tipoPokemon}</div>
                  </div>

                  <div className="bg-light p-2 rounded-4 div_tipo">
                    <div>
                      <h4 className="fw-bold">PADRES</h4>
                    </div>
                    <div className="d-flex justify-content-around">
                      {store.single_fusion_data.father ? (
                        <div
                          className="rounded-circle text-center div_evolucion"
                          style={{
                            width: "150px",
                            height: "150px",
                          }}
                        >
                          <a
                            className="links"
                            href={`/pokemon/${store.single_fusion_data.father?.id}`}
                          >
                            <img
                              className="img-fluid"
                              src={store.single_fusion_data.father?.img}
                              alt={store.single_fusion_data.father?.name}
                            />
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                      {store.single_fusion_data.mom ? (
                        <div
                          className="rounded-circle text-center div_evolucion"
                          style={{
                            width: "150px",
                            height: "150px",
                          }}
                        >
                          <a
                            className="links"
                            href={`/pokemon/${store.single_fusion_data.mom?.id}`}
                          >
                            <img
                              className="img-fluid"
                              src={store.single_fusion_data.mom?.img}
                              alt={store.single_fusion_data.mom?.name}
                            />
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* POKEMON MOVIMIENTOS */}
              <div className="rounded-4">
                <div className="table-responsive rounded-3">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Poder</th>
                        <th scope="col">Precisión</th>
                        <th scope="col">PP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {store.single_fusion_data.moves.map((objeto) => (
                        <tr data-index={objeto.id}>
                          <td>
                            <a
                              className="links"
                              href={`/movimiento/${objeto.id}`}
                            >
                              {objeto.name}
                            </a>
                          </td>
                          <td>
                            {objeto.type == "normal" ? (
                              <img
                                className="tipoImg "
                                src={normal_img}
                                alt="normal"
                              />
                            ) : objeto.type == "fighting" ? (
                              <img
                                className="tipoImg "
                                src={lucha_img}
                                alt="normal"
                              />
                            ) : objeto.type == "flying" ? (
                              <img
                                className="tipoImg "
                                src={volador_img}
                                alt="normal"
                              />
                            ) : objeto.type == "poison" ? (
                              <img
                                className="tipoImg "
                                src={veneno_img}
                                alt="normal"
                              />
                            ) : objeto.type == "ground" ? (
                              <img
                                className="tipoImg "
                                src={tierra_img}
                                alt="normal"
                              />
                            ) : objeto.type == "rock" ? (
                              <img
                                className="tipoImg "
                                src={roca_img}
                                alt="normal"
                              />
                            ) : objeto.type == "ghost" ? (
                              <img
                                className="tipoImg "
                                src={fantasma_img}
                                alt="normal"
                              />
                            ) : objeto.type == "steel" ? (
                              <img
                                className="tipoImg "
                                src={acero_img}
                                alt="normal"
                              />
                            ) : objeto.type == "fire" ? (
                              <img
                                className="tipoImg "
                                src={fuego_img}
                                alt="normal"
                              />
                            ) : objeto.type == "water" ? (
                              <img
                                className="tipoImg "
                                src={agua_img}
                                alt="normal"
                              />
                            ) : objeto.type == "grass" ? (
                              <img
                                className="tipoImg "
                                src={planta_img}
                                alt="normal"
                              />
                            ) : objeto.type == "electric" ? (
                              <img
                                className="tipoImg "
                                src={electrico_img}
                                alt="normal"
                              />
                            ) : objeto.type == "psychic" ? (
                              <img
                                className="tipoImg "
                                src={psiquico_img}
                                alt="normal"
                              />
                            ) : objeto.type == "ice" ? (
                              <img
                                className="tipoImg "
                                src={hielo_img}
                                alt="normal"
                              />
                            ) : objeto.type == "dragon" ? (
                              <img
                                className="tipoImg "
                                src={dragon_img}
                                alt="normal"
                              />
                            ) : objeto.type == "dark" ? (
                              <img
                                className="tipoImg "
                                src={siniestro_img}
                                alt="normal"
                              />
                            ) : objeto.type == "fairy" ? (
                              <img
                                className="tipoImg "
                                src={hada_img}
                                alt="normal"
                              />
                            ) : objeto.type == "unknown" ? (
                              <img
                                className="tipoImg "
                                src={desconocido_img}
                                alt="normal"
                              />
                            ) : objeto.type == "shadow" ? (
                              <img
                                className="tipoImg "
                                src={sombra_img}
                                alt="normal"
                              />
                            ) : objeto.type == "bug" ? (
                              <img
                                className="tipoImg "
                                src={bicho_img}
                                alt="normal"
                              />
                            ) : (
                              ""
                            )}
                          </td>
                          <td>{objeto.power ? objeto.power : "-"}</td>
                          <td>{objeto.accuracy ? objeto.accuracy : "-"}</td>
                          <td>{objeto.pp ? objeto.pp : "-"}</td>
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

export default PokeducatorFusionInfo;
