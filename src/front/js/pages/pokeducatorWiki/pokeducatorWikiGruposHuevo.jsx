import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiGruposHuevoStyles.css";
import { Context } from "../../store/appContext.jsx";
import { useParams } from "react-router-dom";
import loading from "../../../assets/img/loading.gif";
import { mergeWithCustomize } from "webpack-merge";



const PokeducatorWikiGruposHuevo = () => {
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(true);
  const [num, setNum] = useState(0)
  const params = useParams();

  let time = [7000, 6000, 4000, 5000];
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
          <div className="col-12 my-4">
          <img
            className="img-fluid w-100 portada"
            src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-1-750x315.png"
            alt="portada Pokeducator Crianza"
          />
        </div>
            <h1 id="grupos_huevo">Grupos Huevo</h1>
            <hr />
          </div>
          <div className="grupos_huevo descripcion">
            <p>
              Los grupos huevo (Egg Group en inglés, タマゴグループ en japonés)
              son categorías de determinados <a className="links" href="/pokemons">Pokémon</a> que son compatibles a la
              hora de criar entre ellos, es decir, que el resultado será un
              huevo. Si dos Pokémon no pertenecen al mismo grupo, entonces no
              son compatibles y no pueden dejar un huevo. Un Pokémon puede
              pertenecer a varios grupos huevo.
            </p>
            <br />
            <div className="row">
              <div className="col-8">
              <div className="col-sm-5 m-5 ms-3">
                <nav id="toc" data-toggle="toc" className="sticky-top">
                  <ul className="nav navbar-nav">
                    <li>
                      <a
                        onClick={() => setNum(1)}
                        className={num == 1 ? "nav-link active" : "nav-link"}
                        style={aStyles}
                        href="#grupos_huevo"
                      >
                        Grupos huevo
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setNum(2)}
                        className={num == 2 ? "nav-link active" : "nav-link"}
                        style={aStyles}
                        href="#cadenas_de_cria"
                      >
                        Cadenas de cría
                      </a>
                    </li>
                    <li>
                      <a
                        id="desplegable"
                        onClick={() => setNum(3)}
                        className={num == 3 ? "nav-link active" : "nav-link"}
                        style={aStyles}
                        href="#desplegable"
                      >
                        Tipos de grupos huevo
                      </a>
                      <ul className="nav navbar-nav">
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#ninguno"
                          >
                            Ninguno.
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" style={subStyles} href="#ditto">
                            Ditto.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#planta"
                          >
                            Planta.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#bicho"
                          >
                            Bicho.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#volador"
                          >
                            Volador.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#humanoide"
                          >
                            Humanoide.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#mineral"
                          >
                            Mineral.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#amorfo"
                          >
                            Amorfo.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#campo"
                          >
                            Campo.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#agua1"
                          >
                            Agua 1.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#agua2"
                          >
                            Agua 2.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#agua3"
                          >
                            Agua 3.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#monstruo"
                          >
                            Monstruo.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#hada"
                          >
                            Hada.
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            style={subStyles}
                            href="#dragon"
                          >
                            Dragón.
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>

              </div>
              <div className="col-4">
                <img className="float-end img-fluid" src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6f/latest/20070718201559/Huevos_Pok%C3%A9mon.png" alt="Huevos Pokémon" />
              </div>
              
            </div>
            
              <br />
          </div>
          <div className="row">
            <h1 id="cadenas_de_cria">Cadenas de cría</h1>
            <hr />
          </div>
          <div className="cadenas_de_cria descripcion">
            <p>
              El hecho de que varios <a className="links" href="/pokemons">Pokémon</a> pertenezcan a un mismo grupo huevo
              da lugar a los movimientos huevo, que son aquellos que
              un Pokémon puede heredar del padre aunque no los conozca la madre.
              En los <a className="links" href="/wiki/juegos-pokemon">videojuegos</a> de la sexta generación (X/Y/RΩ/Zα), los <a className="links" href="/movimientos">movimientos</a> se pueden heredar tanto del padre como de la madre.
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
              Además, el hecho de que varios <a className="links" href="/pokemons">Pokémon</a> puedan pertenecer a dos
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
              De este modo, aunque <a className="links" href="/pokemon/304">Aron</a> y <a className="links" href="/pokemon/23">Ekans</a> no pueden criar directamente por
              ser de distintos grupos huevo, el segundo puede heredar el
              movimiento Cola férrea del primero en dos generaciones, usando a <a className="links" href="/pokemon/32">Nidoram</a> como intermediario ya que pertenece a ambos grupos.
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
            <h3 id="ninguno">Ninguno</h3>
            <br />
            <p>
              Los Pokémon que pertenecen a este grupo son los que no pueden
              criar; es decir, de ninguna manera tendrían un huevo, ni siquiera
              con un <a className="links" href="/pokemon/132">Ditto</a>. Son los Pokémon legendarios (excepto <a className="links" href="/pokemon/489">Phione</a> y <a className="links" href="/pokemon/490">Manaphy</a>), Ultraentes, Pokémon bebés, los Unown y, también se
              incluyen a <a className="links" href="/pokemon/30">Nidorina</a> y <a className="links" href="/pokemon/31">Nidoqueen</a> (la razón es que Nidorina y
              Nidoqueen tienen un correspondiente en macho y por lo tanto, se
              usa a los machos).
            </p>
            <br />
            <p>
              A partir de <a className="links" href="/wiki/juegos-pokemon">Pokémon X y Pokémon Y</a>, los Pokémon salvajes
              pertenecientes a este grupo huevo tienen asegurados 31 IVs en al
              menos 3 estadísticas. En <a className="links" href="/wiki/juegos-pokemon">Pokémon Rubí Omega y Pokémon Zafiro Alfa</a>,
              esta regla solo se aplica a los legendarios.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("no-eggs") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={pokemon.img}
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
            <br />
            <h3 id="ditto">Ditto</h3>
            <br />
            <p>
              Ditto es un Pokémon que, por su capacidad de transformarse en
              cualquier Pokémon, puede criar con cualquier Pokémon menos con los
              clasificados en "ninguno" ni con otro Ditto.
            </p>{" "}
            <br />
            <div className="ditto row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("ditto") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="planta">Planta</h3>
            <br />
            <p>
              Este es el grupo 1. Exceptuando a Comfey, está formado en su gran
              mayoría por Pokémon de tipo planta.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen también a los grupos
              huevo campo, monstruo, agua 1, bicho, humanoide, hada, mineral y
              amorfo.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("plant") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="bicho">Bicho</h3>
            <br />
            <p>
              Este es el grupo 2. Está formado por Pokémon de tipo bicho,
              exceptuando a Drapion, Trapinch, Vibrava, Flygon, Gligar y
              Gliscor, los cuales aunque posean la apariencia física de
              insectos, no son tipo bicho.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen también a los grupos
              huevo planta, agua 1, agua 3, humanoide y mineral.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("bug") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="volador">Volador</h3>
            <br />
            <p>
              Este es el grupo 3. Está formado por 45 Pokémon de tipo volador.
            </p>
            <br />
            <p>
              Algunos de los Pokémon que pertenecen a este grupo pertenecen a su
              vez a los grupos huevo campo, agua 1, agua 3, dragón y hada.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("flying") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="humanoide">Humanoide</h3>
            <br />
            <p>
              Este es el grupo 4. Está formado por Pokémon que poseen una forma
              similar a los humanos. Por lo general los Pokémon de este grupo
              son de tipo psíquico, lucha, siniestro o normal.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen también a los grupos
              huevo campo, planta y bicho.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("humanshape") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="mineral">Mineral</h3>
            <br />
            <p>
              Este es el grupo 5. Está formado por Pokémon de tipo roca, tierra,
              hielo y acero. Se incluye a Shedinja (Por ser la piel mudada de
              Ninjask) y a Voltorb con Electrode por ser una especie de Poké
              Ball. Porygon y sus evoluciones se incluyen por estar hechos de
              materiales sintéticos, al igual que el acero. Yamask y Cofagrigus
              son incluidos también por poseer partes de piedra, a pesar de no
              ser tipo roca.
            </p>
            <br />
            <p>
              Muchos Pokémon de este grupo no tienen género, por lo que solo
              pueden criar con Ditto.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo planta, bicho, hada y amorfo.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("mineral") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="amorfo">Amorfo</h3>
            <br />
            <p>
              Este es el grupo 6. Está formado por Pokémon que carecen de una
              forma específica con la cual poder hacer una comparación con otros
              animales de la vida real. Suelen ser del tipo psíquico, veneno y
              fantasma. Slugma, Shellos, Tynamo y sus evoluciones son incluidos
              aquí a causa de sus formas semejantes a gusanos. La familia de
              Ralts esta aquí por razones desconocidas.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen también a los grupos
              huevo planta, agua 1, hada y mineral.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("indeterminate") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="campo">Campo</h3>
            <br />
            <p>
              Este es el grupo 7. Está formado por Pokémon que suelen caminar en
              tierra firme y algunos en agua, y contiene especies de una gran
              variedad de tipos de Pokémon. Es el más amplio con diferencia.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo monstruo, planta, dragón, agua 1, agua 2, volador, humanoide
              y hada.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("ground") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="agua1">Agua 1</h3>
            <br />
            <p>
              Este es el grupo 8. Está formado por una parte de los Pokémon de
              tipo agua inspirados en anfibios, mamiferos y reptiles. La mayoría
              poseen extremidades que les permite caminar en tierra firme.
              Exceptuando a Alomomola, Clamperl, Dratini, Dragonair, Masquerain
              y Milotic, de entre los cuales, la mayoría pertenece a este grupo
              a causa de sus preevoluciones y evoluciones.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo monstruo, campo, planta, bicho, dragón, agua 2, agua 3,
              volador, hada y amorfo.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("water1") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="agua2">Agua 2</h3>
            <br />
            <p>
              Este es el grupo 9. Está formado por una parte de los Pokémon de
              tipo agua. La mayoría carecen de extremidades excepto las aletas.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen al mismo tiempo a los
              grupos huevo agua 1, campo y dragón.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("water2") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="agua3">Agua 3</h3>
            <br />
            <p>
              Este es el grupo 10. Está formado por una parte de los Pokémon de
              tipo agua, la mayoría son artrópodos y fósiles. Los artrópodos son
              un grupo de invertebrados dentro de los cuales encontramos los
              crustáceos y los arácnidos, siendo esta la razón de la inclusión
              de Drapion dentro de este grupo.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo agua 1, bicho y volador.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("water3") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="monstruo">Monstruo</h3>
            <br />
            <p>
              Este es el grupo 11. Está formado por Pokémon que tienen
              apariencia de bestia, dinosaurio o reptil.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo campo, agua 1, dragón y planta.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("monster") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="hada">Hada</h3>
            <br />
            <p>
              Este es el grupo 12. Está formado por Pokémon considerados "hadas"
              por su forma tierna y encantadora; a partir de la sexta
              generación, algunos de estos Pokémon son precisamente de tipo
              hada.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen también a los grupos
              huevo campo, agua 1, planta, mineral, volador y amorfo.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("fairy") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
            <h3 id="dragon">Dragón</h3>
            <br />
            <p>
              Este es el grupo 13. Está formado por Pokémon de tipo dragón o
              aquellos que tienen apariencia de dragón, lagartija, serpiente o
              reptiles por el estilo, con excepción de Feebas y Magikarp, que
              están por sus evoluciones.
            </p>
            <br />
            <p>
              Algunos Pokémon de este grupo pertenecen a su vez a los grupos
              huevo campo, monstruo, agua 1, agua 2 y volador.
            </p>
            <br />
            <div className="row">
              {store.pokemon_data.map((pokemon, i) =>
                pokemon.group_name.includes("dragon") ? (
                  <>
                    <div className="col mx-1 my-1">
                      <a
                        className="links"
                        href={`/pokemon/${pokemon.id}`}
                      >
                        <p>{pokemon.name}</p>
                      </a>

                      <a
                        href={`/pokemon/${pokemon.id}`}
                        className="image"
                        title=""
                      >
                        <img
                          alt=""
                          src={
                            pokemon.img
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
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default PokeducatorWikiGruposHuevo;
