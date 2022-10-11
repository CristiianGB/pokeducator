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
store.single_move_data.type?.name == "normal"
  ? <img src={normal_img} alt="normal" />
  : store.single_move_data.type?.name == "fighting"
  ? <img src={lucha_img} alt="normal" />
  : store.single_move_data.type?.name == "flying"
  ? <img src={volador_img} alt="normal" />
  : store.single_move_data.type?.name == "poison"
  ? <img src={veneno_img} alt="normal" />
  : store.single_move_data.type?.name == "ground"
  ? <img src={tierra_img} alt="normal" />
  : store.single_move_data.type?.name == "rock"
  ? <img src={roca_img} alt="normal" />
  : store.single_move_data.type?.name == "ghost"
  ? <img src={fantasma_img} alt="normal" />
  : store.single_move_data.type?.name == "steel"
  ? <img src={acero_img} alt="normal" />
  : store.single_move_data.type?.name == "fire"
  ? <img src={fuego_img} alt="normal" />
  : store.single_move_data.type?.name == "water"
  ? <img src={agua_img} alt="normal" />
  : store.single_move_data.type?.name == "grass"
  ? <img src={planta_img} alt="normal" />
  : store.single_move_data.type?.name == "electric"
  ? <img src={electrico_img} alt="normal" />
  : store.single_move_data.type?.name == "phsychic"
  ? <img src={psiquico_img} alt="normal" />
  : store.single_move_data.type?.name == "ice"
  ? <img src={hielo_img} alt="normal" />
  : store.single_move_data.type?.name == "dragon"
  ? <img src={dragon_img} alt="normal" />
  : store.single_move_data.type?.name == "dark"
  ? <img src={siniestro_img} alt="normal" />
  : store.single_move_data.type?.name == "fairy"
  ? <img src={hada_img} alt="normal" />
  : store.single_move_data.type?.name == "unknown"
  ? <img src={desconocido_img} alt="normal" />
  : store.single_move_data.type?.name == "shadow"
  ? <img src={sombra_img} alt="normal" />
  : store.single_move_data.type?.name == "bug"
  ? <img src={bicho_img} alt="normal" /> :"";

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
