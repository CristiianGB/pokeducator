import React, { useContext, useEffect, useState } from "react";
import loading from "../../assets/img/loading.gif";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientoInfoStyles.css";
import acero_img from "../../assets/img/tiposimg/acero.png";
import agua_img from "../../assets/img/tiposimg/agua.png";
import bicho_img from "../../assets/img/tiposimg/bicho.png";
import dragon_img from "../../assets/img/tiposimg/dragon.png";
import electrico_img from "../../assets/img/tiposimg/electrico.png";
import fantasma_img from "../../assets/img/tiposimg/fantasma.png";
import fuego_img from "../../assets/img/tiposimg/fuego.png";
import hada_img from "../../assets/img/tiposimg/hada.png";
import hielo_img from "../../assets/img/tiposimg/hielo.png";
import lucha_img from "../../assets/img/tiposimg/lucha.png";
import normal_img from "../../assets/img/tiposimg/normal.png";
import planta_img from "../../assets/img/tiposimg/planta.png";
import psiquico_img from "../../assets/img/tiposimg/psiquico.png";
import roca_img from "../../assets/img/tiposimg/roca.png";
import siniestro_img from "../../assets/img/tiposimg/siniestro.png";
import tierra_img from "../../assets/img/tiposimg/tierra.png";
import veneno_img from "../../assets/img/tiposimg/veneno.png";
import volador_img from "../../assets/img/tiposimg/volador.png";
import desconocido_img from "../../assets/img/tiposimg/desconocido.png";
import sombra_img from "../../assets/img/tiposimg/sombra.png";

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
                  <h1>
                    {store.single_move_data.name}
                  {store.single_move_data.type == "normal"
                ? <img className="ms-2 tipoImg" src={normal_img} alt="normal" />
                : store.single_move_data.type == "fighting"
                ? <img className="ms-2 tipoImg" src={lucha_img} alt="normal" />
                : store.single_move_data.type == "flying"
                ? <img className="ms-2 tipoImg" src={volador_img} alt="normal" />
                : store.single_move_data.type == "poison"
                ? <img className="ms-2 tipoImg" src={veneno_img} alt="normal" />
                : store.single_move_data.type == "ground"
                ? <img className="ms-2 tipoImg" src={tierra_img} alt="normal" />
                : store.single_move_data.type == "rock"
                ? <img className="ms-2 tipoImg" src={roca_img} alt="normal" />
                : store.single_move_data.type == "ghost"
                ? <img className="ms-2 tipoImg" src={fantasma_img} alt="normal" />
                : store.single_move_data.type == "steel"
                ? <img className="ms-2 tipoImg" src={acero_img} alt="normal" />
                : store.single_move_data.type == "fire"
                ? <img className="ms-2 tipoImg" src={fuego_img} alt="normal" />
                : store.single_move_data.type == "water"
                ? <img className="ms-2 tipoImg" src={agua_img} alt="normal" />
                : store.single_move_data.type == "grass"
                ? <img className="ms-2 tipoImg" src={planta_img} alt="normal" />
                : store.single_move_data.type == "electric"
                ? <img className="ms-2 tipoImg" src={electrico_img} alt="normal" />
                : store.single_move_data.type == "phsychic"
                ? <img className="ms-2 tipoImg" src={psiquico_img} alt="normal" />
                : store.single_move_data.type == "ice"
                ? <img className="ms-2 tipoImg" src={hielo_img} alt="normal" />
                : store.single_move_data.type == "dragon"
                ? <img className="ms-2 tipoImg" src={dragon_img} alt="normal" />
                : store.single_move_data.type == "dark"
                ? <img className="ms-2 tipoImg" src={siniestro_img} alt="normal" />
                : store.single_move_data.type == "fairy"
                ? <img className="ms-2 tipoImg" src={hada_img} alt="normal" />
                : store.single_move_data.type == "unknown"
                ? <img className="ms-2 tipoImg" src={desconocido_img} alt="normal" />
                : store.single_move_data.type == "shadow"
                ? <img className="ms-2 tipoImg" src={sombra_img} alt="normal" />
                : store.single_move_data.type == "bug"
                ? <img className="ms-2 tipoImg" src={bicho_img} alt="normal" /> :""}</h1>
                </div>
                <hr />
              </div>
              <div>
                <h4>{store.single_move_data.description}</h4><br />
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
