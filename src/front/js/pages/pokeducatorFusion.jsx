import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorFusionStyles.css";
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

const PokeducatorFusion = () => {
  const { store, actions } = useContext(Context);
  const [pokemon, setPokemon] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [load, setLoad] = useState(true);
  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);


  const type = (option) => {
    
    return  option.type == "normal" ? (
      <span>
        {option.name}{" "}
        <img
          className="tipoImgFusion mx-1"
          src={normal_img}
          alt="normal"
        />
      </span>
    ) : option.type == "fighting" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={lucha_img}
          alt="normal"
        />
      </span>
    ) : option.type == "flying" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={volador_img}
          alt="normal"
        />
      </span>
    ) : option.type == "poison" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={veneno_img}
          alt="normal"
        />
      </span>
    ) : option.type == "ground" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={tierra_img}
          alt="normal"
        />
      </span>
    ) : option.type == "rock" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={roca_img}
          alt="normal"
        />
      </span>
    ) : option.type == "ghost" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={fantasma_img}
          alt="normal"
        />
      </span>
    ) : option.type == "steel" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={acero_img}
          alt="normal"
        />
      </span>
    ) : option.type == "fire" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={fuego_img}
          alt="normal"
        />
      </span>
    ) : option.type == "water" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={agua_img}
          alt="normal"
        />
      </span>
    ) : option.type == "grass" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={planta_img}
          alt="normal"
        />
      </span>
    ) : option.type == "electric" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={electrico_img}
          alt="normal"
        />
      </span>
    ) : option.type == "phsychic" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={psiquico_img}
          alt="normal"
        />
      </span>
    ) : option.type == "ice" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={hielo_img}
          alt="normal"
        />
      </span>
    ) : option.type == "dragon" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={dragon_img}
          alt="normal"
        />
      </span>
    ) : option.type == "dark" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={siniestro_img}
          alt="normal"
        />
      </span>
    ) : option.type == "fairy" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={hada_img}
          alt="normal"
        />
      </span>
    ) : option.type == "unknown" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={desconocido_img}
          alt="normal"
        />
      </span>
    ) : option.type == "shadow" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={sombra_img}
          alt="normal"
        />
      </span>
    ) : option.type == "bug" ? (
      <span>
        {option.name}
        <img
          className="tipoImgFusion mx-1"
          src={bicho_img}
          alt="normal"
        />
      </span>
    ) : (
      ""
    )
  
  }




  const handleChange = (id) => {
    let pokemon = store.pokemon_data.find((pokemon) => pokemon.id == id);
    if (pokemon) {
      setPokemon(pokemon);
    }
  };

  const handleChange2 = (id2) => {
    let pokemon2 = store.pokemon_data.find((pokemon2) => pokemon2.id == id2);
    if (pokemon2) {
      setPokemon2(pokemon2);
    }
  };

  const DropdownIndicator = () => {
    return <></>;
  };

  const tipos = [
    { foto: agua_img, tipo: "water" },
    { foto: fuego_img, tipo: "fire" },
    { foto: acero_img, tipo: "steel" },
    { foto: bicho_img, tipo: "bug" },
    { foto: desconocido_img, tipo: "unkown" },
    { foto: dragon_img, tipo: "dragon" },
    { foto: electrico_img, tipo: "electric" },
    { foto: fantasma_img, tipo: "ghost" },
    { foto: hada_img, tipo: "fairy" },
    { foto: hielo_img, tipo: "ice" },
    { foto: lucha_img, tipo: "fighting" },
    { foto: normal_img, tipo: "normal" },
    { foto: planta_img, tipo: "grass" },
    { foto: psiquico_img, tipo: "psiquic" },
    { foto: roca_img, tipo: "rock" },
    { foto: siniestro_img, tipo: "dark" },
    { foto: sombra_img, tipo: "shadow" },
    { foto: tierra_img, tipo: "ground" },
    { foto: veneno_img, tipo: "poison" },
    { foto: volador_img, tipo: "flying" },
  ];

  setTimeout(() => {
    setLoad(false);
  }, time[randomtime]);
  return (
    <>
      {load ? (
        <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (
        <div className="container align-items-center">
          <div className="row cartasFusion">
            <div className="col-md-5 text-center ">
              <div className="p-2">
                <select
                  onChange={(evento) => {
                    handleChange(evento.target.value);
                  }}
                  className="form-select text-capitalize text-center"
                  aria-label="Default select example"
                >
                  <option defaultValue>Selecciona Pokemon</option>
                  {store.pokemon_data.map((objeto) => (
                    <option value={objeto.id}>
                      {objeto.name} #{objeto.id}
                    </option>
                  ))}
                </select>
                <div className="card rounded ">
                  {pokemon ? (
                    <h4 className="my-3 me-2 text-capitalize">
                      {pokemon?.name}
                    </h4>
                  ) : (
                    ""
                  )}
                  <h4>
                    {tipos
                      .filter((a) => pokemon?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}
                  </h4>
                  {pokemon ? (
                    <a href={`/pokemon/${pokemon?.id}`}>
                      <img
                        className="fusionFoto"
                        src={pokemon?.img}
                        alt="foto pokemon"
                      />
                    </a>
                  ) : (
                    ""
                  )}
                  <div className="card-body  ">
                    {pokemon ? (
                      <div className="stats_pokemon mt-3 mb-3 ">
                        <div className="table-responsive rounded-3 tablaStatsFusion">
                          <table className="table ">
                            <thead>
                              <th scope="col">Estadísticas</th>
                            </thead>
                            <tbody>
                              {pokemon?.stats?.map((objeto) => (
                                <tr className="d-flex text-center align-items-center">
                                  <td className="col-3 ">
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
                                  <td className="col-6 mt-2">
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
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="row">
                      <div className="col-sm-6">
                        <Select
                          components={{ DropdownIndicator }}
                          placeholder="Habilidad"
                          options={store.ability_data}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-sm-6">
                        <Select
                          components={{ DropdownIndicator }}
                          placeholder="Naturaleza"
                          options={store.nature_data}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          ceholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div class="col-md-2 text-center align-self-center">
                <div class="pokeballFusionPage">
                  <div class="pokeballFusionPage__button"></div>
                </div>
              </div>
            <div className="col-md-5 text-center ">
              <div className="p-2">
                <select
                  onChange={(evento) => {
                    handleChange2(evento.target.value);
                  }}
                  className="form-select text-capitalize text-center"
                  aria-label="Default select example"
                >
                  <option defaultValue>Selecciona Pokemon</option>
                  {store.pokemon_data.map((objeto) => (
                    <option value={objeto.id}>
                      {objeto.name} #{objeto.id}
                    </option>
                  ))}
                </select>
                <div className="card rounded ">
                  {pokemon2 ? (
                    <h4 className="my-3 me-2 text-capitalize">
                      {pokemon2?.name}
                    </h4>
                  ) : (
                    ""
                  )}
                  <h4>
                    {tipos
                      .filter((a) => pokemon2?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}
                  </h4>
                  {pokemon2 ? (
                    <a href={`/pokemon/${pokemon?.id}`}>
                      <img
                        className="fusionFoto"
                        src={pokemon2?.img}
                        alt="foto pokemon"
                      />
                    </a>
                  ) : (
                    ""
                  )}
                  <div className="card-body  ">
                    {pokemon ? (
                      <div className="stats_pokemon mt-3 mb-3 ">
                        <div className="table-responsive rounded-3 tablaStatsFusion">
                          <table className="table ">
                            <thead>
                              <th scope="col">Estadísticas</th>
                            </thead>
                            <tbody>
                              {pokemon2?.stats?.map((objeto) => (
                                <tr className="d-flex text-center align-items-center">
                                  <td className="col-3 ">
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
                                  <td className="col-6 mt-2">
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
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="row">
                      <div className="col-sm-6">
                        <Select
                          components={{ DropdownIndicator }}
                          placeholder="Habilidad"
                          options={store.ability_data}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-sm-6">
                        <Select
                          components={{ DropdownIndicator }}
                          placeholder="Naturaleza"
                          options={store.nature_data}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          ceholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            console.log(type(option))
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                      <div className="col-md-6">
                        <Select
                          placeholder="Movimiento"
                          components={{ DropdownIndicator }}
                          options={store.move_data}
                          getOptionLabel={(option) =>
                            type(option)
                          }
                          getOptionValue={(option) => option.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeducatorFusion;
