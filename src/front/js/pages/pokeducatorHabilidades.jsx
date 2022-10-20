import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";

const PokeducatorHabilidad = () => {
    const {store, actions} = useContext(Context)
    const [load, setLoad] = useState("true");
    


  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
      {!store.ability?.previous ? (
          ""
        ) : (
          <button
            className="btn btn-primary btn-sm mx-3 float-start w-25"
            onClick={() => {
              actions.abilityFind(store.ability.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button>
        )}
        <button
          className="btn btn-primary btn-sm mx-3 float-end w-25"
          onClick={() => {
            actions.abilityFind(store.ability.next);
          }}
        >
          Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
        ) : (
          <table className="table">
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
                  <td>{habilidad.generation?.name}</td>
                  
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
