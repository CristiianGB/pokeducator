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
  const [pokemon3, setPokemon3] = useState();
  const [load, setLoad] = useState(true);
  const [natur1, setNatur1] = useState();
  const [natur2, setNatur2] = useState();
  const [natur3, setNatur3] = useState();
  const [ability1, setAbility1] = useState();
  const [ability2, setAbility2] = useState();
  const [ability3, setAbility3] = useState();
  const [mov11, setMov11] = useState();
  const [mov12, setMov12] = useState();
  const [mov13, setMov13] = useState();
  const [mov14, setMov14] = useState();
  const [mov21, setMov21] = useState();
  const [mov22, setMov22] = useState();
  const [mov23, setMov23] = useState();
  const [mov24, setMov24] = useState();
  const [mov31, setMov31] = useState();
  const [mov32, setMov32] = useState();
  const [mov33, setMov33] = useState();
  const [mov34, setMov34] = useState();
  const [ani, setAni] = useState();

  let name1;
  let name2;
  let name3;
  let types = [];
  let abilitys = [];
  let natures = [];
  let moves = [];
  let movesFus = [];
  let height;
  let weight;
  let group_name = [];
  let Fus_group_name = [];
  let url;
  let atk;
  let ps;
  let defens;
  let sp_atk;
  let sp_defens;
  let spd;
  let abilityFus;
  let natureFus;
  let typesFus = [];

  function PokeFus() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    pokemon.name.length <= 3
      ? (name1 = pokemon.name)
      : pokemon.name <= 6
      ? (name1 = pokemon.name.slice(0, Math.round(pokemon.name.length / 2)))
      : (name1 = pokemon.name.slice(0, 4));
    pokemon2.name.length <= 3
      ? (name2 = pokemon2.name)
      : pokemon2.name <= 6
      ? (name2 = pokemon2.name.slice(
          Math.round(pokemon2.name.length / 2),
          pokemon2.name.length
        ))
      : (name2 = pokemon2.name.slice(3, pokemon2.name.length));
    name3 = name1 + name2;
    console.log(name3);
    pokemon.type.map((object) => {
      types.push(object);
    });
    pokemon2.type.map((object) => {
      types.push(object);
    });

    pokemon.group_name.map((object) => {
      group_name.push(object);
    });

    pokemon2.group_name.map((object) => {
      group_name.push(object);
    });

    group_name.map((object) => {
      Fus_group_name.indexOf(object) >= 0 ? "" : Fus_group_name.push(object);
    });
    console.log(Fus_group_name);
    if (types.length > 2) {
      for (let i = 0; typesFus.length < 2; i++) {
        let num = Math.floor(Math.random() * types.length);
        typesFus.indexOf(types[num]) >= 0 ? "" : typesFus.push(types[num]);
      }
    } else {
      typesFus = types;
    }

    abilitys = [ability1, ability2];
    let num = Math.floor(Math.random() * abilitys.length);
    setAbility3(abilitys[num]);
    abilityFus = abilitys[num];

    natures = [natur1, natur2];
    num = Math.floor(Math.random() * natures.length);
    setNatur3(natures[num]);
    natureFus = natures[num];
    height = pokemon.height + pokemon2.height;
    height = Math.floor(
      Math.random() * (height + 20 - (height - 20) + 1) + (height - 20)
    );

    weight = pokemon.weight + pokemon2.weight;
    weight = Math.floor(
      Math.random() * (weight + 20 - (weight - 20) + 1) + (weight - 20)
    );

    moves = [mov11, mov12, mov13, mov14, mov21, mov22, mov23, mov24];
    for (let i = 0; movesFus.length < 4; i++) {
      let num = Math.floor(Math.random() * moves.length);
      movesFus.push(moves[num]);
      let count = 0;
      let mov = [];
      moves.map((element, i) => {
        i != num ? mov.push(element) : "";
      });
      moves = mov;
      //movesFus.indexOf(moves[num]) >= 0 ? "" : movesFus.push(moves[num]); si quisieras que no se borre y que no salga repetido
    }
    setMov31(movesFus[0]);
    setMov32(movesFus[1]);
    setMov33(movesFus[2]);
    setMov34(movesFus[3]);

    let arr = [];
    movesFus.map((object) => {
      arr.push(object.id);
    });
    movesFus = arr;

    let stats = ["atk", "defens", "ps", "sp_atk", "sp_defens", "spd"];
    let statsFus = [
      { base_stat: 0, name: "atk" },
      { base_stat: 0, name: "defens" },
      { base_stat: 0, name: "ps" },
      { base_stat: 0, name: "sp_atk" },
      { base_stat: 0, name: "sp_defens" },
      { base_stat: 0, name: "spd" },
    ];
    stats.map((stat) => {
      let num1;
      let num2;
      let min;
      let max;
      let statRel;

      pokemon.stats.map((object) => {
        object.name == stat ? (num1 = object.base_stat) : "";
      });

      pokemon2.stats.map((object) => {
        object.name == stat ? (num2 = object.base_stat) : "";
      });

      if (num1 <= num2) {
        min = num1;
        max = num2;
      } else {
        min = num2;
        max = num1;
      }

      statRel = Math.floor(Math.random() * (max - min + 1) + min);

      stat == "atk"
        ? (atk = statRel)
        : stat == "defens"
        ? (defens = statRel)
        : stat == "ps"
        ? (ps = statRel)
        : stat == "sp_atk"
        ? (sp_atk = statRel)
        : stat == "sp_defens"
        ? (sp_defens = statRel)
        : stat == "spd"
        ? (spd = statRel)
        : "";
      statsFus.map((object) => {
        object.name == stat ? (object.base_stat = statRel) : "";
      });
    });

    url = `https://images.alexonsager.net/pokemon/fused/${pokemon.id}/${pokemon.id}.${pokemon2.id}.png`;

    let pokeFus = {
      group_name: Fus_group_name,
      height: height,
      weight: weight,
      stats: statsFus,
      img: url,
      name: name3,
      type: typesFus,
    };

    actions.addfus(pokeFus);

    const resp = fetch(
      "https://3001-cristiiangb-pokeducator-orhyao9u3ig.ws-eu74.gitpod.io/api/createPokemonFusion",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          group_name: Fus_group_name,
          height: height,
          weight: weight,
          ps: ps,
          atk: atk,
          defens: defens,
          sp_defens: sp_defens,
          sp_atk: sp_atk,
          spd: spd,
          img: url,
          name: name3,
          type: typesFus,
          nature: natureFus.id,
          ability: abilityFus.id,
          learning: movesFus,
          father: pokemon.id,
          mom: pokemon2.id
        }),
      }
    );

    setPokemon3(pokeFus);
    setTimeout(() => {
      setAni("a");
    }, 1000);
    setTimeout(() => {
      console.log(ability3);
      console.log(pokemon3);
      console.log(natur3);
    }, 3000);
  }

  function Fusion() {
    let count = 0;
    let arr = [
      natur1,
      natur2,
      ability1,
      ability2,
      mov11,
      mov12,
      mov13,
      mov14,
      mov21,
      mov22,
      mov23,
      mov24,
      pokemon,
      pokemon2,
    ];
    arr.map((object, i) => {
      object == null ? "" : object == "fallo" ? "" : count++;
    });
    console.log(count);
    count > 1 ? PokeFus() : "";

    natur1 == null ? setNatur1("fallo") : "";
    natur2 == null ? setNatur2("fallo") : "";
    ability1 == null ? setAbility1("fallo") : "";
    ability2 == null ? setAbility2("fallo") : "";
    mov11 == null ? setMov11("fallo") : "";
    mov12 == null ? setMov12("fallo") : "";
    mov13 == null ? setMov13("fallo") : "";
    mov14 == null ? setMov14("fallo") : "";
    mov21 == null ? setMov21("fallo") : "";
    mov22 == null ? setMov22("fallo") : "";
    mov23 == null ? setMov23("fallo") : "";
    mov24 == null ? setMov24("fallo") : "";
  }
  let pokes = store.pokemon_data.slice(0, 151);
  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const type = (option) => {
    return option.type == "normal" ? (
      <span>
        {option.name}{" "}
        <img className="tipoImgFusion mx-1" src={normal_img} alt="normal" />
      </span>
    ) : option.type == "fighting" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={lucha_img} alt="normal" />
      </span>
    ) : option.type == "flying" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={volador_img} alt="normal" />
      </span>
    ) : option.type == "poison" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={veneno_img} alt="normal" />
      </span>
    ) : option.type == "ground" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={tierra_img} alt="normal" />
      </span>
    ) : option.type == "rock" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={roca_img} alt="normal" />
      </span>
    ) : option.type == "ghost" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={fantasma_img} alt="normal" />
      </span>
    ) : option.type == "steel" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={acero_img} alt="normal" />
      </span>
    ) : option.type == "fire" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={fuego_img} alt="normal" />
      </span>
    ) : option.type == "water" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={agua_img} alt="normal" />
      </span>
    ) : option.type == "grass" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={planta_img} alt="normal" />
      </span>
    ) : option.type == "electric" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={electrico_img} alt="normal" />
      </span>
    ) : option.type == "phsychic" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={psiquico_img} alt="normal" />
      </span>
    ) : option.type == "ice" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={hielo_img} alt="normal" />
      </span>
    ) : option.type == "dragon" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={dragon_img} alt="normal" />
      </span>
    ) : option.type == "dark" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={siniestro_img} alt="normal" />
      </span>
    ) : option.type == "fairy" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={hada_img} alt="normal" />
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
        <img className="tipoImgFusion mx-1" src={sombra_img} alt="normal" />
      </span>
    ) : option.type == "bug" ? (
      <span>
        {option.name}
        <img className="tipoImgFusion mx-1" src={bicho_img} alt="normal" />
      </span>
    ) : (
      ""
    );
  };

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
          <div className={`row cartasFusion justify-content-center pkmn__container ${
              pokemon3 == null ? " d-none" : ""
            } ${ani != null ? " anim2" : "anim"} `}>
              <div class="pkmn__name text-white">
            {pokemon ? (
                    <h4 className="my-3 me-2 text-capitalize">{name3}</h4>
                  ) : (
                    ""
                  )}</div>
              <div class="pkmn__picture">
                {pokemon3 ? (
                    <img
                      className="pkmn__png fusionFoto"
                      src={pokemon3?.img}
                      alt="foto pokemon"
                    />
                  ) : (
                    ""
                  )} 
                			
              </div>
              <div class="pkmn__info">
					
					<div class="text-center row d-flex">
						<div class=" col-md-6">{tipos
                      .filter((a) => pokemon3?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}<p class="text--small">Tipo</p></div>
						<div class=" col-md-3">43<p class="text--small">Peso</p></div>
						<div class=" col-md-3">4<p class="text--small">Altura</p></div>
					</div>
          <div className="row d-flex">
            <div class="float-start text-center col-md-6">
          {pokemon3 ? (
                      <div className="stats_pokemon mt-3 mb-3 ">
                        <div className="table-responsive rounded-3 tablaStatsFusion">
                          <table className="table ">
                            <thead>
                              <th scope="col">Estadísticas</th>
                            </thead>
                            <tbody>
                              {pokemon3?.stats?.map((objeto) => (
                                <tr className="d-flex text-center align-items-center">
                                  <td className="col-5 ">
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
                                  <td className="col-5 mt-2">
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                          width: `${objeto.base_stat / 2}%`,
                                        }}
                                      ></div>
                                    </div>
                                  </td>
                                  <td className="col-2 fs-6">
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
					</div>
					
          <div className="text-center col-md-6 float-end marginFusion">
						<div class="row my-3 rowFusion">
							<div className="col-12">{mov31?.name} {tipos
                      .filter((a) => mov31?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1 float-end"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}</div>
							
						</div>
            <div class="row my-3 rowFusion">
							<div className="col-12">{mov32?.name} {tipos
                      .filter((a) => mov31?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1 float-end"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}</div>
							
						</div>
            <div class="row my-3 rowFusion">
							<div className="col-12">{mov33?.name} {tipos
                      .filter((a) => mov31?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1 float-end"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}</div>
							
						</div>
            <div class="row my-3 rowFusion">
							<div className="col-12">{mov34?.name} {tipos
                      .filter((a) => mov31?.type.includes(a.tipo))
                      .map((tipos) => {
                        return (
                          <img
                            className="tipoImg mx-1 float-end"
                            src={tipos.foto}
                            alt="foto de tipo"
                          />
                        );
                      })}</div>
							
						</div>
					</div>
          </div>
				</div>
          </div>
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
                  {pokes.slice(0, 151).map((objeto) => (
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
                      <div className="stats_pokemon mb-3 ">
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
                        <div className={ability1 == "fallo" ? "fallo" : ""}>
                          <Select
                            components={{ DropdownIndicator }}
                            placeholder={
                              ability1 == "fallo"
                                ? "Seleccione Habilidad"
                                : "Habilidad"
                            }
                            id={ability1 == "fallo" ? "fallo" : ""}
                            options={store.ability_data}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setAbility1(option)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={natur1 == "fallo" ? "fallo" : ""}>
                          <Select
                            components={{ DropdownIndicator }}
                            placeholder={
                              natur1 == "fallo"
                                ? "Seleccione Naturaleza"
                                : "Naturaleza"
                            }
                            options={store.nature_data}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setNatur1(option)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className={mov11 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov11 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov11(option)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={mov12 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov12 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov12(option)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className={mov13 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov13 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov13(option)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={mov14 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov14 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov14(option)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-2 text-center align-self-center">
              <div class="pokeballFusionPage" onClick={() => Fusion()}>
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
                  {pokes.slice(0, 151).map((objeto) => (
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
                        <div className={ability2 == "fallo" ? "fallo" : ""}>
                          <Select
                            components={{ DropdownIndicator }}
                            placeholder={
                              ability2 == "fallo"
                                ? "Seleccione Habilidad"
                                : "Habilidad"
                            }
                            options={store.ability_data}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setAbility2(option)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={natur2 == "fallo" ? "fallo" : ""}>
                          <Select
                            components={{ DropdownIndicator }}
                            placeholder={
                              natur2 == "fallo"
                                ? "Seleccione Naturaleza"
                                : "Naturaleza"
                            }
                            options={store.nature_data}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setNatur2(option)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className={mov21 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov21 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            ceholder="Movimiento"
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov21(option)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={mov22 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov22 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov22(option)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className={mov23 == "fallo" ? "fallo" : ""}>
                          <Select
                            placeholder={
                              mov23 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov23(option)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={mov24 == "fallo" ? "fallo" : ""}>
                        <Select
                            placeholder={
                              mov24 == "fallo"
                                ? "Seleccione Movimiento"
                                : "Movimiento"
                            }
                            components={{ DropdownIndicator }}
                            options={store.move_data}
                            getOptionLabel={(option) => type(option)}
                            getOptionValue={(option) => option.name}
                            onChange={(option) => setMov24(option)}
                          />
                        </div>
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
