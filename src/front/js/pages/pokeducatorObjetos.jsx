import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorObjetos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center ">
        {load ? (
          <div className="m-auto">
            <img src={loading} alt="Cargando..." />
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-sm-6 text-start">
                {!store.item?.previous ? (
                  ""
                ) : (
                  <button
                    className=" btn-sm buttonPokemonInfo"
                    onClick={() => {
                      actions.itemFind(store.item.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
                    }}
                  >
                    Anterior
                  </button>
                )}
              </div>

              <div className="col-sm-6 text-end">
                <button
                  className="btn-sm buttonPokemonInfo"
                  onClick={() => {
                    actions.itemFind(store.item.next);
                  }}
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div className="bg-light rounded-3 mt-3">
              <div className="table-responsive table-secondary rounded-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>NOMBRE</th>
                      <th>DESCRIPTION</th>
                      <th>COSTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.item_data.map((objeto) => (
                      <tr>
                        <td>
                          <img src={objeto.sprites.default} alt={objeto.name} />
                        </td>
                        <td>
                          <a className="links" href={`/objeto/${objeto.id}`}>
                            {objeto.names.map((elemento) =>
                              elemento.language?.name == "es"
                                ? elemento.name
                                : ""
                            )}
                          </a>
                        </td>
                        <td>
                          {
                            objeto.flavor_text_entries?.find(
                              (elemento) => elemento.language?.name == "es"
                            )?.text
                          }
                        </td>
                        <td>{objeto.cost == 0 ? "-" : `${objeto.cost}¥`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default PokeducatorObjetos;
