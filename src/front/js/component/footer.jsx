import React from "react";
import "../../styles/footerStyles.css";

export const Footer = () => (
  <footer className="text-center text-lg-start bg-white text-muted">
    {/* <!-- Section: Social media --> */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* <!-- Left --> */}
      <div className="me-5 d-none d-lg-block">
        <span>Otras redes sociales:</span>
      </div>
      {/* <!-- Left --> */}

      {/* <!-- Right --> */}
      <div>
        <a
          href="https://www.facebook.com/people/Pokeducator/100086980735465/"
          className="me-4 link-secondary"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.Twitter.com/pokeducator"
          className="me-4 link-secondary"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/invites/contact/?i=1egxiom6wtcbr&utm_content=prlkoed"
          className="me-4 link-secondary"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/CristiianGB/pokeducator"
          className="me-4 link-secondary"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      {/* <!-- Right --> */}
    </section>
    {/* <!-- Section: Social media --> */}

    {/* <!-- Section: Links  --> */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* <!-- Grid row --> */}
        <div className="row mt-3">
          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* <!-- Content --> */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3 text-secondary"></i>Pokeducator!
            </h6>
            <p>
              En Pokeducator podrás crear al mejor Pokémon en la{" "}
              <a className="links" href="/fusion">
                máquina de fusión
              </a>
              . Así como informarte sobra los métodos de{" "}
              <a className="links" href="/wiki/crianza-pokemon">
                crianza
              </a>{" "}
              en nuestra{" "}
              <a className="links" href="/wiki">
                wiki
              </a>
              . <br />
              Para mas información visita nuestra{" "}
              <a className="links" href="/info">
                página de información
              </a>
              .
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Funciones</h6>
            <p>
              <a href="/fusion" className="text-reset">
                Fusión!
              </a>
            </p>
            <p>
              <a href="/pokemons" className="text-reset">
                Pokédex
              </a>
            </p>
            <p>
              <a href="/wiki" className="text-reset">
                Wiki
              </a>
            </p>
            <p>
              <a href="/info" className="text-reset">
                Información
              </a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Personaliza</h6>
            <p>
              <a href="/perfil" className="text-reset">
                Perfil
              </a>
            </p>
            <p>
              <a href="/votacion" className="text-reset">
                Vota
              </a>
            </p>
            <p>
              <a href="/perfil/equipos" className="text-reset">
                Crea tu equipo
              </a>
            </p>
            <p>
              <a href="/registrar" className="text-reset">
                Regístrate
              </a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* <!-- Links --> */}
            <h6 className="text-uppercase fw-bold mb-4">Contacta</h6>
            <p>
              <i className="fas fa-home me-3 text-secondary"></i> Región de
              Kanto, Pueblo Paleta
            </p>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              pokeducator@gmail.com
            </p>

            <p>
              <a className="text-reset" href="/soporte">
                Ayuda
              </a>
            </p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
    </section>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> style={{width: "18px"}}*/}
    <div className="text-center p-4 footerCopy">
      © 2021 Copyright
    </div>
    {/* <!-- Copyright --> */}
  </footer>
);
