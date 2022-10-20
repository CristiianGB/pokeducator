
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
            {store.single_ability_data.generation?.name == "generation-i" 
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/2/2a/Primera_generaci%C3%B3n.png" alt="generation-i" /> 
                  : store.single_ability_data.generation?.name == "generation-ii" 
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/f/f7/Segunda_generaci%C3%B3n.png" alt="generation-ii" /> 
                  : store.single_ability_data.generation?.name == "generation-iii"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/5/54/Tercera_generaci%C3%B3n.png" alt="generation-iii" /> 
                  : store.single_ability_data.generation?.name == "generation-iv"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/0/0a/Cuarta_generaci%C3%B3n.png" alt="generation-iv" /> 
                  : store.single_ability_data.generation?.name == "generation-v"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/6/61/Quinta_generaci%C3%B3n.png/" alt="generation-v" />
                  : store.single_ability_data.generation?.name == "generation-vi"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/1/1a/Sexta_generaci%C3%B3n.png/" alt="generation-vi" />
                  : store.single_ability_data.generation?.name == "generation-vii"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/0/0a/S%C3%A9ptima_generaci%C3%B3n.png/" alt="generation-vii" />
                  : store.single_ability_data.generation?.name == "generation-viii"
                  ? <img className="generationimg ms-2" src="https://static.wikia.nocookie.net/espokemon/images/b/b4/Octava_generaci%C3%B3n.png/" alt="generation-viii" />
                  :""}
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