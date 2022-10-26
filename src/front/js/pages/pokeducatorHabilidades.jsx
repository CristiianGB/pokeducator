import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";
import "../../styles/pokeducatorHabilidadesStyles.css"

const PokeducatorHabilidad = () => {
    const {store, actions} = useContext(Context)
    const [load, setLoad] = useState("true");
    


  setTimeout(() => {
    setLoad(false);
  }, 2000);

  return (
    
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
      {!store.ability?.previous ? (
          ""
        ) : (
          <div className="col-sm-6 text-start">
          <button
            className="btn-sm mx-3 float-start w-25 buttonPokemonInfo"
            onClick={() => {
              actions.abilityFind(store.ability.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button></div>
        )}
        <div className="col-sm-6 text-end">
        <button
          className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
          onClick={() => {
            actions.abilityFind(store.ability.next);
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
          <table className="table table-responsive mt-4">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Generación</th>
              </tr>
            </thead>
            <tbody>
              {store.ability_data.map((habilidad, i) => (
                
                <tr data-index={i}>
                  <td><a className="links" href={`/habilidad/${habilidad.id}`}>
                    {
                  habilidad.names.map((object) => (
                    object.language?.name=="es"? object.name :""
                    ))}</a></td>
                  <td>{habilidad.flavor_text_entries.find(object => 
                    object.language?.name=="es"
                    ).flavor_text
                    }</td>
                  <td>{habilidad.generation?.name == "generation-i" 
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/2/2a/Primera_generaci%C3%B3n.png" alt="generation-i" /> 
                  : habilidad.generation?.name == "generation-ii" 
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/f/f7/Segunda_generaci%C3%B3n.png" alt="generation-ii" /> 
                  : habilidad.generation?.name == "generation-iii"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/5/54/Tercera_generaci%C3%B3n.png" alt="generation-iii" /> 
                  : habilidad.generation?.name == "generation-iv"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/0/0a/Cuarta_generaci%C3%B3n.png" alt="generation-iv" /> 
                  : habilidad.generation?.name == "generation-v"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/6/61/Quinta_generaci%C3%B3n.png/" alt="generation-v" />
                  : habilidad.generation?.name == "generation-vi"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/1/1a/Sexta_generaci%C3%B3n.png/" alt="generation-vi" />
                  : habilidad.generation?.name == "generation-vii"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/0/0a/S%C3%A9ptima_generaci%C3%B3n.png/" alt="generation-vii" />
                  : habilidad.generation?.name == "generation-viii"
                  ? <img className="generationimg" src="https://static.wikia.nocookie.net/espokemon/images/b/b4/Octava_generaci%C3%B3n.png/" alt="generation-viii" />
                  :""}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
    </div>
  );
};
export default PokeducatorHabilidad;
