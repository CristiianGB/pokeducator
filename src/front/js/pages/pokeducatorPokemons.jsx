import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PokemonImg from "../component/pokemonimg.jsx";

const PokeducatorPokemons = () => {
    const {store, context} = useContext(Context)
    

    return (
    <div className="container align-items-center">
      <div className="row">
        {store.pokemons.map(pokemon => <PokemonImg key={pokemon.url} pokemon={pokemon}/>)}
      </div>
    </div>
  );
};
export default PokeducatorPokemons;
