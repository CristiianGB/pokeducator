import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorPerfilStyles.css";
import { Link } from "react-router-dom";

const PokeducatorPerfil = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (!store.token) {
      navigate("/login");
    } else {
      actions.getProfile();
    }
  }, []);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  const handleSubmit = async () => {
    let url = document.getElementById("modalFoto");
    fetch(
      "https://3001-cristiiangb-pokeducator-b599gavfzv3.ws-eu75.gitpod.io/api/updateProfilePicture",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          img: url,
        }),
      }
    );
    if (!resp.ok) throw Error("There was a problem in the login request");
    if (resp.status === 401) {
      throw "Invalid credentials";
    } else if (resp.status === 400) {
      throw "Invalid username or password format";
    }
    const data = await resp.json();
    setUser(data);
    return true;
  };

  const logOut = () => {
    localStorage.removeItem("token");
  };

  const iconoTrue = "icono fas fa-check-circle";
  const iconoFalse = "icono far fa-check-circle";
  
  return (
    <section className="seccion-perfil-usuario ">
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">User</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={user?.img}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">{user?.username}</h5>
                  <p className="text-muted mb-1">
                    {user?.first_name + " " + user?.last_name}
                  </p>
                  <p className="text-muted mb-4">{user?.email}</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                      ></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      ></i>
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      ></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      ></i>
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DATOS PERFIL */}
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Usuario</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.username}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Nombre</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.first_name}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Apellido</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user?.last_name}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Correo Electronico</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user?.email}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Contraseña</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">*********</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3 fw-bold">
                      <p className="mb-0">Premium</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        <i
                          className={
                            user?.is_active ? iconoTrue : iconoFalse
                          }
                        ></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* EQUIPOS */}
              <div className="row">
                <div className="col">
                  <div className="card mb-4 mb-md-0">
                    <h4>Mis Equipos</h4>
                    <p>ACA VAN LOS EQUIPOS</p>
                  </div>
                </div>
              </div>

              {/* VOTACIONES */}
              <div className="row">
                <div className="col">
                  <div className="card mb-4 mb-md-0">
                    <h4>Ultimas votaciones</h4>
                    <p>Aca van las votaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div classNameName="perfil-usuario-header">
            <div classNameName="perfil-usuario-portada">
                <div classNameName="perfil-usuario-avatar">
                    <img src="https://i.pinimg.com/550x/f7/da/98/f7da9864a7c3079df7c26173520d18fc.jpg" alt="img-avatar"/>
                    <button type="button" classNameName="boton-avatar">
                        <i classNameName="far fa-image"></i>
                    </button>
                </div>
                <a href="/login" classNameName="boton-portada"  onClick={logOut()}>
                    <i classNameName="fas fa-sign-out-alt"></i>Cerrar sesión
                </a>
            </div>
        </div>
        <div classNameName="perfil-usuario-body">
            <div classNameName="perfil-usuario-bio">
                <h3 classNameName="titulo"></h3>
                <p classNameName="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div classNameName="perfil-usuario-footer">
                <ul classNameName="lista-datos">
                    <li><i classNameName="icono fas fa-user"></i>{user?.username}</li>
                    <li><i classNameName="icono fas fa-envelope"></i>{user?.email}</li>
                </ul>
				
                <ul classNameName="lista-datos">
                    <li><i classNameName="icono fas fa-key"></i>Contraseña: <a href="#">mostrar</a> </li>
                    <li><i classNameName="icono fas fa-user-check"></i>Activo:<i classNameName={user?.is_active?iconoTrue:iconoFalse}></i></li>
                </ul>
            </div>
            <div classNameName="redes-sociales">
                <a href="" classNameName="boton-redes facebook fab fa-facebook-f"><i classNameName="icon-facebook"></i></a>
                <a href="" classNameName="boton-redes twitter fab fa-twitter"><i classNameName="icon-twitter"></i></a>
                <a href="" classNameName="boton-redes instagram fab fa-instagram"><i classNameName="icon-instagram"></i></a>
            </div>
        </div> */}
    </section>
  );
};

export default PokeducatorPerfil;
