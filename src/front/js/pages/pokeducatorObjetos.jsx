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
        console.log(store.item_data);
      }
    }, 2000);
  }, []);

  return (
    <div className="App container align-items-center">
      {load ? (
        <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (
        <>
          {/* BUSCADOR Y BOTONES */}
          <div className="d-flex align-items-center mt-3">
            <div className="col-sm-4 text-start">
              <button
                className="buttonPokemonInfo"
                onClick={() => {
                  number > 49 ? setNumber(number - 50) : setNumber(0);
                }}
              >
                Anterior
              </button>
            </div>
            <div className="col-sm-4">
              <div className="border-bottom">
                <input
                  type="text"
                  className="form-control text-center border-0"
                  id="buscador"
                  placeholder="BUSCAR MOVIMIENTO"
                  onChange={(event) =>
                    event.target.value.length > 2
                      ? setItems(
                          store.item_data.filter((item) =>
                            item.name
                              .toUpperCase()
                              .includes(event.target.value.toUpperCase())
                          )
                        )
                      : setItems(store.item_data)
                  }
                />
              </div>
            </div>
            <div className="col-sm-4 text-end">
              <button
                className="btn buttonPokemonInfo"
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
          {/* TABLA DE OBJETOS */}
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
                {items?.slice(number, number + 50).map((objeto) => (
                  <tr key={objeto.id}>
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
  );
};
export default PokeducatorObjetos;
