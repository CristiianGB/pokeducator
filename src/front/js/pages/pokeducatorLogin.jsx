import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorLoginStyles.css";
import { useNavigate } from "react-router-dom";
import profesora from "../../assets/img/profesoraPokeducator.png";
// import starters from "../../assets/img/starters.png"
// import starters2 from "../../assets/img/starters2.png"

const PokeducatorLogin = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [see, setSee] = useState("password")
  let navigate = useNavigate();

  const handleLogin = async (username, password) => {
    actions.login(username, password)
    setTimeout(() => {
      navigate("/perfil")
    }, 500);

    ;
  };

  const handleSee = () => {
    setSee("text")
  }
  const handleNotSee = () => {
    setSee("password")
  }
  return (
    <>
      <section className="h-100 gradient-form backgroundLogin divLogin">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card cardLogin text-black">
                <div className="row g-0 ">
                  <div className="col-lg-6 bordeRadius">
                    <div className="card-body p-md-5 mx-md-4">
                      <form className="formLogin">
                        <figure className="bordefigura" aria-hidden="true">
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
                        <tool-tip role="tooltip">
                          {" "}
                          ¡Hola! Soy el aprendiz del Profesor{" "}
                        </tool-tip>
                      </form>

                      <form>
                        <p className="inicioSesion">Iniciar sesión</p>
                        
                        <div className="form-outline mb-4">
                          <input
                            className="inputLogin form-control"
                            id="form2Example11"
                            type="text"
                            name="usuario"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            onKeyDown={(e)=>{
                              if(e.key=="Enter"){
                                handleLogin(username, password)
                              }
                            }}
                          />
                          <label className="form-label" >
                            Usuario
                          </label>
                        </div>

                        <div className="form-outline mb-4 input-wrapper">
                          <input
                            id="form2Example22"
                            className="inputLogin inputContraseña form-control"
                            type={see}
                            name="contrasena"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            onKeyDown={(e)=>{
                              if(e.key=="Enter"){
                                handleLogin(username, password)
                              }
                            }}
                          />
                          <label className="form-label placeholderstyle" >
                            Contraseña
                          </label>
                          <svg xmlns="http://www.w3.org/2000/svg" className="input-icon password" viewBox="0 0 20 20" fill="currentColor" onMouseEnter={handleSee} onMouseLeave={handleNotSee} >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>

                        <div className="text-center pt-1 mb-3 pb-1 ">
                          <input
                            className="buttonPokemonInfo mb-2 "
                            type="button"
                            onClick={() =>
                              username && password
                                ? handleLogin(username, password)
                                : addEventListener(
                                    alert("Usuario o contraseña incorrectos")
                                  )
                            }
                            name=""
                            value="Ingresar"
                          />
                        </div>
                            <div className="separadorBottom "></div>
                        <div className="d-flex align-items-center justify-content-center pb-4 ">
                          
                          <p className="text-center">
                            ¿No tienes cuenta?
                            <a href="/signup" className="mx-2 links">
                              <button
                                type="button"
                                className="buttonPokemonInfo pequeño"
                                
                              >
                                Regístrate
                              </button>
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="bordeRadius col-lg-6 d-flex align-items-center text-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                      <h4 className="mb-4">
                        ¡Únete al Club de Entrenadores Pokémon!
                      </h4>
                      <img className="profesoraLogin" src={profesora} alt="" />
                      <p className="small mb-0 topetopo">
                        ¡Crea una cuenta del Club de Entrenadores Pokémon hoy
                        mismo! Con ella podrás encargarte de tu perfil en
                        Pokeducator, crear tus propias Fusiones Online... ¡y
                        mucho más!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PokeducatorLogin;
