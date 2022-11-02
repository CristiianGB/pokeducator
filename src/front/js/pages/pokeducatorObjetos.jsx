import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetosStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorObjetos = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");
  const [number, setNumber] = useState(0);
  const [items, setItems] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (load != false) {
        setLoad(false);
        setItems(store.item_data);
        console.log(store.item_data)
      }
    }, 2000);
  },[])


  return (
    <div className="App container">
      <div className="d-flex flex-column justify-content-center ">
        <input
          type="text"
          name="search"
          onChange={(event) =>
            event.target.value.length > 2
              ? setItems(
                  store.item_data.filter((item) =>
                    item.name.toUpperCase().includes(event.target.value.toUpperCase())
                  )
                )
              : setItems(store.item_data)
          }
        />
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
                    number > 49 ? setNumber(number - 50) : setNumber(0);
                  }}
                >
                  Anterior
                </button>
              </div>

              <div className="col-sm-6 text-end">
                <button
                  className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
                  onClick={() => {
                    number > items.length - 100
                      ? setNumber(items.length - 50)
                      : setNumber(number + 50);
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
                  {items?.slice(number, number+50).map((objeto) => (
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
