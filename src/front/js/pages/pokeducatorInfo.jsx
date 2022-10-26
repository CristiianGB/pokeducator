import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorInfoStyles.css";
import loading from "../../assets/img/loading.gif";
import pokeducator_letras from "../../assets/img/pokeducator_letras.png";
import pokeducatorDemo from "../../assets/img/pokeducatorDemo.gif";

const PokeducatorInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

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
                  className="centred img-fluid w-100 portadaInfo lazyloaded"
                  src={pokeducator_letras}
                  alt="portada Pokeducator Crianza"
                />
              </div>
            </div>
            <br />
            <div className="text-center">
              <h1>Bienvenidos a Pokeducator!</h1>
              <hr />
            </div>
            <div className="pokeducator descripcion text-center">
              <p>
                Pokeducator es un proyecto en el cual nos centramos en la
                creación de{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>{" "}
                únicos. A través de Pokeducator podremos crear al espécimen
                definitivo teniendo en cuenta todas sus estadísticas, ¿Serás
                capaz de crear al mejor{" "}
                <a className="links" href="/pokemons">
                  Pokémon
                </a>
                ?
              </p>
              <br />
              <blockquote className="bg bg-light">
                {" "}
                <i>
                  Cuenta una leyenda que un huevo habitó en la nada y al
                  eclosionar éste, nació{" "}
                  <a className="links" href="/pokemon/493">
                    Arceus
                  </a>
                  , considerado el Pokémon creador o Pokémon alfa; con sus 1.000
                  brazos dio forma al mundo y creó al resto de los Pokémon.
                </i>{" "}
              </blockquote>
            </div>
            <div className="row">
              <h1>Funcionalidad</h1>
            </div>
            <div className="funcionalidad descripcion">
              <p>
                Como ya hemos comentado la funcionalidad de esta web es crear al
                Pokémon más fuerte. ¿Que herramientas tenéis? <br />
                En Pokeducator hemos creado la <a className="links" href="/fusion">máquina de fusión</a> en la cual podréis tener vuestras mejores creaciones Pokémon. Podéis fusionar lo que se os ocurra, tanto <a className="links" href="/pokemons">Pokémon</a> de la serie original ( hasta octava generación ) como volver a fusionar vuestras propias creaciones. <br />
                Tened en cuenta que después estas creaciones podrán ser votadas por la comunidad y decidir cual será el espécimen más poderosos.
              </p><br />
              <div className="row">
                <h3>Aspectos a tener en cuenta</h3><br />
              </div>
              <div className="descripcion">
                
                <p>Recordad entrenadores, los <a className="links" href="/pokemons">Pokémon</a> esconden muchas características distintas: <br />
                Estas van desde las principales, como podrían ser: ataque, defensa, HP ( en inglés "Health Points" - Puntos de Salud ). Hasta las características más escondidas como por ejemplo: <a className="links" href="/wiki/naturaleza-pokemon">naturaleza</a>, <a className="links" href="/wiki/movimientos">movimientos huevo</a> o <a className="links" href="/habilidades">habilidades</a> heredadas. Estos tres últimos atributos esconden infinitas posibilidades. Por ejemplo las <a className="links" href="/wiki/naturaleza-pokemon">naturalezas</a>, además de describir la actitud de un <a className="links" href="/pokemons">Pokémon</a> también influyen en sus estadísticas principales, siendo capaces así de alcanzar un nuevo nivel en cuanto a una de ellas se refiere. </p><br /><br />
                <p>Pero no te preocupes, tanto si eres un entrenador experimentado como alguien que acaba de empezar en este mundo, en Pokeducator te damos las herramientas necesarias para que te conviertas en el mejor Maestro Pokémon! <br />
                Para ayudarte a encontrar tu camino tenemos a tu disposición cualquier herramienta necesaria para la <a className="links" href="/wiki/crianza-pokemon">Crianza Pokémon</a> además de las infinitas pruebas a realizar en la <a className="links" href="/fusion">máquina de fusión</a> antes de crear al mejor Pokémon. </p>
              </div>
              <div className="row">
                <h3>Herramientas</h3><br />
              </div>
              <div className="herramientas descripcion">
                Entremos en materia entrenador... Aquí es donde se decidirá si te convertirás o no en Maestro Pokémon. <br />
                De acuerdo a nuestros estudios mas recientes hemos puesto a vuestra disposición una base de datos de <a className="links" href="/pokemons">Pokémon</a> en la cual encontrarás información sobre todos los <a className="links" href="/pokemons">Pokémon</a> existentes hasta el día de hoy. Además de una información general podrás inspeccionar la Pokédex en busca de sus características, habilidades, ataques o tipos. <br />
                Aparte de esta base de datos, también os ofrecemos una información detallada de <a className="links" href="/habilidades">habilidades</a>, <a className="links" href="/movimientos">movimientos</a> y <a className="links" href="/objetos">objetos</a>. En la cual podréis averiguar cosas como los movimientos heredados ( tales como los <a className="links" href="/movimientos">movimientos huevo</a> mencionados en la <a className="links" href="/wiki/crianza-pokemon">Crianza Pokémon</a> ), los efectos de las <a className="links" href="/habilidades">habilidades</a> de cada <a className="links" href="/pokemons">Pokémon</a> o los de cada <a className="links" href="/objetos">objeto</a> que pueden agregar funciones especiales a la cria resultante. <br />
                <br />
                <p>Además de todas estas herramientas también tendréis a disposición... MI DIARIO PERSONAL! Es decir, la <a className="links" href="/wiki">wiki</a> de Pokeducator! <br />
                Esta contiene información detallada de todos los aspectos que hay que conocer para llevar a cabo la fusión perfecta. <br />
                Información que me ha llevado años recolectar, como por ejemplo: los <a className="links" href="/wiki/grupos-huevo">Grupos Huevo</a>, todos los aspectos de la <a className="links" href="/wiki/crianza-pokemon">Crianza Pokémon</a> e incluso las diferencias de <a className="links" href="/wiki/genero-pokemon">género</a> de cada espécimen <a className="links" href="/pokemons">Pokémon </a> conocido.</p><br /><br />
                <p>Echa un vistazo a la <a className="links" href="/wiki">Wiki</a> de Pokeducator!</p>
              </div>
              <div className="container align-items-center">
          <img className="centred img-fluid gifDemo" title="Demostración Pokeducator!" src={pokeducatorDemo} alt="Cargando..." />
        </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <div className="row">
              <p className="agradecimientosTitulo">Agradecimientos: </p><br />
            </div>
            <div className="descripcion">
              <p className="agradecimientos">Pokeducator! ha sido creada sin ánimo de lucro. No está afiliada, asociada ni patrocinada o aprobada por ©Niantic (desarrolladora de Pokémon Go) o ©Pokémon Company. Ha sido desarrollada para el entretenimiento y la diversión de los fans de la saga.</p> <br />
              <p className="agradecimientos">Información de la wiki recopilada del <a className="links" href="https://pokemon.fandom.com/es/wiki/WikiDex">fandom de Pokémon</a> y de la <a className="links" href="https://pokeapi.co/">Pokeapi</a>.</p><br />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeducatorInfo;
