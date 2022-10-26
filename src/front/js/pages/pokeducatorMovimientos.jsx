import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientosStyles.css";
import loading from "../../assets/img/loading.gif"
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


const PokeducatorMovimientos = () => {
  const {store, actions} = useContext(Context)
  const [num, setNum] = useState(0) 
  const [load, setLoad] = useState(true)
  let time = [2000, 3000, 4000, 5000]
  let randomtime = Math.floor(Math.random() * time.length)

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  setTimeout(()=>{
    setLoad(false)
  },time[randomtime])


  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        {!store.move?.previous ? (
          ""
        ) : (
          <button
            className="btn btn-primary btn-sm mx-3 float-start w-25"
            onClick={() => {
              actions.moveFind(store.move.previous); //guarda paginacion en storage y actualiza segun click para saber la proxima url onclick comprobar que exista
            }}
          >
            Anterior
          </button>
        )}
        <button
          className="btn btn-primary btn-sm mx-3 float-end w-25"
          onClick={() => {
            actions.moveFind(store.move.next);
          }}
        >
          Siguiente
        </button>
      </div>
      <div className="pokegallery">
        {load ? (
          <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
          </div>
        ) : (
          <table className="table table-responsive mt-4">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Poder</th>
                <th scope="col">Precisión</th>
                <th scope="col">PP</th>
              </tr>
            </thead>
            <tbody>
              {store.move_data.map((move, i) => (
                <tr data-index={i}>
                  <td><a className="links" href={`/movimiento/${move.id}`}>{move.names.map((object) => (
                    object.language?.name=="es"? object.name :""
                    ))}</a></td>
                  <td>{move.type?.name == "normal"
                    ? <img src={normal_img} alt="normal" />
                    : move.type?.name == "fighting"
                    ? <img src={lucha_img} alt="normal" />
                    : move.type?.name == "flying"
                    ? <img src={volador_img} alt="normal" />
                    : move.type?.name == "poison"
                    ? <img src={veneno_img} alt="normal" />
                    : move.type?.name == "ground"
                    ? <img src={tierra_img} alt="normal" />
                    : move.type?.name == "rock"
                    ? <img src={roca_img} alt="normal" />
                    : move.type?.name == "ghost"
                    ? <img src={fantasma_img} alt="normal" />
                    : move.type?.name == "steel"
                    ? <img src={acero_img} alt="normal" />
                    : move.type?.name == "fire"
                    ? <img src={fuego_img} alt="normal" />
                    : move.type?.name == "water"
                    ? <img src={agua_img} alt="normal" />
                    : move.type?.name == "grass"
                    ? <img src={planta_img} alt="normal" />
                    : move.type?.name == "electric"
                    ? <img src={electrico_img} alt="normal" />
                    : move.type?.name == "phsychic"
                    ? <img src={psiquico_img} alt="normal" />
                    : move.type?.name == "ice"
                    ? <img src={hielo_img} alt="normal" />
                    : move.type?.name == "dragon"
                    ? <img src={dragon_img} alt="normal" />
                    : move.type?.name == "dark"
                    ? <img src={siniestro_img} alt="normal" />
                    : move.type?.name == "fairy"
                    ? <img src={hada_img} alt="normal" />
                    : move.type?.name == "unknown"
                    ? <img src={desconocido_img} alt="normal" />
                    : move.type?.name == "shadow"
                    ? <img src={sombra_img} alt="normal" />
                    : move.type?.name == "bug"
                    ? <img src={bicho_img} alt="normal" /> :""}</td>
                  <td>{move.accuracy}</td>
                  <td>{move.power}</td>
                  <td>{move.pp}</td>
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
