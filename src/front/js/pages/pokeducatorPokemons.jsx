import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import PokemonImg from "../component/pokemonimg.jsx";

const PokeducatorPokemons = () => {
    const {store, context} = useContext(Context)
    
    console.log(store.pokemon_data)

    return (
      <div className="container align-items-center">
        <div className="row">
          {store.pokemon_data.map(pokemon => <PokemonImg key={pokemon.id} pokemon={pokemon}/>)}
        </div>
      </div>
  );
};
export default PokeducatorPokemons;
