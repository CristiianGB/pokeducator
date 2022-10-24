import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiNaturalezaStyles.css";
import loading from "../../../assets/img/loading.gif";
import { Context } from "../../store/appContext.jsx";

const PokeducatorWikiNaturaleza = () => {
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
                  src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-2.png"
                  alt="portada Pokeducator Guardería"
                />
              </div>
            </div>
            <div className="row">
              <h1 id="naturaleza">Naturaleza</h1>
              <hr />
            </div>
            <div className="naturaleza descripcion">
              <a href="https://media.vandal.net/m/12-2021/20211216937257_2.jpg.webp">
                <img
                  className="crianza_imagen w-25 mt-4 my-2 mx-2"
                  src="https://media.vandal.net/m/12-2021/20211216937257_2.jpg.webp"
                  alt="imagen sobre la crianza pokemon."
                />
              </a>

              <p>
                La naturaleza (Nature en inglés; 性格 Seikaku en japonés) es un
                atributo introducido en la tercera generación que refleja la
                personalidad individual definida de cada Pokémon. Así, aunque
                dos individuos pertenezcan a la misma especie, pueden tener
                naturalezas diferentes. Es una característica que añade aun más
                variedades y diferencias entre individuos de la misma especie.
              </p>
              <br />
              <p>
                Para conocer a qué naturaleza pertenece un Pokémon, se debe
                consultar la pantalla de estado del mismo en la pantalla de
                datos. Desde Pokémon Esmeralda, si el primer Pokémon del equipo
                tiene la habilidad sincronía hay una probabilidad del 50% de que
                el Pokémon salvaje que aparezca tenga la misma naturaleza.
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
                href="#naturaleza"
              >
                Naturaleza Pokémon
              </a>
            </li>
            <li>
              <a
                id="desplegable"
                onClick={() => setNum(2)}
                className={num == 2 ? "nav-link active" : "nav-link"}
                style={aStyles}
                href="#efectos_en_las_estadisticas"
              >
                Efectos en las estadísticas
              </a>
            </li>
            <li>
              <a
                onClick={() => setNum(3)}
                className={num == 3 ? "nav-link active" : "nav-link"}
                style={aStyles}
                href="#herencia_mediante_crianza"
              >
                Herencia de la naturaleza mediante la crianza Pokémon
              </a>
            </li>
          </ul>
        </nav>
      </div>
            <div className="row">
              <h1 id="lista_de_naturalezas">Lista de naturalezas</h1>
              <hr />
            </div>
            <div className="lista_de_naturalezas descripcion">
              <p>
                Un Pokémon puede pertenecer a alguna de las siguientes 25 clases
                de naturalezas:
              </p>
              <br />
              <ul className="mt-3">
                {store.nature_data.map((object) => (
                  <li className="listaNaturaleza">
                    <strong>{
                      object.names.find(
                        (element) => element.language?.name == "es"
                      ).name
                    }</strong>{" "}
                    ({object.name})
                  </li>
                ))}
              </ul>
              <br />
            </div>
            <br />
            <div className="row">
              <h1 id="efectos_en_las_estadisticas" className="mt-4">
                Efectos en las estadísticas
              </h1>
              <hr />
            </div>
            <div className="efectos_en_las_estadisticas descripcion">
              <p>
                Las naturalezas de los Pokémon afectan principalmente al
                crecimiento de sus estadísticas. Es decir, dependiendo de su
                naturaleza, el Pokémon desarrollará más una estadística y menos
                otra. Sin embargo, hay que tener en cuenta que algunas
                naturalezas son neutras: no tienen ningún efecto, es decir, no
                aumentan ni disminuyen ninguna estadística. El valor real del
                aumento en una estadística es de un 10% (x 1,1 en la estadística
                a nivel 100 con naturaleza favorable). La disminución es también
                de un 10% (x 0,9 en la estadística a nivel 100 con naturaleza
                desfavorable).
              </p>
              <br />
              <p>
                A partir de los juegos Pokémon Oro HeartGold y Plata SoulSilver,
                para saber qué estadísticas suben y cuáles bajan con la
                naturaleza de un Pokémon, basta con echar un vistazo al color de
                letra que aparece en sus estadísticas: la estadística que le sea
                favorable estará en un color rojizo y la estadística
                desfavorable estará en un tono azulado. Si la naturaleza es
                neutra, el color no cambiará.
              </p>
              <br />
              <p>
                Un ejemplo sencillo: en el caso de un Pokémon con naturaleza
                activa, a medida de que vaya subiendo de nivel, su defensa será
                un 10% menor de lo habitual y su velocidad un 10% mayor de lo
                habitual. Por ello, se considera que activa es una naturaleza
                favorable en velocidad y desfavorable en defensa.
              </p>
              <br />
              <p>
                En la siguiente tabla se recogen las estadísticas que se ven
                favorecidas o perjudicadas según la naturaleza a la que
                pertenezca el Pokémon en cuestión:
              </p>
              <br />
              
              <table id="tabla_de_estadisticas" className="wiki text-align-center m-auto">
                <tbody>
                  <tr class="encabezado">
                    <th rowSpan={2}>Naturaleza</th>
                    <th colSpan={6}>Estadísticas</th>
                  </tr>
                  <tr bgcolor="#dbdbff">
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Ataque especial</th>
                    <th>Defensa especial</th>
                    <th>Velocidad</th>
                  </tr>
                  <tr>
                    <td>
                      Fuerte
                      <small>
                        (<i>Hardy</i>)
                      </small>
                    </td>
                    <td bgcolor="#f5f4f4" colspan="5">
                      Neutral
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Osada
                      <small>
                        (<i>Bold</i>)
                      </small>
                    </td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Modesta
                      <small>
                        (<i>Modest</i>)
                      </small>
                    </td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Serena
                      <small>
                        (<i>Calm</i>)
                      </small>
                    </td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Miedosa
                      <small>
                        (<i>Timid</i>)
                      </small>
                    </td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                  </tr>
                  <tr bgcolor="#dbdbff">
                    <th>Naturaleza</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Ataque especial</th>
                    <th>Defensa especial</th>
                    <th>Velocidad</th>
                  </tr>
                  <tr>
                    <td>
                      Huraña
                      <small>
                        (<i>Lonely</i>)
                      </small>
                    </td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Dócil
                      <small>
                        (<i>Docile</i>)
                      </small>
                    </td>
                    <td bgcolor="#f5f4f4" colspan="5">
                      Neutral
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Afable
                      <small>
                        (<i>Mild</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Amable
                      <small>
                        (<i>Gentle</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Activa
                      <small>
                        (<i>Hasty</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                  </tr>
                  <tr bgcolor="#dbdbff">
                    <th>Naturaleza</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Ataque especial</th>
                    <th>Defensa especial</th>
                    <th>Velocidad</th>
                  </tr>
                  <tr>
                    <td>
                      Firme
                      <small>
                        (<i>Adamant</i>)
                      </small>
                    </td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Agitada
                      <small>
                        (<i>Impish</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Tímida
                      <small>
                        (<i>Bashful</i>)
                      </small>
                    </td>
                    <td bgcolor="#f5f4f4" colspan="5">
                      Neutral
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Cauta
                      <small>
                        (<i>Careful</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Alegre
                      <small>
                        (<i>Jolly</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                  </tr>
                  <tr bgcolor="#dbdbff">
                    <th>Naturaleza</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Ataque especial</th>
                    <th>Defensa especial</th>
                    <th>Velocidad</th>
                  </tr>
                  <tr>
                    <td>
                      Pícara
                      <small>
                        (<i>Naughty</i>)
                      </small>
                    </td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Floja
                      <small>
                        (<i>Lax</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Alocada
                      <small>
                        (<i>Rash</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>
                      Rara
                      <small>
                        (<i>Quirky</i>)
                      </small>
                    </td>
                    <td bgcolor="#f5f4f4" colspan="5">
                      Neutral
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Ingenua
                      <small>
                        (<i>Naive</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                    <td bgcolor="#cafda4">Sube</td>
                  </tr>
                  <tr bgcolor="#dbdbff">
                    <th>Naturaleza</th>
                    <th>Ataque</th>
                    <th>Defensa</th>
                    <th>Ataque especial</th>
                    <th>Defensa especial</th>
                    <th>Velocidad</th>
                  </tr>
                  <tr>
                    <td>
                      Audaz
                      <small>
                        (<i>Brave</i>)
                      </small>
                    </td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                  </tr>
                  <tr>
                    <td>
                      Plácida
                      <small>
                        (<i>Relaxed</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                  </tr>
                  <tr>
                    <td>
                      Mansa
                      <small>
                        (<i>Quiet</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td>--</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                  </tr>
                  <tr>
                    <td>
                      Grosera
                      <small>
                        (<i>Sassy</i>)
                      </small>
                    </td>
                    <td>--</td>
                    <td>--</td>
                    <td>--</td>
                    <td bgcolor="#cafda4">Sube</td>
                    <td bgcolor="#fdb7a4">Baja</td>
                  </tr>
                  <tr>
                    <td>
                      Seria
                      <small>
                        (<i>Serious</i>)
                      </small>
                    </td>
                    <td bgcolor="#f5f4f4" colspan="5">
                      Neutral
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="row">
                <h1 id="herencia_mediante_crianza">Herencia de la naturaleza mediante crianza</h1><hr />
              </div>
              <div className="herencia_mediante_crianza descripcion">
                <p>En la crianza Pokémon, desde Pokémon Esmeralda, si la madre lleva equipada una piedra eterna, la probabilidad de que la cría herede la naturaleza de la madre será de un 50%. Si la crianza es con un Ditto y es éste quien lleva la piedra eterna, la probabilidad será de un 50% de que la naturaleza la herede de Ditto, incluso si el otro Pokémon también lleva una piedra eterna. Eso sí, la piedra eterna solo tiene efecto si los padres vienen de juegos en el mismo idioma.</p><br />
                <p>A partir de Pokémon Oro HeartGold y Pokémon Plata SoulSilver, la piedra eterna puede llevarla cualquiera de los dos padres y la naturaleza podrá heredarse de quien la lleve equipada en un 50%. Si ambos la llevan equipada, la probabilidad se reparte a partes iguales entre heredar la naturaleza del padre, de la madre, u otra cualquiera (aproximadamente el 33% de probabilidades para cada opción), por lo que si ambos tienen la misma naturaleza, la probabilidad de que sea la de sus padres aumentaría al 66%. Aquí se suma un segundo requisito para que la piedra eterna tenga efecto: que los padres tengan el mismo entrenador original (no puede estar alguno intercambiado del entrenador de otro videojuego).</p><br />
                <p>Por último, desde Pokémon Negro 2 y Pokémon Blanco 2 y en los juegos de la sexta generación, la cría siempre heredará la naturaleza del padre que lleve una piedra eterna equipada (es decir, en este caso la probabilidad sería del 100%). Y si ambos llevan la piedra eterna, la naturaleza será la de uno de los dos padres con la misma probabilidad para cada uno (50%).</p><br />
              </div>
              <br />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PokeducatorWikiNaturaleza;
