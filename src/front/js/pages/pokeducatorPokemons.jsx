import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonsStyles.css";

const PokeducatorPokemons = () => {
  const {store, actions} = useContext(Context)
  const [load, setLoad] = useState("true");
  const [iSlice, setISlice] = useState(0)
  const [jSlice, setJSlice] = useState(20)

  console.log(store.pokemon)


  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        {!store.pokemon?.previous?"":
        <button 
        className="btn btn-primary btn-sm mx-3 float-start w-25" 
        onClick={()=>{
          actions.pokemonFind(store.pokemon.previous)//guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
        }}>
            Anterior
        </button>}
        <button 
        className="btn btn-primary btn-sm mx-3 float-end w-25"
        onClick={()=>{
          actions.pokemonFind(store.pokemon.next)
        }}>
            Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          store.pokemon_data.map((img, i) => (
            <div className="col-md-3" id={img.id} key={img.id}>
              <div
                className="card"
                style={{
                  backgroundColor: "#F0F0C9",
                }}
              >
                <a href={`/pokemon/${img.id}`}>
                <img style={{
                  width: "100px",
                  height: "100px"
                }}
                 className="img-fluid" 
                 src={img.sprites.front_default} alt="pokemon" />
                 </a>
                <div className="">
                  <h5>{img.name}</h5>
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
