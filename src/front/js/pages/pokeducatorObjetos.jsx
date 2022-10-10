import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";

const PokeducatorObjetos = () => {
  const {store, actions} = useContext(Context)
  const [load, setLoad] = useState("true");


  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        {!store.item?.previous?"":
        <button 
        className="btn btn-primary btn-sm mx-3 float-start w-25" 
        onClick={()=>{
          actions.itemFind(store.item.previous)//guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
        }}>
            Anterior
        </button>}
        <button 
        className="btn btn-primary btn-sm mx-3 float-end w-25"
        onClick={()=>{
          actions.itemFind(store.item.next)
        }}>
            Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          store.item_data.map((item, i) => (
            <div className="col-md-3" id={item.id} key={item.id}>
              <div
                className="card"
                style={{
                  backgroundColor: "#F0F0C9",
                }}
              >
                <a href={`/objeto/${item.id}`}>
                <img style={{
                  width: "100px",
                  height: "100px"
                }}
                 className="img-fluid" 
                 src={item.sprites.default} alt="item" />
                 </a>
                <div>
                  <h5>{item.names.map((object) => (
                    object.language?.name=="es"? object.name :""
                    ))}
                  </h5>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default PokeducatorObjetos;
