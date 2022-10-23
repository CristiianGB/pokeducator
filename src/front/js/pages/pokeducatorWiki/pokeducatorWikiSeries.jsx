import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiSeriesStyles.css";
import loading from "../../../assets/img/loading.gif";
import { Context } from "../../store/appContext.jsx";

const PokeducatorWikiSeries = () => {
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
                  src="http://1.bp.blogspot.com/-08R82Wv6eZ0/Ufh-NfCvBUI/AAAAAAAABQA/oOGWOuNOFlQ/s1600/F82.+Pokemon+(1).jpg"
                  alt="portada Pokeducator Guardería"
                />
              </div>
            </div>
            <div className="row">
              <h1 id="anime">Anime</h1>
              <hr />
            </div>
            <div className="anime descripcion">
              <img
                className="mx-2 mb-2 pokeimg"
                src="https://static.wikia.nocookie.net/espokemon/images/6/61/Logo_de_Pok%C3%A9mon_%28EN%29.png/"
                alt="logo pokemon"
                title="Logo de la serie Pokémon en Occidente"
              />
              <p>
                Pokémon (ポケットモンスター Pocket Monsters en japonés) es un
                anime basado en su mayoría en los videojuegos de la franquicia
                Pokémon. Fue creado en Japón por Satoshi Tajiri, Junichi Masuda
                y Ken Sugimori, siendo producida por los estudios OLM
                Incorporated y licenciada por The Pokémon Company desde 2006. El
                anime comenzó su recorrido por la televisión japonesa en TV
                Tokyo desde 1997 y todavía hoy sigue en emisión, contando con
                más de 1.000 episodios.
              </p>
              <br />
              <p>
                Se habló del anime por primera vez en 1997, cuando se les pidió
                a Satoshi y al resto de los creadores de la franquicia en Game
                Freak una licencia para sacar una serie animada de Pokémon.
                Satoshi lo permitió, pero forzó a los guionistas y animadores a
                jugar hasta el final a las primeras ediciones de la Game Boy,
                para que pudieran apreciar de qué se trataba Pokémon realmente.
                Luego de esto, el estudio hizo una historia basada en cosas que
                suceden en el juego. Este estudio es OLM Incorporated (Oriental
                Light and Magic), quienes se han encargado del anime en su
                totalidad.
              </p>
              <br />
              <img
                className="me-4 mb-4 float-start rounded"
                src="https://static.wikia.nocookie.net/espokemon/images/c/ce/EP256_%C2%A1Ash_ha_ganado_la_medalla_Drag%C3%B3n%21.png/"
                alt="Ash ganando medalla"
                title="Ash gana la medalla dragón de Johto"
              />
              <p>
                Adicionalmente, desde 1998 se estrena en verano todos los años
                una película basada en el anime. La trama de las primeras 19
                películas guarda relación con la serie, pero no como si se trata
                de un episodio más, por lo que son independientes. Pero desde la
                película 20 en el año del vigésimo aniversario, se cuenta una
                historia alternativa muy diferente de la serie a la que
                pertenece. Hasta la fecha se han producido 21 películas.
              </p>
              <br />
              <p>
                El doblaje de la serie es distinto en Hispanoamérica y España,
                al igual que la distribución, motivo por el que los episodios a
                veces se estrenan antes en un lugar o en otro. Las diferentes
                traducciones originan, en ocasiones, que un personaje, un lugar,
                un objeto, etc., sea conocido con dos nombres en español. En
                Hispanoamérica, donde los videojuegos se distribuyen en inglés,
                el anime suele recurrir a ellos, mientras que en España se
                utilizan los nombres traducidos de los videojuegos. Así, por
                ejemplo, el personaje que en España se conoce como Aura, en
                Hispanoamérica se llama May (en inglés). No obstante, existen
                excepciones, como Equipo Rocket (en Hispanoamérica) y Team
                Rocket (en España). En WikiDex, siempre que existen dos nombres,
                se recogen ambos, primero el inglés y después el español:
                May/Aura, Team/Equipo Rocket.
              </p>
              <br />
            </div>

            <div className="col-sm-5 m-5 ms-3">
              <nav id="toc" data-toggle="toc" className="sticky-top">
                <ul className="nav navbar-nav">
                  <li>
                    <a
                      onClick={() => setNum(1)}
                      className={num == 1 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#anime"
                    >
                      Anime
                    </a>
                  </li>
                  <li>
                    <a
                      id="desplegable"
                      onClick={() => setNum(2)}
                      className={num == 2 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#desplegable"
                    >
                      Argumento
                    </a>
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#historia"
                        >
                          Historia.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      id="desplegable2"
                      onClick={() => setNum(3)}
                      className={num == 3 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#desplegable2"
                    >
                      Series de televisión
                    </a>
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#serie_original"
                        >
                          Serie original.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#advanced"
                        >
                          Serie Advanced Generation.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#series_diamante_y_perla"
                        >
                          Serie Diamante y Perla.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#serie_negro_y_blanco"
                        >
                          Serie Negro y Blanco.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#serie_xy"
                        >
                          Serie XY.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#serie_sol_y_luna"
                        >
                          Serie Sol y Luna.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#serie_espada_y_escudo"
                        >
                          Serie Espada y Escudo.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(4)}
                      className={num == 4 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#episodios_especiales"
                    >
                      Episodios especiales
                    </a>
                  </li>
                  <li>
                    <a
                      id="desplegable3"
                      onClick={() => setNum(5)}
                      className={num == 5 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#desplegable3"
                    >
                      Películas
                    </a>
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_serie_original"
                        >
                          Películas - Serie original.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_advanced_generation"
                        >
                          Películas - Serie Advanced Generation.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_diamante_y_perla"
                        >
                          Películas - Serie Diamante y Perla.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_negro_y_blanco"
                        >
                          Películas - Serie Negro y Blanco.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_xy"
                        >
                          Películas - Serie XY.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_sol_y_luna"
                        >
                          Películas - Serie Sol y Luna.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#pelicula_espada_y_escudo"
                        >
                          Película - Serie Espada y Escudo.
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="row">
              <h1 id="argumento">Argumento</h1>
              <hr />
            </div>
            <div className="argumento descripcion">
              <figure width="200px" className="figure float-end ms-3 mb-3">
                <img
                  src="https://static.wikia.nocookie.net/espokemon/images/e/e9/EP001_Ash_y_Pikachu.jpg/"
                  className="figure-img img-fluid rounded"
                  width="250px"
                  alt="Ash conoce a pikachu"
                />
                <figcaption className="figure-caption text-center">
                  Ash Ketchum y su Pikachu en <br /> el primer episodio.
                </figcaption>
              </figure>
              <p>
                El anime relata las aventuras de Ash Ketchum, un entrenador
                Pokémon que junto con su Pokémon inicial Pikachu, obtenido de
                manos del profesor Oak en Pueblo Paleta, recorre las regiones
                con el objetivo de reunir las medallas de gimnasio necesarias
                para participar en una Liga Pokémon (a exepción de sus aventuras
                en la región de Alola) y ganarla, y así estar un paso más cerca
                de convertirse en un maestro Pokémon. Actualmente se encuentra
                en Alola. Aparte también hay antagonistas como el Team/Equipo
                Rocket, quienes siempre van en busca de atrapar al Pikachu de
                Ash para llevárselo a su jefe.
              </p>
              <br />
              <div className="row">
                <h3 id="historia">Historia</h3>
                <br />
              </div>
              <div className="historia descripcion">
                <p>
                  La serie comienza cuando Ash cumple 10 años. Así, el joven
                  entrenador se dispone a comenzar su aventura en Pueblo Paleta,
                  su pueblo natal. Sin embargo, en su primer día de viaje Ash se
                  duerme, y cuando llega al laboratorio del Profesor Oak, este
                  ya ha entregado los tres Pokémon iniciales que tenía,
                  Bulbasaur, Charmander y Squirtle. No obstante, todavía le
                  queda uno, un Pikachu bastante desobediente, que es el Pokémon
                  con el que Ash termina comenzando su aventura. Pikachu se
                  resiste inicialmente a hacer caso al joven entrenador, a
                  regresar a su Poké Ball, y en más de una ocasión le da una
                  descarga eléctrica, pero finalmente, cuando Ash protege a
                  Pikachu de los ataques de una banda de furiosos Spearow, el
                  Pokémon comprende el amor que le tiene su entrenador. Este es
                  el inicio de una profunda amistad que permanecerá presente a
                  lo largo de toda la serie, pues Pikachu es el único Pokémon
                  que jamás se separa de Ash en todos sus viajes.
                </p>
                <br />
                <figure width="200px" className="figure float-start me-3 mb-3">
                  <img
                    src="https://static.wikia.nocookie.net/espokemon/images/f/f6/EP075_Misty%2C_Ash_y_Brock.png/"
                    className="figure-img img-fluid rounded"
                    width="250px"
                  />
                  <figcaption className="figure-caption text-center">
                    El trío protagonista durante casi toda la <br /> serie
                    original: Misty, Ash y Brock.
                  </figcaption>
                </figure>
                <p>
                  A partir de aquí, Ash empieza a conocer a numerosos personajes
                  y Pokémon a lo largo de su aventura. En la región de Kanto,
                  Ash se hace amigo de la líder de gimnasio de Ciudad Celeste,
                  Misty, y del líder de gimnasio de Ciudad Plateada, Brock, que
                  se suman al joven entrenador en su viaje (en ambos casos, su
                  responsabilidad en el gimnasio es ocupada por sus familiares).
                  Otros acompañantes indeseados son el Team/Equipo Rocket, una
                  banda de criminales formada por Jessie, James y un Meowth con
                  la habilidad única de poder comunicarse con los humanos. A lo
                  largo de toda la serie, estos personajes tratan continuamente
                  de robar el Pikachu de Ash, así como todos los Pokémon con los
                  que tienen la oportunidad de hacerse, mientras el trío
                  protagonista frustra siempre sus planes. Después de participar
                  en la Liga Pokémon de Kanto, Ash opta por visitar las Islas
                  Naranja, un pequeño archipiélago donde se enfrenta a cuatro
                  líderes de gimnasio. Durante su visita por las islas, Brock
                  decide quedarse con la profesora Ivy; el amor desmedido de
                  Brock hacia muchas de las mujeres con las que se encuentra es
                  una broma recurrente en la serie. Su lugar es ocupado por
                  Tracey Sketchit.
                </p>
                <br />
                <figure width="200px" className="figure float-end ms-3 mb-3">
                  <img
                    src="https://static.wikia.nocookie.net/espokemon/images/b/b3/EP427_Ash%2C_Aura%2C_Brock_y_Max.png/"
                    className="figure-img img-fluid rounded"
                    width="250px"
                  />
                  <figcaption className="figure-caption text-center">
                    Protagonistas de la serie Advanced
                    <br /> Generation: May/Aura, Brock, Ash y Max.
                  </figcaption>
                </figure>
                <p>
                  No obstante, al final del viaje por el Archipiélago Naranja,
                  Brock regresa con Ash y Misty, y Tracey prefiere quedarse
                  estudiando los Pokémon con el profesor Oak. Así, el trío
                  protagonista vuelve a sus orígenes y se embarca en una nueva
                  aventura por la región de Johto. Posteriormente, Ash decide
                  recorrer Hoenn. En esta ocasión, Misty se queda en Ciudad
                  Celeste, donde pasa a dedicarse a tiempo completo a sus
                  labores como líder de gimnasio. May/Aura y su hermano Max se
                  convierten en los nuevos acompañantes de Ash y Brock por la
                  región. Al Team/Equipo Rocket se suman dos nuevos rivales, el
                  Team/Equipo Aqua y el Team/Equipo Magma, cuyos planes deberán
                  ser detenidos por los protagonistas. El objetivo de May/Aura,
                  de manera parecida a Ash, es llegar a ser una gran
                  coordinadora Pokémon, para lo que se dedica a participar en
                  concursos Pokémon, donde lo más importante es la habilidad y
                  la elegancia. A lo largo de su viaje, May/Aura reúne cinco
                  listones/cintas de concurso para participar en el Gran
                  Festival de Hoenn, al mismo tiempo que Ash, con sus ocho
                  medallas, se inscribe en el Campeonato de la Liga Hoenn.
                  Después de su viaje por Hoenn, Ash regresa a Kanto para
                  combatir en la/el Batalla de la Frontera/Frente Batalla,
                  mientras que May/Aura acude al Gran Festival de Kanto.
                </p>
                <br />
                <figure width="200px" className="figure float-start me-3 mb-3">
                  <img
                    src="https://static.wikia.nocookie.net/espokemon/images/6/6f/EP606_Protagonistas.png/"
                    className="figure-img img-fluid rounded"
                    width="250px"
                  />
                  <figcaption className="figure-caption text-center">
                    Brock y Dawn/Maya son los compañeros <br /> de viaje de Ash
                    durante la serie <br /> Diamante y Perla.
                  </figcaption>
                </figure>
                <p>
                  Después de que Ash ganase al último Cerebro de la Frontera/As
                  del Frente, Brandon/Valente, él mismo le ofrece volverse
                  Cerebro de la Frontera/As del Frente pero Ash se niega y sigue
                  viajando separándose de May/Aura y de Max porque han seguido
                  caminos diferentes. Después de aquello Ash llega a la región
                  Sinnoh, y conoce a Dawn/Maya, y viaja con ella y Brock para
                  poder llegar al Torneo de la Liga de Sinnoh. Aquí Ash conoce a
                  un nuevo rival llamado Paul/Polo, un chico que no aprecia a
                  los Pokémon los utiliza principalmente como herramientas y no
                  como sus amigos, se puede notar en su actitud. Además, también
                  conoce a Barry/Benito, un entrenador el cual se hace muy buen
                  amigo de Ash al tener un combate con él, saliendo victorioso
                  Ash tras una dura batalla. En Sinnoh ha capturado seis Pokémon
                  que son Starly, Turtwig, Chimchar, Buizel, Gligar y Gible.
                  Durante un tiempo también estuvo viajando con Khoury y
                  Lyra/Lira, unos chicos de Johto que se convirtieron en sus
                  amigos.
                </p>
                <br />
                <p>
                  Ash al final obtuvo las ocho medallas requeridas para
                  participar en el Torneo de la Liga de Sinnoh, donde derrota a
                  Nando, Conway, y a su más grande rival de Sinnoh, Paul/Polo, y
                  otros entrenadores; avanzó hasta las semifinales donde se
                  enfrentó a Tobías, contra quien pierde, quedando así entre los
                  4 mejores del torneo. Terminando esta aventura, Ash decidió
                  volver a casa y tuvo que separarse de Dawn/Maya y Brock, ya
                  que Dawn/Maya quiso seguir su camino de coordinadora y Brock
                  quería estudiar para ser doctor.
                </p>
                <br />
                <figure width="200px" className="figure float-end ms-3 mb-3">
                  <img
                    src="https://static.wikia.nocookie.net/espokemon/images/9/9b/EP667_Ash%2C_Millo_e_Iris.png/"
                    className="figure-img img-fluid rounded"
                    width="250px"
                  />
                  <figcaption className="figure-caption text-center">
                    En la serie Negro y Blanco, Iris y <br /> Cilan/Millo son
                    los compañeros <br /> de viaje de Ash.
                  </figcaption>
                </figure>
                <p>
                  Después de sus aventuras por esta región, Ash pone rumbo a
                  Teselia/Unova, dejando atrás a Brock, que regresa a Ciudad
                  Plateada, y Dawn/Maya, que decide permanecer en Sinnoh. En la
                  nueva región, Ash conoce a Iris, cuyo sueño es convertirse en
                  una entrenadora de tipo dragón, y a Cilan/Millo, líder de
                  gimnasio de Ciudad Striaton/Gres y conocedor/sibarita Pokémon.
                  Juntos acompañarán a Ash en su viaje para conseguir nuevamente
                  las 8 medallas y casi al final del camino deberán hacer frente
                  a un nuevo enemigo, el Equipo Plasma. Después de participar en
                  la Liga Pokémon, el trío protagonista se prepara para competir
                  en la Copa Junior del Pokémon World Tournament y visita las
                  Islas Decolora/Decoloras, un archipiélago situado entre
                  Teselia y Kanto.
                </p>
                <br />
                <figure width="200px" className="figure float-start me-3 mb-3">
                  <img
                    src="https://static.wikia.nocookie.net/espokemon/images/5/5f/EP866_Ash_y_sus_amigos.png/"
                    className="figure-img img-fluid rounded"
                    width="250px"
                  />
                  <figcaption className="figure-caption text-center">
                    En la serie XY, Serena, Bonnie/Clem <br /> y Clemont/Lem son
                    los compañeros <br /> de viaje de Ash.
                  </figcaption>
                </figure>
                <p>
                  Al término de esta aventura, Ash regresa a Kanto, al tiempo
                  que Iris y Cilan/Millo se dirigen a Johto. El joven entrenador
                  de Pueblo Paleta elige como siguiente destino de su viaje la
                  región de Kalos, pues en su visita a las Islas
                  Decolora/Decoloras había conocido a una entrenadora del lugar.
                  Allí, Ash hace tres nuevos amigos: Clemont/Lem, líder de
                  gimnasio de Ciudad Lumiose/Luminalia, Bonnie/Clem, la hermana
                  pequeña del anterior, y Serena, una chica a la que había visto
                  en su infancia y que es artista/estrella Pokémon. También
                  consigue varios pokémon como: Fletchling, Froakie, Hawlucha,
                  Goomy y Noibat.
                </p>
                <br />
                <p>
                  En esta región Ash obtiene las 8 medallas y participa en la
                  Liga Pokémon donde obtiene el subcampeonato al perder en la
                  final contra Alain, un entrenador con un Mega Charizard X
                  junto al que posteriormente vencería al Team Flare ayudado
                  también de muchos de los mejores entrenadores de Kalos y su
                  poderoso Greninja.
                </p>
                <br />
                <p>
                  Tras volver a Pueblo Paleta una vez más, a Ash y su madre les
                  toca un viaje a la región Alola gracias al Mr. Mime de esta
                  última. Allí ,Ash descubre la Escuela Pokémon donde decide
                  quedarse a estudiar junto a Kiawe, Sophocles/Chris,
                  Mallow/Lulú, Lana/Nereida y Lillie/Lylia.
                </p>
                <br />
                <p>
                  Una vez más, Ash deberá lidiar con diversas aventuras así como
                  las Pruebas del Recorrido Insular, los combates contra los
                  Kahuna de la isla o los Ultraumbrales y sus diversas amenazas.
                  El Profesor Kukui organiza la Primera Liga Pokémon de Alola,
                  de la cual Ash sale campeón en un último y frenético duelo
                  contra su rival de esta región, Gladion/Gladio.
                </p>
                <br />
              </div>
            </div>
            <div className="row">
              <h1 id="series">Series de televisión</h1>
              <hr />
            </div>
            <div className="series descripcion">
              <p>
                En la actualidad, la serie de televisión consta de 21
                temporadas, que se agrupan en seis series del anime. También hay
                varias temporadas especiales. Nosotros en Pokeducator nos
                centraremos en las series de television originales ya que han
                sido mencionadas con anterioridad en alguno de los apartados de
                información de esta página web.
              </p>
              <br />
              <div className="row">
                <h3 id="serie_original">Serie original</h3>
                <br />
              </div>
              <div className="serie_original descripcion">
                <p>
                  La serie original está formada por 5 temporadas y engloba el
                  viaje de Ash reuniendo medallas por Kanto, el Archipiélago
                  Naranja y Johto para poder participar en sus respectivas Ligas
                  Pokémon regionales. En su viaje le han acompañado Misty, Brock
                  y Tracey3. Las dos primeras temporadas pertenecen a la primera
                  generación, mientras que las restantes son de la segunda
                  generación.
                </p>
                <br />
              </div>
              <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                <tbody>
                  <tr>
                    <th className="radiusinnertl header1">Logo</th>
                    <th className="header2">Nombres</th>
                    <th className="radiusinnertr header3">Primer episodio</th>
                    <th className="radiusinnertr header4">Último episodio</th>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Primera_temporada"
                        title="Primera temporada"
                      >
                        Primera temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Primera_temporada"
                            title="Primera temporada"
                          >
                            <img
                              alt="Primera temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/b/b3/Primera_temporada.png/"
                              decoding="async"
                              width="140"
                              height="72"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Indigo League</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>¡Hazte con todos!</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>¡Atrápalos ya!</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP001"
                            title="EP001"
                          >
                            <img
                              alt="EP001.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/1/13/EP001.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP001"
                          title="EP001"
                        >
                          EP001
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP083"
                            title="EP083"
                          >
                            <img
                              alt="EP083.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e3/EP083.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP083"
                          title="EP083"
                        >
                          EP083
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>83</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="descripcionTemporada">
                      La primera temporada se desarrolla en la región de Kanto,
                      donde Ash Ketchum trata de conseguir las ocho medallas de
                      Kanto para participar en la Liga Pokémon de la región. Al
                      principio de su viaje, Ash recibe su Pokémon inicial de
                      manos del Profesor Oak, un Pikachu con el que desarrollara
                      una gran relación a lo largo de toda la serie. Ash también
                      conoce a Brock y Misty, que serán sus compañeros de viaje.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Segunda_temporada"
                        title="Segunda temporada"
                      >
                        Segunda temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Segunda_temporada"
                            title="Segunda temporada"
                          >
                            <img
                              alt="Segunda temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/1/15/Segunda_temporada.png/"
                              decoding="async"
                              width="140"
                              height="94"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Adventures in the Orange Islands</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Las Islas Naranja</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Liga Naranja</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP084"
                            title="EP084"
                          >
                            <img
                              alt="EP084.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/6/65/EP084.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP084"
                          title="EP084"
                        >
                          EP084
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP118"
                            title="EP118"
                          >
                            <img
                              alt="EP118.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/f/fb/EP118.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP118"
                          title="EP118"
                        >
                          EP118
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>35</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_segunda_temporada"
                        title="Lista de episodios de la segunda temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Se desarrolla en el archipiélago de las Islas Naranja.
                      Tracey reemplaza a Brock pasando a ser uno de los
                      personajes principales. Ash trata de reunir las 4 medallas
                      para participar en la Liga Naranja.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Tercera_temporada"
                        title="Tercera temporada"
                      >
                        Tercera temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Tercera_temporada"
                            title="Tercera temporada"
                          >
                            <img
                              alt="Tercera temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/74/Tercera_temporada.png/"
                              decoding="async"
                              width="140"
                              height="62"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>The Johto Journeys</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>The Johto Journeys</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Los Viajes Johto</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP119"
                            title="EP119"
                          >
                            <img
                              alt="EP119.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c3/EP119.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP119"
                          title="EP119"
                        >
                          EP119
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP159"
                            title="EP159"
                          >
                            <img
                              alt="EP159.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/5/5b/EP159.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP159"
                          title="EP159"
                        >
                          EP159
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>41</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_tercera_temporada"
                        title="Lista de episodios de la tercera temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Se desarrolla en la región de Johto. Ash, Misty y Brock
                      debén entregar la GS Ball a César por encargo del profesor
                      Oak. Ash trata de reunir las 8 medallas para participar en
                      la Conferencia Plateada/Congreso Plata.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Cuarta_temporada"
                        title="Cuarta temporada"
                      >
                        Cuarta temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Cuarta_temporada"
                            title="Cuarta temporada"
                          >
                            <img
                              alt="Cuarta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c3/Cuarta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="73"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Johto League Champions</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Johto League Champions</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Campeones de la Liga Johto</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP160"
                            title="EP160"
                          >
                            <img
                              alt="EP160.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/4/4d/EP160.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP160"
                          title="EP160"
                        >
                          EP160
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP211"
                            title="EP211"
                          >
                            <img
                              alt="EP211.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/f/f4/EP211.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP211"
                          title="EP211"
                        >
                          EP211
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>52</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_cuarta_temporada"
                        title="Lista de episodios de la cuarta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash prosigue en su intento de conseguir las medallas
                      suficientes para participar en la Conferencia
                      Plateada/Congreso Plata derrotando a 3 lideres de
                      gimnasio.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Quinta_temporada"
                        title="Quinta temporada"
                      >
                        Quinta temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Quinta_temporada"
                            title="Quinta temporada"
                          >
                            <img
                              alt="Quinta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c8/Quinta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="72"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Master Quest</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Master Quest</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>La Búsqueda del Maestro</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP212"
                            title="EP212"
                          >
                            <img
                              alt="EP212.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/ad/EP212.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP212"
                          title="EP212"
                        >
                          EP212
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP276"
                            title="EP276"
                          >
                            <img
                              alt="EP276.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/1/14/EP276.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP276"
                          title="EP276"
                        >
                          EP276
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>65</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_quinta_temporada"
                        title="Lista de episodios de la quinta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash logra reunir las últimas 3 medallas y participa en la
                      Conferencia Plateada/Congreso Plata, Misty regresa a
                      Ciudad Celeste y Ash se dirige a Hoenn únicamente con
                      Pikachu.
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="advanced">Serie Advanced Generation</h3>
                <br />
              </div>
              <div className="advanced descripcion">
                <p>
                  La serie Advanced Generation (también llamada Generación
                  Avanzada en Hispanoamérica) está formada por 4 temporadas y
                  engloba el viaje de Ash reuniendo 8 medallas por Hoenn para
                  participar en la Liga Pokémon regional y reuniendo símbolos
                  por Kanto en la Batalla de la Frontera/Frente Batalla. En su
                  viaje le han acompañado May/Aura, Max y Brock. Las cuatro
                  temporadas pertenecen a la tercera generación.
                </p>
                <br />
              </div>
              <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                <tbody>
                  <tr>
                    <th className="radiusinnertl header1">Logo</th>
                    <th className="header2">Nombres</th>
                    <th className="radiusinnertr header3">Primer episodio</th>
                    <th className="radiusinnertr header4">Último episodio</th>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Sexta_temporada"
                        title="Sexta temporada"
                      >
                        Sexta temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Sexta_temporada"
                            title="Sexta temporada"
                          >
                            <img
                              alt="Sexta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/a4/Sexta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="94"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Fuerza Máxima</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP277"
                            title="EP277"
                          >
                            <img
                              alt="EP277.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/2/22/EP277.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP277"
                          title="EP277"
                        >
                          EP277
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP316"
                            title="EP316"
                          >
                            <img
                              alt="EP316.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/2/2e/EP316.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP316"
                          title="EP316"
                        >
                          EP316
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>40</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_sexta_temporada"
                        title="Lista de episodios de la sexta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Su desarrollo comienza en la región de Hoenn desde Pueblo
                      Littleroot/Villa Raíz a Ciudad Mauville/Malvalona. Ash
                      conoce a May/Aura y su hermano Max y con la compañía de
                      Brock inician su viaje donde Ash deberá reunir las ocho
                      medallas necesarias para participar en la Liga Hoenn
                      mientras que May/Aura participa en los concursos de
                      coordinadores para llegar al Gran Festival.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/S%C3%A9ptima_temporada"
                        title="Séptima temporada"
                      >
                        Séptima temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/S%C3%A9ptima_temporada"
                            title="Séptima temporada"
                          >
                            <img
                              alt="Séptima temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/1/1c/S%C3%A9ptima_temporada.png/"
                              decoding="async"
                              width="140"
                              height="62"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced Challenge</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced Challenge</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Reto Máximo</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP317"
                            title="EP317"
                          >
                            <img
                              alt="EP317.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/9/92/EP317.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP317"
                          title="EP317"
                        >
                          EP317
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP368"
                            title="EP368"
                          >
                            <img
                              alt="EP368.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e8/EP368.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP368"
                          title="EP368"
                        >
                          EP368
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>52</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_s%C3%A9ptima_temporada"
                        title="Lista de episodios de la séptima temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      El viaje prosigue desde Ciudad Mauville/Malvalona a Ciudad
                      Lilycove/Calagua. Ash obtiene 3 medallas mientras que
                      May/Aura ya ha ganado 3 cintas/listón.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Octava_temporada"
                        title="Octava temporada"
                      >
                        Octava temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Octava_temporada"
                            title="Octava temporada"
                          >
                            <img
                              alt="Octava temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/3/3b/Octava_temporada.png/"
                              decoding="async"
                              width="140"
                              height="73"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced Battle</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Advanced Battle</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Batalla Avanzada</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP369"
                            title="EP369"
                          >
                            <img
                              alt="EP369.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/a/a3/EP369.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP369"
                          title="EP369"
                        >
                          EP369
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP422"
                            title="EP422"
                          >
                            <img
                              alt="EP422.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/ca/EP422.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP422"
                          title="EP422"
                        >
                          EP422
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>54</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_octava_temporada"
                        title="Lista de episodios de la octava temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      El viaje continua desde Ciudad Lilycove/Calagua hasta
                      Ciudad Slateport/Portual. May/Aura llega al Gran Festival.
                      Ash logra participar en el Campeonato de la Liga Hoenn
                      quedando entre los 8 mejores. Después de regresar a Kanto,
                      conoce la/el Batalla de la Frontera/Frente Batalla y
                      decide conseguir los símbolos de la frontera/del frente.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Novena_temporada"
                        title="Novena"
                      >
                        Novena Temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Novena_temporada"
                            title="Novena temporada"
                          >
                            <img
                              alt="Novena temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/8/81/Novena_temporada.png/"
                              decoding="async"
                              width="140"
                              height="72"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Battle Frontier</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Battle Frontier</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Batalla de la Frontera</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP423"
                            title="EP423"
                          >
                            <img
                              alt="EP423.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c5/EP423.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP423"
                          title="EP423"
                        >
                          EP423
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP469"
                            title="EP469"
                          >
                            <img
                              alt="EP276.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/6/6e/EP469.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP469"
                          title="EP469"
                        >
                          EP469
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>47</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_novena_temporada"
                        title="Lista de episodios de la novena temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      El viaje emprende su etapa final desde Ciudad Azafrán
                      hasta Pueblo Paleta. Ash logra reunir los 7 símbolos del
                      frente para luego enfrentarse a Valente coronándose
                      ganador. May/Aura se dirige a Johto para participar en los
                      concursos de esa región mientras que Max regresa a Ciudad
                      Petalburgo/Petalia y Brock a Ciudad Plateada. Ash descubre
                      la región de Sinnoh y decide a iniciar una nueva aventura.
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="series_diamante_y_perla">Series Diamante y Perla</h3>
                <br />
              </div>
              <div className="descripcion series_diamante_y_perla">
                <p>
                  La serie Diamante y Perla está formada por 4 temporadas y
                  engloba el viaje de Ash reuniendo 8 medallas únicamente por
                  Sinnoh para poder participar en la Liga Pokémon regional. En
                  su viaje le han acompañado Dawn/Maya, Brock, Lyra/Lira4 y
                  Khoury4. Las cuatro temporadas pertenecen a la cuarta
                  generación.
                </p>
                <br />
              </div>
              <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                <tbody>
                  <tr>
                    <th className="radiusinnertl header1">Logo</th>
                    <th className="header2">Nombres</th>
                    <th className="radiusinnertr header3">Primer episodio</th>
                    <th className="radiusinnertr header4">Último episodio</th>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/D%C3%A9cima_temporada"
                        title="Décima temporada"
                      >
                        Décima temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/D%C3%A9cima_temporada"
                            title="Décima temporada"
                          >
                            <img
                              alt="Décima temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/f/ff/D%C3%A9cima_temporada.png/"
                              decoding="async"
                              width="140"
                              height="94"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Diamond and Pearl</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Diamante y Perla</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Diamante y Perla</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP470"
                            title="EP470"
                          >
                            <img
                              alt="EP470.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/8/8c/EP470.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP470"
                          title="EP470"
                        >
                          EP470
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP521"
                            title="EP521"
                          >
                            <img
                              alt="EP521.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c8/EP521.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP521"
                          title="EP521"
                        >
                          EP521
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>52</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_d%C3%A9cima_temporada"
                        title="Lista de episodios de la décima temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      La primera parte del viaje va desde Pueblo Hojas
                      Gemelas/Hojaverde hasta Ciudad Corazonada/Corazón. Ash
                      conoce a Dawn/Maya, que también quiere competir en los
                      concursos para llegar al Gran Festival de la región de
                      Sinnoh y se encuentran por el camino con Brock que se une
                      al equipo.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Und%C3%A9cima_temporada"
                        title="Undécima temporada"
                      >
                        Undécima temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Und%C3%A9cima_temporada"
                            title="Undécima temporada"
                          >
                            <img
                              alt="Undécima temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/8/85/Und%C3%A9cima_temporada.png/"
                              decoding="async"
                              width="140"
                              height="62"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Battle Dimension</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Battle Dimension</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Dimensión de Batalla</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP522"
                            title="EP522"
                          >
                            <img
                              alt="EP522.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/2/25/EP522.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP522"
                          title="EP522"
                        >
                          EP522
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP573"
                            title="EP573"
                          >
                            <img
                              alt="EP573.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/d/d9/EP573.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP573"
                          title="EP573"
                        >
                          EP573
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>52</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_und%C3%A9cima_temporada"
                        title="Lista de episodios de la undécima temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash ya tiene su primera medalla y Dawn/Maya su primera
                      cinta, luego se encuentran con May/Aura, que quiere viajar
                      para ganar 2 concursos y entrar al Gran Festival de Johto,
                      pero Dawn/Maya la gana en un concurso. Finalmente May/Aura
                      se va y nuestros héroes siguen su aventura. El Turtwig de
                      Ash evoluciona en Grotle, además de atrapar a un Gligar
                      que pronto evolucionó en Gliscor, mientras tanto Dawn/Maya
                      obtuvo a su Swinub y conocieron a Barry/Benito.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Duod%C3%A9cima_temporada"
                        title="Duodécima temporada"
                      >
                        Duodécima temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Duod%C3%A9cima_temporada"
                            title="Duodécima temporada"
                          >
                            <img
                              alt="Duodécima temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/6/68/Duod%C3%A9cima_temporada.png/"
                              decoding="async"
                              width="140"
                              height="73"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Galactic Battles</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Combates Galácticos</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Batallas Galácticas</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP574"
                            title="EP574"
                          >
                            <img
                              alt="EP574.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/8/86/EP574.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP574"
                          title="EP574"
                        >
                          EP574
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP626"
                            title="EP626"
                          >
                            <img
                              alt="EP626.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/9/9a/EP626.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP626"
                          title="EP626"
                        >
                          EP626
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>53</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_duod%C3%A9cima_temporada"
                        title="Lista de episodios de la duodécima temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash, Dawn/Maya y Brock siguen su viaje por la Región de
                      Sinnoh. Ash gana la sexta y séptima medalla, su Staravia y
                      su Chimchar evolucionan. Dawn/Maya gana 2 listones,
                      consigue un Cyndaquil de manos de Lyra, evoluciona su
                      Piloswine y abandona a su Ambipom, lo deja a cargo de un
                      jugador de Ping-Pong Pokémon. Aquí también se descubre el
                      desenlace de Dialga y Palkia.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Decimotercera_temporada"
                        title="Decimotercera Temporada"
                      >
                        Decimotercera Temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Decimotercera_temporada"
                            title="Decimotercera temporada"
                          >
                            <img
                              alt="Decimotercera temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/5/57/Decimotercera_temporada.png/"
                              decoding="async"
                              width="140"
                              height="72"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Sinnoh League Victors</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Los Vencedores de la Liga de Sinnoh</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Los Vencedores de la Liga Sinnoh</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP627"
                            title="EP627"
                          >
                            <img
                              alt="EP627.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c7/EP627.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP627"
                          title="EP627"
                        >
                          EP627
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP660"
                            title="EP660"
                          >
                            <img
                              alt="EP660.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/0/07/EP660.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP660"
                          title="EP660"
                        >
                          EP660
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>34</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimotercera_temporada"
                        title="Lista de episodios de la decimotercera temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash, Dawn/Maya y Brock continúan su viaje por Sinnoh. Ash
                      gana la octava medalla y el derecho de entrar a la Liga
                      Sinnoh, además su Grotle y su Monferno evolucionan.
                      Dawn/Maya gana 1 listón, obtiene un Togekiss y queda 2ª en
                      el Gran Festival de Sinnoh. En esta temporada se disputa
                      Liga Sinnoh en la Isla del Valle Lily/Isla Lirio del
                      Valle. Al final Dawn/Maya decide quedarse en Sinnoh y
                      Brock decide ser Doctor Pokémon separándose de Ash.
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="serie_negro_y_blanco">Serie Negro y Blanco</h3>
                <br />
              </div>
              <div className="descripcion serie_negro_y_blanco">
                <p>
                  La serie Negro y Blanco está formada por 3 temporadas y
                  engloba el viaje de Ash reuniendo 8 medallas por Teselia para
                  poder participar en la Liga Pokémon regional y explorando las
                  Islas Decolora/Decoloras. En su viaje le han acompañado Iris,
                  Cilan/Millo, N4 y Alexa/Alexia4. Las tres temporadas
                  pertenecen a la quinta generación.
                </p>
                <br />
              </div>
              <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                <tbody>
                  <tr>
                    <th className="radiusinnertl header1">Logo</th>
                    <th className="header2">Nombres</th>
                    <th className="radiusinnertr header3">Primer episodio</th>
                    <th className="radiusinnertr header4">Último episodio</th>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Decimocuarta_temporada"
                        title="Undécima temporada"
                      >
                        Decimocuarta temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Decimocuarta_temporada"
                            title="Decimocuarta temporada"
                          >
                            <img
                              alt="Decimocuarta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/f/fc/Decimocuarta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="62"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Black & White</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Negro y Blanco</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Negro y Blanco</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP661"
                            title="EP661"
                          >
                            <img
                              alt="EP661.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/7/74/EP661.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP661"
                          title="EP661"
                        >
                          EP661
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP710"
                            title="EP710"
                          >
                            <img
                              alt="EP710.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e1/EP710.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP710"
                          title="EP710"
                        >
                          EP710
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>50</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimocuarta_temporada"
                        title="Lista de episodios de la decimocuarta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      En esta nueva temporada, Ash y Pikachu comienzan una nueva
                      aventura por la región de Teselia. Ash, como siempre,
                      seguirá su sueño de convertirse en un maestro Pokémon y
                      participar en la Liga Pokémon de esa región. En su camino,
                      Ash se encuentra con Iris y Cilan/Millo, quienes deciden
                      acompañarle.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Decimoquinta_temporada"
                        title="Decimoquinta temporada"
                      >
                        Decimoquinta temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Decimoquinta_temporada"
                            title="Decimoquinta temporada"
                          >
                            <img
                              alt="Decimoquinta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/e/e6/Decimoquinta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="73"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Rival Destinies</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Destinos Rivales</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Destinos Rivales</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP711"
                            title="EP711"
                          >
                            <img
                              alt="EP711.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/5/59/EP711.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP711"
                          title="EP711"
                        >
                          EP711
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP759"
                            title="EP759"
                          >
                            <img
                              alt="EP759.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/c/c1/EP759.png/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP759"
                          title="EP759"
                        >
                          EP759
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>49</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimoquinta_temporada"
                        title="Lista de episodios de la decimoquinta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Ash continúa con su viaje por la región de Teselia
                      reuniendo medallas para lograr llegar a la liga de Teselia
                      y así poder competir en esta Liga Pokémon.
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={4} className="subtitulo">
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Decimosexta_temporada"
                        title="Decimosexta Temporada"
                      >
                        Decimosexta Temporada
                      </a>
                    </th>
                  </tr>
                  <tr>
                    <td rowSpan={2}>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/Decimosexta_temporada"
                            title="Decimosexta temporada"
                          >
                            <img
                              alt="Decimosexta temporada.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/3/32/Decimosexta_temporada.png/"
                              decoding="async"
                              width="140"
                              height="72"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>
                    </td>
                    <td rowSpan={2} className="separador">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td>
                              <b>Estados Unidos</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Adventures in Unova</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>España</b>:
                            </td>
                          </tr>
                          <tr>
                            <td className="nombreSeries">
                              <i>Aventuras en Teselia</i>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Hispanoamérica</b>:
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i>Aventuras en Unova</i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP760"
                            title="EP760"
                          >
                            <img
                              alt="EP760.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/9/9a/EP760.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP760"
                          title="EP760"
                        >
                          EP760
                        </a>
                      </b>
                    </td>
                    <td>
                      <div className="center">
                        <div className="floatnone" width="140px">
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP804"
                            title="EP804"
                          >
                            <img
                              alt="EP804.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/5/58/EP804.png/"
                              decoding="async"
                              width="140"
                              height="103"
                              className=" lazyloaded"
                            />
                          </a>
                        </div>
                      </div>{" "}
                      <b>
                        <a
                          href="https://pokemon.fandom.com/es/wiki/EP804"
                          title="EP804"
                        >
                          EP804
                        </a>
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      Episodios: <b>45</b> (
                      <a
                        href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimosexta_temporada"
                        title="Lista de episodios de la decimosexta temporada"
                      >
                        ver lista de episodios
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="serieSinopsis">
                      Tras haber participado en la liga de Teselia, Ash y sus
                      amigos conocen a N y suceden nuevos eventos importantes en
                      la Serie Negro y Blanco como la aparición del Equipo
                      Plasma o el regreso de Ash a Kanto viajando por las Islas
                      Decolora/Decoloras.
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h3 id="serie_xy">Serie XY</h3>
                <br />
              </div>
              <div className="serie_xy descripcion">
                <p>
                  La serie XY está formada por 3 temporadas. Engloba el viaje
                  que Ash está haciendo para reunir 8 medallas de Kalos y así,
                  poder participar en la Liga Pokémon regional. En su viaje le
                  acompañaron Serena, Clemont/Lem y Bonnie/Clem y le ha
                  acompañado Korrina/Corelia4. Sus temporadas pertenecen a la
                  sexta generación.
                </p>
                <br />
                <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                  <tbody>
                    <tr>
                      <th className="radiusinnertl header1">Logo</th>
                      <th className="header2">Nombres</th>
                      <th className="radiusinnertr header3">Primer episodio</th>
                      <th className="radiusinnertr header4">Último episodio</th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Decimos%C3%A9ptima_temporada"
                          title="Decimoséptima temporada"
                        >
                          Decimoséptima temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Decimos%C3%A9ptima_temporada"
                              title="Decimoséptima temporada"
                            >
                              <img
                                alt="Decimoséptima temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/4/4b/Decimos%C3%A9ptima_temporada.png/"
                                decoding="async"
                                width="140"
                                height="62"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XY</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XY</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>XY</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP805"
                              title="EP805"
                            >
                              <img
                                alt="EP805.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/6/67/EP805.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP805"
                            title="EP805"
                          >
                            EP805
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP853"
                              title="EP853"
                            >
                              <img
                                alt="EP853.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/9/99/EP853.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP853"
                            title="EP853"
                          >
                            EP853
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>48</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimos%C3%A9ptima_temporada"
                          title="Lista de episodios de la decimoséptima temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        En esta nueva temporada, Ash y Pikachu comienzan una
                        nueva aventura por la región de Kalos, comenzando su
                        aventura en Ciudad Lumiose/Luminalia, la capital de esta
                        región. Aquí vivirán nuevas y emocionantes aventuras
                        junto a nuevos Pokémon y personajes, Serena, Clemont/Lem
                        y Bonnie/Clem.
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Decimoctava_temporada"
                          title="Decimoctava temporada"
                        >
                          Decimoctava temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Decimoctava_temporada"
                              title="Decimoctava temporada"
                            >
                              <img
                                alt="Decimoctava temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/5/5f/Decimoctava_temporada.png/"
                                decoding="async"
                                width="140"
                                height="73"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XY - Kalos Quest</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XY - Expediciones en Kalos</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>XY - Búsqueda en Kalos</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP854"
                              title="EP854"
                            >
                              <img
                                alt="EP854.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/8/85/EP854.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP854"
                            title="EP854"
                          >
                            EP854
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP896"
                              title="EP896"
                            >
                              <img
                                alt="EP896.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/2/24/EP896.png/"
                                decoding="async"
                                width="140"
                                height="105"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP896"
                            title="EP896"
                          >
                            EP896
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>45</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimoctava_temporada"
                          title="Lista de episodios de la decimoctava temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash, Clemont/Lem, Bonnie/Clem y Serena continúan su
                        viaje por la región de Kalos, donde Ash retará nuevos
                        gimnasios, y donde Serena hará su debut como
                        artista/estrella Pokémon y cambiará de aspecto.
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Decimonovena_temporada"
                          title="Decimonovena Temporada"
                        >
                          Decimonovena Temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Decimonovena_temporada"
                              title="Decimonovena temporada"
                            >
                              <img
                                alt="Decimonovena temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/b/b1/Decimonovena_temporada.png/"
                                decoding="async"
                                width="140"
                                height="72"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XYZ</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>XYZ</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>XYZ</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP897"
                              title="EP897"
                            >
                              <img
                                alt="EP897.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/d/dd/EP897.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP897"
                            title="EP897"
                          >
                            EP897
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP943"
                              title="EP943"
                            >
                              <img
                                alt="EP943.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/5/54/EP943.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP943"
                            title="EP943"
                          >
                            EP943
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>47</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_decimonovena_temporada"
                          title="Lista de episodios de la decimonovena temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash, Clemont/Lem, Bonnie/Clem y Serena continúan su
                        viaje por la región de Kalos, donde se cruzarán con el
                        Team/Equipo Flare nuevos villanos que buscan el poder de
                        Zygarde; con Alain (protagonista de los Especiales de la
                        Megaevolución), quien trabaja para ellos; Serena
                        competirá en el Gran espectáculo de la clase maestra y
                        Bonnie/Clem cuidará de un Pokémon misterioso,
                        Blandito/Blandín, el cual es el núcleo de Zygarde.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div className="row">
                <h3 id="serie_sol_y_luna">Serie Sol y Luna</h3>
                <br />
              </div>
              <div className="serie_sol_y_luna descripcion">
                <p>
                  La serie Sol y Luna está formada por 3 temporadas. Engloba las
                  aventuras de Ash en Alola.
                </p>
                <br />
                <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                  <tbody>
                    <tr>
                      <th className="radiusinnertl header1">Logo</th>
                      <th className="header2">Nombres</th>
                      <th className="radiusinnertr header3">Primer episodio</th>
                      <th className="radiusinnertr header4">Último episodio</th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Vig%C3%A9sima_temporada"
                          title="Vigésima temporada"
                        >
                          Vigésima temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Vig%C3%A9sima_temporada"
                              title="Vigésima temporada"
                            >
                              <img
                                alt="Vigésima temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/6/6c/Vig%C3%A9sima_temporada.png/"
                                decoding="async"
                                width="140"
                                height="62"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sun & Moon</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sol y Luna</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>Sol y Luna</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP944"
                              title="EP944"
                            >
                              <img
                                alt="EP944.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/f/fd/EP944.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP944"
                            title="EP944"
                          >
                            EP944
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP986"
                              title="EP986"
                            >
                              <img
                                alt="EP986.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/4/41/EP986.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP986"
                            title="EP986"
                          >
                            EP986
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>43</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_vig%C3%A9sima_temporada"
                          title="Lista de episodios de la vigésima temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        En esta nueva temporada, Ash y Pikachu comienzan una
                        nueva aventura por la región de Alola, donde asistirán a
                        una escuela y vivirán nuevas aventuras.
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Vigesimoprimera_temporada"
                          title="Vigesimoprimera temporada"
                        >
                          Vigesimoprimera temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Vigesimoprimera_temporada"
                              title="Vigesimoprimera temporada"
                            >
                              <img
                                alt="Vigesimoprimera temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/1/17/Vigesimoprimera_temporada.png/"
                                decoding="async"
                                width="140"
                                height="73"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sun & Moon - Ultra Adventures</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sol y Luna - Ultraaventuras</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>Desconocido</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP987"
                              title="EP987"
                            >
                              <img
                                alt="EP987.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/a/ae/EP987.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP987"
                            title="EP987"
                          >
                            EP987
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1035"
                              title="EP1035"
                            >
                              <img
                                alt="EP1035.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/c/cc/EP1035.png/"
                                decoding="async"
                                width="140"
                                height="105"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1035"
                            title="EP1035"
                          >
                            EP1035
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>48</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_vigesimoprimera_temporada"
                          title="Lista de episodios de la vigesimoprimera temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash continua su estadía en la región Alola, en donde
                        conocerá un misterioso Pokémon, que será apodado
                        Nebulilla, también combatirá con varios ultraentes,
                        teniendo la misión de regresarlos al ultraespacio y
                        seguirá diviertiéndose con sus amigos.
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Vigesimosegunda_temporada"
                          title="Vigesimosegunda Temporada"
                        >
                          Vigesimosegunda Temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Vigesimosegunda_temporada"
                              title="Vigesimosegunda temporada"
                            >
                              <img
                                alt="Vigesimosegunda temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/f/f0/Vigesimosegunda_temporada.png/"
                                decoding="async"
                                width="140"
                                height="72"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sun & Moon - Ultra Legends</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sol y Luna - Ultraleyendas</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>Sol y Luna - Ultra Leyendas</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1036"
                              title="EP1036"
                            >
                              <img
                                alt="EP1036.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/e/e8/EP1036.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1036"
                            title="EP1036"
                          >
                            EP1036
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1089"
                              title="EP1089"
                            >
                              <img
                                alt="EP1089.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/d/de/EP1089.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1089"
                            title="EP1089"
                          >
                            EP1089
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>53</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_vigesimosegunda_temporada"
                          title="Lista de episodios de la vigesimosegunda temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash vence a derrota a Gladion/Gladio. Ash se convierte
                        en el Campeón de la Liga Regional de Alola. Ash captura
                        al Pokémon Singular Meltan, que posteriormente
                        evolucionara en Melmetal. Primera aparición del Pokémon
                        singular Zeraora, también combatirá con varios
                        ultraentes, teniendo la misión de regresarlos al
                        ultraespacio.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </div>
              <div className="row">
                <h3 id="serie_espada_y_escudo">Serie Espada y Escudo</h3>
                <br />
              </div>
              <div className="serie_espada_y_escudo descripcion">
                <p>
                  La serie Espada y Escudo está formada por 1 temporada. Engloba
                  las aventuras de Ash en Galar.
                </p>
                <br />
                <table cellPadding={2} cellSpacing={0} className=" tablaSeries">
                  <tbody>
                    <tr>
                      <th className="radiusinnertl header1">Logo</th>
                      <th className="header2">Nombres</th>
                      <th className="radiusinnertr header3">Primer episodio</th>
                      <th className="radiusinnertr header4">Último episodio</th>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Vigesimotercera_temporada"
                          title="Vigesimotercera temporada"
                        >
                          Vigesimotercera temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Vigesimotercera_temporada"
                              title="Vigesimotercera temporada"
                            >
                              <img
                                alt="Vigesimotercera temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/4/41/Logo_Nueva_serie_Pok%C3%A9mon_2019_Jap%C3%B3n.png/"
                                decoding="async"
                                width="140"
                                height="62"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Sword & Shield</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Serie Espada y Escudo</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>Serie Espada y Escudo</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1090"
                              title="EP1090"
                            >
                              <img
                                alt="EP1090.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/4/45/EP1090.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1090"
                            title="EP1090"
                          >
                            EP1090
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1137"
                              title="EP1137"
                            >
                              <img
                                alt="EP1137.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/9/9d/EP1137.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1137"
                            title="EP1137"
                          >
                            EP1137
                          </a>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>47</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_vigesimotercera_temporada"
                          title="Lista de episodios de la vigesimotercera temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash, Goh y Koharu viajaran por todas las regiones:
                        Kanto, Johto, Hoenn, Sinnoh, Teselia, Kalos, Alola y
                        Galar. Primera aparición de Lionel.
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={4} className="subtitulo">
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Vigesimocuarta_temporada"
                          title="Vigesimocuarta temporada"
                        >
                          Vigesimocuarta temporada
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <td rowSpan={2}>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/Vigesimocuarta_temporada"
                              title="Vigesimocuarta temporada"
                            >
                              <img
                                alt="Vigesimocuarta temporada.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/6/62/Logo_Nueva_serie_Pok%C3%A9mon_2021.png/"
                                decoding="async"
                                width="140"
                                height="73"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>
                      </td>
                      <td rowSpan={2} className="separador">
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <b>Estados Unidos</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Pokémon Master Journeys: The Series</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>España</b>:
                              </td>
                            </tr>
                            <tr>
                              <td className="nombreSeries">
                                <i>Viajes Maestros Pokémon</i>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Hispanoamérica</b>:
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <i>Viajes Maestros Pokémon</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <a
                              href="https://pokemon.fandom.com/es/wiki/EP1138"
                              title="EP1138"
                            >
                              <img
                                alt="EP1138.png"
                                src="https://static.wikia.nocookie.net/espokemon/images/7/74/EP1138.png/"
                                decoding="async"
                                width="140"
                                height="103"
                                className=" lazyloaded"
                              />
                            </a>
                          </div>
                        </div>{" "}
                        <b>
                          <a
                            href="https://pokemon.fandom.com/es/wiki/EP1138"
                            title="EP1138"
                          >
                            EP1138
                          </a>
                        </b>
                      </td>
                      <td>
                        <div className="center">
                          <div className="floatnone" width="140px">
                            <img
                              alt="imagen_no_disponible.png"
                              src="https://static.wikia.nocookie.net/espokemon/images/d/da/Imagen_no_disponible.svg/"
                              decoding="async"
                              width="140"
                              height="105"
                              className=" lazyloaded"
                            />
                          </div>
                        </div>{" "}
                        <b>???</b>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        Episodios: <b>??</b> (
                        <a
                          href="https://pokemon.fandom.com/es/wiki/Lista_de_episodios_de_la_vigesimocuarta_temporada"
                          title="Lista de episodios de la vigesimocuarta temporada"
                        >
                          ver lista de episodios
                        </a>
                        )
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="serieSinopsis">
                        Ash, Goh y Koharu viajaran por todas las regiones:
                        Kanto, Johto, Hoenn, Sinnoh, Teselia, Kalos, Alola y
                        Galar. Koharu captura a Eevee.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
            <div className="row">
              <h1 id="episodios_especiales">Episodios especiales</h1>
              <hr />
            </div>
            <div className="episodios_especiales descripcion">
              <p>
                Son episodios especiales aquellos que no siguen la trama de la
                serie, por ejemplo, teniendo otros personajes protagonistas. En
                occidente se han emitido dos temporadas especiales, Crónicas
                Pokémon y Pokémon: los orígenes. También está en Japón y Estados
                Unidos el Mega Evolution Special, pendiente de ser estrenado en
                español.
              </p>
              <br />
              <p>
                Crónicas Pokémon no tiene un equivalente japonés, sin embargo se
                compone de capítulos presentados en el programa japonés Shūkan
                Pokémon Hōsōkyoku, de Las vacaciones de Navidad de Pikachu/Las
                vacaciones invernales de Pikachu y del especial La leyenda del
                trueno.
              </p>
              <br />
              <ul>
                <li>
                  <a
                    className="links"
                    href="https://pokemon.fandom.com/es/wiki/Cr%C3%B3nicas_Pok%C3%A9mon"
                  >
                    <img
                      src="https://static.wikia.nocookie.net/espokemon/images/4/4b/Logo_Cr%C3%B3nicas_Pok%C3%A9mon.png/"
                      width="100px"
                      alt="logo_cronicas_pokemon"
                    />
                    (Crónicas Pokémon)
                  </a>
                </li>
                <li>
                  <a
                    className="links"
                    href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon:_los_or%C3%ADgenes"
                  >
                    <img
                      src="https://static.wikia.nocookie.net/espokemon/images/e/ef/Pok%C3%A9mon_Los_Or%C3%ADgenes_Logo.png/"
                      width="100px"
                      alt="logo_cronicas_pokemon"
                    />
                    (Pokémon: los orígenes)
                  </a>
                </li>
                <li>
                  <a
                    className="links"
                    href="https://pokemon.fandom.com/es/wiki/Especial_Pok%C3%A9mon_Megaevoluci%C3%B3n"
                  >
                    <img
                      src="https://static.wikia.nocookie.net/espokemon/images/a/af/Mega_Evolution_Special_Logo.png/"
                      width="100px"
                      alt="logo_cronicas_pokemon"
                    />
                    (Mega Evolution Special)
                  </a>
                </li>
              </ul>
              <br />
            </div>

            <div className="row">
              <h1 id="peliculas">Películas</h1>
              <hr />
            </div>
            <div className="peliculas descripcion">
              <div className="row">
                <a className="anchor" href="#serie_original">
                  <h3 id="pelicula_serie_original">Serie original</h3><br />
                </a>
                
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries ">
                    <a href="https://pokemon.fandom.com/es/wiki/P01">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/a/ab/Mewtwo_vs._Mew.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P01"
                      >
                        <h3 className="card-title cardSeries_title ">
                          Mewtwo vs. Mew/ Mewtwo contraataca
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P02">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/8/85/Pok%C3%A9mon_2000_El_poder_de_uno.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P02"
                      >
                        <h3 className="card-title  cardSeries_title ">El poder de uno</h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P03">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/0/01/El_hechizo_de_los_Unown.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P03"
                      >
                        <h3 className="card-title ">
                          Mewtwo vs. Mew/ Mewtwo contraataca
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P04">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/7/7f/Pok%C3%A9mon_4Ever.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P04"
                      >
                        <h3 className="card-title ">
                          Pokémon 4Ever/ Pokémon x siempre: Celebi, la voz del
                          bosque
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P05">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/9/9d/H%C3%A9roes_Pok%C3%A9mon.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P05"
                      >
                        <h3 className="card-title ">
                          Héroes Pokémon/ Héroes Pokémon: Latios y Latias
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <a className="anchor" href="#advanced">
                  <h3 id="pelicula_advanced_generation">
                    Serie Advanced Generation
                  </h3><br />
                </a>
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P06">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/a/a3/P06.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P06"
                      >
                        <h3 className="card-title ">Jirachi y los deseos</h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P07">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/7/7a/P07.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P07"
                      >
                        <h3 className="card-title ">El destino de Deoxys</h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P08">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/e/e0/P08.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P08"
                      >
                        <h3 className="card-title ">
                          Lucario y el misterio de Mew
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P09">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/f/f9/Car%C3%A1tula_P09.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P09"
                      >
                        <h3 className="card-title ">
                          Pokémon Ranger y el Templo del Mar
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div><br />
              <div className="row">
                <a className="anchor" href="#series_diamante_y_perla">
                  <h3 id="pelicula_diamante_y_perla">Serie Diamante y Perla</h3><br />
                </a>
                
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P10">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/3/35/El_desaf%C3%ADo_de_Darkrai.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P10"
                      >
                        <h3 className="card-title ">
                          El desafío de Darkrai/ El surgimiento de Darkrai
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P11">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/7/7a/Giratina_y_el_defensor_de_los_cielos.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P11"
                      >
                        <h3 className="card-title ">
                          Giratina y el defensor de los cielos/ Giratina y el
                          guerrero celestial
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P12">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/2/23/Arceus_y_la_Joya_de_la_Vida.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P12"
                      >
                        <h3 className="card-title ">
                          Arceus y la joya de la vida
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P13">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/3/3e/Zoroark_El_Maestro_de_Ilusiones.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P13"
                      >
                        <h3 className="card-title ">
                          Zoroark, el maestro de ilusiones
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div><br />
              <div className="row">
                <a className="anchor" href="#series_negro_y_blanco">
                  <h3 id="pelicula_negro_y_blanco">Serie Negro y Blanco</h3> <br />
                </a>
               
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P14">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/c/c5/Poster_P14.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P14"
                      >
                        <h3 className="card-title ">
                          Negro - Victini y Reshiram/ Blanco - Victini y Zekrom
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P15">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/3/32/P15_Poster.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P15"
                      >
                        <h3 className="card-title ">
                          Kyurem contra el espadachín místico
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P16">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/0/02/P%C3%B3ster_P16.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P16"
                      >
                        <h3 className="card-title ">
                          Genesect y el despertar de una leyenda
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div><br />
              <div className="row">
                <a className="anchor" href="#serie_xy">
                  <h3 id="pelicula_xy">Serie XY</h3><br />
                </a>
                
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P17">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/8/86/P17.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P17"
                      >
                        <h3 className="card-title ">
                          Diancie y la crisálida de la destrucción
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P18">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/c/c8/P18.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P18"
                      >
                        <h3 className="card-title ">
                          Hoopa y un duelo histórico
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P19">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/c/c4/P19_P%C3%B3ster_espa%C3%B1ol.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P19"
                      >
                        <h3 className="card-title ">
                          Volcanion y la maravilla mecánica
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div><br />
              <div className="row">
                <a className="anchor" href="#serie_sol_y_luna">
                  <h3 id="pelicula_sol_y_luna">Serie Sol y Luna</h3><br />
                </a>
                
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P20">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/2/2a/P20_P%C3%B3ster_1.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P20"
                      >
                        <h3 className="card-title ">
                          ¡Te elijo a ti! / ¡Yo te elijo!
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P21">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/b/b3/P21_Poster_Castellano.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P21"
                      >
                        <h3 className="card-title ">El poder de todos</h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P22">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/6/6b/P22_Pok%C3%A9mon_Mewtwo_contraataca-Evoluci%C3%B3n.jpg/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P22"
                      >
                        <h3 className="card-title ">
                          Pokémon: Mewtwo contraataca-Evolución
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
                
              </div><br />
              <div className="row">
                <a className="anchor" href="#serie_espada_y_escudo">
                  <h3 id="pelicula_espada_y_escudo">Serie Espada y Escudo</h3><br />
                </a>
                
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardSeries">
                    <a href="https://pokemon.fandom.com/es/wiki/P23">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/3/31/P23_Pok%C3%A9mon_Los_secretos_de_la_selva.jpg/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardSeries_body details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P23"
                      >
                        <h3 className="card-title ">
                          Pokémon: Los secretos de la selva
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div><br />
          </div>
        </>
      )}
    </>
  );
};
export default PokeducatorWikiSeries;
