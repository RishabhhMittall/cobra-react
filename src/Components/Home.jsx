import React from "react";
import "./Home.scss";
import changeImg from "../Components/utils/cover.jpg"

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
            <div>
              <input type="text" placeholder="  name@email.com" />
              <button>SignUp</button>
            </div>
          </div>
        </div>
        <div className="cover">
          <div>
            <img
              src={changeImg}
              alt="hello"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

