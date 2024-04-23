import React, { useState } from "react";
import "./Signin.scss";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

const Signin = () => {

  const [ values , setValues] = useState({
    name:"" ,
    email: "",
    pass: "",
  });

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
              <Link to="/Login" style={{ textDecoration: 'none' }}>
              <h2>Log In</h2>
              </Link>
            </div>
          </div>

          <div className="signin-form">
            <h2>Sign Up</h2>
            <form class="signup-form">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
              <input className="signup-email" type="email" placeholder="Your email address" required />
              <input className="signup-password" type="password" placeholder="Your password" required />
              <button type="submit">Sign up</button>
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

export default Signin;
