import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import PokeducatorPokemonInfo from "./pages/pokeducatorPokemonInfo.jsx";
import PokeducatorInfoGuarderia from "./pages/pokeducatorWiki/pokeducatorInfoGuarderia.jsx";
import PokeducatorObjetos from "./pages/pokeducatorObjetos.jsx";
import PokeducatorInfoCrianza from "./pages/pokeducatorWiki/pokeducatorInfoCrianza.jsx";
import PokeducatorMovimientos from "./pages/pokeducatorMovimientos.jsx";
import PokeducatorInfoGruposHuevo from "./pages/pokeducatorWiki/pokeducatorInfoGruposHuevo.jsx";
import PokeducatorInfoGenero from "./pages/pokeducatorWiki/pokeducatorInfoGenero.jsx";
import PokeducatorObjetoInfo from "./pages/pokeducatorObjetoInfo.jsx"
import PokeducatorPokemons from "./pages/pokeducatorPokemons.jsx";
import PokeducatorLandingPage from "./pages/pokeducatorLandingPage.jsx";
import PokeducatorProfilePage from "./pages/pokeducatorProfilePage.jsx";
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
          <Navbar />
          <Routes>
            <Route element={<PokeducatorPokemonInfo />} path={"/pokemon/:theid"} />
            <Route element={<PokeducatorObjetoInfo />} path={"/objeto/:theid"} />
            <Route
              element={<PokeducatorInfoGuarderia />}
              path="/wiki/guarderia-pokemon"
            />
            <Route
              element={<PokeducatorInfoCrianza />}
              path="/wiki/crianza-pokemon"
            />
            <Route
              element={<PokeducatorInfoGenero />}
              path="/wiki/genero-pokemon"
            />
            <Route element={<PokeducatorPokemons />} path="/pokemons" />
            <Route element={<PokeducatorObjetos />} path="/objetos" />
            <Route element={<PokeducatorMovimientos />} path="/movimientos" />
            <Route
              element={<PokeducatorInfoGruposHuevo />}
              path="/wiki/grupos-huevo"
            />
            <Route element={<PokeducatorLandingPage />} path="/" />
            <Route element={<PokeducatorProfilePage />} path="/perfil" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
