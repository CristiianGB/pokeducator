import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiCrianzaStyles.css";
import grupos_huevo_img from "../../../assets/img/grupos_huevo_img.png";
import movimientos_huevo_img from "../../../assets/img/movimientos_huevo_img.png";
import { Context } from "../../store/appContext.jsx";
import loading from "../../../assets/img/loading.gif";

const PokeducatorWikiCrianza = () => {
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
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
        <>
          <div className="container align-items-center">
            <div className="row">
              <div className="col-12 my-4">
                <img
                  className="img-fluid w-100 portada"
                  src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-6.jpg"
                  alt="portada Pokeducator Crianza"
                />
              </div>
            </div>
            <div id="crianza" className="row">
              <h1 id="crianza">Crianza Pokémon</h1>
              <hr />
            </div>
            <div className="row">
              <div className="crianza descripcion">
                <img
                  className="mx-2 mb-2 pokeimg"
                  src="https://victoryroadvgc.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-24-at-19.44.20-1.jpeg"
                  alt="dos personajes de pokemon llevando huevos pokemon"
                />
                <p>
                  La crianza Pokémon (Pokémon breeding en inglés) es el conjunto
                  de actividades que se realizan para obtener crías de otros{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>
                  . Se introdujo en la{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    segunda generación
                  </a>
                  . Aparece gracias al señor Pokémon, quien descubre un Huevo
                  misterioso que los jugadores de{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Oro
                  </a>
                  ,{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Plata
                  </a>{" "}
                  y{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Cristal
                  </a>{" "}
                  tienen que entregar al profesor Elm.
                </p>
              </div>
            </div>
            <div className="col-sm-8 m-5 ms-3">
              <nav id="toc" data-toggle="toc" className="sticky-top">
                <ul className="nav navbar-nav">
                  <li>
                    <a
                      onClick={() => setNum(1)}
                      className={num == 1 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#crianza"
                    >
                      Crianza Pokémon
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(2)}
                      className={num == 2 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#funcionamiento"
                    >
                      Funcionamiento
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(3)}
                      id="desplegable"
                      className={num == 3 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#desplegable"
                    >
                      Guardería Pokémon
                    </a>
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#uso_de_ditto"
                        >
                          Uso de Ditto.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#crianza_de_formas_regionales"
                        >
                          Crianza de formas regionales.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(4)}
                      className={num == 4 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#grupos_huevo"
                    >
                      Grupos Huevo
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(5)}
                      className={num == 5 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#beneficios_de_la_crianza"
                    >
                      Beneficios de la crianza
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(6)}
                      className={num == 6 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#pokemon_obtenibles_mediante_crianza"
                    >
                      Pokémon obtenibles mediante crianza
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(8)}
                      className={num == 8 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#movimientos_huevo"
                    >
                      Movimientos huevo
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(9)}
                      className={num == 9 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#eclosion_del_huevo"
                    >
                      Eclosión del huevo
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(10)}
                      className={num == 10 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#pasos_para_una_cria_exitosa"
                    >
                      Pasos para una cria exitosa
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <h1 id="funcionamiento">Funcionamiento</h1>
              <hr />
            </div>
            <div className="row">
              <div className="col-12">
                <p className="funcionamiento descripcion">
                  La crianza en los{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    videojuegos
                  </a>{" "}
                  solo se produce en la{" "}
                  <a className="links" href="/wiki/guarderia-pokemon">
                    guardería Pokémon
                  </a>
                  . En esta misma hay que dejar a dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  de{" "}
                  <a className="links" href="/wiki/genero-pokemon">
                    género
                  </a>{" "}
                  opuesto (un Pokémon macho y otro hembra) y ambos deben
                  compartir un{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    grupo huevo
                  </a>{" "}
                  en común. También se puede conseguir si uno de los dos es un{" "}
                  <a className="links" href="/pokemon/132">
                    Ditto
                  </a>{" "}
                  (solo uno de los dos), y el otro pertenece a algún{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    grupo huevo
                  </a>
                  . Esto puede ser útil, ya que los{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  de género desconocido solo pueden reproducirse con un{" "}
                  <a className="links" href="/pokemon/132">
                    Ditto
                  </a>
                  . Sin embargo, no se puede reproducir un{" "}
                  <a className="links" href="/pokemon/132">
                    Ditto
                  </a>{" "}
                  con otro, y hasta la{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    sexta generación
                  </a>{" "}
                  no se podían aprender
                  <a className="links" href="/movimientos"></a> huevo.
                  <br />
                  <img
                    className="crianza_imagen w-50 h-50 mt-4 my-2 mx-2"
                    src="https://as01.epimg.net/meristation/imagenes/2019/11/26/guia_pagina/1574769028_390250_1574769946_portada_normal.jpg"
                    alt="imagen sobre la crianza pokemon."
                  />
                  <br />
                  Con los requisitos cumplidos, los dos Pokémon pondrán un huevo
                  cuando hayas avanzado un determinado número de pasos. La
                  cantidad de pasos necesarios para que pongan un huevo depende
                  de la probabilidad de crianza calculada cada 256 pasos.
                  <br />
                  <br />
                </p>
                <ul>
                  <li>
                    Si son de la misma especie y diferente entrenador la
                    probabilidad será de 69.3%.
                  </li>
                  <li>
                    Si son de la misma especie y el mismo entrenador la
                    probabilidad será de 49.5%.
                  </li>
                  <li>
                    Si son de diferente especie y diferente entrenador la
                    probabilidad será de 49.5%.
                  </li>
                  <li>
                    Si son de diferente especie y el mismo entrenador la
                    probabilidad será de 19.8%.
                  </li>
                </ul>
                <br />
                <p>
                  Del huevo nacerá un{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  después de una cantidad de pasos determinada, que depende de
                  la especie que salga del huevo, y que puede reducirse con
                  ciertas{" "}
                  <a className="links" href="/habilidades">
                    habilidades
                  </a>
                  . Del huevo saldrá un Pokémon con estas características:
                </p>
                <ul>
                  <li>
                    Tendrá nivel 1 (nivel 5 antes de la cuarta generación).
                  </li>
                  <li>
                    La especie del{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    será la de la madre, aunque siempre la etapa evolutiva
                    inicial, excepto si esta es una cría Pokémon que necesite un{" "}
                    <a className="links" href="/objetos">
                      objeto
                    </a>{" "}
                    equipado que los padres no lleven. Por ejemplo, si la madre
                    es Marill o Azumarill y no lleva equipado el{" "}
                    <a className="links" href="/objetos">
                      objeto
                    </a>{" "}
                    Incienso marino del huevo siempre sale Marill.
                  </li>
                  <li>
                    Los{" "}
                    <a className="links" href="/movimientos">
                      movimientos
                    </a>{" "}
                    serán:
                    <ul>
                      <li>
                        Los que deba conocer la especie del{" "}
                        <a className="links" href="/pokemons">
                          Pokémon
                        </a>{" "}
                        en el nivel en el que nace.
                      </li>
                      <li>
                        Heredará los{" "}
                        <a className="links" href="/movimientos">
                          movimientos
                        </a>{" "}
                        que ambos progenitores conozcan (a la vez).
                      </li>
                      <li>
                        Heredarán los{" "}
                        <a className="links" href="/movimientos">
                          movimientos
                        </a>{" "}
                        huevo que pueda aprender la especie y que conozca
                        cualquiera de los progenitores (hasta la quinta
                        generación solo podía heredarlos del padre).
                      </li>
                      <li>
                        Hasta la{" "}
                        <a className="links" href="/wiki/juegos-pokemon">
                          quinta generación
                        </a>
                        : MT y MO que pueda aprender la especie y que conozca el
                        padre. A partir de la sexta generación ya no se heredan
                        movimientos MT o MO, salvo que cumplan uno de los
                        requisitos anteriores.
                      </li>
                    </ul>
                  </li>
                  <li>
                    La cría puede heredar la{" "}
                    <a className="links" href="/wiki/naturaleza-pokemon">
                      naturaleza
                    </a>{" "}
                    de alguno de sus progenitores con mayor probabilidad si
                    alguno lleva equipada una piedraeterna, dependiendo de
                    algunos factores.
                  </li>
                  <li>
                    Desde{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      Pokémon Negro y Pokémon Blanco
                    </a>{" "}
                    la cría puede heredar la Habilidad oculta si la madre la
                    tiene (con una probabilidad de 60%), siempre que la madre no
                    sea Ditto, aún cuando tenga su habilidad oculta Impostor.
                    Desde{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      Pokémon X y Pokémon Y
                    </a>
                    , esto puede suceder con la habilidad oculta del padre si
                    Ditto funciona como madre.
                  </li>
                  <img
                    className="crianza_imagen w-25 h-25 float-start mt-5 my-2 me-3 mx-2"
                    src="https://static.wikia.nocookie.net/espokemon/images/8/8c/Manaphy_y_Phione.png"
                    alt="Manaphy y Phione"
                  />
                  <li>
                    Desde{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      Pokémon Negro 2 y Pokémon Blanco 2
                    </a>
                    , la cría puede heredar la habilidad regular de la madre con
                    una probabilidad de 80%.
                  </li>
                  <li>
                    A partir de{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      Pokémon Oro HeartGold y Plata SoulSilver
                    </a>{" "}
                    también se puede heredar la genética (IVS) de los padres
                    siempre y cuando tengan equipadas Cinto recio, Banda recia,
                    Pesa recia, Lente recia, Franja recia o Brazal recio, para
                    heredar los IVS en defensa, defensa especial, PS, ataque
                    especial, velocidad y ataque respectivamente. En la{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      sexta generacion
                    </a>
                    , si uno de los padres lleva equipado un Lazo destino, la
                    cría heredará los IV de 5 de las 12 estadísticas de los
                    padres (6 pertenecen a cada padre, 12 en total).
                  </li>
                  <li>
                    En la{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      sexta generacion
                    </a>{" "}
                    la cría estará en el mismo tipo de Poké Ball que la madre, a
                    excepción de que un{" "}
                    <a className="links" href="/pokemon/132">
                      Ditto
                    </a>{" "}
                    cumpla la función de esta, en este caso la Poké Ball será
                    una Poké Ball normal. En la{" "}
                    <a className="links" href="/wiki/juegos-pokemon">
                      séptima generacion
                    </a>{" "}
                    la Poké ball la heredará de cualquiera de los dos padres si
                    son de la misma especie, solo de la madre si son de especies
                    diferentes, o del otro Pokémon si la crianza es con
                    <a className="links" href="/pokemon/132">
                      Ditto
                    </a>
                    . En generaciones anteriores siempre estará en una Poké Ball
                    normal. Una Master Ball o Gloria Ball no se puede heredar,
                    resultando en una Poké Ball normal.
                  </li>
                </ul>
                <br />
              </div>
            </div>
            <div id="crianza_guarderia" className="row">
              <h1>Guardería Pokémon</h1>
              <hr />
            </div>
            <div className="crianza_guarderia descripcion">
              <p>
                Artículo principal:{" "}
                <a className="links" href="/wiki/guarderia-pokemon">
                  Guardería Pokémon.
                </a>
              </p>
              <br />
              <img
                className="crianza_imagen w-25 me-4 mb-4 my-2 mx-2"
                src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c9/latest/20130204042256/EP672_Guarder%C3%ADa_Pok%C3%A9mon.png/250px-EP672_Guarder%C3%ADa_Pok%C3%A9mon.png"
                alt="guardería pokémon anime"
              />
              <p>
                Para poder obtener una cría{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                debemos llevarlos a la{" "}
                <a className="links" href="/wiki/guarderia-pokemon">
                  Guardería Pokémon
                </a>
                . Pasado de un tiempo al haber dejado un Pokémon macho y uno
                hembra compatibles (o{" "}
                <a className="links" href="/pokemon/132">
                  Ditto
                </a>
                ) obtendremos un huevo.
              </p>
              <br />
              <h3 id="uso_de_ditto">Uso de Ditto</h3>
              <br />
              <p>
                Ciertos{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>
                , como los Pokémon iniciales, sólo se obtienen una vez. Sin
                embargo,{" "}
                <a className="links" href="/pokemon/132">
                  Ditto
                </a>
                , que tiene la capacidad de transformarse en cualquier Pokémon,
                es capaz de sustituir al segundo Pokémon que se junta en la
                guardería.
                <br />
                <br />
                Así, si dejamos por ejemplo a un{" "}
                <a className="links" href="/pokemon/132">
                  Ditto
                </a>{" "}
                en la guardería con un{" "}
                <a className="links" href="/pokemon/9">
                  Blastoise
                </a>
                , nacerá un{" "}
                <a className="links" href="/pokemon/7">
                  Squirtle
                </a>
                ; sin importar el género del padre o madre (ya que Ditto puede
                manipular su ADN para ser macho, hembra o sin género el cual es
                su estado común).
              </p>
              <br />
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
                        <a href="/pokemon/132" className="image" title="Ditto">
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
                        <a href="/pokemon/7" className=" lazyloaded">
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
                        <p>
                          <a className="links" href="/pokemon/9">
                            Blastoise
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          <a className="links" href="/pokemon/132">
                            Ditto
                          </a>
                        </p>
                      </td>
                      <td>
                        <p>
                          <a className="links" href="/pokemon/7">
                            Squirtle
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div id="crianza_de_formas_regionales" className="row">
                <h3>Crianza de formas regionales</h3>
                <br />
              </div>
              <div className="crianza_de_formas_regionales descripcion">
                <p>
                  Desde la{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Séprima generacíon
                  </a>
                  , ciertos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  dentro de la región de Alola, gracias a la característica de
                  este entorno adquieren una forma y tipos distintos al de su
                  contraparte regional original. El uso de la{" "}
                  <a className="links" href="/objeto/206">
                    Piedra Eterna
                  </a>{" "}
                  es primordial para conseguir crías con su forma original
                  dentro de esta región.
                </p>
                <br />
                <p>
                  Dentro de la región de Alola, si dejamos por ejemplo a un{" "}
                  <a className="links" href="/pokemon/19">
                    Rattata
                  </a>{" "}
                  en la guardería con un{" "}
                  <a className="links" href="/pokemon/10091">
                    Rattata-Alola
                  </a>
                  , nacerá otro Rattata de Alola, sin importar el género del
                  padre o madre (ya que los genes de Alola predominan sobre los
                  de otra región y siempre nacerá un pokémon forma Alola). Pero
                  al utilizar la{" "}
                  <a className="links" href="/objeto/206">
                    Piedra Eterna
                  </a>{" "}
                  la cría obtendrá la forma del padre equipado con este{" "}
                  <a className="links" href="/objetos">
                    objeto
                  </a>
                  , si es el caso de que ambos padres tengan este{" "}
                  <a className="links" href="/objetos">
                    objeto
                  </a>{" "}
                  equipado, la cría no adquirirá la forma Alola, siempre y
                  cuando la madre no tenga forma regional.
                </p>
                <br />
                <div className="table-responsive-md">
                  <table className="wiki" style={tableStyle}>
                    <tbody>
                      <tr className="encabezado">
                        <th className="text-align-center" colSpan="5">
                          Críanza en Alola
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="/pokemon/91"
                            className="image"
                            title="Rattata"
                          >
                            <img
                              alt="Rattata"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c6/Rattata_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>+</td>
                        <td>
                          <a
                            href="/pokemon/10091"
                            className="image"
                            title="Rattata de Alola"
                          >
                            <img
                              alt="Rattata de Alola"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/7d/Rattata_de_Alola_SL.png"
                              width="96"
                              height="96"
                              className=" lazyloaded"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>=</td>
                        <td>
                          <a href="/pokemon/10091" className=" lazyloaded">
                            <img
                              alt="Rattata de Alola"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/7d/Rattata_de_Alola_SL.png"
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
                            <a className="links" href="/pokemon/91">
                              Rattata
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/10091">
                              Rattata-Alola
                            </a>{" "}
                            +{" "}
                            <a className="links" href="/objeto/206">
                              Piedra Eterna
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/10091">
                              Rattata-Alola
                            </a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
              <div id="grupos_huevo" className="row">
                <h1>Grupos huevo</h1>
                <hr />
              </div>
              <div className="grupos_huevo descripcion">
                <p>
                  Artículo principal:{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    Grupos huevo
                  </a>
                  .
                </p>
                <br />
                <p>
                  Para que dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  puedan criar deben cumplir determinados requisitos. Así, los
                  Pokémon legendarios (excepto{" "}
                  <a className="links" href="/pokemon/490">
                    Manaphy
                  </a>
                  ) y las crías Pokémon no pueden criar. Los demás podrán criar
                  solo con Pokémon de su misma especie o que tenga
                  compatibilidad con ellos.
                </p>
                <img
                  className="mx-2 mb-2 grupos_huevo_img"
                  src={grupos_huevo_img}
                  alt="dos personajes de pokemon llevando huevos pokemon"
                />
                <br />
                <p>
                  La compatibilidad de las especies está determinado por los{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    Grupos huevo
                  </a>
                  . Dos especies serán compatibles entre si, sí pertenecen a un
                  mismo grupo huevo. Los{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    Grupos huevo
                  </a>{" "}
                  y los{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  que pertenecen a ella se muestran aquí: al dejar en la
                  <a className="links" href="/wiki/guarderia-pokemon">
                    guardería
                  </a>{" "}
                  dos Pokémon para que se críen, el anciano de fuera del
                  edificio que cuida de ellos dirá una frase que da una idea de
                  si los Pokémon pondrán o no un huevo y cuanto tardarán:
                </p>
                <br />
                <ul>
                  <li>
                    Se llevan estupendamente: pondrán rápidamente un huevo.
                  </li>
                  <li>
                    Se llevan bastante bien: pondrán un huevo, aunque tardarán
                    más que con la opción anterior.
                  </li>
                  <li>
                    No se quieren con locura/no parece que se compenetren mucho:
                    pondrán un huevo, aunque tardarán más que con la opción
                    anterior.
                  </li>
                  <li>
                    Prefieren jugar con otros Pokémon: no pondrán nunca un
                    huevo.
                  </li>
                </ul>
                <br />
                <p>
                  En{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Diamante y Pokémon Perla
                  </a>
                  , hay una función del Pokéreloj que dice exactamente lo mismo,
                  se llama "Medidor de amor de Luvdisc", donde dos{" "}
                  <a className="links" href="/pokemon/370">
                    Luvdisc
                  </a>{" "}
                  están en la pantalla, y, después de dejar dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  en la guardería y accionar la función, se acercarán, se
                  tocarán (y se darán un beso), o no se acercarán nada. Cuanto
                  más se acerquen, más probabilidades habrá de que pongan un
                  huevo. Esta función solo se consigue por evento. En{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Platino
                  </a>{" "}
                  la puedes conseguir si atrapas 5{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  en un solo juego del Gran Pantano.
                </p>
                <br />
              </div>
              <div id="beneficios_de_la_crianza" className="row">
                <h1>Beneficios de la crianza</h1>
                <hr />
              </div>
              <div className="beneficios_de_la_crianza descripcion">
                <p>
                  Los beneficios son tres: obtener más individuos de una
                  especie, obtener{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  con mejores estadísticas y obtener{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  con{" "}
                  <a className="links" href="/movimientos">
                    movimientos
                  </a>{" "}
                  especiales.
                </p>
                <br />
                <p>
                  Tener más{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  de una misma especie, te servirá para entrenarlos de diferente
                  manera o intercambiarlos con otros. Además los{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  que nacieron de huevo pueden tener mejores IV's que sus
                  padres. Y por último las crías podrán salir con movimientos
                  huevo, que son los{" "}
                  <a className="links" href="/movimientos">
                    movimientos
                  </a>{" "}
                  que solo se pueden aprender por el método de la crianza. La
                  mayoría de veces solo se pueden conseguir de ese modo, no
                  todos son recomendables, pero con algunos se pueden hacer
                  buenas combinaciones. Lo normal es que aprendan las crías uno
                  o dos movimientos huevo pero con las Cadenas de Cría se puede
                  llegar a conseguir que un{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  pueda aprender varios movimientos huevo.
                </p>
                <img
                  className="mx-2 mb-2 float-end"
                  src="https://culturageek.com.ar/wp-content/uploads/2021/12/e244cd0b0bc571593466f77d6ec0e7197d00be38_hq.jpg"
                  alt="dos personajes de pokemon llevando huevos pokemon"
                />
                <br />
                <p>
                  Otro beneficio es poder conseguir{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  que no aparecen de otra manera: estos son las crías{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>
                  .
                </p>
                <br />
                <p>
                  Desde{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Esmeralda
                  </a>{" "}
                  es posible facilitar la obtención de{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>
                  de la misma naturaleza equipando a sus progenitores con una
                  piedra eterna. Los detalles se explican en la sección Herencia
                  de la naturaleza mediante crianza de la página{" "}
                  <a className="links" href="/wiki/naturaleza-pokemon">
                    Naturaleza
                  </a>
                  .
                </p>
                <br />
                <p>
                  También, a partir de la cuarta generación, otro beneficio de
                  la crianza es que si uno de los padres es de otra región
                  (real, no virtual) aumenta las posibilidades de que el{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  que nazca del huevo sea variocolor. Para conseguir{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  de otras regiones se debe hace intercambio en la Terminal
                  Global. Por ejemplo, un{" "}
                  <a className="links" href="/pokemon/132">
                    Ditto
                  </a>{" "}
                  de Japón criando con un{" "}
                  <a className="links" href="/pokemon/18">
                    Pidgeot
                  </a>{" "}
                  de España tendría más posibilidades de que el{" "}
                  <a className="links" href="/pokemon/16">
                    Pidgey
                  </a>{" "}
                  que nazca sea variocolor que si ambos fueran del mismo país.
                </p>
                <br />
              </div>
              <div id="pokemon_obtenibles_mediante_crianza" className="row">
                <h1>Pokémon obtenibles mediante crianza</h1>
                <hr />
              </div>
              <div className="pokemon_obtenibles_mediante_crianza descripcion">
                <p>
                  Desde{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Oro, Pokémon Plata y Pokémon Cristal
                  </a>{" "}
                  podemos obtener, mediante crianza, a diferentes crías Pokémon:
                </p>
                <br />
                <div className="table-responsive-md">
                  <table className="wiki" style={tableStyle}>
                    <tbody>
                      <tr className="encabezado">
                        <th className="text-align-center" colSpan="5">
                          Crías:
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/172">
                              Pichu
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/173">
                              Cleffa
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/174">
                              Igglybuff
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/238">
                              Smoochum
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/239">
                              Elekid
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/240">
                              Magby
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/175">
                              Togepi
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/236">
                              Tyrogue
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/172"
                            className="image"
                            title="Pichu"
                          >
                            <img
                              alt="Pichu"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/a8/Pichu_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/173"
                            className="image"
                            title="Cleffa"
                          >
                            <img
                              alt="Cleffa"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/7e/Cleffa_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/174"
                            className="image"
                            title="Igglybuff"
                          >
                            <img
                              alt="Igglybuff"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/ac/Igglybuff_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/238"
                            className="image"
                            title="Smoochum"
                          >
                            <img
                              alt="Smoochum"
                              src="https://static.wikia.nocookie.net/espokemon/images/5/58/Smoochum_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/239"
                            className="image"
                            title="Elekid"
                          >
                            <img
                              alt="Elekid"
                              src="https://static.wikia.nocookie.net/espokemon/images/b/bb/Elekid_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/240"
                            className="image"
                            title="Magby"
                          >
                            <img
                              alt="Magby"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/73/Magby_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/175"
                            className="image"
                            title="Togepi"
                          >
                            <img
                              alt="Togepi"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/ce/Togepi_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/236"
                            className="image"
                            title="Tyrogue"
                          >
                            <img
                              alt="Tyrogue"
                              src="https://static.wikia.nocookie.net/espokemon/images/2/22/Tyrogue_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <p>
                  En las ediciones{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Rubí y Pokémon Zafiro
                  </a>{" "}
                  se han incorporado otras dos nuevas crías. Sin embargo, para
                  conseguirlas no basta con dejar a dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  compatibles (es decir, que pertenezcan al mismo{" "}
                  <a className="links" href="/wiki/grupos-huevo">
                    grupo huevo
                  </a>
                  ) en la guardería, sino que además, uno de ellos debe de estar
                  equipado con un tipo de incienso para que del huevo salga
                  dicha cría. Es probable que el incienso haga eclosionar el
                  huevo antes de que el{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  alcance su desarrollo completo y lo realice fuera de este,
                  dándonos a conocer otra fase de la especie. Estos dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  son:
                </p>
                <br />
                <div className="table-responsive-md">
                  <table className="wiki" style={tableStyle}>
                    <tbody>
                      <tr className="encabezado">
                        <th>Crías:</th>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/298">
                              Azurill
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/60">
                              Wynaut
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/298"
                            className="image"
                            title="Azurrill"
                          >
                            <img
                              alt="Azurrill"
                              src="https://static.wikia.nocookie.net/espokemon/images/2/2c/Azurill_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/360"
                            className="image"
                            title="Wynaut"
                          >
                            <img
                              alt="Wynaut"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e0/Wynaut_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <p>
                    En la cuarta generación, podremos obtener otras crías,
                    utilizando el ya mencionado sistema de inciensos:
                  </p>
                  <br />
                  <table className="wiki" style={tableStyle}>
                    <tbody>
                      <tr>
                        <th className="encabezado">Crías:</th>
                      </tr>
                      <tr>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/446">
                              Munchlax
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/406">
                              Budew
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/433">
                              Chingling
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/4338">
                              Bonsly
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/439">
                              Mime Jr.
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/440">
                              Happiny
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/458">
                              Mantyke
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/446"
                            className="image"
                            title="Munchlax"
                          >
                            <img
                              alt="Munchlax"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e7/Munchlax_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/406"
                            className="image"
                            title="Budew"
                          >
                            <img
                              alt="Budew"
                              src="https://static.wikia.nocookie.net/espokemon/images/b/b6/Budew_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/433"
                            className="image"
                            title="Chingling"
                          >
                            <img
                              alt="Chingling"
                              src="https://static.wikia.nocookie.net/espokemon/images/f/f8/Chingling_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/438"
                            className="image"
                            title="Bonsly"
                          >
                            <img
                              alt="Bonsly"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/aa/Bonsly_XY.png/"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/439"
                            className="image"
                            title="Mime Jr."
                          >
                            <img
                              alt="Mime Jr."
                              src="https://static.wikia.nocookie.net/espokemon/images/3/38/Mime_Jr._XY.png/"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/440"
                            className="image"
                            title="Happiny"
                          >
                            <img
                              alt="Happiny"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/a3/Happiny_XY.png/"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>
                          <a
                            href="/pokemon/458"
                            className="image"
                            title="Mantyke"
                          >
                            <img
                              alt="Mantyke"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e1/Mantyke_XY.png/"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
              <div className="row">
                <h1 id="movimientos_huevo">Movimientos huevo</h1>
                <hr />
              </div>
              <div className="movimientos_huevo descripcion">
                <p>
                  Este es uno de los grandes atractivos de la crianza Pokémon.
                  Un movimiento huevo es aquel movimiento de combate que un{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  nace sabiendo, pero que jamás podría aprender mediante MT, MO,
                  Tutor, etc.
                </p>
                <img
                  className="pokeimg_centrada"
                  src={movimientos_huevo_img}
                  alt="dos personajes de pokemon llevando huevos pokemon"
                />
                <br />
                <p>
                  Para obtener movimientos huevo se deben cruzar dos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  de distinto género y especie, teniendo en cuenta que el padre
                  (♂), da los{" "}
                  <a className="links" href="/movimientos">
                    movimientos
                  </a>
                  , y la madre (♀), la especie.
                </p>
                <br />
                <div className="table-responsive-md">
                  <table className="wiki" style={tableStyle}>
                    <tbody>
                      <tr>
                        <th>Crianza:</th>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="/pokemon/248"
                            className="image"
                            title="Tyranitar"
                          >
                            <img
                              alt="Tyranitar"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/7b/Tyranitar_XY.png"
                              width="96"
                              height="96"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>+</td>
                        <td>
                          <a
                            href="/pokemon/160"
                            className="image"
                            title="Feraliagtr"
                          >
                            <img
                              alt="Feraliagtr"
                              src="https://static.wikia.nocookie.net/espokemon/images/d/d9/Feraligatr_XY.png"
                              width="96"
                              height="96"
                              className=" lazyloaded"
                            />
                          </a>
                        </td>
                        <td rowSpan={2}>=</td>
                        <td>
                          <a href="/pokemon/158" className=" lazyloaded">
                            <img
                              alt="Totodile"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e3/Totodile_XY.png/"
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
                            <a className="links" href="/pokemon/248">
                              Tyranitar
                            </a>{" "}
                            con Triturar
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/160">
                              Feraligatr
                            </a>
                          </p>
                        </td>
                        <td>
                          <p>
                            <a className="links" href="/pokemon/158">
                              Totodile
                            </a>{" "}
                            con Triturar
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <div className="row">
                <h1 id="eclosion_del_huevo">Eclosión del huevo</h1>
                <hr />
              </div>
              <div className="eclosion_del_huevo descripcion">
                <p>
                  El huevo tarda cierto tiempo en abrirse. Algunos{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  tardan más, y otros menos en nacer. El tiempo que tarda el
                  huevo en abrirse se mide en ciclos de 256 pasos cada uno.
                </p>
                <img
                  className="mx-2 mb-2 crianza_imagen w-25 h-25"
                  src="https://editors.dexerto.es/wp-content/uploads/sites/3/2020/12/1c26ca90328416ef19c1438fa529a42cpokemon-sword-shield-player-goes-viral-for-luckiest-egg-hatch-ever.jpg"
                  alt="dos personajes de pokemon llevando huevos pokemon"
                />
                <br />
                <p>
                  A continuación se presenta una tabla con los pasos que tarda
                  cada especie{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  en salir del huevo. No se muestran especies que no puedan
                  nacer de un huevo, como la mayoría de evoluciones.
                </p>
                <br />
                <p>
                  A partir de la{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    cuarta generacion
                  </a>{" "}
                  el número de pasos por ciclo se redujo de 256 a 255.
                </p>
                <br />
                <p>
                  A partir de{" "}
                  <a className="links" href="/wiki/juegos-pokemon">
                    Pokémon Esmeralda
                  </a>{" "}
                  y las siguientes ediciones, si mientras llevas el huevo en el
                  equipo pones un{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  en tu equipo cuya{" "}
                  <a className="links" href="/habilidades">
                    habilidad
                  </a>{" "}
                  sea Escudo magma o Cuerpo llama, el huevo sólo necesitará la
                  mitad de pasos para abrirse.
                </p>
                <br />
              </div>
              <div className="row">
                <h1 id="pasos_para_una_cria_exitosa">
                  Pasos para una cria exitosa
                </h1>
                <hr />
              </div>
              <div className="pasos_para_una_cria_exitosa descripcion">
                <p>
                  A continuación encontrarás un serie de pautas con consejos que
                  te guiarán y ayudarán en tu objetivo de tener una crianza
                  exitosa y por tanto conseguir el{" "}
                  <a className="links" href="/pokemons">
                    Pokémon
                  </a>{" "}
                  con los{" "}
                  <a className="links" href="/movimientos">
                    movimientos
                  </a>{" "}
                  deseados.
                </p>
                <br />
                <ul>
                  <li>
                    <b>Saber qué Pokémon son compatibles.</b> Cualquier especie
                    de las que pueda criar lo hará en todas sus fases de
                    evolución, a excepción de los Pokémon bebé,{" "}
                    <a className="links" href="/pokemon/30">
                      Nidorina
                    </a>{" "}
                    y{" "}
                    <a className="links" href="/pokemon/31">
                      Nidoqueen
                    </a>
                    , los cuales no pertenecen a ningún{" "}
                    <a className="links" href="/wiki/grupos-huevo">
                      grupo huevo
                    </a>
                    .
                  </li>
                  <br />
                  <li>
                    <b>Elegir el hembra.</b> Las crías siempre serán de la misma
                    especie que la hembra, en su menor fase de evolución.
                    Existen excepciones que son los{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    que llevan inciensos, que ya fueron mencionados
                    anteriormente.{" "}
                  </li>
                  <br />
                  <li>
                    <b>Elegir los movimientos que enseñaremos a la cría.</b>
                    Para que la cría nazca con ataques deberás tener en cuenta
                    que las crías{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    pueden aprender tres tipos de{" "}
                    <a className="links" href="/movimientos">
                      movimientos
                    </a>
                    :
                    <ul>
                      <img
                        className="mx-2 mb-2 crianza_imagen w-25 h-25"
                        src="http://pm1.narvii.com/6117/6bc860b082ceb82df4b63baa0af99a75c1f5a0d4_00.jpg"
                        alt="dos personajes de pokemon llevando huevos pokemon"
                      />
                      <li>
                        <b>Los movimientos de nivel</b>, son aquellos que
                        aprenden de forma natural durante el entrenamiento. Si
                        la cría es capaz de conocer ese movimiento y sus dos
                        padres lo tienen, la cría nacerá con él.
                      </li>
                      <li>
                        <b>
                          Los movimientos de MT (esto solo es útil antes de la
                          quinta generación),
                        </b>
                        siempre las heredará del padre si es que la cría lo
                        puede aprender. Muy útil para no gastar tus MT. Y
                        siempre sera mejor que les enseñes tus MT a Pokémon
                        machos para poderlas pasar a otros Pokémon. A partir de
                        la quinta generación las MT no se gastan, por lo que
                        este método no es útil. A partir de la sexta generación
                        las MT tampoco se heredan a la cría.
                      </li>
                      <li>
                        Y por último <b>los movimientos huevo</b> que son los
                        que estamos explicando.
                      </li>
                    </ul>
                    <br />
                  </li>
                  <li>
                    <b>Escoger el Pokémon macho.</b> El Pokémon macho deberá ser
                    de una especie compatible a la de la hembra y deberá conocer
                    algún movimiento que la cría pueda aprender atendiendo a las
                    tres categorías que hemos mencionado anteriormente. De no
                    ser así la cría nacerá con{" "}
                    <a className="links" href="/movimientos">
                      movimientos
                    </a>{" "}
                    naturales preestablecidos.
                  </li>
                  <br />
                  <li>
                    <b>
                      Asegurar la existencia del movimiento durante la crianza.
                    </b>{" "}
                    Los{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    macho y hembra subirán niveles en la guardería y podrían
                    olvidar{" "}
                    <a className="links" href="/movimientos">
                      movimientos{" "}
                    </a>
                    . Hay que prestar mucha atención porque puede jugarte una
                    mala pasada. A veces, el tiempo en el que los
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    que están en la guardería pongan un huevo es
                    considerablemente largo y tus{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    podrían subir varios niveles. Si coincide que sube un nivel
                    y aprende un movimiento en dicho nivel, se borrará el primer
                    movimiento que conociera. Lo más recomendable es dejar un{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    de nivel alto porque les cuesta subir de nivel o también
                    puedes ordenar los{" "}
                    <a className="links" href="/movimientos">
                      movimientos
                    </a>{" "}
                    poniendo en la última posición el movimiento que deseas
                    pasar a la cría. Otra opción es asegurarse que el padre haya
                    llegado a un nivel en el cual ya no aprenderá más
                    movimientos. Los{" "}
                    <a className="links" href="/movimientos">
                      movimientos
                    </a>{" "}
                    que aprenden los padres al subir de nivel lo hacen todos de
                    golpe al recogerlos, es decir, si dejas un{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>{" "}
                    nivel 1 con 4 movimientos huevo sus crías saldrán con todos
                    los movimientos huevo aunque cuando lo recojas el progenitor
                    haya olvidado todos los movimientos que tenía inicialmente.
                  </li>
                  <br />
                  <li>
                    <b>Eclosión del huevo.</b>
                    Después de haber conseguido el huevo, lo tendrás que hacer
                    eclosionar. Para esto debes llevarlo en el equipo y caminar
                    un número determinado de pasos hasta que se abra el huevo.
                    Los pasos dependen del{" "}
                    <a className="links" href="/pokemons">
                      Pokémon
                    </a>
                    ; puedes consultar los de cada uno en la tabla superior.
                    Estos son algunos consejos mientras el huevo te acompañe:
                  </li>
                  <ul>
                    <li>
                      Lleva en tu equipo un{" "}
                      <a className="links" href="/pokemons">
                        Pokémon
                      </a>{" "}
                      que tenga la habilidad cuerpo llama o escudo magma.
                      Reducirá los pasos necesarios a la mitad.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon X, Pokémon Y, Pokémon Rubí Omega y Pokémon
                        Zafiro Alfa
                      </a>{" "}
                      puedes hacer uso del Poder O de incubación que consiste en
                      acelerar el proceso de eclosión. Es recomendable haber
                      dado 4000 pasos con tu consola Nintendo 3DS para acelerar
                      el proceso de recarga de las burbujas de poder O
                      necesarias para el poder de incubación.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Esmeralda, Pokémon Rubí y Pokémon Zafiro
                      </a>{" "}
                      puedes colocarte debajo del letrero que hay a lado del
                      Centro Pokémon de Ciudad Malvalona y en la Bici Carrera
                      irte hacia la derecha hasta chocar con la muchacha y
                      después irte todo hasta la izquierda hasta chocar con la
                      cerca, exactamente son como 190 pasos, es el método mas
                      eficaz para eclosionar un huevo en esas versiones.
                    </li>
                    <li>
                      Desde la{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        tercera generacion
                      </a>{" "}
                      existe la opción de ir con alguna de las bicicletas y
                      encarrerarte hacia una subida de lodo o contra corrientes
                      marinas fuertes.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Diamante, Pokémon Perla y Pokémon Platino
                      </a>
                      , en el camino que cruza pueblo Sosiego, situado en uno de
                      los cuadros, puedes recorrer todo el pueblo y las rutas
                      209 y 210 en recto sin bajar de la bici. Exactamente son
                      123 pasos. También, si activaste el evento de la Carta del
                      Prof. Oak, puedes ir a la Vía Costera desde la Ruta 224
                      donde esta la Roca blanca en recto hacia el norte hasta
                      topar con el paraíso floral son exactamente 295 pasos.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Oro HeartGold y Pokémon Plata SoulSilver
                      </a>
                      , en el camino que cruza Ciudad Trigal, situado en el
                      segundo recuadro empezando por la derecha, puedes recorrer
                      recto desde la salida hasta colocarte al lado de la
                      guardería. O también puedes tomar el Magnetotrén para
                      llegar a Kanto rápidamente y usar el camino de bicicletas
                      que es más largo y además te mueves automáticamente.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Rojo Fuego y Pokémon Verde Hoja
                      </a>{" "}
                      ve a ciudad azulona y sal por el camino para bicicletas,
                      al acabarlo usa vuelo para volver a ciudad Azulona y
                      repite, después de 8 veces habrás hecho cerca de 6000
                      pasos.
                    </li>
                    <img
                      className="mx-3 my-2 float-start crianza_imagen w-25 h-25"
                      src="https://static.wikia.nocookie.net/espokemon/images/c/c3/Criapok%C3%A9mon_ROZA.png/"
                      alt="dos personajes de pokemon llevando huevos pokemon"
                    />
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Blanco y Pokémon Negro
                      </a>{" "}
                      ve al Puente Saeta y simplemente recorre el puente arriba
                      y abajo con la bicicleta, desde que se sale al puente
                      hasta antes de entrar a Ciudad Porcelana son exactamente
                      389 pasos lo que se recorre al cruzar el puente. Es
                      bastante cómodo pues solo hay que pulsar un botón y cuando
                      llegas al limite pulsar la otra dirección para repetir el
                      proceso. También es muy útil entrar en el Metro Batalla y
                      colocar dos objetos pesados, uno en el botón de dirección
                      y otro en el botón B y así darás vueltas infinitas.
                    </li>

                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon X y Pokémon Y
                      </a>{" "}
                      ve en bicicleta a lo largo de la ruta 7, simplemente debes
                      ponerte en medio del camino e ir de izquierda a derecha
                      pasando por Pueblo Vánitas hasta chocarte con la pared de
                      la ruta 5, o ve al centro de Ciudad Luminalia y colócate
                      en el medio del camino y gira hacia la derecha o izquierda
                      y darás vueltas infinitas. Para saber si el encargado de
                      la guardería tiene un huevo para ti, solo tienes que
                      fijarte hacia dónde está mirando, si mira hacia la
                      guardería aún no tiene un huevo para ti, y si está mirando
                      hacia el sendero, el encargado estará listo para darte el
                      huevo.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Rubí Omega y Pokémon Zafiro Alfa
                      </a>
                      , desde el Centro Pokémon del Resort Batalla, ve hacia la
                      izquierda hasta que te choques con el mar en una pequeña
                      esquina, ve a la parte mas baja y mas a la izquierda de
                      esa esquina, y, montado en la bici, mantén el botón
                      deslizante o la cruz de control hacia arriba y estará
                      dando vueltas a toda la isla sin parar (en total son 257
                      pasos), este truco también vale para aumentar la amistad
                      del{" "}
                      <a className="links" href="/pokemons">
                        Pokémon
                      </a>{" "}
                      que lleves en primer lugar.
                    </li>
                    <li>
                      En{" "}
                      <a className="links" href="/wiki/juegos-pokemon">
                        Pokémon Sol y Pokémon Luna
                      </a>{" "}
                      al salir del Rancho Ohana (que vendría siendo como un
                      sustituto de la guardería) se puede observar un pequeño
                      espacio frente al mismo rancho al que se puede acceder. El
                      truco consiste en entrar ahí, montarse en Carga Tauros y
                      empezar a dar vueltas al Joystick de la consola mientras
                      corres con el botón B. Los huevos se abren rápidamente con
                      este método.
                    </li>
                    <br />
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeducatorWikiCrianza;
