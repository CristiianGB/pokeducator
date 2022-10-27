import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorObjetos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");
  const [number, setNumber] = useState(0);
  function Prev() {
    !number <= 0 ? setNumber(number - 20) : "";
  }

  function Next() {
    number > 1139 ? "" : setNumber(number + 20);
  }

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
                <button
                  className=" btn-sm mx-3 float-start w-25 buttonPokemonInfo"
                  onClick={() => {
                    number > 49
                      ? setNumber(number - 50)
                      : number != 0
                      ? setNumber(0)
                      : "";
                  }}
                >
                  Anterior
                </button>
              </div>

              <div className="col-sm-6 text-end">
                <button
                  className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
                  onClick={() => {
                    number >= 1550 ? setNumber(1557) : setNumber(number + 50);
                  }}
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div className="table-responsive rounded-3 mt-4">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {store.item_data.slice(number, number + 50).map((objeto) => (
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
