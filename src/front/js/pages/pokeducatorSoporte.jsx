import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorSoporteStyles.css";
import loading from "../../assets/img/loading.gif";
import emailjs from "@emailjs/browser";
import pokeducator_letras from "../../assets/img/pokeducator_letras.png"

const PokeducatorSoporte = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const [showhide, setShowhide] = useState("");
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f7xa5zo",
        "template_jmni0zk",
        form.current,
        "HvHQjkiZc7cRiIxhc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  setTimeout(() => {
    setLoad(false);
  }, time[randomtime]);

  return (
    <>
      {load ? (
        <div className="container align-items-center">
          <img className="centred img-fluid" src={loading} alt="Cargando..." />
        </div>
      ) : (
        <div className="container align-items-center mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 mt-5">
            <h4 className="mt-3">Enviar solicitud al soporte</h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className=" form-group mb-3">
                <label className="mb-2">Correo electrónico</label>
                <input type="text" name="mail" className="form-control" />
              </div>

              <div className=" form-group mb-3">
                <select
                  name="usertype"
                  className="form-control"
                  onChange={(e) => handleshowhide(e)}
                >
                  <option value="">Elegir tipo de solicitud</option>
                  <option value="1">Problemas técnicos o incidencias</option>
                  <option value="4">Reportar un bug</option>
                  <option value="5">Pregunta sobre la crianza</option>
                  <option value="6">Recomendación</option>
                  <option value="2">
                    Gestión de la cuenta, petición de datos o eliminación
                  </option>
                  <option value="3">Pregunta general</option>
                </select>
              </div>

              {showhide === "1" && (
                <div className=" form-group">
                  <label className="mb-2">
                    Danos más detalles acerca de la incidencia técnica
                  </label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}

              {showhide === "2" && (
                <div className=" form-group">
                  <label className="mb-2">
                    Qué datos deseas saber o eliminar
                  </label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}

              {showhide === "3" && (
                <div className=" form-group">
                  <label className="mb-2">Cuéntanos algo más</label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}

              {showhide === "4" && (
                <div className=" form-group">
                  <label className="mb-2">Dinos donde y qué error ha habido</label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}

              {showhide === "5" && (
                <div className=" form-group">
                  <label className="mb-2">Contacto directo con la Guardería!</label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}

              {showhide === "6" && (
                <div className=" form-group">
                  <label className="mb-2">¿Qué me recomiendas?</label>
                  <textarea name="message" className="form-control"></textarea>
                </div>
              )}
              <button className="btn btn-primary submit buttonPokemonInfo mt-4" type="submit">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-7 text-center">
          <div className="col-12 my-4">
                <img
                  className="img-fluid w-100 portada"
                  src={pokeducator_letras}
                  alt="Pokeducator logo letras"
                />
              </div>
             <h4>¿Cómo podemos ayudarte?</h4>
             <p>
Al escribir un ticket, llegará un correo al equipo de soporte con tu incidencia, intentarán arreglarlo lo antes posible! Para saber si has hecho bien el proceso, al enviar el ticket se mandará automáticamente un correo a la dirección que has introducido.</p>   
          </div>
          
        </div></div>
      )}
    </>
  );
};

export default PokeducatorSoporte;
