// condicional para las fotos de tipo
if (move.type?.name == "normal") {
  normal_img;
}
if (move.type?.name == "fighting") {
  lucha_img;
}
if (move.type?.name == "flying") {
  volador_img;
}
if (move.type?.name == "poison") {
  veneno_img;
}
if (move.type?.name == "ground") {
  tierra_img;
}
if (move.type?.name == "rock") {
  roca_img;
}
if (move.type?.name == "ghost") {
  fantasma_img;
}
if (move.type?.name == "steel") {
  acero_img;
}
if (move.type?.name == "fire") {
  fuego_img;
}
if (move.type?.name == "water") {
  agua_img;
}
if (move.type?.name == "grass") {
  planta_img;
}
if (move.type?.name == "electric") {
  electrico_img;
}
if (move.type?.name == "psychic") {
  psiquico_img;
}
if (move.type?.name == "ice") {
  hielo_img;
}
if (move.type?.name == "dragon") {
  dragon_img;
}
if (move.type?.name == "dark") {
  siniestro_img;
}
if (move.type?.name == "fairy") {
  hada_img;
}
if (move.type?.name == "unknown") {
  desconocido_img;
}
if (move.type?.name == "shadow") {
  sombra_img;
}
if (move.type?.name == "bug") {
  bicho_img;
}
// ternarios
objeto.type.name == "normal" ? (
  <img src={normal_img} alt="tipo normal" />
) : objeto.type.name == "fighting" ? (
  <img src={lucha_img} alt="tipo lucha" />
) : objeto.type.name == "flying" ? (
  <img src={volador_img} alt="tipo volador" />
) : objeto.type.name == "poison" ? (
  <img src={veneno_img} alt="tipo veneno" />
) : objeto.type.name == "ground" ? (
  <img src={tierra_img} alt="tipo tierra" />
) : objeto.type.name == "rock" ? (
  <img src={roca_img} alt="tipo roca" />
) : objeto.type.name == "ghost" ? (
  <img src={fantasma_img} alt="tipo fantasma" />
) : objeto.type.name == "steel" ? (
  <img src={acero_img} alt="tipo acero" />
) : objeto.type.name == "fire" ? (
  <img src={fuego_img} alt="tipo fuego" />
) : objeto.type.name == "water" ? (
  <img src={agua_img} alt="tipo agua" />
) : objeto.type.name == "grass" ? (
  <img src={planta_img} alt="tipo planta" />
) : objeto.type.name == "electric" ? (
  <img src={electrico_img} alt="tipo electrico" />
) : objeto.type.name == "phsychic" ? (
  <img src={psiquico_img} alt="tipo psiquico" />
) : objeto.type.name == "ice" ? (
  <img src={hielo_img} alt="tipo hielo" />
) : objeto.type.name == "dragon" ? (
  <img src={dragon_img} alt="tipo dragon" />
) : objeto.type.name == "dark" ? (
  <img src={siniestro_img} alt="tipo siniestro" />
) : objeto.type.name == "fairy" ? (
  <img src={hada_img} alt="tipo hada" />
) : objeto.type.name == "unknown" ? (
  <img src={desconocido_img} alt="tipo desconocido" />
) : objeto.type.name == "shadow" ? (
  <img src={sombra_img} alt="tipo sombra" />
) : objeto.type.name == "bug" ? (
  <img src={bicho_img} alt="tipo bicho" />
) : (
  ""
);
//importar fotos en movimientos (tocará cambiar ruta segun donde se pongan)
import acero_img from "../../assets/img/tiposimg/acero.png";
import agua_img from "../../assets/img/tiposimg/agua.png";
import bicho_img from "../../assets/img/tiposimg/bicho.png";
import dragon_img from "../../assets/img/tiposimg/dragon.png";
import electrico_img from "../../assets/img/tiposimg/electrico.png";
import fantasma_img from "../../assets/img/tiposimg/fantasma.png";
import fuego_img from "../../assets/img/tiposimg/fuego.png";
import hada_img from "../../assets/img/tiposimg/hada.png";
import hielo_img from "../../assets/img/tiposimg/hielo.png";
import lucha_img from "../../assets/img/tiposimg/lucha.png";
import normal_img from "../../assets/img/tiposimg/normal.png";
import planta_img from "../../assets/img/tiposimg/planta.png";
import psiquico_img from "../../assets/img/tiposimg/psiquico.png";
import roca_img from "../../assets/img/tiposimg/roca.png";
import siniestro_img from "../../assets/img/tiposimg/siniestro.png";
import tierra_img from "../../assets/img/tiposimg/tierra.png";
import veneno_img from "../../assets/img/tiposimg/veneno.png";
import volador_img from "../../assets/img/tiposimg/volador.png";
import desconocido_img from "../../assets/img/tiposimg/desconocido.png";
import sombra_img from "../../assets/img/tiposimg/sombra.png";
// ayuda fotos pokemon img.sprites.versions?.["generation-vi"]?.["x-y"].front_default img.sprites.other?.["official-artwork"]?.front_default
store.single_pokemon_data.sprites.other?.["official-artwork"]?.front_default
  ? store.single_pokemon_data.sprites.other?.["official-artwork"]?.front_default
  : store.single_pokemon_data.sprites.versions?.["generation-vii"]?.["ultra-sun-ultra-moon"]
      .front_default
  ? store.single_pokemon_data.sprites.versions?.["generation-vii"]?.["ultra-sun-ultra-moon"]
      .front_default
  : store.single_pokemon_data.sprites.versions?.["generation-vi"]?.["x-y"].front_default
  ? store.single_pokemon_data.sprites.versions?.["generation-vi"]?.["x-y"].front_default
  : store.single_pokemon_data.sprites.other?.home?.front_default
  ? store.single_pokemon_data.sprites.other?.home?.front_default
  : "";
