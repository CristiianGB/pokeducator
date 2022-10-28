import React, { useContext, useEffect, useState } from "react";
import loading from "../../assets/img/loading.gif";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientoInfoStyles.css";

const PokeducatorObjetoInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  let time = [2000, 3000, 4000];
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

  useEffect(() => {
    if (!actions.FindOneMove(params.theid)) {
      actions.FindOneMove(params.theid);
    }
  }, []);

  return (
    <>
      {store.single_move_data ? (
        load ? (
          <div className="container align-items-center">
            <img
              className="centred img-fluid"
              src={loading}
              alt="Cargando..."
            />
          </div>
        ) : (
          <>
            <div className="container">
              <div className="row mt-2">
                <div className="col-6">
                  <h1 className="fw-bold">{store.single_move_data.name}</h1>
                </div>
                <div className="col-6 text-end align-self-center">
                  <button
                    className={`type-pokemon ${store.single_move_data.type}-background`}
                  >
                    {store.single_move_data.type}
                  </button>
                </div>
                <hr />
              </div>
              <div>
                <h4>{store.single_move_data.description}</h4>
              </div>
              <div className="row mb-2">
                <div className="col-sm-2 fw-bold">
                  Poder: {store.single_move_data.power}
                </div>
                <div className="col-sm-2 fw-bold">
                  Precisión: {store.single_move_data.accuracy}
                </div>
                <div className="col-sm-2 fw-bold">
                  PP: {store.single_move_data.pp}
                </div>
                <div className="col-sm-2 fw-bold">
                  Prioridad: {store.single_move_data.priority}
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        ""
      )}
    </>
  );
};

export default PokeducatorObjetoInfo;
