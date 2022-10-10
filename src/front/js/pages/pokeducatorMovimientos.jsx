import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientosStyles.css";

const PokeducatorMovimientos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");

  
  
  
  

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        {!store.move?.previous ? (
          ""
        ) : (
          <button
            className="btn btn-primary btn-sm mx-3 float-start w-25"
            onClick={() => {
              actions.moveFind(store.move.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button>
        )}
        <button
          className="btn btn-primary btn-sm mx-3 float-end w-25"
          onClick={() => {
            actions.moveFind(store.move.next);
          }}
        >
          Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Poder</th>
                <th scope="col">Precisión</th>
                <th scope="col">PP</th>
              </tr>
            </thead>
            <tbody>
              {store.move_data.map((move, i) => (
                <tr data-index={i}>
                  <td><a className="links" href={`/movimiento/${move.id}`}>{move.names.map((object) => (
                    object.language?.name=="es"? object.name :""
                    ))}</a></td>
                  <td>{move.type?.name}</td>
                  <td>{move.accuracy}</td>
                  <td>{move.power}</td>
                  <td>{move.pp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
export default PokeducatorMovimientos;
{
  /*type pp accuracy power name*/
}
