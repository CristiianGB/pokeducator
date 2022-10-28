
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorFusionStyles.css";
import loading from "../../assets/img/loading.gif";
import agua from "../../assets/img/tiposimg/agua.png"
import lucha from "../../assets/img/tiposimg/lucha.png"

const PokeducatorFusion = () => {
    const {store, actions} = useContext(Context)
    const params = useParams();
    
  const [num, setNum] = useState(0) 
  const [load, setLoad] = useState(true)
  let time = [2000, 3000, 4000, 5000]
  let randomtime = Math.floor(Math.random() * time.length)

  const aStyles = { fontSize: "18px" };
  const subStyles = { fontSize: "15px" };
  const tableStyle = {
    width: "300px",
    margin: "auto",
  };

  setTimeout(()=>{
    setLoad(false)
  },time[randomtime])

  return ( 
    <>{load ? (
        <div className="container align-items-center">
        <img className="centred img-fluid" src={loading} alt="Cargando..." />
      </div>
      ) : ( 
        <div className="container align-items-center">
            <div className="row cartasFusion">
                <div className="col-md text-center "> 
                <div className="card rounded ">
                    <h4 className="my-3 me-2">Keldeo-Ordinary</h4><h4><img className="tipoImg mx-1" src={agua} alt="" /><img className="tipoImg mx-1" src={lucha} alt="" /></h4> 
                    
                        <a href="/pokemon/647">
                      <img
                        className="fusionFoto"
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png"
                        alt="Card image cap"
                      />
                    </a>
                    <div className="card-body  ">
                      
                        
                        <div className="stats_pokemon mt-3 mb-3 ">
                <div className="table-responsive table-secondary rounded-3 tablaStatsFusion">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>
                          <h4>ESTADISTICAS</h4>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">hp</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra1"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">91</td>
                        </tr>
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">Ataque</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra2"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">72</td>
                        </tr>
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">Defensa</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra3"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">90</td>
                        </tr>
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">Ataque Esp.</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra4"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">129</td>
                        </tr>
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">Defensa Esp.</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra5"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">90</td>
                        </tr>
                        <tr className="d-flex text-center align-items-center">
                          <td className="col-3">Velocidad</td>
                          <td className="col-6">
                            <div className="progress">
                              <div
                                className="progress-bar pruebaBarra6"
                                role="progressbar"
                                
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td className="col-3">108</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                <div className="row">
                 <div className="col-sm-6">objeto</div>
                 <div className="col-sm-6">naturaleza</div>
                </div>
                    </div>
                  </div>
                </div>
                <div className="col-md text-center"> boton</div>
                <div className="col-md text-center"> segundo pokemon</div>
            </div>
        </div>
      )}</>
  )

}

export default PokeducatorFusion;