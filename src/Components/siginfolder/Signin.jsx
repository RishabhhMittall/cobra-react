import React, { useState } from "react";
import "./Signin.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/logo.png";
import axios from "axios";

const Signin = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/signUp/",
        values
      );
      console.log(response.data); // Log the response from the server
      // Reset form values after successful signup
      setValues({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error);
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
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <h2>Log In</h2>
              </Link>
            </div>
          </div>

          <div className="signin-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={values.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={values.password}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign up</button>
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

export default Signin;
