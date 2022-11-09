import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonsStyles.css";
import Select from "react-select";
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

const PokeducatorPokemons = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const [number, setNumber] = useState(0);
  const [pokemons, setPokemons] = useState();
  let time = [2000, 3000, 4000, 5000]; // sensacion de carga porque el tiempo es random
  let randomtime = Math.floor(Math.random() * time.length);

  useEffect(() => {
    setTimeout(() => {
      if (load != false && !pokemons) {
        setLoad(false);
        setPokemons(store.pokemon_data);
      }
    }, time[randomtime]);
  }, []);

  //cuando pase el tiempo ( asi el fetch está hecho ) se carga la pagina

  return (
    <div className="App container align-items-center">
      {load ? (
        <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (
        <>
          {/* BUSCADOR Y BOTONES */}
          <div className="d-flex align-items-center mt-3">
            <div className="col-sm-4 text-start">
              <button
                className="buttonPokemonInfo"
                onClick={() => {
                  number > 49 ? setNumber(number - 52) : setNumber(0);
                }}
              >
                Anterior
              </button>
            </div>
            <div className="col-sm-4">
              <div className="border-bottom">
                <input
                  type="text"
                  className="form-control text-center border-0"
                  id="buscador"
                  placeholder="Elijo a..."
                  onChange={(event) =>
                    event.target.value.length > 2
                      ? setPokemons(
                          store.pokemon_data.filter((pokemon) =>
                            pokemon.name.includes(event.target.value)
                          )
                        )
                      : setPokemons(store.pokemon_data)
                  }
                />
              </div>
            </div>

            <div className="col-sm-4 text-end">
              <button
                className="btn buttonPokemonInfo"
                onClick={() => {
                  number > pokemons.length - 104
                    ? setNumber(pokemons.length - 52)
                    : setNumber(number + 52);
                }}
              >
                Siguiente
              </button>
            </div>
          </div>
          <div className="pokegallery">
            {pokemons?.slice(number, number + 52).map((pokemon, i) => (
              <div className="col-md-3" id={pokemon.id} key={pokemon.id}>
                <div className="card bg-light m-4 cardPokemon">
                  <a href={`/pokemon/${pokemon.id}`}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                      className="img-fluid pokemonCardImg mt-3"
                      src={pokemon.img}
                      alt={pokemon.name}
                    />
                  </a>
                  <div className="">
                    <h5 className="nombrePokemon">{pokemon.name}</h5>
                    <h6>
                      {pokemon.type.map((tipo, i) =>
                        tipo == "normal" ? (
                          <img
                            className="tipoImg mx-1"
                            src={normal_img}
                            alt="normal"
                          />
                        ) : tipo == "fighting" ? (
                          <img
                            className="tipoImg mx-1"
                            src={lucha_img}
                            alt="normal"
                          />
                        ) : tipo == "flying" ? (
                          <img
                            className="tipoImg mx-1"
                            src={volador_img}
                            alt="normal"
                          />
                        ) : tipo == "poison" ? (
                          <img
                            className="tipoImg mx-1"
                            src={veneno_img}
                            alt="normal"
                          />
                        ) : tipo == "ground" ? (
                          <img
                            className="tipoImg mx-1"
                            src={tierra_img}
                            alt="normal"
                          />
                        ) : tipo == "rock" ? (
                          <img
                            className="tipoImg mx-1"
                            src={roca_img}
                            alt="normal"
                          />
                        ) : tipo == "ghost" ? (
                          <img
                            className="tipoImg mx-1"
                            src={fantasma_img}
                            alt="normal"
                          />
                        ) : tipo == "steel" ? (
                          <img
                            className="tipoImg mx-1"
                            src={acero_img}
                            alt="normal"
                          />
                        ) : tipo == "fire" ? (
                          <img
                            className="tipoImg mx-1"
                            src={fuego_img}
                            alt="normal"
                          />
                        ) : tipo == "water" ? (
                          <img
                            className="tipoImg mx-1"
                            src={agua_img}
                            alt="normal"
                          />
                        ) : tipo == "grass" ? (
                          <img
                            className="tipoImg mx-1"
                            src={planta_img}
                            alt="normal"
                          />
                        ) : tipo == "electric" ? (
                          <img
                            className="tipoImg mx-1"
                            src={electrico_img}
                            alt="normal"
                          />
                        ) : tipo == "psychic" ? (
                          <img
                            className="tipoImg mx-1"
                            src={psiquico_img}
                            alt="normal"
                          />
                        ) : tipo == "ice" ? (
                          <img
                            className="tipoImg mx-1"
                            src={hielo_img}
                            alt="normal"
                          />
                        ) : tipo == "dragon" ? (
                          <img
                            className="tipoImg mx-1"
                            src={dragon_img}
                            alt="normal"
                          />
                        ) : tipo == "dark" ? (
                          <img
                            className="tipoImg mx-1"
                            src={siniestro_img}
                            alt="normal"
                          />
                        ) : tipo == "fairy" ? (
                          <img
                            className="tipoImg mx-1"
                            src={hada_img}
                            alt="normal"
                          />
                        ) : tipo == "unknown" ? (
                          <img
                            className="tipoImg mx-1"
                            src={desconocido_img}
                            alt="normal"
                          />
                        ) : tipo == "shadow" ? (
                          <img
                            className="tipoImg mx-1"
                            src={sombra_img}
                            alt="normal"
                          />
                        ) : tipo == "bug" ? (
                          <img
                            className="tipoImg mx-1"
                            src={bicho_img}
                            alt="normal"
                          />
                        ) : (
                          ""
                        )
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default PokeducatorPokemons;
