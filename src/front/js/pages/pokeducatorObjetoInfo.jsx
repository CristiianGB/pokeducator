import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

const PokeducatorObjetoInfo = () => {
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
            src={store.single_item_data.sprites.front_default}
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
          <h5 className="text-center">{store.single_item_data.name}</h5>
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
    </div>
  );
};

export default PokeducatorObjetoInfo;
