import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetoInfoStyles.css";
import loading from "../../assets/img/loading.gif";

const PokeducatorObjetoInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  let time = [2000, 3000, 5000];
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
    if (!actions.FindOneItem(params.theid)) {
      actions.FindOneItem(params.theid);
    }
  }, []);

  return (
    <>
      {store.single_item_data ? (
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
              <div className="row align-items-center">
                <div className="col-5 text-end">
                  <img
                    className="img-fluid objetoimg"
                    src={store.single_item_data.img}
                    alt={store.single_item_data.name}
                  />
                </div>
                <div className="col-5">
                  <h1>{store.single_item_data.name}</h1>
                  <p>{store.single_item_data.description}</p>
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
