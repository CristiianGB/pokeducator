import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorLoginStyles.css";
import { useNavigate } from "react-router-dom";
import useMightyMouse from "react-hook-mighty-mouse";

const PokeducatorLogin = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate()

  const handleLogin = async (username, password) => {
    actions.login(username, password).then(()=>{ //.then => cuando acabe de hacer el promise ==== navigate
      navigate("/perfil")
    })
  };
  
  return (
    <>
    
    <div className="divLogin">
    <section className="form-login">
    <form className="formLogin">
      <figure aria-hidden="true">
        <div className="person-body"></div>
        <div className="neck skin"></div>
        <div className="head skin">
          <div className="eyes"></div>
          <div className="mouth"></div>
        </div>
        <div className="hair"></div>
        <div className="ears"></div>
        <div className="shirt-1"></div>
        <div className="shirt-2"></div>
  </figure>
  <tool-tip role="tooltip"> ¡Hola! Soy el aprendiz del Profesor </tool-tip>
    </form>
      <h5>Conviértete en entrenador</h5>
      <input
        className="controls inputLogin"
        type="text"
        name="usuario"
        placeholder="Usuario"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        onKeyDown={(e)=>{
          if(e.key=="Enter"){
            handleLogin(username, password)
          }
        }}
      />
      
      <input
        className="controls inputLogin"
        type="password"
        name="contrasena"
        placeholder="Contraseña"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        onKeyDown={(e)=>{
          if(e.key=="Enter"){
            handleLogin(username, password)
          }
        }}
      />
      
      <input
        className="buttonPokemonInfo mb-2" 
        type="submit"
        onClick={() => username && password ? handleLogin(username, password): addEventListener(alert("Usuario o contraseña incorrectos"))}
        name=""
        value="Ingresar"
      />
      <p className="text-center separadorBottom">
        <a href="/soporte">¿Olvidaste tu Contraseña?</a>
      </p>
        <p className="text-center">¿No tienes cuenta?<a href="/signup" className="mx-2 links">Regístrate aquí.</a></p>
    </section>
    </div>
    </>
  );
};
export default PokeducatorLogin;
