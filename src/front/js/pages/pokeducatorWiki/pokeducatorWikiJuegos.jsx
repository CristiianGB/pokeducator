import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiJuegosStyles.css";
import loading from "../../../assets/img/loading.gif";
import { Context } from "../../store/appContext.jsx";

const PokeducatorWikiJuegos = () => {
  const { store, actions } = useContext(Context);
  const [num, setNum] = useState(0);
  const [load, setLoad] = useState(true);
  let time = [2000, 3000, 4000, 5000];
  let randomtime = Math.floor(Math.random() * time.length);

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  
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
            src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-5.jpg"
            alt="portada Pokeducator Juegos"
          />
        </div>
      </div>
            <div className="row">
              <h1 id="videojuegos_de_pokemon">Videojuegos de Pokémon</h1>
              <hr />
            </div>
            <div className="descripcion videojuegos">
              <p>
                Los videojuegos de Pokémon constituyen la parte fundamental de
                la franquicia Pokémon y comprenden todos los videojuegos
                lanzados al mercado desde sus inicios en 1996. Pokémon nació
                originalmente con la distribución de Pokémon Verde y Pokémon
                Rojo en Japón, el primer videojuego de la franquicia. A partir
                de los videojuegos surgieron las otras grandes ramas de Pokémon:
                anime, manga y Trading Card Game. Todavía hoy, son los
                videojuegos los que marcan la pauta dominante, de manera que las
                anteriores derivan su contenido de los videojuegos.
              </p>              
              <img className="rounded float-end img-fluid p-2" style={{width: "500px"}}  src="https://as01.epimg.net/meristation/imagenes/2020/05/16/videos/1589611376_053940_1589611452_noticia_normal.jpg" alt="Video Juegos Pokémon" />
              <br />
              <p>
                La clasificación de videojuegos de Pokémon más importante es
                aquella que distingue entre videojuegos principales y spin-offs
                o videojuegos secundarios. Pertenecen a la primera categoría los
                videojuegos en los que el jugador es un entrenador Pokémon, que
                se embarca en una aventura Pokémon que consiste en reunir una
                serie de medallas con el objetivo último de participar en la
                Liga Pokémon y atrapar a todos los Pokémon. Se consideran
                "principales" porque siguen el modelo establecido en Pokémon
                Verde y Pokémon Rojo, son los más abundantes y variados en
                contenido, y son los que inauguran cada nueva generación de la
                franquicia. Estos videojuegos son la esencia de Pokémon y
                también los más vendidos.
              </p>
              <br />
              <p>
                Nosotros en Pokeducator nos centraremos en estos. Ya que son los
                únicos que contaban con la mecánica de crianza mediante La
                Guardería Pokémon.
              </p>
              <br />
              <p>
                {" "}
                Aunque por otro lado, los videojuegos secundarios son un
                conjunto muy amplio y diverso de entretenimiento que no se basan
                en la mecánica anterior. En su lugar, se centran en otros
                aspectos del mundo Pokémon o son, simplemente, videojuegos
                menores basados en la resolución de puzzles, la participación en
                carreras, combates Pokémon, etc. Así pues, hay videojuegos
                secundarios de gran nivel, que ofrecen una experiencia de juego
                cercana a los principales en cuanto a complejidad, como la saga
                Pokémon Ranger, donde el jugador es un ranger o guardabosques
                encargado de la defensa de los Pokémon, o la saga Pokémon Mundo
                Misterioso, donde los personajes son los propios Pokémon. Frente
                a estos, hay videojuegos de mecánica más sencilla, como la serie
                Pokémon Rumble, que consiste en luchar contra olas de Pokémon, o
                la serie de combates Pokémon, cuyo gran atractivo es participar
                en combates con mejores gráficos que en los videojuegos
                principales u otros videojuegos dedicados simplemente al
                almacenamiento Pokémon. También hay multitud de spin-offs
                independientes que no forman parte de una serie y cuyos
                objetivos son muy variados.
              </p>
              <br />
            </div>
            <div className="col-sm-6 m-5 ms-3">
        <nav id="toc" data-toggle="toc" className="sticky-top">
          <ul className="nav navbar-nav">
            <li>
              <a onClick={()=>setNum(1)} className={num==1?"nav-link active":"nav-link"} style={aStyles} href="#videojuegos_de_pokemon">
                Videojuegos de Pokémon
              </a>
            </li>
            <li>
              <a onClick={()=>setNum(2)} className={num==2?"nav-link active":"nav-link"} style={aStyles} href="#juegos_principales">
                Juegos Principales
              </a>
            </li>
            <li>
              <a id="desplegable" onClick={()=>setNum(3)} className={num==3?"nav-link active":"nav-link"} style={aStyles} href="#desplegable">
                Generaciones
              </a>
              <ul className="nav navbar-nav">
                <li>
                  <a className="nav-link" style={subStyles} href="#primera_generacion">Primera generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#segunda_generacion">Segunda generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#tercera_generacion">Tercera generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#cuarta_generacion">Cuarta generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#quinta_generacion">Quinta generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#sexta_generacion">Sexta generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#septima_generacion">Séptima generación</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#octava_generacion">Octava generación</a>
                </li>
                
              </ul>
            </li>
            <li>
              <a onClick={()=>setNum(4)} className={num==4?"nav-link active":"nav-link"} style={aStyles} href="#otras_clasificaciones">
                Otras Clasificaciones
              </a>
            </li>
          </ul>
        </nav>
      </div>
            <div className="row">
              <h1 id="juegos_principales">Juegos Principales</h1>
              <hr />
            </div>
            <div className="juegos descripcion">
              <p>
                Son videojuegos principales aquellos en los que el jugador es un
                entrenador Pokémon cuyo objetivo es conseguir las medallas de la
                región, para enfrentarse finalmente al Alto Mando de la Liga
                Pokémon. Adicionalmente, al principio de su aventura, el jugador
                también recibe un Pokédex, con el objetivo de identificar y
                capturar las especies que habitan en la región. Todos estos
                videojuegos conforman la serie principal de la franquicia
                Pokémon.
              </p>
              <br />
              <p>
                Más allá de la mecánica común de estos videojuegos (que se
                enriquece con las sucesivas entregas) y el esquema narrativo
                similar que presentan, es posible observar un patrón comercial
                en su distribución. Así, cada generación es siempre inaugurada
                por una pareja de videojuegos que son esencialmente idénticos, y
                que se diferencian en la obtención de algunos Pokémon exclusivos
                de cada videojuego, la existencia de diferentes lugares, entre
                otras variaciones menores. La segunda fase no sigue un orden
                fijo: a veces consiste en el lanzamiento de un tercer
                videojuego, una "expansión" de la pareja anterior que parte de
                la misma base pero añade numerosas novedades, y otras veces
                supone la venta de una segunda pareja de videojuegos que
                constituye un remake de otros videojuegos anteriores. Los
                remakes, adaptaciones de videojuegos pasados a las nuevas
                consolas, comienzan con la tercera generación. La única
                generación que no se adscribe a este sistema es la quinta, cuya
                pareja de videojuegos no fue culminada por una expansión, sino
                por una pareja de secuelas, es decir, una segunda parte en el
                sentido más habitual. Los nombres de los videojuegos recogen de
                manera implícita este patrón: las parejas y su expansión
                utilizan elementos relacionados (colores, metales, joyas),
                mientras que los remakes añaden un término al nombre original
                (de Oro y Plata, Oro HeartGold y Plata SoulSilver).
              </p>
              <br />
              <div className="row">
                <h3 id="primera_generacion">Primera generación</h3>
                <br />
              </div>
              <div className="primera_generacion descripcion">
                <p>
                  Esta generación también suele ser llamada generación cromática
                  o generación color, por el nombre de cada videojuego (rojo,
                  azul y Amarillo), y de forma menos común es denominada era
                  monocromática, porque los videojuegos fueron hechos
                  específicamente para la videoconsola Game Boy, en blanco y
                  negro.
                </p>
                <br />
                <p>Los videojuegos que conforman esta generación son:</p>
                <br />
              </div>

              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Rojo_y_Pok%C3%A9mon_Azul"
                            title="Pokémon Rojo y Pokémon Azul"
                          >
                            Pokémon Rojo y Pokémon Azul
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/d/db/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg/"
                        title="Pokémon Rojo"
                      >
                        <img
                          alt="Pokémon Rojo"
                          src="https://static.wikia.nocookie.net/espokemon/images/d/db/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          data-image-name="Carátula de Pokémon Rojo.jpg"
                          data-image-key="Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg"
                          data-src="https://static.wikia.nocookie.net/espokemon/images/d/db/Car%C3%A1tula_de_Pok%C3%A9mon_Rojo.jpg/"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg/"
                        title="Pokémon Azul"
                      >
                        <img
                          alt="Pokémon Azul"
                          src="https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          data-image-name="Carátula de Pokémon Azul.jpg"
                          data-image-key="Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg"
                          data-src="https://static.wikia.nocookie.net/espokemon/images/9/9d/Car%C3%A1tula_de_Pok%C3%A9mon_Azul.jpg/"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Red and Pokémon Blue</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 1998 (Norteamérica)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy"
                        title="Game Boy"
                      >
                        Game Boy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Amarillo"
                            title="Pokémon Amarillo"
                          >
                            Pokémon Amarillo
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/9/95/Pok%C3%A9mon_Amarillo.png/"
                        title="Pokémon Rojo"
                      >
                        <img
                          alt="Pokémon Amarillo"
                          src="https://static.wikia.nocookie.net/espokemon/images/9/95/Pok%C3%A9mon_Amarillo.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          data-image-name="Carátula de Pokémon Amarillo.jpg"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Yellow</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 1998 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy"
                        title="Game Boy"
                      >
                        Game Boy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="segunda_generacion">Segunda generación</h3>
              </div>

              <div className="segunda_generacion">
                <p>
                  La segunda generación también se conoce como generación
                  metálica, por el nombre de cada videojuego, que recibía la
                  coletilla de un metal (oro, plata y cristal). De forma menos
                  común es denominada era color o era de Game Boy Color, porque
                  los videojuegos fueron desarrollados para la videoconsola Game
                  Boy Color.
                </p>
                <br />
                <p>Los videojuegos que conforman esta generación son:</p>
                <br />
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://www.pokemon.com/es/videojuegos-pokemon/pokemon-edicion-oro-y-pokemon-edicion-plata/"
                            title="Pokémon Oro y Pokémon Plata"
                          >
                            Pokémon Oro y Pokémon Plata
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/b/b8/Car%C3%A1tula_de_Pok%C3%A9mon_Oro_EN.jpg/"
                        title="Pokémon Oro"
                      >
                        <img
                          alt="Pokémon Oro"
                          src="https://static.wikia.nocookie.net/espokemon/images/b/b8/Car%C3%A1tula_de_Pok%C3%A9mon_Oro_EN.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/a9/Car%C3%A1tula_de_Pok%C3%A9mon_Plata_EN.jpg/"
                        title="Pokémon Plata"
                      >
                        <img
                          alt="Pokémon Plata"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a9/Car%C3%A1tula_de_Pok%C3%A9mon_Plata_EN.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Gold and Pokémon Silver</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 1999 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy_Color"
                        title="Game Boy Color"
                      >
                        Game Boy Color
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://www.pokemon.com/es/videojuegos-pokemon/pokemon-edicion-oro-y-pokemon-edicion-plata/"
                            title="Pokémon Cristal"
                          >
                            Pokémon Cristal
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/e/e5/Pokemon_cristal_amerique.jpg/"
                        title="Pokémon Cristal"
                      >
                        <img
                          alt="Pokémon Cristal"
                          src="https://static.wikia.nocookie.net/espokemon/images/e/e5/Pokemon_cristal_amerique.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Crystal</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2000 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy_Color"
                        title="Game Boy Color"
                      >
                        Game Boy Color
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="tercera_generacion">Tercera generación</h3>
                <br />
              </div>

              <div className="tercera_generacion descripcion">
                <p>
                  Esta generación también suele ser llamada generación Advance,
                  por su relación con la consola Game Boy Advance.
                </p>
                <br />
                <p>Los videojuegos que conforman esta generación son:</p>
                <br />
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Rub%C3%AD_y_Pok%C3%A9mon_Zafiro"
                            title="Pokémon Rubí y Pokémon Zafiro"
                          >
                            Pokémon Rubí y Pokémon Zafiro
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links imagen"
                        href="https://static.wikia.nocookie.net/espokemon/images/0/03/Car%C3%A1tula_de_Rub%C3%AD.png/"
                        title="Pokémon Rubí"
                      >
                        <img
                          alt="Pokémon Rubí"
                          src="https://static.wikia.nocookie.net/espokemon/images/0/03/Car%C3%A1tula_de_Rub%C3%AD.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links imagen"
                        href="https://static.wikia.nocookie.net/espokemon/images/d/d3/Car%C3%A1tula_de_Zafiro.png/"
                        title="Pokémon Zafiro"
                      >
                        <img
                          alt="Pokémon Zafiro"
                          src="https://static.wikia.nocookie.net/espokemon/images/d/d3/Car%C3%A1tula_de_Zafiro.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Ruby and Pokémon Sapphire</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2002 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy_Advance"
                        title="Game Boy Advance"
                      >
                        Game Boy Advance
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Esmeralda"
                            title="Pokémon Esmeralda"
                          >
                            Pokémon Esmeralda
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/0/02/Caratula_Esmeralda.jpg/"
                        title="Pokémon Esmeralda"
                      >
                        <img
                          alt="Pokémon Esmeralda"
                          src="https://static.wikia.nocookie.net/espokemon/images/0/02/Caratula_Esmeralda.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Emerald</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2004 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy_Advance"
                        title="Game Boy Advance"
                      >
                        Game Boy Advance
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Rojo_Fuego_y_Pok%C3%A9mon_Verde_Hoja"
                            title="Pokémon Rojo Fuego y Pokémon Verde Hoja"
                          >
                            Pokémon Rojo Fuego y Pokémon Verde Hoja
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/ac/Car%C3%A1tula_de_Rojo_Fuego.png/"
                        title="Pokémon Rojo Fuego"
                      >
                        <img
                          alt="Pokémon Rojo Fuego"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/ac/Car%C3%A1tula_de_Rojo_Fuego.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/3/31/Car%C3%A1tula_de_Verde_Hoja.png/"
                        title="Pokémon Verde Hoja"
                      >
                        <img
                          alt="Pokémon Verde Hoja"
                          src="https://static.wikia.nocookie.net/espokemon/images/3/31/Car%C3%A1tula_de_Verde_Hoja.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon FireRed and Pokémon LeafGreen</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2004 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Game_Boy_Advance"
                        title="Game Boy Advance"
                      > 
                        Game Boy Advance
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="cuarta_generacion">Cuarta generación</h3>
                <br />
              </div>
              <div className="cuarta_generacion descripcion">
                {" "}
                <p>Los videojuegos que conforman esta generación son:</p>
                <br />
              </div>

              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Diamante_y_Pok%C3%A9mon_Perla"
                            title="Pokémon Diamante y Pokémon Perla"
                          >
                            Pokémon Diamante y Pokémon Perla
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links imagen"
                        href="https://static.wikia.nocookie.net/espokemon/images/9/94/Pok%C3%A9mon_Diamante.png/"
                        title="Pokémon Diamante"
                      >
                        <img
                          alt="Pokémon Diamante"
                          src="https://static.wikia.nocookie.net/espokemon/images/9/94/Pok%C3%A9mon_Diamante.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links imagen"
                        href="https://static.wikia.nocookie.net/espokemon/images/6/64/Pok%C3%A9mon_Perla.png/"
                        title="Pokémon Perla"
                      >
                        <img
                          alt="Pokémon Perla"
                          src="https://static.wikia.nocookie.net/espokemon/images/6/64/Pok%C3%A9mon_Perla.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Diamond and Pokémon Pearl</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2006 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_DS"
                        title="Nintendo DS"
                      >
                        Nintendo DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Platino"
                            title="Pokémon Platino"
                          >
                            Pokémon Platino
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/f/f4/Car%C3%A1tula_Pok%C3%A9mon_Platino_%28ESP%29.png/"
                        title="Pokémon Platino"
                      >
                        <img
                          alt="Pokémon Platino"
                          src="https://static.wikia.nocookie.net/espokemon/images/f/f4/Car%C3%A1tula_Pok%C3%A9mon_Platino_%28ESP%29.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Platinum</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2008 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_DS"
                        title="Nintendo DS"
                      >
                        Nintendo DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Oro_HeartGold_y_Pok%C3%A9mon_Plata_SoulSilver"
                            title="Pokémon Oro HeartGold y Pokémon Plata SoulSilver"
                          >
                            Pokémon Oro HeartGold y Pokémon Plata SoulSilver
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/a7/Pok%C3%A9mon_Edici%C3%B3n_Oro_HeartGold_car%C3%A1tula_ES.jpg/"
                        title="Pokémon Oro HeartGold"
                      >
                        <img
                          alt="Pokémon Oro HeartGold"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a7/Pok%C3%A9mon_Edici%C3%B3n_Oro_HeartGold_car%C3%A1tula_ES.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/5/5c/Pok%C3%A9mon_Edici%C3%B3n_Plata_SoulSilver_car%C3%A1tula_ES.jpg/"
                        title="Pokémon Plata SoulSilver"
                      >
                        <img
                          alt="Pokémon Plata SoulSilver"
                          src="https://static.wikia.nocookie.net/espokemon/images/5/5c/Pok%C3%A9mon_Edici%C3%B3n_Plata_SoulSilver_car%C3%A1tula_ES.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon HeartGold and Pokémon SoulSilver</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2009 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_DS"
                        title="Nintendo DS"
                      >
                        Nintendo DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="quinta_generacion">Quinta generación</h3>
                <br />
              </div>
              <div className="quinta_generacion descripcion">
                <p>Los videojuegos que conforman esta generación son:</p>
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Negro_y_Pok%C3%A9mon_Blanco"
                            title="Pokémon Negro y Pokémon Blanco"
                          >
                            Pokémon Negro y Pokémon Blanco
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/ae/Portblacksp.jpg/"
                        title="Pokémon Negro"
                      >
                        <img
                          alt="Pokémon Negro"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/ae/Portblacksp.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/9/95/Pkmnwhitesp.jpg/"
                        title="Pokémon Blanco"
                      >
                        <img
                          alt="Pokémon Blanco"
                          src="https://static.wikia.nocookie.net/espokemon/images/9/95/Pkmnwhitesp.jpg/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Black and Pokémon White</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2010 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_DS"
                        title="Nintendo DS"
                      >
                        Nintendo DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Negro_2_y_Pok%C3%A9mon_Blanco_2"
                            title="Pokémon Negro 2 y Pokémon Blanco 2"
                          >
                            Pokémon Negro 2 y Pokémon Blanco 2
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/a4/Box_Pok%C3%A9mon_Negro_2.png/"
                        title="Pokémon Negro 2"
                      >
                        <img
                          alt="Pokémon Negro 2"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a4/Box_Pok%C3%A9mon_Negro_2.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/1/17/Box_Pok%C3%A9mon_Blanco_2.png/"
                        title="Pokémon Blanco 2"
                      >
                        <img
                          alt="Pokémon Blanco 2"
                          src="https://static.wikia.nocookie.net/espokemon/images/1/17/Box_Pok%C3%A9mon_Blanco_2.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Black 2 and Pokémon White 2</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2012 (Japón)
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_DS"
                        title="Nintendo DS"
                      >
                        Nintendo DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="sexta_generacion">Sexta generación</h3>
              </div>
              <div className="sexta_generacion descripcion">
                <p>Los videojuegos que conforman esta generación son:</p><br />
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_X_y_Pok%C3%A9mon_Y"
                            title="Pokémon X y Pokémon Y"
                          >
                            Pokémon X y Pokémon Y
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/8/81/Pok%C3%A9mon_X_Car%C3%A1tula.png/"
                        title="Pokémon X"
                      >
                        <img
                          alt="Pokémon X"
                          src="https://static.wikia.nocookie.net/espokemon/images/8/81/Pok%C3%A9mon_X_Car%C3%A1tula.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/6/6f/Pok%C3%A9mon_Y_Car%C3%A1tula.png/"
                        title="Pokémon Y"
                      >
                        <img
                          alt="Pokémon Y"
                          src="https://static.wikia.nocookie.net/espokemon/images/6/6f/Pok%C3%A9mon_Y_Car%C3%A1tula.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon X and Pokémon Y</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2013
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_3DS"
                        title="Nintendo 3DS"
                      >
                        Nintendo 3DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Rub%C3%AD_Omega_y_Pok%C3%A9mon_Zafiro_Alfa"
                            title="Pokémon Rubí Omega y Pokémon Zafiro Alfa"
                          >
                            Pokémon Rubí Omega y Pokémon Zafiro Alfa
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/5/5d/Car%C3%A1tula_Pok%C3%A9mon_Rub%C3%AD_Omega.png/"
                        title="Pokémon Rubí Omega"
                      >
                        <img
                          alt="Pokémon Rubí Omega"
                          src="https://static.wikia.nocookie.net/espokemon/images/5/5d/Car%C3%A1tula_Pok%C3%A9mon_Rub%C3%AD_Omega.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/a/a6/Car%C3%A1tula_Pok%C3%A9mon_Zafiro_Alfa.png/"
                        title="Pokémon Zafiro Alfa"
                      >
                        <img
                          alt="Pokémon Zafiro Alfa"
                          src="https://static.wikia.nocookie.net/espokemon/images/a/a6/Car%C3%A1tula_Pok%C3%A9mon_Zafiro_Alfa.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Omega Ruby and Pokémon Alpha Sapphire</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2014
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_3DS"
                        title="Nintendo 3DS"
                      >
                        Nintendo 3DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="septima_generacion">Séptima generación</h3>
              </div>
              <div className="septima_generacion descripcion">
                <p>Los videojuegos que conforman esta generación son:</p><br />
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Sol_y_Pok%C3%A9mon_Luna"
                            title="Pokémon Sol y Pokémon Luna"
                          >
                            Pokémon Sol y Pokémon Luna
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/9/9b/Car%C3%A1tula_Pok%C3%A9mon_Sol.png/"
                        title="Pokémon Sol"
                      >
                        <img
                          alt="Pokémon Sol"
                          src="https://static.wikia.nocookie.net/espokemon/images/9/9b/Car%C3%A1tula_Pok%C3%A9mon_Sol.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/7/73/Car%C3%A1tula_Pok%C3%A9mon_Luna.png/"
                        title="Pokémon Luna"
                      >
                        <img
                          alt="Pokémon Luna"
                          src="https://static.wikia.nocookie.net/espokemon/images/7/73/Car%C3%A1tula_Pok%C3%A9mon_Luna.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Sun and Pokémon Moon</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2016
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_3DS"
                        title="Nintendo 3DS"
                      >
                        Nintendo 3DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Ultrasol_y_Pok%C3%A9mon_Ultraluna"
                            title="Pokémon Ultrasol y Pokémon Ultraluna"
                          >
                            Pokémon Ultrasol y Pokémon Ultraluna
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/7/7f/Artwork_Pok%C3%A9mon_Ultrasol_y_Pok%C3%A9mon_Ultraluna.png/"
                        title="Pokémon Ultrasol y Ultraluna"
                      >
                        <img
                          alt="Pokémon Ultrasol y Ultraluna"
                          src="https://static.wikia.nocookie.net/espokemon/images/7/7f/Artwork_Pok%C3%A9mon_Ultrasol_y_Pok%C3%A9mon_Ultraluna.png/"
                          decoding="async"
                          width="240"
                          height="150"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Ultra Sun and Pokémon Ultra Moon</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2017
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_3DS"
                        title="Nintendo 3DS"
                      >
                        Nintendo 3DS
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon:_Let%27s_Go,_Pikachu!_y_Pok%C3%A9mon:_Let%27s_Go,_Eevee!"
                            title="Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!"
                          >
                            Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/2/20/Car%C3%A1tula_Pok%C3%A9mon_Pikachu.png/"
                        title="Pokémon: Let's Go, Pikachu!"
                      >
                        <img
                          alt="Pokémon: Let's Go, Pikachu!"
                          src="https://static.wikia.nocookie.net/espokemon/images/2/20/Car%C3%A1tula_Pok%C3%A9mon_Pikachu.png/"
                          decoding="async"
                          width="120"
                          height="180"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/7/73/Car%C3%A1tula_Pok%C3%A9mon_Eevee.png/"
                        title="Pokémon: Let's Go, Eevee!"
                      >
                        <img
                          alt="Pokémon: Let's Go, Eevee!"
                          src="https://static.wikia.nocookie.net/espokemon/images/7/73/Car%C3%A1tula_Pok%C3%A9mon_Eevee.png/"
                          decoding="async"
                          width="120"
                          height="180"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon: Let's Go, Pikachu! y Pokémon: Let's Go, Eevee!</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2018
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_Switch"
                        title="Nintendo Switch"
                      >
                        Nintendo Switch
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="octava_generacion">Octava generación</h3>
              </div>
              <div className="octava_generacion descripcion">
                <p>Los videojuegos que conforman esta generación son:</p><br />
              </div>
              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Espada_y_Pok%C3%A9mon_Escudo"
                            title="Pokémon Espada y Pokémon Escudo"
                          >
                            Pokémon Espada y Pokémon Escudo
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/8/88/Car%C3%A1tula_de_Pok%C3%A9mon_Espada.png/"
                        title="Pokémon Espada"
                      >
                        <img
                          alt="Pokémon Espada"
                          src="https://static.wikia.nocookie.net/espokemon/images/8/88/Car%C3%A1tula_de_Pok%C3%A9mon_Espada.png/"
                          decoding="async"
                          width="120"
                          height="180"
                          className=" lazyloaded"
                        />
                      </a>
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/b/ba/Car%C3%A1tula_de_Pok%C3%A9mon_Escudo.png/"
                        title="Pokémon Escudo"
                      >
                        <img
                          alt="Pokémon Escudo"
                          src="https://static.wikia.nocookie.net/espokemon/images/b/ba/Car%C3%A1tula_de_Pok%C3%A9mon_Escudo.png/"
                          decoding="async"
                          width="120"
                          height="180"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Sword and Pokémon Shield</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2019
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_Switch"
                        title="Nintendo Switch"
                      >
                        Nintendo Switch
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />



              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Espada_y_Pok%C3%A9mon_Escudo:_pase_de_expansi%C3%B3n"
                            title="Pokémon Espada y Pokémon Escudo: pase de expansión"
                          >
                            Pokémon Espada y Pokémon Escudo: pase de expansión
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/3/38/Pok%C3%A9mon_Espada_y_Escudo_-_logo_pase_de_expansi%C3%B3n.png/"
                        title="Pokémon Espada y Pokémon Escudo: pase de expansión"
                      >
                        <img
                          alt="Pokémon Espada y Pokémon Escudo: pase de expansión"
                          src="https://static.wikia.nocookie.net/espokemon/images/3/38/Pok%C3%A9mon_Espada_y_Escudo_-_logo_pase_de_expansi%C3%B3n.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon Sword and Pokémon Shield</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2020
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                  <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_Switch"
                        title="Nintendo Switch"
                      >
                        Nintendo Switch
                      </a>
                    </td>
                    
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />



              <table className="tabla">
                <tbody>
                  <tr>
                    <td colSpan={2} className="fondoCabecera">
                      <div className="enlacesblancos">
                        <b>
                          <a
                            className="links"
                            href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_UNITE"
                            title="Pokémon UNITE"
                          >
                            Pokémon UNITE
                          </a>
                        </b>
                      </div>{" "}
                      <hr className="hrTabla" />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={6} className="fotosTabla">
                      <a
                        className="links image"
                        href="https://static.wikia.nocookie.net/espokemon/images/0/0d/Pok%C3%A9mon_UNITE_logo.png/"
                        title="Pokémon UNITE"
                      >
                        <img
                          alt="Pokémon UNITE"
                          src="https://static.wikia.nocookie.net/espokemon/images/0/0d/Pok%C3%A9mon_UNITE_logo.png/"
                          decoding="async"
                          width="120"
                          height="119"
                          className=" lazyloaded"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="info">
                      <i>Pokémon UNITE</i>
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Año de lanzamiento:</b> 2021
                    </td>
                  </tr>
                  <tr>
                    <td className="separadorInfo"></td>
                  </tr>
                  <tr>
                    <td className="info">
                      <b>Plataforma:</b>{" "}
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Nintendo_Switch"
                        title="Nintendo Switch"
                      >
                        Nintendo Switch
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <hr className="hrTabla" />
                      <div className="separador"></div>
                    </th>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
            <div className="row">
              <h1 id="otras_clasificaciones">Otras clasificaciones</h1><hr />
            </div>
            <div className="otras_clasificaciones descripcion">
              <p>Los videojuegos de Pokémon también pueden clasificarse según su fecha de lanzamiento, su plataforma o la generación a la que pertenecen. Para ello consulta los siguientes artículos:</p><br />
              <ul>
                <li><a className="links" href="https://pokemon.fandom.com/es/wiki/Lista_de_videojuegos_por_fecha_de_lanzamiento">Lista de videojuegos por fecha de lanzamiento</a></li>
                <li><a className="links" href="https://pokemon.fandom.com/es/wiki/Lista_de_videojuegos_por_plataforma">Lista de videojuegos por plataforma</a></li>
                <li><a className="links" href="https://pokemon.fandom.com/es/wiki/Lista_de_videojuegos_por_generaci%C3%B3n">Lista de videojuegos por generación</a></li>
              </ul>
            </div>
            <br />
          </div>
        </>
      )}
    </>
  );
};
export default PokeducatorWikiJuegos;

