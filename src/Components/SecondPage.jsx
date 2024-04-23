import React from "react";
import "./secondpage.scss";
import changeImg from "../Components/utils/cover.jpg";
import { Button } from "@mui/material";

const SecondPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="first">
          <h1>Challenge-Engage-Achieve</h1>
          <h3>
            Experience seamless interaction and powerful capabilities , enabling
            seamless planning, collaboration, and progress tracking for your
            quizzes and contests, ensuring timely success.
          </h3>
        </div>
      </div>

      <div className="pallete">
        <div className="img-div">
          <div className="put-img-one"></div>
        </div>
        <div className="second-text">
          <button>Quiz Hosting</button>
          <h1>Test and Assess</h1>
          <h3>
            Dynamic quiz hosting platform. Engage participants seamlessly. Track
            progress effortlessly for successful outcomes.
          </h3>
        </div>
      </div>

      <div className="pallete">
        <div className="second-text-two">
          <button>Code Battle</button>
          <h1>Clash-Battle-Code</h1>
          <h3>
            Host exhilarating code competitions with dynamic challenges,
            real-time collaboration, and comprehensive progress tracking for an
            unparalleled coding experience.
          </h3>
        </div>
        <div className="img-div-two">
          <div className="put-img-two"></div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
