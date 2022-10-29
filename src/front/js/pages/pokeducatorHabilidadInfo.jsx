
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorHabilidadInfoStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorHabilidadInfo = () => {
    const {store, actions} = useContext(Context)
    const params = useParams();
    
  const [num, setNum] = useState(0) 
  const [load, setLoad] = useState(true)
  let time = [2000, 3000, 4000, 5000]
  let randomtime = Math.floor(Math.random() * time.length)

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  setTimeout(()=>{
    setLoad(false)
  },time[randomtime])

   useEffect(() => {
     if (!actions.FindOneAbility(params.theid)) {
       actions.FindOneAbility(
        params.theid
       );
     }
   }, []);


    return (
      <>{load ? (
        <div className="container align-items-center">
        <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (<><div className="container">
        <div className="row mt-2">
            <h1>   
            {store.single_ability_data.ability.name}
            <img className="generationimg ms-2" src={store.single_ability_data.ability.img} alt={store.single_ability_data.ability.generation} />
                
            </h1>
            <hr />
        </div>
        <div>
            <p>
             {store.single_ability_data.ability.description}   
            </p>
        </div>
        <div className="row mb-2">
            <h3>Pokémon que pueden tener esta habilidad:</h3><hr />
            <ul>
            {store.single_ability_data.pokemons?.map((poke)=> <li className="pokemonList"><a className="links" href={`/pokemon/`+poke.id}>{poke.name}</a></li> )}
            </ul>
        </div>
        
    </div></>)}</>
    )
}

export default PokeducatorHabilidadInfo;