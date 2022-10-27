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
                <h1>
                  {store.single_move_data.name}
                 
                </h1>
                <hr />
              </div>
              <div>
                <p>{store.single_move_data.description}</p>
              </div>
              <div className="row mb-2">
                <div className="col-sm-2">
                  Poder: {store.single_move_data.power}
                </div>
                <div className="col-sm-2">
                  Precisión: {store.single_move_data.accuracy}
                </div>
                <div className="col-sm-2">PP: {store.single_move_data.pp}</div>
                <div className="col-sm-2">
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
