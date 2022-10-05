import { data } from "jquery";
import React, { useContext, useEffect } from "react";
import "../../styles/footerStyles.css"
import { Context } from "../store/appContext.jsx";

const PokemonImg = ({pokemon}) => {
    
    return (
        <div className="col-3">
          <div>
            <p>{pokemon.name}</p>
            <a href={"/pokemon/"+pokemon.id}>
            <img
              src={pokemon.sprites?.front_default}
              alt="pokemon"
            />
            </a>
          </div>
        </div>
    )
}

export default PokemonImg;