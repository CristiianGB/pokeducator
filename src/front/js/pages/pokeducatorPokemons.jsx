import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonsStyles.css";
import Select from "react-select";
import loading from "../../assets/img/loading.gif";

const PokeducatorPokemons = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  let time = [2000, 3000, 4000, 5000]; // sensacion de carga porque el tiempo es random
  let randomtime = Math.floor(Math.random() * time.length);

  setTimeout(() => {
    setLoad(false);
  }, time[randomtime]); //cuando pase el tiempo ( asi el fetch está hecho ) se carga la pagina

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        <div className="App container mt-2 mb-3">
          <h1>Search Bar Dropdown</h1>
          <Select
            options={store.pokemon}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
          />
          <br />
          <button className="btn btn-primary">Search</button>
        </div>
        {!store.pokemon?.previous ? (
          ""
        ) : (
          <button
            className="btn btn-primary btn-sm mx-3 float-start w-25"
            onClick={() => {
              actions.pokemonFind(store.pokemon.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button>
        )}
        <button
          className="btn btn-primary btn-sm mx-3 float-end w-25"
          onClick={() => {
            actions.pokemonFind(store.pokemon.next);
          }}
        >
          Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <div className="m-auto">
            <img src={loading} alt="Cargando..." />
          </div>
        ) : (
          store.pokemon_data.map((img, i) => (
            <div className="col-md-3" id={img.id} key={img.id}>
              <div
                className="card cardPokemon"
                style={{
                  backgroundColor: "#F0F0C9",
                }}
              >
                <a href={`/pokemon/${img.id}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    className="img-fluid pokemonImg"
                    src={
                      img.sprites.other?.["official-artwork"]?.front_default
                        ? img.sprites.other?.["official-artwork"]?.front_default
                        : img.sprites.versions?.["generation-vii"]?.[
                            "ultra-sun-ultra-moon"
                          ].front_default
                        ? img.sprites.versions?.["generation-vii"]?.[
                            "ultra-sun-ultra-moon"
                          ].front_default
                        : img.sprites.versions?.["generation-vi"]?.["x-y"]
                            .front_default
                        ? img.sprites.versions?.["generation-vi"]?.["x-y"]
                            .front_default
                        : img.sprites.other?.home?.front_default
                        ? img.sprites.other?.home?.front_default
                        : ""
                    }
                    alt={img.name}
                  />
                </a>
                <div className="">
                  <h5 className="nombrePokemon">{img.name}</h5>
                  <h6>type: {img.types[0].type.name}</h6>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default PokeducatorPokemons;
