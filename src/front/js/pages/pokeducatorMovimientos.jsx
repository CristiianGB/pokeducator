import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorMovimientosStyles.css";
import loading from "../../assets/img/loading.gif";
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
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const [number, setNumber] = useState(0);
  const [moves, setMoves] = useState();

  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  useEffect(() => {
    setTimeout(() => {
      if (load != false) {
        setLoad(false);
        setMoves(store.move_data);
      }
    }, time[randomtime]);
  }, []);

  console.log(store.move_data);

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
                      ? setMoves(
                          store.move_data.filter((move) =>
                            move.name
                              .toUpperCase()
                              .includes(event.target.value.toUpperCase())
                          )
                        )
                      : setMoves(store.move_data)
                  }
                />
              </div>
            </div>

            <div className="col-sm-4 text-end">
              <button
                className="btn buttonPokemonInfo"
                onClick={() => {
                  number > moves.length - 100
                    ? setNumber(moves.length - 50)
                    : setNumber(number + 50);
                }}
              >
                Siguiente
              </button>
            </div>
          </div>
          {/* TABLA DE MOVIMIENTOS */}
          <table className="table table-responsive mt-4">
            <thead className="text-capitalize tablaTitulos">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Poder</th>
                <th scope="col">Precisión</th>
                <th scope="col">PP</th>
              </tr>
            </thead>

            <tbody>
              {moves?.slice(number, number + 50).map((move) => (
                <tr data-index={move.id} className="align-middle">
                  <td>
                    <a className="links" href={`/movimiento/${move.id}`}>
                      {move.name}
                    </a>
                  </td>
                  <td>
                    {move.type == "normal" ? (
                      <img className="tipoImg" src={normal_img} alt="normal" />
                    ) : move.type == "fighting" ? (
                      <img className="tipoImg" src={lucha_img} alt="normal" />
                    ) : move.type == "flying" ? (
                      <img className="tipoImg" src={volador_img} alt="normal" />
                    ) : move.type == "poison" ? (
                      <img className="tipoImg" src={veneno_img} alt="normal" />
                    ) : move.type == "ground" ? (
                      <img className="tipoImg" src={tierra_img} alt="normal" />
                    ) : move.type == "rock" ? (
                      <img className="tipoImg" src={roca_img} alt="normal" />
                    ) : move.type == "ghost" ? (
                      <img
                        className="tipoImg"
                        src={fantasma_img}
                        alt="normal"
                      />
                    ) : move.type == "steel" ? (
                      <img className="tipoImg" src={acero_img} alt="normal" />
                    ) : move.type == "fire" ? (
                      <img className="tipoImg" src={fuego_img} alt="normal" />
                    ) : move.type == "water" ? (
                      <img className="tipoImg" src={agua_img} alt="normal" />
                    ) : move.type == "grass" ? (
                      <img className="tipoImg" src={planta_img} alt="normal" />
                    ) : move.type == "electric" ? (
                      <img
                        className="tipoImg"
                        src={electrico_img}
                        alt="normal"
                      />
                    ) : move.type == "psychic" ? (
                      <img
                        className="tipoImg"
                        src={psiquico_img}
                        alt="normal"
                      />
                    ) : move.type == "ice" ? (
                      <img className="tipoImg" src={hielo_img} alt="normal" />
                    ) : move.type == "dragon" ? (
                      <img className="tipoImg" src={dragon_img} alt="normal" />
                    ) : move.type == "dark" ? (
                      <img
                        className="tipoImg"
                        src={siniestro_img}
                        alt="normal"
                      />
                    ) : move.type == "fairy" ? (
                      <img className="tipoImg" src={hada_img} alt="normal" />
                    ) : move.type == "unknown" ? (
                      <img
                        className="tipoImg"
                        src={desconocido_img}
                        alt="normal"
                      />
                    ) : move.type == "shadow" ? (
                      <img className="tipoImg" src={sombra_img} alt="normal" />
                    ) : move.type == "bug" ? (
                      <img className="tipoImg" src={bicho_img} alt="normal" />
                    ) : (
                      ""
                    )}
                  </td>
                  <td>{move.power ? move.power : "-"}</td>
                  <td>{move.accuracy ? move.accuracy : "-"}</td>
                  <td>{move.pp ? move.pp : "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default PokeducatorMovimientos;
{
  /*type pp accuracy power name*/
}
