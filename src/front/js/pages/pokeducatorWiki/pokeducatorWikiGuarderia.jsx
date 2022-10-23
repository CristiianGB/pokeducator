import React, { useState, useEffect, useContext } from "react";
import "../../../styles/pokeducatorWikiStyles/pokeducatorWikiGuarderiaStyles.css";
import loading from "../../../assets/img/loading.gif"

const PokeducatorWikiGuarderia = () => {
  const [num, setNum] = useState(0)
  const [load, setLoad] = useState(true)
  let time = [2000, 3000, 4000, 5000]
  let randomtime = Math.floor(Math.random() * time.length)

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };

setTimeout(()=>{
    setLoad(false)
  },time[randomtime])

  return (
    <>
    {load ? (
      
      <div className="container align-items-center">
        <img className="centred img-fluid" src={loading} alt="Cargando..." />
      </div>
      
    ) :
    (<>
    <div className="container align-items-center">
      <div className="row">
        <div className="col-12 my-4">
          <img
            className="img-fluid w-100 portada"
            src="https://fotosparafacebook.es/wp-content/uploads/2016/07/pokemon-portadas-para-facebook-Fotosparafacebook.es-8.jpg"
            alt="portada Pokeducator Guardería"
          />
        </div>
      </div>
      <div className="row">
        <h1 id="guarderia_pokemon">Guardería Pokémon</h1>
        <hr />
      </div>
      <div className="descripcion">
        <img
          className="guarderia_imagen mx-2 mb-2"
          src="http://www.centropokemon.com.ar/reviews/black_white/guia/imagenes/parte_5/43.jpg"
          alt="Guardería Pokémon Blanco/Negro."
        />
        <p>
          La Guardería Pokémon (Pokémon Day Care en inglés) es un edificio que
          existe en todos los videojuegos RPG de Pokémon para consolas
          portátiles junto con Pokémon Colosseum y Pokémon XD: Tempestad oscura.
        </p>
        <br />
        <p>
          En la guardería puedes dejar algún Pokémon para que cuiden de él.
          Internamente se irán contando los pasos que das en el juego desde que
          dejaste al Pokémon en la guardería hasta que regresas a recogerlo. Si
          has dado los suficientes pasos como para que suba un nivel o más, al
          recogerlo habrá subido uno o más niveles, dependiendo de los pasos
          dados. La cantidad de pasos necesarios para que suba un nivel es
          directamente proporcional a los puntos de experiencia necesarios para
          subir el mismo nivel.
        </p>
        <br />
        <p>
        <img className="float-start m-3 w-25 pokeimg" src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6f/latest/20070718201559/Huevos_Pok%C3%A9mon.png" alt="Huevos Pokémon" />
          Al sacar a un Pokémon de la guardería nos cobrarán 100 Pokéyen. Si el
          Pokémon ha subido de nivel, además, nos cobrarán 100 Pokéyen más por
          cada nivel que haya subido en la guardería.
        </p>
        <br />
        <p>
          En juegos anteriores a la tercera generación, al sacar al Pokémon de
          la guardería los puntos de experiencia conseguidos en ese mismo nivel
          se perderán, lo que significa que la barra de puntos de experiencia de
          ese nivel estará vacía. Esto pasará también aunque el Pokémon no haya
          subido de nivel en la guardería. Esta situación no tiene ninguna
          utilidad práctica, por lo que la forma de perder el mínimo de puntos
          de experiencia es dejar un Pokémon en la guardería que acabe de subir
          de nivel o esté recién capturado (su barra de experiencia esté lo más
          baja posible) y sacarlo al poco de haber subido por lo menos un nivel.
        </p>
      </div>
      <br /><br />
      <div className="col-sm-6 m-5 ms-3">
        <nav id="toc" data-toggle="toc" className="sticky-top">
          <ul className="nav navbar-nav">
            <li>
              <a onClick={()=>setNum(1)} className={num==1?"nav-link active":"nav-link"} style={aStyles} href="#guarderia_pokemon">
                Guardería Pokémon
              </a>
            </li>
            <li>
              <a onClick={()=>setNum(2)} className={num==2?"nav-link active":"nav-link"} style={aStyles} href="#utilidad">
                Utilidad
              </a>
            </li>
            <li>
              <a id="desplegable" onClick={()=>setNum(3)} className={num==3?"nav-link active":"nav-link"} style={aStyles} href="#desplegable">
                Localización
              </a>
              <ul className="nav navbar-nav">
                <li>
                  <a className="nav-link" style={subStyles} href="#Kanto">Kanto - Pokémon Rojo Fuego y Verde Hoja.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Islas Sete">Islas Sete - Pokémon Cristal.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Johto">Johto - Pokémon Oro, Plata y Cristal.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Hoenn">Hoenn - Pokémon Rubí, Zafiro y Esmeralda.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Sinnoh">Sinnoh -  Pokémon Diamante, Perla y Platino.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Teselia">Teselia - Pokémon en Pokémon Negro y Blanco.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Kalos">Kalos - Guardería en Pokémon en Pokémon X y Pokémon Y.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Alola">Alola - Pokémon Sol y Pokémon Luna.</a>
                </li>
                <li>
                  <a className="nav-link" style={subStyles} href="#Aura">Aura -  Pokémon Colosseum y Pokémon XD: Tempestad oscura.</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <h1 id="utilidad">Utilidad</h1>
        <hr />
      </div>
      <div className="descripcion">
      <img className="float-start m-3 w-50 pokeimg" src="https://www.cultture.com/pics/2021/07/pokemon-10-consejos-para-formar-un-equipo-competitivo-3.jpg" alt="Huevos Pokémon, pichu y togepi" />
        <p>
          La utilidad de subir experiencia en la guardería es que en ella no se
          ganan puntos de esfuerzo, por lo que es posible aumentar el nivel de
          un Pokémon hasta que alcance el nivel necesario para enfrentarse con
          los Pokémon que puedan darle los puntos de esfuerzo que queramos
          entrenar, por ejemplo, por no haber Pokémon a un nivel similar al
          nuestro contra los que luchar y recibir esos puntos de esfuerzo.
          Aunque con el objeto repartir experiencia o poniendo al Pokémon en
          primer lugar y cambiando antes de atacar se puede conseguir luchar
          contra Pokémon más fuertes que el Pokémon al que queremos entrenar sin
          arriesgar su salud. Dejar al Pokémon en la guardería tampoco
          interfiere en la amistad ni en ningún otro valor que no sean los
          puntos de experiencia.
        </p>
        <br />
        <p>
        
          Mientras está en la guardería, el Pokémon no evoluciona, aunque sea
          una especie que evoluciona por nivel y haya alcanzado dicho nivel, si
          al recoger al Pokémon éste ha alcanzado su nivel de Evolución puedes
          usarlo en combate y al siguiente nivel evolucionará, o puedes usar un
          carameloraro. El Pokémon sí aprende nuevos movimientos en la
          guardería, a medida que alcanza el nivel en el que los aprende, pero
          no hay ninguna forma de elegir cuáles olvidar si ya conoce el máximo
          número de movimientos permitido, por lo que se irán olvidando los más
          antiguos para aprender los nuevos. Este es uno de los principales
          inconvenientes de hacer crecer Pokémon en la guardería, que se puede
          subsanar teniendo en cuenta a qué niveles aprende nuevos movimientos y
          visitando de vez en cuando la guardería para comprobar cuántos niveles
          ha subido. Desde la tercera generación también es posible que un
          Pokémon olvide una máquina oculta sin necesidad de ir con el
          Quita-movimientos, mientras que en los juegos de la primera y segunda
          generación el dueño de la guardería no aceptará Pokémon que conozcan
          una MO.
        </p>
        <br />
        <p>
        <img className="quita-movimientosimg mx-2 mb-2" src="https://static.wikia.nocookie.net/espokemon/images/2/27/Quita-movimientos_en_Pt.png" alt="Quita-Movimientos Pokémon" />
          A partir de la segunda generación la guardería es el lugar donde se
          realiza la crianza Pokémon, por lo que al dejar en ella a dos Pokémon
          compatibles (es decir, que tengan en común por lo menos un grupo
          huevo) y de diferente género (o con Ditto), al realizar el número de
          pasos necesarios, al regresar el anciano dirá que tus Pokémon han
          tenido un huevo y nos lo ofrecerán sin ningún coste. También puede
          llamarte a la Pokégear aunque en ocasiones esto no sucede y tendremos
          que ir por nuestra cuenta a visitarlo, en caso de que nuestros Pokémon
          hayan tenido un huevo el anciano estará dirigido hacia la izquierda,
          en caso negativo mirará hacia debajo.
        </p>
        <br /><br /><br />
        <p>
          En Pokémon Colosseum la guardería sirve para ayudar a purificar a los
          Pokémon oscuros.
        </p>
      </div>
      <div className="row">
        <h1 id="localizacion">Localización</h1>
        <hr />
      </div>
      <div className="row">
        <div className="card-deck d-flex justify-content-center">
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/1/15/Guarder%C3%ADa_en_Rojo.png/"
              alt="guardería en Pokémon Rojo"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">Guardería en Pokémon Rojo.</h5>
              
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/9/93/Guarder%C3%ADa.png"
              alt="guardería en Pokémon Cristal"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">Guardería en Pokémon Cristal.</h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://www.cpokemon.com/reviews/esmeralda/imagenes_guia/044.png"
              alt="guardería en Pokémon Rubí y Zafiro"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">Guardería en Pokémon Rubí y Zafiro</h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/a/a0/Guarder%C3%ADa_Pok%C3%A9mon_Esmeralda.png"
              alt="Guardería en Pokémon Esmeralda"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">Guardería en Pokémon Esmeralda.</h5>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="row">
        <div className="card-deck d-flex justify-content-center">
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/c/c7/Guarderia_en_Pok%C3%A9mon_Rojo_Fuego.png"
              alt="guardería en Pokémon Rojo Fuego y Verde Hoja"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería en Pokémon Rojo Fuego y Verde Hoja.
              </h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/c/cc/Guarder%C3%ADa_Pok%C3%A9mon_RFLG01.png"
              alt="guardería en Pokémon Rojo Fuego y Verde Hoja - Isla Carta"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería en Pokémon Rojo Fuego y Verde Hoja - Isla Carta
              </h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/0/0c/Guarder%C3%ADa_Pok%C3%A9mon_Platino.png"
              alt="guardería en Pokémon Diamante, Perla y Platino"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería en Pokémon Diamante, Perla y Platino.
              </h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              className="img-fluid card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/9/98/Guarder%C3%ADa_Pok%C3%A9mon_OCPA.png"
              alt="guardería en Pokémon Oro HeartGold y Plata SoulSilver"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería en Pokémon Oro HeartGold y Plata SoulSilver.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="row">
        <div className="card-deck d-flex justify-content-center">
          
          <div  className="card cardGuarderia">
            <img
              class="card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/1/14/Guarder%C3%ADa_Pok%C3%A9mon_BW.png"
              alt="guardería Pokémon en Pokémon Negro y Blanco"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería Pokémon en Pokémon Negro y Blanco.
              </h5>
            </div>
          </div>
          <div  className="card cardGuarderia">
            <img
              class="card-img-top cardImgGuarderia"
              src="https://static.wikia.nocookie.net/espokemon/images/5/53/Guarder%C3%ADa_Pok%C3%A9mon_XY.png"
              alt="guardería en Pokémon en Pokémon X y Pokémon Y"
            />
            <div className="card-body cardBodyGuarderia">
              <h5 className="card-title">
                Guardería en Pokémon en Pokémon X y Pokémon Y.
              </h5>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row">
        <h3 id="Kanto">Kanto</h3>
        <br />
      </div>
      <div className="Kanto_descripcion">
        <p>
          En Kanto la guardería está situada en la Ruta 5, la ruta que une
          Ciudad Celeste y Ciudad Azafrán. Sin embargo, en esta guardería sólo
          se puede dejar a un Pokémon a la vez, por lo que la crianza Pokémon no
          es posible en esta guardería, pero sí en la que hay en la Isla Quarta
          en Pokémon Rojo Fuego y Verde Hoja.
        </p>
      </div>
      <div className="row">
        <h3 id="Islas Sete">Islas Sete</h3>
        <br />
      </div>
      <div className="Islas_Sete_descripcion">
        <p>
          En las Islas Sete se encuentra en Isla Quarta después de pasar la liga
          Pokémon de Kanto (solo en Pokémon Rojo Fuego y Verde Hoja).
        </p>
      </div>
      <div className="row">
        <h3 id="Johto">Johto</h3>
        <br />
      </div>
      <div className="Johto_descripcion">
        <p>
          En Johto se encuentra en la Ruta 34, al sur de Ciudad Trigal. Además,
          en Pokémon Oro, Plata y Cristal se podía acceder al área en la que
          estaban los Pokémon criados, y al hablar con ellos te dicen su
          disponibilidad a tener una cría, pero esto cambió en las siguientes
          generaciones ya que quien te da esa información pasa a ser el anciano
          en la parte de afuera.
        </p>
      </div>
      <div className="row">
        <h3 id="Hoenn">Hoenn</h3>
        <br />
      </div>
      <div className="Hoenn_descripcion">
        <p>
          En Hoenn está en la Ruta 117, entre Ciudad Malvalona y Pueblo
          Verdegal. En Pokémon Rubí Omega y Pokémon Zafiro Alfa hay una segunda
          guardería situada en el Resort Batalla, a la derecha del Centro
          Pokémon. En esta nueva guardería el encargado que entrega los Huevos
          es un niño pequeño.
        </p>
      </div>
      <div className="row">
        <h3 id="Sinnoh">Sinnoh</h3>
        <br />
      </div>
      <div className="Hoenn_descripcion">
        <p>En Sinnoh está en Pueblo Sosiego.</p>
      </div>
      <div className="row">
        <h3 id="Teselia">Teselia</h3>
        <br />
      </div>
      <div className="Teselia_descripcion">
        <p>
          En Teselia, la Guardería Pokémon esta en la Ruta 3. En un principio
          solo puedes dejar un Pokémon a su cuidado. Después de ganar la tercera
          medalla y hablar con el anciano que te da la bicicleta a la entrada de
          ciudad Mayólica podrás dejar al cuidado a dos Pokémon. 
          <br /> 
          <br />
          En Pokémon Negro y Blanco 2 sigue estando en la Ruta 3, aunque sólo
          podrás acceder a ella cuando superes la Liga Pokémon, ya que en ciudad
          Porcelana el acceso al Puente Saeta está bloqueado.
        </p>
      </div>
      <div className="row">
        <h3 id="Kalos">Kalos</h3>
        <br />
      </div>
      <div className="Kalos_descripcion">
        <p>En Kalos se encuentra en la Ruta 7 después de despertar a Snorlax</p>
      </div>
      <div className="row">
        <h3 id="Alola">Alola</h3>
        <br />
      </div>
      <div className="Alola_descripcion">
        <p>En Alola se encuentra en el Rancho Ohana pero los Pokémon ya no suben de nivel, sino que solo sirve para que pongan huevos. Además, pasa a llamarse Cuidados Pokémon.</p>
      </div>
      <div className="row">
        <h3 id="Aura">Aura</h3>
        <br />
      </div>
      <div className="Aura_descripcion">
        <p>En Aura está en Villa Ágata. En Pokémon XD: Tempestad oscura, la guardería no abrirá hasta que rescates a la nieta de la dueña, que a partir de entonces se hará cargo de ella.</p>
      </div>
      <br />
    </div></>)}</>
  );
};

export default PokeducatorWikiGuarderia;