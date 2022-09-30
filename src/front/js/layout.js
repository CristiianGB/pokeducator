import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import  PokeducatorInfoGuarderia  from "./pages/pokeducatorWiki/pokeducatorInfoGuarderia.jsx";
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
              <Route element={<PokeducatorInfoGuarderia />} path="/" />
            </Routes>
          <Footer />
          </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
