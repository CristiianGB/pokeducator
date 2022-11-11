import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_pokeducator.png";
import "../../styles/navbarStyles.css";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [dorpdownVisible, setDropdownVisible] = useState(false);
  const [dorpdownVisible2, setDropdownVisible2] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <!-- Container wrapper --> */}
      <div className="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img className="logo" src={logo} alt="Pokeducator Logo" />
          </a>
          {/* <!-- Left links --> */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/fusion">
                Fusión
              </a>
            </li>
            <li
              onMouseEnter={() => setDropdownVisible2(true)}
              onMouseLeave={() => setDropdownVisible2(false)}
              className="nav-item position-relative"
            >
              <Link className="nav-link dropdown-toggle" to="/pokemons">
                Pokémon
              </Link>
              {dorpdownVisible2 ? (
                <ul className="position-absolute desplegable_wiki">
                  <li>
                    <Link className="dropdown-item" to="/fusiones">
                      Fusiones Pokémon
                    </Link>
                  </li>
                  </ul>
              ) : null}</li>
            <li className="nav-item">
              <a className="nav-link" href="/habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movimientos">
                Movimientos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/objetos">
                Objetos
              </a>
            </li>
            <li
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              className="nav-item position-relative"
            >
              <Link className="nav-link dropdown-toggle" to="/wiki">
                Wiki
              </Link>
              {dorpdownVisible ? (
                <ul className="position-absolute desplegable_wiki">
                  <li>
                    <Link className="dropdown-item" to="/wiki/crianza-pokemon">
                      Crianza Pokémon
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/wiki/guarderia-pokemon"
                    >
                      Guardería Pokémon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/wiki/genero-pokemon">
                      Género Pokémon
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/wiki/grupos-huevo">
                      Grupo Huevo
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/wiki/naturaleza-pokemon"
                    >
                      Naturaleza Pokémon
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/wiki/juegos-pokemon">
                      Juegos Pokémon
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item mb-2"
                      to="/wiki/series-pokemon"
                    >
                      Series Pokémon
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>
        </div>
        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
          {/* <!-- Icon --> */}
          {/* <!-- Avatar --> */}
          {localStorage.token ? (
            <div className="dropdown ms-2">
              <a
                className="dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://www.teleadhesivo.com/es/img/pokgo03-png/folder/products-detalle-png/pegatinas-coches-motos-poke-ball---pokemon.png" //imagen perfil
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="/perfil">
                    Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/soporte">
                    Soporte
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => logOut()}
                    href="/"
                  >
                    Cerrar Sesión
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <a href="/login">
              <button className="buttonPokemonInfoNavbar my-1">
                Iniciar Sesión
              </button>
            </a>
          )}
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper -->  */}
    </nav>
  );
};
