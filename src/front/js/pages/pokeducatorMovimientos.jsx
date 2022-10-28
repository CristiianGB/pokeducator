import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientosStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorMovimientos = () => {
  const { store, actions } = useContext(Context);
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  const [number, setNumber] = useState(0);

  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  setTimeout(() => {
    setLoad(false);
  }, time[randomtime]);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
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
              number >= 750 ? setNumber(794) : setNumber(number + 50);
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="pokegallery">
        {load ? (
          <div className="container align-items-center">
            <img
              className="centred img-fluid"
              src={loading}
              alt="Cargando..."
            />
          </div>
        ) : (
          <table className="table table-responsive mt-4">
            <thead className="text-uppercase fs-5">
              <tr>
                <th scope="col" className="fw-bold">
                  Nombre
                </th>
                <th scope="col" className="fw-bold">
                  Tipo
                </th>
                <th scope="col" className="fw-bold">
                  Poder
                </th>
                <th scope="col" className="fw-bold">
                  Precisión
                </th>
                <th scope="col" className="fw-bold">
                  PP
                </th>
              </tr>
            </thead>

            <tbody>
              {store.move_data.slice(number, number + 50).map((move) => (
                <tr data-index={move.id}>
                  <td className="fs-6">
                    <a className="links" href={`/movimiento/${move.id}`}>
                      {move.name}
                    </a>
                  </td>
                  <td>
                    <button className={`type-pokemon ${move.type}-background`}>
                      {move.type}
                    </button>
                  </td>
                  <td className="fs-6">{move.power ? move.power : "-"}</td>
                  <td className="fs-6">
                    {move.accuracy ? move.accuracy : "-"}
                  </td>
                  <td className="fs-6">{move.pp ? move.pp : "-"}</td>
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
