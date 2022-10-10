import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

const PokemonInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  

  useEffect(() => {
    if (!actions.pokemonFindOneInData(params.theid)) {
      actions.pokemonFindOne(
        "https://pokeapi.co/api/v2/pokemon/" + params.theid
      );
    }
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* DIV LEFT */}
        <div className="d-flex flex-column col-md-4 align-items-center">
          <img
            src={store.single_pokemon_data.sprites?.other.home.front_default}
            className="img-fluid rounded"
            style={{ width: "400px", height: "400px" }}
          />
          <div className="btn-group">
            <button type="button" className="btn btn-default">
              Izquierdo
            </button>
            <button type="button" className="btn btn-default">
              Derecho
            </button>
          </div>
        </div>
        {/* DIV RIGHT */}
        <div className="col-5 d-flex flex-column">
          <h5 className="text-center">{store.single_pokemon_data.name}</h5>
          {/* STATS */}
          <div>
            <table className="table m-0">
              <tbody className="text-center align-middle">
                <tr>
                  <th className="text-end p-0 col-3">HP:</th>
                  <td className="p-0 col-3">39</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "39%" }}
                        aria-valuenow="39"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-end p-0 col-3">Attack:</th>
                  <td className="p-0 col-3">52</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "52%" }}
                        aria-valuenow="52"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-end p-0 col-3">Defense:</th>
                  <td className="p-0 col-3">43</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "43%" }}
                        aria-valuenow="43"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-end p-0 col-3">Sp. Atk:</th>
                  <td className="p-0 col-3">60</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-end p-0 col-3">Sp. Def:</th>
                  <td className="p-0 col-3">50</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="text-end p-0 col-3">Speed:</th>
                  <td className="p-0 col-3">65</td>
                  <td className="p-0">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success m-0"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* TYPE */}
          <h5 className="text-center">Type: 🔥⚡🌿</h5>
          {/* EVOLUTION */}
          <div>
            <h5 className="text-center">Evolutions:</h5>
            <div className="d-flex justify-content-between">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                IMG
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                IMG
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                IMG
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* GENERAL INFO */}
      <div className="text-center m-3">
        <h2>Info general</h2>
        <p className="card-text">
          Charmander might look like a good Pokemon to use due to its movepool
          and access to Dragon Dance, but its power output is disappointing even
          with using Life Orb to get the most out of its attacks. It is
          outclassed by other Fire-types like Ponyta, Larvesta, and Magby due to
          their better Attack, Speed, and bulk.
        </p>
      </div>
      {/* TABLE OF MOVES */}
      <div className="moves">
        <h2 className="text-center">MOVES</h2>
        <table className="table table-bordered">
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
            <tr>
              <td>Move Name</td>
              <td>Move type</td>
              <td>Power</td>
              <td>Accuracy</td>
              <td>PP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonInfo;
