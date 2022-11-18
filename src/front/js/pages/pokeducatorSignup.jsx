import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorSignupStyles.css";

const PokeducatorSignup = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  let navigate = useNavigate();
  // hacer signup en actions y llamar a actions desde aqui
  const handleSignup = async () => {
    const resp = await fetch(
      "https://3001-cristiiangb-pokeducator-orhyao9u3ig.ws-eu74.gitpod.io/api/signup",
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
  };

  return (
    // style="background-color: #eee;"
    <section class="vh-100 divLogin">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            {/* // style="border-radius: 25px;" */}
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Únete a Pokeducator!
                    </p>

                    <form class="mx-1 mx-md-4">
                      {/* className=""
          type="text"
          name="usuario"
          id="usuario"
          placeholder="Elige nombre de Usuario"
          onChange={(e) => {
            setUsername(e.target.value);
          }} */}
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            name="usuario"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example1c">
                            Usuario
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-id-card fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            name="nombre"
                            onChange={(e) => {
                              setFirstName(e.target.value);
                            }}
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1c">
                            Tu Nombre
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="far fa-id-card fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            name="last_name"
                            onChange={(e) => {
                              setLastName(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example1c">
                            Tu Apellido
                          </label>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            name="correo"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example3c">
                            Tu correo
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            name="contraseña"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example4c">
                            Tu Contraseña
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            onChange={(e) => {
                              setPasswordCheck(e.target.value);
                            }}
                          />
                          <label class="form-label" for="form3Example4cd">
                            Repite tu Contraseña
                          </label>
                        </div>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" for="form2Example3">
                          Estoy de acuerdo con los{" "}
                          <a
                            className="links"
                            href="https://www.pokemon.com/es/condiciones-de-uso/"
                          >
                            Términos de servicio
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 separadorBottom pb-4">
                        <button
                          type="button"
                          class="btn botons buttonPokemonInfo"
                          onClick={() => {
                            handleSignup();
                            navigate("/login");
                          }}
                          value="Registrar"
                        >
                          Registrar
                        </button>
                      </div>
                      <a className="links" href="/login">
                        <p className=" text-center">Ya tengo cuenta.</p>
                      </a>
                    </form>
                  </div>
                  <div class="redondearIzquierdo col-md-10 col-lg-6 col-xl-7 d-flex text-center justify-content-center align-items-center flex-column order-1 order-lg-2 gradient-custom-2">
                    <h4 className="mb-4 text-white margenTop">
                      Con una cuenta del Club de Entrenadores Pokémon puedes:
                    </h4>
                    <p className=" text-white text-center">
                      Con una cuenta del Club de Entrenadores Pokémon puedes:
                      ¡Acceder a aplicaciones de Pokémon, suscribirte a
                      boletines informativos y mucho más! Si ya tienes una
                      cuenta, por favor, inicia sesión ahora.
                    </p>
                    <img
                      width="40%"
                      src="https://i.gifer.com/WiCJ.gif"
                      class="img-fluid"
                      alt="Pikachu saludo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PokeducatorSignup.propTypes = {
  match: PropTypes.object,
};

export default PokeducatorSignup;
