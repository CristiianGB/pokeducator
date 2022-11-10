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
    setPicProfile(store?.user?.img);
  }, [store.user]);

  const [picProfile, setPicProfile] = useState("");

  const handleSubmit = async () => {
    // let url = document.getElementById("modalFoto");
    let url = picProfile;
    const resp = await fetch(
      "https://3001-cristiiangb-pokeducator-2oc1ugj4apt.ws-eu75.gitpod.io/api/updateProfilePicture",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.token,
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
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-3">
        <div className="row">
          <div className="col">
            <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4 text-center text-muted"
            >
              <h4>Perfil de Entrenador</h4>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="imagen_perfil">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"
                    // src={picProfile}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary btn_imagen"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fas fa-user-edit"></i>
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Cambiar imagen de perfil
                          </h5>
                        </div>
                        <div className="modal-body">
                          <div className="input-group mb-3">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-default"
                            >
                              Link Imagen
                            </span>
                            <input
                              type="text"
                              value={picProfile}
                              className="form-control modalFoto"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-default"
                              onChange={(e) => setPicProfile(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="my-3">{"@" + user?.username}</h5>
                <p className="text-muted mb-1 text-capitalize">
                  {user?.first_name + " " + user?.last_name}
                </p>
                <p className="text-muted mb-4">{user?.email}</p>
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
                    <p className="text-muted mb-0">{user?.first_name}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3 fw-bold">
                    <p className="mb-0">Apellido</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user?.last_name}</p>
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
                    <p className="text-muted mb-0">**********</p>
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
                        className={user?.is_active ? iconoTrue : iconoFalse}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* EQUIPOS */}
            <div className="row my-2">
              <div className="col">
                <div className="card mb-4 mb-md-0 p-3">
                  <h4>Mis Equipos</h4>
                  <div className="d-flex justify-content-around text-center">
                    <div className="col-2">1</div>
                    <div className="col-2">2</div>
                    <div className="col-2">3</div>
                    <div className="col-2">4</div>
                    <div className="col-2">5</div>
                    <div className="col-2">6</div>
                  </div>
                </div>
              </div>
            </div>

            {/* VOTACIONES */}
            <div className="row my-2">
              <div className="col">
                <div className="card mb-4 mb-md-0 p-3">
                  <h4>Ultimas votaciones</h4>
                  <div className="d-flex justify-content-around">
                    <div className="col-3 bg-info">1</div>
                    <div className="col-3 bg-info">2</div>
                    <div className="col-3 bg-info">3</div>
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

export default PokeducatorPerfil;
