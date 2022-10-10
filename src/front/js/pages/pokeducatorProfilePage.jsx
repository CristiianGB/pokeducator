import React, { useState, useEffect, useContext } from "react";

const PokeducatorProfilePage = () => {
  return (
    <div className="container text-center">
      <div className="AboutMe">
        <section id="container-about" className="container-about">
          <h1>About Me</h1>

          <img src="" width="180" height="180" alt="abtimg" />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
        </section>
      </div>
      <br />
      <br />

      <section id="skillheader" className="flex-project-container">
        <div>
          <img src="" width="100" height="100" alt="python" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="js" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="html" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="css" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="wordpress" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="mongodb" />
        </div>
        <div>
          <img src="" width="100" height="100" alt="db" />
        </div>
      </section>
      <br />
      <br />

      <section className="projects">
        <h1 id="Portfolio">Pokedex</h1>
        <p>Highest lvl</p>

        <div className="container">
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Pybot:Chat Based on NLP</p>
          </a>
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Drowsiness-monitoring-Using-OpenCV-Python</p>
          </a>
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Nigthmares FPS</p>
          </a>
        </div>

        <div className="container">
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Recorder Maintainer</p>
          </a>
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Wordpress Blog</p>
          </a>
          <a href="">
            <img src="" width="200" height="200" alt="Pybot" />
            <p>Password Cracker</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PokeducatorProfilePage;
