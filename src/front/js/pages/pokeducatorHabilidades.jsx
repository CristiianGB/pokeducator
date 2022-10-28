import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";
import "../../styles/pokeducatorHabilidadesStyles.css";

const PokeducatorHabilidad = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");
  const [number, setNumber] = useState(0);
  const [slice0, setSlice0] = useState(0)
  const [slice50, setSlice50] = useState(52)
 
  setTimeout(() => {
    setLoad(false);
  }, 2000);

  return (
    <div className="App container align-items-center">
      <div className="row d-flex justify-content-end mt-4">
        <div className="col-sm-6 text-start">
        {slice0>0 ?  <button
            className=" btn-sm mx-3 float-start w-25 buttonPokemonInfo"
            onClick={() => {
              if (slice0  == 0){
              }
              else if (slice0 == 1144 && slice50 == 1154 ){
                setSlice0(1092)
                setSlice50(1144)
                
              }
              else{
                setSlice0(slice0 -52) 
                setSlice50(slice50 - 52)
              }
            }}
          >
            Anterior
          </button> : ""}
        </div>

        <div className="col-sm-6 text-end">
          <button
            className="btn-sm mx-3 float-end w-25 buttonPokemonInfo"
            onClick={() => {
              if(slice50 >= 1144){
                setSlice0(1144)
                setSlice50(780)
              }
              else if (slice50 > 260){
  
              }
              else{
                setSlice0(slice0 +52) 
                setSlice50(slice50 + 52)
              }
              console.log(slice50)
            }}
          >
            Siguiente
          </button>
        </div>
      </div>
      <div className="pokegallery">
        {store.ability_data ? (
          load ? (
            <div className="container align-items-center">
              <img
                className="centred img-fluid"
                src={loading}
                alt="Cargando..."
              />
            </div>
          ) : (
            <table className="table table-responsive mt-4">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Generación</th>
                </tr>
              </thead>
              <tbody>
                {store.ability_data.slice(slice0, slice50).map((habilidad, i) => (
                  <tr data-index={i}>
                    <td>
                      <a className="links" href={`/habilidad/${habilidad.id}`}>
                        {habilidad.name}
                      </a>
                    </td>
                    <td>{habilidad.description}</td>
                    <td>
                      {habilidad.generation == "generation-i" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/2/2a/Primera_generaci%C3%B3n.png"
                          alt="generation-i"
                        />
                      ) : habilidad.generation == "generation-ii" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/f/f7/Segunda_generaci%C3%B3n.png"
                          alt="generation-ii"
                        />
                      ) : habilidad.generation == "generation-iii" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/5/54/Tercera_generaci%C3%B3n.png"
                          alt="generation-iii"
                        />
                      ) : habilidad.generation == "generation-iv" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/0/0a/Cuarta_generaci%C3%B3n.png"
                          alt="generation-iv"
                        />
                      ) : habilidad.generation == "generation-v" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/6/61/Quinta_generaci%C3%B3n.png/"
                          alt="generation-v"
                        />
                      ) : habilidad.generation == "generation-vi" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/1/1a/Sexta_generaci%C3%B3n.png/"
                          alt="generation-vi"
                        />
                      ) : habilidad.generation == "generation-vii" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/0/0a/S%C3%A9ptima_generaci%C3%B3n.png/"
                          alt="generation-vii"
                        />
                      ) : habilidad.generation == "generation-viii" ? (
                        <img
                          className="generationimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/b/b4/Octava_generaci%C3%B3n.png/"
                          alt="generation-viii"
                        />
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default PokeducatorHabilidad;
