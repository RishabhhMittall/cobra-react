import React from "react";
import "./secondpage.scss";
import changeImg from "../Components/utils/cover.jpg"
import { Button } from "@mui/material";

const SecondPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="first">
          <h1>Industry leading features</h1>
          <h3>
            With an intuitive interface and a comprehensive set of features,
            StreamlinePro allows you to plan, collaborate, and track progress on
            your projects, ensuring timely delivery and success.
          </h3>
        </div>
      </div>

      <div className="pallete">
        <div className="img-div">
          <div className="put-img-one"></div>
        </div>
        <div className="second-text">
          <button>Quiz Hosting</button>
          <h1>Execution and collaboration</h1>
          <h3>
            A platform for team members to collaborate, communicate, and
            seamlessly execute tasks, fostering efficient teamwork and ensuring
            smooth project progress.
          </h3>
        </div>
      </div>

      <div className="pallete">
        
        <div className="second-text-two">
          <button>Code Competition</button>
          <h1>Implementation and teamwork</h1>
          <h3>
          A platform for team members to collaborate, communicate, and seamlessly execute tasks, fostering efficient teamwork and ensuring smooth project progress.
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
