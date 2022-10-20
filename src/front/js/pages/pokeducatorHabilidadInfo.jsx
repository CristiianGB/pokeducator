
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorHabilidadInfoStyles.css";

const PokeducatorHabilidadInfo = () => {
    const {store, actions} = useContext(Context)
    const params = useParams();
  
   useEffect(() => {
     if (!actions.abilityFindOneInData(params.theid)) {
       actions.abilityFindOne(
         "https://pokeapi.co/api/v2/ability/" + params.theid
       );
     }
   }, []);


    return (
        <div className="container">
        <div className="row mt-2">
            <h1>   
            {store.single_ability_data.names?.map((object) => (object.language?.name=="es"? object.name :""))}
            </h1>
            <hr />
        </div>
        <div>
            <p>
             {store.single_ability_data?.flavor_text_entries?.find(object => 
                    object.language?.name=="es"
                    ).flavor_text}   
            </p>
        </div>
        <div className="row mb-2">
            <h3>Pokémon que pueden tener esta habilidad:</h3><hr />
            <ul>
            {store.single_ability_data.pokemon?.map((poke)=> <li className="pokemonList">{poke.pokemon?.name + " "}</li> )}
            </ul>
        </div>
        
    </div>
    )
}

export default PokeducatorHabilidadInfo;