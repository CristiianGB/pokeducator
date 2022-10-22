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
            <table cellPadding={2} cellSpacing={0} className="radius10 tabla">
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
                      href="/es/wiki/Primera_temporada"
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
                          href="/es/wiki/Primera_temporada"
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
                        <a href="/es/wiki/EP001" title="EP001">
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
                      <a href="" title="EP001">
                        EP001
                      </a>
                    </b>
                  </td>
                  <td>
                    <div className="center">
                      <div className="floatnone" width="140px">
                        <a href="/es/wiki/EP083" title="EP083">
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
                      <a href="" title="EP083">
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
                    La primera temporada se desarrolla en la región de{" "}
                    <a href="" title="Kanto">
                      Kanto
                    </a>
                    , donde{" "}
                    <a href="" title="Ash Ketchum">
                      Ash Ketchum
                    </a>{" "}
                    trata de conseguir las ocho{" "}
                    <a href="/es/wiki/Medalla" title="Medalla">
                      medallas
                    </a>{" "}
                    de Kanto para participar en la Liga Pokémon de la región. Al
                    principio de su viaje, Ash recibe su{" "}
                    <a
                      href="/es/wiki/Pok%C3%A9mon_inicial"
                      title="Pokémon inicial"
                    >
                      Pokémon inicial
                    </a>{" "}
                    de manos del Profesor Oak, un{" "}
                    <a href="/es/wiki/Pikachu_de_Ash" title="Pikachu de Ash">
                      Pikachu
                    </a>{" "}
                    con el que desarrollara una gran relación a lo largo de toda
                    la serie. Ash también conoce a{" "}
                    <a href="/es/wiki/Brock_(anime)" title="Brock (anime)">
                      Brock
                    </a>{" "}
                    y{" "}
                    <a href="/es/wiki/Misty_(anime)" title="Misty (anime)">
                      Misty
                    </a>
                    , que serán sus compañeros de viaje.
                  </td>
                </tr>
                <tr>
                  <th colSpan={4} className="subtitulo">
                    <a
                      href="/es/wiki/Segunda_temporada"
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
                          href="/es/wiki/Segunda_temporada"
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
                        <a href="/es/wiki/EP084" title="EP084">
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
                      <a href="/es/wiki/EP084" title="EP084">
                        EP084
                      </a>
                    </b>
                  </td>
                  <td>
                    <div className="center">
                      <div className="floatnone" width="140px">
                        <a href="/es/wiki/EP118" title="EP118">
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
                      <a href="/es/wiki/EP118" title="EP118">
                        EP118
                      </a>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Episodios: <b>35</b> (
                    <a
                      href="/es/wiki/Lista_de_episodios_de_la_segunda_temporada"
                      title="Lista de episodios de la segunda temporada"
                    >
                      ver lista de episodios
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="serieSinopsis">
                    Se desarrolla en el archipiélago de las{" "}
                    <a
                      href="/es/wiki/Archipi%C3%A9lago_Naranja"
                      title="Archipiélago Naranja"
                    >
                      Islas Naranja
                    </a>
                    .{" "}
                    <a
                      href="/es/wiki/Tracey"
                      className="mw-redirect"
                      title="Tracey"
                    >
                      Tracey
                    </a>{" "}
                    reemplaza a{" "}
                    <a href="/es/wiki/Brock_(anime)" title="Brock (anime)">
                      Brock
                    </a>{" "}
                    pasando a ser uno de los personajes principales. Ash trata
                    de reunir las 4 medallas para participar en la{" "}
                    <a href="/es/wiki/Liga_Naranja" title="Liga Naranja">
                      Liga Naranja
                    </a>
                    .
                  </td>
                </tr>
                <tr>
                  <th colSpan={4} className="subtitulo">
                    <a
                      href="/es/wiki/Tercera_temporada"
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
                          href="/es/wiki/Tercera_temporada"
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
                        <a href="/es/wiki/EP119" title="EP119">
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
                      <a href="/es/wiki/EP119" title="EP119">
                        EP119
                      </a>
                    </b>
                  </td>
                  <td>
                    <div className="center">
                      <div className="floatnone" width="140px">
                        <a href="/es/wiki/EP159" title="EP159">
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
                      <a href="/es/wiki/EP159" title="EP159">
                        EP159
                      </a>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Episodios: <b>41</b> (
                    <a
                      href="/es/wiki/Lista_de_episodios_de_la_tercera_temporada"
                      title="Lista de episodios de la tercera temporada"
                    >
                      ver lista de episodios
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="serieSinopsis">
                    Se desarrolla en la región de{" "}
                    <a href="/es/wiki/Johto" title="Johto">
                      Johto
                    </a>
                    .{" "}
                    <a href="/es/wiki/Ash" className="mw-redirect" title="Ash">
                      Ash
                    </a>
                    ,{" "}
                    <a href="/es/wiki/Misty_(anime)" title="Misty (anime)">
                      Misty
                    </a>{" "}
                    y{" "}
                    <a href="/es/wiki/Brock_(anime)" title="Brock (anime)">
                      Brock
                    </a>{" "}
                    debén entregar la{" "}
                    <a href="/es/wiki/GS_Ball" title="GS Ball">
                      GS Ball
                    </a>{" "}
                    a{" "}
                    <a href="/es/wiki/C%C3%A9sar" title="César">
                      César
                    </a>{" "}
                    por encargo del{" "}
                    <a href="/es/wiki/Profesor_Oak" title="Profesor Oak">
                      profesor Oak
                    </a>
                    . Ash trata de reunir las 8 medallas para participar en la{" "}
                    <a
                      href="/es/wiki/Conferencia_Plateada/Congreso_Plata"
                      title="Conferencia Plateada/Congreso Plata"
                    >
                      Conferencia Plateada/Congreso Plata
                    </a>
                    .
                  </td>
                </tr>
                <tr>
                  <th colSpan={4} className="subtitulo">
                    <a
                      href="/es/wiki/Cuarta_temporada"
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
                          href="/es/wiki/Cuarta_temporada"
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
                        <a href="/es/wiki/EP160" title="EP160">
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
                      <a href="/es/wiki/EP160" title="EP160">
                        EP160
                      </a>
                    </b>
                  </td>
                  <td>
                    <div className="center">
                      <div className="floatnone" width="140px">
                        <a href="/es/wiki/EP211" title="EP211">
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
                      <a href="/es/wiki/EP211" title="EP211">
                        EP211
                      </a>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Episodios: <b>52</b> (
                    <a
                      href="/es/wiki/Lista_de_episodios_de_la_cuarta_temporada"
                      title="Lista de episodios de la cuarta temporada"
                    >
                      ver lista de episodios
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="serieSinopsis">
                    <a href="/es/wiki/Ash" className="mw-redirect" title="Ash">
                      Ash
                    </a>{" "}
                    prosigue en su intento de conseguir las medallas suficientes
                    para participar en la{" "}
                    <a
                      href="/es/wiki/Conferencia_Plateada/Congreso_Plata"
                      title="Conferencia Plateada/Congreso Plata"
                    >
                      Conferencia Plateada/Congreso Plata
                    </a>{" "}
                    derrotando a 3 lideres de gimnasio.
                  </td>
                </tr>
                <tr>
                  <th colSpan={4} className="subtitulo">
                    <a
                      href="/es/wiki/Quinta_temporada"
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
                          href="/es/wiki/Quinta_temporada"
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
                        <a href="/es/wiki/EP212" title="EP212">
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
                      <a href="/es/wiki/EP212" title="EP212">
                        EP212
                      </a>
                    </b>
                  </td>
                  <td>
                    <div className="center">
                      <div className="floatnone" width="140px">
                        <a href="/es/wiki/EP276" title="EP276">
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
                      <a href="/es/wiki/EP276" title="EP276">
                        EP276
                      </a>
                    </b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    Episodios: <b>65</b> (
                    <a
                      href="/es/wiki/Lista_de_episodios_de_la_quinta_temporada"
                      title="Lista de episodios de la quinta temporada"
                    >
                      ver lista de episodios
                    </a>
                    )
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="serieSinopsis">
                    <a href="/es/wiki/Ash" className="mw-redirect" title="Ash">
                      Ash
                    </a>{" "}
                    logra reunir las últimas 3 medallas y participa en la{" "}
                    <a
                      href="/es/wiki/Conferencia_Plateada/Congreso_Plata"
                      title="Conferencia Plateada/Congreso Plata"
                    >
                      Conferencia Plateada/Congreso Plata
                    </a>
                    ,{" "}
                    <a href="/es/wiki/Misty_(anime)" title="Misty (anime)">
                      Misty
                    </a>{" "}
                    regresa a{" "}
                    <a href="/es/wiki/Ciudad_Celeste" title="Ciudad Celeste">
                      Ciudad Celeste
                    </a>{" "}
                    y Ash se dirige a{" "}
                    <a href="/es/wiki/Hoenn" title="Hoenn">
                      Hoenn
                    </a>{" "}
                    únicamente con{" "}
                    <a href="/es/wiki/Pikachu_de_Ash" title="Pikachu de Ash">
                      Pikachu
                    </a>
                    .
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};
export default PokeducatorWikiSeries;
