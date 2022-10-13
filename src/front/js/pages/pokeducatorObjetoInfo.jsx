import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/pokeducatorObjetoInfoStyles.css";

const PokeducatorObjetoInfo = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let arr = []
  arr = store.single_item_data.flavor_text_entries?.find(element => element.language?.name == "es") // arr es para encontrar el texto en español y find para que devuelva el primer elemento que encuentre
  

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
          <p>{arr?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PokeducatorObjetoInfo;
