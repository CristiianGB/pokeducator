import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetoInfoStyles.css";

const PokeducatorObjetoInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    if (!actions.itemFindOneInData(params.theid)) {
      actions.itemFindOne("https://pokeapi.co/api/v2/item/" + params.theid);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            className="img-fluid objetoimg"
            src={store.single_item_data.sprites?.default}
            alt={store.single_item_data.name}
          />
        </div>
        <div className="col-md-5">
          <h1>
            {store.single_item_data.names?.map((object) =>
              object.language?.name == "es" ? object.name : ""
            )}
          </h1>
          <p>{store.single_item_data.flavor_text_entries?.map((object) =>
              object.language?.name == "es"? object.text : ""
            )}</p>
        </div>
      </div>
    </div>
  );
};

export default PokeducatorObjetoInfo;
