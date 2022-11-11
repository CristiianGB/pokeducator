import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Select from "react-select";
import "../../styles/pokeducatorPerfilStyles.css";
const DropdownIndicator = () => {
  return <></>;
};
const PokeducatorPerfil = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [pokemon3, setPokemon3] = useState();
  const [pokemon4, setPokemon4] = useState();
  const [pokemon5, setPokemon5] = useState();
  const [pokemon6, setPokemon6] = useState();
  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [linea3, setLinea3] = useState();
  const [linea4, setLinea4] = useState();
  const [linea5, setLinea5] = useState();
  const [linea6, setLinea6] = useState();



  const [votos, setVotos] = useState([]);
  if(pokemon1 ){
    let num = 1
    setLinea1("")
    pokemon1?.description ? actions.addequipo(pokemon1?.id, num)   :actions.addequipofus(pokemon1.pokemon_id, num)
  }
  if(pokemon2){
    let num = 2
    setLinea2("")
    pokemon2?.description ? actions.addequipo(pokemon2?.id, num)   :actions.addequipofus(pokemon2.pokemon_id, num)
  }
    if(pokemon3){
    let num = 3
        setLinea3("")
    pokemon3?.description ? actions.addequipo(pokemon3?.id, num)   :actions.addequipofus(pokemon3.pokemon_id, num)
  }
  if(pokemon4){
    let num = 4
        setLinea4("")
    pokemon4?.description ? actions.addequipo(pokemon4?.id, num)   :actions.addequipofus(pokemon4.pokemon_id, num)
  }
  if(pokemon5){
    let num = 5
        setLinea5("")
    pokemon5?.description ? actions.addequipo(pokemon5?.id, num)   :actions.addequipofus(pokemon5.pokemon_id, num)
  }
  if(pokemon6){
    let num = 6
        setLinea6("")
    pokemon6?.description ? actions.addequipo(pokemon6?.id, num)   :actions.addequipofus(pokemon6.pokemon_id, num)
  }
  let navigate = useNavigate();




  useEffect(() => {
    if (!localStorage.token) {
      navigate("/login");
    } else {
      actions.getProfile();
      store.equipos?.map((object)=>{
        object.linea == 1 ? setLinea1(object): object.linea == 2 ? setLinea2(object): object.linea == 3 ? setLinea3(object): object.linea == 4 ? setLinea4(object): object.linea == 5 ? setLinea5(object): object.linea == 6 ? setLinea6(object):""
      })
    }
    
  }, []);

  useEffect(() => {
    setUser(store?.user);
    setPicProfile(store?.user?.img);
  }, [store.user]);

  const [picProfile, setPicProfile] = useState("");

  // useEffect(()=>{
  //   fetch("https://3001-cristiiangb-pokeducator-tv6vrml7okb.ws-eu75.gitpod.io/api/votos")
  //   .then((response) => response.json())
  //         .then((data) => {
  //           setVotos(data)
  //         });
  // }, [])

  const handleSubmit = async () => {
    // let url = document.getElementById("modalFoto");
    let url = picProfile;
    const resp = await fetch(
      "https://3001-cristiiangb-pokeducator-kwfch41y14d.ws-eu75.gitpod.io/api/updateProfilePicture",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
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
                    
                    src={picProfile}
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
                            data-bs-dismiss="modal"
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
                    <div className="col-2">
                            <Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea1 ? linea1 != "" ? linea1.name:option.name:option.name}
                            getOptionValue={(option) => linea1 ? linea1 != "" ? linea1.name:option.name:option.name}
                            onChange={(option) => setPokemon1(option)}
                          /></div>
                    <div className="col-2"><Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea2 ? linea2 != "" ? linea2.name:option.name:option.name}
                            getOptionValue={(option) => linea2 ? linea2 != "" ? linea2.name:option.name:option.name}
                            onChange={(option) => setPokemon2(option)}
                          /></div>
                    <div className="col-2"><Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea3 ? linea3 != "" ? linea3.name:option.name:option.name}
                            getOptionValue={(option) => linea3 ? linea3 != "" ? linea3.name:option.name:option.name}
                            onChange={(option) => setPokemon3(option)}
                          /></div>
                    <div className="col-2"><Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea4 ? linea4 != "" ? linea4.name:option.name:option.name}
                            getOptionValue={(option) => linea4 ? linea4 != "" ? linea4.name:option.name:option.name}
                            onChange={(option) => setPokemon4(option)}
                          /></div>
                    <div className="col-2"><Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea5 ? linea5 != "" ? linea5.name:option.name:option.name}
                            getOptionValue={(option) => linea5 ? linea5 != "" ? linea5.name:option.name:option.name}
                            onChange={(option) => ()=>setPokemon5(option)}
                          /></div>
                    <div className="col-2"><Select
                            placeholder="Seleccione Pokemon"
                            components={{ DropdownIndicator }}
                            options={store.pokemon_data.concat(store.pokemon_fusion_data)}
                            getOptionLabel={(option) => linea6 ? linea6 != "" ? linea6.name:option.name:option.name}
                            getOptionValue={(option) => linea6 ? linea6 != "" ? linea6.name:option.name:option.name}
                            onChange={(option) => setPokemon6(option)}
                          /></div>
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
