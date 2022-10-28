import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorObjetos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");
  const [number, setNumber] = useState(0);
  const [slice0, setSlice0] = useState(0)
  const [slice50, setSlice50] = useState(52)

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center ">
        {load ? (
          <div className="container align-items-center">
            <img
              className="centred img-fluid"
              src={loading}
              alt="Cargando..."
            />
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-sm-6 text-start">
                {slice0>0 ?  <button
            className=" btn-sm mx-3 float-start w-25 buttonPokemonInfo"
            onClick={() => {
              if (slice0  == 0){
              }
              else if (slice0 == 1144 && slice50 == 1154 ){
                setSlice0(1092)
                setSlice50(1144)
                
              }
              else{
                setSlice0(slice0 -52) 
                setSlice50(slice50 - 52)
              }
            }}
          >
            Anterior
          </button> : ""}
        </div>

        <div className="col-sm-6 text-end">
          <button
            className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
            onClick={() => {
              if(slice50 >= 1600){
                setSlice0()
                setSlice50()
              }
              else if (slice50 > 1600){
  
              }
              else{
                setSlice0(slice0 +52) 
                setSlice50(slice50 + 52)
              }
              console.log(slice50)
            }}
          >
            Siguiente
          </button>
              </div>
            </div>

            <div className="table-responsive rounded-3 mt-4">
              <table className="table">
                <thead className="tablaTitulos">
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {store.item_data.slice(slice0, slice50).map((objeto) => (
                    <tr>
                      <td>
                        <a className="links" href={`/objeto/${objeto.id}`}>
                          <img
                            className="objetoTablaImg"
                            src={objeto.img}
                            alt={objeto.name}
                          />
                        </a>
                      </td>
                      <td>
                        <a className="links" href={`/objeto/${objeto.id}`}>
                          {objeto.name}
                        </a>
                      </td>
                      <td>{objeto.description}</td>
                      <td>{objeto.cost == 0 ? "-" : `${objeto.cost}¥`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default PokeducatorObjetos;
