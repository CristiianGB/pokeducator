import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorInfoCrianza.css";
import { Context } from "../../store/appContext.jsx";
import { useParams } from "react-router-dom";
import loading from "../../../assets/img/loading.gif";

const PokeducatorInfoGruposHuevo = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const params = useParams();

  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

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
        <div className="container align-items-center">
          <div className="row">
            <h1 id="grupos_huevo">Grupos Huevo</h1>
            <hr />
          </div>
          <div className="grupos_huevo descripcion">
            <p>
              Los grupos huevo (Egg Group en inglés, タマゴグループ en japonés)
              son categorías de determinados Pokémon que son compatibles a la
              hora de criar entre ellos, es decir, que el resultado será un
              huevo. Si dos Pokémon no pertenecen al mismo grupo, entonces no
              son compatibles y no pueden dejar un huevo. Un Pokémon puede
              pertenecer a varios grupos huevo.
            </p>
            <br />
          </div>
          <div className="row">
            <h1 id="cadenas_de_cria">Cadenas de cría</h1>
            <hr />
          </div>
          <div className="cadenas_de_cria descripcion">
            <p>
              El hecho de que varios Pokémon pertenezcan a un mismo grupo huevo
              da lugar a los movimientos huevo, que son aquellos movimientos que
              un Pokémon puede heredar del padre aunque no los conozca la madre.
              En los videojuegos de la sexta generación (X/Y/RΩ/Zα), los
              movimientos se pueden heredar tanto del padre como de la madre.
            </p>
            <br />
            <p>Ejemplo:</p>
            <br />
            <div className="table-responsive-md">
              <table className="wiki" style={tableStyle}>
                <tbody>
                  <tr className="encabezado">
                    <th className="text-align-center" colSpan="5">
                      Cadena de cría
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="links image"
                        href="/pokemon/445"
                        title="Garchomp"
                      >
                        <img
                          alt="Garchomp"
                          src="https://static.wikia.nocookie.net/espokemon/images/4/41/Garchomp_XY.png"
                          width="96"
                          height="96"
                        />
                      </a>
                    </td>
                    <td rowSpan={2}>+</td>
                    <td>
                      <a
                        className="links image"
                        href="/pokemon/181"
                        title="Ampharos"
                      >
                        <img
                          alt="Ampharos"
                          src="https://static.wikia.nocookie.net/espokemon/images/1/12/Ampharos_XY.png"
                          width="96"
                          height="96"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                    <td rowSpan={2}>=</td>
                    <td>
                      <a href="/pokemon/179" className="links lazyloaded">
                        <img
                          alt="Mareep"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a4/Mareep_XY.png"
                          width="96"
                          height="96"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        {" "}
                        <a className="links" href="/pokemon/445">
                          Aron
                        </a>{" "}
                        <img
                          className="generoimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/b/b2/Macho.png"
                          alt="genero_macho"
                        />{" "}
                        con{" "}
                        <a className="links" href="/movimiento/36">
                          Derribo
                        </a>
                      </p>
                    </td>
                    <td>
                      <p>
                        {" "}
                        <a className="links" href="/pokemon/181">
                          Ampharos
                        </a>{" "}
                        <img
                          className="generoimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a0/Hembra.png"
                          alt="genero_hembra"
                        />{" "}
                      </p>
                    </td>
                    <td>
                      <p>
                        <a className="links" href="/pokemon/179">
                          Mareep
                        </a>{" "}
                        con{" "}
                        <a className="links" href="/movimiento/36">
                          Derribo
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
            <p>
              Además, el hecho de que varios Pokémon puedan pertenecer a dos
              grupos huevo a la vez permite establecer cadenas de cría entre
              Pokémon de distintos grupos huevo, usando a un Pokémon que
              pertenezca a ambos como intermediario o "puente". Por ejemplo:
            </p>
            <br />
            <div className="table-responsive-md">
              <table className="wiki" style={tableStyle}>
                <tbody>
                  <tr className="encabezado">
                    <th className="text-align-center" colSpan="5">
                      Generación 1
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <a
                        className="links image"
                        href="/pokemon/304"
                        title="Aron"
                      >
                        <img
                          alt="Aron"
                          src="https://static.wikia.nocookie.net/espokemon/images/7/73/Aron_XY.png/"
                          width="96"
                          height="96"
                        />
                      </a>
                    </td>
                    <td rowSpan={2}>+</td>
                    <td>
                      <a
                        className="links image"
                        href="/pokemon/29"
                        title="Nidoran-F"
                      >
                        <img
                          alt="Nidoran-F"
                          src="https://static.wikia.nocookie.net/espokemon/images/2/2b/Nidoran_hembra_XY.png/"
                          width="96"
                          height="96"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                    <td rowSpan={2}>=</td>
                    <td>
                      <a
                        href="/pokemon/32"
                        className="lazyloaded"
                        title="Nidoran-M"
                      >
                        <img
                          alt="Nidoran-M"
                          src="https://static.wikia.nocookie.net/espokemon/images/4/48/Nidoran_macho_XY.png/"
                          width="96"
                          height="96"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        {" "}
                        <a className="links" href="/pokemon/304">
                          Aron
                        </a>{" "}
                        <img
                          className="generoimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/b/b2/Macho.png"
                          alt="genero_macho"
                        />{" "}
                        con{" "}
                        <a className="links" href="/movimiento/231">
                          Cola Férrea
                        </a>
                      </p>
                    </td>
                    <td>
                      <p>
                        {" "}
                        <a className="links" href="/pokemon/29">
                          Nidoran-F
                        </a>{" "}
                        <img
                          className="generoimg"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a0/Hembra.png"
                          alt="genero_hembra"
                        />{" "}
                      </p>
                    </td>
                    <td>
                      <p>
                        <a className="links" href="/pokemon/32">
                          Nidoran-M
                        </a>{" "}
                        con{" "}
                        <a className="links" href="/movimiento/231">
                          Cola Férrea
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a className="links" href="#monstruo">
                          Monstruo
                        </a>
                      </p>
                    </td>
                    <td rowSpan={2}></td>
                    <td>
                      <p>
                        <a className="links" href="#monstruo">
                          Monstruo
                        </a>{" "}
                        <a className="links" href="#campo">
                          Campo
                        </a>
                      </p>
                    </td>
                    <td rowSpan={2}></td>
                    <td>
                      <p>
                        {" "}
                        <a className="links" href="#monstruo">
                          Monstruo
                        </a>{" "}
                        <a className="links" href="#campo">
                          Campo
                        </a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="table-responsive-md">
                <table className="wiki" style={tableStyle}>
                  <tbody>
                    <tr className="encabezado">
                      <th className="text-align-center" colSpan="5">
                        Generación 2
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <a
                          className="links image"
                          href="/pokemon/32"
                          title="Nidoran-M"
                        >
                          <img
                            alt="Nidoran-M"
                            src="https://static.wikia.nocookie.net/espokemon/images/4/48/Nidoran_macho_XY.png/"
                            width="96"
                            height="96"
                          />
                        </a>
                      </td>
                      <td rowSpan={2}>+</td>
                      <td>
                        <a
                          className="links image"
                          href="/pokemon/23"
                          title="Ekans"
                        >
                          <img
                            alt="Ekans"
                            src="https://static.wikia.nocookie.net/espokemon/images/8/8c/Ekans_XY.png/"
                            width="96"
                            height="96"
                            className=" lazyloaded"
                          />
                        </a>
                      </td>
                      <td rowSpan={2}>=</td>
                      <td>
                        <a
                          href="/pokemon/23"
                          className="links lazyloaded"
                          title="Ekans"
                        >
                          <img
                            alt="Mareep"
                            src="https://static.wikia.nocookie.net/espokemon/images/8/8c/Ekans_XY.png/"
                            width="96"
                            height="96"
                            className=" lazyloaded"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          {" "}
                          <a className="links" href="/pokemon/32">
                            Nidoran-M
                          </a>{" "}
                          <img
                            className="generoimg"
                            src="https://static.wikia.nocookie.net/espokemon/images/b/b2/Macho.png"
                            alt="genero_macho"
                          />{" "}
                          con{" "}
                          <a className="links" href="/movimiento/231">
                            Cola Férrea
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          {" "}
                          <a className="links" href="/pokemon/23">
                            Ekans
                          </a>{" "}
                          <img
                            className="generoimg"
                            src="https://static.wikia.nocookie.net/espokemon/images/a/a0/Hembra.png"
                            alt="genero_hembra"
                          />{" "}
                        </p>
                      </td>
                      <td>
                        <p>
                          <a className="links" href="/pokemon/23">
                            Ekans
                          </a>{" "}
                          con{" "}
                          <a className="links" href="/movimiento/231">
                            Cola Férrea
                          </a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>
                          <a className="links" href="#monstruo">
                            Monstruo
                          </a>{" "}
                          <a className="links" href="#campo">
                            Campo
                          </a>
                        </p>
                      </td>
                      <td rowSpan={2}></td>
                      <td>
                        <p>
                          <a className="links" href="#campo">
                            Campo
                          </a>{" "}
                          <a className="links" href="#dragon">
                            Dragón
                          </a>
                        </p>
                      </td>
                      <td rowSpan={2}></td>
                      <td>
                        <p>
                          <a className="links" href="#campo">
                            Campo
                          </a>{" "}
                          <a className="links" href="#dragon">
                            Dragón
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
            <p>
              De este modo, aunque Aron y Ekans no pueden criar directamente por
              ser de distintos grupos huevo, el segundo puede heredar el
              movimiento Cola férrea del primero en dos generaciones, usando a
              Nidoran como intermediario ya que pertenece a ambos grupos.
            </p>
            <br />
            <p>
              Las cadenas pueden ser más largas y complejas, ampliando de forma
              notoria las posibilidades de transmisión de los movimientos huevo
              a través de cría secuencial.
            </p>
            <br />
          </div>
          <div className="row">
            <h1 id="tipos_de_grupos_huevo">Tipos de grupos huevo</h1>
            <hr />
          </div>
          <div id="tipos_de_grupos_huevo descripcion">
            <p>
              A continuación se listarán todos los grupos huevo existentes y los
              Pokémon que se incluyen en cada uno. Si un Pokémon pertenece
              también a un segundo grupo huevo, se indicará dicho grupo debajo
              de su imagen.
            </p>
            <br />
            <h3>Ninguno</h3>
            <br />
            <p>
              Los Pokémon que pertenecen a este grupo son los que no pueden
              criar; es decir, de ninguna manera tendrían un huevo, ni siquiera
              con un Ditto. Son los Pokémon legendarios (excepto Phione y
              Manaphy), Ultraentes, Pokémon bebés, los Unown y, también se
              incluyen a Nidorina y Nidoqueen (la razón es que Nidorina y
              Nidoqueen tienen un correspondiente en macho y por lo tanto, se
              usa a los machos).
            </p>
            <br />
            <p>
              A partir de Pokémon X y Pokémon Y, los Pokémon salvajes
              pertenecientes a este grupo huevo tienen asegurados 31 IVs en al
              menos 3 estadísticas. En Pokémon Rubí Omega y Pokémon Zafiro Alfa,
              esta regla solo se aplica a los legendarios.
            </p>
            <br />

            <div className="row">
              {store.grupo_huevo_data.map((grupo, i) =>
                grupo.group_name.includes("no-eggs") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${grupo.pokemon_id}`}
                      >
                        <p>{grupo.pokemon_name}</p>
                      </a>

                      <a
                        href={`/pokemon/${grupo.pokemon_id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            grupo.img.versions?.["generation-vi"]?.["x-y"]
                              .front_default
                              ? grupo.img.versions?.["generation-vi"]?.["x-y"]
                                  .front_default
                              : grupo.img.versions?.["generation-vii"]?.[
                                  "ultra-sun-ultra-moon"
                                ].front_default
                              ? grupo.img.versions?.["generation-vii"]?.[
                                  "ultra-sun-ultra-moon"
                                ].front_default
                              : grupo.img.other?.["official-artwork"]
                                  ?.front_default
                              ? grupo.img.other?.["official-artwork"]
                                  ?.front_default
                              : grupo.img.other?.home?.front_default
                              ? grupo.img.other?.home?.front_default
                              : ""
                          }
                          className="pokemonimg lazyloaded"
                        />
                      </a>
                    </div>
                  </>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokeducatorInfoGruposHuevo;
