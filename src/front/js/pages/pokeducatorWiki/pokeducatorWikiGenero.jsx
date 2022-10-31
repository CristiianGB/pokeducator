import React, { useState } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiGeneroStyles.css";
import genero_señalado_img from "../../../assets/img/genero_señalado_img.png";
import loading from "../../../assets/img/loading.gif";

const PokeducatorWikiGenero = () => {
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
                  src="https://i.ytimg.com/vi/_WoBdkdXii4/maxresdefault.jpg"
                  alt="portada Pokeducator Crianza"
                />
              </div>
            </div>
            <div className="row">
              <h1 id="genero">Género</h1>
              <hr />
            </div>
            <div className="genero descripcion">
              <img
                className="genero_imagen mt-2 my-2 mx-2"
                src={genero_señalado_img}
                alt="imagen sobre el genero pokemon."
              />
              <p>
                El género (Gender en inglés, 性別 Seibetsu en japonés) en{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                fue introducido en la segunda generación, en los{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  videojuegos
                </a>{" "}
                Pokémon Oro y Plata, este te permite saber si el{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                es macho o hembra. Más tarde se introdujo el género en los
                protagonistas de los{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  videojuegos
                </a>
                , en Pokémon Cristal. El género permite que los{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                con{" "}
                <a className="links" href="/wiki/grupos-huevo">
                  Grupo Huevo
                </a>{" "}
                compatibles puedan reproducirse, el resultado son las crías{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>
                . Esto solo es posible en una guardería Pokémon. Por lo tanto si
                un{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                tiene género y otro no y están depositados en la guardería no
                pueden criar, excepto con{" "}
                <a className="links" href="/pokemon/132">
                  Ditto
                </a>
                .
              </p>

              <br />

              <p>
                El género masculino se representa con el signo{" "}
                <img
                  className="generoimg"
                  src="https://static.wikia.nocookie.net/espokemon/images/b/b2/Macho.png"
                  alt="genero_macho"
                />{" "}
                y el femenino se representa con el signo{" "}
                <img
                  className="generoimg"
                  src="https://static.wikia.nocookie.net/espokemon/images/a/a0/Hembra.png"
                  alt="genero_hembra"
                />
                .
              </p>
              <img
                className="genero_imagen w-25 h-25 mb-3 mt-2 my-2 mx-2"
                src="https://static.wikia.nocookie.net/espokemon/images/2/28/Informaci%C3%B3n_de_Bidoof.png"
                alt="imagen sobre el crianza pokemon."
              />
              <br />
              <br />
              <br />
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
                      href="#genero"
                    >
                      Género Pokémon
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
                      En los videojuegos
                    </a>
                    <ul className="nav navbar-nav">
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#casos_especiales"
                        >
                          Casos especiales.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#importancia"
                        >
                          Importancia.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#diferencias_de_genero"
                        >
                          Diferencias de genero.
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link"
                          style={subStyles}
                          href="#obtener_otro_genero"
                        >
                          Obtener otro genero.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      onClick={() => setNum(3)}
                      className={num == 3 ? "nav-link active" : "nav-link"}
                      style={aStyles}
                      href="#en_el_anime"
                    >
                      En el anime
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="row">
              <h1 id="en_los_videojuegos">En los videojuegos</h1>
              <hr />
            </div>
            <div className="en_los_videojuegos descripcion">
              <p>
                La gran mayoría de los{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                pueden verse en los géneros femenino o masculino. Aunque existe
                un porcentaje que regula la posibilidad de que esto suceda. En
                la gran mayoría la probabilidad de encontrarse con Pokémon
                machos o hembras es del 50%, aunque en algunos{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                el porcentaje de un género puede ser muy bajo, como en los
                Pokémon iniciales, donde la posibilidad de que sea hembra es de
                un 12,5% solo, frente al 87,5% de que sea macho.
              </p>

              <br />
              <p>
                Durante la{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  segunda generación
                </a>
                , los Pokémon macho tenían IVs más altos en su ataque, frente a
                las hembras, que los tenían más bajos. Esto cambió en
                generaciones posteriores, donde el género no afecta a los IVs.
              </p>
              <br />
              <h3 id="casos_especiales">Casos especiales</h3>
              <br />
              <img
                className="genero_imagen mt-2 my-2 mx-2"
                src="https://static.wikia.nocookie.net/espokemon/images/b/b7/Pok%C3%A9mon_enamorado.png/"
                alt="imagen sobre el ataque atraccion."
              />
              <p>
                Sin embargo existen casos especiales donde el{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                puede pertenecer solo a un género, es decir, donde el porcentaje
                del género opuesto es 0%, como Tauros que solo pueden ser macho
                o Miltank que solo puede ser hembra. Estos casos se extienden
                hasta el hecho de que Azurill sea capaz de cambiar de género al
                evolucionar, puesto que en este{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                el porcentaje es de 25% para ser macho y 75% para ser hembra,
                pero al evolucionar la cosa cambia porque los porcentajes están
                a partes iguales (50% cada uno). También existen casos de{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                que no tienen género (probablemente porque son{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                artificiales), un ejemplo de ello es{" "}
                <a className="links" href="/pokemon/343">
                  Baltoy
                </a>
                , un{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                de la especie muñeco de barro creado por humanos en la
                antigüedad.
              </p>

              <br />
              <p>
                En el último caso están los Pokémon legendarios,{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                que por su condición son únicos y por tanto no pueden
                reproducirse al no tener una pareja. Existen casos especiales,
                Pokémon legendarios con género, como Latias y Latios, que aunque
                comparten la especie y sus géneros son compatibles, tampoco
                pueden reproducirse.
              </p>
              <br />
              <h3 id="importancia">Importancia</h3>
              <br />
              <img
                className="genero_imagen float-start h-25 mt-2 my-2 mx-2"
                src="data:image/jpeg;base64,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"
                alt="imagen sobre el ataque atraccion."
              />
              <p>
                La importancia del género va más allá de la reproducción.
                Algunos Pokémon como{" "}
                <a className="links" href="/pokemon/415">
                  Combee
                </a>
                ,{" "}
                <a className="links" href="/pokemon/281">
                  Kirla
                </a>
                ,{" "}
                <a className="links" href="/pokemon/361">
                  Snorunt
                </a>
                ,{" "}
                <a className="links" href="/pokemon/757">
                  Salandit
                </a>{" "}
                y{" "}
                <a className="links" href="/pokemon/412">
                  Burny
                </a>{" "}
                solo evolucionan si son de un determinado género. En el caso de{" "}
                <a className="links" href="/pokemon/415">
                  Combee
                </a>{" "}
                y{" "}
                <a className="links" href="/pokemon/757">
                  Salandit
                </a>{" "}
                solo las hembras pueden evolucionar. En el caso de{" "}
                <a className="links" href="/pokemon/281">
                  Kirla
                </a>
                , a partir de la{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  cuarta generación
                </a>
                , evolucionará a{" "}
                <a className="links" href="/pokemon/475">
                  Gallade
                </a>{" "}
                solo si es macho y utilizando una piedra alba, pero puede
                evolucionar a{" "}
                <a className="links" href="/pokemon/282">
                  Gardevoir
                </a>{" "}
                siendo hembra o macho.{" "}
                <a className="links" href="/pokemon/361">
                  Snorunt
                </a>{" "}
                puede evolucionar a{" "}
                <a className="links" href="/pokemon/362">
                  Glalie
                </a>{" "}
                siendo macho o hembra, pero evolucionará a{" "}
                <a className="links" href="/pokemon/478">
                  Froslass
                </a>{" "}
                solo si es hembra y utilizando una piedra alba.{" "}
                <a className="links" href="/pokemon/412">
                  Burmy
                </a>{" "}
                evolucionará a{" "}
                <a className="links" href="/pokemon/414">
                  Mothim
                </a>{" "}
                si es macho y a{" "}
                <a className="links" href="/pokemon/413">
                  Wormadam
                </a>{" "}
                si es hembra. Un caso excepcional es del Pokémon{" "}
                <a className="links" href="/pokemon/678">
                  Meowstic
                </a>
                , cuyas diferencias de género, además de afectar a su
                apariencia, también repercuten en sus{" "}
                <a className="links" href="/movimientos">
                  movimientos
                </a>{" "}
                y{" "}
                <a className="links" href="/habilidades">
                  habilidades
                </a>
                . Así, por ejemplo, las hembras tienen tenacidad como habilidad
                y los machos bromista.
              </p>

              <br />
              <p>
                También, el género influye en los combates, pues puede afectar
                en cambios de estado, como por ejemplo el movimiento atracción
                que puede dejar enamorado al oponente si es del género opuesto,
                haciendo que fallen la mayoría de sus ataques. Otra manera en
                que el género puede afectar en los combates, es cuando algún{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                tiene como habilidad rivalidad, esta aumenta un 25% el ataque si
                el{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                es del mismo género.
              </p>
              <br />
              <p>
                También hay que tomar en cuenta que si usas una Amor Ball, hay
                mayor posibilidad de capturar al{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                si es del género opuesto al de tu
                <a className="links" href="/pokemons">
                  Pokémon
                </a>
                .
              </p>
              <br />
              <h3 id="diferencias_de_genero">Diferencias de género</h3>
              <br />
              <p>
                A partir de la{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  cuarta generación
                </a>{" "}
                los Pokémon macho guardan pequeñas diferencias físicas con las
                hembras, las diferencias entre ambos pueden ser significativas:
                la piel de{" "}
                <a className="links" href="/pokemon/449">
                  Hippopotas
                </a>{" "}
                es de color diferente según sea su género; otras no tanto: un{" "}
                <a className="links" href="/pokemon/3">
                  Venusaur
                </a>{" "}
                hembra se diferencia de uno macho por el pequeño bulbo que tiene
                en su flor. En total 98{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                tienen diferencias de género.
              </p>
              <br />
              <h3 id="obtener_otro_genero">Obtener otro género</h3>
              <br />
              <p>
                En ciertos casos los{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                que puedes obtener son solo de un género en específico, como
                sucede con los intercambios del objeto perdido de{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  Pokémon Negro y Pokémon Blanco 2
                </a>
                . Si tu protagonista es chica te darán solo Pokémon macho, si es
                chico te darán solo Pokémon hembra. Uno de estos es{" "}
                <a className="links" href="/pokemon/280">
                  Ralts
                </a>
                , ya que su género es un factor importante para poder
                evolucionarlo a un{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                en específico (macho + piedra alba ={" "}
                <a className="links" href="/pokemon/475">
                  Gallade
                </a>
                ). Para obtener un{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                con género distinto podemos capturar un{" "}
                <a className="links" href="/pokemon/132">
                  Ditto
                </a>{" "}
                y dejarlos en la{" "}
                <a className="links" href="/wiki/guarderia-pokemon">
                  Guardería Pokémon
                </a>
                , entonces estos tendrán un huevo Pokémon y de ahí, el que
                eclosione, podrá ser macho (♂) o hembra (♀).
              </p>
              <br />
            </div>
            <div className="row">
              <h1 id="en_el_anime">En el anime</h1>
              <hr />
            </div>
            <div className="en_el_anime descripcion">
              <p>
                En el anime el género de un{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                también se hace presente, por ejemplo, el{" "}
                <a className="links" href="/pokemon/427">
                  Buneary
                </a>{" "}
                de Dawn/Maya tiene que ser hembra porque se siente atraída por
                el{" "}
                <a className="links" href="/pokemon/25">
                  Pikachu
                </a>{" "}
                de Ash. Otros casos similares han sucedido también como con el{" "}
                <a className="links" href="/pokemon/341">
                  Corphish
                </a>{" "}
                de Ash que se enamoró de una{" "}
                <a className="links" href="/pokemon/303">
                  Mawile
                </a>
                , y el{" "}
                <a className="links" href="/pokemon/271">
                  Lombre
                </a>{" "}
                de Brock. También se puede suponer que el{" "}
                <a className="links" href="/pokemon/424">
                  Ambipom
                </a>{" "}
                de Dawn/Maya es hembra, pues en un capítulo de la{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  décima temporada
                </a>
                , ¡Marcha en el barco a vapor! (ES) / ¡Viaje en el barco de
                vapor! (HA) ‹№›, cuando sube al barco se viste con un vestido,
                al igual que el{" "}
                <a className="links" href="/pokemon/440">
                  Happiny
                </a>{" "}
                de Brock (pero{" "}
                <a className="links" href="/pokemon/440">
                  Happiny
                </a>
                ,{" "}
                <a className="links" href="/pokemon/113">
                  Chansey
                </a>{" "}
                y{" "}
                <a className="links" href="/pokemon/242">
                  Blissey
                </a>{" "}
                sólo pueden ser hembras), mientras que los otros{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                no se visten.
              </p>
              <br />
              <p>
                Un caso que ha generado gran debate es una cría de{" "}
                <a className="links" href="/pokemon/249">
                  Lugia
                </a>{" "}
                que apareció en la{" "}
                <a className="links" href="/wiki/juegos-pokemon">
                  quinta temporada
                </a>
                , esto entraría en conflicto con lo anterior, ya que los Pokémon
                legendarios no pueden criar ni reproducirse.
              </p>
              <br />
              <p>
                Además en el anime también han aparecido huevos Pokémon, lo que
                confirmaría la existencia de los géneros.
              </p>
              <br />
              <div className="row">
                <div className="card-deck d-flex justify-content-center">
                  <div className="card cardGenero">
                    <a href="https://static.wikia.nocookie.net/espokemon/images/7/77/EP478_Pikachu_con_Buneary.png/">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/7/77/EP478_Pikachu_con_Buneary.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardBodyGenero details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P01"
                      >
                        <h3 className="card-title ">
                          La Buneary de Dawn/Maya ruborizada ante la presencia
                          del Pikachu de Ash.
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="card cardGenero">
                    <a href="https://static.wikia.nocookie.net/espokemon/images/f/f3/EP508_Buneary%2C_Happiny_y_Aipom_en_la_fiesta.png/">
                      <img
                        className=""
                        src="https://static.wikia.nocookie.net/espokemon/images/f/f3/EP508_Buneary%2C_Happiny_y_Aipom_en_la_fiesta.png/"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body cardBodyGenero details">
                      <a
                        className="linkCard"
                        href="https://pokemon.fandom.com/es/wiki/P01"
                      >
                        <h3 className="card-title ">
                          Pokémon disfrazados con vestidos.
                        </h3>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </>
      )}
    </>
  );
};

export default PokeducatorWikiGenero;
