import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonsStyles.css";

const PokeducatorPokemons = () => {
  const {store, actions} = useContext(Context)
 
  const [load, setLoad] = useState("true");

  



  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container align-items-center">
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
                <a href="">
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
