import React, { useContext, useEffect, useState } from "react";
import "../../styles/login.css";

const Login = () => {
  const [translate, setTranslate] = useState("message signup");

  function Rigth() {
    if (translate != "message signup") {
      () => setTranslate("message signup");
    } else {
      () => setTranslate("message2 login");
    }
  }

  return (
    <>
      <div className="container">
        <div className={translate}>
          <div className="btn-wrapper">
            <button
              className="button"
              id="signup"
              onClick={() => setTranslate("message signup")}
            >
              Sign Up
            </button>
            <button
              className="button"
              id="login"
              onClick={() => setTranslate("message2 login")}
            >
              {" "}
              Login
            </button>
          </div>
        </div>
        <div className="form form--signup border-0">
          <div className="form--heading">Welcome! Sign Up</div>
          <form autocomplete="off">
            <div class="form-group">
              <label class="form-control-label">USERNAME</label>
              <input type="text" class="form-control"></input>
            </div>
            <div class="form-group">
              <label class="form-control-label">PASSWORD</label>
              <input type="password" class="form-control" i></input>
            </div>
            <button className="button">Sign Up</button>
          </form>
        </div>
        <div className="form form--login">
          <div className="form--heading">Welcome back! </div>
          <form autocomplete="off">
          <div class="form-group">
              <label class="form-control-label">USERNAME</label>
              <input type="text" class="form-control"></input>
            </div>
            <div class="form-group">
              <label class="form-control-label">PASSWORD</label>
              <input type="text" class="form-control"></input>
            </div>
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
