import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPokemonInfoStyles.css";
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
//llamar stats store.single_pokemon_data.stats?.[3].base_stat
// llamar foto store.single_pokemon_data.sprites?.other["official-artwork"].front_default

const PokeducatorPokemonInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    if (!actions.pokemonFindOneInData(params.theid)) {
      actions.pokemonFindOne(
        "https://pokeapi.co/api/v2/pokemon/" + params.theid
      );
    }
  }, []);

  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div className="container">
     
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <button
            onClick={
              {
                /*restar uno al id*/
              }
            }
          >
            anterior
          </button>
        </div>
        <div className="col-sm-4 text-center">
          Pokédex nº: {store.single_pokemon_data.order}
        </div>
        <div className="col-sm-4 text-end">
          <button
            onClick={
              {
                /*sumar uno al id*/
              }
            }
          >
            siguiente
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="pokemon__img img-fluid">
            <img
              src={
                store.single_pokemon_data.sprites?.other["official-artwork"]
                  .front_default
              }
              alt={store.single_pokemon_data.name + "foto oficial"}
            />
          </div>
        </div>
        <div className="col-md-6 info_pokemon">
          <div className="row">
            <h1 className="pokemon_name">{store.single_pokemon_data.name}</h1>
            <h3 className="pokemon_type">
              {store.single_pokemon_data.types?.map((objeto) => {
                objeto.type.name == "normal" ? ( //porque no renderiza la imagen
                  <img src={normal_img} alt="tipo normal" />
                ) : objeto.type.name == "fighting" ? (
                  <img src={lucha_img} alt="tipo lucha" />
                ) : objeto.type.name == "flying" ? (
                  <img src={volador_img} alt="tipo volador" />
                ) : objeto.type.name == "poison" ? (
                  <img src={veneno_img} alt="tipo veneno" />
                ) : objeto.type.name == "ground" ? (
                  <img src={tierra_img} alt="tipo tierra" />
                ) : objeto.type.name == "rock" ? (
                  <img src={roca_img} alt="tipo roca" />
                ) : objeto.type.name == "ghost" ? (
                  <img src={fantasma_img} alt="tipo fantasma" />
                ) : objeto.type.name == "steel" ? (
                  <img src={acero_img} alt="tipo acero" />
                ) : objeto.type.name == "fire" ? (
                  <img src={fuego_img} alt="tipo fuego" />
                ) : objeto.type.name == "water" ? (
                  <img src={agua_img} alt="tipo agua" />
                ) : objeto.type.name == "grass" ? (
                  <img src={planta_img} alt="tipo planta" />
                ) : objeto.type.name == "electric" ? (
                  <img src={electrico_img} alt="tipo electrico" />
                ) : objeto.type.name == "phsychic" ? (
                  <img src={psiquico_img} alt="tipo psiquico" />
                ) : objeto.type.name == "ice" ? (
                  <img src={hielo_img} alt="tipo hielo" />
                ) : objeto.type.name == "dragon" ? (
                  <img src={dragon_img} alt="tipo dragon" />
                ) : objeto.type.name == "dark" ? (
                  <img src={siniestro_img} alt="tipo siniestro" />
                ) : objeto.type.name == "fairy" ? (
                  <img src={hada_img} alt="tipo hada" />
                ) : objeto.type.name == "unknown" ? (
                  <img src={desconocido_img} alt="tipo desconocido" />
                ) : objeto.type.name == "shadow" ? (
                  <img src={sombra_img} alt="tipo sombra" />
                ) : objeto.type.name == "bug" ? (
                  <img src={bicho_img} alt="tipo bicho" />
                ) : (
                  ""
                );
              })}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-6 altura_pokemon">
              Altura: {store.single_pokemon_data.height} cm
            </div>
            <div className="col-md-6 peso_pokemon">
              {" "}
              Peso: {store.single_pokemon_data.weight} kg
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeducatorPokemonInfo;
