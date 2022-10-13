import React, { useContext, useEffect } from "react";
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
  let arr = []
  arr = store.single_move_data.flavor_text_entries?.find(element => element.language?.name == "es") // arr es para encontrar el texto en español y find para que devuelva el primer elemento que encuentre
  // .map((object) =>object.language?.name == "es"? object.flavor_text : "") mapeo

 


  useEffect(() => {
    if (!actions.moveFindOneInData(params.theid)) {
      actions.moveFindOne("https://pokeapi.co/api/v2/move/" + params.theid);
    }
  }, []);

  return (
    <div className="container">
        <div className="row mt-2">
            <h1>   
            {store.single_move_data.names?.map((object) => (object.language?.name=="es"? object.name :""))}
            {store.single_move_data.type?.name == "normal"
                ? <img className="ms-2" src={normal_img} alt="normal" />
                : store.single_move_data.type?.name == "fighting"
                ? <img className="ms-2" src={lucha_img} alt="normal" />
                : store.single_move_data.type?.name == "flying"
                ? <img className="ms-2" src={volador_img} alt="normal" />
                : store.single_move_data.type?.name == "poison"
                ? <img className="ms-2" src={veneno_img} alt="normal" />
                : store.single_move_data.type?.name == "ground"
                ? <img className="ms-2" src={tierra_img} alt="normal" />
                : store.single_move_data.type?.name == "rock"
                ? <img className="ms-2" src={roca_img} alt="normal" />
                : store.single_move_data.type?.name == "ghost"
                ? <img className="ms-2" src={fantasma_img} alt="normal" />
                : store.single_move_data.type?.name == "steel"
                ? <img className="ms-2" src={acero_img} alt="normal" />
                : store.single_move_data.type?.name == "fire"
                ? <img className="ms-2" src={fuego_img} alt="normal" />
                : store.single_move_data.type?.name == "water"
                ? <img className="ms-2" src={agua_img} alt="normal" />
                : store.single_move_data.type?.name == "grass"
                ? <img className="ms-2" src={planta_img} alt="normal" />
                : store.single_move_data.type?.name == "electric"
                ? <img className="ms-2" src={electrico_img} alt="normal" />
                : store.single_move_data.type?.name == "phsychic"
                ? <img className="ms-2" src={psiquico_img} alt="normal" />
                : store.single_move_data.type?.name == "ice"
                ? <img className="ms-2" src={hielo_img} alt="normal" />
                : store.single_move_data.type?.name == "dragon"
                ? <img className="ms-2" src={dragon_img} alt="normal" />
                : store.single_move_data.type?.name == "dark"
                ? <img className="ms-2" src={siniestro_img} alt="normal" />
                : store.single_move_data.type?.name == "fairy"
                ? <img className="ms-2" src={hada_img} alt="normal" />
                : store.single_move_data.type?.name == "unknown"
                ? <img className="ms-2" src={desconocido_img} alt="normal" />
                : store.single_move_data.type?.name == "shadow"
                ? <img className="ms-2" src={sombra_img} alt="normal" />
                : store.single_move_data.type?.name == "bug"
                ? <img className="ms-2" src={bicho_img} alt="normal" /> :""}
            </h1>
            <hr />
        </div>
        <div>
            <p>
            {arr?.flavor_text}
            </p>
        </div>
        <div className="row mb-2">
                <div className="col-sm-2">Poder: {store.single_move_data.power}</div>
                <div className="col-sm-2">Precisión: {store.single_move_data.accuracy}</div>
                <div className="col-sm-2">PP: {store.single_move_data.pp}</div>
                <div className="col-sm-2">Prioridad: {store.single_move_data.priority}</div>
                
        </div>
        
    </div>
  );
};

export default PokeducatorObjetoInfo;
