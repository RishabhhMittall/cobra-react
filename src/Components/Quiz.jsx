import React from "react";
import "./Quiz.scss";
import quizimg from "../Components/utils/quiz.jpg";
import PlusButton from "./QuizPlusBut.jsx";
import Footer from "./Footer.jsx";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="quiz-main">
      <div className="main-container">
        <div className="quiz-content">
          <h1>QuiZone</h1>
          <h3>
            Dive Into a World of Knowledge and Fun with Our Engaging Quizzes!
          </h3>
        </div>
      </div>

      <div class="quiz-container">
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 1" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 1</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 1</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 2" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 2</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 2</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>

        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>
        <div class="quiz-card">
          <div class="quiz-image">
            <img src={quizimg} alt="Quiz 3" />
          </div>
          <div class="quiz-details">
            <h3>Quiz 3</h3>
            <div class="quiz-buttons">
              <button class="view-btn">View</button>
              <button class="participate-btn">Participate</button>
            </div>
          </div>
          <div class="quiz-details-hover">
            <h3>Quiz 3</h3>
            <p>Subtitle for quiz</p>
            <p>Details</p>
            <p>Date</p>
            <p>Time</p>
            <p>Organized by</p>
          </div>
        </div>

        <PlusButton />
      </div>

      <div className="quiz-footer">

        <div className="info">
          <div>
            <BusinessOutlinedIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>323 Rohini, New Delhi, India&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
          <div>
            <EmailIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>cobra_team@gmail.com</p>
          </div>
          <div className="phone">
            <LocalPhoneIcon
              sx={{
                fontSize: 40,
                color: "white",
                cursor: "pointer",
              }}
            />
            <p>7987987980</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="social">
          <p>
            Follow us on social media to keep up to date with the lates
            developments in the coding space.
          </p>
          <div className="soc-icons">
            <InstagramIcon style={{ cursor: "pointer" }} />
            <FacebookIcon style={{ cursor: "pointer" }} />
            <LinkedInIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
