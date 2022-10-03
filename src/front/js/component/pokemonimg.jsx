import React, { useContext, useEffect } from "react";
import "../../styles/footerStyles.css"
import { Context } from "../store/appContext.jsx";

const PokemonImg = ({pokemon}) => {
const {store, actions} = useContext(Context)

    useEffect(()=>{
        if (pokemon){
            actions.fetchPokeapiPokemonId(pokemon.url)
        }
    },[pokemon])

    

    return (
        <div className="col-2">
          <div>
            <p>{pokemon.name}</p>
            <img
              src={store.pokemon.sprites?.front_default}
              alt="pokemon"
            />
          </div>
        </div>
    )
}

export default PokemonImg;