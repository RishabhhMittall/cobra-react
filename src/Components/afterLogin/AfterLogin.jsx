import image2 from "../utils/aesthetic-lapy-1.jpg";
import image3 from "../utils/dataset-close-blur.jpg";
import image4 from "../utils/wallpaper-man.jpg";
import image5 from "../utils/eat-sleep.jpg";
import { Link } from "react-router-dom";
import './AfterLogin.scss';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AfterLogin = () => {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <div className="content">
            <h1>Feel the Rush</h1>
            <h3>
              Experience the Venomous Rush of Real-Time Coding and Quizzing.
            </h3>
            <div>
              {/* <input type="text" placeholder="  name@email.com" /> */}
              
            </div>
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
  )
}

export default AfterLogin