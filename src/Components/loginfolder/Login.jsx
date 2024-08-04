import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/logo.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/v1/signIn", {
        email,
        password,
      });
      // Handle successful login
      console.log(response.data); // Log the response from the server
      if (response) {
        Navigate("/AfterLog");
      } else {
        <h6>Invalid Email or Password</h6>;
      }
      // Redirect user to dashboard or another page
    } catch (error) {
      setError("Invalid email or password"); // Set error message
      console.error("Login error:", error);
    }
  };

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
            <form onSubmit={handleLogin} className="login-form">
              <input
                className="login-mail"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="login-password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Log In</button>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
        <div className="signin-right">
          <img
            src="https://framerusercontent.com/images/zzsRkP9anIxe2zUrn2jSP5Zd0c.jpg?scale-down-to=1024&lossless=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
