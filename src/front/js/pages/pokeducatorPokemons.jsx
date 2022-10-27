import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonsStyles.css";
import Select from "react-select";
import loading from "../../assets/img/loading.gif";

const PokeducatorPokemons = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const [slice0, setSlice0] = useState(0)
  const [slice50, setSlice50] = useState(52)
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
        {!slice0>=52 ?  (
          ""
        ) : (
          <div className="col-sm-6 text-start">
          <button
            className=" btn-sm mx-3 float-start w-25 buttonPokemonInfo"
            onClick={() => {
              if (slice0  == 0){
                
                
              }
              else if (slice0 == 1144 && slice50 == 1154 ){
                setSlice0(1092)
                setSlice50(1144)
                
              }
              else{
                setSlice0(slice0 -52) 
                setSlice50(slice50 - 52)
              }
            }}
          >
            Anterior
          </button>
          </div>
        )}
        <div className="col-sm-6 text-end">
        <button
          className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
          onClick={() => {
            if(slice50 >= 1144){
              setSlice0(1144)
              setSlice50(1154)
            }
            else if (slice50 == 1154){

            }
            else{
              setSlice0(slice0 +52) 
              setSlice50(slice50 + 52)
            }
            
          }}
        >
          Siguiente
        </button></div>
      </div>
      <div className="pokegallery">
        {load ? (
         <div className="container align-items-center">
         <img className="centred img-fluid" src={loading} alt="Cargando..." />
       </div>
        ) : (
          store.pokemon_data.slice(slice0, slice50).map((pokemon, i) => (
            <div className="col-md-3" id={pokemon.id} key={pokemon.id}>
              <div
                className="card cardPokemon"
                style={{
                  backgroundColor: "#F0F0C9",
                }}
              >
                <a href={`/pokemon/${pokemon.id}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    className="img-fluid pokemonCardImg"
                    src={
                      pokemon.img
                    }
                    alt={pokemon.name}
                  />
                </a>
                <div className="">
                  <h5 className="nombrePokemon">{pokemon.name}</h5>
                  <h6>type: {pokemon.type.map((tipo,i)=>tipo + " ")}</h6>
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
