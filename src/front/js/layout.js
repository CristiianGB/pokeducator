import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { PokemonInfo } from "./pages/pokeducatorPokemonInfo.jsx";
import PokeducatorInfoGuarderia  from "./pages/pokeducatorWiki/pokeducatorInfoGuarderia.jsx";
import PokeducatorInfoCrianza from "./pages/pokeducatorWiki/pokeducatorInfoCrianza.jsx";
import PokeducatorInfoGenero from "./pages/pokeducatorWiki/pokeducatorInfoGenero.jsx";
import PokeducatorPokemons from "./pages/pokeducatorPokemons.jsx"
import injectContext from "./store/appContext.jsx";
import ScrollToTop from "./component/scrollToTop.jsx";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar/>
            <Routes>
              <Route element={<PokemonInfo />} path={"/pokemon/:theid"} />
              <Route element={<PokeducatorInfoGuarderia />} path="/wiki/guarderia-pokemon" />
              <Route element={<PokeducatorInfoCrianza />} path="/wiki/crianza-pokemon" />
              <Route element={<PokeducatorInfoGenero />} path="/wiki/genero-pokemon" />
              <Route element={<PokeducatorPokemons />} path="/pokemons" />
            </Routes>
          <Footer />
          </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
