import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiLandingStyles.css";
import loading from "../../../assets/img/loading.gif";
import { Context } from "../../store/appContext.jsx";

const PokeducatorWikiLanding = () => {
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
          <div className="divWiki col-12 my-4"></div>
          <div className="container align-items-center">
            <div className="row">
              <h1 className="text-center">Bienvenido a la Wiki!</h1>
              <hr />
              <p className="text-center">
                Esta es la Wiki de <b>Pokeducator</b>, contiene información
                básica y no tan básica sobre el amplio mundo Pokémon. <br />
                <br />
                Nuestra página web se centra en las fusiones Pokémon y en la
                creación del espécimen mas poderoso jamás visto, no obstante,
                como ya hemos indicado en nuestra{" "}
                <a className="links" href="/info">
                  página de información
                </a>
                , en la{" "}
                <a className="links" href="/wiki/crianza-pokemon">
                  Crianza Pokémon
                </a>{" "}
                intervienen una infinidad de aspectos:{" "}
                <a className="links" href="/wiki/naturaleza-pokemon">
                  Naturaleza
                </a>
                ,{" "}
                <a className="links" href="/objetos">
                  Objetos
                </a>
                ,{" "}
                <a className="links" href="/movimientos">
                  Movimientos
                </a>
                ... etc. <br />
                <br />
                Por ello hemos visto necesario crear la Wiki de{" "}
                <b>Pokeducator</b>! Aquí encontrarás la información necesaria
                tanto para dar los primeros pasos en la crianza y creación de
                nuevas especies de Pokémon como para desvelar los secretos más
                profundos sobre las combinaciones genéticas! <br />
                <br />
                ¡Mucha suerte y... Diviértete!
              </p>
              <br />
              <br />
            </div>
            <div className="row">
              <div className="col-md">
                
                <ul className="list-group list-group listaPrincipal">
                <h3 className="mb-3 ms-2">Primeros Pasos</h3>
                  <li className="elementoLista list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <a className="links" href="/pokemons">
                          Pokémon
                        </a>
                      </div>
                      ¡Familiarizate con los Pokémon! Aquí podrás ver una lista
                      de pokémon y acceder a su información adicional.
                    </div>
                  </li>
                  <li className="elementoLista list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"><a className="links" href="/movimientos">Movimientos</a></div>
                      Aprende los movimientos mas potentes. ¡Tendrás que experimentar por ti mismo!
                    </div>
                  </li>
                  <li className="elementoLista list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold"><a className="links" href="/objetos">Objetos</a></div>
                      A la hora de criar los objetos son muy importantes ya que pueden tener efectos beneficiosos para la cría.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md ">
                <ul className="listaAyudante">
                  <h4>También podría interesarte...</h4>
                  <li>
                    La información general sobre <a className="links" href="/pokeducator-info">Pokeducator.</a>
                  </li>
                  <li>
                    Coger ideas en los <a className="links" href="/">Pokémon más votados.</a>
                  </li>
                  <li>
                    Contactar con uno de nuestros <a className="links" href="/soporte">Pokeducatores.</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <h1 className="mt-4">Conviértete en Maestro</h1><hr />
            </div>
            <br />
            <div className="card-deck d-flex justify-content-center">
            <div className="card cardWiki mx-4">
              <img className="card-img-top cardImgWiki" src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-2.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/naturaleza-pokemon">Naturaleza</a></h5>
                <p className="card-text">Aprende a desarrollar la naturaleza de tus creaciones sacando el máximo provecho a las estadísticas que pueden aumentar.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/naturaleza-pokemon#lista_de_naturalezas">Lista de naturalezas</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/naturaleza-pokemon#efectos_en_las_estadisticas">Efectos en las estadísticas</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/naturaleza-pokemon#herencia_mediante_crianza">Herencia de la naturaleza mediante crianza</a></li>
              </ul>
              
            </div>
            <div className="card cardWiki mx-4">
              <img className="card-img-top cardImgWiki" src="https://i.ytimg.com/vi/_WoBdkdXii4/maxresdefault.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/genero-pokemon">Género</a></h5>
                <p className="card-text">Distingue entre generos para descubrir los detalles que hacen únicos a tus Pokémon.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/genero-pokemon">Género</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/genero-pokemon#en_los_videojuegos">En los videojuegos</a>
                <ul>
                  <li><a className="links" href="/wiki/genero-pokemon#casos_especiales">Casos especiales</a></li>
                  <li><a className="links" href="/wiki/genero-pokemon#importancia">Importancia</a></li>
                  <li><a className="links" href="/wiki/genero-pokemon#diferencias_de_genero">Diferencias de género</a></li>
                  <li><a className="links" href="/wiki/genero-pokemon#obtener_otro_genero">obtener otro género</a></li>
                </ul></li>
                <li className="list-group-item"><a className="links" href="/wiki/genero-pokemon#en_el_anime">En el anime</a></li>
              </ul>
              
            </div>
            </div>
            <br />
            <br />
            <div className="card-deck d-flex justify-content-center">
            <div className="card cardWiki3 mx-4">
              <img className="card-img-top cardImgWiki" src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-1-750x315.png" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/grupos-huevo">Grupo Huevo</a></h5>
                <p className="card-text">Descubre los <a className="links" href="/wiki/grupos-huevo">Grupos Huevo</a> pueden llegar a ser el mejor aliado de un buen maestro Pokémon.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/grupos-huevo#grupos_huevo">Grupos Huevo</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/grupos-huevo#cadenas_de_cria">Cadenas de cría</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/grupos-huevo#tipos_de_grupos_huevo">Tipos de Grupo Huevo</a>
                <ul>
                  <li><a className="links" href="/wiki/grupos-huevo#ninguno">Ninguno</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#ditto">Ditto</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#planta">Planta</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#bicho">Bicho</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#volador">Volador</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#Humanoide">Humanoide</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#mineral">Mineral</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#amorfo">Amorfo</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#campo">Campo</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#agua1">Agua 1</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#agua2">Agua 2</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#agua3">Agua 3</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#monstruo">Monstruo</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#hada">Hada</a></li>
                  <li><a className="links" href="/wiki/grupos-huevo#dragon">Dragón</a></li>
                </ul>
                </li>
              </ul>
            </div>
            <div className="card cardWiki3 mx-4">
              <img className="card-img-top cardImgWiki" src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-6.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/crianza-pokemon">Crianza</a></h5>
                <p className="card-text">Descubre todos los secretos que esconde la crianza Pokémon, los necesitarás para crear el Pokémon perfecto.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#crianza_pokemon">Crianza Pokémon</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#funcionamiento">Funcionamiento</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#guarderia_pokemon">Guarderia Pokémon</a>
                <ul>
                  <li><a className="links" href="/wiki/crianza-pokemon#uso_de_ditto">Uso de Ditto</a></li>
                  <li><a className="links" href="/wiki/crianza-pokemon#crianza_de_formas_regionales">Crianza de formas regionales</a></li>
                </ul></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#grupos_huevo">Grupos huevo</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#beneficios_de_la_crianza">Beneficios de la crianza</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#pokemon_obtenible_mediante_crianza">Pokémon obtenibles mediante crianza</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#movimientos_huevo">Movimientos Huevo</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#eclosion_del_huevo">Eclosión del huevo</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/crianza-pokemon#pasos_para_una_cria_exitosa">Pasos para una cría exitosa</a></li>
              </ul>
              
            </div>
            
            <div className="card cardWiki3 mx-4">
              <img className="card-img-top cardImgWiki" src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-8.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/guarderia-pokemon">Guarderia Pokémon</a></h5>
                <p className="card-text">En este apartado describiremos las funciones que desempeña la guarderia Pokémon en los <a className="links" href="/wiki/juegos-pokemon">Videojuegos</a> de la serie.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/guarderia-pokemon">Guarderia Pokémon</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/guarderia-pokemon#utilidad">Utilidad</a>
                </li>
                <li className="list-group-item"><a className="links" href="/wiki/guarderia-pokemon#localizacion">Localización</a>
                <ul>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Kanto">Kanto - Pokémon Rojo Fuego y Verde Hoja.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Islas_Sete">Islas Sete - Pokémon Cristal.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Johto">Johto - Pokémon Oro, Plata y Cristal.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Hoenn">Hoenn - Pokémon Rubí, Zafiro y Esmeralda.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Sinnoh">Sinnoh - Pokémon Diamante, Perla y Platino.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Teselia">Teselia - Pokémon en Pokémon Negro y Blanco.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Kalos">Kalos - Guardería en Pokémon en Pokémon X y Pokémon Y.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Alola">Alola - Pokémon Sol y Pokémon Luna.</a></li>
                  <li><a className="links" href="/wiki/guarderia-pokemon#Aura">Aura - Pokémon Colosseum y Pokémon XD: Tempestad oscura.</a></li>
                </ul>
                </li>
              </ul>
            </div>
            </div>
            <br />
            <br />
            <div className="row">
              <h3>Información adicional</h3><hr />
            </div>
            <br />
            <div className="card-deck d-flex justify-content-center">
            <div className="card cardWiki mx-4">
              <img className="card-img-top cardImgWiki" src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-5.jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/juegos-pokemon">Juegos de Pokémon</a></h5>
                <p className="card-text">Apartado informativo sobre el lado mas fuerte de toda la franquicia, sus videojuegos.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/juegos-pokemon#videojuegos_de_pokemon">Videojuegos de Pokémon</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/juegos-pokemon#juegos_principales">Juegos Principales</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/juegos-pokemon#generaciones">Generaciones</a>
                <ul>
                  <li><a className="links" href="/wiki/juegos_pokemon#primera_generacion">Primera Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#segunda_generacion">Segunda Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#tercera_generacion">Tercera Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#cuarta_generacion">Cuarta Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#quinta_generacion">Quinta Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#sexta_generacion">Sexta Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#septima_generacion">Séptima Generacion</a></li>
                  <li><a className="links" href="/wiki/juegos_pokemon#octava_generacion">Octava Generacion</a></li>
                </ul>
                </li>
                <li className="list-group-item"><a className="links" href="/wiki/juegos-pokemon#otras_clasificaciones">Otras Clasificaciones</a></li>
              </ul>
              
            </div>
            <div className="card cardWiki mx-4">
              <img className="card-img-top cardImgWiki" src="http://1.bp.blogspot.com/-08R82Wv6eZ0/Ufh-NfCvBUI/AAAAAAAABQA/oOGWOuNOFlQ/s1600/F82.+Pokemon+(1).jpg" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"><a className="links" href="/wiki/series-pokemon">Series Pokémon</a></h5>
                <p className="card-text">Información sobre la aclamada serie basada en los juegos de Pokémon. Sigue las aventuras de Ash y Pikachu con sus mas de 1000 episodios.</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a className="links" href="/wiki/series-pokemon#anime">Anime</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/series-pokemon#argumento">Argumento</a>
                <ul>
                <li><a className="links" href="/wiki/series-pokemon#historia">Historia</a></li>
                </ul>
                </li>
                <li className="list-group-item"><a className="links" href="/wiki/series-pokemon#series_de_television">Series de televisión</a>
                <ul>
                <li><a className="links" href="/wiki/series-pokemon#serie_original">Serie Original</a></li>
                <li><a className="links" href="/wiki/series-pokemon#advanced">Serie Advanced Generation</a></li>
                <li><a className="links" href="/wiki/series-pokemon#series_diamante_y_perla">Serie Diamante y Perla</a></li>
                <li><a className="links" href="/wiki/series-pokemon#serie_xy">Serie XY</a></li>
                <li><a className="links" href="/wiki/series-pokemon#serie_sol_y_luna">Serie Sol y Luna</a></li>
                <li><a className="links" href="/wiki/series-pokemon#serie_espada_y_escudo">Serie Espada y Escudo</a></li>
                </ul>
                </li>
                <li className="list-group-item"><a className="links" href="/wiki/series-pokemon#episodios_especiales">Episodios especiales</a></li>
                <li className="list-group-item"><a className="links" href="/wiki/series-pokemon#peliculas">Películas</a>
                <ul>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_serie_original">Película - Serie Original</a></li>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_advanced">Película - Serie Advanced Generation</a></li>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_serie_diamante_y_perla">Película - Serie Diamante y Perla</a></li>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_serie_xy">Película - Serie XY</a></li>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_serie_sol_y_luna">Película - Serie Sol y Luna</a></li>
                <li><a className="links" href="/wiki/series-pokemon#pelicula_serie_espada_y_escudo">Película - Serie Espada y Escudo</a></li>
                </ul>
                </li>
              </ul>
              
            </div>
            <br />
            </div>
            <br />
          </div>
        </>
      )}
    </>
  );
};
export default PokeducatorWikiLanding;

