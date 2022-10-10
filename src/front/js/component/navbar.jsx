import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo_pokeducator.png";
import "../../styles/navbarStyles.css";

export const Navbar = () => {
  const [dorpdownVisible, setDropdownVisible] = useState(false);

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
              <a className="nav-link" href="#">
                Fusión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pokemons">
                Pokémon
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
            <li onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            className="nav-item position-relative">
              <Link
                className="nav-link dropdown-toggle"
                to="/wiki"
              >
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
                    <Link className="dropdown-item" to="/wiki/guarderia-pokemon">
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
                  
                </ul>
              ) : null}
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}

        {/* <!-- Right elements --> */}
        <div className="d-flex align-items-center">
          {/* <!-- Icon --> */}
          {/* <!-- Notifications --> */}
          <div className="dropdown dropdown-toggle">
            <a
              className="text-reset me-3  hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Some news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another news
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Avatar --> */}
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
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
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
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper -->  */}
    </nav>
  );
};
