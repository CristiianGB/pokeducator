import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import loading from "../../assets/img/loading.gif";
import "../../styles/pokeducatorHabilidadesStyles.css";

const PokeducatorHabilidad = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState("true");
  const [number, setNumber] = useState(0);
  const [abilities, setAbilities] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (load != false) {
        setLoad(false);
        setAbilities(store.ability_data);
      }
    }, 2000);
  }, []);

  return (
    <div className="App container align-items-center">
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
          <>
            {/* BUSCADOR Y BOTONES */}
            <div className="d-flex align-items-center mt-3">
              <div className="col-sm-4 text-start">
                <button
                  className="buttonPokemonInfo"
                  onClick={() => {
                    number > 49 ? setNumber(number - 50) : setNumber(0);
                  }}
                >
                  Anterior
                </button>
              </div>

              <div className="col-sm-4">
                <div className="border-bottom">
                  <input
                    type="text"
                    className="form-control text-center border-0"
                    id="buscador"
                    placeholder="BUSCAR HABILIDAD"
                    onChange={(event) =>
                      event.target.value.length > 2
                        ? setAbilities(
                            store.ability_data.filter((ability) =>
                              ability.name
                                .toUpperCase()
                                .includes(event.target.value.toUpperCase())
                            )
                          )
                        : setAbilities(store.ability_data)
                    }
                  />
                </div>
              </div>

              <div className="col-sm-4 text-end">
                <button
                  className="btn buttonPokemonInfo"
                  onClick={() => {
                    number > abilities.length - 100
                      ? setNumber(abilities.length - 50)
                      : setNumber(number + 50);
                  }}
                >
                  Siguiente
                </button>
              </div>
            </div>
            {/* TABLA DE HABILIDADES */}
            <table className="table table-responsive mt-4">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Generación</th>
                </tr>
              </thead>
              <tbody>
                {abilities?.slice(number, number + 50).map((habilidad, i) => (
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
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default PokeducatorHabilidad;
