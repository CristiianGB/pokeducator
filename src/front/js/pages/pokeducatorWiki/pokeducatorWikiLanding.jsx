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
        
           <div className="container align-items-center">
                <div className="row">
                <h1>heypokewiki</h1>
                </div>
            </div> 
        
            
        </>
      )}
    </>
  );
};
export default PokeducatorWikiLanding;
