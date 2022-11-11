import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorSignupStyles.css";

const PokeducatorSignup = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  let navigate = useNavigate();
  // hacer signup en actions y llamar a actions desde aqui
  const handleSignup = async () => {
    const resp = await fetch(
      "https://3001-cristiiangb-pokeducator-fj8djhd7o3d.ws-eu75.gitpod.io/api/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          first_name: first_name,
          last_name: last_name,
          password: password,
        }),
      }
    );

    if (!resp.ok) throw Error("There was a problem in the signup request");

    if (resp.status === 401) {
      throw "Credenciales inválidas";
    } else if (resp.status === 400) {
      throw "Formato inválido de correo o contraseña";
    }
    const data = await resp.json();
    // save your token in the localStorage
    //also you should set your user into the store using the setStore function

    // localStorage.setItem("jwt-token", data.token);
    navigate("/perfil");
  };

  return (
    <div className="divSignup">
      <section className="form-register">
        <h4>Formulario Registro</h4>
        <input
          className="controls"
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Elige nombre de Usuario"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="controls"
          type="text"
          name="first_name"
          id="first_name"
          placeholder="Ingresa tu Nombre"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="controls"
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Ingresa tu Apellido"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          className="controls"
          type="email"
          name="correo"
          id="correo"
          placeholder="No olvides el Correo electrónico"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="controls"
          type="password"
          name="contraseña"
          id="password"
          placeholder="Por último una Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="separadorBottom terminosYCondiciones">
          Al registrarse validará{" "}
          <a href="https://www.laps4.com/comunidad/threads/los-10-troll-mandamientos.343028/">
            Terminos y Condiciones
          </a>
        </p>
        <button
          className="botons buttonPokemonInfo"
          onClick={() => {
            handleSignup();
          }}
          value="Registrar"
        >
          Registrar
        </button>
        <p>
          <Link to="/login">Ya tengo cuenta.</Link>
        </p>
      </section>
    </div>
  );
};

PokeducatorSignup.propTypes = {
  match: PropTypes.object,
};

export default PokeducatorSignup;
