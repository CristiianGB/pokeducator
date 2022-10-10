import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorInfoCrianza.css";
import grupos_huevo_img from "../../../assets/img/grupos_huevo_img.png";
import movimientos_huevo_img from "../../../assets/img/movimientos_huevo_img.png";
import { Context } from "../../store/appContext.jsx"

const PokeducatorInfoGruposHuevo = () => {
    const [num, setNum] = useState(0) 

    const aStyles = { fontSize: "18px" };
    const subStyles = { fontSize: "15px" };
    const tableStyle = {
      width: "300px",
      margin: "auto",
    };

    return (
        <div className="container align-items-center">
            <div className="row">
                <h1 id="grupos_huevo">Grupos Huevo</h1><hr />
            </div>
            <div className="grupos_huevo descripcion">
                <p>Los grupos huevo (Egg Group en inglés, タマゴグループ en japonés) son categorías de determinados Pokémon que son compatibles a la hora de criar entre ellos, es decir, que el resultado será un huevo. Si dos Pokémon no pertenecen al mismo grupo, entonces no son compatibles y no pueden dejar un huevo. Un Pokémon puede pertenecer a varios grupos huevo.</p><br />
            </div>
            <div className="row">
                <h1 id="cadenas_de_cria">Cadenas de cría</h1><hr />
            </div>
            <div className="cadenas_de_cria descripcion">
                <p>El hecho de que varios Pokémon pertenezcan a un mismo grupo huevo da lugar a los movimientos huevo, que son aquellos movimientos que un Pokémon puede heredar del padre aunque no los conozca la madre. En los videojuegos de la sexta generación (X/Y/RΩ/Zα), los movimientos se pueden heredar tanto del padre como de la madre.</p><br />
                <p>Ejemplo:</p><br />
                {/*tabla*/}
                <div className="table-responsive-md">
                    <table className="wiki" style={tableStyle}>
                      <tbody>
                        <tr className="encabezado">
                          <th className="text-align-center" colSpan="5">
                            Cría con Ditto
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="/pokemon/9"
                              className="image"
                              title="Blastoise"
                            >
                              <img
                                alt="Blastoise"
                                src="https://static.wikia.nocookie.net/espokemon/images/1/1b/Blastoise_XY.png"
                                width="96"
                                height="96"
                              />
                            </a>
                          </td>
                          <td rowSpan={2}>+</td>
                          <td>
                            <a
                              href="https://static.wikia.nocookie.net/espokemon/images/0/01/Ditto_XY.png"
                              className="image"
                              title="Ditto"
                            >
                              <img
                                alt="Ditto"
                                src="https://static.wikia.nocookie.net/espokemon/images/0/01/Ditto_XY.png/"
                                width="96"
                                height="96"
                                className=" lazyloaded"
                              />
                            </a>
                          </td>
                          <td rowSpan={2}>=</td>
                          <td>
                            <a
                              href="https://static.wikia.nocookie.net/espokemon/images/2/20/Squirtle_XY.png"
                              className=" lazyloaded"
                            >
                              <img
                                alt="Squirtle"
                                src="https://static.wikia.nocookie.net/espokemon/images/2/20/Squirtle_XY.png"
                                width="96"
                                height="96"
                                className=" lazyloaded"
                              />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Blastoise</p>
                          </td>
                          <td>
                            <p>Ditto</p>
                          </td>
                          <td>
                            <p>Squirtle</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                </div>
                <p>Además, el hecho de que varios Pokémon puedan pertenecer a dos grupos huevo a la vez permite establecer cadenas de cría entre Pokémon de distintos grupos huevo, usando a un Pokémon que pertenezca a ambos como intermediario o "puente". Por ejemplo:</p><br />
                {/*tabla*/}
                <p>De este modo, aunque Aron y Ekans no pueden criar directamente por ser de distintos grupos huevo, el segundo puede heredar el movimiento Cola férrea del primero en dos generaciones, usando a Nidoran como intermediario ya que pertenece a ambos grupos.</p><br />
                <p>Las cadenas pueden ser más largas y complejas, ampliando de forma notoria las posibilidades de transmisión de los movimientos huevo a través de cría secuencial.</p><br />
            </div>
        </div>
    )
}

export default PokeducatorInfoGruposHuevo;