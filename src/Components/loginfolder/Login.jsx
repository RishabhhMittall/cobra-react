import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const login = () => {
  return (
    <div className="gradient-bg">
      <div className="gradient-container">
        <div className="signin-left">
          <div className="sigin-head">
            <div className="signin-head-left">
              <img src={logo} alt="" />
              <Link to="/">COBRA</Link>
            </div>
            <div className="signin-head-right">
              <Link to="/Signin" style={{ textDecoration: "none" }}>
                <h2>Sign Up</h2>
              </Link>
            </div>
          </div>

          <div className="signin-form">
            <h2>Log In</h2>
            <form class="signup-form">
              {/* <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required /> */}
              <input
                className="login-mail"
                type="email"
                placeholder="Your email address"
                required
              />
              <input
                className="login-password"
                type="password"
                placeholder="Your password"
                required
              />
              <Link to= '/AfterLog' style={{ textDecoration: "none" }}>
              <button type="submit">Log In</button>
              </Link>
            </form>
          </div>
        </div>
        <div className="signin-right">
          <img
            src="	https://framerusercontent.com/images/zzsRkP9anIxe2zUrn2jSP5Zd0c.jpg?scale-down-to=1024&lossless=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default login;
