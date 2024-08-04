import React from "react";
import "./Home.scss";
import changeImg from "../Components/utils/cover.jpg";
import image1 from "../Components/utils/971.jpg";
import image2 from "../Components/utils/aesthetic-lapy-1.jpg";
// import image2 from "../Components/utils/man-with-laptop.png";
import image3 from "../Components/utils/dataset-close-blur.jpg";
import image4 from "../Components/utils/wallpaper-man.jpg";
import image5 from "../Components/utils/eat-sleep.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="content">
            <h1>Feel the Rush</h1>
            <h3>
              Experience the Venomous Rush of Real-Time Coding and Quizzing.
            </h3>
            {/* <div>
           
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <button className="login">Login</button>
              </Link>
              <Link to="/Signin" style={{ textDecoration: "none" }}>
                <button className="signup">SignUp</button>
              </Link> */}
            {/* </div> */}
          </div>
        </div>
        <div className="slider-frame">
          <div className="slide-img">
            <img
              style={{ height: "520px", width: "856px" }}
              src={image5}
              alt="Image 1"
            />

            <img
              style={{ height: "520px", width: "856px" }}
              src={image2}
              alt="Image 2"
            />

            <img
              style={{ height: "520px", width: "856px" }}
              src={image3}
              alt="Image 3"
            />

            <img
              style={{ height: "520px", width: "856px" }}
              src={image4}
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
